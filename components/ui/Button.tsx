import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Variant = "primary" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-bone text-ink border border-bone hover:bg-white hover:border-white",
  ghost:
    "bg-transparent text-bone border border-hair-strong hover:border-bone/50",
};

/**
 * Plain pill CTA. The arrow slides a few pixels on hover — the only motion.
 * Server component: a bare anchor needs no client JS.
 */
export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 sm:px-7 sm:py-3.5 ${VARIANTS[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
    >
      <span>{children}</span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

/**
 * Small uppercase label + arrow, used for the per-project demo/code links.
 * Inherits colour so it works on both light-on-dark surfaces.
 */
export function TextLink({
  href,
  children,
  muted = false,
}: {
  href: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
        muted
          ? "text-ash-dim hover:text-bone"
          : "text-bone hover:text-white"
      }`}
    >
      <span className="link-wipe after:link-wipe-after">{children}</span>
      <ArrowRight className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}