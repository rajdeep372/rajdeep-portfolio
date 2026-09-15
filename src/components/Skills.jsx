"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Java", "JavaScript", "SQL", "HTML5",],
    color: "from-blue-500 to-cyan-500",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
    pillHover: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"],
    color: "from-purple-500 to-pink-500",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200/80",
    pillHover: "hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300"
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)"],
    color: "from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    pillHover: "hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300"
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL",],
    color: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200/80",
    pillHover: "hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300"
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Vercel", "Render"],
    color: "from-indigo-500 to-blue-500",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    pillHover: "hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300"
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...skillsData.map(s => s.category)];

  const filteredSkills = activeTab === "All"
    ? skillsData
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === cat
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900 shadow-xs'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="glass-card p-5 sm:p-6 rounded-3xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br ${skill.color} p-[1.5px] shadow-sm shrink-0`}>
                          <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">{skill.category}</h3>
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 rounded-full border ${skill.badgeBg}`}>
                        {skill.items.length} Skills
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200/80 rounded-xl text-slate-700 transition-all duration-200 ${skill.pillHover}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>Proficiency</span>
                    <span className="text-slate-600 font-semibold">Production Ready</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

