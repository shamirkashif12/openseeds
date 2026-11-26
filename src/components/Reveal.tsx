"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Dir = "up" | "down" | "left" | "right" | "zoom";

const offset: Record<Dir, { x?: number; y?: number; scale?: number }> = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: -80 },
  right: { x: 80 },
  zoom: { scale: 0.85 },
};

export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[dir] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
