import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Toaster from "@/components/Toaster";

export default function Home() {
  return (
    <>
      <Navigation />

      {/* z-10 lifts content above the fixed vignette painted by the layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <Contact />
        <Footer />
      </main>

      <Toaster />
    </>
  );
}
