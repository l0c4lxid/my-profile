"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block"
      aria-hidden={true}
    >
      <div className="flex h-40 w-2 flex-col items-center rounded-full bg-base-100/70 p-1 shadow-md backdrop-blur-lg">
        <motion.div
          style={{ scaleY }}
          className="h-full w-full origin-bottom rounded-full bg-primary"
          role="presentation"
        />
      </div>
    </div>
  );
}
