"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CodeBracketSquareIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Desain Interior Template",
    description:
      "Landing page galeri desain interior dengan fokus visual bersih dan CTA jelas.",
    image: "/project/interior.jpg",
    alt: "Tangkapan layar proyek Desain Interior Template - landing page galeri desain interior yang bersih dan modern",
    tags: ["Landing Page", "Business", "UI"],
    live: "https://interior.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/DesainInteriorTemplate",
  },
  {
    title: "Thrifting Market",
    description:
      "Landing page marketplace thrifting dengan katalog rapi dan UX mobile.",
    image: "/project/awul-market.jpg",
    alt: "Tangkapan layar Thrifting Market - marketplace thrifting/awul-awul untuk barang preloved",
    tags: ["Landing Page", "E-Commerce", "UI"],
    live: "https://awul.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/awul-awul-market",
  },
  {
    title: "Solar System Game",
    description:
      "Game edukasi interaktif tentang tata surya dengan kuis sederhana.",
    image: "/project/solar-system.JPG",
    alt: "Cuplikan Solar System Game - simulasi tata surya interaktif di browser",
    tags: ["PHP", "Learning", "Game"],
    live: "https://ss.andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
  {
    title: "Koperasi Kredit",
    description:
      "Website profil koperasi dengan performa cepat dan struktur konten rapi.",
    image: "/project/koperasi-view.JPG",
    alt: "Halaman beranda situs Koperasi Kredit - profil koperasi dan informasi layanan anggota",
    tags: ["Next.js", "Branding", "Business"],
    live: "https://www.koperasikredit-sidomanunggal.my.id/",
    github: "https://github.com/l0c4lxid/koperasi-profile-sidomanunggal",
  },
  {
    title: "Schedule Scraper API",
    description:
      "API Node.js untuk jadwal akademik dengan endpoint terstruktur.",
    image: "/project/scarp-jadwal.JPG",
    alt: "Tangkapan layar Schedule Scraper API - dokumentasi endpoint untuk pengambilan data jadwal",
    tags: ["Node.js", "API", "Automation"],
    live: "https://andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
];

export default function MobileProjects() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flex h-full min-h-0 flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
            Proyek
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-base-content">
            Proyek terpilih
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-base-content/60">
          {index + 1}/{projects.length}
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          key={project.title}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-lg"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 768px) 90vw, 360px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-base-200/40" />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-4">
            <div>
              <h3 className="text-lg font-semibold text-base-content">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-base-content/80">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-base-content/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-1 gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full normal-case gap-2 shadow-lg"
              >
                <GlobeAltIcon className="h-4 w-4" />
                Lihat Demo
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary w-full normal-case gap-2 shadow-lg"
              >
                <CodeBracketSquareIcon className="h-4 w-4" />
                Kode di GitHub
              </a>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          className="btn btn-outline btn-circle"
          aria-label="Proyek sebelumnya"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="btn btn-outline btn-circle"
          aria-label="Proyek berikutnya"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
