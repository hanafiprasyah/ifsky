"use client";

import React from "react";
import { motion } from "motion/react";

export default function IconSectionHome() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };
  return (
    <div className="py-14 lg:py-20 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-neutral-100">
      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Icon Block */}
        <motion.div
          className="max-w-xs lg:max-w-full mx-auto text-center lg:px-4 xl:px-10"
          variants={item}
        >
          <svg
            className="shrink-0 size-7 mx-auto text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <p className="mt-3 font-medium text-gray-800">Keamanan Berbelanja</p>
          <p className="mt-2 text-sm text-gray-500">
            Berbelanja dengan percaya diri menggunakan sistem pembayaran
            terenkripsi kami yang melindungi informasi sensitif Anda.
          </p>
        </motion.div>
        {/* End Icon Block */}
        {/* Icon Block */}
        <motion.div
          className="max-w-xs lg:max-w-full mx-auto text-center lg:px-4 xl:px-10"
          variants={item}
        >
          <svg
            className="shrink-0 size-7 mx-auto text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx={17} cy={18} r={2} />
            <circle cx={7} cy={18} r={2} />
          </svg>
          <p className="mt-3 font-medium text-gray-800">Gratis Ongkir</p>
          <p className="mt-2 text-sm text-gray-500">
            Nikmati pengiriman gratis untuk semua pesanan, tanpa minimum
            pembelian.
          </p>
        </motion.div>
        {/* End Icon Block */}
        {/* Icon Block */}
        <motion.div
          className="max-w-xs lg:max-w-full mx-auto text-center lg:px-4 xl:px-10"
          variants={item}
        >
          <svg
            className="shrink-0 size-7 mx-auto text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          <p className="mt-3 font-medium text-gray-800">30 Hari Pengembalian</p>
          <p className="mt-2 text-sm text-gray-500">
            Tidak puas? Kembalikan barangnya dalam waktu 30 hari setelah
            pembelian untuk mendapatkan pengembalian dana penuh atau penukaran.
          </p>
        </motion.div>
        {/* End Icon Block */}
      </motion.div>
      {/* End Grid */}
    </div>
  );
}
