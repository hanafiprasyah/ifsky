"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-100 border-none">
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
                    href={"/help-center"}
                  >
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href={"https://wa.me/+6282364459298?text=Halo%20IFSKY!"}
                    target="_blank"
                  >
                    Hubungi Kami
                  </Link>
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
                  <Link
                    className="text-sm transition-all duration-300 cursor-pointer ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href={"https://maps.app.goo.gl/NWzhU3dhFFiBq4966"}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    // }}
                    target="_blank"
                    aria-disabled="true"
                  >
                    Lokasi Toko
                  </Link>
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
                  <Link
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href={"/career"}
                  >
                    Karir
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href={
                      "https://wa.me/+6282364459298?text=Halo%20IFSKY!%20Saya%20tertarik%20untuk%20bekerjasama%20dengan%20tim%20anda."
                    }
                    target="_blank"
                  >
                    Kerjasama Bisnis
                  </Link>
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
                  <Link
                    className="relative inline-block text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href={"https://www.instagram.com/ifsky.id"}
                    target="_blank"
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
                  </Link>
                  <Link
                    className="relative inline-block text-sm transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                    href={"https://www.tiktok.com/@ifsky.id"}
                    target="_blank"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      aria-hidden="true"
                    >
                      {/* TikTok brand logo (single path, fill mengikuti currentColor) */}
                      <path
                        fill="currentColor"
                        d="M12.94 2h3.51c.08 1.7.71 3 1.78 4.06 1.1 1.09 2.4 1.73 4.02 1.87v3.53c-1.14.12-2.28-.16-3.41-.7v6.85c0 4.18-2.53 6.39-5.87 6.39-3.23 0-5.73-2.13-5.73-5.27 0-3.17 2.5-5.22 5.73-5.22.62 0 1.25.09 1.83.27v3.63c-.56-.18-1.03-.27-1.59-.27-1.47 0-2.66 1.17-2.66 2.66 0 1.46 1.1 2.64 2.57 2.64 1.52 0 2.65-1.16 2.65-2.78V2z"
                      />
                    </svg>
                    <span className="sr-only">Tiktok</span>
                  </Link>
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
            {/* <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2">
              <Link
                className="text-xs transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                href={""}
              >
                Persetujuan
              </Link>
            </li> */}
            {/* <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2">
              <Link
                className="text-xs transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-800 focus:text-gray-800"
                href={""}
              >
                Privasi Pengguna
              </Link>
            </li> */}
          </>
        </ul>
        {/* End List */}
      </div>
    </footer>
  );
}
