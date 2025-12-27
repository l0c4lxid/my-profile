"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, MessageCircle } from "lucide-react";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

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
    "Halo 👋 Aku bisa jelaskan proyek, teknologi yang aku pakai, atau peluang kolaborasi.",
};

const createMessageId = () =>
  `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const playNotificationSound = () => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const AudioContextRef =
      window.AudioContext || (window as typeof window & { webkitAudioContext?: unknown }).webkitAudioContext;
    if (!AudioContextRef) {
      return;
    }
    const context = new (AudioContextRef as typeof AudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(720, context.currentTime);
    gainNode.gain.setValueAtTime(0.0001, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.22);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    const startSound = async () => {
      if (context.state === "suspended") {
        await context.resume();
      }
      oscillator.start();
      oscillator.stop(context.currentTime + 0.24);
    };

    startSound().catch(() => {
      context.close().catch(() => {});
    });

    oscillator.onended = () => {
      context.close().catch(() => {});
    };
  } catch {
    return;
  }
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasUnread, setHasUnread] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || messages.length > 0) {
      return;
    }
    setMessages([initialMessage]);
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (isOpen || !hasUnread) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowPreview(true);
    }, 650);

    return () => window.clearTimeout(timer);
  }, [hasUnread, isOpen]);

  useEffect(() => {
    if (!showPreview) {
      return;
    }

    playNotificationSound();
    const timer = window.setTimeout(() => {
      setShowPreview(false);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [showPreview]);

  const handleSend = async (text: string) => {
    if (isLoading) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: createMessageId(),
        role: "user",
        content: text,
      },
    ]);

    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: text,
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
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6 md:right-24">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="chat-widget"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex h-[420px] w-[320px] max-h-[500px] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
            role="dialog"
            aria-label="Portfolio chat widget"
          >
            <ChatHeader onClose={() => setIsOpen(false)} />
            <ChatBody messages={messages} showTyping={isLoading} />
            <ChatInput onSend={handleSend} isLoading={isLoading} />
          </motion.section>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && showPreview ? (
          <motion.div
            key="chat-preview"
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-[280px] rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_14px_28px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_16px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                <Bell className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Notifikasi
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-100">
                  {initialMessage.content}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasUnread(false);
          setShowPreview(false);
        }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)] transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-100 dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)] dark:hover:bg-slate-800 animate-[pulse_2.5s_ease-in-out_infinite]"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <MessageCircle className="h-5 w-5" />
        {hasUnread && !isOpen ? (
          <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white shadow">
            1
          </span>
        ) : null}
      </motion.button>
    </div>
  );
}
