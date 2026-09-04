"use client";

import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "SQL"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React.js", "React Native"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
    color: "from-green-400 to-emerald-600"
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
    color: "from-yellow-400 to-orange-500"
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
    color: "from-slate-400 to-slate-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-neon-purple">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl group hover:border-neon-purple/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-lg text-slate-300 group-hover:bg-white/10 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
