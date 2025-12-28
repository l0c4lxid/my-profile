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
    title: "Pemecah Masalah Kreatif",
    description:
      "Menerjemahkan kebutuhan kompleks menjadi antarmuka yang jelas.",
    icon: SparklesIcon,
  },
  {
    title: "Pemikir Sistem",
    description: "Menggabungkan logika bisnis dengan kejelasan teknis.",
    icon: CommandLineIcon,
  },
  {
    title: "Dukungan Berorientasi Pengguna",
    description: "Memberikan panduan TI yang ramah dan proaktif.",
    icon: UserCircleIcon,
  },
  {
    title: "Pembelajar Cepat",
    description: "Terus bereksperimen dengan alat dan pola baru.",
    icon: BoltIcon,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative snap-start scroll-mt-24 px-6 pt-20 pb-[calc(5rem+64px+env(safe-area-inset-bottom))] sm:pt-24 sm:pb-[calc(6rem+64px+env(safe-area-inset-bottom))] md:pb-24"
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
            Tentang
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
            Tentang: cerita singkat dengan
            <span className="text-primary"> teknologi sebagai inti</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card relative overflow-hidden rounded-[32px] border border-base-300 bg-base-100 p-6 shadow-lg sm:p-8"
          >
            <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-base-300 bg-base-200 p-[2px] shadow-lg">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[14px] bg-base-100">
                    <Image
                      src="/profile.jpg"
                      alt="Foto profil Syaid Andhika, lulusan S.Kom dan spesialis web development serta UI/UX"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60">
                    Syaid Andhika, S.Kom
                  </p>
                  <p className="text-lg font-semibold text-base-content">
                    Technical Support UBSI Solo
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-base font-medium text-base-content/80">
                <p>
                  Saya mengutamakan problem solving, sistem yang rapi, dan
                  pengalaman pengguna yang jelas dalam setiap proyek.
                </p>
                <p>
                  Saat ini fokus pada Web Development dan UI/UX dengan minat
                  pada landing page, dashboard, dan pengalaman digital yang
                  mudah digunakan.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="badge badge-outline px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80">
                  UI/UX
                </span>
                <span className="badge badge-outline px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80">
                  IT Support
                </span>
                <span className="badge badge-outline px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80">
                  Pengembangan Web
                </span>
              </div>
              <a
                href="/api/download-resume"
                className="btn btn-primary w-full normal-case shadow-lg sm:w-fit"
                download="SyaidAndhika-resume.pdf"
              >
                Unduh CV
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
                  className="card rounded-3xl border border-base-300 bg-base-100 p-5 shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-base-content/80">
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
