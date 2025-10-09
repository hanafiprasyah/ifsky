"use client";

import React from "react";
import Image from "next/image";
import Product1 from "../../public/images/product4.jpg";
import Product2 from "../../public/images/product5.jpg";
import Product3 from "../../public/images/product6.jpg";

export default function SliderHome() {
  return (
    <div className="pt-4 sm:pt-6 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-neutral-100">
      <div
        data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "isInfiniteLoop": true
          }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-120 md:h-160 bg-neutral-100 rounded-xl">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {/* Matahari */}
            <div className="hs-carousel-slide">
              {/* Slide */}
              <div className="h-120 md:h-160 relative">
                <Image
                  className="absolute inset-0 size-full object-cover rounded-xl"
                  src={Product1}
                  width="auto"
                  height="auto"
                  priority={true}
                  alt="IFSKY Matahari Fragrance"
                />
                <div className="absolute inset-0 rounded-xl bg-black/50 pointer-events-none" />
                <div className="relative z-10 text-center size-full max-w-lg mx-auto px-12 flex flex-col justify-center items-center">
                  <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
                    Matahari
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white">
                    Memberikan karakter yang energik, cerah dan penuh motivasi.
                  </p>
                </div>
              </div>
              {/* End Slide */}
            </div>
            {/* End Matahari */}

            {/* Bulan */}
            <div className="hs-carousel-slide">
              {/* Slide */}
              <div className="h-120 md:h-160 relative">
                <Image
                  className="absolute inset-0 size-full object-cover rounded-xl"
                  src={Product2}
                  width="auto"
                  height="auto"
                  priority={true}
                  alt="IFSKY Bulan Fragrance"
                />
                <div className="absolute inset-0 rounded-xl bg-black/50 pointer-events-none" />
                <div className="relative z-10 text-center size-full max-w-lg mx-auto px-12 flex flex-col justify-center items-center">
                  <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
                    Bulan
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white">
                    Lahir dari ketenangan malam dan kerinduan yang lembut.
                  </p>
                </div>
              </div>
              {/* End Slide */}
            </div>
            {/* End Bulan */}

            {/* Langit */}
            <div className="hs-carousel-slide">
              {/* Slide */}
              <div className="h-120 md:h-160 relative">
                <Image
                  className="absolute inset-0 size-full object-cover rounded-xl"
                  src={Product3}
                  width="auto"
                  height="auto"
                  priority={true}
                  alt="IFSKY Langit Fragrance"
                />
                <div className="absolute inset-0 rounded-xl bg-black/50 pointer-events-none" />
                <div className="relative z-10 text-center size-full max-w-lg mx-auto px-12 flex flex-col justify-center items-center">
                  <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
                    Langit
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white">
                    Luasnya cakrawala dan kebebasan tanpa batas untuk memberikan
                    ruang bernafas bebas.
                  </p>
                </div>
              </div>
              {/* End Slide */}
            </div>
            {/* End Langit */}
          </div>
        </div>

        {/* Previous */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default mx-4 cursor-pointer absolute top-1/2 start-1 sm:start-4 inline-flex justify-center items-center size-6 md:size-10 bg-neutral-100 border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3 md:size-5"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        {/* Next */}
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default mx-4 cursor-pointer absolute top-1/2 end-1 sm:end-4 inline-flex justify-center items-center size-6 md:size-10 bg-neutral-100 border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3 md:size-5"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </button>

        {/* Nav Count */}
        <div className="p-2 absolute bottom-0 inset-x-0 text-center">
          <div className="py-1 px-2 inline-flex justify-center items-center gap-2 bg-neutral-100 rounded-full">
            <span className="hs-carousel-info text-xs text-gray-800">
              <span className="hs-carousel-info-current inline-block min-w-2 text-center">
                1
              </span>{" "}
              /{" "}
              <span className="hs-carousel-info-total inline-block min-w-2 text-center">
                3
              </span>
            </span>
          </div>
        </div>
        {/* End Nav Count */}
      </div>
    </div>
  );
}
