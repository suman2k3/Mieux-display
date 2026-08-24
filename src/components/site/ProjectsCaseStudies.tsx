import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { img } from "@/data/site";

const projectFilters = ["All", "Corporate", "Education", "Government", "Retail", "Defence"];

export function ProjectsCaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const allProjects = [
    {
      id: 1,
      title: "National Strategic Command Center",
      industry: "Government & Defence",
      category: "Government",
      solution: "Curved Fine-Pitch Active LED Wall",
      location: "New Delhi",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
      featured: true,
      description:
        "Custom engineered 0.9mm fine-pitch active LED canvas with zero-latency signal processing and 24/7 dual power redundancy.",
    },
    {
      id: 2,
      title: "Fortune 500 Executive Boardroom",
      industry: "Corporate",
      category: "Corporate",
      solution: "4K Interactive Display & Video Wall",
      location: "Mumbai",
      image: img.corporate,
      description: "Integrated 4K video wall solution for high-profile executive boardrooms and conferencing.",
    },
    {
      id: 3,
      title: "Medical University Auditorium",
      industry: "Education",
      category: "Education",
      solution: "High-Resolution Auditorium LED",
      location: "Bengaluru",
      image: img.education,
      description: "Large format auditorium LED canvas with high refresh rate for live surgical feeds and academic summits.",
    },
    {
      id: 4,
      title: "Flagship Retail Experience Center",
      industry: "Retail",
      category: "Retail",
      solution: "Transparent LED & Poster Displays",
      location: "Gurugram",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      description: "High-brightness window transparent LED displays enhancing in-store footfall and brand interaction.",
    },
    {
      id: 5,
      title: "Defense Operations Command Desk",
      industry: "Defence",
      category: "Defence",
      solution: "Ultra-Narrow Bezel LCD Matrix",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
      description: "Mission-critical 24/7 display matrix designed for tactical surveillance and real-time telemetry.",
    },
  ];

  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Corporate") return p.category === "Corporate";
    if (activeFilter === "Education") return p.category === "Education";
    if (activeFilter === "Government") return p.category === "Government" || p.category === "Defence";
    if (activeFilter === "Retail") return p.category === "Retail";
    if (activeFilter === "Defence") return p.category === "Defence" || p.category === "Government";
    return true;
  });

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const supportingProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 border-b border-[#27272A] relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10 gap-6">
          <SectionHeading
            align="left"
            dark
            eyebrow="PROJECTS & CASE STUDIES"
            title="Built for Real-World Impact"
            subtitle="Explore high-stakes display installations commissioned across India's premier public and private institutions."
            className="mb-0"
          />

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#151518] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex items-center justify-start gap-2 overflow-x-auto pb-2 no-scrollbar">
          {projectFilters.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#9B1B9E] text-white shadow-md"
                    : "border border-[#27272A] bg-[#151518] text-[#A1A1AA] hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento-Inspired Layout: 1 Large Left Feature Card + 4 Right Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Main Feature Card (6 cols) */}
          {featuredProject && (
            <div className="lg:col-span-6 flex flex-col">
              <Reveal className="h-full">
                <div className="group relative overflow-hidden rounded-[22px] border border-[#27272A] bg-[#151518] p-6 shadow-2xl transition-all duration-300 hover:border-[#9B1B9E] h-full flex flex-col justify-between">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900/40 mb-5 border border-[#27272A]">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-[#9B1B9E] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                      {featuredProject.category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00]">
                        {featuredProject.industry}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-extrabold text-white leading-tight">
                        {featuredProject.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-medium">
                        {featuredProject.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#27272A] pt-4">
                      <span className="text-xs font-semibold text-[#A1A1AA]">
                        {featuredProject.solution} • {featuredProject.location}
                      </span>
                      <Link
                        to="/gallery"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#9B1B9E] hover:underline"
                      >
                        View Case Study <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {/* Right 4 Grid Cards (6 cols — 2x2 grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingProjects.slice(0, 4).map((proj, idx) => (
              <Reveal key={proj.id} delay={(idx + 1) * 0.05}>
                <div className="group relative overflow-hidden rounded-[20px] border border-[#27272A] bg-[#151518] p-4 shadow-xl transition-all duration-300 hover:border-[#9B1B9E] hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900/40 mb-3 border border-[#27272A]">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2 right-2 rounded-full bg-[#050505]/80 border border-[#27272A] px-2.5 py-0.5 text-[9px] font-bold text-[#9B1B9E] backdrop-blur">
                        {proj.category}
                      </span>
                    </div>
                    <h4 className="font-display text-sm font-bold text-white group-hover:text-[#9B1B9E] transition-colors leading-tight">
                      {proj.title}
                    </h4>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-[#27272A] pt-2.5">
                    <span className="text-[11px] text-[#A1A1AA] font-semibold truncate max-w-[140px]">
                      {proj.solution}
                    </span>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-0.5 text-[11px] font-bold text-[#9B1B9E] shrink-0"
                    >
                      <span>View</span> <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
