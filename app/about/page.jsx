import Image from "next/image";
import React from "react";
import IfskyLogos from "../../public/images/ifsky/ifskyhorizontal.svg";
import Pic1 from "../../public/images/about1.jpg";
import Pic2 from "../../public/images/about2.jpg";
import Pic3 from "../../public/images/about3.jpg";
import Pic4 from "../../public/images/about4.jpg";
import Pic5 from "../../public/images/about5.jpg";

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
              Semesta IFSKY
            </h1>

            <p className="mt-5 text-sm md:text-lg text-neutral-500 font-light italic">
              bagian kecil dari langit.
            </p>
          </div>
          {/* End Heading */}

          <div className="w-full h-64 md:h-96 bg-neutral-600 rounded-xl">
            <Image
              className="size-full pointer-events-none object-cover rounded-xl"
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
              IFSKY bukan hanya membuatmu wangi, tapi membuatmu percaya pada
              impianmu dan berani bermimpi.
            </h2>
          </div>
          {/* End Col */}

          <div className="space-y-5">
            <p className="text-gray-500 text-sm md:text-lg">
              Ada yang ingin dikenal, ada yang ingin diingat, ada yang ingin
              merasakan kebebasan. Dari situlah IFSKY hadir sebagai wujud nyata
              dari mimpi yang tidak lagi hanya disimpan terpendam, tetapi
              diwujudkan menjadi karya yang bisa dirasakan oleh banyak orang.
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
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

      {/* Work */}
      <div className="w-full max-w-6xl pb-8 mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-2xl font-medium text-gray-800">
            Ruang digital tempat energi, harapan, dan impian.
          </h1>

          <p className="text-sm md:text-lg text-gray-500">
            IFSKY menghadirkan sebuah ekosistem unik melalui website resmi ini,
            tempat setiap customer yang atau yang kami panggil <i>Skydreamer</i>{" "}
            bisa menuliskan impian mereka dan melihatnya setiap saat sebagai
            reminder diri dan motivasi atas impian tersebut. Di sana, setiap
            mimpi menjadi bagian dari semesta IFSKY,{" "}
            <b>ruang digital tempat energi, harapan, dan impian</b>.
          </p>

          <div className="w-full h-80 bg-gray-200 rounded-lg">
            <Image
              className="size-full pointer-events-none object-cover rounded-lg"
              src={Pic5}
              alt="Ruang digital tempat energi, harapan, dan impian."
              width="auto"
              height="auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h2 className="font-medium text-2xl text-gray-800">
              Setiap aroma diciptakan untuk menginspirasi setiap orang agar
              berani bermimpi dan mewujudkannya.
            </h2>

            <p className="text-sm md:text-lg text-gray-500">
              IFSKY bukan sekadar wangi. Ia adalah pengingat yang kamu
              kenakan—tentang tujuan, proses, dan keberanian untuk melangkah. Di
              ifsky.id, kamu bisa menuliskan impian, menyimpannya sebagai
              pengingat, dan meninjau progresnya. Setiap varian mewakili fase
              hidup: energi (Matahari), ketenangan (Bulan), dan kebebasan
              (Langit).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full h-60 bg-gray-200 rounded-lg">
              <Image
                className="size-full pointer-events-none object-cover rounded-lg"
                src={Pic4}
                alt="IFSKY: Setiap aroma diciptakan untuk menginspirasi setiap orang agar
              berani bermimpi dan mewujudkannya."
                width="auto"
                height="auto"
              />
            </div>

            <div className="w-full h-60 bg-gray-200 rounded-lg">
              <Image
                className="size-full pointer-events-none object-cover rounded-lg"
                src={Pic3}
                alt="IFSK: Setiap aroma diciptakan untuk menginspirasi setiap orang agar
              berani bermimpi dan mewujudkannya."
                width="auto"
                height="auto"
              />
            </div>
          </div>

          <p className="text-2xl text-gray-800">⁠Keunggulan Utama IFSKY</p>

          <div className="w-full h-80 bg-gray-200 rounded-lg">
            <Image
              className="size-full pointer-events-none object-cover rounded-lg"
              src={Pic2}
              alt="⁠Keunggulan Utama IFSKY"
              width="auto"
              height="auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Aroma yang Bercerita
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                Setiap varian (Matahari, Bulan, Langit) mewakili fase hidup dan
                emosi manusia, energi, ketenangan, dan kebebasan.
              </p>
            </div>

            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Makna Personal & Filosofis
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                IFSKY bukan sekadar produk, tapi simbol perjalanan menuju
                impian.
              </p>
            </div>

            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Ruang Digital Impian
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                Website ifsky.id menyediakan dashboard bagi customer untuk
                menulis, menyimpan, dan memantau impian mereka, menciptakan
                koneksi emosional yang nyata antara aroma, harapan, dan
                kehidupan.
              </p>
            </div>

            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Premium & Unisex{" "}
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                Terbuat dari bahan berkualitas tinggi, tahan seharian, cocok
                untuk pria dan wanita.
              </p>
            </div>
          </div>

          <div className="w-full h-80 bg-gray-200 rounded-lg">
            <Image
              className="size-full object-cover rounded-lg"
              src={Pic1}
              alt="IFSKY adalah parfum yang bukan hanya membuatmu wangi, tapi membuatmu
            percaya pada impianmu dan berani bermimpi."
              width="auto"
              height="auto"
            />
          </div>

          <h2 className="font-medium text-gray-800">Sekali lagi...</h2>

          <h1 className="text-2xl font-bold text-gray-800">
            IFSKY adalah parfum yang bukan hanya membuatmu wangi, tapi membuatmu
            percaya pada impianmu dan berani bermimpi.
          </h1>
        </div>
      </div>
      {/* End Work */}
    </>
  );
}
