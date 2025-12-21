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
    title: "Frontend",
    icon: CodeBracketIcon,
    accent: "from-pink-400/40 via-fuchsia-400/20 to-indigo-400/40",
    skills: [
      { name: "HTML/CSS", level: 92 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: CommandLineIcon,
    accent: "from-cyan-400/40 via-blue-400/20 to-indigo-400/40",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 80 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: CloudIcon,
    accent: "from-emerald-400/40 via-cyan-400/20 to-sky-400/40",
    skills: [
      { name: "Git & CI", level: 83 },
      { name: "Docker", level: 70 },
      { name: "Cloud Services", level: 68 },
    ],
  },
  {
    title: "Other Strengths",
    icon: CpuChipIcon,
    accent: "from-amber-400/40 via-orange-400/20 to-rose-400/40",
    skills: [
      { name: "IT Support", level: 88 },
      { name: "Data Analysis", level: 72 },
      { name: "System Thinking", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
            Skills
          </p>
          <h2 className="section-title mt-3">
            Powered by <span className="gradient-text">modern stacks</span>
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
                className="glass-card rounded-[28px] p-6"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-indigo-500 dark:text-cyan-200`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Curated strengths for real-world impact.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/60 dark:bg-slate-800/70">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
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
