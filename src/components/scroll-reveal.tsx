"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 50 },
  down: { x: 0, y: -50 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y, scale: direction === "none" ? 0.95 : 1 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x, y, scale: direction === "none" ? 0.95 : 1 }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container: wraps children with incremental delays ─── */
interface StaggerProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  direction?: Direction;
  className?: string;
  baseDelay?: number;
}

export function StaggerReveal({
  children,
  staggerDelay = 0.12,
  direction = "up",
  className,
  baseDelay = 0,
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal
          key={i}
          direction={direction}
          delay={baseDelay + i * staggerDelay}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
