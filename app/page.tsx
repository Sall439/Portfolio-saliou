'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Junior Clothes',
    description: 'E-commerce platform for clothing with modern UI, product catalog, shopping cart, and seamless checkout experience.',
    tech: ['Html', 'Css', 'JavaScript'],
    // color: 'from-cyan-500 to-blue-500',
    link: 'https://juniorclothes-ab1j.vercel.app/',
    src: '/assets/jclothes.png'
  },
  {
    title: 'Etamp Sarl',
    description: 'Corporate website for a Senegalese company based in Diamniadio. Features company presentation, services, and contact information.',
    tech: ['Html', 'Css', 'JavaScript'],
    // color: 'from-purple-500 to-pink-500',
    link: 'https://www.etampsarl.com/',
    src: '/assets/etamp.png'
  },
  {
    title: 'Setal App',
    description: 'An innovative application currently in development. Stay tuned for updates on this exciting project.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    color: 'from-blue-500 to-indigo-500',
    link: '#',
    // src: '/assets/template.png'
  },
];

const skills = [
  { name: 'ReactJS', level: 90 },
  { name: 'React Native', level: 75 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 85 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Tailwind CSS', level: 75 },
];

const process = [
  { step: '01', title: 'Idea', description: 'Concept & Research' },
  { step: '02', title: 'Design', description: 'UI/UX & Prototyping' },
  { step: '03', title: 'Develop', description: 'Implementation' },
  { step: '04', title: 'Deploy', description: 'Launch & Support' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Skills', 'Process', 'Contact'];

  return (
    <div className="relative">
      {/* Abstract Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="abstract-shape w-[600px] h-[600px] bg-cyan-500/20 -top-40 -left-40" />
        <div className="abstract-shape w-[500px] h-[500px] bg-purple-500/15 top-1/2 -right-20" />
        <div className="abstract-shape w-[400px] h-[400px] bg-blue-500/10 bottom-20 left-1/3" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#03090f] transition-all duration-500 ${scrolled ? 'glass scrolled py-4' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-glow">SS</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass mt-4 mx-6 rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm hover:text-cyan-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="absolute inset-0 glowing-line bottom-0" />
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 text-lg mb-4 fade-in">Hello, je suis</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow fade-in stagger-1">Saliou Sall</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 fade-in stagger-2">Développeur junior fullstack</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 fade-in stagger-3">
            Création d'applications web innovantes avec des technologies modernes. Passionné par la création d'expériences utilisateur fluides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in stagger-4">
            <a href="#projects" className="px-8 py-4 bg-cyan-500/20 border border-cyan-500/50 rounded-full hover:bg-cyan-500/30 neon-glow transition-all">
              View my work
            </a>
            <a href="#contact" className="px-8 py-4 glass rounded-full hover:border-cyan-500/50 transition-all">
              Hire me
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass p-8 rounded-2xl">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Développeur passionné</h3>
              <p className="text-gray-400">
                J'adore transformer les idées en réalité grâce au code. Chaque projet est une occasion d'apprendre et de créer quelque chose d'important.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">Résolveur de problèmes</h3>
              <p className="text-gray-400">
                Je m'épanouis face aux défis et trouve des solutions créatives aux problèmes complexes.
              </p>
            </div>
          </div>
          <div className="mt-12 glass p-8 rounded-2xl text-center">
            <div className="text-5xl font-bold gradient-text mb-2">3</div>
            <p className="text-xl">Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl overflow-hidden card-hover block">
                <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {project.src ? <Image src={project.src} alt={project.title} width={500} height={200} className="object-cover rounded-lg"/> : <div className="text-6xl">📱</div>}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 glass rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="glass p-6 rounded-2xl">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-2 glass rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="min-h-screen py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, index) => (
              <div key={p.step} className="glass p-6 rounded-2xl text-center card-hover">
                <div className="text-4xl font-bold gradient-text mb-4">{p.step}</div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                    <svg className="w-8 h-8 text-cyan-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-32 px-6 flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <a href="mailto:salljunior439@gmail.com" className="glass p-6 rounded-2xl card-hover group">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Email</span>
            </a>
            <a href="https://linkedin.com" target="_blank" className="glass p-6 rounded-2xl card-hover group">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/Sall439" target="_blank" className="glass p-6 rounded-2xl card-hover group">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://wa.me/765240816" target="_blank" className="glass p-6 rounded-2xl card-hover group">
              <svg className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:text-glow transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.186 9.186 0 01-1.435-4.909l-.067-.31-.974 4.017-.03-.423a9.564 9.564 0 011.064-4.035l.255-.249a7.2 7.2 0 014.013-1.395l.274-.054-.01 3.953 2.743 2.527-.426.434a6.67 6.67 0 01-3.788 1.583l-.289.042m3.076 5.353h3.16v-12.337h-3.16V9.402c0-1.073-.387-1.807-1.36-1.807-.972 0-1.555.634-1.555 1.805v3.293h-3.16V9.402c0-1.073-.387-1.807-1.36-1.807-.973 0-1.555.634-1.555 1.805v6.438z"/>
              </svg>
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
          <a href="mailto:salljunior439@gmail.com" className="inline-block px-10 py-4 bg-cyan-500/20 border border-cyan-500/50 rounded-full hover:bg-cyan-500/30 neon-glow transition-all text-lg">
            Let's work together →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Saliou Sall. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Built with React, Next.js & Tailwind</p>
        </div>
      </footer>
    </div>
  );
}