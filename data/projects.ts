export interface Project {
  title: string;
  /** One line of context: what the product is and who it is for. */
  context: string;
  /** What was actually built here — scope, not buzzwords. */
  role: string;
  /** One concrete result or technical highlight. */
  result: string;
  tech: string[];
  /** Public demo. Omitted while a project is still in progress. */
  demo?: string;
  /** Public repository. Omitted when it is private or not yet pushed. */
  repo?: string;
  src?: string;
  /** `wip` projects render a labelled placeholder instead of a screenshot. */
  status: "live" | "wip";
  year: string;
}

export const projects: Project[] = [
  {
    title: "Eventify",
    context:
      "Plateforme de gestion d’événements et de prise de rendez-vous, avec suivi des disponibilités en temps réel.",
    role: "Développement fullstack de bout en bout : interface React/Tailwind et API Laravel.",
    result: "[À COMPLÉTER — ex. temps de chargement, nombre d’événements gérés]",
    tech: ["React", "Tailwind CSS", "Laravel"],
    demo: "https://eventify-front-4.vercel.app/",
    repo: undefined,
    src: "/assets/eventify.png",
    status: "live",
    year: "2025",
  },
  {
    title: "Etamp Sarl",
    context:
      "Site vitrine d’une société sénégalaise basée à Diamniadio : services, histoire de la compagnie et contact.",
    role: "Site vitrine complet : intégration, mise en ligne et maintenance.",
    result: "[À COMPLÉTER — ex. score Lighthouse, mise en ligne en X jours]",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://www.etampsarl.com/",
    repo: undefined,
    src: "/assets/etamp.png",
    status: "live",
    year: "2024",
  },
  {
    title: "BaolLoc",
    context:
      "Solution moderne de gestion locative immobilière au Sénégal, centralisant les biens, les baux et les paiements pour les propriétaires, gestionnaires et locataires.",
    role: "Conception et développement fullstack : architecture Next.js, backend Laravel, et gestion de base de données PostgreSQL/Supabase.",
    result: "Déploiement complet en production avec conteneurisation Docker et indexation SEO validée sur Google Search Console.",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Supabase", "Docker", "Tailwind CSS"],
    demo: "https://baolloc.com",
    repo: undefined,
    src: "/assets/baolloc.png",
    status: "live",
    year: "2026",
  },
];