"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

/** Where the element starts, relative to its resting position. */
const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 16 },
  down: { x: 0, y: -16 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
  none: { x: 0, y: 0 },
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Scroll-triggered entrance: a short fade and a small rise. No blur, no
 * overshoot, no scale — just enough to settle the content into place.
 *
 * Note: always wrap a whole paragraph in one `Reveal`. Never split text into
 * one `Reveal` per word/line — that is what previously broke spacing (see
 * `MaskLine` for the only safe place to mask).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating in. Use to stagger siblings. */
  delay?: number;
  direction?: Direction;
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const { x, y } = OFFSETS[direction];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A line of text sliding up out of an overflow mask.
 *
 * Safe because the mask is on a *block* wrapper: no baseline is involved, so
 * nothing is clipped. A per-word version of this was not safe — an
 * `inline-block` with `overflow: hidden` takes its bottom margin edge as the
 * baseline (CSS 2.1), which clips descenders, and putting the word separator
 * *inside* the box made every space render as nothing at all because trailing
 * whitespace is trimmed off a line box. Body copy now uses `Reveal` instead.
 *
 * Keep to short, descender-free headings (the hero name).
 */
export function MaskLine({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={`block ${className ?? ""}`}>{children}</span>;
  }

  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}