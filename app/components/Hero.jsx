"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

import Model1 from "../../public/images/allvariance2.jpg";
import Model2 from "../../public/images/model10.jpg";
import Model3 from "../../public/images/model11.jpg";
import Model4 from "../../public/images/model12.jpg";
import Model5 from "../../public/images/testibackground.jpg";
import Link from "next/link";

export default function HeroHome() {
  // Respect prefers-reduced-motion
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

  // Refs & states for parallax and progress indicator
  const sectionRefs = useRef([]); // each slide wrapper (min-h-[200vh])
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeProg, setActiveProg] = useState(0);

  const slides = [
    {
      img: Model1,
      title: "IFSKY is the embodiment of dreams.",
      subtitle: "IFSKY is more than a perfume.",
    },
    {
      img: Model2,
      title: "Matahari",
      subtitle: "Radiant energy that lasts all day.",
    },
    {
      img: Model3,
      title: "Bulan",
      subtitle: "Calm, soft, and soothing.",
    },
    {
      img: Model4,
      title: "Langit",
      subtitle: "Free, fresh, and confident.",
    },
    {
      img: Model5,
      title: "Skydreamer",
      subtitle: "Write your dream on ifsky.id and watch it grow.",
      cta: { label: "Write Your Dream", href: "/skydreamer" },
    },
  ];

  // Per-slide parallax offset (px)
  const [parallax, setParallax] = useState(() => Array(slides.length).fill(0));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      const vh = window.innerHeight || 1;
      const next = new Array(slides.length).fill(0);

      let bestIdx = 0;
      let bestScore = Infinity;
      let bestProg = 0;

      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // progress within this 200vh section: 0..1 while sticky region is active
        const prog = Math.min(1, Math.max(0, -rect.top / vh));
        // small parallax: translateY from +12px to -12px across the slide
        next[i] = reduced ? 0 : (0.5 - prog) * 24;

        // choose active slide = one closest to mid progress (0.5)
        if (prog > 0 && prog < 1) {
          const score = Math.abs(prog - 0.5);
          if (score < bestScore) {
            bestScore = score;
            bestIdx = i;
            bestProg = prog;
          }
        }
      });

      setParallax(next);
      setActiveIdx(bestIdx);
      setActiveProg(bestProg);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [slides.length, reduced]);

  return (
    <section className="relative bg-neutral-100 snap-y snap-mandatory">
      {slides.map((s, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="relative min-h-[200vh]"
        >
          {/* Konten slide yang di-pin */}
          <div className="sticky top-0 h-screen overflow-hidden snap-start">
            {/* Background image dengan subtle zoom/fade saat masuk viewport */}
            <motion.div
              className="absolute inset-0"
              initial={reduced ? false : { opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.6, once: false }}
              transition={{ duration: reduced ? 0 : 0.9, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0 will-change-transform"
                style={{
                  transform: reduced
                    ? undefined
                    : `translateY(${parallax[i] || 0}px)`,
                }}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
                {/* readability gradient */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.15)_70%,rgba(0,0,0,0.35)_100%)]" />
                {/* extra emphasis overlay only for slide 5 (Skydreamer) */}
                {i === 4 && (
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-black/50 pointer-events-none"
                  />
                )}
              </div>
            </motion.div>

            {/* Text overlay */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <div className="max-w-3xl mx-auto text-center">
                <motion.p
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut" }}
                  className="mb-3 text-sm font-semibold tracking-wider uppercase text-neutral-200"
                >
                  {s.subtitle}
                </motion.p>

                <motion.h1
                  initial={reduced ? false : { opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{
                    duration: reduced ? 0 : 0.75,
                    ease: "easeOut",
                    delay: reduced ? 0 : 0.05,
                  }}
                  className="text-white font-bold leading-[1.1] text-2xl md:text-4xl lg:text-6xl drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]"
                >
                  {s.title}
                </motion.h1>

                {s.cta ? (
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.6, once: false }}
                    transition={{
                      duration: reduced ? 0 : 0.6,
                      ease: "easeOut",
                      delay: reduced ? 0 : 0.12,
                    }}
                    className="mt-6"
                  >
                    <Link
                      href={s.cta.href}
                      className="inline-flex items-center justify-center cursor-pointer duration-300 ease-in-out transition-all rounded-xl px-5 py-3 text-sm font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600"
                    >
                      {s.cta.label}
                    </Link>
                  </motion.div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
