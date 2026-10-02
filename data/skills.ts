export interface SkillGroup {
  category: string;
  /** One line on what this group is used for. */
  summary: string;
  skills: string[];
}

/**
 * No self-assessed percentages: a "Django 40%" bar is invented precision that
 * tells a recruiter nothing and ages badly. Grouping plus a one-line summary
 * says the same thing honestly.
 *
 * Only skills that were already listed here, plus the two that are provably in
 * use on this very repository (TypeScript, Next.js), have been kept. Prune this
 * list to what you would be happy to defend in an interview.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    summary: "Interfaces responsives et accessibles, sans dépendance inutile.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    summary: "API REST, modèles de données et authentification.",
    skills: ["Node.js", "Express", "Laravel", "Django", "MongoDB"],
  },
  {
    category: "Mobile & Outils",
    summary: "Applications mobiles et outillage de livraison.",
    skills: ["React Native", "Docker", "CI/CD"],
  },
];