import {
  AcademicCapIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative snap-start px-6 pb-[calc(3rem+64px+env(safe-area-inset-bottom))] pt-8 md:pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-8 -z-10 mx-auto h-36 w-[min(92vw,74rem)] rounded-[40px] bg-gradient-to-r from-primary/10 via-secondary/10 to-base-200/10 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-[32px] bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 p-[1px] shadow-lg">
          <div className="relative overflow-hidden rounded-[31px] border border-base-300/60 bg-base-100/85 px-6 py-10 text-center backdrop-blur">
            <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-base-content/60">
                  Terima Kasih
                </p>
                <p className="text-2xl font-semibold text-base-content">
                  Syaid <span className="text-primary">Andhika</span>
                </p>
                <p className="text-sm font-medium text-base-content/70">
                  Technical Support UBSI Kampus Solo
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
                <a
                  className="flex items-center gap-2 transition hover:text-primary"
                  href="#home"
                >
                  <HomeIcon className="h-4 w-4" />
                  Home
                </a>
                <a
                  className="flex items-center gap-2 transition hover:text-primary"
                  href="#about"
                >
                  <UserCircleIcon className="h-4 w-4" />
                  Tentang
                </a>
                <a
                  className="flex items-center gap-2 transition hover:text-primary"
                  href="#skills"
                >
                  <SparklesIcon className="h-4 w-4" />
                  Skills
                </a>
                <a
                  className="flex items-center gap-2 transition hover:text-primary"
                  href="#projects"
                >
                  <BriefcaseIcon className="h-4 w-4" />
                  Proyek
                </a>
                <a
                  className="flex items-center gap-2 transition hover:text-primary"
                  href="#education"
                >
                  <AcademicCapIcon className="h-4 w-4" />
                  Pendidikan
                </a>
                <a
                  className="flex items-center gap-2 transition hover:text-primary"
                  href="#contact"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  Kontak
                </a>
              </div>
              <a
                className="btn btn-primary btn-sm normal-case gap-2 shadow-md"
                href="#home"
              >
                Kembali ke atas
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <div className="h-px w-24 bg-base-300/70" />
              <p className="text-xs text-base-content/60">
                © {currentYear} Syaid Andhika. Hak cipta dilindungi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
