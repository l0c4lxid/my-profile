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
      className="fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 md:hidden"
    >
      <div className="mx-4 h-16 rounded-[28px] border border-base-300 bg-base-100 px-5 py-2 shadow-xl">
        <div className="grid h-full grid-cols-5 items-center justify-items-center gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange(item.id)}
                className={`relative flex h-12 w-full items-center justify-center rounded-2xl transition-colors ${
                  isActive ? "text-primary" : "text-base-content/60"
                }`}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-indicator"
                    className="absolute -top-1 h-1 w-6 rounded-full bg-primary"
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
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl ${
                    isActive
                      ? "bg-primary/15 shadow-md shadow-primary/20"
                      : "bg-base-200/60"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <span className="sr-only">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
