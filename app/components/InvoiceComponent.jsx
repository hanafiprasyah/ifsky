"use client";

import React from "react";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET(_req, { params }) {
  try {
    const id = params.id;
    // Order header
    const { data: order, error: errOrder } = await supabase
      .from("orders")
      .select(
        "id, created_at, customer_name, email, phone, tracking_number, bank_name, account_number, grand_total"
      )
      .eq("id", id)
      .single();

    if (errOrder || !order) {
      return NextResponse.json(
        { error: "Order tidak ditemukan" },
        { status: 404 }
      );
    }

    // Items (jika ada)
    const { data: items, error: errItems } = await supabase
      .from("order_items")
      .select("id, product_name, variant, quantity, unit_price")
      .eq("order_id", id)
      .order("id", { ascending: true });

    // Events / status
    const { data: events } = await supabase
      .from("order_events")
      .select("status, at")
      .eq("order_id", id)
      .order("at", { ascending: true });

    return NextResponse.json({
      order,
      items: items || [],
      events: events || [],
    });
  } catch (e) {
    return NextResponse.json({ error: "Terjadi kesalahan" }, { status: 500 });
  }
}

function fmt(t) {
  try {
    return new Date(t).toLocaleString("id-ID", {
      dateStyle: "long",
      timeStyle: "short",
    });
  } catch {
    return t;
  }
}

function labelVariant(v) {
  if (!v) return "-";
  const m = String(v).toUpperCase();
  if (m === "MATAHARI") return "Matahari";
  if (m === "BULAN") return "Bulan";
  if (m === "LANGIT") return "Langit";
  return v;
}

const VARIANT_INFO = {
  MATAHARI: {
    title: "Matahari",
    tagline: "Citrus segar, cerah, enerjik",
    notes: "Top: bergamot, lemon · Heart: neroli · Base: musk lembut",
  },
  BULAN: {
    title: "Bulan",
    tagline: "Floral lembut & powdery",
    notes: "Top: pear · Heart: jasmine, rose · Base: vanilla",
  },
  LANGIT: {
    title: "Langit",
    tagline: "Fresh-aquatic, bersih & airy",
    notes: "Top: marine · Heart: lavender · Base: cedar",
  },
};

export default function InvoiceComponent() {
  const sp = useSearchParams();
  const id = sp.get("id");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const printRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/orders/${id}`, { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Gagal memuat invoice");
        setData(json);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading)
    return <main className="p-8 text-neutral-600 text-center">Memuat…</main>;
  if (err)
    return (
      <main className="p-8 text-center text-sm md:text-lg text-red-600">
        {err}
      </main>
    );

  const { order, events, items = [] } = data || {};
  const computedTotal = items.reduce(
    (s, it) => s + Number(it.unit_price || 0) * Number(it.quantity || 0),
    0
  );
  const totalIDR = order?.grand_total ?? computedTotal;

  // Mapping 3 status
  const steps = [
    { key: "DIKEMAS", label: "Dikemas" },
    { key: "DIKIRIM", label: "Dikirim" },
    { key: "DITERIMA", label: "Diterima" },
  ];
  const timeBy = Object.fromEntries(
    (events || []).map((e) => [e.status, e.at])
  );
  const variantSet = Array.from(
    new Set(
      (items || [])
        .map((it) => String(it.variant || "").toUpperCase())
        .filter(Boolean)
    )
  );
  const variantOrder = ["MATAHARI", "BULAN", "LANGIT"];
  const presentVariants = variantOrder.filter((v) => variantSet.includes(v));

  return (
    <div className="px-16 py-8 bg-neutral-100 h-fit w-full">
      <div
        ref={printRef}
        className="bg-white border border-gray-200 rounded-2xl"
      >
        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="p-5 sm:p-8">
            {/* Heading */}
            <div className="mb-3">
              <h2 className="font-medium text-sm text-gray-800">Proses</h2>
            </div>
            {/* End Heading */}

            {/* Timeline */}
            <div>
              {steps.map((s, idx) => {
                const done = !!timeBy[s.key];
                const at = timeBy[s.key] ? fmt(timeBy[s.key]) : "Menunggu …";
                return (
                  <div key={s.key} className="group flex gap-x-3">
                    {/* Icon */}
                    <div className="relative group-last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                      <div
                        className={`relative z-10 size-7 flex justify-center items-center rounded-full ${
                          done
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <svg
                          className="shrink-0 size-3"
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
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                    </div>
                    {/* End Icon */}

                    {/* Right Content */}
                    <div className="grow pt-1 pb-4">
                      <p className="mb-1 text-sm text-gray-500">{at}</p>
                      <p
                        className={`text-sm ${
                          done ? "text-gray-800 font-medium" : "text-gray-500"
                        }`}
                      >
                        {s.label}
                      </p>
                    </div>
                    {/* End Right Content */}
                  </div>
                );
              })}
            </div>
            {/* End Timeline */}

            {/* Item */}
            <div className="py-5 sm:py-8">
              {/* Heading */}
              <div className="mb-3">
                <h2 className="font-medium text-sm text-gray-800">
                  Detail Penerima
                </h2>
              </div>
              {/* End Heading */}

              {/* List */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-2 gap-x-4">
                <dt className="sm:py-0.5 text-sm text-gray-500">Nama</dt>
                <dd className="pb-3 sm:py-0.5 text-sm text-gray-800">
                  {order?.customer_name || "-"}
                </dd>

                <dt className="sm:py-0.5 text-sm text-gray-500">Email</dt>
                <dd className="pb-3 sm:py-0.5 text-sm text-gray-800">
                  {order?.email}
                </dd>

                <dt className="sm:py-0.5 text-sm text-gray-500">Telepon</dt>
                <dd className="pb-3 sm:py-0.5 text-sm text-gray-800">
                  {order?.phone}
                </dd>

                <dt className="sm:py-0.5 text-sm text-gray-500">Nama Bank</dt>
                <dd className="pb-3 sm:py-0.5 text-sm text-gray-800">
                  {order?.bank_name || "-"}
                </dd>

                <dt className="sm:py-0.5 text-sm text-gray-500">
                  Nomor Rekening
                </dt>
                <dd className="pb-3 sm:py-0.5 text-sm text-gray-800">
                  {order?.account_number || "-"}
                </dd>

                <dt className="sm:py-0.5 text-sm text-gray-500">No. Resi</dt>
                <dd className="pb-3 sm:py-0.5 text-sm text-gray-800">
                  {order?.tracking_number || "-"}
                </dd>

                <dt className="sm:py-0.5 text-sm text-gray-500">
                  Tanggal Order
                </dt>
                <dd className="pb-3 sm:py-0.5 text-sm text-gray-800">
                  {fmt(order?.created_at)}
                </dd>
              </dl>
              {/* End List */}
            </div>
            {/* End Item */}
          </div>
          {/* End Col */}

          {/* Card */}
          <div className="px-5 sm:px-8 relative">
            {/* Items (Rincian Pesanan) */}
            <div className="py-5 sm:py-8">
              <div className="mb-3">
                <h2 className="font-medium text-sm text-gray-800">
                  Rincian Pesanan
                </h2>
              </div>

              {items.length === 0 ? (
                <p className="text-sm text-gray-500">Tidak ada item.</p>
              ) : (
                <>
                  {/* Mobile (scrollable slider) */}
                  <div className="sm:hidden relative -mx-5 px-4">
                    <div className="overflow-x-auto">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-xl border">
                          <table className="min-w-[640px] w-full text-sm">
                            <thead className="bg-gray-50 text-gray-600">
                              <tr>
                                <th className="text-left px-4 py-2 whitespace-nowrap">
                                  Produk
                                </th>
                                <th className="text-left px-4 py-2 whitespace-nowrap">
                                  Varian
                                </th>
                                <th className="text-right px-4 py-2 whitespace-nowrap">
                                  Qty
                                </th>
                                <th className="text-right px-4 py-2 whitespace-nowrap">
                                  Harga
                                </th>
                                <th className="text-right px-4 py-2 whitespace-nowrap">
                                  Subtotal
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {items.map((it) => {
                                const sub =
                                  Number(it.unit_price || 0) *
                                  Number(it.quantity || 0);
                                return (
                                  <tr key={it.id} className="text-gray-800">
                                    <td className="px-4 py-2 whitespace-nowrap">
                                      {it.product_name || "Parfum IfSky"}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-sky-700 border-sky-200 bg-sky-50">
                                        {labelVariant(it.variant)}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 text-right whitespace-nowrap">
                                      {it.quantity}
                                    </td>
                                    <td className="px-4 py-2 text-right whitespace-nowrap">
                                      {Number(
                                        it.unit_price || 0
                                      ).toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                      })}
                                    </td>
                                    <td className="px-4 py-2 text-right font-medium whitespace-nowrap">
                                      {sub.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                      })}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 px-2">
                      Geser untuk melihat data →
                    </div>
                  </div>

                  {/* Tablet & Desktop (no horizontal scroll) */}
                  <div className="hidden sm:block">
                    <div className="overflow-hidden rounded-xl border">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                          <tr>
                            <th className="text-left px-4 py-2">Produk</th>
                            <th className="text-left px-4 py-2">Varian</th>
                            <th className="text-right px-4 py-2">Qty</th>
                            <th className="text-right px-4 py-2">Harga</th>
                            <th className="text-right px-4 py-2">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {items.map((it) => {
                            const sub =
                              Number(it.unit_price || 0) *
                              Number(it.quantity || 0);
                            return (
                              <tr key={it.id} className="text-gray-800">
                                <td className="px-4 py-2">
                                  {it.product_name || "Parfum IfSky"}
                                </td>
                                <td className="px-4 py-2">
                                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-sky-700 border-sky-200 bg-sky-50">
                                    {labelVariant(it.variant)}
                                  </span>
                                </td>
                                <td className="px-4 py-2 text-right">
                                  {it.quantity}
                                </td>
                                <td className="px-4 py-2 text-right">
                                  {Number(it.unit_price || 0).toLocaleString(
                                    "id-ID",
                                    { style: "currency", currency: "IDR" }
                                  )}
                                </td>
                                <td className="px-4 py-2 text-right font-medium">
                                  {sub.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                  })}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Info Varian */}
            {presentVariants.length > 0 && (
              <div className="py-5 sm:py-8">
                <div className="mb-3">
                  <h2 className="font-medium text-sm text-gray-800">
                    Info Varian
                  </h2>
                </div>
                <div className="space-y-3">
                  {presentVariants.map((v) => {
                    const info = VARIANT_INFO[v] || {
                      title: labelVariant(v),
                      tagline: "",
                      notes: "",
                    };
                    return (
                      <div
                        key={v}
                        className="rounded-xl border p-4 bg-white/60"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm text-cyan-600 font-semibold">
                              {info.title}
                            </div>
                            {info.tagline && (
                              <div className="text-xs text-gray-600 mt-0.5">
                                {info.tagline}
                              </div>
                            )}
                          </div>
                          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-sky-700 border-sky-200 bg-sky-50">
                            {info.title}
                          </span>
                        </div>
                        {info.notes && (
                          <div className="text-xs text-gray-600 mt-2">
                            {info.notes}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {/* Body */}
            <div className="divide-y divide-dashed divide-gray-300">
              {/* Item */}
              <div className="py-5 sm:py-8">
                {/* Heading */}
                <div className="mb-3">
                  <h2 className="font-medium text-sm text-gray-800">
                    Detail Transaksi
                  </h2>
                </div>
                {/* End Heading */}

                {/* List */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-2 gap-x-4">
                  <dt className="sm:py-0.5 text-sm text-gray-500">Total</dt>
                  <dd className="pb-3 sm:py-0.5 font-bold text-sm text-gray-800">
                    {Number(totalIDR || 0).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </dd>
                </dl>
                {/* End List */}
              </div>
              {/* End Item */}
            </div>
            {/* End Body */}
          </div>
          {/* End Card */}
        </div>
        {/* End Body */}
      </div>
    </div>
  );
}
