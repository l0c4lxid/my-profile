"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  CommandLineIcon,
  UserCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Creative Problem Solver",
    description: "Translating complex needs into clean interfaces.",
    icon: SparklesIcon,
  },
  {
    title: "Systems Thinker",
    description: "Blending business logic with technical clarity.",
    icon: CommandLineIcon,
  },
  {
    title: "People-First Support",
    description: "Friendly IT guidance with a proactive mindset.",
    icon: UserCircleIcon,
  },
  {
    title: "Fast Learner",
    description: "Always experimenting with new tools and patterns.",
    icon: BoltIcon,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative snap-start scroll-mt-24 px-6 py-28 sm:py-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
            About
          </p>
          <h2 className="section-title mt-3">
            A colorful story with
            <span className="gradient-text"> tech at its core</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card relative overflow-hidden rounded-[32px] p-8"
          >
            <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-400/30 to-cyan-300/20 blur-2xl" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-cyan-400 to-pink-400 p-[2px] shadow-lg shadow-indigo-500/20">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[14px] bg-white/80 dark:bg-slate-900/70">
                    <Image
                      src="/profile.jpg"
                      alt="Syaid Andhika"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
                    Syaid Andhika
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    Information Systems Student
                  </p>
                </div>
              </div>
              <p className="text-base font-medium text-slate-800 dark:text-slate-300">
                I&apos;m an Information Systems student based in Yogyakarta who
                loves blending design, technology, and business insights. I
                focus on building smooth, human-centered digital experiences
                while supporting teams with dependable IT solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-200/80 bg-slate-100/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
                  UI/UX
                </span>
                <span className="rounded-full border border-slate-200/80 bg-slate-100/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
                  IT Support
                </span>
                <span className="rounded-full border border-slate-200/80 bg-slate-100/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
                  Systems Thinking
                </span>
              </div>
              <a
                href="/api/download-resume"
                className="btn-primary w-fit"
                download="SyaidAndhika-resume.pdf"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-3xl p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 via-cyan-400/20 to-pink-400/20 text-indigo-500 dark:text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
