"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackOrderComponent() {
  const [mode, setMode] = useState("resi"); // 'phone' | 'resi'
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errText, setErrText] = useState("");
  const router = useRouter();

  // Toast helper
  const showToast = async (message, type = "error") => {
    try {
      const { default: Toastify } = await import("toastify-js");
      Toastify({
        text: message,
        duration: 4000,
        gravity: "top",
        position: "right",
        close: true,
        stopOnFocus: true,
        style: {
          background: type === "error" ? "#dc2626" : "#059669",
          color: "#fff",
          borderRadius: "12px",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)",
        },
      }).showToast();
    } catch (e) {
      console.error("Toast failed:", e);
      alert(message);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrText("");

    try {
      const res = await fetch("/api/track-order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ mode, number, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = data?.error || "Gagal melacak pesanan.";
        setErrText(msg);
        showToast(msg, "error");
        return;
      }
      router.push(`/invoice?id=${encodeURIComponent(data.order_id)}`);
    } catch (e) {
      const msg = "Koneksi bermasalah. Coba lagi.";
      setErrText(msg);
      showToast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 lg:py-20 w-full max-w-[85rem] bg-neutral-100 rounded-xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="w-full max-w-sm mx-auto">
        <form onSubmit={submit}>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-medium text-xl text-gray-800">
                Lacak pesananmu
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="mb-2 font-medium text-sm text-gray-800">
                  Cari berdasarkan
                </h3>

                {/* Checkbox Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Phone */}
                  <label
                    htmlFor="hs-pro-shtoflb1"
                    className={`${
                      mode === "phone"
                        ? "has-checked:border-cyan-600 has-checked:ring-1 has-checked:ring-cyan-600"
                        : ""
                    } p-2 sm:p-3 text-xs flex flex-col justify-center items-center sm:text-[13px] text-center bg-white text-gray-800 border border-gray-200 cursor-pointer rounded-lg`}
                  >
                    <input
                      type="radio"
                      id="hs-pro-shtoflb1"
                      className="hidden bg-transparent border-gray-400 text-cyan-600 focus:ring-white focus:ring-offset-0"
                      value="@@title"
                      name="hs-pro-shtoflb"
                      onClick={() => setMode("phone")}
                    />
                    <svg
                      className="shrink-0 size-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    <span className="block mt-2">Nomor Telepon</span>
                  </label>
                  {/* End Phone */}

                  {/* Code QR */}
                  <label
                    htmlFor="hs-pro-shtoflb2"
                    className={`${
                      mode === "resi"
                        ? "has-checked:border-cyan-600 has-checked:ring-1 has-checked:ring-cyan-600"
                        : ""
                    } p-2 sm:p-3 text-xs flex flex-col justify-center items-center sm:text-[13px] text-center bg-white text-gray-800 border border-gray-200 cursor-pointer rounded-lg`}
                  >
                    <input
                      type="radio"
                      id="hs-pro-shtoflb2"
                      className="hidden bg-transparent border-gray-400 text-cyan-600 focus:ring-white focus:ring-offset-0"
                      value="@@title"
                      name="hs-pro-shtoflb"
                      onClick={() => setMode("resi")}
                      defaultChecked
                    />
                    <svg
                      className="shrink-0 size-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                      <path d="M8 7v10" />
                      <path d="M12 7v10" />
                      <path d="M17 7v10" />
                    </svg>
                    <span className="block mt-2">Nomor Resi</span>
                  </label>
                  {/* End Code QR */}
                </div>
                {/* End Checkbox Grid */}
              </div>

              <div className="space-y-1.5">
                {/* Input */}
                <div>
                  <label htmlFor="hs-pro-shtofon" className="sr-only">
                    {mode === "resi" ? "Nomor Resi" : "Nomor Telepon"}
                  </label>

                  <input
                    id="hs-pro-shtofon"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    className="py-3 px-4 block w-full bg-white text-gray-500 border-gray-400 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={
                      mode === "resi"
                        ? "Nomor Resi (Contoh: JNE123456)"
                        : "Nomor Telepon (Contoh: 62xxxx)"
                    }
                  />
                </div>
                {/* End Input */}

                <div className="hs-tooltip inline-block">
                  <button
                    type="button"
                    className="hs-tooltip-toggle text-xs text-gray-500 underline underline-offset-4 focus:outline-hidden"
                  >
                    Dimana lihat Nomor Resi?<sup>*</sup>
                  </button>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 max-w-48 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg"
                    role="tooltip"
                  >
                    Nomor pesanan Anda dapat ditemukan di bagian atas email
                    konfirmasi yang Anda terima saat pembelian.
                  </span>
                </div>
              </div>

              {/* Input */}
              <div>
                <label htmlFor="hs-pro-shtofem" className="sr-only">
                  Email
                </label>

                <input
                  id="hs-pro-shtofem"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="py-3 px-4 block w-full bg-white text-gray-500 border-gray-400 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Email"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Email digunakan untuk verifikasi agar pelacak bukan orang
                  lain.
                </p>
              </div>
              {/* End Input */}
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="py-3 px-4 w-full transition-all duration-300 ease-in-out cursor-pointer inline-flex justify-center items-center gap-x-2 sm:text-sm font-medium rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-cyan-700"
              >
                {loading ? "Mencari…" : "Lacak"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
