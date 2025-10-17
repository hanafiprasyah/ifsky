"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate } from "motion";
import { motion } from "motion/react";
import Image from "next/image";

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

function CloudItem({ msg, index, rowHeight = 160, onOpen }) {
  const ref = useRef(null);
  const rand = useMemo(() => seededRandom(msg.id), [msg.id]);

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

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(
      ref.current,
      {
        transform: [
          `translate3d(0, -6px, 0) rotate(${rotate}deg) scale(${scale})`,
          `translate3d(0, 6px, 0) rotate(${rotate}deg) scale(${scale})`,
        ],
      },
      {
        duration: 6 + rand() * 4,
        direction: "alternate",
        repeat: Infinity,
        easing: "ease-in-out",
      }
    );
    return () => controls?.cancel?.();
  }, [rand, rotate, scale]);

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
      {/* Cloud visual (PNG) */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-[120px] h-[22px] rounded-full blur-md opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, rgba(14,165,233,.35), transparent 70%)",
        }}
      />
      <Image
        src="/logos/cloud.png"
        alt=""
        width={180}
        height={110}
        draggable={false}
        sizes="(max-width: 640px) 150px, 180px"
        className="select-none pointer-events-none relative drop-shadow-md transition-all group-hover:scale-105 group-hover:drop-shadow-xl"
      />
      {/* Tiny dot as affordance */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-500 text-xs opacity-60 group-hover:opacity-90">
        {/*  */}
      </span>
    </button>
  );
}

function CloudModal({ open, onClose, msg }) {
  // Respect prefers-reduced-motion for modal animation
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
                className="prose prose-sm max-w-none mt-3"
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
