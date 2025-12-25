"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Briefcase, Home, Mail, Sparkles, User } from "lucide-react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import MobileBottomNav, { type MobileNavItem } from "../MobileBottomNav";
import { useTheme } from "../ThemeProvider";
import MobileHome from "./MobileHome";
import MobileAbout from "./MobileAbout";
import MobileSkills from "./MobileSkills";
import MobileProjects from "./MobileProjects";
import MobileContact from "./MobileContact";

const navItems: MobileNavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function MobileAppLayout() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState("home");
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reduceMotion = mounted && prefersReducedMotion;

  const handleChange = (nextId: string) => {
    if (nextId === activeId) return;
    const currentIndex = navItems.findIndex((item) => item.id === activeId);
    const nextIndex = navItems.findIndex((item) => item.id === nextId);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveId(nextId);
  };

  const activeView =
    activeId === "about"
      ? <MobileAbout />
      : activeId === "skills"
      ? <MobileSkills />
      : activeId === "projects"
      ? <MobileProjects />
      : activeId === "contact"
      ? <MobileContact />
      : <MobileHome onNavigate={handleChange} />;

  const variants = {
    enter: (navDirection: number) => ({
      x: reduceMotion ? 0 : navDirection > 0 ? 40 : -40,
      opacity: 0,
      scale: reduceMotion ? 1 : 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (navDirection: number) => ({
      x: reduceMotion ? 0 : navDirection > 0 ? -40 : 40,
      opacity: 0,
      scale: reduceMotion ? 1 : 0.98,
    }),
  };

  return (
    <div className="relative h-[100dvh] overflow-hidden bg-base-200 md:hidden">
      <div className="absolute inset-0">
        <div className="animated-gradient absolute inset-0 bg-base-300/60" />
        <div className="absolute -left-16 top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-12 bottom-20 h-52 w-52 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative flex h-[calc(100dvh-64px-env(safe-area-inset-bottom))] flex-col px-4 pb-4 pt-[calc(env(safe-area-inset-top)+1.25rem)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-base-content/60">
              Portofolio
            </p>
            <p className="text-sm font-semibold text-base-content">
              Syaid Andhika
            </p>
          </div>
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
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
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

        <div className="relative mt-4 flex-1 overflow-hidden rounded-[32px] border border-base-300 bg-base-100/90 p-4 shadow-lg backdrop-blur">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeId}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: reduceMotion ? 0 : 0.25,
                ease: "easeOut",
              }}
              className="absolute inset-0"
            >
              <div className="h-full w-full px-1 py-2">{activeView}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <MobileBottomNav
        items={navItems}
        activeId={activeId}
        onChange={handleChange}
      />
    </div>
  );
}
