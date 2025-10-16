export const metadata = {
  title: "Products",
  alternates: { canonical: "/products" },
};

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Product1 from "../../public/images/product4.jpg";
import Product2 from "../../public/images/product5.jpg";
import Product3 from "../../public/images/product6.jpg";

export default function ProductList() {
  return (
    <div className="px-8 md:px-16 py-4 md:py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-3 sm:gap-x-5 ">
        {/* Matahari */}
        <div className=" group relative">
          <div className="relative">
            <Link
              className="block rounded-xl focus:outline-hidden"
              href={"/products/matahari"}
              target="_self"
            >
              <Image
                className="bg-gray-100 rounded-xl pointer-events-none"
                src={Product1}
                alt="IFSKY Matahari"
                width="auto"
                height="auto"
              />
            </Link>
          </div>

          <Link
            className="after:z-1 after:absolute after:inset-0"
            href={"/products/matahari"}
            target="_self"
          ></Link>

          <div className="pt-3">
            <span className="block text-sm md:text-base text-gray-800">
              IFSKY Matahari Variance
            </span>

            <p className="mt-2 font-medium text-md text-gray-900">
              Rp. 189.000
            </p>

            <p className="mt-1 font-medium text-xs text-gray-500">
              Cocok untuk: Pria dominan yang membawa energi dan inspirasi di
              setiap langkah.
            </p>
          </div>
        </div>
        {/* End Matahari */}

        {/* Bulan */}
        <div className=" group relative">
          <div className="relative">
            <Link
              className="block rounded-xl focus:outline-hidden"
              href={"/products/bulan"}
              target="_self"
            >
              <Image
                className="bg-gray-100 rounded-xl pointer-events-none"
                src={Product2}
                alt="IFSKY Bulan"
                width="auto"
                height="auto"
              />
            </Link>

            {/* Badge Group */}
            <div className="absolute top-0 start-0 pt-2 ps-2 pointer-events-none">
              <div className="flex flex-col gap-y-1">
                <p>
                  <span className="py-1 ps-1.5 pe-2 bg-white font-medium text-xs text-gray-800 rounded-full shadow-2xs">
                    🔥 Trending
                  </span>
                </p>
              </div>
            </div>
            {/* End Badge Group */}
          </div>

          <Link
            className="after:z-1 after:absolute after:inset-0"
            href={"/products/bulan"}
            target="_self"
          ></Link>

          <div className="pt-3">
            <span className="block text-sm md:text-base text-gray-800">
              IFSKY Bulan Variance
            </span>

            <p className="mt-2 font-medium text-md text-gray-900">
              Rp. 189.000
            </p>

            <p className="mt-1 font-medium text-xs text-gray-500">
              Cocok untuk: Wanita elegan & lembut, yang percaya bahwa keindahan
              sejati datang dari ketenangan hati.
            </p>
          </div>
        </div>
        {/* End Bulan */}

        {/* Langit */}
        <div className=" group relative">
          <div className="relative">
            <Link
              className="block rounded-xl focus:outline-hidden"
              href={"/products/langit"}
              target="_self"
            >
              <Image
                className="bg-gray-100 rounded-xl pointer-events-none"
                src={Product3}
                alt="IFSKY Langit"
                width="auto"
                height="auto"
              />
            </Link>
          </div>

          <Link
            className="after:z-1 after:absolute after:inset-0"
            href={"/products/langit"}
            target="_self"
          ></Link>

          <div className="pt-3">
            <span className="block text-sm md:text-base text-gray-800">
              IFSKY Langit Variance
            </span>

            <p className="mt-2 font-medium text-md text-gray-900">
              Rp. 189.000
            </p>

            <p className="mt-1 font-medium text-xs text-gray-500">
              Cocok untuk: Pria & wanita modern yang hidup dengan kebebasan,
              mimpi, dan keyakinan.
            </p>
          </div>
        </div>
        {/* End Langit */}
      </div>
    </div>
  );
}
