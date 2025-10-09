"use client";

import Image from "next/image";
import React from "react";
import Model1 from "../../public/images/model1gen2.jpg";
import Model2 from "../../public/images/model2.jpg";
import Model3 from "../../public/images/model3.jpg";

export default function HeroHome() {
  return (
    <div className="bg-neutral-100">
      <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-12 md:pb-24">
        <h1 className="font-semibold text-neutral-900 text-5xl md:text-6xl">
          <span className="text-cyan-700">IFSKY Fragrance</span> — bagian kecil
          dari langit.
        </h1>
        <div className="max-w-4xl">
          <p className="mt-5 text-neutral-500 font-light text-sm md:text-lg">
            Seperti hamparan biru tak berbatas yang menenangkan jiwa, Langit
            tercipta untuk mereka yang percaya bahwa setiap langkah adalah
            perjalanan menuju keindahan.
          </p>
        </div>
      </div>

      {/* Image with Text Pair */}
      <div className="py-2 space-y-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
          <div>
            <Image
              className="size-full object-cover pointer-events-none rounded-xl h-96"
              src={Model2}
              alt="IFSKY Fragrance Matahari"
              width="auto"
              height="auto"
            />
          </div>
          {/* End Col */}

          <div className="sm:min-h-80 flex flex-col justify-center sm:ps-6 sm:p-10">
            <h3 className="font-medium text-lg px-4 md:text-xl text-cyan-700">
              Kehangatan Matahari
            </h3>

            <p className="mt-3 sm:mt-5 text-sm px-4 sm:text-base text-gray-500">
              Terinspirasi dari sinar pertama yang membangunkan dunia. Matahari
              adalah simbol semangat, energi dan awal baru. Setiap semprotan
              hadirkan aroma segar yang membangkitkan vitalitas, dipadu
              kehangatan woody untuk memberi rasa percaya diri dan optimisme
              sepanjang hari.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
          <div className="sm:order-2">
            <Image
              className="size-full object-cover pointer-events-none rounded-xl"
              src={Model1}
              alt="IFSKY Fragrance Bulan"
              width="auto"
              height="auto"
            />
          </div>
          {/* End Col */}

          <div className="order-1 sm:min-h-80 flex flex-col justify-center sm:pe-6 sm:p-10 sm:ps-0">
            <h3 className="font-medium text-lg px-4 md:text-xl text-cyan-700">
              Bulan Romantis
            </h3>

            <p className="mt-3 sm:mt-5 text-sm px-4 sm:text-base text-gray-500">
              Lahir dari ketenangan malam dan kerinduan yang lembut. Bulan
              adalah simbol keanggunan dan misteri. Dengan sentuhan floral dan
              fruitty yang menenangkan, dibalut aroma musky yang halus yang
              meninggalkan kesan romantis. Cocok menemani momen tenang, syahdu
              atau penuh perasaan.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
          <div>
            <Image
              className="size-full object-cover pointer-events-none rounded-xl"
              src={Model3}
              alt="IFSKY Fragrance Langit"
              width="auto"
              height="auto"
            />
          </div>
          {/* End Col */}

          <div className="sm:min-h-80 flex flex-col justify-center sm:ps-6 sm:p-10">
            <h3 className="font-medium text-lg px-4 md:text-xl text-cyan-700">
              Birunya Langit
            </h3>

            <p className="mt-3 sm:mt-5 text-sm px-4 sm:text-base text-gray-500">
              Terinspirasi dari luasnya cakrawala dan kebebasan tanpa batas.
              Langit adalah simbol mimpi tinggi dan visi besar. Dengan aroma
              Vanilla, Green Notes dan Nuansa Ozonic. Parfum ini memberi sensasi
              lega, segar dan menghadirkan ruang untuk bernafas bebas.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Image with Text Pair */}
    </div>
  );
}
