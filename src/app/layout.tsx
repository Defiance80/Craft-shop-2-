import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["400", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Solaris Beer & Blending | Craft Brewery · Live Music · Taproom | Murrieta",
  description: "Craft brewery, taproom & live music venue in Murrieta/Temecula. Fresh hop IPAs, concert series, comedy nights, beer club & more. Open 7 days.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
