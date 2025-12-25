"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeProvider";
import { useActiveSection } from "./ActiveSectionProvider";

const navItems = [
  { id: "home", label: "Beranda", icon: HomeIcon },
  { id: "about", label: "Tentang", icon: UserCircleIcon },
  { id: "skills", label: "Keahlian", icon: SparklesIcon },
  { id: "projects", label: "Proyek", icon: BriefcaseIcon },
  { id: "education", label: "Pendidikan", icon: AcademicCapIcon },
  { id: "contact", label: "Kontak", icon: EnvelopeIcon },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { activeSection, setActiveSection } = useActiveSection();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
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
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
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
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </span>
              </button>
            );
          })}
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
        </div>
      </div>
    </nav>
  );
}
