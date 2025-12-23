"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Keahlian" },
  { id: "projects", label: "Proyek" },
  { id: "education", label: "Pendidikan" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="navbar mx-auto flex max-w-6xl items-center justify-between rounded-full border border-base-300 bg-base-100 px-5 py-3 shadow-lg backdrop-blur">
        <button
          type="button"
          className="text-lg font-semibold tracking-tight"
          onClick={() => handleNavClick("home")}
          aria-label="Kembali ke atas"
        >
          <span className="text-xl font-semibold text-primary">
            ./l0c4lxid
          </span>
        </button>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`btn btn-ghost btn-sm normal-case relative rounded-full transition-colors ${
                activeSection === item.id ? "text-primary" : ""
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary/20 shadow-sm"
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle border border-base-300 shadow-md"
            aria-label="Ubah tema"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-warning" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-primary" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            className="btn btn-ghost btn-circle border border-base-300 shadow-md md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Buka menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              className="h-0.5 w-5 rounded-full bg-current"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 w-5 rounded-full bg-current"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 w-5 rounded-full bg-current"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-base-300 bg-base-100 p-4 shadow-lg backdrop-blur md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`btn btn-ghost btn-sm normal-case w-full justify-between transition-colors ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-primary transition-opacity ${
                      activeSection === item.id ? "opacity-100" : "opacity-20"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
