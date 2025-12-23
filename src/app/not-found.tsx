import Link from "next/link";
import { ArrowRightIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-base-200 px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute inset-0 bg-base-200/60" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-base-content/60">
          Error 404
        </p>
        <div className="space-y-4">
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-none text-base-content">
            404
          </h1>
          <p className="text-2xl font-semibold text-base-content">
            Halaman ini nyasar dari peta.
          </p>
          <p className="mx-auto max-w-2xl text-base font-medium text-base-content/70">
            Sepertinya tautan ini tidak ada atau sudah dipindah. Tenang, kamu
            masih berada di portofolio Syaid Andhika. Pilih jalur cepat di
            bawah untuk kembali ke bagian yang kamu cari.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary normal-case gap-2 shadow-lg">
            <HomeIcon className="h-5 w-5" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/#projects"
            className="btn btn-outline normal-case gap-2"
          >
            Lihat Proyek
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-4 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-base-300 bg-base-100/80 p-5 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-base-content">Tentang</p>
            <p className="mt-2 text-sm text-base-content/70">
              Ringkas, fokus, dan human-friendly.
            </p>
          </div>
          <div className="rounded-3xl border border-base-300 bg-base-100/80 p-5 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-base-content">Keahlian</p>
            <p className="mt-2 text-sm text-base-content/70">
              UI/UX, pengembangan web, dan support.
            </p>
          </div>
          <div className="rounded-3xl border border-base-300 bg-base-100/80 p-5 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold text-base-content">Kontak</p>
            <p className="mt-2 text-sm text-base-content/70">
              Siap kolaborasi dan diskusi kebutuhanmu.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
