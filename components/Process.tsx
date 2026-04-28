import { process as processData } from '@/data/process';

export default function Process() {
  return (
    <section id="process" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Process</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {processData.map((p, index) => (
            <div key={p.step} className="glass p-6 rounded-2xl text-center card-hover relative">
              <div className="text-4xl font-bold gradient-text mb-4">{p.step}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.description}</p>
              {index < processData.length - 1 && (
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
  );
}
