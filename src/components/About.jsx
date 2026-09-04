"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-neon-cyan">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] -z-10 transition-transform duration-500 group-hover:scale-150"></div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I am a passionate Full-Stack Developer and tech enthusiast with a strong foundation in Java, JavaScript, and modern web technologies. I specialize in building dynamic, highly responsive, and user-centric applications utilizing the MERN stack (MongoDB, Express, React, Node.js) and Next.js. With a keen eye for problem-solving and scalable architecture, I enjoy transforming complex ideas into seamless digital experiences. As a quick learner committed to continuous growth, I am actively seeking opportunities to apply my skills, collaborate with great teams, and build impactful software solutions.
            </p>

            <div className="p-6 glass rounded-2xl border-l-4 border-l-neon-cyan mt-8">
              <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
              <p>
                Pursuing a 4-year <span className="text-neon-cyan font-medium">Bachelor of Computer Applications</span> degree at
                <br className="hidden md:block" /> RCC Institute of Information Technology, expected to graduate in <span className="text-white font-bold">2027</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
