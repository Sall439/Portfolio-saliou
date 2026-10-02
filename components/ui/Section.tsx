import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Consistent vertical rhythm + anchor id for every band of the page.
 */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[78rem] px-6 py-24 sm:px-8 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

/**
 * Numbered editorial label (01 — À propos) + serif display heading.
 */
export function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <Reveal>
        <div
          className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}
        >
          <span className="text-xs text-ash-dim tabular-nums">{index}</span>
          <span className="h-px w-10 bg-hair-strong" aria-hidden="true" />
          <span className="eyebrow">{label}</span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          className={`mt-6 font-display text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[0.95] tracking-[-0.02em] text-bone ${
            centered ? "mx-auto max-w-4xl" : "max-w-3xl"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 text-base leading-relaxed text-ash sm:text-lg ${
              centered ? "mx-auto max-w-2xl" : "max-w-xl"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}


