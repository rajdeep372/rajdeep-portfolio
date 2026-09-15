"use client";

import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Download, Mail, Sparkles, Code2, Award, Terminal } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 800,
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
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft Ambient Light Gradient Orbs */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/10 rounded-full blur-[90px] sm:blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-4 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/10 rounded-full blur-[90px] sm:blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate sm:whitespace-normal">Actively seeking Internships & Roles</span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.1]">
              Hi, I am <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Rajdeep Chatterjee
              </span>
            </h1>

            {/* Subtitle / Typing Animation */}
            <div className="min-h-[3rem] sm:min-h-[2.5rem] flex items-center pt-1">
              <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
                {text}
                <span className="inline-block w-0.5 h-4 sm:h-5 bg-blue-600 ml-1 animate-pulse align-middle"></span>
              </p>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            Building highly responsive, scalable, and user-centric web applications with modern architectures like Next.js, React, Node.js, and Java.
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
              <Code2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Full-Stack Web</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
              <Terminal className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>Java Specialist</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
              <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Hackathon Winner</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="group relative px-6 sm:px-7 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span>Get In Touch</span>
            </a>

            <a
              href="Rajdeep_Chatterjee_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Rajdeep_Chatterjee_Resume.pdf"
              className="px-6 sm:px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 rounded-2xl font-bold text-sm shadow-xs hover:shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-slate-300 w-full sm:w-auto"
            >
              <Download className="w-4 h-4 text-slate-600 shrink-0" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image with 3D Tilt & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative px-4 sm:px-6"
        >
          <Tilt options={defaultTiltOptions} className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]">
            <div className="relative group">
              {/* Ambient Glow behind card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glass Card Wrapper */}
              <div className="relative bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-3xl border border-slate-200/90 shadow-glass-lg">
                <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/profile_pic.jpg"
                    alt="Rajdeep Chatterjee"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Micro Badge - Top Left */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-3 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl border border-slate-200/90 shadow-glass flex items-center gap-2"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-none">Focus</p>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Next.js & Java</p>
                  </div>
                </motion.div>

                {/* Floating Micro Badge - Bottom Right */}
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl border border-slate-200/90 shadow-glass flex items-center gap-2"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-none">Hackathons</p>
                    <p className="text-xs font-bold text-slate-900 leading-tight">1st Place Winner</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}


