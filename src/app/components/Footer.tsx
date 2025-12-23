export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="snap-start px-6 pb-12 pt-8">
      <div className="card mx-auto flex w-full max-w-6xl flex-col items-center gap-4 rounded-[28px] border border-base-300 bg-base-100 px-6 py-8 text-center shadow-lg backdrop-blur">
        <p className="text-xl font-semibold text-base-content">
          <span className="text-primary">Syaid Andhika</span>
        </p>
        <p className="text-sm text-base-content/60">
          Lulusan S.Kom • Technical Support UBSI Kampus Solo
        </p>
        <div className="h-px w-24 bg-base-300" />
        <p className="text-xs text-base-content/60">
          © {currentYear} Syaid Andhika. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
