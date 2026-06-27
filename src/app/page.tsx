import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-accent-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
            <div className="lg:w-1/3">
              <span className="text-xs font-semibold text-accent-blue-light tracking-widest uppercase block mb-3">
                About Designer B
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                Creative Philosophy
              </h2>
              <div className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-sm rounded-2xl overflow-hidden glass-panel border border-white/10 mx-auto lg:mx-0 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <Image
                  src="/images/profile.jpg"
                  alt="Designer B Profile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6 text-text-secondary text-base md:text-lg leading-relaxed">
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

