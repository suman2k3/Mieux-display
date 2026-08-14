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

const sectorSolutions: SectorSolution[] = [
  {
    num: "01",
    slug: "corporate",
    category: "Corporate",
    title: "Corporate & Experience Centers",
    shortDesc: "Enterprise offices, boardrooms & experience centres",
    description:
      "Transform executive boardrooms, experience centers, and corporate lobbies with fine-pitch LED walls, interactive displays, and smart room automation.",
    image: img.corporate,
    highlights: ["Executive Boardrooms", "Experience Centers", "Atrium Video Walls", "Hybrid Meeting Rooms"],
  },
  {
    num: "02",
    slug: "education",
    category: "Education",
    title: "Smart Education & Universities",
    shortDesc: "Smart classrooms, lecture spaces & campuses",
    description:
      "Empower modern learning environments with 4K interactive flat panels, lecture hall LED screens, and campus-wide digital wayfinding signage.",
    image: img.education,
    highlights: ["Interactive Classrooms", "Auditorium LED Walls", "Campus Signage Networks", "Digital Whiteboarding"],
  },
  {
    num: "03",
    slug: "government",
    category: "Government",
    title: "Government & Public Infrastructure",
    shortDesc: "Briefing rooms, assembly halls & civic centers",
    description:
      "Compliant, high-security visual display infrastructure for government assembly halls, public briefing rooms, and civic administration centers.",
    image: img.controlRoom,
    highlights: ["Assembly Hall Displays", "GeM Compliant Supply", "24/7 Duty Rating", "Secure Signal Flow"],
  },
  {
    num: "04",
    slug: "retail",
    category: "Retail",
    title: "Luxury Retail & Flagship Stores",
    shortDesc: "Flagship stores, transparent windows & digital posters",
    description:
      "Captivate shoppers with ultra-high brightness window poster displays, transparent LED glass facades, and interactive product kiosks.",
    image: img.transparentLed,
    highlights: ["Transparent Glass LED", "High-Brightness Posters", "Interactive Product Kiosks", "Cloud Content Engine"],
  },
  {
    num: "05",
    slug: "defence",
    category: "Defence",
    title: "Defence & Strategic Command",
    shortDesc: "Strategic command centers & tactical operations",
    description:
      "Zero-downtime, low-latency display walls for military command centers, tactical briefing rooms, and strategic surveillance ops.",
    image: img.controlRoom,
    highlights: ["Zero Downtime Redundancy", "Sub-8ms Latency", "KVM Multi-Source Canvas", "Mil-Spec Rated"],
  },
  {
    num: "06",
    slug: "healthcare",
    category: "Healthcare",
    title: "Healthcare & Medical Centers",
    shortDesc: "Diagnostic suites, operating theaters & wayfinding",
    description:
      "DICOM-calibrated medical displays for operating theaters, diagnostic briefing suites, and hygienic hospital wayfinding digital signage.",
    image: img.education,
    highlights: ["Diagnostic Calibrated", "Hygienic Anti-Glare Glass", "Wayfinding Kiosks", "Auditorium Telemedicine"],
  },
  {
    num: "07",
    slug: "hospitality",
    category: "Hospitality",
    title: "Hospitality & Venues",
    shortDesc: "Hotel lobbies, curved backdrop walls & venues",
    description:
      "High-impact curved LED video walls for hotel lobbies, banquet halls, night clubs, and event convention centers.",
    image: img.indoorLed,
    highlights: ["Banquet Hall Backdrop", "Architectural Curves", "High Refresh Rate", "Atmospheric Lighting"],
  },
  {
    num: "08",
    slug: "transportation",
    category: "Transportation",
    title: "Transportation & Transit Hubs",
    shortDesc: "Transit hubs, airport FIDS & passenger displays",
    description:
      "24/7 rated Flight Information Display Systems (FIDS), passenger information screens, and high-brightness transit billboards.",
    image: img.heroOutdoor,
    highlights: ["24/7 Continuous Operation", "Flight Info Display (FIDS)", "Dust & Vibration Proof", "Cloud CMS Control"],
  },
  {
    num: "09",
    slug: "control-room",
    category: "Control Rooms",
    title: "Mission-Critical Control Rooms",
    shortDesc: "24/7/365 continuous duty NOC/SOC video walls",
    description:
      "24/7/365 continuous duty active LED and LCD video walls engineered for Network Operations Centers (NOC), Security Ops (SOC), and emergency dispatch.",
    image: img.controlRoom,
    highlights: ["Hot-Swappable Modules", "Dual Power Redundancy", "Zero Latency Routing", "Integrated KVM Control"],
  },
];

export function InteractiveSolutions() {
  const [activeSlug, setActiveSlug] = useState<string>("corporate");

  const currentSolution =
    sectorSolutions.find((s) => s.slug === activeSlug) || sectorSolutions[0];

  return (
    <section className="bg-[#050505] text-[#F5F5F5] py-10 sm:py-12 lg:py-14 border-b border-[#27272A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="SOLUTIONS"
          title="Solutions Built Around Your Environment"
          subtitle="Deployments engineered for specific operational workflows, environmental factors, and security compliance."
        />

        <div className="mt-6 sm:mt-8 grid gap-6 lg:gap-8 lg:grid-cols-12 items-stretch">
          {/* ─── LEFT COLUMN: SHOWCASE CARD (58-60% Desktop ~ 7 cols) ─── */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSolution.slug}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl border border-[#27272A] bg-[#151518] shadow-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Controlled Widescreen Image Aspect Ratio */}
                  <div className="relative h-40 sm:h-48 lg:h-52 w-full overflow-hidden rounded-xl border border-[#27272A] bg-[#0D0D0F]">
                    <img
                      src={currentSolution.image}
                      alt={currentSolution.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-transparent to-transparent opacity-80" />
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

                <div className="mt-4 pt-3 border-t border-[#27272A]">
                  <Link
                    to={`/solutions/${currentSolution.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── RIGHT COLUMN: INTERACTIVE SECTOR NAVIGATION PANEL (40-42% Desktop ~ 5 cols) ─── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF7A00] flex items-center justify-between px-1">
              <span>Sectors & Environments</span>
              <span className="text-[10px] text-[#A1A1AA] font-mono">09 SECTORS</span>
            </div>

            <div className="space-y-1 flex-1 flex flex-col justify-between">
              {sectorSolutions.map((sol) => {
                const isActive = activeSlug === sol.slug;
                return (
                  <button
                    key={sol.slug}
                    onClick={() => setActiveSlug(sol.slug)}
                    onMouseEnter={() => setActiveSlug(sol.slug)}
                    className={`group relative flex w-full items-center justify-between py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-lg text-left transition-all duration-200 border ${
                      isActive
                        ? "bg-[#17171D] border-[#9B1B9E]/50 shadow-[0_0_15px_rgba(155,27,158,0.15)]"
                        : "bg-[#121215]/80 border-[#27272A]/70 hover:bg-[#17171C] hover:border-[#9B1B9E]/30"
                    }`}
                  >
                    {/* Active Purple Accent Bar */}
                    <span
                      className={`absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full transition-all duration-200 ${
                        isActive ? "bg-[#9B1B9E]" : "bg-transparent group-hover:bg-[#9B1B9E]/40"
                      }`}
                    />

                    <div className="pl-2 flex items-center gap-2.5 min-w-0 pr-2">
                      <span
                        className={`font-mono text-[11px] font-bold shrink-0 ${
                          isActive ? "text-[#9B1B9E]" : "text-[#FF7A00]/80 group-hover:text-[#FF7A00]"
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
                        <p className="text-[10.5px] text-[#A1A1AA] line-clamp-1 leading-tight font-medium">
                          {sol.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`h-3.5 w-3.5 shrink-0 transition-all duration-200 ${
                        isActive
                          ? "text-[#9B1B9E] opacity-100 translate-x-0"
                          : "text-[#A1A1AA] opacity-40 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#9B1B9E]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

