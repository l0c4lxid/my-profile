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
      setStatusMessage("Silakan isi semua kolom.");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setStatusMessage("Form belum dikonfigurasi. Silakan coba lagi nanti.");
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
        setStatusMessage(data.message || "Pesan berhasil dikirim!");
        setFormState({ name: "", email: "", message: "" });
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-base-content/60">
            Kontak
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content md:text-4xl lg:text-5xl">
            Mari bangun sesuatu yang
            <span className="text-primary"> berwarna</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card rounded-[28px] border border-base-300 bg-base-100 p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-base-content">
              Detail Kontak
            </h3>
            <p className="mt-3 text-sm font-medium text-base-content/80">
              Hubungi saya untuk kolaborasi, kerja lepas, atau sekadar menyapa.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 font-medium text-base-content/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <EnvelopeIcon className="h-5 w-5" />
                </span>
                <a href="mailto:syaidxandhika@gmail.com">
                  syaidxandhika@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 font-medium text-base-content/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>+62 896 0776 5169</span>
              </div>
              <div className="flex items-center gap-3 font-medium text-base-content/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span>Solo, Indonesia</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com/in/syaid-andhika-24831b2bb/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline normal-case"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/l0c4lxid"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline normal-case"
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
            className="card rounded-[28px] border border-base-300 bg-base-100 p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-base-content">
              Kirim Pesan
            </h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-base-content/80"
                >
                  Nama Lengkap
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  className="input input-bordered w-full rounded-2xl bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/60"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-base-content/80"
                >
                  Alamat Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Alamat email"
                  className="input input-bordered w-full rounded-2xl bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/60"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-base-content/80"
                >
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Ceritakan proyek Anda"
                  className="textarea textarea-bordered h-32 w-full rounded-2xl bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/60"
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
                    className={`alert rounded-2xl text-sm font-medium ${
                      status === "success"
                        ? "alert-success"
                        : status === "error"
                          ? "alert-error"
                          : "alert-info"
                    }`}
                    role="status"
                  >
                    {status === "loading"
                      ? "Sedang mengirim pesan..."
                      : statusMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "loading" || !WEB3FORMS_ACCESS_KEY}
                className="btn btn-primary normal-case w-full justify-center shadow-lg"
              >
                {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                <PaperAirplaneIcon className="ml-2 h-4 w-4" />
              </button>
              {!WEB3FORMS_ACCESS_KEY && (
                <p className="text-xs text-error">
                  Form belum dikonfigurasi. Silakan setel
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
