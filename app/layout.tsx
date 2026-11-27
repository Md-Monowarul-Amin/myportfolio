import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Md. Monowarul Amin",
  description: "Operating Systems, systems security, and backend engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body>{children}</body>
    </html>
  );
}
