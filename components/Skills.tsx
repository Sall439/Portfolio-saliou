import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export default function Skills() {
  return (
    <Section id="competences">
      <SectionHeading
        index="03"
        label="Compétences"
        title={
          <>
            Les technologies que j’utilise <span className="italic">au quotidien</span>.
          </>
        }
        description="Celles avec lesquelles j'ai construit et lancé de vrais projets."
      />

      {/*
        Groups + tags. The percentage bars are gone: a self-assessed
        "Django 40%" is invented precision that tells a reader nothing.
      */}
      <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.category} delay={groupIndex * 0.06} amount={0.15}>
            <div className="border-t border-hair pt-6">
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-ash-dim tabular-nums">
                  0{groupIndex + 1}
                </span>
                <h3 className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-bone">
                  {group.category}
                </h3>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
                {group.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-hair px-3 py-1.5 text-sm text-ash transition-colors duration-300 hover:border-hair-strong hover:text-bone"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}