"use client"; // Menandai file ini sebagai komponen klien

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline"; // Menggunakan ikon dari Heroicons

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false); // State untuk menentukan apakah tombol harus ditampilkan

  const handleScroll = () => {
    // Menentukan saat tombol muncul
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Melakukan scroll ke atas dengan halus
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Menambahkan event listener scroll

    // Clean up listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-indigo-700 transform hover:scale-110`} // Menambahkan efek hover
      aria-label="Scroll to Top"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
