"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden grid-bg">
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent-blue/20 blur-[100px] animate-blob-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-accent-blue-light/10 blur-[120px] animate-blob-slower pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center z-10 flex flex-col items-center">
        {/* Intro Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-accent-blue-light/30 transition-colors">
          <span className="w-2 h-2 rounded-full bg-accent-blue-light animate-ping" />
          <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">
            Available for Freelance & Contract
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-8xl font-black font-sans leading-[1.1] tracking-tight mb-8">
          <span className="block text-white">Hi, I'm</span>
          <span className="text-gradient-blue">Designer B</span>
        </h1>

        {/* Hero Description */}
        <p className="max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
          A creative UI/UX & Brand Identity Designer building premium, interactive, and high-performance digital experiences.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#works"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>View My Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center"
          >
            Let's Talk
          </a>
        </div>

        {/* Skills Tagline / Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {["UI/UX Design", "Brand Identity", "Design Systems", "Web Interactive", "3D Compositing"].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-lg bg-card-dark border border-border-dark text-xs font-semibold text-white/70 hover:text-white hover:border-accent-blue/30 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
