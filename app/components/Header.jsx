"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import HeaderLogo from "../../public/images/ifsky/ifskyaja2.svg";
import Product1 from "../../public/images/product4.jpg";
import Product2 from "../../public/images/product5.jpg";
import Product3 from "../../public/images/product6.jpg";

const cx = (...c) => c.filter(Boolean).join(" ");

function HeaderImpl() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname.startsWith("/about");
  const isProducts = pathname.startsWith("/products");

  // Close sidebar overlay (mobile) after navigation or menu click
  const closeSidebar = () => {
    try {
      window.HSOverlay?.close?.("#hs-pro-dmh");
    } catch {}
  };

  // Opsional: jika pakai komponen Preline re-scan setelah route change
  useEffect(() => {
    // jalan hanya ketika path berubah
    // re-scan Preline dan tutup sidebar kalau sedang terbuka (mobile)
    queueMicrotask(() => {
      window.HSStaticMethods?.autoInit?.();
      window.HSOverlay?.close?.("#hs-pro-dmh");
    });
  }, [pathname]);

  return (
    <header className="sticky top-0 pt-2 pb-2 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-neutral-100">
      <div className="max-w-[85rem] flex flex-wrap justify-between md:grid md:grid-cols-5 basis-full items-center w-full mx-auto py-[11px] md:py-0 px-4 sm:px-6 lg:px-8">
        <div className="md:col-span-1 order-1">
          <div className="flex items-center gap-x-1">
            {/* Logo */}
            {/* <Image
              className="flex-none select-none pointer-events-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
              src={HeaderLogo}
              aria-label="ifsky_logo"
              alt="ifsky_logo"
              width={120}
              height={120}
              priority
            /> */}
            {/* End Logo */}
          </div>
        </div>
        <div className="md:col-span-1 order-2 md:order-3 flex justify-end items-center gap-x-2">
          <div className="md:hidden">
            {/* Collapse Mobile Button Trigger */}
            <button
              type="button"
              className="w-7 h-9.5 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-neutral-100 text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50"
              id="hs-pro-dmh-collapse"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-pro-dmh"
              aria-label="Toggle navigation"
              data-hs-overlay="#hs-pro-dmh"
              data-hs-overlay-options='{
                    "moveOverlayToBody": 767
                  }'
            >
              <svg
                className="shrink-0 size-4"
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
                <circle cx={12} cy={12} r={1} />
                <circle cx={12} cy={5} r={1} />
                <circle cx={12} cy={19} r={1} />
              </svg>
            </button>
            {/* End Collapse Button Trigger */}
          </div>
        </div>
        <div className="md:col-span-3 order-3 md:order-2 basis-full grow md:basis-auto md:grow-0">
          {/* Nav */}
          <div
            id="hs-pro-dmh"
            className="hs-overlay hs-overlay-open:translate-x-0 [--auto-close:md]
                          -translate-x-full md:translate-none transition-all duration-300 transform
                          size-full sm:w-96 bg-neutral-100
                          hidden
                          fixed top-0 start-0 z-60
                          md:static md:block md:h-auto md:w-full md:transition-none md:transform-none md:z-40"
            role="dialog"
            tabIndex={-1}
            aria-label="Sidebar"
            data-hs-overlay-close-on-resize=""
          >
            <div className="overflow-hidden overflow-y-auto h-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-100 [&::-webkit-scrollbar-thumb]:bg-neutral-300">
              {/* Header */}
              <div className="py-3 px-6 md:hidden flex justify-between items-center">
                <h3 className="font-medium text-gray-800">Menu</h3>
                {/* Close Button */}
                <button
                  type="button"
                  className="py-1.5 px-2 inline-flex justify-center items-center gap-x-1 rounded-full border border-gray-200 text-xs text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Close"
                  data-hs-overlay="#hs-pro-dmh"
                >
                  <span className="hidden lg:block">Esc</span>
                  <span className="block lg:hidden">Close</span>
                  <svg
                    className="shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Header */}
              <div className="md:flex md:justify-center md:items-center py-4 px-6 md:p-0">
                {/* Home Button Link */}
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                  {/* Link Button */}
                  <Link
                    id="hs-pro-shnnd2"
                    type="button"
                    onClick={closeSidebar}
                    data-hs-overlay="#hs-pro-dmh"
                    href={"/"}
                    aria-current={isHome ? "page" : undefined}
                    className={cx(
                      "hs-dropdown-toggle transition-all duration-300 ease-in-out pointer-events-auto cursor-pointer py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start rounded-lg underline-offset-4 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden",
                      isHome
                        ? "text-gray-800 underline hover:text-neutral-500"
                        : "text-gray-500 hover:text-gray-800"
                    )}
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <span className="relative">Home</span>
                  </Link>
                  {/* End Link Button */}
                </div>
                {/* End Home Button Link */}

                {/* About Button Link */}
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                  {/* Link Button */}
                  <Link
                    id="hs-pro-shnnd6"
                    type="button"
                    onClick={closeSidebar}
                    data-hs-overlay="#hs-pro-dmh"
                    href={"/about"}
                    aria-current={isAbout ? "page" : undefined}
                    className={cx(
                      "hs-dropdown-toggle transition-all duration-300 ease-in-out pointer-events-auto cursor-pointer py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start rounded-lg underline-offset-4 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden",
                      isAbout
                        ? "text-gray-800 underline hover:text-neutral-500"
                        : "text-gray-500 hover:text-gray-800"
                    )}
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <span className="relative">
                      About Us
                      <span className="absolute -top-1 -end-2">
                        <span className="relative flex">
                          <span className="animate-ping absolute inline-flex size-full rounded-full bg-indigo-400 opacity-75" />
                          <span className="relative inline-flex rounded-full size-2 bg-indigo-500" />
                          <span className="sr-only">Current</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                  {/* End Link Button */}
                </div>
                {/* End About Button Link */}

                {/* Products Dropdown Link */}
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                  {/* Link Button */}
                  <button
                    id="hs-pro-shnnd4"
                    type="button"
                    className={cx(
                      "hs-dropdown-toggle transition-all duration-300 ease-in-out pointer-events-auto cursor-pointer py-3 md:py-5 md:px-4 lg:px-5 w-full md:w-auto flex items-center text-sm text-start rounded-lg underline-offset-4 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden",
                      isProducts
                        ? "text-gray-800 underline hover:text-neutral-500"
                        : "text-gray-500 hover:text-gray-800"
                    )}
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    Our Products
                    <svg
                      className="md:hidden hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 ms-auto md:ms-2 shrink-0 size-4"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {/* End Link Button */}
                  {/* Dropdown Menu */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 md:bg-neutral-100 md:border-t md:border-gray-200 md:rounded-b-xl md:shadow-xl before:absolute before:-top-4 before:start-0 before:w-full before:h-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-shnnd4"
                  >
                    <div className="max-w-[85rem] w-full mx-auto py-2 md:py-4 lg:py-10 md:px-6 lg:px-8">
                      <div className="max-w-lg w-full mx-auto text-center">
                        <p className="mb-2">
                          <span className="py-1 px-2.5 pointer-events-none inline-block border border-gray-500 text-gray-800 text-xs rounded-full">
                            Coming soon
                          </span>
                        </p>
                        <p className="mb-5 font-medium text-lg pointer-events-none text-gray-800">
                          Fragrance Store
                        </p>
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="group relative rounded-xl overflow-hidden">
                            <Image
                              className="shrink-0 w-full h-24 md:h-52 object-cover transform-gpu transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
                              src={Product1}
                              alt="Banner Image"
                              width="auto"
                              height="auto"
                            />
                          </div>
                          <div className="group relative rounded-xl overflow-hidden">
                            <Image
                              className="shrink-0 w-full h-24 md:h-52 object-cover transform-gpu transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
                              src={Product2}
                              alt="Banner Image"
                              width="auto"
                              height="auto"
                            />
                          </div>
                          <div className="group relative rounded-xl overflow-hidden">
                            <Image
                              className="shrink-0 w-full h-24 md:h-52 object-cover transform-gpu transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
                              src={Product3}
                              alt="Banner Image"
                              width="auto"
                              height="auto"
                            />
                          </div>
                        </div>
                        <p className="mt-5 text-gray-800">
                          In collaboration with INFINITY!
                        </p>
                        <div className="mt-5">
                          <Link
                            className="inline-block transition-all duration-300 ease-in-out text-sm text-gray-800 underline underline-offset-4 decoration-1 hover:text-indigo-600 focus:outline-hidden focus:text-indigo-600"
                            href="/products"
                            onClick={closeSidebar}
                            data-hs-overlay="#hs-pro-dmh"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Dropdown Menu */}
                </div>
                {/* End Products Dropdown Link */}
              </div>
            </div>
          </div>
          {/* End Nav */}
        </div>
      </div>
    </header>
  );
}

export default React.memo(HeaderImpl);
