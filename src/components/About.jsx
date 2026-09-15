"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, Sparkles, Brain, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Main Story Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-400/10 rounded-full blur-[70px] pointer-events-none -z-10" />

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Passionate Full-Stack Engineer</h3>
                  <p className="text-xs text-slate-500 font-medium">Crafting seamless digital experiences</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                I am a dedicated developer with a strong foundation in <strong className="text-slate-900 font-semibold">Java, JavaScript, and modern full-stack frameworks</strong>. I specialize in engineering dynamic, responsive, and robust web applications leveraging the <strong className="text-slate-900 font-semibold">MERN stack</strong> and <strong className="text-slate-900 font-semibold">Next.js</strong>.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                With a passion for intuitive UI/UX design and scalable backend architecture, I love solving complex technical problems and competing in high-intensity hackathons.
              </p>
            </div>

            {/* Trait Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Fast Learner</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Hackathon Driven</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Core Focus Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-7 rounded-3xl relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/40"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Graduation 2027
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">Bachelor of Computer Applications</h3>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                RCC Institute of Information Technology (RCCIIT)
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                4-year degree program focusing on software engineering, object-oriented programming, data structures, and database management.
              </p>
            </motion.div>

            {/* Quick Metrics / Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-card p-7 rounded-3xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">What I Excel At</h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Frontend Engineering</span>
                  <span className="text-blue-600 font-bold">React, Next.js, Tailwind</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Backend & API Design</span>
                  <span className="text-indigo-600 font-bold">Node.js, Express, Java</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Databases & Tools</span>
                  <span className="text-purple-600 font-bold">MongoDB, SQL, Git</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

