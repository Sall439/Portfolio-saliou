import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Projets</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl overflow-hidden card-hover block">
              <div className={`h-48 bg-gradient-to-br ${project.color ?? 'from-gray-500 to-gray-600'} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {project.src ? (
                      <Image src={project.src} alt={project.title} width={500} height={200} className="object-cover rounded-lg" />
                    ) : (
                      <div className="text-6xl">📱</div>
                    )}
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
  );
}
