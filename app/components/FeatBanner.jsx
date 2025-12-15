"use client";

import React, { useEffect, useState } from "react";
import HeroBanner1 from "../../public/images/sunmodel.jpg";
import HeroBanner2 from "../../public/images/moonmodel.jpg";
import HeroBanner3 from "../../public/images/skymodel.jpg";
import Image from "next/image";
import { motion } from "motion/react";

export default function FeatBanner() {
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

  // Subtle in-view animation variants (minimal, motion-safe)
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemImg = {
    hidden: (dir = "left") =>
      reduced
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: dir === "right" ? 32 : -32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: reduced ? 0 : 0.4, ease: "easeOut" },
    },
  };
  const itemText = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.4, ease: "easeOut" },
    },
  };

  // Heading in-view props (disabled when reduced)
  const inViewProps = reduced
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 8 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.4, ease: "easeOut" },
      };

  return (
    <>
      <motion.div
        className="max-w-5xl mx-auto px-4 xl:px-0 pt-12 lg:pt-22 pb-16 md:pb-24"
        {...inViewProps}
      >
        <h1 className="font-semibold text-neutral-900 text-5xl md:text-6xl">
          <span className="text-sky-700">IFSKY Fragrance</span> — a piece of the
          sky.
        </h1>
        <div className="max-w-4xl">
          <p className="mt-5 text-neutral-500 font-light text-sm md:text-lg">
            IFSKY is more than a fragrance—it inspires you to believe in your
            dreams and dare to pursue them.
          </p>
        </div>
      </motion.div>

      {/* Image with Text Pair */}
      <div className="py-2 space-y-10">
        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-3"
          variants={container}
          initial={reduced ? "show" : "hidden"}
          {...(!reduced
            ? { whileInView: "show", viewport: { once: true, amount: 0.4 } }
            : {})}
        >
          <motion.div variants={itemImg} custom="left">
            <Image
              className="size-full object-cover pointer-events-none md:rounded-tr-xl md:rounded-br-xl h-96"
              src={HeroBanner1}
              alt="IFSKY Fragrance Matahari"
              width={1600}
              height={1066}
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
          </motion.div>
          {/* End Col */}

          <motion.div
            className="sm:min-h-80 flex flex-col justify-center sm:ps-6 sm:p-10"
            variants={itemText}
          >
            <h3 className="font-medium text-xl px-4 md:text-3xl text-sky-700">
              Matahari — Radiant Warmth
            </h3>

            <p className="mt-3 sm:mt-5 text-sm px-4 sm:text-base text-gray-500">
              Inspired by the first rays of light that awaken the world.
              Matahari is a symbol of spirit, energy, and new beginnings. Each
              spritz delivers a fresh, invigorating brightness layered with warm
              woody facets to instill confidence and optimism throughout the
              day.
            </p>
          </motion.div>
          {/* End Col */}
        </motion.div>
        {/* End Grid */}

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-3"
          variants={container}
          initial={reduced ? "show" : "hidden"}
          {...(!reduced
            ? { whileInView: "show", viewport: { once: true, amount: 0.4 } }
            : {})}
        >
          <motion.div className="sm:order-2" variants={itemImg} custom="right">
            <Image
              className="size-full object-cover pointer-events-none md:rounded-tl-xl md:rounded-bl-xl"
              src={HeroBanner2}
              alt="IFSKY Fragrance Bulan"
              width={1600}
              height={1066}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </motion.div>
          {/* End Col */}

          <motion.div
            className="order-1 sm:min-h-80 flex flex-col justify-center sm:pe-6 sm:p-10 sm:ps-0"
            variants={itemText}
          >
            <h3 className="font-medium text-xl px-4 md:text-3xl text-sky-700">
              Bulan — Romantic Allure
            </h3>

            <p className="mt-3 sm:mt-5 text-sm px-4 sm:text-base text-gray-500">
              Born of the calm of night and a gentle longing. Bulan is a symbol
              of elegance and mystery—soothing floral and fruity facets wrapped
              in a soft musky trail that leaves a romantic impression. Perfect
              for serene, intimate, and heartfelt moments.
            </p>
          </motion.div>
          {/* End Col */}
        </motion.div>
        {/* End Grid */}

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-y-3"
          variants={container}
          initial={reduced ? "show" : "hidden"}
          {...(!reduced
            ? { whileInView: "show", viewport: { once: true, amount: 0.4 } }
            : {})}
        >
          <motion.div variants={itemImg} custom="left">
            <Image
              className="size-full object-cover pointer-events-none md:rounded-tr-xl md:rounded-br-xl"
              src={HeroBanner3}
              alt="IFSKY Fragrance Langit"
              width={1600}
              height={1066}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </motion.div>
          {/* End Col */}

          <motion.div
            className="sm:min-h-80 flex flex-col justify-center sm:ps-6 sm:p-10"
            variants={itemText}
          >
            <h3 className="font-medium text-xl px-4 md:text-3xl text-sky-700">
              Langit — Blue Sky Freedom
            </h3>

            <p className="mt-3 sm:mt-5 text-sm px-4 sm:text-base text-gray-500">
              Inspired by the expanse of the horizon and boundless freedom.
              Langit symbolizes high aspirations and a bold vision. With airy
              ozonic nuances, green facets, and a soft vanilla trail, this
              fragrance feels open and fresh—creating space to breathe freely.
            </p>
          </motion.div>
          {/* End Col */}
        </motion.div>
        {/* End Grid */}
      </div>
      {/* End Image with Text Pair */}
    </>
  );
}
