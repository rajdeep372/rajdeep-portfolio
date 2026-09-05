"use client";

import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const defaultTiltOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer | Java Enthusiast | BCA Student at RCCIIT";

  useEffect(() => {
    let currentText = '';
    let i = 0;
    const interval = setInterval(() => {
      currentText += fullText[i];
      setText(currentText);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block"
          >
            <span className="glass px-4 py-2 rounded-full text-neon-cyan border-neon-cyan/30 text-sm font-medium tracking-wide shadow-neon-cyan/20 shadow-lg inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
              Actively looking for Internships & Full-Time Opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Rajdeep Chatterjee
            </span>
          </h1>

          <div className="h-8">
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              {text}<span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group relative px-8 py-3 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 rounded-full font-medium transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-cyan/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>

            <a
              href="/RAJDEEP_CHATTERJEE_Resume"
              target="_blank"
              rel="noopener noreferrer"
              download="Rajdeep_Chatterjee_CV.pdf"
              className="px-8 py-3 glass hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <Tilt options={defaultTiltOptions}>
            <div className="relative group">
              {/* Outer glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div className="relative glass-card p-2 rounded-2xl">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/profile_pic.jpg"
                    alt="Rajdeep Chatterjee"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
