"use client";

import React, { useEffect, useState, useRef } from "react";
import SalePicture from "../../public/images/matahari3.webp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function SaleHome() {
  // Typewriter for headline (calm)
  const headlineText = "Diskon hingga 18%"; // fix typo: hingga
  const [head, setHead] = useState("");
  const [headDone, setHeadDone] = useState(false);
  const headIntervalRef = useRef(null);

  // Trigger typewriter only when section is in view
  const rootRef = useRef(null);
  const [started, setStarted] = useState(false);

  // Start typewriter only after the section becomes visible
  useEffect(() => {
    if (!started || headDone || headIntervalRef.current) return;

    let i = 0;
    const start = setTimeout(() => {
      headIntervalRef.current = setInterval(() => {
        i++;
        setHead(headlineText.slice(0, i));
        if (i >= headlineText.length) {
          clearInterval(headIntervalRef.current);
          headIntervalRef.current = null;
          setHeadDone(true);
        }
      }, 45); // calm speed
    }, 180); // small lead-in pause

    return () => {
      clearTimeout(start);
      if (headIntervalRef.current) {
        clearInterval(headIntervalRef.current);
        headIntervalRef.current = null;
      }
    };
  }, [started, headDone]);

  // Observe visibility to trigger typing once when ~40% of section is visible
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let observer;
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
              setStarted(true);
              observer.disconnect(); // trigger only once
            }
          });
        },
        { threshold: [0, 0.25, 0.4, 0.75, 1] }
      );
      observer.observe(el);
    } else {
      // Fallback (e.g., older browsers): start immediately
      setStarted(true);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="pt-6 lg:pt-4 pb-8 lg:pb-2 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-neutral-100"
    >
      <div className="h-72 sm:h-96 xl:h-120 relative">
        <Image
          className="bg-neutral-100 pointer-events-none absolute inset-0 size-full object-cover rounded-xl"
          src={SalePicture}
          alt="IFSKY Diskon Parfum"
          width={1600}
          height={900}
          priority
        />
        <div className="absolute inset-0 rounded-xl bg-black/20 pointer-events-none" />
        <div className="relative z-10 size-full max-w-md mx-auto flex flex-col justify-center items-center">
          <p className="text-sm md:text-base uppercase text-white">
            promo launching
          </p>

          <h1 className="mt-3 font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
            <sup className="text-xs md:text-lg">*</sup>
            <span aria-label={headlineText}>{head}</span>
            {headDone ? null : (
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[1ch] -translate-y-[2px]"
              >
                |
              </motion.span>
            )}
          </h1>

          {/* Button Group */}
          <div className="mt-5 md:mt-10">
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                className="text-sm md:text-base transition-all duration-200 ease-in-out text-white underline underline-offset-4 hover:text-white/80 focus:outline-hidden focus:text-white/80"
                target="_blank"
                href={
                  "https://wa.me/+6282364459298?text=Halo!%20Saya%20baru%20saja%20mengunjungi%20website%20resmi%20IFSKY%20dan%20saya%20tertarik%20dengan%20produk%20anda.%20Bisa%20kita%20berbicara%20lebih%20lanjut%20tentang%20diskon%20yang%20sedang%20berlaku?"
                }
              >
                Hubungi kami
              </Link>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </div>
    </div>
  );
}
