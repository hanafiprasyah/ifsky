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
              Frequently Asked Questions (FAQ)
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
                    Frequently Asked Questions (FAQ)
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
                  Open <b>Track Order</b>, enter your order number and email.
                  Your real-time status will appear.
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
                      Packed
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
                      In transit
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
                      Delivered
                    </li>
                  </>
                </ul>

                <div className="mt-3">
                  <Link
                    className="group inline-flex justify-center transition-all duration-200 ease-in-out items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700"
                    href={"/track-order"}
                  >
                    Track Order
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
                    How do I verify that my IFSKY perfume is genuine?
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
                  All IFSKY products are guaranteed authentic. Check the seal,
                  packaging, and batch code. If you're unsure, contact us with
                  photos of the product and the receipt.
                </p>

                <div className="block mt-2">
                  <Link
                    className="group inline-flex justify-center transition-all duration-200 ease-in-out items-center gap-x-1.5 whitespace-nowrap text-[13px] md:text-sm rounded-lg text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-blue-700"
                    href={
                      "https://wa.me/+6282364459298?text=Hello%20IFSKY!%20I%20would%20like%20to%20verify%20the%20authenticity%20of%20an%20IFSKY%20product%20I%20purchased.%20Could%20you%20help%3F"
                    }
                    target="_blank"
                  >
                    Contact us
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
                    How can I make my perfume last longer?
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
                  Spray on pulse points after a shower, avoid rubbing, layer
                  with a neutral body lotion, and store in a cool, shaded place.
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
              alt="IFSKY Track Order"
              width="auto"
              height="auto"
            />

            <div className="absolute bottom-0 inset-x-0 after:absolute after:inset-0 after:size-full after:z-1 after:rounded-xl after:bg-linear-to-t after:from-blue-600 after:to-transparent">
              <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end gap-3">
                <div className="mt-1.5 md:mt-3">
                  <blockquote className="md:text-xl text-white">
                    Always keep your tracking number, and do not discard your
                    purchase receipt/invoice until your package arrives without
                    issues!
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
                    If damage occurs during shipping, we will take 100%
                    responsibility!*
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
                    For best performance, spray on skin, not on clothing!
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
