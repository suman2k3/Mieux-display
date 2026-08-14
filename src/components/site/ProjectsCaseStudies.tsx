import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { img } from "@/data/site";

export function ProjectsCaseStudies() {
  // DEMO DATA — Replace with actual project information
  const projects = [
    {
      id: 1,
      title: "National Strategic Command Center",
      industry: "Government & Defence",
      solution: "Curved Fine-Pitch Active LED Wall",
      location: "New Delhi",
      image: img.controlRoom,
      description:
        "Custom engineered 0.9mm fine-pitch active LED canvas with zero-latency signal processing and 24/7 dual power redundancy.",
    },
    {
      id: 2,
      title: "Fortune 500 Executive Boardroom",
      industry: "Corporate",
      solution: "4K Interactive Display & Video Wall",
      location: "Mumbai",
      image: img.corporate,
    },
    {
      id: 3,
      title: "Medical University Auditorium",
      industry: "Education & Healthcare",
      solution: "High-Resolution Auditorium LED",
      location: "Bengaluru",
      image: img.education,
    },
  ];

  return (
    <section className="bg-[#F5F5F5] text-[#0D0D0F] py-16 lg:py-24 border-b border-[#E4E4E7] relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-6">
          <SectionHeading
            align="left"
            eyebrow="PROJECTS & CASE STUDIES"
            title="Built for Real-World Impact"
            subtitle="Explore high-stakes display installations commissioned across India's premier public and private institutions."
            className="mb-0"
          />

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Spacious Editorial Layout: 1 Large Main Feature Card + 2 Supporting Cards */}
        <div className="space-y-8">
          {/* Main Feature Project Card (Large Photography & High Clarity) */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[22px] border border-[#E4E4E7] bg-[#FFFFFF] shadow-xl grid lg:grid-cols-12 items-center">
              {/* Large Image (7 cols, aspect 16/9, FULL 100% OPACITY BY DEFAULT) */}
              <div className="lg:col-span-7 relative aspect-[16/9] w-full overflow-hidden bg-slate-900/10">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#0D0D0F]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur shadow-md">
                  FEATURED CASE STUDY
                </span>
              </div>

              {/* Text & Content (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                    {projects[0].industry}
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#0D0D0F] leading-tight">
                    {projects[0].title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E4E4E7] pt-5">
                  <span className="text-sm font-semibold text-[#52525B]">
                    {projects[0].solution} • {projects[0].location}
                  </span>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E] hover:underline"
                  >
                    Read Case Study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2 Supporting Projects (Grid 2 cols, 100% Image Opacity, Clear Dark Text) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.slice(1).map((proj, idx) => (
              <Reveal key={proj.id} delay={(idx + 1) * 0.08}>
                <div className="group relative overflow-hidden rounded-[22px] border border-[#E4E4E7] bg-[#FFFFFF] p-6 shadow-lg transition-all duration-300 hover:border-[#9B1B9E]/60 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E4E4E7] mb-5 bg-slate-900/10">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                      {proj.industry}
                    </span>
                    <h4 className="font-display text-xl font-bold text-[#0D0D0F] group-hover:text-[#9B1B9E] transition-colors mt-1">
                      {proj.title}
                    </h4>
                    <div className="mt-4 flex items-center justify-between border-t border-[#E4E4E7] pt-3.5">
                      <span className="text-sm text-[#52525B] font-semibold">
                        {proj.solution}
                      </span>
                      <Link
                        to="/gallery"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#9B1B9E]"
                      >
                        View Project <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
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
