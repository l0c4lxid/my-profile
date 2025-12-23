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
  title: "Syaid Andhika | Portofolio",
  description:
    "Portofolio pribadi Syaid Andhika, lulusan S.Kom dan Technical Support di UBSI Kampus Solo yang terus mengembangkan kemampuan web dan UI/UX.",
  keywords: [
    "Syaid Andhika",
    "portofolio",
    "lulusan S.Kom",
    "technical support",
    "pengembang web",
    "UI/UX",
    "frontend",
    "Solo",
    "UBSI",
  ],
  openGraph: {
    title: "Syaid Andhika | Portofolio",
    description:
      "Jelajahi proyek, keahlian, dan pengalaman Syaid Andhika dalam portofolio modern yang berwarna.",
    url: "https://syaidandhika.my.id",
    siteName: "Syaid Andhika",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Portofolio Syaid Andhika",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syaid Andhika | Portofolio",
    description:
      "Portofolio pribadi Syaid Andhika, lulusan S.Kom dan Technical Support di UBSI Kampus Solo.",
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
    <html lang="id" suppressHydrationWarning>
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
