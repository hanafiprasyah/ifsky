"use client";

import Image from "next/image";
import React from "react";
import Product3 from "../../../public/images/product6.jpg";
import ShopeeLogo from "../../../public/logos/shopee.png";
import TiktokLogo from "../../../public/logos/tiktok.png";
import TokopediaLogo from "../../../public/logos/tokopedia.png";
import Link from "next/link";

export default function LangitModal() {
  return (
    <div
      id="hs-pro-shchpdl"
      className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-pro-shchpdl-label"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-md lg:max-w-4xl sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
        <div className="relative w-full max-h-full flex flex-col bg-white rounded-lg pointer-events-auto shadow-xl ">
          {/* Close Button */}
          <div className="absolute top-2 end-2.5 z-10">
            <button
              type="button"
              className="size-8 shrink-0 flex justify-center cursor-pointer transition-all duration-300 ease-in-out items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 "
              aria-label="Close"
              data-hs-overlay="#hs-pro-shchpdl"
            >
              <span className="sr-only">Close</span>
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Preview */}
            <div className="hidden lg:block relative">
              <Image
                className="shrink-0 absolute inset-0 size-full object-cover object-center rounded-tl-lg rounded-bl-lg"
                src={Product3}
                alt="IFSKY Langit Fragrance"
                width="auto"
                height="auto"
              />
            </div>
            {/* End Image Preview */}
            {/* Content */}
            <div className="py-4 sm:py-6 md:py-8">
              <div className="flex flex-col justify-between gap-5 lg:gap-0">
                <div className="lg:hidden w-full h-36 shrink-0 size-20">
                  <Image
                    className="shrink-0 size-full object-cover object-center rounded-none"
                    src={Product3}
                    alt="IFSKY Langit Fragrance"
                    width="auto"
                    height="auto"
                  />
                </div>
                <div className="px-4 sm:px-6 lg:px-8 flex items-center gap-x-3">
                  <div className="grow pb-8 pt-4">
                    <p className="text-sm text-gray-500 ">Eau de Parfum</p>
                    <h4
                      id="hs-pro-shchpdl-label"
                      className="font-medium text-lg text-gray-800 "
                    >
                      Langit Variance
                    </h4>
                    <p className="text-sm py-2 text-gray-600">
                      Terinspirasi dari luasnya cakrawala dan kebebasan tanpa
                      batas. Langit adalah simbol mimpi tinggi dan visi besar.
                      Dengan aroma vanilla, green notes, dan nuansa ozonic,
                      parfum ini memberi sensasi lega, segar, dan menghadirkan
                      ruang untuk bernafas bebas.
                    </p>
                    <p className="text-xs py-2 font-bold text-gray-600">
                      Karakter: Segar, luas, visioner.
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                      Rekomendasi: Pria dan Wanita (Unisex)
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                      Isi: 50 ml
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 pt-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-x-2">
                          <svg
                            className="shrink-0 size-5 text-gray-800"
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
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                            <circle cx="12" cy="8" r="6" />
                          </svg>

                          <h3 className="text-sm font-medium text-gray-800">
                            Top Notes
                          </h3>
                        </div>

                        {/* Progress */}
                        <div
                          className="relative w-full h-1 bg-gray-200 rounded-full"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="absolute top-1/2 w-5 h-1.5 rounded-full bg-indigo-600 -translate-y-1/2"
                            style={{ left: "25%" }}
                          ></div>
                        </div>
                        {/* End Progress */}

                        <div className="flex justify-between items-center gap-5">
                          <span className="text-xs text-gray-500">
                            Pink Pepper
                          </span>
                          <span className="text-xs text-gray-500">
                            Bergamot
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="shrink-0 size-5 text-gray-800"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>

                          <h3 className="text-sm font-medium text-gray-800">
                            Heart Notes
                          </h3>
                        </div>

                        {/* Progress */}
                        <div
                          className="relative w-full h-1 bg-gray-200 rounded-full"
                          role="progressbar"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="absolute top-1/2 w-5 h-1.5 rounded-full bg-indigo-600 -translate-y-1/2"
                            style={{ left: "65%" }}
                          ></div>
                        </div>
                        {/* End Progress */}

                        <div className="flex justify-between items-center gap-5">
                          <span className="text-xs text-gray-500">Rose</span>
                          <span className="text-xs text-gray-500">
                            Jasmine/Iris
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-x-2">
                          <svg
                            className="shrink-0 size-5 text-gray-800"
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
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                          </svg>

                          <h3 className="text-sm font-medium text-gray-800">
                            Base Notes
                          </h3>
                        </div>

                        {/* Progress */}
                        <div
                          className="relative w-full h-1 bg-gray-200 rounded-full"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="absolute top-1/2 w-5 h-1.5 rounded-full bg-indigo-600 -translate-y-1/2"
                            style={{ left: "45%" }}
                          ></div>
                        </div>
                        {/* End Progress */}

                        <div className="flex justify-between items-center gap-5">
                          <span className="text-xs text-gray-500">
                            Patchouli
                          </span>
                          <span className="text-xs text-gray-500">
                            Musk & Amber (Mix)
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* End of Stats */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Content */}
          </div>
          {/* End Body */}
        </div>
      </div>
    </div>
  );
}
