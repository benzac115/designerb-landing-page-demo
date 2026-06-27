"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5 grid-bg">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-accent-blue-light tracking-widest uppercase block mb-3">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Let's make something <br />
                <span className="text-gradient-blue">extraordinary.</span>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-md">
                I'm always excited to collaborate on creative digital products, custom design systems, and frontend interactive experiences. Drop me a line!
              </p>
            </div>

            {/* Practical Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue-light shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-white/50 block font-medium">Email Me</span>
                  <a href="mailto:contact@designerb.studio" className="text-base text-white font-semibold hover:text-accent-blue-light transition-colors">
                    contact@designerb.studio
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue-light shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-white/50 block font-medium">Based In</span>
                  <span className="text-base text-white font-semibold">
                    Bangkok, Thailand
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue rounded-xl px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 bg-accent-blue hover:bg-accent-blue-light disabled:bg-emerald-600 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(0,85,255,0.35)] transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-2"
              >
                {submitted ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
