"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ActiveSectionContextValue = {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue | undefined>(
  undefined
);

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("home");

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

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection]
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSection must be used within ActiveSectionProvider");
  }
  return context;
}
