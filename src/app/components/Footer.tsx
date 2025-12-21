export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="snap-start px-6 pb-12 pt-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 rounded-[28px] border border-white/30 bg-white/60 px-6 py-8 text-center shadow-xl shadow-indigo-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
        <p className="text-xl font-semibold text-slate-900 dark:text-white">
          <span className="gradient-text">Syaid Andhika</span>
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Information Systems Student • IT Support
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-indigo-400 via-cyan-300 to-pink-400" />
        <p className="text-xs text-slate-600 dark:text-slate-400">
          © {currentYear} Syaid Andhika. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
