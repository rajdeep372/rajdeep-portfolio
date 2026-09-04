import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative overflow-hidden selection:bg-neon-cyan/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10 mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent -z-10" />
        <p className="text-slate-500 font-medium text-sm">
          Designed & Built with <span className="text-neon-cyan">♥</span> by Rajdeep Chatterjee © 2026
        </p>
      </footer>
    </main>
  );
}
