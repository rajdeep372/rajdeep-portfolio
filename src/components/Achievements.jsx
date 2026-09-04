"use client";

import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const achievements = [
  {
    title: "1st Position - PRABUDDHA Hackathon",
    organization: "Techno International New Town",
    icon: <Trophy className="text-yellow-400 w-6 h-6" />,
    color: "from-yellow-400/20 to-yellow-600/5",
    borderColor: "border-yellow-400/30"
  },
  {
    title: "3rd Position - Calcutta University Hackathon",
    organization: "Calcutta University",
    icon: <Medal className="text-orange-400 w-6 h-6" />,
    color: "from-orange-400/20 to-orange-600/5",
    borderColor: "border-orange-400/30"
  },
  {
    title: "Finalist - Xplora Innovathon",
    organization: "Bhubaneswar",
    icon: <Star className="text-neon-cyan w-6 h-6" />,
    color: "from-neon-cyan/20 to-blue-600/5",
    borderColor: "border-neon-cyan/30"
  },
  {
    title: "Participant",
    organization: "India Innovates 2026, New Delhi",
    icon: <Award className="text-neon-purple w-6 h-6" />,
    color: "from-neon-purple/20 to-purple-600/5",
    borderColor: "border-neon-purple/30"
  },
  {
    title: "Participant",
    organization: "OMTECH Hackathon 2026 & India Innovates 2026",
    icon: <Award className="text-slate-300 w-6 h-6" />,
    color: "from-slate-400/20 to-slate-600/5",
    borderColor: "border-slate-400/30"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements <span className="text-yellow-400">&</span> Hackathons</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 rounded-2xl border ${item.borderColor} bg-gradient-to-r ${item.color} flex items-start gap-4 sm:gap-6 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] -z-10 group-hover:bg-white/10 transition-colors"></div>

              <div className="p-3 glass rounded-xl shrink-0">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400">{item.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
