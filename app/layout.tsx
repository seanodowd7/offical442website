import type { Metadata } from "next";
import { Barlow_Condensed, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "4-4-2 Marketing — Soccer Destinations Before the World Cup",
    template: "%s — 4-4-2 Marketing",
  },
  description:
    "4-4-2 Marketing helps bars and restaurants become premier soccer destinations before the 2026 World Cup through Premier League content, event marketing, and digital advertising.",
  openGraph: {
    type: "website",
    siteName: "4-4-2 Marketing",
    title: "4-4-2 Marketing — Soccer Destinations Before the World Cup",
    description:
      "We help bars build their soccer identity through Premier League marketing. The 2026 World Cup starts in June.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
