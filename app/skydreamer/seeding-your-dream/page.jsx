"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
// import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const STORAGE_KEY_ID = "ifsky_submission_id";
const STORAGE_KEY_STARTED = "ifsky_form_started_at";
const STORAGE_KEY_TOKEN = "ifsky_client_token";

function genClientToken() {
  const arr = new Uint8Array(16);
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(arr);
  } else {
    for (let i = 0; i < arr.length; i++)
      arr[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function stripHtml(html) {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || div.innerText || "").trim();
}

// --- Profanity Guard (ID + EN) ---
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const BAD_WORDS_ID = [
  // Indonesia (ringkas; tambahkan sesuai kebutuhan)
  "anjing",
  "asu",
  "bangsat",
  "babi",
  "tai",
  "kontol",
  "memek",
  "goblok",
  "tolol",
  "brengsek",
  "keparat",
  "kampret",
  "idiot",
];
const BAD_WORDS_EN = [
  // Inggris (umum)
  "fuck",
  "shit",
  "bitch",
  "bastard",
  "asshole",
  "dick",
  "pussy",
  "idiot",
  "moron",
];
const BAD_WORDS = Array.from(new Set([...BAD_WORDS_ID, ...BAD_WORDS_EN]));
// Unicode-safe word boundary: bukan huruf/angka/_ di kiri/kanan
const PROFANITY_RE = new RegExp(
  `(?<![\\\p{L}\\\p{N}_])(${BAD_WORDS.map(escapeRegExp).join(
    "|"
  )})(?![\\\p{L}\\\p{N}_])`,
  "iu"
);
function hasProfanity(text) {
  if (!text) return false;
  return PROFANITY_RE.test(text);
}

export default function GuestbookPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Step 1 state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [website, setWebsite] = useState(""); // honeypot
  const [startedAt, setStartedAt] = useState(Date.now());
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState("");

  // Step 2 state
  const [editorHtml, setEditorHtml] = useState("");
  const [editorDelta, setEditorDelta] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState("");
  const quillRef = useRef(null);

  useEffect(() => {
    // Restore session if exists
    const sid = sessionStorage.getItem(STORAGE_KEY_ID);
    if (sid) setStep(2);

    const started = sessionStorage.getItem(STORAGE_KEY_STARTED);
    if (started) setStartedAt(Number(started));
    else sessionStorage.setItem(STORAGE_KEY_STARTED, String(startedAt));

    // ensure idempotency token exists for Step-1
    if (!sessionStorage.getItem(STORAGE_KEY_TOKEN)) {
      sessionStorage.setItem(STORAGE_KEY_TOKEN, genClientToken());
    }
  }, []);

  const toolbar = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
      ],
    }),
    []
  );

  async function handleSubmitStep1(e) {
    e.preventDefault();
    setError1("");

    if (website) {
      setError1("Terjadi kesalahan.");
      return;
    } // honeypot trip
    if (!name || name.trim().length < 2) {
      setError1("Nama wajib diisi");
      return;
    }

    try {
      setLoading1(true);
      const res = await fetch("/api/submit-profile", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone || null,
          email: email || null,
          consent,
          utm: {},
          client_token: sessionStorage.getItem(STORAGE_KEY_TOKEN),
          website: website || "",
          formStartedAt:
            sessionStorage.getItem(STORAGE_KEY_STARTED) || Date.now(),
          turnstileToken: "", // sementara kosong; verifikasi di server di-bypass via FLAG
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError1(data?.error || "Gagal menyimpan. Coba lagi.");
        return;
      }

      const submission_id = data?.submission_id;
      if (submission_id) {
        sessionStorage.setItem(STORAGE_KEY_ID, submission_id);
        setStep(2);
      } else {
        setError1("Gagal mendapatkan ID pengajuan");
      }
    } catch (e) {
      setError1("Koneksi bermasalah. Coba lagi.");
    } finally {
      setLoading1(false);
    }
  }

  async function handleSubmitStep2(e) {
    e.preventDefault();
    setError2("");

    const submission_id = sessionStorage.getItem(STORAGE_KEY_ID);
    if (!submission_id) {
      setError2("Sesi tidak ditemukan. Mohon isi data diri dulu.");
      setStep(1);
      return;
    }

    const content_html = editorHtml;
    const content_text = stripHtml(editorHtml).slice(0, 8000);

    if (!content_text) {
      setError2("Kesan & pesan masih kosong.");
      return;
    }

    // Profanity filter (client-side). Server will re-check as well.
    if (hasProfanity(content_text)) {
      setError2(
        "Teks mengandung kata tidak pantas. Mohon perbaiki kata-katanya."
      );
      return;
    }

    try {
      setLoading2(true);
      const res = await fetch("/api/submit-message", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          submission_id,
          content_html,
          content_delta: editorDelta,
          content_text,
          website: "",
          formStartedAt:
            sessionStorage.getItem(STORAGE_KEY_STARTED) || Date.now(),
          turnstileToken: "",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError2(data?.error || "Gagal menyimpan pesan. Coba lagi.");
        return;
      }

      // Berhasil → bersihkan & redirect ke homepage
      sessionStorage.removeItem(STORAGE_KEY_ID);
      sessionStorage.removeItem(STORAGE_KEY_STARTED);
      // sessionStorage.removeItem(STORAGE_KEY_PROFILE_SNAPSHOT);
      sessionStorage.removeItem(STORAGE_KEY_TOKEN); // ← PENTING
      setEditorHtml("");
      setEditorDelta(null);
      // Info kecil sebelum redirect (opsional)
      setTimeout(() => router.push("/skydreamer"), 250);
    } catch (e) {
      setError2("Koneksi bermasalah. Coba lagi.");
    } finally {
      setLoading2(false);
    }
  }

  return (
    <main className="min-h-[80vh] mx-auto max-w-2xl px-4 py-10 text-neutral-700 ">
      <h1 className="text-2xl font-semibold mb-6 text-neutral-800 ">
        Isi mimpimu pada angkasa IFSKY
      </h1>

      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 1 ? "bg-sky-500" : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 2 ? "bg-sky-500" : "bg-gray-200"
          }`}
        ></div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <form onSubmit={handleSubmitStep1} className="space-y-6">
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex="-1"
            style={{ display: "none" }}
          />
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700">
              Nama Lengkap
            </label>
            <input
              className="w-full text-sm rounded-xl border p-3"
              placeholder="Nama akan ditampilkan pada awan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700">
              Nomor WA/HP
            </label>
            <input
              className="w-full text-sm rounded-xl border p-3"
              placeholder="Pakai nomor WA dan telpon yang aktif"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700 ">
              Email
            </label>
            <input
              type="email"
              className="w-full text-sm rounded-xl border p-3"
              placeholder="Email tidak akan disebar"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="off"
            tabIndex="-1"
            style={{ display: "none" }}
          />

          <button
            type="submit"
            disabled={loading1}
            className="w-full rounded-xl mt-4 cursor-pointer duration-300 ease-in-out transition-all bg-sky-600 text-white py-3 font-medium hover:bg-sky-700 disabled:opacity-60"
          >
            {loading1 ? "Menyimpan…" : "Lanjutkan mimpimu"}
          </button>

          {error1 && <p className="text-red-600 text-sm">{error1}</p>}
        </form>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <form onSubmit={handleSubmitStep2} className="space-y-4">
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex="-1"
            style={{ display: "none" }}
          />
          <div>
            <label className="block text-lg font-medium mb-2 text-neutral-700 ">
              Apa yang sedang kamu mimpikan? Ketik dan ceritakan ke awan..
            </label>
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={editorHtml}
              onChange={(html, delta, source, editor) => {
                setEditorHtml(html);
                try {
                  setEditorDelta(editor.getContents());
                } catch {}
              }}
              modules={toolbar}
              className="bg-white mt-4 rounded-xl"
            />
            <p className="text-sm text-neutral-600 mt-4">
              Tips: Jangan gunakan kata kasar ya 🙏
            </p>
          </div>
          <div className="flex mt-12 items-center gap-8">
            <button
              class="pe-3 group inline-flex cursor-pointer transition-all duration-300 ease-in-out items-center gap-x-2 text-start text-sm text-gray-800 rounded-full hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 "
              href="#"
              type="button"
              onClick={() => setStep(1)}
            >
              <span class="shrink-0 size-9 inline-flex justify-center transition-all duration-300 ease-in-out items-center bg-gray-100 rounded-full group-hover:bg-gray-200 group-focus:bg-gray-200 ">
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
              </span>
              Kembali
            </button>
            <button
              type="submit"
              disabled={loading2}
              className="rounded-lg cursor-pointer duration-300 ease-in-out transition-all bg-sky-600 text-white px-5 py-2 font-medium hover:bg-sky-700 disabled:opacity-60"
            >
              {loading2 ? "Mengirim…" : "Kirim ke awan"}
            </button>
          </div>
          {error2 && <p className="text-red-600 text-sm">{error2}</p>}
        </form>
      )}
    </main>
  );
}
