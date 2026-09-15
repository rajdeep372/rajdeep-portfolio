"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { X, Search, Sparkles, Award } from 'lucide-react';

const certificates = [
  {
    title: "Industrial Training - MOVIE MOOD",
    issuer: "Full-Stack & AI Engineering",
    id: "Credential ID: 122501",
    image: "/cert_movie_mood.jpg",
    accent: "blue"
  },
  {
    title: "React & Movie Recommendation System",
    issuer: "RCCIIT Software Training",
    id: "Credential ID: RCC068",
    image: "/cert_react.jpg",
    accent: "purple"
  },
  {
    title: "NPTEL Elite Certification",
    issuer: "IIT Kharagpur / SWAYAM",
    id: "Programming In Java",
    image: "/cert_nptel.jpg",
    accent: "amber"
  }
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
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
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Tilt options={{ max: 10, scale: 1.015 }} className="h-full">
                <div 
                  onClick={() => setSelectedCertificate(cert)}
                  className="cursor-pointer glass-card p-4 sm:p-5 rounded-3xl h-full flex flex-col group border border-slate-200/90 shadow-glass hover:shadow-glass-lg hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3.5 sm:mb-4 bg-slate-100 border border-slate-200/60 p-2">
                    <Image 
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 p-1"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center backdrop-blur-xs">
                      <div className="bg-white/90 p-2.5 sm:p-3 rounded-full shadow-lg text-slate-900 mb-1.5 sm:mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <span className="text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 bg-slate-950/60 rounded-full backdrop-blur-sm transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        Click to preview
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-auto px-1">
                    <div className="flex items-center gap-1.5 text-xs text-blue-600 font-bold mb-1">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">{cert.id}</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-md"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertificate(null);
              }}
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110] p-2 sm:p-2.5 bg-white/90 hover:bg-white border border-slate-200 rounded-full text-slate-800 shadow-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white p-3 sm:p-6 rounded-3xl shadow-2xl border border-slate-200 flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  fill
                  className="object-contain p-2"
                  quality={100}
                  priority
                />
              </div>
              <div className="pt-3 sm:pt-4 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{selectedCertificate.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600">{selectedCertificate.id}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

