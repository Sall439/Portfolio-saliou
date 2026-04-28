export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">À propos de moi</span>
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
          <p className="text-xl">Projets terminés</p>
        </div>
      </div>
    </section>
  );
}
