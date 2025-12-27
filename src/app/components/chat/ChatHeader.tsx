"use client";

import Image from "next/image";
import { X } from "lucide-react";

type ChatHeaderProps = {
  onClose: () => void;
};

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 py-3 text-slate-900 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95 dark:text-slate-100">
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative h-10 w-10 flex-none overflow-hidden rounded-full border border-slate-200/80 dark:border-slate-700/70">
          <Image
            src="/profile.jpg"
            alt="Andhika avatar"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">
            Chat with Andhika
          </p>
          <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span>Available</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        aria-label="Close chat widget"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
