"use client";

import React from "react";
import Image from "next/image";
import Product1 from "../../public/images/product4.jpg";
import Product2 from "../../public/images/product5.jpg";
import Product3 from "../../public/images/product6.jpg";
import dynamic from "next/dynamic";
import BulanModal from "./modal/BulanModal";
import LangitModal from "./modal/LangitModal";

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
  return (
    <>
      <div className="pt-10 lg:pt-16 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-neutral-100">
        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-y-5 gap-x-5 md:gap-x-8">
          {/* Matahari */}
          <button
            type="button"
            className="group relative block w-16 sm:w-20 lg:w-24 text-center cursor-pointer focus:outline-hidden"
            data-hs-overlay="#hs-pro-shchpdm"
          >
            <Image
              className="size-16 sm:size-20 lg:size-24 mx-auto object-cover transition-all duration-300 ease-in-out bg-neutral-100 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-cyan-500"
              src={Product1}
              alt="Matahari IFSKY"
              priority={true}
              width="auto"
              height="auto"
            />
            <span className="mt-3 block text-sm break-words text-gray-800">
              Matahari
            </span>
          </button>
          {/* End Matahari */}

          {/* Bulan */}
          <button
            type="button"
            className="group relative block w-16 sm:w-20 lg:w-24 cursor-pointer text-center focus:outline-hidden"
            data-hs-overlay="#hs-pro-shchpdb"
          >
            <Image
              className="size-16 sm:size-20 lg:size-24 mx-auto object-cover transition-all duration-300 ease-in-out bg-neutral-100 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-cyan-500"
              src={Product2}
              alt="Bulan IFSKY"
              priority={true}
              width="auto"
              height="auto"
            />
            <span className="mt-3 block text-sm break-words text-gray-800">
              Bulan
            </span>
          </button>
          {/* End Bulan */}

          {/* Langit */}
          <button
            type="button"
            className="group relative block w-16 sm:w-20 lg:w-24 text-center cursor-pointer focus:outline-hidden"
            data-hs-overlay="#hs-pro-shchpdl"
          >
            <Image
              className="size-16 sm:size-20 lg:size-24 mx-auto object-cover transition-all duration-300 ease-in-out bg-neutral-100 rounded-full ring-2 ring-offset-2 ring-transparent group-hover:ring-cyan-500"
              src={Product3}
              alt="Langit IFSKY"
              priority={true}
              width="auto"
              height="auto"
            />
            <span className="mt-3 block text-sm break-words text-gray-800">
              Langit
            </span>
          </button>
          {/* End Langit */}
        </div>
        {/* End of Grid */}
      </div>
      <ModalMatahari />
      <BulanModal />
      <LangitModal />
    </>
  );
}
