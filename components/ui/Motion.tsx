"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Counts up to `value` the first time it scrolls into view.
 *
 * A string `value` is treated as an explicit placeholder for a figure that is
 * not verified yet: it renders as-is and never animates. Renders 0 on the
 * server for numbers so hydration always matches.
 */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number | string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  const numeric = typeof value === "number";

  useEffect(() => {
    if (!numeric || !inView) return;

    // Reduced motion: jump straight to the final value. Deferred to a frame so
    // the state update happens in a callback rather than during the effect body.
    if (reduce) {
      const frame = requestAnimationFrame(() => setDisplay(value as number));
      return () => cancelAnimationFrame(frame);
    }

    const controls = animate(0, value as number, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, reduce, value, numeric]);

  return (
    <span ref={ref} className={className}>
      {numeric ? display : value}
      {suffix}
    </span>
  );
}