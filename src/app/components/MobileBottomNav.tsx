"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type MobileNavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type MobileBottomNavProps = {
  items: MobileNavItem[];
  activeId: string;
  onChange: (id: string) => void;
};

export default function MobileBottomNav({
  items,
  activeId,
  onChange,
}: MobileBottomNavProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <nav
      aria-label="Navigasi bawah"
      className="fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="h-16 w-full rounded-t-[28px] border border-base-300 bg-base-100/85 px-5 py-2 shadow-xl backdrop-blur">
        <div className="grid grid-cols-5 items-center justify-items-center gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange(item.id)}
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
    </nav>
  );
}
