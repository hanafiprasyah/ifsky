"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import Model1 from "../../public/images/model9.jpg";
import Model2 from "../../public/images/model7.jpg";
import Model3 from "../../public/images/model8.jpg";
import Model4 from "../../public/images/model5.jpg";
import Model5 from "../../public/images/model4.jpg";

export default function HeroHome() {
  // Typewriter texts
  const subtitleText = "Aroma yang Membuatmu Berani Bermimpi";
  const headlineLead = "IFSKY bukan sekadar parfum, IFSKY adalah perwujudan";
  const headlineTail = "mimpi.";

  const [sub, setSub] = useState("");
  const [head, setHead] = useState("");
  const [subDone, setSubDone] = useState(false);
  const [headDone, setHeadDone] = useState(false);
  const [tailShown, setTailShown] = useState(false);
  const headIntervalRef = useRef(null);

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

  // Type subtitle first
  useEffect(() => {
    const t = subtitleText;

    // If reduced motion, render instantly
    if (reduced) {
      setSub(t);
      setSubDone(true);
      return;
    }

    let i = 0;
    const speed = 28; // ms per char
    const id = setInterval(() => {
      i++;
      setSub(t.slice(0, i));
      if (i >= t.length) {
        clearInterval(id);
        setSubDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [reduced]);

  // Then type headline lead AFTER subtitle completes
  useEffect(() => {
    if (!subDone) return; // only start when subtitle fully done

    const t = headlineLead;

    // If reduced motion, render instantly
    if (reduced) {
      setHead(t);
      setHeadDone(true);
      return;
    }

    const start = setTimeout(() => {
      let i = 0;
      const speed = 72; // ms per char (lebih lambat dari subtitle 28ms)
      const id = setInterval(() => {
        i++;
        setHead(t.slice(0, i));
        if (i >= t.length) {
          clearInterval(id);
          headIntervalRef.current = null;
          setHeadDone(true);
        }
      }, speed);
      headIntervalRef.current = id;
    }, 250); // jeda kecil setelah subtitle selesai

    return () => {
      clearTimeout(start);
      if (headIntervalRef.current) {
        clearInterval(headIntervalRef.current);
        headIntervalRef.current = null;
      }
    };
  }, [subDone, reduced]);

  // Small pause before revealing the colored tail
  useEffect(() => {
    if (!headDone) return;

    if (reduced) {
      setTailShown(true);
      return;
    }

    const timer = setTimeout(() => setTailShown(true), 400);
    return () => clearTimeout(timer);
  }, [headDone, reduced]);

  return (
    <div className="bg-neutral-100">
      <div className="relative bg-sky-200/50 before:content-[''] before:absolute before:inset-0 before:size-full before:bg-[radial-gradient(#fff,transparent_1px)] before:bg-[size:20px_20px]">
        <div className="relative z-10 min-h-[520px] lg:min-h-[800px] flex flex-col justify-center">
          <div className="max-w-5xl mx-auto py-16 lg:py-0 px-4 xl:px-0">
            {/* Content */}
            <div className="max-w-lg lg:max-w-2xl mx-auto text-center">
              <p className="mb-4 font-semibold text-sm uppercase tracking-wider text-neutral-600">
                <span aria-label={subtitleText}>{sub}</span>
                {subDone ? null : (
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block w-[1ch] -translate-y-[1px] text-neutral-500"
                  >
                    |
                  </motion.span>
                )}
              </p>

              <h1 className="font-bold text-neutral-800 text-xl md:text-3xl lg:text-5xl leading-[1.1]">
                <span aria-label={`${headlineLead} ${headlineTail}`}>
                  {head}
                </span>
                {headDone ? null : (
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block w-[1ch] -translate-y-[2px] text-neutral-500"
                  >
                    |
                  </motion.span>
                )}
                {/* Reveal the colored tail after the lead finishes */}
                <motion.span
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: tailShown ? 1 : 0, x: tailShown ? 0 : 4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-[#0c7fc2]"
                >
                  {tailShown ? ` ${headlineTail}` : ""}
                </motion.span>
              </h1>
            </div>
            {/* End Content */}

            {/* Mobile & Tablet gallery (photos appear BELOW text) */}
            <div className="mt-8 md:hidden">
              <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
                <motion.div
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, y: 40, scale: 0.92, rotateZ: -2 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.8,
                    ease: "easeOut",
                    delay: reduced ? 0 : 0.05,
                  }}
                >
                  <Image
                    className="rounded-xl w-full h-auto pointer-events-none"
                    src={Model1}
                    alt="Hero image 1"
                    width={720}
                    height={480}
                  />
                </motion.div>

                <motion.div
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, y: 40, scale: 0.92, rotateZ: 2 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.85,
                    ease: "easeOut",
                    delay: reduced ? 0 : 0.15,
                  }}
                >
                  <Image
                    className="rounded-xl w-full h-auto pointer-events-none"
                    src={Model2}
                    alt="Hero image 2"
                    width={880}
                    height={586}
                  />
                </motion.div>

                <motion.div
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, y: 40, scale: 0.92, rotateZ: -2 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.9,
                    ease: "easeOut",
                    delay: reduced ? 0 : 0.25,
                  }}
                >
                  <Image
                    className="rounded-xl w-full h-auto pointer-events-none"
                    src={Model4}
                    alt="Hero image 3"
                    width={400}
                    height={600}
                  />
                </motion.div>

                <motion.div
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, y: 40, scale: 0.92, rotateZ: 2 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.95,
                    ease: "easeOut",
                    delay: reduced ? 0 : 0.35,
                  }}
                >
                  <Image
                    className="rounded-xl w-full h-auto pointer-events-none"
                    src={Model5}
                    alt="Hero image 4"
                    width={500}
                    height={700}
                  />
                </motion.div>

                <motion.div
                  className="col-span-2 sm:col-span-3"
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, y: 50, scale: 0.94, rotateZ: -2 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
                  transition={{
                    duration: reduced ? 0 : 1.0,
                    ease: "easeOut",
                    delay: reduced ? 0 : 0.45,
                  }}
                >
                  <Image
                    className="rounded-xl w-full h-auto pointer-events-none"
                    src={Model3}
                    alt="Hero image 5"
                    width={960}
                    height={640}
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              className="hidden xl:block absolute top-[2%] start-[33%] -z-10 scale-100"
              initial={
                reduced
                  ? false
                  : { opacity: 0, y: -40, scale: 0.94, rotateZ: -2 }
              }
              animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
              transition={{
                duration: reduced ? 0 : 1.0,
                ease: "easeOut",
                delay: reduced ? 0 : 0.1,
              }}
            >
              {/* Card */}
              <div className="w-72">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model1}
                  alt="Hero image"
                  width={720}
                  height={480}
                />
              </div>
              {/* End Card */}
            </motion.div>

            <motion.div
              className="hidden xl:block absolute top-[30%] -start-[2%] -z-10 scale-100"
              initial={
                reduced
                  ? false
                  : { opacity: 0, x: -50, scale: 0.94, rotateZ: -1.5 }
              }
              animate={{ opacity: 1, x: 0, scale: 1, rotateZ: 0 }}
              transition={{
                duration: reduced ? 0 : 1.05,
                ease: "easeOut",
                delay: reduced ? 0 : 0.2,
              }}
            >
              {/* Card */}
              <div className="w-[22rem]">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model2}
                  alt="Hero image"
                  width={880}
                  height={586}
                />
              </div>
              {/* End Card */}
            </motion.div>

            <motion.div
              className="hidden xl:block absolute top-[5%] end-[12%] -z-10 scale-100"
              initial={
                reduced ? false : { opacity: 0, x: 50, scale: 0.94, rotateZ: 2 }
              }
              animate={{ opacity: 1, x: 0, scale: 1, rotateZ: 0 }}
              transition={{
                duration: reduced ? 0 : 1.05,
                ease: "easeOut",
                delay: reduced ? 0 : 0.3,
              }}
            >
              {/* Card */}
              <div className="w-40 lg:w-48">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model4}
                  alt="Hero image"
                  width={400}
                  height={600}
                />
              </div>
              {/* End Card */}
            </motion.div>

            <motion.div
              className="hidden xl:block absolute top-[55%] lg:top-[50%] end-[2%] -z-10 scale-100"
              initial={
                reduced
                  ? false
                  : { opacity: 0, x: 60, scale: 0.94, rotateZ: 1.5 }
              }
              animate={{ opacity: 1, x: 0, scale: 1, rotateZ: 0 }}
              transition={{
                duration: reduced ? 0 : 1.1,
                ease: "easeOut",
                delay: reduced ? 0 : 0.4,
              }}
            >
              {/* Card */}
              <div className="w-40 lg:w-[10.5rem]">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model5}
                  alt="Hero image"
                  width={500}
                  height={700}
                />
              </div>
            </motion.div>

            <motion.div
              className="hidden xl:block absolute -bottom-[1%] end-[38%] -z-10 scale-100"
              initial={
                reduced
                  ? false
                  : { opacity: 0, y: 60, scale: 0.94, rotateZ: -2 }
              }
              animate={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
              transition={{
                duration: reduced ? 0 : 1.1,
                ease: "easeOut",
                delay: reduced ? 0 : 0.5,
              }}
            >
              {/* Card */}
              <div className="w-80">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model3}
                  alt="Hero image"
                  width={960}
                  height={640}
                />
              </div>
              {/* End Card */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
