import { skills as skillsData } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Compétences</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((skill) => (
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
  );
}
