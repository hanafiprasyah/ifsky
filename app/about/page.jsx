import Image from "next/image";
import React from "react";
import IfskyLogos from "../../public/images/ifsky/ifskyhorizontal.svg";

export const metadata = {
  title: "About Us",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="pt-10 md:pt-20 pb-14 md:pb-20">
          {/* Heading */}
          <div className="mb-10 max-w-5xl mx-auto text-center">
            <h1 className="font-bold text-gray-800 text-4xl md:text-5xl">
              Cerita di balik IFSKY
            </h1>

            <p className="mt-5 text-sm md:text-lg text-neutral-500 font-light italic">
              bagian kecil dari langit.
            </p>
          </div>
          {/* End Heading */}

          <div className="w-full h-64 md:h-96 bg-neutral-600 rounded-xl">
            <Image
              className="size-full object-cover rounded-xl"
              src={IfskyLogos}
              priority={true}
              width="auto"
              height="auto"
              quality={100}
              alt="IFSKY tentang kami"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-4 pb-8 lg:pb-2 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div className="lg:pe-[20%] ">
            <h2 className="font-semibold text-2xl md:text-3xl text-gray-800">
              Setiap orang punya mimpi.
            </h2>
          </div>
          {/* End Col */}

          <div className="space-y-5">
            <p className="text-gray-500">
              Ada yang ingin dikenal, ada yang ingin diingat, ada yang ingin
              merasakan kebebasan. Dari situlah IFSKY hadir sebagai wujud nyata
              dari mimpi yang tidak lagi hanya disimpan terpendam, tetapi
              diwujudkan menjadi karya yang bisa dirasakan oleh banyak orang.
            </p>
            <p className="text-gray-500">
              Nama <span className="font-bold">IFSKY</span> dipilih karena
              langit adalah tempat semua mimpi digantungkan. Tak terbatas, luas,
              dan penuh harapan. Sama seperti impian yang melahirkan brand ini
              bahwa dari sebuah mimpi kecil, bisa tumbuh sesuatu yang besar dan
              berarti.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </>
  );
}
