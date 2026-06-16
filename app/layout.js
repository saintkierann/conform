import { Manrope } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// One typeface across the whole site — clean, modern, consistent.
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: `${site.fullName} — AI for Construction`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
