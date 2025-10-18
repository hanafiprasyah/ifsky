import { supabaseServer } from "@/lib/supabase-server";
import { sanitizeHtml } from "@/lib/sanitize-html";

// Feature flag: aktifkan verifikasi Turnstile hanya jika diinginkan
const SHOULD_VERIFY_TURNSTILE = process.env.TURNSTILE_ENABLED === "true";

// ---- Helpers ----
async function sha256Hex(input) {
  if (!input) return null;
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input)
  );
  return Array.from(new Uint8Array(buf))
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}
async function ipHash(ip) {
  return await sha256Hex(ip || "");
}
function plainTextFromHtml(html) {
  return String(html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// --- Profanity Guard (ID + EN) ---
function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const BAD_WORDS_ID = [
  // Indonesia (ringkas; bisa ditambah sesuai kebutuhan)
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

// Boundary-aware checker tanpa lookbehind (kompatibel Node)
function hasProfanity(text) {
  if (!text) return false;
  const t = String(text).toLowerCase();
  for (const w of BAD_WORDS) {
    const re = new RegExp(
      `(?:^|[^\\\p{L}\\\p{N}_])${escapeRegExp(w)}(?:$|[^\\\p{L}\\\p{N}_])`,
      "iu"
    );
    if (re.test(t)) return true;
  }
  return false;
}

async function verifyTurnstile(token, ip) {
  if (!SHOULD_VERIFY_TURNSTILE) return true; // sementara BYPASS sesuai flag
  if (!token) return false;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
          remoteip: ip || "",
        }),
        cache: "no-store",
      }
    );
    const data = await res.json();
    return !!data?.success;
  } catch {
    return false;
  }
}

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "";
    const {
      submission_id,
      content_html,
      content_delta = null,
      content_text = "",
      website, // honeypot: harus kosong
      formStartedAt, // guard minimal waktu isi
      turnstileToken,
    } = (await req.json()) || {};

    // 0) Honeypot
    if (website) {
      return Response.json({ error: "Rejected" }, { status: 400 });
    }

    // 1) Time-guard (min 2 detik)
    const started = Number(formStartedAt);
    const elapsed = Date.now() - (isNaN(started) ? 0 : started);
    if (!started || isNaN(started) || elapsed < 2000) {
      return Response.json({ error: "Too fast" }, { status: 400 });
    }

    // 2) Validasi dasar
    if (!submission_id) {
      return Response.json({ error: "submission_id wajib" }, { status: 400 });
    }
    if (!content_html || String(content_html).length > 8000) {
      return Response.json(
        { error: "Konten kosong/terlalu panjang" },
        { status: 400 }
      );
    }

    // 3) (Opsional) Verifikasi Turnstile (bypass bila flag OFF)
    const ok = await verifyTurnstile(turnstileToken, ip);
    if (!ok) {
      return Response.json({ error: "Verifikasi gagal" }, { status: 400 });
    }

    // 4) Rate limit: maks 10 messages / jam / IP
    const ip_hash = await ipHash(ip);
    const supabase = supabaseServer();
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count: msgCount, error: eCount } = await supabase
      .from("messages")
      .select("id", { count: "exact", head: true })
      .gte("created_at", since)
      .eq("ip_hash", ip_hash);
    if (eCount) throw eCount;
    if ((msgCount || 0) >= 10) {
      return Response.json({ error: "Rate limited" }, { status: 429 });
    }

    // 5) Pastikan submission ada
    const { data: sub, error: e1 } = await supabase
      .from("submissions")
      .select("id")
      .eq("id", submission_id)
      .single();
    if (e1 || !sub) {
      return Response.json(
        { error: "Submission tidak ditemukan" },
        { status: 404 }
      );
    }

    // 6) Sanitasi & validasi teks polos minimal
    const safeHtml = sanitizeHtml(content_html);
    const plain = plainTextFromHtml(safeHtml);
    if (!plain) {
      return Response.json({ error: "Konten kosong" }, { status: 400 });
    }
    // 6b) Profanity guard
    if (hasProfanity(plain)) {
      return Response.json(
        {
          error:
            "Teks mengandung kata tidak pantas. Mohon perbaiki kata-katanya.",
        },
        { status: 400 }
      );
    }

    // 7) Insert
    const { error: e2 } = await supabase.from("messages").insert({
      submission_id,
      content_html: safeHtml,
      content_delta,
      content_text: plain.slice(0, 8000),
      status: "published",
      ip_hash,
    });
    if (e2) throw e2;

    return Response.json({ ok: true }, { status: 201 });
  } catch (e) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
