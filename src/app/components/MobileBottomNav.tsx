"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Briefcase, Home, Mail, Sparkles, User } from "lucide-react";
import { useActiveSection } from "./ActiveSectionProvider";

const navItems = [
  { id: "home", label: "Beranda", icon: Home },
  { id: "about", label: "Tentang", icon: User },
  { id: "skills", label: "Keahlian", icon: Sparkles },
  { id: "projects", label: "Proyek", icon: Briefcase },
  { id: "contact", label: "Kontak", icon: Mail },
];

export default function MobileBottomNav() {
  const { activeSection, setActiveSection } = useActiveSection();
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollY.current;
    if (Math.abs(delta) < 6) return;
    if (latest < 80) {
      setHidden(false);
    } else {
      setHidden(delta > 0);
    }
    lastScrollY.current = latest;
  });

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  const mobileActive = navItems.some((item) => item.id === activeSection)
    ? activeSection
    : "projects";

  return (
    <motion.nav
      aria-label="Navigasi bawah"
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden ${
        hidden ? "pointer-events-none" : ""
      }`}
      initial={false}
      animate={{
        y: hidden ? 96 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.25,
        ease: "easeOut",
      }}
    >
      <div className="h-16 rounded-[28px] border border-base-300 bg-base-100/85 px-4 py-2 shadow-xl backdrop-blur">
        <div className="grid grid-cols-5 items-center justify-items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = mobileActive === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative flex w-full flex-col items-center gap-1 rounded-2xl px-2 py-1 text-[0.7rem] font-semibold transition-colors ${
                  isActive ? "text-primary" : "text-base-content/70"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 rounded-2xl bg-primary/10"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : {
                            type: "spring",
                            stiffness: 320,
                            damping: 28,
                          }
                    }
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-indicator"
                    className="absolute -top-2 h-1 w-8 rounded-full bg-primary"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : {
                            type: "spring",
                            stiffness: 320,
                            damping: 28,
                          }
                    }
                  />
                )}
                <motion.span
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                  className="relative z-10 flex h-9 w-9 items-center justify-center rounded-2xl bg-base-200/70"
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <span className="relative z-10 text-[0.65rem]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
