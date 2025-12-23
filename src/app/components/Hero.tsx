"use client";

import { type CSSProperties, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const typedName = "Syaid Andhika";

export default function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const imageY = useTransform(scrollY, [0, 600], [0, 30]);
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

  return (
    <section
      id="home"
      className="relative flex min-h-screen snap-start scroll-mt-24 items-center overflow-hidden px-6 pb-24 pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="animated-gradient absolute inset-0 bg-base-300/70" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/15 blur-3xl animate-pulse-soft" />
        <div className="absolute inset-0 bg-base-200/30" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="badge badge-outline badge-sm mb-4 uppercase tracking-[0.3em] text-base-content/60">
            Portofolio
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl lg:text-7xl">
            <span className="block">Halo, saya</span>
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
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-base-content/80">
            Saat ini bekerja sebagai Technical Support di UBSI Kampus Solo. Saya
            terus mengembangkan kemampuan di bidang web dan UI/UX untuk
            menciptakan pengalaman digital yang menyenangkan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{
                y: -4,
                boxShadow:
                  "0 20px 40px color-mix(in oklch, var(--color-primary) 35%, transparent)",
              }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary normal-case shadow-lg"
            >
              Lihat Proyek
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary normal-case shadow-lg"
            >
              Hubungi Saya
            </motion.a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-base-content/80 lg:justify-start">
            <span className="badge badge-outline px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80">
              Aplikasi Web
            </span>
            <span className="badge badge-outline px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80">
              UI/UX
            </span>
            <span className="badge badge-outline px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80">
              IT Support
            </span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex-1"
        >
          <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-[40%] bg-primary/20 blur-2xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-[45%] border border-base-300 bg-base-100/70 backdrop-blur-xl"
            />
            <div className="relative z-10 h-[240px] w-[240px] overflow-hidden rounded-[32%] border border-base-300 bg-base-100 shadow-lg sm:h-[280px] sm:w-[280px]">
              <Image
                src="/profile.jpg"
                alt="Potret Syaid Andhika"
                fill
                sizes="(max-width: 768px) 240px, 280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
