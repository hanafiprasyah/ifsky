"use client";

import React, { useState, useRef } from "react";
import Banner from "../../public/images/helpbanner2.jpg";

export default function HelpHero() {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const WA_NUMBER = "+6282364459298";

  const goWhatsApp = () => {
    const msg = q.trim();
    if (!msg) return;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.location.href = url;
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goWhatsApp();
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Banner.src})` }}
    >
      <div className="py-10 lg:py-20 w-full max-w-2xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-5">
          <h1 className="font-semibold text-3xl lg:text-4xl text-white">
            Dapatkan Bantuan
          </h1>
        </div>

        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
            <svg
              className="shrink-0 size-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            className="py-3 md:py-4 pe-4 ps-10 block w-full text-gray-700 bg-white border-transparent rounded-lg sm:text-sm placeholder:text-gray-400 focus:outline-hidden focus:border-transparent focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Apa yang dapat kami bantu?"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <div className="lg:hidden absolute inset-y-0 end-0 flex items-center z-20 pe-1">
            <button
              type="button"
              onClick={() => {
                setQ("");
                inputRef.current?.focus();
              }}
              className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600"
              aria-label="Hapus"
              title="Hapus"
            >
              <span className="sr-only">Hapus</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </button>
          </div>
        </div>
        {/* End Search Input */}
      </div>
    </div>
  );
}
