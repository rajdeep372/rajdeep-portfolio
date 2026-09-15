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
    <main className="relative min-h-screen w-full bg-slate-50 text-slate-900 bg-grid-pattern overflow-x-hidden selection:bg-blue-600/20 selection:text-blue-900">
      {/* Dynamic Background Ambient Blobs */}
      <div className="fixed top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-400/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-4 sm:right-10 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-400/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-[250px] sm:w-[550px] h-[250px] sm:h-[550px] bg-cyan-400/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      
      {/* Modern Light Footer */}
      <footer className="py-8 sm:py-10 text-center border-t border-slate-200/80 mt-16 sm:mt-20 relative bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-slate-900 text-lg">
              Rajdeep<span className="text-blue-600">.</span>dev
            </span>
          </div>
          <p className="text-slate-500 font-medium text-xs sm:text-sm">
            Crafted with precision & passion © 2026 Rajdeep Chatterjee. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

