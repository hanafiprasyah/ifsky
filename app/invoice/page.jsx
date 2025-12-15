import React from "react";
import InvoiceComponent from "@/app/components/InvoiceComponent";
import { Suspense } from "react";

export const metadata = {
  title: "Invoice",
  alternates: { canonical: "/invoice" },
};

export default function InvoicePage() {
  return (
    <Suspense
      fallback={<div className="p-8 text-slate-500">Loading invoice…</div>}
    >
      <InvoiceComponent />
    </Suspense>
  );
}
