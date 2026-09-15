"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Sparkles, Copy, Check, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailAddress = "chatterjeer477@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xqpkldye", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        form.reset();
      } else {
        setStatus({ type: 'error', message: 'Oops! There was a problem submitting your form. Please try again or email me directly.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try sending directly to chatterjeer477@gmail.com' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mt-3 sm:mt-4"></div>
          <p className="text-slate-600 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base">
            I am actively looking for internship & full-time opportunities. Feel free to drop a message or reach out directly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-glass">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 sm:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Email Direct */}
                <div className="flex items-start justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-slate-500">Email Address</p>
                      <a href={`mailto:${emailAddress}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block">
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-white transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Kolkata, West Bengal, India</p>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-3 sm:pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5 sm:mb-3">Connect on Socials</p>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <a
                      href="https://github.com/rajdeep372"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 text-slate-800 font-bold text-xs shadow-xs hover:shadow-sm transition-all"
                    >
                      <Github className="w-4 h-4 shrink-0" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rajdeep-chatterjee-47bb21389/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 text-blue-700 font-bold text-xs shadow-xs hover:shadow-sm transition-all"
                    >
                      <Linkedin className="w-4 h-4 shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-glass space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-medium"
                  placeholder="e.g. Alex Morgan"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-medium"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-medium resize-none"
                  placeholder="Hi Rajdeep, I'd like to talk about an opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl text-white font-bold text-sm shadow-md hover:shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
              </button>

              {status.message && (
                <div className={`p-3.5 sm:p-4 rounded-2xl text-xs font-bold text-center border ${
                  status.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border-rose-200'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

