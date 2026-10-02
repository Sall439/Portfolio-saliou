import { profile } from "@/data/profile";
import { Counter } from "@/components/ui/Motion";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

const FACTS = [
  { label: "Nom", value: profile.name },
  { label: "Rôle", value: profile.role },
  { label: "Basé à", value: profile.location },
  { label: "Statut", value: profile.availability },
];

export default function About() {
  return (
    <Section id="a-propos">
      <SectionHeading
        index="01"
        label="À propos"
        title={
          <>
            Un développeur qui <span className="italic">termine</span> ce qu’il
            commence.
          </>
        }
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
        {/*
          Compact identity block — a plain definition list. The previous version
          was a bordered card stretched with `h-full`, which left it half empty
          next to the taller bio column.
        */}
        <Reveal direction="right" className="lg:col-span-4">
          <dl className="border-t border-hair">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 border-b border-hair py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-[0.6875rem] tracking-[0.18em] uppercase text-ash-dim">
                  {fact.label}
                </dt>
                <dd className="text-sm text-bone sm:text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Bio + principles */}
        <div className="lg:col-span-8">
          <Reveal direction="left">
            <div className="space-y-5 text-lg leading-relaxed text-ash">
              {profile.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-xl text-bone sm:text-2xl" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-10 border-t border-hair">
            {profile.principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={0.06 * index}
                amount={0.15}
                className="border-b border-hair"
              >
                <li className="grid grid-cols-[2rem_1fr] gap-5 py-6 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-7">
                  <span className="text-xs text-ash-dim tabular-nums">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base text-bone sm:text-lg">
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      {/* Two verifiable figures only — "13 technologies" was a vanity number. */}
      <dl className="mt-14 grid grid-cols-2 gap-px border border-hair bg-hair lg:mt-16">
        {profile.stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={0.06 * index}
            amount={0.4}
            className="bg-ink"
          >
            <div className="px-6 py-9 sm:px-8 sm:py-10">
              <dd className="font-display text-4xl text-bone tabular-nums sm:text-5xl">
                <Counter value={stat.value} />
              </dd>
              <dt className="mt-3 text-[0.6875rem] tracking-[0.18em] uppercase text-ash-dim">
                {stat.label}
              </dt>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}