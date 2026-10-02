"use client";

import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * One ratio for every preview. The source images are 1437x761 (1.89) and
 * 1918x956 (2.01), so 2:1 crops neither — the previous 16:10 frame plus a
 * per-breakpoint `lg:aspect-auto` was visibly re-cropping the same art.
 */
const RATIO = "aspect-2/1";

/* ------------------------------------------------------------------ */
/* Pieces                                                               */
/* ------------------------------------------------------------------ */

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="text-[0.625rem] font-medium tracking-[0.16em] uppercase text-ash-dim">
      {status === "live" ? "En ligne" : "En cours"}
    </span>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <li
          key={item}
          className="border border-hair px-2.5 py-1 text-xs text-ash"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Demo + code. A project with no public repo yet shows an inert placeholder
 * rather than a dead link.
 */
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
      {project.demo ? (
        <TextLink href={project.demo}>Démo</TextLink>
      ) : (
        <span className="text-xs tracking-[0.12em] uppercase text-ash-dim/70">
          Démo 
        </span>
      )}

      {project.repo ? (
        <TextLink href={project.repo}>Code</TextLink>
      ) : (
        <span className="text-xs tracking-[0.12em] uppercase text-ash-dim/70">
          Code 
        </span>
      )}
    </div>
  );
}

/** Placeholder for projects that have no screenshot yet. */
function WipArtwork({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-ink-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-hair) 1px, transparent 1px), linear-gradient(to bottom, var(--color-hair) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <span className="relative font-display text-3xl text-bone/20 sm:text-4xl">
        {title}
      </span>
    </div>
  );
}

function Artwork({ project, sizes }: { project: Project; sizes: string }) {
  if (!project.src) return <WipArtwork title={project.title} />;

  return (
    <Image
      src={project.src}
      alt={`Aperçu du projet ${project.title}`}
      fill
      sizes={sizes}
      className="object-cover"
    />
  );
}

/** "Rôle : …" / "Résultat : …" pair, kept visually identical across cards. */
function Detail({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-ash">
      <span className="text-ash-dim">{term} — </span>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                 */
/* ------------------------------------------------------------------ */

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`surface flex h-full flex-col ${
        featured ? "lg:grid lg:grid-cols-12" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-ink-2 ${
          featured ? `${RATIO} lg:col-span-7 lg:row-span-1` : RATIO
        }`}
      >
        <Artwork
          project={project}
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />
      </div>

      <div
        className={`flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8 ${
          featured ? "lg:col-span-5 lg:p-9" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-ash-dim tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="h-px w-4 bg-hair-strong" />
            <StatusBadge status={project.status} />
            <span className="text-[0.6875rem] tracking-[0.16em] uppercase text-ash-dim">
              {project.year}
            </span>
          </div>

          <h3
            className={`mt-5 font-display leading-tight tracking-[-0.01em] text-bone ${
              featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {project.title}
          </h3>

          <div className="mt-4 space-y-2">
            <Detail term="Contexte">{project.context}</Detail>
            <Detail term="Mon rôle">{project.role}</Detail>
            <Detail term="Résultat">{project.result}</Detail>
          </div>
        </div>

        <div className="space-y-5 border-t border-hair pt-5">
          <TechTags tech={project.tech} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projets">
      <SectionHeading
        index="02"
        label="Projets sélectionnés"
        title={
          <>
            Trois projets, du concept à la{" "}
            <span className="italic">mise en ligne</span>.
          </>
        }
        description="Pour chacun : le contexte, mon rôle, un résultat marquant et les liens."
      />

      <div className="mt-14 lg:mt-16">
        {/* Best project first */}
        <Reveal amount={0.06}>
          <ProjectCard project={featured} index={0} featured />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal
              key={project.title}
              delay={0.06 * (index + 1)}
              amount={0.06}
            >
              <ProjectCard project={project} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ash-dim">
        Un projet en cours ?{" "}
        <a
          href="#contact"
          className="link-wipe text-bone after:link-wipe-after"
        >
          Discutons-en
        </a>
        .
      </p>
    </Section>
  );
}