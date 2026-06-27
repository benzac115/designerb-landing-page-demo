"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(0,85,255,0.4)] group-hover:scale-105 transition-transform">
            B
          </div>
          <span className="font-sans font-semibold text-lg tracking-tight text-white group-hover:text-accent-blue-light transition-colors">
            Designer B
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/#works"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
          >
            Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/#about"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/#contact"
            className="px-4 py-2 text-sm font-medium text-white bg-accent-blue hover:bg-accent-blue-light rounded-full shadow-[0_0_15px_rgba(0,85,255,0.35)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Icon (Simple Button for aesthetics) */}
        <button aria-label="Toggle Menu" className="md:hidden text-white hover:text-accent-blue-light transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
