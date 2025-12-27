"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "system" | "user";
  content: string;
};

const API_URL = "/api/ask";
const MODEL_ID = "gemini-2.5-flash-lite";

const initialMessage: ChatMessage = {
  id: "system-greeting",
  role: "system",
  content:
    "Halo 👋\nAku bisa jelaskan proyek yang pernah aku buat, tech stack, atau peluang kerja sama.",
};

const createMessageId = () =>
  `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export default function ChatWidgetMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLauncher, setShowLauncher] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateMatch = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateMatch();
    const media = window.matchMedia("(max-width: 768px)");
    const handleChange = () => updateMatch();

    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }

    window.addEventListener("resize", handleChange);

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
      return;
    }

    // Optional: set `data-mobile-scroll` on a custom scroll container.
    const scrollTarget =
      document.querySelector<HTMLElement>("[data-mobile-scroll]") ?? window;

    const handleScroll = () => {
      const isWindow = scrollTarget === window;
      const scrollTop = isWindow
        ? window.scrollY
        : (scrollTarget as HTMLElement).scrollTop;
      const scrollHeight = isWindow
        ? document.documentElement.scrollHeight
        : (scrollTarget as HTMLElement).scrollHeight;
      const clientHeight = isWindow
        ? window.innerHeight
        : (scrollTarget as HTMLElement).clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) {
        setShowLauncher(true);
        return;
      }

      const progress = scrollTop / maxScroll;
      setShowLauncher(progress >= 0.3);
    };

    handleScroll();
    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, showTyping]);

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      { id: createMessageId(), role: "user", content: trimmed },
    ]);
    setInputValue("");

    const runRequest = async () => {
      setIsLoading(true);
      setShowTyping(true);

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: trimmed,
            model: MODEL_ID,
          }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = (await response.json()) as {
          text?: string;
        };

        setMessages((prev) => [
          ...prev,
          {
            id: createMessageId(),
            role: "system",
            content:
              data?.text?.trim() ||
              "Maaf, aku belum bisa membalas sekarang. Coba beberapa saat lagi.",
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: createMessageId(),
            role: "system",
            content:
              "Sepertinya koneksi ke AI sedang bermasalah. Silakan coba lagi nanti.",
          },
        ]);
      } finally {
        setIsLoading(false);
        setShowTyping(false);
      }
    };

    // Future: replace with streaming AI response when available.
    void runRequest();
  };

  if (!isMobile) {
    return null;
  }

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="chat-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 z-50 w-[calc(100vw-24px)] max-h-[65vh] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900 text-slate-100 shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
            style={{
              bottom: "calc(72px + env(safe-area-inset-bottom))",
            }}
            role="dialog"
            aria-label="Mobile portfolio chat"
          >
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-800 px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative h-9 w-9 flex-none overflow-hidden rounded-full border border-slate-700">
                  <Image
                    src="/profile.jpg"
                    alt="Andhika avatar"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    Chat with Andhika
                  </p>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                    <span>Available</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex max-h-[65vh] flex-col">
              <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
                {messages.map((message) => {
                  const isUser = message.role === "user";
                  return (
                    <div
                      key={message.id}
                      className={isUser ? "flex justify-end" : "flex justify-start"}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={
                          isUser
                            ? "max-w-[75%] whitespace-pre-line rounded-2xl bg-blue-600 px-4 py-2.5 text-slate-100"
                            : "max-w-[75%] whitespace-pre-line rounded-2xl bg-slate-800 px-4 py-2.5 text-slate-100"
                        }
                      >
                        {message.content}
                      </motion.div>
                    </div>
                  );
                })}

                {showTyping ? (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1 rounded-2xl bg-slate-800 px-4 py-2 text-slate-300">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                    </div>
                  </div>
                ) : null}
                <div ref={endRef} />
              </div>

              <form
                onSubmit={handleSend}
                className="flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-3"
              >
                <input
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  type="text"
                  placeholder="Tanya soal proyek, UI/UX, atau kolaborasi…"
                  disabled={isLoading}
                  className="h-10 w-full rounded-full border border-slate-700 bg-slate-800 px-4 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 disabled:cursor-not-allowed disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-slate-100 shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && showLauncher ? (
          <motion.button
            key="chat-launcher"
            type="button"
            onClick={() => {
              setIsOpen(true);
              setHasUnread(false);
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 z-50 flex h-[54px] w-[54px] items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 shadow-[0_16px_28px_rgba(0,0,0,0.35)]"
            style={{
              bottom: "calc(72px + env(safe-area-inset-bottom))",
            }}
            aria-label="Open chat"
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-full w-full items-center justify-center"
            >
              <MessageCircle className="h-5 w-5" />
            </motion.span>
            {hasUnread ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                1
              </span>
            ) : null}
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
