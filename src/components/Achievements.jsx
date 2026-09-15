"use client";

import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal, Sparkles, Building2 } from 'lucide-react';

const achievements = [
  {
    title: "1st Position Winner - PRABUDDHA Hackathon",
    organization: "Techno International New Town (TINT)",
    badge: "Champion",
    icon: Trophy,
    cardBg: "bg-gradient-to-r from-amber-50/90 via-white to-amber-50/40",
    border: "border-amber-200/90",
    iconBg: "bg-amber-100 text-amber-700",
    badgeBg: "bg-amber-100 text-amber-800 border-amber-300",
    glow: "group-hover:border-amber-400/80 group-hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.15)]"
  },
  {
    title: "3rd Position - Calcutta University Hackathon",
    organization: "University of Calcutta",
    badge: "2nd Runner Up",
    icon: Medal,
    cardBg: "bg-gradient-to-r from-orange-50/90 via-white to-orange-50/40",
    border: "border-orange-200/90",
    iconBg: "bg-orange-100 text-orange-700",
    badgeBg: "bg-orange-100 text-orange-800 border-orange-300",
    glow: "group-hover:border-orange-400/80 group-hover:shadow-[0_15px_30px_-5px_rgba(249,115,22,0.15)]"
  },
  {
    title: "Finalist - Xplora Innovathon",
    organization: "Bhubaneswar, Odisha",
    badge: "Finalist",
    icon: Star,
    cardBg: "bg-gradient-to-r from-sky-50/90 via-white to-sky-50/40",
    border: "border-sky-200/90",
    iconBg: "bg-sky-100 text-sky-700",
    badgeBg: "bg-sky-100 text-sky-800 border-sky-300",
    glow: "group-hover:border-sky-400/80 group-hover:shadow-[0_15px_30px_-5px_rgba(14,165,233,0.15)]"
  },
  {
    title: "National Participant - India Innovates 2026",
    organization: "New Delhi",
    badge: "National Stage",
    icon: Award,
    cardBg: "bg-gradient-to-r from-indigo-50/90 via-white to-indigo-50/40",
    border: "border-indigo-200/90",
    iconBg: "bg-indigo-100 text-indigo-700",
    badgeBg: "bg-indigo-100 text-indigo-800 border-indigo-300",
    glow: "group-hover:border-indigo-400/80 group-hover:shadow-[0_15px_30px_-5px_rgba(99,102,241,0.15)]"
  },
  {
    title: "Participant - OMTECH Hackathon 2026",
    organization: "OMTECH & India Innovates 2026",
    badge: "Hackathon Competitor",
    icon: Award,
    cardBg: "bg-gradient-to-r from-purple-50/90 via-white to-purple-50/40",
    border: "border-purple-200/90",
    iconBg: "bg-purple-100 text-purple-700",
    badgeBg: "bg-purple-100 text-purple-800 border-purple-300",
    glow: "group-hover:border-purple-400/80 group-hover:shadow-[0_15px_30px_-5px_rgba(168,85,247,0.15)]"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            Hackathons & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Achievements <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">& Hackathons</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Achievements List */}
        <div className="space-y-3.5 sm:space-y-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className={`p-4 sm:p-6 rounded-3xl border ${item.border} ${item.cardBg} backdrop-blur-xl shadow-glass flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all duration-300 group ${item.glow}`}
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div className={`p-2.5 sm:p-3.5 rounded-2xl ${item.iconBg} shadow-sm shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-0.5 sm:mb-1 group-hover:text-slate-950 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.organization}</span>
                    </div>
                  </div>
                </div>

                <div className="self-start sm:self-center shrink-0">
                  <span className={`inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

