"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const educationItems = [
  {
    title: "Sarjana Sistem Informasi (S1)",
    institution: "Universitas Bina Sarana Informatika - Kampus Kramat 98",
    year: "2024 - 2025",
    description:
      "Lulus dengan fokus pengembangan perangkat lunak, analisis data, dan manajemen proyek TI modern.",
  },
  {
    title: "Diploma Sistem Informasi (D3)",
    institution: "Universitas Bina Sarana Informatika - Yogyakarta",
    year: "2021 - 2024",
    description:
      "Berfokus pada solusi teknologi praktis untuk kebutuhan bisnis.",
  },
  {
    title: "SMA (MIPA)",
    institution: "SMA N 1 Pleret",
    year: "2018 - 2021",
    description: "Membangun dasar berpikir analitis dan pemecahan masalah.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative snap-start scroll-mt-24 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-base-content/60">
            Pendidikan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
            Belajar dengan <span className="text-primary">tujuan</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8">
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-base-300 md:left-1/2 md:-translate-x-1/2" />

          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col gap-6 md:flex-row ${
                index % 2 === 0
                  ? "md:justify-start md:pr-10"
                  : "md:justify-end md:pl-10"
              }`}
            >
              <div className="absolute left-2 top-6 h-6 w-6 rounded-full bg-primary shadow-lg md:left-1/2 md:-translate-x-1/2" />
              <div className="card ml-10 rounded-[28px] border border-base-300 bg-base-100 p-6 shadow-lg md:ml-0 md:w-[46%]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <AcademicCapIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-base-content">
                      {item.title}
                    </h3>
                    <p className="text-sm text-base-content/60">{item.year}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm font-medium text-base-content/80">
                  <div className="flex items-center gap-2">
                    <BuildingLibraryIcon className="h-4 w-4 text-primary" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-4 w-4 text-secondary" />
                    <span>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4 text-accent" />
                    <span>Indonesia</span>
                  </div>
                  <p className="pt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
