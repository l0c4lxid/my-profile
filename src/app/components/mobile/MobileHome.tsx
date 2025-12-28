"use client";

import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EnvelopeIcon, FolderOpenIcon } from "@heroicons/react/24/outline";

const typedName = "Syaid Andhika";

type MobileHomeProps = {
  onNavigate: (id: string) => void;
};

export default function MobileHome({ onNavigate }: MobileHomeProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const nameRef = useRef<HTMLSpanElement | null>(null);
  const [typingWidth, setTypingWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const node = nameRef.current;
    if (!node) return;

    let isActive = true;

    const updateWidth = () => {
      if (!isActive) return;
      setTypingWidth(node.scrollWidth);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(updateWidth);
    } else {
      updateWidth();
    }

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldSpin = mounted && !prefersReducedMotion;

  return (
    <section className="flex h-full min-h-0 flex-col gap-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex h-36 w-36 items-center justify-center">
          <div className="absolute inset-0 rounded-[38%] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-2xl" />
          <motion.div
            animate={shouldSpin ? { rotate: 360 } : {}}
            transition={{
              duration: 18,
              repeat: shouldSpin ? Infinity : 0,
              ease: "linear",
            }}
            className="absolute inset-1 rounded-[35%] border border-base-300 bg-base-100/80"
          />
          <div className="relative z-10 h-28 w-28 overflow-hidden rounded-[30%] border border-base-300 bg-base-100 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Potret profesional Syaid Andhika - Technical Support UBSI Solo dan pengembang web/UI/UX"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p className="badge badge-outline badge-sm uppercase tracking-[0.3em] text-base-content/60">
          Portofolio
        </p>
        <h2 className="text-2xl font-extrabold tracking-tight text-base-content">
          <span className="block text-primary">
            <span
              className="typing-name"
              data-typing={typingWidth ? "ready" : "waiting"}
              style={
                {
                  "--typing-width": typingWidth ? `${typingWidth}px` : "0px",
                  "--typing-steps": typedName.length,
                } as CSSProperties
              }
              ref={nameRef}
            >
              {typedName}
            </span>
          </span>
          <span className="mt-1 block text-base font-semibold text-base-content/80">
            Web Developer &amp; UI/UX
          </span>
        </h2>
        <p className="text-sm font-medium text-base-content/80">
          Technical Support UBSI Kampus Solo yang fokus pada Front-end dan UI/UX.
        </p>
        <p className="text-xs font-medium text-base-content/70">
          Siap membantu UMKM dan institusi membuat antarmuka cepat dan jelas.
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <button
          type="button"
          onClick={() => onNavigate("contact")}
          className="btn btn-primary w-full normal-case gap-2 shadow-lg"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Diskusikan Proyek Anda
        </button>
        <button
          type="button"
          onClick={() => onNavigate("projects")}
          className="btn btn-secondary w-full normal-case gap-2 shadow-lg"
        >
          <FolderOpenIcon className="h-5 w-5" />
          Lihat Proyek
        </button>
        <p className="text-center text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-base-content/60">
          Gratis konsultasi 20 menit. Balasan &lt; 24 jam.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-base-content/70">
          <span className="badge badge-outline px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-base-content/70">
            Aplikasi Web
          </span>
          <span className="badge badge-outline px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-base-content/70">
            UI/UX
          </span>
          <span className="badge badge-outline px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-base-content/70">
            IT Support
          </span>
        </div>
      </div>
    </section>
  );
}
