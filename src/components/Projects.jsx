"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Tilt } from 'react-tilt';

const projects = [
  {
    title: "LunaFlow - Menstrual Health Tracker",
    description: "A comprehensive menstrual health tracking application integrated with hardware sensors.",
    tech: ["React.js", "Node.js", "ESP32", "MAX30102 sensor"],
    link: "https://lunaflow-pro-webapp.onrender.com",
    github: "https://github.com/rajdeep372/LunaFlow_Enterprise.git"
  },
  {
    title: "AI-Powered Movie Recommendation System",
    description: "Smart movie recommendations based on user preferences and facial expression AI.",
    tech: ["React.js", "Node.js", "MongoDB", "Facial expression AI"],
    link: "#",
    github: "https://github.com/rajdeep372/Movie_Mood.git"
  },
  {
    title: "Live Vehicle Service Operations Dashboard",
    description: "Instant Mechanic - A B2B SaaS dashboard for managing vehicle service operations in real-time.",
    tech: ["B2B SaaS dashboard", "React", "Node.js"],
    link: "https://instant-mechanic-dashboard-lovat.vercel.app",
    github: "https://github.com/rajdeep372/instant-mechanic-dashboard.git"
  },
  {
    title: "Apka Sikayat",
    description: "A full-stack, enterprise-grade smart governance platform designed for the Government of Delhi that digitizes citizen complaints with AI validation, real-time tracking, and CM executive dashboards.",
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
    github: "https://github.com/rajdeep372/Apka-Sikayat.git"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] -z-10 translate-y--1/2" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-neon-cyan">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="h-full">
                <div className="h-full glass-card p-6 md:p-8 rounded-2xl flex flex-col group border border-white/10 hover:border-neon-cyan/50 transition-all duration-500 overflow-hidden relative">

                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 via-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/10 group-hover:to-neon-purple/10 transition-all duration-500 z-0"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                    <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-2.5 py-1 glass rounded-md text-neon-cyan/80">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-white hover:text-neon-cyan transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-neon-purple transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
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
