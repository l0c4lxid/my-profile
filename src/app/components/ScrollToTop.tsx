"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn btn-primary btn-circle fixed bottom-6 right-6 z-40 shadow-lg"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
