"use client";

import { motion, useReducedMotion } from "motion/react";
import { processSteps } from "@/data/process";
import { Section, SectionHeading } from "@/components/ui/Section";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <Section id="process">
      <SectionHeading
        index="04"
        label="Process"
        title={
          <>
            Une méthode simple, <span className="italic">répétée</span> à chaque
            projet.
          </>
        }
      />

      <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-hair bg-hair sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <li key={step.step} className="bg-ink">
            {/* Hairline that draws itself in on scroll */}
            <div className="relative h-px w-full bg-hair">
              <motion.div
                className="absolute inset-0 origin-left bg-bone/40"
                initial={{ scaleX: reduce ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, delay: index * 0.1, ease: EASE }}
              />
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
              className="p-7 sm:p-8"
            >
              <span className="text-xs text-ash-dim tabular-nums">{step.step}</span>

              <h3 className="mt-5 text-lg text-bone">{step.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-ash">
                {step.description}
              </p>
            </motion.div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
