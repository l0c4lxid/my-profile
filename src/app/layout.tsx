import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SchemaMarkup from "./components/SchemaMarkup";
import { ThemeProvider } from "./components/ThemeProvider";
import ChatWidget from "./components/chat/ChatWidget";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syaidandhika.my.id"),
  title: "Syaid Andhika - Web Developer & UI/UX | Portofolio",
  description:
    "Portofolio Syaid Andhika, S.Kom - Technical Support UBSI Solo fokus Web Development & UI/UX. Jelajahi proyek dan keahlian, hubungi untuk kolaborasi.",
  keywords: [
    "Syaid Andhika",
    "Web Developer Solo",
    "UI/UX Designer",
    "Technical Support UBSI",
    "Portofolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syaid Andhika | Web & UI/UX Developer + Technical Support",
    description:
      "Portofolio Syaid Andhika, S.Kom - Technical Support UBSI Solo fokus Web Development & UI/UX. Jelajahi proyek dan keahlian, hubungi untuk kolaborasi.",
    url: "https://syaidandhika.my.id",
    siteName: "Syaid Andhika",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Potret profesional Syaid Andhika - Technical Support UBSI Solo dan pengembang web/UI/UX",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangun pengalaman web yang berwarna - Syaid Andhika",
    description:
      "Technical Support UBSI Solo fokus Web Development & UI/UX. Jelajahi proyek dan keahlian untuk kolaborasi.",
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
          <div className="hidden md:block">
            <ChatWidget />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
