"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { X, Search } from 'lucide-react';

const certificates = [
  {
    title: "Industrial Training - MOVIE MOOD",
    id: "ID: 122501",
    image: "/cert_movie_mood.jpg",
    color: "neon-cyan"
  },
  {
    title: "React & Movie Recommendation System",
    id: "ID: RCC068",
    image: "/cert_react.jpg",
    color: "neon-purple"
  },
  {
    title: "NPTEL Elite Certification",
    id: "Programming In Java",
    image: "/cert_nptel.jpg",
    color: "blue-500"
  }
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] -z-10 translate-y--1/2" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-neon-cyan">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Tilt options={{ max: 15, scale: 1.05 }} className="h-full">
                <div 
                  onClick={() => setSelectedCertificate(cert)}
                  className={`cursor-pointer glass-card p-4 rounded-2xl h-full flex flex-col group border border-white/5 hover:border-${cert.color}/50 hover:shadow-[0_0_30px_rgba(var(--${cert.color}-rgb),0.2)] transition-all duration-300`}
                >
                  
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-900/50">
                    <Image 
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-700 p-2"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center">
                      <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20 text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Search className="w-6 h-6" />
                      </div>
                      <span className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        Click for full view
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-auto px-2 pb-2 z-30">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{cert.title}</h3>
                    <p className="text-sm font-medium text-slate-400">{cert.id}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/80 backdrop-blur-xl"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertificate(null);
              }}
              className="absolute top-6 right-6 z-[110] p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[85vh] h-full flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute -bottom-12 text-center w-full">
                <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
                <p className="text-neon-cyan">{selectedCertificate.id}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
