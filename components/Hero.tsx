"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import photo from "@/public/assets/photo1.jpeg";
import { profile } from "@/data/profile";
import { ActionLink } from "@/components/ui/Button";
import { MaskLine, Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="accueil"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <div className="relative mx-auto grid w-full max-w-[78rem] grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:pt-32 lg:pb-24">
        {/* ---------------- Copy ---------------- */}
        <div className="lg:col-span-7">
          <Reveal delay={0.35} amount={0}>
            <p className="mb-7 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-warm" />
              <span className="eyebrow">{profile.availability}</span>
            </p>
          </Reveal>

          <h1 className="font-display text-[clamp(2.75rem,7.5vw,5.5rem)] leading-[0.95] tracking-[-0.025em] text-bone">
            <MaskLine delay={0.15}>{profile.firstName} {profile.lastName}</MaskLine>
            {/* <MaskLine delay={0.23}>{profile.lastName}</MaskLine> */}
          </h1>

          {/* Role appears exactly once on the page */}
          <Reveal delay={0.5} amount={0}>
            <p className="mt-7 text-sm tracking-[0.18em] uppercase text-ash">
              {profile.role}
            </p>
          </Reveal>

          {/*
            One text node, no per-word split. Word spacing is left to normal
            HTML collapsing, which cannot break.
          */}
          <Reveal delay={0.6} amount={0}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ash sm:text-xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.72} amount={0}>
            {/* Two buttons, side by side, equal width on mobile so they never
                wrap or get clipped. */}
            <div className="mt-8 grid max-w-md grid-cols-2 gap-3 sm:flex sm:max-w-none sm:gap-3">
              <ActionLink href="#projets">Voir mes projets</ActionLink>
              <ActionLink href="#contact" variant="ghost">
                Me contacter
              </ActionLink>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Portrait + stack ---------------- */}
        <div className="lg:col-span-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="mx-auto w-full max-w-xs sm:max-w-sm lg:ml-auto lg:max-w-none lg:w-[88%]"
          >
            {/*
              Offset hairline. The bottom edge sits *below* the caption (was
              `bottom-5`, which lifted it up so the caption escaped the frame).
            */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-x-2.5 -top-2.5 -bottom-2.5 border border-hair"
              />

              {/* photo1.jpeg is 960x1280 (3:4); this frame matches its native
                  ratio so nothing is cropped. Adjust `aspect-*` if you swap it. */}
              <div className="relative aspect-3/4 overflow-hidden bg-ink-3">
                <Image
                  src={photo}
                  alt={`Portrait de ${profile.name}, ${profile.role}`}
                  priority
                  placeholder="blur"
                  fill
                  sizes="(max-width: 1024px) 72vw, 34vw"
                  className="object-cover object-center"
                />
              </div>

              <p className="mt-5 text-[0.6875rem] tracking-[0.16em] uppercase text-ash-dim">
                {profile.location}
              </p>
            </div>

            {/* The right column now carries a fact instead of whitespace. */}
            <div className="mt-9">
              <p className="text-[0.6875rem] tracking-[0.18em] uppercase text-ash-dim">
                Stack principale
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {profile.stack.map((tool) => (
                  <li
                    key={tool}
                    className="border border-hair px-3 py-1.5 text-xs text-ash"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}