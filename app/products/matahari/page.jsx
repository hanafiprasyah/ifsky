"use client";

import React from "react";
import Product1 from "../../../public/images/product4.jpg";
import Image from "next/image";
import Link from "next/link";
import ShopeeLogo from "../../../public/logos/shopee.png";
import TiktokLogo from "../../../public/logos/tiktok.png";
import TokopediaLogo from "../../../public/logos/tokopedia.png";

export default function MatahariDetail() {
  return (
    <div className="w-full max-w-[85rem] sm:pb-8 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="pt-4 sm:pt-10 w-full max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10">
          {/* Product Col */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-20">
              <div className="relative">
                {/* Slider */}
                <div
                  data-hs-carousel='{
                "loadingClasses": "opacity-0"
              }'
                  className="relative"
                >
                  <div className="hs-carousel flex flex-col sm:flex-row gap-3 sm:gap-5">
                    {/* Thumbnails */}
                    <div className="flex-none order-2 sm:order-1">
                      <div className="hs-carousel-pagination sm:h-175 flex flex-row sm:flex-col gap-3 pb-1.5 sm:pb-0 overflow-x-auto sm:overflow-x-hidden sm:overflow-y-auto [&::-webkit-scrollbar]:h-1 sm:[&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-100 [&::-webkit-scrollbar-thumb]:bg-neutral-300">
                        <div className="hs-carousel-pagination-item relative shrink-0 size-20 rounded-md sm:rounded-lg overflow-hidden cursor-pointer after:absolute after:inset-0 after:size-full after:rounded-md sm:after:rounded-lg border border-neutral-200 hs-carousel-active:border-neutral-800 hs-carousel-active:after:bg-black/10">
                          <Image
                            className="bg-neutral-100 pointer-events-none size-full object-cover rounded-md sm:rounded-lg"
                            src={Product1}
                            alt="IFSKY Matahari variance detail"
                            width="auto"
                            height="auto"
                          />
                        </div>
                        <div className="hs-carousel-pagination-item relative shrink-0 size-20 rounded-md sm:rounded-lg overflow-hidden cursor-pointer after:absolute after:inset-0 after:size-full after:rounded-md sm:after:rounded-lg border border-neutral-200 hs-carousel-active:border-neutral-800 hs-carousel-active:after:bg-black/10">
                          <Image
                            className="bg-neutral-100 pointer-events-none size-full object-cover rounded-md sm:rounded-lg"
                            src={Product1}
                            alt="IFSKY Matahari variance detail"
                            width="auto"
                            height="auto"
                          />
                        </div>
                        <div className="hs-carousel-pagination-item relative shrink-0 size-20 rounded-md sm:rounded-lg overflow-hidden cursor-pointer after:absolute after:inset-0 after:size-full after:rounded-md sm:after:rounded-lg border border-neutral-200 hs-carousel-active:border-neutral-800 hs-carousel-active:after:bg-black/10">
                          <Image
                            className="bg-neutral-100 pointer-events-none size-full object-cover rounded-md sm:rounded-lg"
                            src={Product1}
                            alt="IFSKY Matahari variance detail"
                            width="auto"
                            height="auto"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Thumbnails */}

                    {/* Preview */}
                    <div className="relative grow overflow-hidden h-137.5 sm:h-175 order-1 sm:order-2 bg-neutral-100 rounded-lg">
                      <div className="hs-carousel-body absolute inset-y-0 start-0 flex flex-nowrap opacity-0">
                        <div className="hs-carousel-slide">
                          <Image
                            className="bg-neutral-100 pointer-events-none size-full object-cover rounded-lg"
                            src={Product1}
                            alt="IFSKY Matahari variance detail"
                            width="auto"
                            height="auto"
                          />
                        </div>
                        <div className="hs-carousel-slide">
                          <Image
                            className="bg-neutral-100 pointer-events-none size-full object-cover rounded-lg"
                            src={Product1}
                            alt="IFSKY Matahari variance detail"
                            width="auto"
                            height="auto"
                          />
                        </div>
                        <div className="hs-carousel-slide">
                          <Image
                            className="bg-neutral-100 pointer-events-none size-full object-cover rounded-lg"
                            src={Product1}
                            alt="IFSKY Matahari variance detail"
                            width="auto"
                            height="auto"
                          />
                        </div>
                      </div>

                      {/* Nav */}
                      <div className="absolute bottom-0 end-0 pb-4 pe-4">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default cursor-pointer transition-all duration-300 ease-in-out inline-flex justify-center items-center size-10 bg-white border border-neutral-100 text-neutral-800 rounded-full shadow-2xs hover:bg-neutral-100 focus:outline-hidden"
                          >
                            <span className="text-2xl" aria-hidden="true">
                              <svg
                                className="shrink-0 size-5"
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
                                <path d="m15 18-6-6 6-6" />
                              </svg>
                            </span>
                            <span className="sr-only">Previous</span>
                          </button>
                          <button
                            type="button"
                            className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default cursor-pointer transition-all duration-300 ease-in-out inline-flex justify-center items-center size-10 bg-white border border-neutral-100 text-neutral-800 rounded-full shadow-2xs hover:bg-neutral-100 focus:outline-hidden"
                          >
                            <span className="sr-only">Next</span>
                            <span className="text-2xl" aria-hidden="true">
                              <svg
                                className="shrink-0 size-5"
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
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* End Nav */}
                    </div>
                    {/* End Preview */}
                  </div>
                </div>
                {/* End Slider */}
              </div>
            </div>
          </div>
          {/* End Product Col */}

          {/* Product Details */}
          <div className="lg:col-span-2 px-4">
            <div className="lg:ps-10">
              <p className="mb-1 text-sm text-neutral-500">
                <i>eau de parfum</i>
              </p>

              <h1 className="font-semibold text-3xl text-neutral-800">
                IFSKY Matahari
              </h1>

              <p className="mt-1 font-medium text-lg text-neutral-800">
                Rp. 185.000
              </p>

              {/* Alert */}
              <div className="mt-5">
                {/* Slider */}
                <div
                  data-hs-carousel='{
                "loadingClasses": "opacity-0",
                "isAutoHeight": "true",
                "isAutoPlay": true
              }'
                  className="relative"
                >
                  <div className="hs-carousel relative overflow-hidden w-full bg-neutral-100 rounded-lg">
                    <div className="hs-carousel-body flex flex-nowrap items-start overflow-hidden transition-[height,transform] duration-700 opacity-0">
                      <div className="hs-carousel-slide p-3 text-center h-auto">
                        <p className="flex justify-center items-center gap-x-2 text-xs text-neutral-800">
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
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                          </svg>
                          Lagi Trending! - Terjual 92 botol sejak 1 minggu
                        </p>
                      </div>

                      <div className="hs-carousel-slide p-3 text-center h-auto">
                        <p className="flex justify-center items-center gap-x-2 text-xs text-neutral-800">
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
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          Populer - Lagi diliat 12 orang dalam hari ini
                        </p>
                      </div>

                      <div className="hs-carousel-slide p-3 text-center h-auto">
                        <p className="flex justify-center items-center gap-x-2 text-xs text-neutral-800">
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
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                          </svg>
                          Untuk pria yang membawa inspirasi di setiap langkah.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Slider */}
              </div>
              {/* End Alert */}

              {/* Size */}
              <div className="mt-6">
                <div className="flex flex-wrap justify-between items-center gap-3">
                  <h2 className="font-medium text-neutral-800">Ukuran</h2>
                </div>

                {/* Grid */}
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {/* Checkbox */}
                  <label
                    htmlFor="hs-pro-shfdsr-us-6and5"
                    className="p-2.5 group relative flex justify-center items-center gap-x-3 text-center text-xs bg-white text-neutral-800 border border-neutral-200 cursor-pointer rounded-lg
                              has-checked:text-sky-600
                              has-checked:border-sky-600
                              has-checked:ring-1
                              has-checked:ring-sky-600
                              has-disabled:pointer-events-none
                              has-disabled:text-neutral-200
                              has-disabled:after:absolute
                              has-disabled:after:inset-0
                              has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-200)_calc(50%-1px),var(--color-neutral-200)_50%,transparent_50%)]
                              "
                  >
                    <input
                      type="radio"
                      id="hs-pro-shfdsr-us-6and5"
                      className="hidden bg-transparent border-neutral-200 text-sky-600 focus:ring-white focus:ring-offset-0"
                      name="hs-pro-shfdsr"
                    />
                    <span className="block">50 ml</span>
                  </label>
                  {/* End Checkbox */}

                  {/* Checkbox */}
                  <label
                    htmlFor="hs-pro-shfdsr-us-7and5"
                    className="p-2.5 group relative flex justify-center items-center gap-x-3 text-center text-xs bg-white text-neutral-800 border border-neutral-200 cursor-pointer rounded-lg
                              has-checked:text-sky-600
                              has-checked:border-sky-600
                              has-checked:ring-1
                              has-checked:ring-sky-600
                              has-disabled:pointer-events-none
                              has-disabled:text-neutral-200
                              has-disabled:after:absolute
                              has-disabled:after:inset-0
                              has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-200)_calc(50%-1px),var(--color-neutral-200)_50%,transparent_50%)]
                              "
                  >
                    <input
                      type="radio"
                      id="hs-pro-shfdsr-us-7and5"
                      className="hidden bg-transparent border-neutral-200 text-sky-600 focus:ring-white focus:ring-offset-0"
                      name="hs-pro-shfdsr"
                      disabled
                    />
                    <span className="block">125 ml</span>
                  </label>
                  {/* End Checkbox */}
                </div>
                {/* End Grid */}
              </div>
              {/* End Size */}

              {/* Stock */}
              <div className="mt-2">
                <span className="inline-flex items-center gap-x-1 text-sm text-orange-500">
                  <svg
                    className="shrink-0 size-3"
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
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Stock terbatas (Pre-order: 3 hari kerja)
                </span>
              </div>
              {/* End Stock */}

              {/* Button Group */}
              <div className="mt-7 flex gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 md:gap-3">
                  <Link
                    href={"https://shopee.co.id/ifsky.id"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#fff] text-white hover:bg-neutral-200 focus:outline-hidden focus:bg-neutral-300 transition-all duration-300 ease-in-out cursor-pointer"
                    aria-label="Beli di Shopee"
                    title="Beli di Shopee"
                  >
                    {/* Shopee */}

                    <Image
                      className="size-4"
                      src={ShopeeLogo}
                      alt="shopee"
                    ></Image>

                    <span className="text-neutral-700">Shopee</span>
                  </Link>

                  <Link
                    href={"https://www.tiktok.com/@ifsky.id"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#fff] text-white hover:bg-neutral-200 focus:outline-hidden focus:bg-neutral-300 transition-all duration-300 ease-in-out cursor-pointer"
                    aria-label="Beli di Tiktok"
                    title="Beli di Tiktok"
                  >
                    {/* TiktokShop */}

                    <Image
                      className="size-4"
                      src={TiktokLogo}
                      alt="tiktok"
                    ></Image>

                    <span className="text-neutral-700">Tiktok</span>
                  </Link>

                  <Link
                    href={"https://www.tokopedia.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#fff] text-white hover:bg-neutral-200 focus:outline-hidden focus:bg-neutral-300 transition-all duration-300 ease-in-out cursor-pointer"
                    aria-label="Beli di Tokopedia"
                    title="Beli di Tokopedia"
                  >
                    {/* Tokopedia */}

                    <Image
                      className="size-4"
                      src={TokopediaLogo}
                      alt="Tokopedia"
                    ></Image>

                    <span className="text-neutral-700">Tokopedia</span>
                  </Link>
                </div>
              </div>
              {/* End Button Group */}

              {/* List */}
              <div className="mt-7 space-y-3">
                {/* Icon Block */}
                <div className="flex items-center gap-x-3">
                  <svg
                    className="shrink-0 size-5 text-neutral-800"
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <div className="grow">
                    <p className="text-sm text-neutral-800">
                      Checkout dengan aman
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}

                {/* Icon Block */}
                <div className="flex items-center gap-x-3">
                  <svg
                    className="shrink-0 size-5 text-neutral-800"
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
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  <div className="grow">
                    <p className="text-sm text-neutral-800">
                      Garansi pengembalian 30 hari
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
              {/* End List */}

              {/* Accordion */}
              <div className="pt-4 md:pt-8">
                {/* Description */}
                <div className="hs-accordion" id="hs-pro-shpd-item-description">
                  <button
                    className="hs-accordion-toggle py-4 inline-flex justify-between items-center gap-x-3 w-full font-medium text-start text-neutral-800 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="false"
                    aria-controls="hs-pro-shpd-description"
                  >
                    Deskripsi Produk
                    <svg
                      className="hs-accordion-active:hidden block size-4"
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
                    <svg
                      className="hs-accordion-active:block hidden size-4"
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
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>

                  <div className="border-b border-neutral-200">
                    <div
                      id="hs-pro-shpd-description"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-pro-shpd-item-description"
                    >
                      <div className="pb-6">
                        <p className="text-sm text-neutral-500">
                          Warm, spicy, woody. Kombinasi pala, kayu manis, dan
                          oud menciptakan kehangatan yang menggambarkan energi,
                          semangat, dan tekad. Seperti sinar pertama pagi hari —
                          membangkitkan semangat baru dan kepercayaan diri.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Description */}

                {/* Aroma Notes */}
                <div
                  className="hs-accordion"
                  id="hs-pro-shpd-item-size-and-fit"
                >
                  <button
                    className="hs-accordion-toggle py-4 inline-flex justify-between items-center gap-x-3 w-full font-medium text-start text-neutral-800 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="false"
                    aria-controls="hs-pro-shpd-size-and-fit"
                  >
                    Aroma Notes
                    <svg
                      className="hs-accordion-active:hidden block size-4"
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
                    <svg
                      className="hs-accordion-active:block hidden size-4"
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
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>

                  <div className="border-b border-neutral-200">
                    <div
                      id="hs-pro-shpd-size-and-fit"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-pro-shpd-item-size-and-fit"
                    >
                      <div className="pb-6">
                        {/* List */}
                        <ul className="ps-3 space-y-1">
                          <li className="relative text-sm text-neutral-500 ps-3.5 after:absolute after:top-2 after:start-0 after:inline-block after:size-1 after:bg-neutral-800 after:rounded-full">
                            Mind : Nutmeg, Cinnamon
                          </li>
                          <li className="relative text-sm text-neutral-500 ps-3.5 after:absolute after:top-2 after:start-0 after:inline-block after:size-1 after:bg-neutral-800 after:rounded-full">
                            Heart : Cypriol Oil, Olibanum
                          </li>
                          <li className="relative text-sm text-neutral-500 ps-3.5 after:absolute after:top-2 after:start-0 after:inline-block after:size-1 after:bg-neutral-800 after:rounded-full">
                            Soul : Agarwood, Black Musk, Saffron
                          </li>
                        </ul>
                        {/* End List */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Aroma Notes */}

                {/* Shipping and Returns */}
                <div
                  className="hs-accordion"
                  id="hs-pro-shpd-item-shipping-and-returns"
                >
                  <button
                    className="hs-accordion-toggle py-4 inline-flex justify-between items-center gap-x-3 w-full font-medium text-start text-neutral-800 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                    aria-expanded="false"
                    aria-controls="hs-pro-shpd-shipping-and-returns"
                  >
                    Pengembalian
                    <svg
                      className="hs-accordion-active:hidden block size-4"
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
                    <svg
                      className="hs-accordion-active:block hidden size-4"
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
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>

                  <div className="border-b border-neutral-200">
                    <div
                      id="hs-pro-shpd-shipping-and-returns"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-pro-shpd-item-shipping-and-returns"
                    >
                      <div className="pb-6">
                        <p className="mt-3 text-sm text-neutral-500">
                          Pengembalian harus diterima dalam waktu 30 hari
                          setelah konfirmasi pengiriman. Untuk memproses
                          pengembalian Anda, barang harus belum dipakai dan
                          label harus terpasang.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Shipping and Returns */}
              </div>
              {/* End Accordion */}
            </div>
          </div>
          {/* End Product Details */}

          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
}
