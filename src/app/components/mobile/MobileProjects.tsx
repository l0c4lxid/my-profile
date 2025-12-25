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
    title: "Desain Interior",
    description: "Landing page bisnis interior dengan layout elegan.",
    image: "/project/interior.jpg",
    tags: ["Landing Page", "Business", "UI"],
    live: "https://interior.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/DesainInteriorTemplate",
  },
  {
    title: "Thrifting Market",
    description: "Tampilan landing page e-commerce untuk brand lokal.",
    image: "/project/awul-market.jpg",
    tags: ["Landing Page", "E-Commerce", "UI"],
    live: "https://awul.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/awul-awul-market",
  },
  {
    title: "Solar System Game",
    description: "Game pembelajaran interaktif tentang tata surya.",
    image: "/project/solar-system.JPG",
    tags: ["PHP", "Learning", "Game"],
    live: "https://ss.andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
  {
    title: "Koperasi Kredit",
    description: "Situs profil perusahaan modern untuk koperasi lokal.",
    image: "/project/koperasi-view.JPG",
    tags: ["Next.js", "Branding", "Business"],
    live: "https://www.koperasikredit-sidomanunggal.my.id/",
    github: "https://github.com/l0c4lxid/koperasi-profile-sidomanunggal",
  },
  {
    title: "Schedule Scraper",
    description: "API Node.js untuk jadwal akademik otomatis.",
    image: "/project/scarp-jadwal.JPG",
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
    <section className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
            Proyek
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-base-content">
            Karya pilihan
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
          className="flex flex-1 flex-col overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-lg"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
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
                Demo
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary w-full normal-case gap-2 shadow-lg"
              >
                <CodeBracketSquareIcon className="h-4 w-4" />
                GitHub
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
