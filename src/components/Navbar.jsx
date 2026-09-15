"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Code2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glass shadow-glass border-slate-200/90 bg-white/80' 
            : 'bg-white/40 backdrop-blur-md border border-slate-200/60 shadow-glass-sm'
        }`}>
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[2px] shadow-sm group-hover:shadow-glow-blue transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <Code2 className="text-blue-600 group-hover:text-white w-5 h-5 transition-colors duration-300" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Rajdeep<span className="text-blue-600">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="Rajdeep_Chatterjee_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Rajdeep_Chatterjee_Resume.pdf"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm hover:shadow-glow-blue transition-all duration-300 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200/60"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="glass rounded-2xl p-4 shadow-glass-lg border border-slate-200/90 bg-white/95">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2 mt-2 border-t border-slate-100">
                  <a
                    href="Rajdeep_Chatterjee_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Rajdeep_Chatterjee_Resume.pdf"
                    className="w-full py-2.5 rounded-xl text-sm font-bold text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

