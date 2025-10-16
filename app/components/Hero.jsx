"use client";

import Image from "next/image";
import React from "react";
import Model1 from "../../public/images/model9.jpg";
import Model2 from "../../public/images/model7.jpg";
import Model3 from "../../public/images/model8.jpg";
import Model4 from "../../public/images/model5.jpg";
import Model5 from "../../public/images/model4.jpg";

export default function HeroHome() {
  return (
    <div className="bg-neutral-100">
      <div className="relative bg-sky-200/50 before:content-[''] before:absolute before:inset-0 before:size-full before:bg-[radial-gradient(#fff,transparent_1px)] before:bg-[size:20px_20px]">
        <div className="relative z-10 min-h-[520px] lg:min-h-[800px] flex flex-col justify-center">
          <div className="max-w-5xl mx-auto py-16 lg:py-0 px-4 xl:px-0">
            {/* Content */}
            <div className="max-w-lg lg:max-w-2xl mx-auto text-center">
              <p className="mb-4 font-semibold text-sm uppercase tracking-wider text-neutral-600">
                Aroma yang Membuatmu Berani Bermimpi
              </p>

              <h1 className="font-bold text-neutral-800 text-xl md:text-3xl lg:text-5xl leading-[1.1]">
                IFSKY bukan sekadar parfum, IFSKY adalah perwujudan{" "}
                <span className="text-[#0c7fc2]">mimpi.</span>
              </h1>
            </div>
            {/* End Content */}

            {/* Mobile & Tablet gallery (photos appear BELOW text) */}
            <div className="mt-8 md:hidden">
              <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Image
                  className="rounded-xl w-full h-auto pointer-events-none"
                  src={Model1}
                  alt="Hero image 1"
                  width={720}
                  height={480}
                />
                <Image
                  className="rounded-xl w-full h-auto pointer-events-none"
                  src={Model2}
                  alt="Hero image 2"
                  width={880}
                  height={586}
                />
                <Image
                  className="rounded-xl w-full h-auto pointer-events-none"
                  src={Model4}
                  alt="Hero image 3"
                  width={400}
                  height={600}
                />
                <Image
                  className="rounded-xl w-full h-auto pointer-events-none"
                  src={Model5}
                  alt="Hero image 4"
                  width={500}
                  height={700}
                />
                <Image
                  className="rounded-xl w-full h-auto pointer-events-none col-span-2 sm:col-span-3"
                  src={Model3}
                  alt="Hero image 5"
                  width={960}
                  height={640}
                />
              </div>
            </div>

            <div className="hidden xl:block absolute top-[2%] start-[33%] -z-10 scale-100">
              {/* Card */}
              <div className="w-72">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model1}
                  alt="Hero image"
                  width={720}
                  height={480}
                />
              </div>
              {/* End Card */}
            </div>

            <div className="hidden xl:block absolute top-[30%] -start-[2%] -z-10 scale-100">
              {/* Card */}
              <div className="w-90">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model2}
                  alt="Hero image"
                  width={880}
                  height={586}
                />
              </div>
              {/* End Card */}
            </div>

            <div className="hidden xl:block absolute top-[5%] end-[12%] -z-10 scale-100">
              {/* Card */}
              <div className="w-40 lg:w-48">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model4}
                  alt="Hero image"
                  width={400}
                  height={600}
                />
              </div>
              {/* End Card */}
            </div>

            <div className="hidden xl:block absolute top-[55%] lg:top-[50%] end-[2%] -z-10 scale-100">
              {/* Card */}
              <div className="w-40 lg:w-42">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model5}
                  alt="Hero image"
                  width={500}
                  height={700}
                />
              </div>
            </div>

            <div className="hidden xl:block absolute -bottom-[1%] end-[38%] -z-10 scale-100">
              {/* Card */}
              <div className="w-80">
                <Image
                  className="rounded-xl pointer-events-none w-full h-auto"
                  src={Model3}
                  alt="Hero image"
                  width={960}
                  height={640}
                />
              </div>
              {/* End Card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
