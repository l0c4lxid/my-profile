"use client";

import { useState, type SVGProps } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

type Status = "idle" | "loading" | "success" | "error";

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22.223 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.223 0zM7.114 20.452H3.559V9h3.555v11.452zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.447 20.452h-3.554v-5.569c0-1.328-0.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h0.047c0.476-0.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.368 4.266 5.451v6.29z" />
  </svg>
);

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0.296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108-0.776 0.418-1.305 0.762-1.605-2.665-0.305-5.467-1.334-5.467-5.93 0-1.31 0.47-2.38 1.236-3.22-0.124-0.304-0.535-1.527 0.117-3.176 0 0 1.008-0.322 3.3 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.29-1.552 3.296-1.23 3.296-1.23 0.653 1.649 0.242 2.872 0.118 3.176 0.77 0.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.479 5.922 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.896-0.014 3.286 0 0.322 0.218 0.694 0.825 0.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function MobileContact() {
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    goal: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

    if (
      !formState.name ||
      !formState.email ||
      !formState.message ||
      !formState.goal
    ) {
      setStatus("error");
      setStatusMessage("Silakan isi semua kolom.");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setStatusMessage("Form belum dikonfigurasi.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("goal", formState.goal);
    formData.append("message", formState.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Pesan berhasil dikirim!");
        setFormState({ name: "", email: "", message: "", goal: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Gagal mengirim pesan.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Terjadi kesalahan tak terduga.");
    }
  };

  return (
    <section className="grid h-full min-h-0 grid-rows-[auto_auto_1fr_auto] gap-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
          Kontak
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-base-content">
          Kontak: mari terhubung
        </h2>
        <p className="mt-2 text-[0.65rem] font-medium text-base-content/70">
          Gratis konsultasi, balasan kurang dari 24 jam.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-2xl border border-base-300 bg-base-100 p-2 shadow-md">
          <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-base-content/60">
            <EnvelopeIcon className="h-4 w-4 text-primary" />
            Email
          </div>
          <a
            href="mailto:syaidxandhika@gmail.com"
            className="mt-1 block text-[0.65rem] font-medium text-base-content/80"
          >
            syaidxandhika@gmail.com
          </a>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-100 p-2 shadow-md">
          <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-base-content/60">
            <PhoneIcon className="h-4 w-4 text-primary" />
            Telepon
          </div>
          <p className="mt-1 text-[0.65rem] font-medium text-base-content/80">
            +62 896 0776 5169
          </p>
        </div>
        <div className="col-span-2 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-md">
          <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-base-content/60">
            <MapPinIcon className="h-4 w-4 text-primary" />
            Lokasi
          </div>
          <p className="mt-1 text-[0.65rem] font-medium text-base-content/80">
            Yogyakarta, Indonesia
          </p>
        </div>
      </div>

      <form
        className="flex h-full min-h-0 flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-base-content/60">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Nama Anda"
              className="input input-bordered h-9 w-full rounded-2xl bg-base-100 px-3 text-xs text-base-content placeholder:text-base-content/50"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-base-content/60">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Alamat email"
              className="input input-bordered h-9 w-full rounded-2xl bg-base-100 px-3 text-xs text-base-content placeholder:text-base-content/50"
              required
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-base-content/60">
            Tujuan
          </label>
          <select
            name="goal"
            value={formState.goal}
            onChange={handleChange}
            className="select select-bordered h-9 w-full rounded-2xl bg-base-100 px-3 text-xs text-base-content"
            required
          >
            <option value="" disabled>
              Pilih tujuan pesan
            </option>
            <option value="Landing page/website">Landing page/website</option>
            <option value="UI/UX audit atau desain">
              UI/UX audit atau desain
            </option>
            <option value="Integrasi API atau backend">
              Integrasi API atau backend
            </option>
            <option value="Kolaborasi atau peluang kerja">
              Kolaborasi atau peluang kerja
            </option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-base-content/60">
            Pesan
          </label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Ceritakan proyek Anda"
            className="textarea textarea-bordered h-20 w-full resize-none rounded-2xl bg-base-100 px-3 py-2 text-xs text-base-content placeholder:text-base-content/50"
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
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className={`alert rounded-2xl text-xs font-medium ${
                status === "success"
                  ? "alert-success"
                  : status === "error"
                  ? "alert-error"
                  : "alert-info"
              }`}
              role="status"
            >
              {status === "loading" ? "Mengirim pesan..." : statusMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto space-y-1">
          <button
            type="submit"
            disabled={status === "loading" || !WEB3FORMS_ACCESS_KEY}
            className="btn btn-primary w-full normal-case shadow-lg"
          >
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            <PaperAirplaneIcon className="ml-2 h-4 w-4" />
          </button>
          <p className="text-[0.6rem] font-medium text-base-content/70">
            Butuh landing page cepat (1-2 hari)? Hubungi saya.
          </p>
          {!WEB3FORMS_ACCESS_KEY && (
            <p className="text-[0.65rem] text-error">
              Form belum dikonfigurasi.
            </p>
          )}
        </div>
      </form>

      <div className="grid grid-cols-2 gap-2">
        <a
          href="https://www.linkedin.com/in/syaid-andhika-24831b2bb/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm w-full normal-case gap-2"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/l0c4lxid"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm w-full normal-case gap-2"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </section>
  );
}
