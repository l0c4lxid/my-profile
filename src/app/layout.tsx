import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SchemaMarkup from "./components/SchemaMarkup";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Syaid Andhika | Portfolio - Information Systems Student",
  description:
    "Official portfolio website of Syaid Andhika, an Information Systems student from Bantul, D.I Yogyakarta passionate about technology and innovation.",
  keywords:
    "Syaid Andhika, portfolio, information systems, student, technology, syaid, andhika, resume, sistem informasi, syaidandhika, andhikasyaid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SchemaMarkup />
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
