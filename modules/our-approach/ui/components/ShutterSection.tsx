"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type ShutterSectionProps = {
  top: ReactNode; // ContactCard
  bottom: ReactNode; // FooterVideo
};

export default function ShutterSection({ top, bottom }: ShutterSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Move ONLY the top page up by exactly 100% of its height
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      {/* 🔹 Visual viewport (sticky to allow animation to play while scrolling) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Bottom page: fixed under the top */}
        <div className="absolute inset-0 h-full w-full">{bottom}</div>

        {/* Top page: fully covering bottom, lifts up based on scroll */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-10 h-full w-full"
        >
          {top}
        </motion.div>
      </div>
    </div>
  );
}
