import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SchemaMarkup from "./components/SchemaMarkup";
import { ThemeProvider } from "./components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syaidandhika.my.id"),
  title: "Syaid Andhika | Portfolio",
  description:
    "Colorful personal portfolio of Syaid Andhika, an Information Systems student and IT Support with a passion for modern web experiences.",
  keywords: [
    "Syaid Andhika",
    "portfolio",
    "information systems",
    "IT support",
    "web developer",
    "frontend",
    "Yogyakarta",
  ],
  openGraph: {
    title: "Syaid Andhika | Portfolio",
    description:
      "Explore projects, skills, and experience from Syaid Andhika in a vibrant, modern portfolio.",
    url: "https://syaidandhika.my.id",
    siteName: "Syaid Andhika",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Syaid Andhika Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syaid Andhika | Portfolio",
    description:
      "Personal portfolio for Syaid Andhika, Information Systems student and IT Support.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    var dataTheme = theme === "dark" ? "dark" : "corporate";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = dataTheme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();`}
        </Script>
        <ThemeProvider>
          <SchemaMarkup />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
