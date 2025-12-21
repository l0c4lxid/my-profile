"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Solar System Game",
    description:
      "Interactive learning game about the solar system with quizzes and playful UI flows.",
    image: "/project/solar-system.JPG",
    tags: ["PHP", "Learning", "Game"],
    live: "https://ss.andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
  {
    title: "Koperasi Sido Manunggal",
    description:
      "Modern company profile site built to elevate a local cooperative brand.",
    image: "/project/koperasi-view.JPG",
    tags: ["Next.js", "Branding", "Business"],
    live: "https://www.koperasikredit-sidomanunggal.my.id/",
    github: "https://github.com/l0c4lxid/koperasi-profile-sidomanunggal",
  },
  {
    title: "Schedule Scraper API",
    description:
      "Node.js API to extract and serve academic schedules with clean endpoints.",
    image: "/project/scarp-jadwal.JPG",
    tags: ["Node.js", "API", "Automation"],
    live: "https://andhikawebsite.my.id/",
    github: "https://github.com/l0c4lxid",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-base-content/60">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
            Featured <span className="text-primary">work highlights</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="card group flex h-full flex-col overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
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
                <div className="mt-auto flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary normal-case w-full justify-center shadow-lg"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    Live Demo
                    <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary normal-case w-full justify-center shadow-lg"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
