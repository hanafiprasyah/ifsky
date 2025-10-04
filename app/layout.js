import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrelineScriptWrapper from "@/app/components/PrelineScriptWrapper";
import Header from "@/app/components/Header";

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
        <section id="header" className="dark:bg-neutral-900">
          <Header />
        </section>
        <main className="dark:bg-neutral-900 h-screen">{children}</main>
        <footer className="bg-neutral-900 py-6 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} IFSKY
        </footer>
      </body>

      <PrelineScriptWrapper />
    </html>
  );
}
