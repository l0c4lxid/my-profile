"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
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
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200/80 bg-white/95 px-5 py-3 shadow-xl shadow-indigo-500/15 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
        <button
          type="button"
          className="text-lg font-semibold tracking-tight"
          onClick={() => handleNavClick("home")}
          aria-label="Scroll to top"
        >
          <span className="logo-gradient text-xl font-semibold">
            ./l0c4lxid
          </span>
        </button>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.id
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-700 dark:text-slate-200"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-cyan-400/30 to-pink-500/30 shadow-sm"
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
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/85 text-slate-700 shadow-lg shadow-indigo-500/10 transition dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
            aria-label="Toggle theme"
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
                  <SunIcon className="h-5 w-5 text-amber-300" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-indigo-500" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200/80 bg-white/85 text-slate-700 shadow-lg shadow-indigo-500/10 transition dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
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
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-slate-200/70 bg-white/90 p-4 shadow-xl shadow-indigo-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-white/80 dark:text-slate-200 dark:hover:bg-slate-800/70"
                >
                  <span>{item.label}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 transition-opacity ${
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
