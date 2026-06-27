import Image from "next/image";
import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicesList from "@/components/ServicesList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-accent-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        
        {/* About Section */}
        <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
            
            {/* Left Column: Photo */}
            <div className="lg:w-2/5 flex items-start justify-center lg:justify-start">
              <div className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-md lg:max-w-lg mx-auto lg:mx-0">
                <Image
                  src="/images/profile.jpg"
                  alt="Designer B Profile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center mix-blend-lighten transition-transform duration-700 hover:scale-105 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] md:[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                />
                {/* Subtle gradient overlays to ensure seamless blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none opacity-50" />
              </div>
            </div>

            {/* Right Column: Text & Stats */}
            <div className="lg:w-3/5 space-y-8 flex flex-col justify-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-black font-sans leading-[1.1] tracking-tight mb-12">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="text-gradient-blue">Designer B</span>
                </h1>
                <span className="text-xs font-semibold text-accent-blue-light tracking-widest uppercase block mb-3">
                  About Designer B
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Creative Philosophy
                </h2>
              </div>
              
              <div className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed">
                <p>
                  With over 15 years of industry experience, I have driven 50+ design projects across diverse sectors, balancing corporate identity with commercial edge. As a university lecturer and official Canva Creator, I am dedicated to bridging creative vision with real-world impact, shaping the next generation of designers in Southeast Asia.
                </p>
                <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">15+ Years</h4>
                    <p className="text-xs text-white/50">Industry Experience</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">50+ Clients</h4>
                    <p className="text-xs text-white/50">Satisfied Globally</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">100% Quality</h4>
                    <p className="text-xs text-white/50">Attention to Detail</p>
                  </div>
                </div>
                
                {/* Embedded Services List */}
                <ServicesList />

                {/* Hero Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
                  <a
                    href="/#works"
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
                    href="/#contact"
                    className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        <PortfolioGrid />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

