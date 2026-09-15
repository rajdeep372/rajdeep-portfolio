"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FolderGit2 } from 'lucide-react';
import { Tilt } from 'react-tilt';

const projects = [
  {
    title: "Apka Sikayat - Smart Governance Platform",
    category: "Full Stack & AI",
    description: "Enterprise-grade smart governance platform designed for the Government of Delhi. Digitizes citizen complaints with AI validation, real-time tracking, and CM executive analytics dashboards.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Firebase",
      "PostgreSQL",
      "Gemini AI",
      "Pinecone"
    ],
    github: "https://github.com/rajdeep372/Apka-Sikayat.git",
    featured: true
  },
  {
    title: "LunaFlow - Menstrual Health Tracker",
    category: "IoT & Full Stack",
    description: "A comprehensive menstrual health tracking and predictive application integrated with ESP32 and MAX30102 hardware biometric sensors.",
    tech: ["React.js", "Node.js", "ESP32", "MAX30102 sensor", "Express.js"],
    link: "https://lunaflow-pro-webapp.onrender.com",
    github: "https://github.com/rajdeep372/LunaFlow_Enterprise.git",
    featured: true
  },
  {
    title: "Live Vehicle Service Operations Dashboard",
    category: "B2B SaaS Dashboard",
    description: "Instant Mechanic - A real-time SaaS operations dashboard for managing multi-bay vehicle servicing workflows and live technician dispatching.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "REST APIs"],
    link: "https://instant-mechanic-dashboard-lovat.vercel.app",
    github: "https://github.com/rajdeep372/instant-mechanic-dashboard.git",
    featured: false
  },
  {
    title: "AI-Powered Movie Recommendation System",
    category: "AI & Machine Learning",
    description: "Intelligent cinematic recommendation engine leveraging user emotion analysis and facial expression recognition AI to curate personalized movie watchlists.",
    tech: ["React.js", "Node.js", "MongoDB", "Facial Expression AI"],
    link: "#",
    github: "https://github.com/rajdeep372/Movie_Mood.git",
    featured: false
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
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
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Tilt options={{ max: 10, scale: 1.01, speed: 400 }} className="h-full">
                <div className="h-full glass-card rounded-3xl flex flex-col group overflow-hidden border border-slate-200/90 shadow-glass hover:shadow-glass-lg transition-all duration-300">
                  {/* Browser Mock Window Header */}
                  <div className="px-5 sm:px-6 py-3 bg-slate-100/70 border-b border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <FolderGit2 className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-semibold px-2.5 py-1 bg-blue-50/80 border border-blue-200/60 rounded-lg text-blue-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Link Actions */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-100">
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs hover:shadow-glow-blue transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

