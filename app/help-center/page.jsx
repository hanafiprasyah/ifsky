import React from "react";
import HelpHero from "@/app/components/HelpHero";
import HelpFaqComponent from "@/app/components/HelpFaq";

export const metadata = {
  title: "Help Center",
  alternates: { canonical: "/help-center" },
};

export default function HelpCenter() {
  return (
    <div className="bg-neutral-100">
      <>
        <HelpHero />
        <HelpFaqComponent />
      </>
    </div>
  );
}
