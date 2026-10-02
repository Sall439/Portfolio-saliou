export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Découverte",
    description: "Échange approfondi pour comprendre le besoin, les utilisateurs et les contraintes.",
  },
  {
    step: "02",
    title: "Conception",
    description: "Architecture, wireframes et prototype validé avant d’écrire la moindre ligne.",
  },
  {
    step: "03",
    title: "Développement",
    description: "Intégration des fonctionnalités, tests et itérations sur les retours.",
  },
  {
    step: "04",
    title: "Mise en ligne",
    description: "Déploiement, optimisation des performances et accompagnement après la livraison.",
  },
];
