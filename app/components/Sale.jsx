"use client";

import React from "react";
import SalePicture from "../../public/images/sale1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function SaleHome() {
  return (
    <div className="pt-10 pb-8 lg:pb-2 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-neutral-100">
      <div className="h-72 sm:h-96 xl:h-120 relative">
        <Image
          className="bg-neutral-100 pointer-events-none absolute inset-0 size-full object-cover rounded-xl"
          src={SalePicture}
          alt="IFSKY Diskon Parfum"
          width="auto"
          height="auto"
        />
        <div className="absolute inset-0 rounded-xl bg-black/20 pointer-events-none" />
        <div className="relative z-10 size-full max-w-md mx-auto flex flex-col justify-center items-center">
          <p className="text-sm md:text-base uppercase text-white">
            promo launching
          </p>

          <h1 className="mt-3 font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
            <sup className="text-xs md:text-lg">*</sup>Diskon hinga 50%
          </h1>

          {/* Button Group */}
          <div className="mt-5 md:mt-10">
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                className="text-sm md:text-base transition-all duration-200 ease-in-out text-white underline underline-offset-4 hover:text-white/80 focus:outline-hidden focus:text-white/80"
                target="_blank"
                href={
                  "https://wa.me/+6289679632323?text=Halo!%20Saya%20baru%20saja%20mengunjungi%20website%20resmi%20IFSKY%20dan%20saya%20tertarik%20dengan%20produk%20anda.%20Bisa%20kita%20berbicara%20lebih%20lanjut%20tentang%20diskon%20yang%20sedang%20berlaku?"
                }
              >
                Hubungi kami
              </Link>
            </div>
          </div>
          {/* End Button Group */}
        </div>
      </div>
    </div>
  );
}
