import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrelineScriptWrapper from "@/app/components/PrelineScriptWrapper";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  applicationName: "IFSKY",
  title: {
    default: "IFSKY",
    template: "%s | IFSKY",
  },
  description: "IFSKY Official Landing Page",
  openGraph: {
    title: "About Us | IFSKY",
    description: "Profil dan misi IFSKY Parfume & Fragrance.",
    url: "https://ifsky.id/about",
    siteName: "IFSKY",
    type: "website",
  },
  generator: "Next.js",
  keywords: [
    "IFSKY",
    "parfum",
    "fragrance",
    "parfum pria",
    "parfum wanita",
    "long lasting",
    "eau de parfum",
  ],
  authors: [{ name: "IFSKY" }],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="h-fit bg-neutral-100">{children}</main>
        <Footer />
      </body>

      <PrelineScriptWrapper />
    </html>
  );
}
