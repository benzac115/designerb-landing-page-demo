"use client";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-accent-blue flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(0,85,255,0.3)]">
              B
            </div>
            <span className="font-sans font-semibold text-sm tracking-tight text-white">
              Designer B
            </span>
          </div>
          <p className="text-[11px] text-white/40">
            Designing digital futures since 2024.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-xs text-white/50">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#works" className="hover:text-white transition-colors">Works</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/40 text-center md:text-right">
          &copy; {new Date().getFullYear()} Designer B. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
