"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const imageY = useTransform(scrollY, [0, 600], [0, 30]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen snap-start scroll-mt-24 items-center overflow-hidden px-6 pb-24 pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="animated-gradient absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-fuchsia-400/10 to-cyan-400/20" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-r from-pink-400/40 to-orange-300/30 blur-3xl animate-float-slow" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-indigo-400/30 to-cyan-300/40 blur-3xl animate-pulse-soft" />
        <div className="absolute inset-0 surface-grid opacity-30 dark:opacity-20" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-slate-200/80 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
            Creative Portfolio
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
            Hi, I&apos;m <span className="gradient-text">Syaid Andhika</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-slate-800 dark:text-slate-300">
            Information Systems student & IT Support crafting bold web
            experiences with a love for modern interfaces and clean
            engineering.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              Contact Me
            </motion.a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700 dark:text-slate-400 lg:justify-start">
            <span className="rounded-full border border-slate-200/80 bg-slate-100/90 px-4 py-2 text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
              Web Apps
            </span>
            <span className="rounded-full border border-slate-200/80 bg-slate-100/90 px-4 py-2 text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
              UX Craft
            </span>
            <span className="rounded-full border border-slate-200/80 bg-slate-100/90 px-4 py-2 text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
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
              className="absolute inset-0 rounded-[40%] bg-gradient-to-br from-indigo-500/40 via-cyan-400/20 to-pink-400/40 blur-2xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-[45%] border border-white/40 bg-white/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/30"
            />
            <div className="relative z-10 h-[240px] w-[240px] overflow-hidden rounded-[32%] border border-white/60 bg-white/80 shadow-2xl shadow-indigo-500/20 dark:border-white/10 dark:bg-slate-900/70 sm:h-[280px] sm:w-[280px]">
              <Image
                src="/profile.jpg"
                alt="Syaid Andhika portrait"
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
