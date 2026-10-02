export const profile = {
  name: "Saliou Sall",
  firstName: "Saliou",
  lastName: "Sall",
  initials: "SS",
  role: "Développeur Fullstack",
  location: "Dakar, Sénégal",
  availability: "Disponible pour de nouveaux projets",
  tagline:
    "Je transforme des idées en produits web rapides, soignés et agréables à utiliser.",
  /** Short stack list shown beside the portrait, so the hero's right column
   *  carries information instead of whitespace. */
  stack: ["React", "Next.js", "TypeScript", "Node.js", "Laravel", "MongoDB"],
  intro: [
    "Développeur fullstack basé à Dakar, je conçois et construis des applications web modernes — du premier croquis jusqu’à la mise en production.",
    "J’accorde une attention particulière à la performance, à la qualité du code et aux détails d’interface. Chaque projet est pour moi l’occasion d’apprendre quelque chose de nouveau et de livrer un travail dont je suis fier.",
  ],
  principles: [
    {
      title: "Code lisible",
      description:
        "Des bases solides et maintenables, plutôt que des raccourcis qui font gagner deux jours et en coûtent vingt.",
    },
    {
      title: "Détail & finition",
      description:
        "Les micro-interactions et les transitions ne sont pas décoratives : elles guident l’utilisateur et rendent l’usage immédiat.",
    },
    {
      title: "Performance d'abord",
      description:
        "Un site rapide est un site agréable. J'optimise le chargement, le rendu et l'accessibilité dès le premier commit.",
    },
  ],
  /**
   * A number is only listed when it is verifiable from the projects. Years of
   * experience is left as a placeholder rather than invented.
   */
  stats: [
    { value: 3, label: "Projets livrés" },
    { value: 2, label: "Années d'expérience" },
  ],
  contact: {
    email: "salljunior439@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com/Sall439",
    whatsapp: "https://wa.me/765240816",
    whatsappLabel: "+221 76 540 81 16",
    linkedinLabel: "https://www.linkedin.com/in/saliou-sall-743551276/",
    githubLabel: "@Sall439",
  },
} as const;

export const navItems = [
  { label: "À propos", id: "a-propos" },
  { label: "Projets", id: "projets" },
  { label: "Compétences", id: "competences" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
] as const;