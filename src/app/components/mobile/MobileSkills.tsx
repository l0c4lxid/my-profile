"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import {
  BackendIllustration,
  CloudIllustration,
  FrontendIllustration,
  StrengthIllustration,
} from "./SkillIllustrations";

const skillGroups = [
  {
    id: "frontend",
    title: "Front-end (HTML, CSS, React, Next.js)",
    icon: CodeBracketIcon,
    barClass: "bg-primary",
    toneClass: "text-primary/45",
    illustration: FrontendIllustration,
    summary:
      "Membangun antarmuka cepat, responsif, dan aksesibel untuk landing page.",
    examples: [
      "Next.js untuk halaman profil Koperasi Kredit.",
      "React untuk interaksi UI pada Solar System Game.",
    ],
    skills: [
      { name: "HTML/CSS", level: 92 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    id: "backend",
    title: "Back-end (Node.js, REST API, Database Design)",
    icon: CommandLineIcon,
    barClass: "bg-secondary",
    toneClass: "text-secondary/45",
    illustration: BackendIllustration,
    summary:
      "Menyusun API sederhana dan integrasi data yang rapi untuk kebutuhan internal.",
    examples: [
      "Node.js untuk Schedule Scraper API.",
      "Rancangan database ringan untuk prototipe.",
    ],
    skills: [
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 80 },
      { name: "Database", level: 75 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & CI (Git, Docker, Vercel)",
    icon: CloudIcon,
    barClass: "bg-accent",
    toneClass: "text-accent/45",
    illustration: CloudIllustration,
    summary: "Menjaga kolaborasi dan rilis lewat workflow Git yang rapi.",
    examples: [
      "GitHub flow untuk kolaborasi proyek.",
      "Deploy demo ke Vercel dan hosting shared.",
    ],
    skills: [
      { name: "Git & CI", level: 83 },
      { name: "Docker", level: 70 },
      { name: "Cloud", level: 68 },
    ],
  },
  {
    id: "strength",
    title: "Kekuatan Lain (IT Support, Analisis, Sistem)",
    icon: CpuChipIcon,
    barClass: "bg-info",
    toneClass: "text-info/45",
    illustration: StrengthIllustration,
    summary:
      "Menggabungkan dukungan teknis dan komunikasi agar solusi tepat guna.",
    examples: [
      "Troubleshooting harian dan pendampingan pengguna.",
      "Menerjemahkan kebutuhan jadi backlog.",
    ],
    skills: [
      { name: "IT Support", level: 88 },
      { name: "Analisis Data", level: 72 },
      { name: "Sistem", level: 80 },
    ],
  },
];

export default function MobileSkills() {
  const prefersReducedMotion = useReducedMotion();
  const [activeGroupId, setActiveGroupId] = useState(skillGroups[0].id);
  const activeGroup =
    skillGroups.find((group) => group.id === activeGroupId) || skillGroups[0];
  const ActiveIllustration = activeGroup.illustration;

  return (
    <section className="flex h-full min-h-0 flex-col gap-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
          Keahlian
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-base-content">
          Keahlian &amp; Teknologi
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          const isActive = group.id === activeGroupId;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveGroupId(group.id)}
              className={`flex items-center gap-2 rounded-2xl border border-base-300 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "bg-base-100 text-base-content/60"
              }`}
            >
              <Icon className="h-4 w-4" />
              {group.title}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeGroup.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          className="grid min-h-0 flex-1 grid-cols-2 gap-3"
        >
          <div className="col-span-2 rounded-2xl border border-base-300 bg-base-100 p-3 text-xs font-medium text-base-content/80 shadow-md">
            <p>{activeGroup.summary}</p>
            <ul className="mt-2 space-y-1 text-[0.65rem] text-base-content/70">
              {activeGroup.examples.map((example) => (
                <li key={example} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-base-content/50" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
          {activeGroup.skills.map((skill) => (
            <div
              key={skill.name}
              className="relative overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-3 shadow-md"
            >
              <div
                className={`pointer-events-none absolute right-2 top-2 ${activeGroup.toneClass}`}
              >
                <ActiveIllustration className="h-10 w-10 opacity-80" />
              </div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-base-content/60">
                {skill.name}
              </p>
              <p className="mt-2 text-lg font-semibold text-base-content">
                {skill.level}%
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-base-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                  className={`h-full rounded-full ${activeGroup.barClass}`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
