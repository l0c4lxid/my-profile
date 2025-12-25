"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  BoltIcon,
  CommandLineIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  { title: "Kreatif", icon: SparklesIcon },
  { title: "Sistemik", icon: CommandLineIcon },
  { title: "User-first", icon: UserCircleIcon },
  { title: "Cepat Belajar", icon: BoltIcon },
];

export default function MobileAbout() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="flex h-full flex-col gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
          Tentang
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-base-content">
          Ringkas &amp; berfokus
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        className="rounded-[28px] border border-base-300 bg-base-100 p-4 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-base-300 bg-base-100">
            <Image
              src="/profile.jpg"
              alt="Syaid Andhika"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60">
              Syaid Andhika
            </p>
            <p className="text-sm font-semibold text-base-content">
              Technical Support UBSI Solo
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-base-content/80">
          Menggabungkan teknologi, desain, dan kebutuhan bisnis untuk menciptakan
          pengalaman digital yang nyaman dan efektif.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.3,
                delay: prefersReducedMotion ? 0 : index * 0.05,
              }}
              className="rounded-2xl border border-base-300 bg-base-100 p-3 text-center shadow-md"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/70">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>

      <a
        href="/api/download-resume"
        className="btn btn-primary mt-auto w-full normal-case shadow-lg"
        download="SyaidAndhika-resume.pdf"
      >
        Unduh CV
      </a>
    </section>
  );
}
