"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type ChatMessage = {
  id: string;
  role: "system" | "user";
  content: string;
};

type ChatBodyProps = {
  messages: ChatMessage[];
  showTyping?: boolean;
};

export default function ChatBody({ messages, showTyping = false }: ChatBodyProps) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length]);

  return (
    <div
      className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm text-slate-600 dark:text-slate-100"
      aria-live="polite"
    >
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
                  ? "max-w-[75%] whitespace-pre-line rounded-2xl bg-blue-600 px-4 py-2.5 text-white shadow-sm"
                  : "max-w-[75%] whitespace-pre-line rounded-2xl border border-slate-200/70 bg-white px-4 py-2.5 text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100"
              }
            >
              {message.content}
            </motion.div>
          </div>
        );
      })}
      {showTyping ? (
        <div className="flex justify-start">
          <div className="flex items-center gap-1 rounded-2xl bg-slate-100 px-4 py-2 text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-300">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
          </div>
        </div>
      ) : null}
      <div ref={endRef} />
    </div>
  );
}
