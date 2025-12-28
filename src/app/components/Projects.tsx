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
      "Saya merancang landing page galeri desain interior dengan fokus visual bersih dan CTA jelas. Layout ringan membantu calon klien memahami layanan dengan cepat.",
    image: "/project/interior.jpg",
    alt: "Tangkapan layar proyek Desain Interior Template - landing page galeri desain interior yang bersih dan modern",
    tags: ["Landing Page", "Business", "UI"],
    live: "https://interior.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/DesainInteriorTemplate",
  },
  {
    title: "Thrifting Market",
    description:
      "Landing page marketplace thrifting/awul-awul dengan struktur katalog rapi dan CTA belanja. Fokus pada UX mobile agar produk mudah dipindai dan dipilih.",
    image: "/project/awul-market.jpg",
    alt: "Tangkapan layar Thrifting Market - marketplace thrifting/awul-awul untuk barang preloved",
    tags: ["Landing Page", "E-Commerce", "UI"],
    live: "https://awul.syaidandhika.site/",
    github: "https://github.com/l0c4lxid/awul-awul-market",
  },
  {
    title: "Solar System Game",
    description:
      "Game edukasi interaktif tentang tata surya dengan kuis dan alur belajar sederhana. Saya mengerjakan UI dan interaksi agar materi terasa menyenangkan.",
    image: "/project/solar-system.JPG",
    alt: "Cuplikan Solar System Game - simulasi tata surya interaktif di browser",
    tags: ["PHP", "Learning", "Game", "Static"],
    live: "https://ss.andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
  {
    title: "Koperasi Kredit",
    description:
      "Website profil koperasi untuk memperkuat brand dan menampilkan layanan anggota. Menggunakan Next.js agar performa cepat dan struktur konten rapi.",
    image: "/project/koperasi-view.JPG",
    alt: "Halaman beranda situs Koperasi Kredit - profil koperasi dan informasi layanan anggota",
    tags: ["Next.js", "Branding", "Business"],
    live: "https://www.koperasikredit-sidomanunggal.my.id/",
    github: "https://github.com/l0c4lxid/koperasi-profile-sidomanunggal",
  },
  {
    title: "Schedule Scraper API",
    description:
      "API Node.js untuk mengambil jadwal akademik dan menyajikannya dalam endpoint terstruktur. Fokus pada otomatisasi dan dokumentasi sederhana agar mudah diintegrasikan.",
    image: "/project/scarp-jadwal.JPG",
    alt: "Tangkapan layar Schedule Scraper API - dokumentasi endpoint untuk pengambilan data jadwal",
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
            Proyek terpilih:
            <span className="text-primary"> sorotan karya</span>
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
                    alt={project.alt}
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
                      Lihat Demo
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary normal-case w-full justify-center gap-2 shadow-lg"
                      aria-label={`Kode di GitHub untuk ${project.title}`}
                    >
                      <CodeBracketSquareIcon className="h-4 w-4" />
                      Kode di GitHub
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
                    alt={project.alt}
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
                      Lihat Demo
                      <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary normal-case w-full justify-center gap-2 shadow-lg"
                      aria-label={`Kode di GitHub untuk ${project.title}`}
                    >
                      <CodeBracketSquareIcon className="h-4 w-4" />
                      Kode di GitHub
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
