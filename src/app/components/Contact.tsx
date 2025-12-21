"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setStatusMessage("Form is not configured. Please try again later.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("An unexpected error occurred.");
    }
  };

  return (
    <section
      id="contact"
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
            Contact
          </p>
          <h2 className="section-title mt-3">
            Let&apos;s build something
            <span className="gradient-text"> vibrant</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-[28px] p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Contact Details
            </h3>
            <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-300">
              Reach out for collaborations, freelance work, or just to say hi.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 font-medium text-slate-800 dark:text-slate-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400/30 via-cyan-400/20 to-pink-400/30 text-indigo-500 dark:text-cyan-200">
                  <EnvelopeIcon className="h-5 w-5" />
                </span>
                <a href="mailto:syaidxandhika@gmail.com">
                  syaidxandhika@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 font-medium text-slate-800 dark:text-slate-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400/30 via-cyan-400/20 to-pink-400/30 text-indigo-500 dark:text-cyan-200">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>+62 896 0776 5169</span>
              </div>
              <div className="flex items-center gap-3 font-medium text-slate-800 dark:text-slate-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400/30 via-cyan-400/20 to-pink-400/30 text-indigo-500 dark:text-cyan-200">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span>Yogyakarta, Indonesia</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com/in/syaid-andhika-24831b2bb/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/l0c4lxid"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-[28px] p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Send a Message
            </h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-300"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-300"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  className="h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
                  required
                />
              </div>

              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                        : status === "error"
                          ? "bg-rose-500/10 text-rose-500"
                          : "bg-indigo-500/10 text-indigo-500"
                    }`}
                    role="status"
                  >
                    {status === "loading" ? "Sending your message..." : statusMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "loading" || !WEB3FORMS_ACCESS_KEY}
                className="btn-primary w-full justify-center"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <PaperAirplaneIcon className="ml-2 h-4 w-4" />
              </button>
              {!WEB3FORMS_ACCESS_KEY && (
                <p className="text-xs text-rose-500">
                  Form is not configured. Please set
                  NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
