export default function Hero() {
  return (
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
            Voir mon travail
          </a>
          <a href="#contact" className="px-8 py-4 glass rounded-full hover:border-cyan-500/50 transition-all">
            Me recruter
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
