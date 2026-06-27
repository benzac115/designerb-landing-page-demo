"use client";

export default function Contact() {
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

          {/* Action Side (Canva Link) */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(125,42,232,0.3)]">
               <span className="text-white font-bold text-lg font-sans tracking-tight">Canva</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Visit My Canva Profile</h3>
            <p className="text-text-secondary text-sm md:text-base mb-10 max-w-sm">
              Discover and use my official Canva templates to elevate your designs instantly.
            </p>
            <a
              href="https://www.canva.com/p/benzzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>View Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
