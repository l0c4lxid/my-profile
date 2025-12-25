"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeBracketSquareIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Desain Interior Template",
    description:
      "Eksplorasi landing page bisnis interior dengan layout elegan dan fokus visual.",
    image: "/project/interior.jpg",
    tags: ["Landing Page", "Business", "UI"],
    live: "https://interior.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/DesainInteriorTemplate",
  },
  {
    title: "Trifthing Market",
    description:
      "Tampilan landing page e-commerce sederhana untuk brand market lokal.",
    image: "/project/awul-market.jpg",
    tags: ["Landing Page", "E-Commerce", "UI"],
    live: "https://awul.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/awul-awul-market",
  },
  {
    title: "Solar System Game",
    description:
      "Game pembelajaran interaktif tentang tata surya dengan kuis dan alur UI yang menyenangkan.",
    image: "/project/solar-system.JPG",
    tags: ["PHP", "Learning", "Game", "Static"],
    live: "https://ss.andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
  {
    title: "Koperasi Kredit",
    description:
      "Situs profil perusahaan modern untuk menguatkan merek koperasi lokal.",
    image: "/project/koperasi-view.JPG",
    tags: ["Next.js", "Branding", "Business"],
    live: "https://www.koperasikredit-sidomanunggal.my.id/",
    github: "https://github.com/l0c4lxid/koperasi-profile-sidomanunggal",
  },
  {
    title: "Schedule Scraper API",
    description:
      "API Node.js untuk mengekstrak dan menyajikan jadwal akademik dengan endpoint yang rapi.",
    image: "/project/scarp-jadwal.JPG",
    tags: ["Node.js", "API", "Automation"],
    live: "https://andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
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
            Proyek
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
            Sorotan <span className="text-primary">karya pilihan</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:hidden">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="card group flex w-full flex-col overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-lg"
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
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-base-content">
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
                        className="badge badge-outline px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80"
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
                      className="btn btn-primary normal-case w-full justify-center gap-2 shadow-lg"
                      aria-label={`Lihat demo ${project.title}`}
                    >
                      <GlobeAltIcon className="h-4 w-4" />
                      Demo
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary normal-case w-full justify-center gap-2 shadow-lg"
                      aria-label={`Repositori GitHub untuk ${project.title}`}
                    >
                      <CodeBracketSquareIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div
            ref={scrollRef}
            className="no-scrollbar hidden snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:flex"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="card group flex h-full w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-lg sm:w-[340px] lg:w-[360px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-base-200/40" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-base-content">
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
                        className="badge badge-outline px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary normal-case w-full justify-center gap-2 shadow-lg"
                      aria-label={`Lihat demo ${project.title}`}
                    >
                      <GlobeAltIcon className="h-4 w-4" />
                      Demo
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary normal-case w-full justify-center gap-2 shadow-lg"
                      aria-label={`Repositori GitHub untuk ${project.title}`}
                    >
                      <CodeBracketSquareIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="hidden items-center justify-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="btn btn-outline btn-circle"
              aria-label="Geser ke kiri"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="btn btn-outline btn-circle"
              aria-label="Geser ke kanan"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
