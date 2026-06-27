"use client";

import Image from "next/image";

import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioGrid() {
  return (
    <section id="works" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Subtle blue accent background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-xs font-semibold text-accent-blue-light tracking-widest uppercase block mb-3">
              Selected Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Featured Portfolio
            </h2>
          </div>
          <p className="max-w-md text-text-secondary text-sm md:text-base leading-relaxed">
            A curated selection of creative works combining modern branding, striking logo and packaging design, and accessible Canva templates.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={`/works/${project.id}`} key={project.id} className="block group">
              <article className="glass-panel rounded-2xl overflow-hidden glass-panel-hover transition-all duration-500 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Visual Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Project Number */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {project.id}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Category */}
                  <span className="text-[11px] font-semibold text-accent-blue-light tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue-light transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-medium text-white/60 group-hover:text-white/80 group-hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
