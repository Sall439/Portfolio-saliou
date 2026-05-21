// 1. On définit la structure d'un projet
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  src?: string;   
  color?: string;  
}

// 2. On applique cette interface au tableau (et on enlève "as const")
export const projects: Project[] = [
  {
    title: 'Eventify',
    description: 'Une plateforme complète de gestion d’événements et de prise de rendez-vous, intégrant le suivi des disponibilités en temps réel et l’automatisation des plannings.',
    tech: ['ReactJs', 'TailwindCss', 'Laravel'],
    link: 'https://eventify-front-4.vercel.app/',
    src: '/assets/eventify.png',
    color: ""
  },
  {
    title: 'Etamp Sarl',
    description: 'Site vitrine d’entreprise pour une société sénégalaise basée à Diamniadio, comprenant la présentation des services, l’histoire de la compagnie et un espace de contact.',
    tech: ['Html', 'Css', 'JavaScript'],
    link: 'https://www.etampsarl.com/',
    src: '/assets/etamp.png',
    color: ""
  },
  {
    title: 'Setal App',
    description: 'Une application mobile innovante axée sur la gestion de la propreté, actuellement en cours de développement. Restez connectés pour suivre les prochaines mises à jour.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    color: 'from-blue-500 to-indigo-500',
    link: '#',
  },
];