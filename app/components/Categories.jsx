"use client";

import React from "react";
import Image from "next/image";
import Product1 from "../../public/images/product4.jpg";
import Product2 from "../../public/images/product5.jpg";
import Product3 from "../../public/images/product6.jpg";
import dynamic from "next/dynamic";
import { motion } from "motion/react";

const ModalMatahari = dynamic(
  () => import("@/app/components/modal/MatahariModal"),
  { ssr: false }
);

const ModalBulan = dynamic(() => import("@/app/components/modal/BulanModal"), {
  ssr: false,
});

const ModalLangit = dynamic(
  () => import("@/app/components/modal/LangitModal"),
  { ssr: false }
);

export default function CategoriesHome() {
  // Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18, scale: 0.96, rotateZ: -1.5 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateZ: 0,
      transition: { duration: 0.55, ease: "easeOut", delay: i },
    }),
  };

  return (
    <>
      <motion.section
        className="pt-24 lg:pt-36 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-neutral-100"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-y-5 gap-x-5 md:gap-x-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Matahari */}
          <motion.button
            type="button"
            className="group relative block w-16 sm:w-20 lg:w-24 text-center cursor-pointer focus:outline-hidden"
            data-hs-overlay="#hs-pro-shchpdm"
            variants={item}
            custom={0}
            whileHover={{ y: -4, scale: 1.03, rotateZ: 0.4 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Buka detail varian Matahari"
            title="Matahari"
          >
            <div className="relative inline-block after:content-[''] after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_24px_10px_rgba(34,211,238,0.25)] after:opacity-0 after:transition after:duration-300 group-hover:after:opacity-100">
              <span className="pointer-events-none absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-cyan-400/90 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
              <span className="pointer-events-none absolute -bottom-1 -left-1 h-1 w-1 rounded-full bg-fuchsia-400/80 shadow-[0_0_6px_2px_rgba(232,121,249,0.5)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
              <Image
                className="size-16 pointer-events-none sm:size-20 lg:size-24 mx-auto object-cover transition-all duration-300 ease-in-out bg-neutral-100 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-cyan-500 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                src={Product1}
                alt="Matahari IFSKY"
                priority
              />
            </div>
            <span className="mt-3 block text-sm break-words text-gray-800">
              Matahari
            </span>
          </motion.button>
          {/* End Matahari */}

          {/* Bulan */}
          <motion.button
            type="button"
            className="group relative block w-16 sm:w-20 lg:w-24 cursor-pointer text-center focus:outline-hidden"
            data-hs-overlay="#hs-pro-shchpdb"
            variants={item}
            custom={0.06}
            whileHover={{ y: -4, scale: 1.03, rotateZ: -0.4 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Buka detail varian Bulan"
            title="Bulan"
          >
            <div className="relative inline-block after:content-[''] after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_24px_10px_rgba(34,211,238,0.25)] after:opacity-0 after:transition after:duration-300 group-hover:after:opacity-100">
              <span className="pointer-events-none absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-cyan-400/90 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
              <span className="pointer-events-none absolute -bottom-1 -left-1 h-1 w-1 rounded-full bg-fuchsia-400/80 shadow-[0_0_6px_2px_rgba(232,121,249,0.5)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
              <Image
                className="size-16 pointer-events-none sm:size-20 lg:size-24 mx-auto object-cover transition-all duration-300 ease-in-out bg-neutral-100 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-cyan-500 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                src={Product2}
                alt="Bulan IFSKY"
                priority
              />
            </div>
            <span className="mt-3 block text-sm break-words text-gray-800">
              Bulan
            </span>
          </motion.button>
          {/* End Bulan */}

          {/* Langit */}
          <motion.button
            type="button"
            className="group relative block w-16 sm:w-20 lg:w-24 text-center cursor-pointer focus:outline-hidden"
            data-hs-overlay="#hs-pro-shchpdl"
            variants={item}
            custom={0.12}
            whileHover={{ y: -4, scale: 1.03, rotateZ: 0.4 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Buka detail varian Langit"
            title="Langit"
          >
            <div className="relative inline-block after:content-[''] after:absolute after:inset-0 after:rounded-full after:shadow-[0_0_24px_10px_rgba(34,211,238,0.25)] after:opacity-0 after:transition after:duration-300 group-hover:after:opacity-100">
              <span className="pointer-events-none absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-cyan-400/90 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
              <span className="pointer-events-none absolute -bottom-1 -left-1 h-1 w-1 rounded-full bg-fuchsia-400/80 shadow-[0_0_6px_2px_rgba(232,121,249,0.5)] opacity-0 scale-75 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
              <Image
                className="size-16 pointer-events-none sm:size-20 lg:size-24 mx-auto object-cover transition-all duration-300 ease-in-out bg-neutral-100 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-cyan-500 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                src={Product3}
                alt="Langit IFSKY"
                priority
              />
            </div>
            <span className="mt-3 block text-sm break-words text-gray-800">
              Langit
            </span>
          </motion.button>
          {/* End Langit */}
        </motion.div>
        {/* End of Grid */}
      </motion.section>
      <ModalMatahari />
      <ModalBulan />
      <ModalLangit />
    </>
  );
}
