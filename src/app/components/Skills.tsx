"use client";

import { motion } from "framer-motion";
import {
  CpuChipIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const skillGroups = [
  {
    title: "Front-end",
    icon: CodeBracketIcon,
    iconClass: "bg-primary/10 text-primary",
    barClass: "bg-primary",
    skills: [
      { name: "HTML/CSS", level: 92 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    title: "Back-end",
    icon: CommandLineIcon,
    iconClass: "bg-secondary/10 text-secondary",
    barClass: "bg-secondary",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 80 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    title: "Cloud & Perangkat",
    icon: CloudIcon,
    iconClass: "bg-accent/10 text-accent",
    barClass: "bg-accent",
    skills: [
      { name: "Git & CI", level: 83 },
      { name: "Docker", level: 70 },
      { name: "Cloud Services", level: 68 },
    ],
  },
  {
    title: "Kekuatan Lain",
    icon: CpuChipIcon,
    iconClass: "bg-info/10 text-info",
    barClass: "bg-info",
    skills: [
      { name: "IT Support", level: 88 },
      { name: "Data Analysis", level: 72 },
      { name: "Berpikir Sistem", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Keahlian
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
            Didukung <span className="text-primary">stack modern</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="card rounded-[28px] border border-base-300 bg-base-100 p-6 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${group.iconClass}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-base-content">
                      {group.title}
                    </h3>
                    <p className="text-sm text-base-content/60">
                      Kekuatan yang relevan untuk kebutuhan nyata.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm font-medium text-base-content/80">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-base-200">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${group.barClass}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
