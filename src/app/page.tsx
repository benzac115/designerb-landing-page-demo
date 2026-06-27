import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
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
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Creative Philosophy
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-6 text-text-secondary text-base md:text-lg leading-relaxed">
              <p>
                I believe that design is not just how things look, but how they work, move, and respond to user intent. By bridging the gap between aesthetics and function, I create websites and branding systems that feel alive.
              </p>
              <p>
                My process blends grid-based layout precision with organic glowing elements and subtle transitions, delivering a distinct modern visual experience. Every pixel is intentional, and every movement serves a purpose.
              </p>
              <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">05+ Years</h4>
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

