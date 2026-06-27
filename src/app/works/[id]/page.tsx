import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-accent-blue selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-32">
        <article className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Back Button */}
          <Link
            href="/#works"
            className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-white transition-colors mb-12 group"
          >
            <svg
              className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          {/* Header */}
          <header className="mb-16">
            <span className="text-xs font-semibold text-accent-blue-light tracking-widest uppercase block mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </header>

          {/* Large Hero Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel border border-white/10 mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Additional Gallery Photos */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {project.gallery.map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  className={`relative w-full rounded-3xl overflow-hidden glass-panel border border-white/10 ${
                    idx === 2 ? "md:col-span-2 aspect-video" : "aspect-square"
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} gallery image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Further project details can go here in the future */}
          <div className="mt-24 text-center">
             <h3 className="text-2xl font-bold mb-6">Ready to work together?</h3>
             <Link
                href="/#contact"
                className="inline-block px-8 py-4 rounded-full bg-accent-blue text-black font-semibold hover:bg-accent-blue-light transition-colors"
              >
                Let's Talk
              </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
