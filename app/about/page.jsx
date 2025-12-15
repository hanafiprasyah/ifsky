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
              The IFSKY Universe
            </h1>

            <p className="mt-5 text-sm md:text-lg text-neutral-500 font-light italic">
              a piece of the sky.
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
              alt="IFSKY — About Us"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-4 pb-8 lg:pb-2 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div className="lg:pe-[20%] ">
            <h2 className="font-semibold text-2xl md:text-3xl text-gray-800">
              IFSKY is more than a fragrance—it inspires you to believe in your
              dreams and dare to pursue them.
            </h2>
          </div>
          {/* End Col */}

          <div className="space-y-5">
            <p className="text-gray-500 text-sm md:text-lg">
              Some want to be known, some to be remembered, and some to feel
              free. From there, IFSKY was born as a tangible expression of
              dreams—no longer kept hidden, but brought to life as a creation
              that many can experience.
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              The name <span className="font-bold">IFSKY</span> was chosen
              because the sky is where all dreams are hung—boundless, vast, and
              full of hope. Just like the aspiration that gave birth to this
              brand: from a small dream, something big and meaningful can grow.
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
            A digital space for energy, hope, and dreams.
          </h1>

          <p className="text-sm md:text-lg text-gray-500">
            IFSKY presents a unique ecosystem through this official website,
            where every customer—whom we call <i>Skydreamers</i>—can write their
            dreams and revisit them anytime as a personal reminder and
            motivation. There, each dream becomes part of the IFSKY universe, a{" "}
            <b>digital space for energy, hope, and dreams</b>.
          </p>

          <div className="w-full h-80 bg-gray-200 rounded-lg">
            <Image
              className="size-full pointer-events-none object-cover rounded-lg"
              src={Pic5}
              alt="A digital space for energy, hope, and dreams."
              width="auto"
              height="auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h2 className="font-medium text-2xl text-gray-800">
              Every scent is crafted to inspire you to dream—and make it happen.
            </h2>

            <p className="text-sm md:text-lg text-gray-500">
              IFSKY isn’t just a scent. It’s a wearable reminder—of purpose,
              process, and the courage to move forward. On ifsky.id, you can
              write your dreams, save them as reminders, and review your
              progress. Each variant represents a life phase: energy (Matahari),
              calm (Bulan), and freedom (Langit).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full h-60 bg-gray-200 rounded-lg">
              <Image
                className="size-full pointer-events-none object-cover rounded-lg"
                src={Pic4}
                alt="IFSKY: Every scent is crafted to inspire you to dream and make it happen."
                width="auto"
                height="auto"
              />
            </div>

            <div className="w-full h-60 bg-gray-200 rounded-lg">
              <Image
                className="size-full pointer-events-none object-cover rounded-lg"
                src={Pic3}
                alt="IFSKY: Every scent is crafted to inspire you to dream and make it happen."
                width="auto"
                height="auto"
              />
            </div>
          </div>

          <p className="text-2xl text-gray-800">Key Advantages of IFSKY</p>

          <div className="w-full h-80 bg-gray-200 rounded-lg">
            <Image
              className="size-full pointer-events-none object-cover rounded-lg"
              src={Pic2}
              alt="Key Advantages of IFSKY"
              width="auto"
              height="auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Scents that Tell a Story
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                Each variant (Matahari, Bulan, Langit) represents life phases
                and human emotions—energy, calm, and freedom.
              </p>
            </div>

            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Personal & Philosophical Meaning
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                IFSKY is not just a product; it’s a symbol of the journey toward
                your dreams.
              </p>
            </div>

            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Digital Dream Space
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                The ifsky.id website provides a dashboard for customers to
                write, save, and track their dreams, creating a genuine
                emotional connection between scent, hope, and life.
              </p>
            </div>

            <div className="ps-5">
              <div className="relative before:absolute before:top-2.5 before:-start-5 before:w-3 before:h-[1.5px] before:bg-gray-800">
                <h4 className="font-medium text-lg text-gray-800">
                  Premium & Unisex
                </h4>
              </div>
              <p className="text-sm text-gray-500">
                Made with high-quality ingredients, lasts all day, and suitable
                for men and women.
              </p>
            </div>
          </div>

          <div className="w-full h-80 bg-gray-200 rounded-lg">
            <Image
              className="size-full object-cover rounded-lg"
              src={Pic1}
              alt="IFSKY is more than a fragrance—it inspires you to believe in your dreams and dare to pursue them."
              width="auto"
              height="auto"
            />
          </div>

          <h2 className="font-medium text-gray-800">Once again…</h2>

          <h1 className="text-2xl font-bold text-gray-800">
            IFSKY is more than a fragrance—it inspires you to believe in your
            dreams and dare to pursue them.
          </h1>
        </div>
      </div>
      {/* End Work */}
    </>
  );
}
