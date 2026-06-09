import { Newsreader, Roboto, Roboto_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Design system (ui-ux-pro-max): Exaggerated Minimalism.
// Editorial serif display (Newsreader) + neutral body (Roboto) + mono labels.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: false,
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: `${site.fullName} — AI for Construction`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${newsreader.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
