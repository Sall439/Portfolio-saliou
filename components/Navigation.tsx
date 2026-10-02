"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();

  /* Highlight whichever section is crossing the upper part of the viewport. */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* The page behind the mobile drawer must not scroll. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Escape closes the drawer and returns focus to the button that opened it. */
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) toggleRef.current?.focus();
  }, [open]);

  return (
    <>
      {/*
        The surface is unconditional. It used to depend on a `scrolled` flag,
        which left the header fully transparent — content showed through — until
        the page moved 24px.
      */}
      <motion.header
        initial={reduce ? false : { y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="header-surface fixed inset-x-0 top-0 z-50"
      >
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex max-w-[78rem] items-center justify-between px-6 py-5 sm:px-8"
        >
          {/* Monogram */}
          <a
            href="#accueil"
            className="group flex items-center gap-3"
            aria-label={`${profile.name} — retour à l'accueil`}
          >
            <span className="flex h-8 w-8 items-center justify-center border border-hair-strong font-display text-xs tracking-tight text-bone transition-colors duration-300 group-hover:border-bone/40">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-bone sm:block">
              {profile.name}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className="link-wipe transition-colors duration-300 hover:text-bone"
                    style={{
                      color: isActive ? "var(--color-bone)" : "var(--color-ash)",
                    }}
                  >
                    {item.label}
                    <span
                      className="link-wipe-after"
                      style={{
                        // Active section gets the warm accent — one of only
                        // three places the gold tone appears.
                        backgroundColor: isActive
                          ? "var(--color-warm)"
                          : "currentColor",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {/*
              Primary header CTA. The audience is recruiters, so this leads
              with availability rather than "hire me for a freelance gig".
            */}
            <a
              href="#contact"
              className="hidden border border-hair-strong px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase text-bone transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-ink sm:inline-block"
            >
              Me recruter
            </a>

            {/* Burger */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
            >
              <motion.span
                aria-hidden="true"
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="block h-px w-6 bg-bone"
              />
              <motion.span
                aria-hidden="true"
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="block h-px w-6 bg-bone"
              />
            </button>
          </div>
        </nav>

        {/* Reading progress */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: reduce ? 1 : scrollYProgress }}
          className={`h-px origin-left bg-warm ${reduce ? "opacity-0" : ""}`}
        />
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center px-6 pt-24 pb-12 sm:px-8">
              <ul>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 + index * 0.05, ease: EASE }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-5 border-b border-hair py-5"
                    >
                      <span className="text-xs text-ash-dim tabular-nums">
                        0{index + 1}
                      </span>
                      <span className="font-display text-3xl text-bone">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36, ease: EASE }}
                className="mt-10 inline-flex w-fit border border-bone bg-bone px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-ink"
              >
                Me recruter
              </motion.a>

              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.44 }}
                className="mt-8 text-sm text-ash-dim"
              >
                {profile.contact.email}
              </motion.p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}