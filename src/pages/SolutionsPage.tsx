import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion-primitives";
import { CtaSection } from "@/components/site/sections-2";
import { solutions, img } from "@/data/site";

const industryFilters = [
  "All",
  "Education",
  "Corporate",
  "Government",
  "Banking",
  "Hospitality",
  "Retail",
];

const environmentFactors = [
  {
    number: "01",
    title: "Space & Viewing",
    description: "Viewing distance, ambient lighting, room dimensions and pitch requirements.",
  },
  {
    number: "02",
    title: "Display Technology",
    description: "Fine-pitch LED, LCD, IFPD and interactive display requirements.",
  },
  {
    number: "03",
    title: "Installation & Integration",
    description: "Custom structural brackets, thermal management, power distribution and cabling.",
  },
  {
    number: "04",
    title: "Long-Term Support",
    description: "Pan-India service coverage, spare inventory and 24/7 support.",
  },
];

const solutionProcessSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understanding operational objectives, viewing distance, requirements and workflow.",
  },
  {
    number: "02",
    title: "Specify",
    description: "Engineering evaluation of structural weight, airflow and electrical requirements.",
  },
  {
    number: "03",
    title: "Design",
    description: "Custom CAD drawings, module pitch selection and signal routing.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Professional installation, commissioning and calibration.",
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing maintenance, monitoring and enterprise support.",
  },
];

const projectHighlights = [
  {
    id: "h1",
    title: "National Strategic Command Center",
    category: "Government",
    solution: "Mission-Critical Video Wall",
    image: img.controlRoom,
  },
  {
    id: "h2",
    title: "University Auditorium Video Array",
    category: "Education",
    solution: "4K Fine-Pitch LED",
    image: img.education,
  },
  {
    id: "h3",
    title: "Flagship Store Facade Screen",
    category: "Retail",
    solution: "Transparent Glass LED",
    image: img.transparentLed,
  },
  {
    id: "h4",
    title: "Executive Boardroom Experience Center",
    category: "Corporate",
    solution: "Interactive Smart Display",
    image: img.corporate,
  },
];

const heroSectors = [
  {
    num: "01",
    label: "Education",
    title: "Smart Classrooms & Universities",
    image: img.solutionEducation,
    desc: "Interactive flat panels, lecture hall LED displays, and campus-wide digital wayfinding signage engineered for active learning.",
  },
  {
    num: "02",
    label: "Corporate",
    title: "Executive Boardrooms & Lobbies",
    image: img.solutionCorporate,
    desc: "Fine-pitch LED video walls, interactive smart meeting displays, and experience centers engineered for enterprise performance.",
  },
  {
    num: "03",
    label: "Government",
    title: "Government & Public Infrastructure",
    image: img.solutionGovernment,
    desc: "GeM compliant, high-security 24/7 visual display infrastructure for public assembly halls and administration centers.",
  },
  {
    num: "04",
    label: "Retail",
    title: "Storefront & Commercial Media",
    image: img.signage,
    desc: "High-brightness commercial displays and digital poster standees engineered to capture footfall and drive sales.",
  },
  {
    num: "05",
    label: "Banking",
    title: "Financial Experience Centers",
    image: img.solutionBanking,
    desc: "Ultra-narrow bezel LCD and LED display arrays designed for live market data, branch experience centers, and executive lobbies.",
  },
  {
    num: "06",
    label: "Hospitality",
    title: "Luxury Lounges & Event Venues",
    image: img.solutionHospitality,
    desc: "High-contrast indoor LED displays engineered for hotel atriums, banquet halls, and luxury hospitality venues.",
  },
];

export function SolutionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);

  const activeSector = heroSectors[activeSectorIndex];

  const filteredSolutions = solutions.filter((s) => {
    if (activeFilter === "All") return true;
    return (
      s.title.toLowerCase() === activeFilter.toLowerCase() ||
      s.category.toLowerCase() === activeFilter.toLowerCase()
    );
  });

  return (
    <>
      {/* ─── 1. PREMIUM FUTURISTIC ENTERPRISE SOLUTIONS HERO (DARK #050505) ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-12 lg:py-16 border-b border-[#27272A] min-h-[600px] flex flex-col justify-between">
        {/* Darkened background photography with blend layer */}
        <img
          src={activeSector.image}
          alt={activeSector.label}
          className="absolute inset-0 h-full w-full object-cover opacity-15 brightness-90 transition-opacity duration-500 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#050505]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.12),transparent)] pointer-events-none" aria-hidden />

        {/* Subtle Engineering Grid Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="h-full w-full" width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#9B1B9E]" />
                <circle cx="60" cy="60" r="1.5" fill="#FF7A00" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full flex-1 flex flex-col justify-between">
          {/* Top Row: Editorial Split Layout */}
          <div className="grid gap-10 lg:grid-cols-12 items-center my-auto pt-4">
            {/* Left (~55%, 7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-6 bg-[#FF7A00]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF7A00]">
                    SOLUTIONS
                  </span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Display engineering <br />
                  built around <br />
                  <span className="text-[#9B1B9E]">your sector.</span>
                </h1>

                <p className="mt-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-medium max-w-xl">
                  Explore how MIEUX Display engineers custom visual display solutions tailored for specific industry workflows, security standards, and operational environments.
                </p>

                {/* Small Engineering Specification Detail */}
                <div className="mt-6 flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA]">
                  <span className="h-px w-7 bg-[#FF7A00]" />
                  <span>ENGINEERED FOR REAL-WORLD ENVIRONMENTS</span>
                </div>
              </Reveal>
            </div>

            {/* Right (~45%, 5 cols): PURE WHITE FRAME SECTOR VISUAL */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-[#9B1B9E]/25 blur-3xl" aria-hidden />

                  {/* Pure White Container Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[26px] border border-white bg-white p-3.5 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col justify-between">
                    <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-[#E4E4E7] bg-white">
                      <img
                        key={activeSector.num}
                        src={activeSector.image}
                        alt={activeSector.label}
                        className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Info Badge at Bottom */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between rounded-xl bg-white/95 border border-[#E4E4E7] p-3 shadow-lg backdrop-blur-md">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF7A00]">
                            {activeSector.num} • {activeSector.label}
                          </span>
                          <h4 className="text-xs font-extrabold text-[#0D0D0F] mt-0.5">
                            {activeSector.title}
                          </h4>
                        </div>
                        <span className="rounded-full bg-[#9B1B9E] px-3 py-1 text-[10px] font-bold text-white shrink-0 shadow-md">
                          Sector Visual
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom Row: 6-Column Sector Navigation Selector */}
          <div className="mt-8 border-t border-[#27272A] pt-5 pb-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {heroSectors.map((sec, idx) => {
                const isActive = activeSectorIndex === idx;
                return (
                  <button
                    key={sec.num}
                    onMouseEnter={() => setActiveSectorIndex(idx)}
                    onClick={() => setActiveSectorIndex(idx)}
                    className={`group relative flex items-center justify-between rounded-xl border p-3 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#9B1B9E] bg-[#151518] text-white shadow-lg ring-1 ring-[#9B1B9E]/50"
                        : "border-[#27272A] bg-[#0D0D0F]/80 text-[#A1A1AA] hover:border-[#3F3F46] hover:bg-[#151518] hover:text-white"
                    }`}
                  >
                    <div className="min-w-0">
                      <span className={`block text-[10px] font-bold tracking-wider transition-colors ${
                        isActive ? "text-[#FF7A00]" : "text-[#71717A] group-hover:text-[#FF7A00]"
                      }`}>
                        {sec.num}
                      </span>
                      <span className="block truncate text-xs font-bold mt-0.5">
                        {sec.label}
                      </span>
                    </div>
                    <ArrowUpRight className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${
                      isActive ? "text-[#9B1B9E] translate-x-0.5 -translate-y-0.5" : "text-[#71717A] group-hover:text-white"
                    }`} />

                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#9B1B9E] rounded-full shadow-[0_0_8px_#9B1B9E]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT & SECTOR SHOWCASE (LIGHT bg-[#F7F7F5]) */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                PRODUCT RANGE
              </span>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
                Every display format, <span className="text-[#9B1B9E]">one accountable partner.</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl font-medium">
                Purpose-built display solutions engineered for the way different industries operate.
              </p>
            </div>
          </div>

          {/* Restyled Filter Pills for Light Background */}
          <div className="flex items-center justify-start gap-2 overflow-x-auto pb-3 no-scrollbar mb-8">
            {industryFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full px-4.5 py-2 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#9B1B9E] text-white shadow-md scale-[1.02]"
                      : "border border-[#E4E4E7] bg-white text-[#52525B] hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* 3-Column Light Product/Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredSolutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                <div
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-[#E4E4E7] bg-white p-5.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9B1B9E] hover:shadow-xl"
                >
                  <div>
                    {/* Image Container (45-50% Card Height) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 mb-4">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Category Label */}
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      {s.category || s.title} Deployment
                    </span>

                    {/* Card Title */}
                    <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#0D0D0F] group-hover:text-[#9B1B9E] transition-colors leading-tight">
                      {s.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#52525B] font-medium line-clamp-3">
                      {s.description}
                    </p>

                    {/* Key Feature Bullets */}
                    {s.highlights && s.highlights.length > 0 && (
                      <div className="mt-4 pt-3.5 border-t border-[#E4E4E7] space-y-2">
                        {s.highlights.slice(0, 3).map((h) => (
                          <div key={h} className="text-xs font-semibold text-[#52525B] flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#9B1B9E]" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Action CTA */}
                  <div className="mt-5 pt-3.5 border-t border-[#E4E4E7] flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E] hover:text-[#B52CB8] transition-colors"
                    >
                      <span>Consult Our Engineers</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESIGNED FOR EVERY ENVIRONMENT (DARK bg-[#050505]) */}
      <section className="bg-[#050505] text-[#F5F5F5] py-14 lg:py-20 border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT: Large Installation Image (6 cols) */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative overflow-hidden rounded-[24px] border border-[#27272A] bg-[#151518] shadow-2xl aspect-[16/10]">
                  <img
                    src={img.environmentalDesign}
                    alt="Designed for Every Environment Architectural Video Wall Installation"
                    className="h-full w-full object-cover brightness-105 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Heading + 4 Connected Environment Factors (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                  ENVIRONMENTAL DESIGN
                </span>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display leading-tight">
                  Designed for <span className="text-[#9B1B9E]">Every Environment</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-medium">
                  Every display environment has unique operational requirements. We design the right combination of hardware, content, installation, and support around the way your space works.
                </p>

                {/* 4 Feature Items */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-[#27272A] pt-4">
                  {environmentFactors.map((factor) => (
                    <div key={factor.number} className="rounded-xl border border-[#27272A] bg-[#151518] p-4 flex flex-col justify-between">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#9B1B9E]/20 border border-[#9B1B9E]/40 text-[#9B1B9E] font-display text-xs font-bold">
                          {factor.number}
                        </span>
                        <h4 className="text-xs sm:text-sm font-display font-bold text-white">
                          {factor.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#A1A1AA] leading-relaxed font-medium">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FROM VISION TO INSTALLATION / PROCESS (LIGHT bg-[#F7F7F5]) */}
      <section className="py-14 lg:py-20 bg-[#F7F7F5] text-[#0D0D0F] border-b border-[#E4E4E7] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              SYSTEMATIC METHODOLOGY
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              From Vision to <span className="text-[#9B1B9E]">Installation</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl mx-auto font-medium">
              Our systematic engineering methodology ensures flawless execution from initial drawing to final calibration.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Connecting Line (Desktop) */}
            <div
              className="hidden lg:block absolute top-7 left-16 right-16 h-0.5 bg-gradient-to-r from-[#9B1B9E]/40 via-[#9B1B9E] to-[#FF6B00] z-0"
              aria-hidden
            />

            {/* 5 Process Steps — All 5 Clearly Visible */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {solutionProcessSteps.map((step, idx) => (
                <Reveal key={step.number} delay={idx * 0.05}>
                  <div className="flex flex-col items-center text-center group">
                    
                    {/* Purple Numbered Circle */}
                    <div className="h-13 w-13 rounded-full bg-[#9B1B9E] text-white flex items-center justify-center font-display font-black text-sm shadow-md mb-3.5 group-hover:scale-105 transition-transform duration-300 relative z-10">
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h4 className="text-base font-display font-bold text-[#0D0D0F] mb-1">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-xs text-[#52525B] leading-relaxed font-medium max-w-[210px]">
                      {step.description}
                    </p>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUILT FOR REAL-WORLD IMPACT / PROJECTS (LIGHT bg-[#F5F7F5]) */}
      <section className="bg-[#F5F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                PROJECT SHOWCASE
              </span>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
                Built for <span className="text-[#9B1B9E]">Real-World Impact</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl font-medium">
                Explore MIEUX display installations across corporate, government, education, retail and other demanding environments.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-[#E4E4E7] bg-white px-5 py-2.5 text-xs font-bold text-[#0D0D0F] shadow-sm transition-all hover:border-[#9B1B9E] hover:text-[#9B1B9E] shrink-0"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Compact Bento-Inspired Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Large Featured Card (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <Reveal className="h-full">
                <div className="group relative overflow-hidden rounded-[22px] border border-[#E4E4E7] bg-white p-5.5 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-[#9B1B9E] h-full flex flex-col justify-between">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900/10 mb-4">
                    <img
                      src={projectHighlights[0]!.image}
                      alt={projectHighlights[0]!.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[#9B1B9E] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                      {projectHighlights[0]!.category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#FF6B00]">
                        {projectHighlights[0]!.solution}
                      </span>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-[#0D0D0F] leading-tight">
                        {projectHighlights[0]!.title}
                      </h3>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#E4E4E7] pt-3.5">
                      <span className="text-xs font-semibold text-[#52525B]">
                        Mission-Critical Control Room
                      </span>
                      <Link
                        to="/gallery"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#9B1B9E] hover:underline"
                      >
                        View Project <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Supporting Grid (6 cols — 2 small + 1 medium) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectHighlights.slice(1).map((proj, idx) => (
                <Reveal key={proj.id} delay={(idx + 1) * 0.05}>
                  <div className="group relative overflow-hidden rounded-[20px] border border-[#E4E4E7] bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#9B1B9E] hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900/10 mb-3">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-2 right-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[9px] font-bold text-[#9B1B9E] backdrop-blur">
                          {proj.category}
                        </span>
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#0D0D0F] group-hover:text-[#9B1B9E] transition-colors leading-tight">
                        {proj.title}
                      </h4>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-[#E4E4E7] pt-2.5">
                      <span className="text-[11px] text-[#52525B] font-semibold truncate max-w-[130px]">
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

      {/* 6. FINAL CTA (DARK #050505) */}
      <CtaSection />
    </>
  );
}
