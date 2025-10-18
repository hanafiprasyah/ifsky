"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate } from "motion";
import { motion } from "motion/react";

// --- Text helpers for dynamic cloud sizing ---
function stripHtmlToText(html) {
  const s = String(html || "");
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

let __measureCanvas;
function measureTextPx(text, font) {
  const t = String(text || "");
  if (typeof window === "undefined" || typeof document === "undefined") {
    // SSR-safe fallback estimate (~7px per char for 13–14px font)
    return t.length * 7;
  }
  if (!__measureCanvas) __measureCanvas = document.createElement("canvas");
  const ctx = __measureCanvas.getContext("2d");
  ctx.font = font || "500 14px Inter, ui-sans-serif, system-ui, -apple-system";
  const m = ctx.measureText(t);
  return m.width;
}

function ellipsizeToWidth(text, maxPx, font) {
  let raw = String(text || "").trim();
  if (!raw) return "";
  // If fits, return as-is
  if (measureTextPx(raw, font) <= maxPx) return raw;
  // Binary search the longest prefix that fits when suffixed with ellipsis
  let lo = 0,
    hi = raw.length,
    best = "";
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const cand = raw.slice(0, mid) + "…";
    if (measureTextPx(cand, font) <= maxPx) {
      best = cand;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best || "…";
}

function seededRandom(seedStr) {
  // simple xorshift32 from string seed
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  // convert to 0..1
  return () => (h = (h ^ (h >>> 15)) >>> 0) / 4294967295;
}

function CloudItem({
  msg,
  index,
  rowHeight = 160,
  onOpen,
  weather = "sedang",
}) {
  const ref = useRef(null);
  const driftRef = useRef(null); // horizontal wind drift
  const bobRef = useRef(null); // vertical bob + micro tilt
  const rand = useMemo(() => seededRandom(msg.id), [msg.id]);
  const gradId = useMemo(() => `ifsky-cloud-grad-${msg.id}`, [msg.id]);

  // Horizontal lane based on seed; vertical derived from index
  // Zig-zag lanes: even rows use 15–45%, odd rows use 55–85%
  const left = useMemo(() => {
    const SLOTS = 4; // jumlah kolom
    const GAP = 4; // % jarak antar kolom
    const PAD = 6; // % padding kiri-kanan
    const BAND = 100 - PAD * 2 - GAP * (SLOTS - 1);
    const SLOT_W = BAND / SLOTS;

    // Pilih slot berdasarkan index agar terdistribusi,
    // penambahan jitter kecil dari seed agar tidak kaku.
    const slot = index % SLOTS;
    const jitter = rand() * (SLOT_W * 0.4); // ~40% lebar slot
    return PAD + slot * (SLOT_W + GAP) + jitter; // hasil dalam persen
  }, [index, rand]);
  const bottom = useMemo(() => 48 + index * rowHeight, [index, rowHeight]);
  const scale = useMemo(() => 0.85 + rand() * 0.6, [rand]);
  const rotate = useMemo(() => -4 + rand() * 8, [rand]);

  // Derive plain text from HTML and compute dynamic cloud size
  const plain = useMemo(
    () => stripHtmlToText(msg?.content_html || msg?.message || ""),
    [msg?.content_html, msg?.message]
  );
  const fontStr = "600 13px Inter, ui-sans-serif, system-ui, -apple-system";
  const BASE_W = 180; // px, original asset width
  const BASE_H = 110; // px, original asset height
  const RATIO = BASE_H / BASE_W;
  const MAX_W = 320; // clamp to avoid oversized clouds
  const MIN_W = 150;
  const PADDING_X = 44; // left+right padding inside cloud for text

  // Two-line (clamped) display; width derived from full text, not pre-ellipsized
  const displayText = useMemo(() => plain, [plain]);

  const textPx = useMemo(() => measureTextPx(plain, fontStr), [plain]);
  const idealW0 = useMemo(
    () => Math.ceil(Math.max(BASE_W, textPx + PADDING_X)),
    [textPx]
  );
  const cloudW0 = useMemo(
    () => Math.min(MAX_W, Math.max(MIN_W, idealW0)),
    [idealW0]
  );
  const linesCount = useMemo(
    () => (textPx <= cloudW0 - PADDING_X ? 1 : 2),
    [textPx, cloudW0]
  );
  const cloudW = useMemo(
    () =>
      linesCount === 1
        ? cloudW0
        : Math.min(MAX_W, Math.max(cloudW0, Math.round(cloudW0 * 1.08))),
    [cloudW0, linesCount]
  );
  const cloudH = useMemo(
    () => Math.round(cloudW * RATIO * (linesCount === 2 ? 1.1 : 1)),
    [cloudW, linesCount]
  );
  const shadowW = Math.round(cloudW * 0.66);
  const shadowH = Math.max(18, Math.round(shadowW * 0.18));
  const textOffsetY = useMemo(
    () => Math.min(24, Math.max(2, Math.round(cloudH * 0.085))),
    [cloudH]
  );

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Helper to pick a value in range using the seeded RNG
    const pick = (min, max) => min + rand() * (max - min);

    // Weather presets
    let ampY, ampX, wiggle, durX, durY;
    switch (weather) {
      case "tenang":
        ampY = pick(3, 6); // lebih kalem (px)
        ampX = pick(8, 14); // hembusan pelan (px)
        wiggle = pick(0.2, 0.6); // derajat
        durX = pick(24, 36); // lebih panjang = lebih lembut (s)
        durY = pick(10, 14);
        break;
      case "berangin":
        ampY = pick(10, 16); // bobbing lebih besar
        ampX = pick(24, 40); // drift lebih jauh
        wiggle = pick(1.2, 2.2);
        durX = pick(12, 18); // tempo lebih cepat
        durY = pick(6, 9);
        break;
      case "sedang":
      default:
        ampY = pick(6, 10);
        ampX = pick(14, 24);
        wiggle = pick(0.6, 1.4);
        durX = pick(18, 28);
        durY = pick(8, 12);
        break;
    }

    const controls = [];

    if (driftRef.current) {
      controls.push(
        animate(
          driftRef.current,
          { x: [-ampX * 0.35, ampX, -ampX, ampX * 0.25, 0] },
          {
            duration: durX,
            easing: "ease-in-out",
            repeat: Infinity,
            delay: rand() * 2,
          }
        )
      );
    }

    if (bobRef.current) {
      controls.push(
        animate(
          bobRef.current,
          {
            y: [-ampY, 0, ampY, 0, -ampY],
            rotate: [-wiggle, 0, wiggle, 0, -wiggle],
          },
          {
            duration: durY,
            easing: "ease-in-out",
            repeat: Infinity,
            delay: rand() * 1.5,
          }
        )
      );
    }

    return () => controls.forEach((c) => c?.cancel?.());
  }, [rand, weather]);

  return (
    <button
      ref={ref}
      aria-label={`Buka pesan dari ${msg.name || "Pengirim"}`}
      onClick={() => onOpen?.(msg)}
      className="absolute focus:outline-none group cursor-pointer transition-all duration-300 ease-in-out"
      style={{
        left: `${left}%`,
        bottom: `${bottom}px`,
        transform: `rotate(${rotate}deg) scale(${scale})`,
      }}
    >
      {/* Cloud visual (PNG) with dynamic size */}
      <span
        ref={driftRef}
        className="block will-change-transform relative"
        style={{ width: cloudW }}
      >
        {/* ground shadow moves with wind (x) but not bob (y) */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 -bottom-1 -translate-x-1/2 rounded-full blur-md opacity-20"
          style={{
            width: `${shadowW}px`,
            height: `${shadowH}px`,
            background:
              "radial-gradient(closest-side, rgba(14,165,233,.35), transparent 70%)",
          }}
        />
        <span
          ref={bobRef}
          className="relative block will-change-transform"
          style={{ height: cloudH }}
        >
          <svg
            width={cloudW}
            height={cloudH}
            viewBox="0 0 155 97"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="select-none pointer-events-none relative w-full h-auto drop-shadow-md transition-all group-hover:scale-105 group-hover:drop-shadow-xl"
          >
            <defs>
              <linearGradient
                id={gradId}
                x1="77.5"
                y1="3"
                x2="77.5"
                y2="94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#19458B" />
                <stop offset="1" stopColor="#5685D8" />
              </linearGradient>
            </defs>
            <path
              d="M35.975 94H85.05H130.35C143.156 92.1595 153 80.8293 153 67.4583C153 53.8811 142.85 42.6843 129.755 41.107C126.239 19.4937 107.563 3 85.05 3C67.7741 3 52.7569 12.7135 45.1166 26.9997C42.208 26.1853 39.1421 25.75 35.975 25.75C17.2111 25.75 2 41.0281 2 59.875C2 78.7219 17.2111 94 35.975 94Z"
              fill={`url(#${gradId})`}
            />
          </svg>
          {/* Overlay text (multi-line clamp, centered) */}
          <span
            className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center"
            style={{ transform: `translateY(${textOffsetY}px)` }}
          >
            <span
              className="whitespace-normal line-clamp-2 overflow-hidden text-[13px] sm:text-[14px] leading-[1.35] font-medium text-white/95 dark:text-sky-50/95 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]"
              style={{
                width: cloudW - 16,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {displayText}
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}

function CloudModal({ open, onClose, msg }) {
  // Respect prefers-reduced-motion for modal animation
  const [reduced, setReduced] = useState(false);
  // Weather mood: "tenang" | "sedang" | "berangin"
  const [weather, setWeather] = useState("sedang");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  if (!open) return null;
  return (
    <div
      id="hs-pro-pycdcdm"
      className="fixed inset-0 z-50 overflow-y-auto bg-sky-950/40 backdrop-blur-sm"
      role="dialog"
      onClick={onClose}
      tabIndex={-1}
      aria-labelledby="hs-pro-pycdcdm-label"
    >
      <div className="mt-7 opacity-100 duration-300 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduced ? 0 : 0.28, ease: "easeOut" }}
          className="relative w-full max-h-full overflow-hidden flex flex-col rounded-xl pointer-events-auto ring-1 ring-sky-100/60 dark:ring-sky-500/10 bg-gradient-to-b from-sky-50 via-white to-sky-50 dark:from-[#0b1220] dark:via-[#0a1020] dark:to-[#0b1220]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(14,165,233,0.15),transparent_60%)]"
          />
          {/* Header */}
          <div className="relative z-10 py-4 px-12 text-center flex justify-center items-center bg-gradient-to-r from-sky-600 via-cyan-500 to-indigo-600 text-white">
            <h3
              id="hs-pro-pycdcdm-label"
              className="font-semibold tracking-wide text-white drop-shadow-sm"
            >
              Mimpi dari {msg?.name || "Pengirim"}
            </h3>
            <div
              className="absolute top-3 end-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="size-8 shrink-0 flex justify-center cursor-pointer transition-all duration-200 ease-in-out items-center gap-x-2 rounded-full border border-sky-100/30 bg-white/10 text-sky-100 hover:bg-white/20 hover:text-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
                aria-label="Close"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* End Header */}
          {/* Accent separator under header */}
          <div className="relative z-10">
            <div className="h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent" />
            <div className="h-0.5 -mt-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-sm" />
          </div>
          {/* Body */}
          <div className="relative z-10 p-5 sm:p-10 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-sky-50 [&::-webkit-scrollbar-thumb]:bg-sky-200 dark:[&::-webkit-scrollbar-track]:bg-[#0a1424] dark:[&::-webkit-scrollbar-thumb]:bg-sky-900/60">
            <div className="max-w-xl mx-auto">
              <div
                className="prose prose-sm max-w-none mt-0"
                dangerouslySetInnerHTML={{ __html: msg?.content_html || "" }}
              />
            </div>
          </div>
          {/* End Body */}
        </motion.div>
      </div>
    </div>
  );
}

export default function SkydreamerScene() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);
  const [lockBottom, setLockBottom] = useState(true); // auto-stick
  // Weather mood: "tenang" | "sedang" | "berangin"
  const [weather, setWeather] = useState("sedang");
  const ROW = 120;

  // Respect prefers-reduced-motion (disable glow & sparkles)
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    let abort = false;
    async function load() {
      try {
        const res = await fetch("/api/messages?limit=120", {
          cache: "no-store",
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Gagal memuat");
        if (!abort) {
          setMessages(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      } catch (e) {
        if (!abort) {
          setError("Tidak bisa memuat pesan");
          setLoading(false);
        }
      }
    }
    load();
    const t = setInterval(load, 60_000); // refresh tiap menit

    return () => {
      abort = true;
      clearInterval(t);
    };
  }, []);

  // Scroll ke bawah saat pertama kali load, atau saat dekat bawah dan ada pesan baru
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 120;
    if (loading) return;
    if (lockBottom || nearBottom) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages.length, loading, lockBottom]);

  // Handler untuk mengetahui apakah user sedang di bawah
  function onScroll() {
    const el = containerRef.current;
    if (!el) return;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 120;
    setLockBottom(nearBottom);
  }

  const skyHeight = Math.max(ROW * (messages.length + 2), 800);

  return (
    <main className="min-h-[80vh]">
      <section
        ref={containerRef}
        onScroll={onScroll}
        className="relative h-[85vh] overflow-y-auto overscroll-contain bg-gradient-to-b from-sky-100 to-white"
      >
        {/* Weather toggle */}
        <div className="sticky top-0 z-30 px-4 pt-3 pointer-events-none">
          <div className="ml-auto w-fit pointer-events-auto flex items-center gap-2">
            <div className="inline-flex rounded-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 ring-1 ring-sky-200 shadow-sm dark:bg-[#0b1220]/70 dark:ring-sky-900">
              <button
                type="button"
                aria-pressed={weather === "tenang"}
                onClick={() => setWeather("tenang")}
                className={`px-3 py-1.5 text-xs font-medium cursor-pointer duration-300 ease-in-out rounded-full transition ${
                  weather === "tenang"
                    ? "bg-sky-600 text-white shadow"
                    : "text-sky-700 hover:bg-sky-100 dark:text-sky-200/90 dark:hover:bg-white/10"
                }`}
              >
                Tenang
              </button>
              <button
                type="button"
                aria-pressed={weather === "sedang"}
                onClick={() => setWeather("sedang")}
                className={`px-3 py-1.5 text-xs font-medium cursor-pointer duration-300 ease-in-out rounded-full transition ${
                  weather === "sedang"
                    ? "bg-sky-600 text-white shadow"
                    : "text-sky-700 hover:bg-sky-100 dark:text-sky-200/90 dark:hover:bg-white/10"
                }`}
              >
                Sedang
              </button>
              <button
                type="button"
                aria-pressed={weather === "berangin"}
                onClick={() => setWeather("berangin")}
                className={`px-3 py-1.5 text-xs font-medium cursor-pointer duration-300 ease-in-out rounded-full transition ${
                  weather === "berangin"
                    ? "bg-sky-600 text-white shadow"
                    : "text-sky-700 hover:bg-sky-100 dark:text-sky-200/90 dark:hover:bg-white/10"
                }`}
              >
                Berangin
              </button>
            </div>

            {/* Reduced motion notice */}
            <span
              className={`text-[11px] px-2 py-1 rounded-md ring-1 ring-sky-200/60 bg-white/70 backdrop-blur dark:bg-[#0b1220]/70 dark:ring-sky-900 ${
                reduced ? "opacity-100" : "opacity-0"
              } transition`}
            >
              Motion off
            </span>
          </div>
        </div>
        {/* Cloud field */}
        <div className="relative" style={{ height: `${skyHeight}px` }}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500">
              Memuat awan…
            </div>
          )}
          {!loading && messages.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500">
              Belum ada pesan.
            </div>
          )}
          {/* Newest at bottom (index 0) → older higher */}
          {messages.map((m, i) => (
            <CloudItem
              key={m.id}
              msg={m}
              index={i}
              rowHeight={ROW}
              onOpen={setActive}
              weather={weather}
            />
          ))}
        </div>

        {/* Ground gradient */}
        <div className="pointer-events-none sticky bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />

        {/* Floating Action Button inside scrollable sky */}
        <div className="sticky bottom-4 sm:bottom-6 z-30 pointer-events-none px-4 pe-4">
          <div className="flex justify-end">
            <a
              href="/skydreamer/seeding-your-dream/"
              aria-label="Mulai menulis kesan di Skydreamer"
              className={`group relative isolate inline-flex items-center justify-center rounded-full h-14 w-14 sm:h-16 sm:w-16 bg-sky-600 text-neutral-50 font-semibold shadow-lg ring-1 ring-sky-700/50 transition duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 pointer-events-auto ${
                reduced
                  ? ""
                  : "hover:scale-[1.03] hover:bg-sky-700 hover:shadow-[0_0_30px_10px_rgba(14,165,233,0.2)]"
              }`}
            >
              {/* shimmer glow overlay (disabled on reduced) */}
              {!reduced && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-[radial-gradient(closest-side,rgba(56,189,248,0.18)_0,transparent_60%)]"
                />
              )}
              {/* micro sparkles (disabled on reduced) */}
              {!reduced && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1.5 -right-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/90 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100"
                />
              )}
              {!reduced && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-1 w-1 rounded-full bg-fuchsia-400/80 shadow-[0_0_6px_2px_rgba(232,121,249,0.5)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100"
                />
              )}

              {/* pencil icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>

              {/* hover label (desktop only, subtle) */}
              <span
                className={`absolute right-full mr-3 hidden sm:flex items-center rounded-lg bg-sky-700 text-neutral-50 px-3 py-1 text-xs shadow-sm transition ${
                  reduced
                    ? ""
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                Tulis Kesan
              </span>
            </a>
          </div>
        </div>
      </section>

      <CloudModal
        open={!!active}
        onClose={() => setActive(null)}
        msg={active}
      />
    </main>
  );
}
