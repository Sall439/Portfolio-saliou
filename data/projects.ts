// 1. On définit la structure d'un projet
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  src?: string;    // Optionnel car Setal App n'en a pas encore
  color?: string;  // Optionnel car Junior Clothes n'en a pas
}

// 2. On applique cette interface au tableau (et on enlève "as const")
export const projects: Project[] = [
  {
    title: 'Junior Clothes',
    description: 'E-commerce platform for clothing with modern UI, product catalog, shopping cart, and seamless checkout experience.',
    tech: ['Html', 'Css', 'JavaScript'],
    link: 'https://juniorclothes-ab1j.vercel.app/',
    src: '/assets/jclothes.png'
    // Pas besoin de color ici
  },
  {
    title: 'Etamp Sarl',
    description: 'Corporate website for a Senegalese company based in Diamniadio. Features company presentation, services, and contact information.',
    tech: ['Html', 'Css', 'JavaScript'],
    link: 'https://www.etampsarl.com/',
    src: '/assets/etamp.png'
  },
  {
    title: 'Setal App',
    description: 'An innovative application currently in development. Stay tuned for updates on this exciting project.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    color: 'from-blue-500 to-indigo-500',
    link: '#',
  },
];