'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="abstract-shape w-[600px] h-[600px] bg-cyan-500/20 -top-40 -left-40" />
        <div className="abstract-shape w-[500px] h-[500px] bg-purple-500/15 top-1/2 -right-20" />
        <div className="abstract-shape w-[400px] h-[400px] bg-blue-500/10 bottom-20 left-1/3" />
      </div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
