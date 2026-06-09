import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Grotesk body + serif display (editorial) + mono labels.
// Swap these out to match a specific brand later (e.g. Cadence).
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: `${site.fullName} — AI for Construction`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
