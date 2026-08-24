import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/site/motion-primitives";
import { img } from "@/data/site";

interface SectorSolution {
  num: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  image: string;
  highlights: string[];
}

// Real-world Environment & Sector Installation Photography (Strictly 6 Solutions)
const sectorSolutions: SectorSolution[] = [
  {
    num: "01",
    slug: "education",
    category: "Education",
    title: "Smart Education & Universities",
    shortDesc: "Smart classrooms, lecture spaces & campuses",
    description:
      "Empower modern learning environments with 4K interactive flat panels, lecture hall LED screens, and campus-wide digital wayfinding signage.",
    image: img.solutionEducation,
    highlights: ["Interactive Classrooms", "Auditorium LED Walls", "Campus Signage Networks", "Digital Whiteboarding"],
  },
  {
    num: "02",
    slug: "corporate",
    category: "Corporate",
    title: "Corporate & Experience Centers",
    shortDesc: "Enterprise offices, boardrooms & experience centres",
    description:
      "Transform executive boardrooms, experience centers, and corporate lobbies with fine-pitch LED walls, interactive displays, and smart room automation.",
    image: img.solutionCorporate,
    highlights: ["Executive Boardrooms", "Experience Centers", "Atrium Video Walls", "Hybrid Meeting Rooms"],
  },
  {
    num: "03",
    slug: "government",
    category: "Government",
    title: "Government & Public Infrastructure",
    shortDesc: "Briefing rooms, assembly halls & civic centers",
    description:
      "Compliant, high-security visual display infrastructure for government assembly halls, public briefing rooms, and civic administration centers.",
    image: img.solutionGovernment,
    highlights: ["Assembly Hall Displays", "GeM Compliant Supply", "24/7 Duty Rating", "Secure Signal Flow"],
  },
  {
    num: "04",
    slug: "banking",
    category: "Banking",
    title: "Banking & Financial Services",
    shortDesc: "Branch digital signage, rate boards & self-service kiosks",
    description:
      "Modernize banking branches with real-time exchange rate boards, interactive customer queue management, and digital standee displays.",
    image: img.solutionBanking,
    highlights: ["Branch Rate Displays", "Customer Queue Systems", "Self-Service Banking Kiosks", "Security Compliant"],
  },
  {
    num: "05",
    slug: "hospitality",
    category: "Hospitality",
    title: "Hospitality & Venues",
    shortDesc: "Hotel lobbies, reception desks & convention venues",
    description:
      "High-impact curved LED video walls for hotel lobbies, reception desks, banquet halls, and digital venue signage.",
    image: img.solutionHospitality,
    highlights: ["Reception Displays", "Banquet Hall Backdrop", "Architectural Curves", "Digital Menu Boards"],
  },
  {
    num: "06",
    slug: "retail",
    category: "Retail",
    title: "Luxury Retail & Flagship Stores",
    shortDesc: "Storefront windows, transparent glass & digital posters",
    description:
      "Captivate shoppers with ultra-high brightness window poster displays, transparent LED glass facades, and interactive in-store digital apparel posters.",
    image: img.digitalStandeeBanners,
    highlights: ["Transparent Glass LED", "High-Brightness Posters", "In-Store Signage", "Cloud Content Engine"],
  },
];

export function InteractiveSolutions() {
  const [activeSlug, setActiveSlug] = useState<string>("corporate");

  const currentSolution =
    sectorSolutions.find((s) => s.slug === activeSlug) || sectorSolutions[0];

  return (
    <section className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 border-b border-[#27272A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              SOLUTIONS BUILT AROUND YOU
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Solutions Built Around <span className="text-[#9B1B9E]">Your Environment</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl font-medium">
              Every environment has unique requirements. We deliver tailor-made display solutions that inspire, communicate and perform.
            </p>
          </div>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-full bg-[#9B1B9E] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
          >
            View All Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Horizontal Pill Bar */}
        <div className="lg:hidden w-full mt-4 mb-2">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF7A00] flex items-center justify-between px-1">
            <span>Sectors & Environments</span>
            <span className="text-[10px] text-[#A1A1AA] font-mono">09 SECTORS</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {sectorSolutions.map((sol) => {
              const isActive = activeSlug === sol.slug;
              return (
                <button
                  key={sol.slug}
                  type="button"
                  onClick={() => setActiveSlug(sol.slug)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all border whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#9B1B9E] text-white border-[#9B1B9E] shadow-lg scale-[1.02]"
                      : "bg-[#151518] text-[#A1A1AA] border-[#27272A] hover:text-white hover:border-[#9B1B9E]"
                  }`}
                >
                  <span className={`font-mono text-[10px] font-bold ${isActive ? "text-white" : "text-[#FF7A00]"}`}>
                    {sol.num}
                  </span>
                  <span>{sol.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 sm:mt-6 grid gap-6 lg:gap-8 lg:grid-cols-12 items-stretch">
          {/* ─── LEFT COLUMN: SHOWCASE CARD (58-60% Desktop ~ 7 cols) ─── */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSolution.slug}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl border border-[#27272A] bg-[#151518] shadow-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Full Frame Solution Photo — Zero Black Space */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#27272A] bg-[#151518]">
                    <img
                      src={currentSolution.image}
                      alt={currentSolution.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151518]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="mt-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#9B1B9E]">
                      {currentSolution.category} Deployment
                    </span>
                    <h3 className="mt-0.5 font-display text-xl sm:text-2xl font-extrabold text-white">
                      {currentSolution.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-2 font-medium">
                      {currentSolution.description}
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#27272A] pt-3">
                      {currentSolution.highlights.map((h) => (
                        <div key={h} className="text-xs font-semibold text-[#A1A1AA] flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#9B1B9E]" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── RIGHT COLUMN: INTERACTIVE SECTOR NAVIGATION PANEL (40-42% Desktop ~ 5 cols) ─── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="hidden lg:flex mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF7A00] items-center justify-between px-1">
              <span>Core Display Solutions</span>
              <span className="text-[10px] text-[#A1A1AA] font-mono">06 SOLUTIONS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-2 lg:space-y-1 flex-1 justify-between">
              {sectorSolutions.map((sol) => {
                const isActive = activeSlug === sol.slug;
                return (
                  <Link
                    key={sol.slug}
                    to="/solutions"
                    onMouseEnter={() => setActiveSlug(sol.slug)}
                    className={`group relative flex w-full items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? "bg-[#17171D] border-[#9B1B9E] shadow-[0_0_15px_rgba(155,27,158,0.2)]"
                        : "bg-[#121215]/90 border-[#27272A] hover:bg-[#17171C] hover:border-[#9B1B9E]/60"
                    }`}
                  >
                    {/* Active Purple Accent Bar */}
                    <span
                      className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-all duration-200 ${
                        isActive ? "bg-[#9B1B9E]" : "bg-transparent group-hover:bg-[#9B1B9E]/40"
                      }`}
                    />

                    <div className="pl-2 flex items-center gap-3 min-w-0 pr-2">
                      <span
                        className={`font-mono text-xs font-bold shrink-0 ${
                          isActive ? "text-[#9B1B9E]" : "text-[#FF7A00] group-hover:text-[#FF7A00]"
                        }`}
                      >
                        {sol.num}
                      </span>
                      <div className="min-w-0">
                        <div
                          className={`text-xs sm:text-sm font-bold truncate transition-colors ${
                            isActive ? "text-white" : "text-[#E4E4E7] group-hover:text-white"
                          }`}
                        >
                          {sol.category}
                        </div>
                        <p className="text-[11px] text-[#A1A1AA] line-clamp-1 leading-tight font-medium">
                          {sol.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                        isActive
                          ? "text-[#9B1B9E] opacity-100 translate-x-0"
                          : "text-[#A1A1AA] opacity-50 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#9B1B9E]"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

