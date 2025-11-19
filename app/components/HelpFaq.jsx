"use client";

import React from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import TrackOrderImage from "../../public/images/faq2.jpg";
import SealProductImage from "../../public/images/faq3.jpg";
import TipsImage from "../../public/images/faq1.jpg";

export default function FaqComponent() {
  return (
    <div className="h-fit w-full px-8 py-8 md:px-16 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-y-6">
        <div className="md:ps-[15%] md:order-2">
          <div className="mb-8 ml-4">
            <h2 className="font-semibold text-xl md:text-3xl text-gray-800">
              Pertanyaan yang Sering Ditanya (FAQ)
            </h2>
          </div>

          {/* Accordion Navs */}
          <div className="hs-accordion-group [--keep-one-open:true] flex flex-col mx-8">
            {/* Lacak pesanan */}
            <div
              className="hs-accordion py-5 border-b border-gray-200 last:border-b-0 active"
              data-hs-target="#hs-pro-dt-ftat"
            >
              <button
                className="hs-accordion-toggle w-full flex justify-between gap-x-3 text-start"
                aria-expanded="true"
                aria-controls="hs-pro-dt-item-ftat"
              >
                <span className="grow">
                  <span className="block font-medium text-lg text-gray-800">
                    Bagaimana cara melacak pesanan?
                  </span>
                </span>
                <svg
                  className="hs-accordion-active:rotate-180 shrink-0 size-5 text-gray-800"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="hs-pro-dt-item-ftat"
                className="hs-accordion-content overflow-hidden transition-[height] duration-300"
                style={{ display: "block" }}
              >
                <p className="mt-2 text-gray-500">
                  Buka <b>Lacak Pesanan</b>, masukkan nomor pesanan dan email.
                  Status real-time akan tampil.
                </p>

                <ul className="mt-3 space-y-1">
                  <>
                    <li className="flex items-center gap-x-1 text-gray-500">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      Dikemas
                    </li>

                    <li className="flex items-center gap-x-1 text-gray-500">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      Dalam perjalanan
                    </li>

                    <li className="flex items-center gap-x-1 text-gray-500">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      Diterima
                    </li>
                  </>
                </ul>

                <div className="mt-3">
                  <Link
                    className="group inline-flex justify-center transition-all duration-200 ease-in-out items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700"
                    href={"/track-order"}
                  >
                    Lacak Pesanan
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* End of Lacak Pesanan */}

            {/* Segel IFSKY */}
            <div
              className="hs-accordion py-5 border-b border-gray-200 last:border-b-0"
              data-hs-target="#hs-pro-dt-ftsd"
            >
              <button
                className="hs-accordion-toggle w-full flex justify-between gap-x-3 text-start"
                aria-expanded="false"
                aria-controls="hs-pro-dt-item-ftsd"
              >
                <span className="grow">
                  <span className="block font-medium text-lg text-gray-800">
                    Bagaimana memastikan parfum IFSKY asli?
                  </span>
                </span>
                <svg
                  className="hs-accordion-active:rotate-180 shrink-0 size-5 text-gray-800"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="hs-pro-dt-item-ftsd"
                className="hs-accordion-content overflow-hidden transition-[height] duration-300"
                style={{ display: "none" }}
              >
                <p className="mt-2 text-gray-500">
                  Semua produk IFSKY bergaransi keaslian. Cek segel, kemasan,
                  dan batch code. Jika ragu, hubungi kami dengan foto produk &
                  nota.
                </p>

                <div className="block mt-2">
                  <Link
                    className="group inline-flex justify-center transition-all duration-200 ease-in-out items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700"
                    href={
                      "https://wa.me/+6282364459298?text=Halo%20IFSKY!%20Saya%20ingin%20cek%20keaslian%20produk%20IFSKY%20yang%20saya%20beli.%20Bisa%20bantu?"
                    }
                    target="_blank"
                  >
                    Hubungi kami
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path
                        className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                        d="M5 12h14"
                      ></path>
                      <path
                        className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                        d="m12 5 7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* End of Segel IFSKY */}

            {/* Tips dan trik */}
            <div
              className="hs-accordion py-5 border-b border-gray-200 last:border-b-0"
              data-hs-target="#hs-pro-dt-ftpf"
            >
              <button
                className="hs-accordion-toggle w-full flex justify-between gap-x-3 text-start"
                aria-expanded="false"
                aria-controls="hs-pro-dt-item-ftpf"
              >
                <span className="grow">
                  <span className="block font-medium text-lg text-gray-800">
                    Tips agar parfum lebih tahan lama?
                  </span>
                </span>
                <svg
                  className="hs-accordion-active:rotate-180 shrink-0 size-5 text-gray-800"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="hs-pro-dt-item-ftpf"
                className="hs-accordion-content overflow-hidden transition-[height] duration-300"
                style={{ display: "none" }}
              >
                <p className="mt-2 text-gray-500">
                  Semprot di titik nadi setelah mandi, jangan digosok, gunakan
                  layering (body lotion netral), dan simpan di tempat
                  sejuk/teduh.
                </p>
              </div>
            </div>
            {/* End of Tips dan trik */}
          </div>
          {/* End Accordion Navs */}
        </div>
        {/* End Col */}

        {/* Accordion Content */}
        <div className="hs-accordion-outside-group relative h-96 md:h-150 w-full">
          {/* Card */}
          <div
            id="hs-pro-dt-ftat"
            className="absolute opacity-0 hs-accordion-outside-active:opacity-100 transition-opacity duration-500 active size-full"
          >
            <Image
              className="size-full object-cover rounded-xl"
              src={TrackOrderImage}
              alt="IFSKY Lacak Pesanan"
              width="auto"
              height="auto"
            />

            <div className="absolute bottom-0 inset-x-0 after:absolute after:inset-0 after:size-full after:z-1 after:rounded-xl after:bg-linear-to-t after:from-blue-600 after:to-transparent">
              <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end gap-3">
                <div className="mt-1.5 md:mt-3">
                  <blockquote className="md:text-xl text-white">
                    Simpan selalu Nomor Resi anda dan jangan pernah membuang
                    bukti pembelian/Invoice dari kami hingga barang diterima
                    tanpa masalah ya!
                    <footer className="mt-4 md:mt-6 text-sm">
                      Admin, <span className="opacity-70">IFSKY Team</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div
            id="hs-pro-dt-ftsd"
            className="absolute opacity-0 hs-accordion-outside-active:opacity-100 transition-opacity duration-500 size-full"
          >
            <Image
              className="size-full object-cover rounded-xl"
              src={SealProductImage}
              alt="IFSKY Original Seal Products"
              width="auto"
              height="auto"
            />

            <div className="absolute bottom-0 inset-x-0 after:absolute after:inset-0 after:size-full after:z-1 after:rounded-xl after:bg-linear-to-t after:from-amber-600 after:to-transparent">
              <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end gap-3">
                <div className="mt-1.5 md:mt-3">
                  <blockquote className="md:text-xl text-white">
                    Jika kerusakan terjadi selama proses pengiriman, maka kami
                    akan 100% bertanggung jawab!*
                    <footer className="mt-4 md:mt-6 text-sm">
                      Admin, <span className="opacity-70">IFSKY Team</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div
            id="hs-pro-dt-ftpf"
            className="absolute opacity-0 hs-accordion-outside-active:opacity-100 transition-opacity duration-500 size-full"
          >
            <Image
              className="size-full object-cover rounded-xl"
              src={TipsImage}
              alt="IFSKY Tips n Trik"
              width="auto"
              height="auto"
            />

            <div className="absolute bottom-0 inset-x-0 after:absolute after:inset-0 after:size-full after:z-1 after:rounded-xl after:bg-linear-to-t after:from-emerald-600 after:to-transparent">
              <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end gap-3">
                <div className="mt-1.5 md:mt-3">
                  <blockquote className="md:text-xl text-white">
                    Usahakan agar parfum disemprot pada kulit, jangan di baju
                    ya!
                    <footer className="mt-4 md:mt-6 text-sm">
                      Admin, <span className="opacity-70">IFSKY Team</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Accordion Content */}
      </div>

      {/* Preline: sync outside preview with active accordion item */}
      <Script id="preline-outside-accordion" strategy="afterInteractive">{`
        (function(){
            const setup = () => {
            // Listen to Preline's accordion event and toggle .active on the outside cards
            window.addEventListener('beforeOpen.hs.accordion', ({ detail }) => {
                const { payload } = detail || {};
                const selector = payload?.getAttribute?.('data-hs-target');
                if (!selector) return;

                const target = document.querySelector(selector);
                const group = target?.closest('.hs-accordion-outside-group') || null;

                if (group) {
                Array.from(group.querySelectorAll(':scope > *')).forEach((el) => {
                    if (el === target) el.classList.add('active');
                    else el.classList.remove('active');
                });
                }
            });
            };

            if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setup();
            } else {
            document.addEventListener('DOMContentLoaded', setup);
            }
        })();
        `}</Script>
    </div>
  );
}
