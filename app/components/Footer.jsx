"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-100">
      <div className="w-full max-w-[85rem] mx-auto pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          <div>
            <h4 className="mb-3 font-medium text-sm text-gray-800">Bantuan</h4>
            <ul className="grid space-y-2">
              <>
                <li>
                  <Link
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <a
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    Hubungi Kami
                  </a>
                </li>
              </>
            </ul>
          </div>
          {/* End Col */}
          <div>
            <h4 className="mb-3 font-medium text-sm text-gray-800">
              Sumber Informasi
            </h4>
            <ul className="grid space-y-2">
              <>
                <li>
                  <a
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    Lokasi Toko
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    Langganan
                  </a>
                </li>
              </>
            </ul>
          </div>
          {/* End Col */}
          <div>
            <h4 className="mb-3 font-medium text-sm text-gray-800">
              Perusahaan
            </h4>
            <ul className="grid space-y-2">
              <>
                <li>
                  <a
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    Karir
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    Kerjasama Bisnis
                  </a>
                </li>
              </>
            </ul>
          </div>
          {/* End Col */}
          <div className="space-y-10">
            <div>
              <h4 className="font-medium text-sm text-gray-800">
                Tetap terhubung
              </h4>
              {/* Social Brands */}
              <div className="mt-3 md:mt-5 space-x-4">
                <>
                  <a
                    className="relative inline-block text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    className="relative inline-block text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-3.5"
                      width={48}
                      height={50}
                      viewBox="0 0 48 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">X (Twitter)</span>
                  </a>
                  <a
                    className="relative inline-block text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </a>
                </>
              </div>
              {/* End Social Brands */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      <div className="w-full max-w-[85rem] pb-10 lg:pb-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* List */}
        <ul className="flex flex-wrap  items-center whitespace-nowrap gap-3">
          <>
            <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2">
              © 2025 INFINITY Labs.
            </li>
            <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2">
              <a
                className="text-xs transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                href="#"
              >
                Persetujuan
              </a>
            </li>
            <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2">
              <a
                className="text-xs transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                href="#"
              >
                Privasi Pengguna
              </a>
            </li>
          </>
        </ul>
        {/* End List */}
      </div>
    </footer>
  );
}
