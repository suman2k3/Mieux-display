import { useState } from "react";
import {
  Handshake,
  Scale,
  Sparkles,
  Award,
  Users,
  Target,
  Wrench,
  UserCheck,
  Globe,
  CheckCircle2,
  Flag,
  Layers,
  Building2,
  Star,
  Trophy,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Counter, Reveal } from "@/components/site/motion-primitives";
import { CtaSection } from "@/components/site/sections-2";
import { IndiaBranchMap } from "@/components/site/IndiaBranchMap";
import { img, stats } from "@/data/site";

const pillars = [
  {
    title: "Survey first",
    body: "Every quote starts with a site survey: viewing distance, ambient light, structure and cabling.",
  },
  {
    title: "In-house install",
    body: "Our own certified crews handle rigging, calibration and commissioning — no subcontract surprises.",
  },
  {
    title: "Lifetime support",
    body: "AMC options with 4-hour response in 25 cities and spares held locally.",
  },
];

const valuesList = [
  {
    title: "Trust",
    icon: Handshake,
    desc: "Building enduring relationships through transparency, reliability, and consistent product quality.",
  },
  {
    title: "Ethics",
    icon: Scale,
    desc: "Operating with absolute integrity, fairness, and professional honor in every deployment.",
  },
  {
    title: "Innovation",
    icon: Sparkles,
    desc: "Continuously advancing display technology to deliver higher performance, clarity, and value.",
  },
  {
    title: "Excellence",
    icon: Award,
    desc: "Striving for precision engineering, zero-defect installation, and superior visual standards.",
  },
  {
    title: "Teamwork",
    icon: Users,
    desc: "Uniting engineering, support, and sales expertise to deliver turnkey client success.",
  },
  {
    title: "Customer Centric",
    icon: Target,
    desc: "Putting client needs, viewing workflows, and long-term satisfaction at the center of everything we do.",
  },
];

const whyChoosePoints = [
  {
    title: "In-House Installation & Service",
    icon: Wrench,
    desc: "Our certified engineering crews manage end-to-end rigging, optical calibration, and lifecycle maintenance.",
  },
  {
    title: "Trained Technical Resources",
    icon: UserCheck,
    desc: "Skilled hardware and software specialists dedicated to NOC/SOC optimization and 24/7 technical readiness.",
  },
  {
    title: "Partner Network Coverage",
    icon: Globe,
    desc: "Extensive Pan-India service ecosystem ensuring rapid on-site response and local spare availability across 25+ cities.",
  },
  {
    title: "Make in India Products",
    icon: CheckCircle2,
    desc: "Proudly engineered and assembled in India, compliant with national standards and GeM portal guidelines.",
  },
];

const journeyMilestones = [
  {
    year: "2021",
    title: "Brand Launch",
    desc: "Introducing MIEUX IFPD portfolio & brand identity across commercial sectors.",
    icon: Flag,
  },
  {
    year: "2022",
    title: "Product Launch",
    desc: "Expanded into fine-pitch COB LED walls, outdoor displays, and digital kiosks.",
    icon: Layers,
  },
  {
    year: "2023",
    title: "New Branch",
    desc: "Opened new regional offices and service hubs to accelerate Pan-India deployment.",
    icon: Building2,
  },
  {
    year: "2024",
    title: "Brand Popularity",
    desc: "Registered on GeM portal and recognized as a top-tier display brand.",
    icon: Star,
  },
  {
    year: "2025",
    title: "National Level Events",
    desc: "Showcasing engineered solutions at DIDAC, Eldrok, Swaraksha, and IT Voice.",
    icon: Trophy,
  },
];

const lifecycleNodes = [
  {
    num: "01",
    label: "CONSULT",
    title: "Requirement Survey & Spatial Analysis",
    image: img.corporate,
    desc: "Understanding viewing distance, ambient lighting, environment and operational requirements through structured site surveys.",
  },
  {
    num: "02",
    label: "ENGINEER",
    title: "Display Architecture & Signal Routing",
    image: img.controlRoom,
    desc: "Engineering the right display architecture, pixel pitch selection, module layout drawings, and power/airflow schematics.",
  },
  {
    num: "03",
    label: "INSTALL",
    title: "Rigging, Cabling & Hardware Mounting",
    image: img.indoorLed,
    desc: "Professional installation and commissioning by certified in-house crews with precision micro-adjust alignment.",
  },
  {
    num: "04",
    label: "CALIBRATE",
    title: "16-Bit Color & Greyscale Tuning",
    image: img.heroVideoWall,
    desc: "Precision factory and on-site optical calibration for uniform brightness, greyscale accuracy, and low-latency performance.",
  },
  {
    num: "05",
    label: "SUPPORT",
    title: "Pan-India AMC & 24/7 Technical Response",
    image: img.transparentLed,
    desc: "Long-term AMC, local spare inventory across 25+ cities, and dedicated 24/7 enterprise technical support.",
  },
];

export function AboutPage() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  const activeStage = lifecycleNodes[activeNodeIndex];

  return (
    <div className="bg-[#050505] text-[#F5F5F5] antialiased">
      {/* ─── 1. INTERACTIVE STORYTELLING HERO: "THE DISPLAY LIFECYCLE" ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-12 lg:py-16 border-b border-[#27272A] min-h-[720px] flex flex-col justify-between">
        {/* Dynamic Layered Cinematic Background Photography */}
        <img
          key={activeStage.num}
          src={activeStage.image}
          alt={activeStage.label}
          className="absolute inset-0 h-full w-full object-cover opacity-20 brightness-95 transition-all duration-700 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#050505]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.15),transparent)] pointer-events-none" aria-hidden />

        {/* Technical Blueprint & Grid Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="h-full w-full" width="100%" height="100%">
            <defs>
              <pattern id="lifecycle-blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#9B1B9E]" />
                <circle cx="60" cy="60" r="1.5" fill="#FF7A00" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lifecycle-blueprint-grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full flex-1 flex flex-col justify-between">
          {/* Top Row: Editorial Annotations & Split Typography Layout */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-[#A1A1AA] border-b border-[#27272A] pb-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF7A00] animate-pulse" />
                <span>MIEUX DISPLAY / ENGINEERING SYSTEM / 01</span>
              </div>
              <span className="hidden sm:inline text-[#FF7A00]">500+ DEPLOYMENTS / PAN-INDIA</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-12 items-center">
              {/* Left Column: Headline & Story Paragraph (7 cols) */}
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-px w-6 bg-[#FF7A00]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF7A00]">
                      ABOUT US • THE DISPLAY LIFECYCLE
                    </span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                    A display partner <br />
                    that <span className="text-[#9B1B9E]">stays after handover.</span>
                  </h1>

                  <p className="mt-5 text-xs sm:text-base leading-relaxed text-[#A1A1AA] font-medium max-w-xl">
                    Founded by AV engineers, MIEUX DISPLAY has delivered over 500 projects for enterprises, campuses and government bodies across India.
                  </p>
                </Reveal>
              </div>

              {/* Right Column: Active Stage Technical Card (5 cols) */}
              <div className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <div className="rounded-[22px] border border-[#27272A] bg-[#151518]/90 backdrop-blur-md p-6 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3 border-b border-[#27272A] pb-3">
                      <span className="text-xs font-mono font-extrabold text-[#FF7A00]">
                        STAGE {activeStage.num}
                      </span>
                      <span className="rounded-full bg-[#9B1B9E]/20 border border-[#9B1B9E]/40 px-3 py-0.5 text-[10px] font-bold text-[#9B1B9E]">
                        {activeStage.label}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {activeStage.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-medium">
                      {activeStage.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] font-medium text-[#71717A]">
                      <span>Click or hover nodes below</span>
                      <span className="text-white font-semibold">Active: {activeStage.label}</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Middle Row: Engineering System Architecture Path Bar */}
          <div className="my-8 pt-6">
            <div className="relative">
              {/* Connecting Path Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-[#27272A] z-0 hidden lg:block" />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
                {lifecycleNodes.map((node, idx) => {
                  const isActive = activeNodeIndex === idx;
                  return (
                    <button
                      key={node.num}
                      onMouseEnter={() => setActiveNodeIndex(idx)}
                      onClick={() => setActiveNodeIndex(idx)}
                      className={`group relative flex flex-col justify-between rounded-xl border p-3.5 text-left transition-all duration-300 ${
                        isActive
                          ? "border-[#9B1B9E] bg-[#151518] text-white shadow-xl ring-2 ring-[#9B1B9E]/40 scale-[1.02]"
                          : "border-[#27272A] bg-[#0D0D0F]/90 text-[#A1A1AA] hover:border-[#3F3F46] hover:bg-[#151518] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-mono font-bold ${isActive ? "text-[#FF7A00]" : "text-[#71717A]"}`}>
                          {node.num}
                        </span>
                        <div className={`h-3 w-3 rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-[#9B1B9E] bg-[#9B1B9E] ring-4 ring-[#9B1B9E]/30"
                            : "border-[#3F3F46] bg-[#050505] group-hover:border-[#FF7A00]"
                        }`} />
                      </div>

                      <span className="font-display text-xs font-extrabold tracking-wider text-white">
                        {node.label}
                      </span>

                      {isActive && (
                        <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#9B1B9E] rounded-full shadow-[0_0_10px_#9B1B9E]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Row: Clean Floating Credibility Data Row */}
          <div className="border-t border-[#27272A] pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#27272A] text-center">
              <div className="pt-2 sm:pt-0">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <Counter to={500} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                  PROJECTS DELIVERED
                </p>
              </div>

              <div className="pt-2 sm:pt-0 sm:pl-3">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <Counter to={100} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                  ENTERPRISE CLIENTS
                </p>
              </div>

              <div className="pt-2 sm:pt-0 lg:pl-3">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <Counter to={25} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                  CITIES COVERED
                </p>
              </div>

              <div className="pt-2 sm:pt-0 lg:pl-3">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <Counter to={10} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                  YEARS EXPERIENCE
                </p>
              </div>

              <div className="pt-2 sm:pt-0 lg:pl-3">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  24/7
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                  ENTERPRISE SUPPORT
                </p>
              </div>
            </div>

            {/* Section Transition */}
            <div className="mt-6 flex items-center justify-between text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#71717A] border-t border-[#27272A]/60 pt-4">
              <span>MIEUX DISPLAY LIFECYCLE</span>
              <span className="text-[#FF7A00]">ENGINEERED FOR THE LONG RUN.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OUR CORE PHILOSOPHY (LIGHT bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          {/* Main Editorial Engineering Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Canvas (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal x={-20}>
                <div className="relative overflow-hidden rounded-[24px] border border-[#E4E4E7] bg-white shadow-lg aspect-[16/10]">
                  <img
                    src={img.corporate}
                    alt="MIEUX engineering team reviewing video wall deployment"
                    loading="lazy"
                    className="h-full w-full object-cover brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* Right Structured Bento Cards Content (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <Reveal x={20}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                  OUR CORE PHILOSOPHY
                </span>
                <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] font-display leading-tight">
                  Engineering, <span className="text-[#9B1B9E]">not reselling</span>
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#52525B] font-medium">
                  We started because too many display projects were sold on spec sheets and abandoned at delivery. MIEUX owns the entire chain — design, structure, power, processing, content and service — so the display you sign off on still performs three years later.
                </p>

                {/* Structured Bento Feature Cards */}
                <div className="mt-5 space-y-3 border-t border-[#E4E4E7] pt-4">
                  {pillars.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-xl border border-[#E4E4E7] bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#9B1B9E] hover:shadow-md"
                    >
                      <h3 className="font-display text-sm font-bold text-[#0D0D0F] flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#9B1B9E]" />
                        {p.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#52525B] leading-relaxed font-medium">{p.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Clean Horizontal Stat Band */}
          <div className="mt-14 pt-10 border-t border-[#E4E4E7]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E4E4E7] text-center">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06} className="pt-4 lg:pt-0 first:pt-0">
                  <div className="px-4">
                    <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#0D0D0F] tracking-tight">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── 3. OUR PRESENCE ACROSS INDIA (DARK SECTION bg-[#050505]) ─── */}
      <IndiaBranchMap isLightSection={false} />

      {/* ─── 4. VISION & MISSION SECTION (LIGHT SECTION bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              OUR PURPOSE
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Vision & <span className="text-[#9B1B9E]">Mission</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl mx-auto font-medium">
              Guiding principles driving our engineering standards, customer relationships, and product development.
            </p>
          </div>

          {/* Two Large Editorial Light Cards */}
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Vision Card */}
            <Reveal x={-20}>
              <div className="rounded-[24px] border border-[#E4E4E7] bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#9B1B9E] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                    OUR VISION
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-[#0D0D0F] leading-tight">
                    Empowering Effective Visual Communication
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-[#52525B] leading-relaxed font-medium">
                    “To be a market leader helping the world to communicate, interact, collaborate and share ideas, learnings and offerings effectively through hassle-free, visually appealing platforms using our innovative and right-value technology products.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[#E4E4E7] pt-4 flex items-center gap-2 text-xs font-bold text-[#9B1B9E]">
                  <Sparkles className="h-4 w-4 text-[#9B1B9E]" />
                  <span>Right-Value Technology Products</span>
                </div>
              </div>
            </Reveal>

            {/* Mission Card */}
            <Reveal x={20}>
              <div className="rounded-[24px] border border-[#E4E4E7] bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#9B1B9E] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                    OUR MISSION
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-[#0D0D0F] leading-tight">
                    Delivering Delight Through Competent Expertise
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-[#52525B] leading-relaxed font-medium">
                    “To offer a range of advanced, world-class technology products to our customers to solve problems and deliver delight through a team of qualified and competent professionals.”
                  </p>
                </div>
                <div className="mt-8 border-t border-[#E4E4E7] pt-4 flex items-center gap-2 text-xs font-bold text-[#FF6B00]">
                  <Target className="h-4 w-4 text-[#FF6B00]" />
                  <span>Solving Real-World Display Challenges</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* ─── 5. OUR VALUES SECTION (DARK #050505) ─── */}
      <section className="bg-[#050505] py-14 lg:py-20 text-[#F5F5F5] border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              CORE BELIEFS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Our <span className="text-[#9B1B9E]">Values</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              The fundamental values that define how we build displays, support partners, and conduct business.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesList.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <Reveal key={val.title} delay={idx * 0.05}>
                  <div className="rounded-[20px] border border-[#27272A] bg-[#151518] p-6 h-full flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#9B1B9E] hover:-translate-y-1">
                    <div>
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0D0D0F] border border-[#27272A] text-[#9B1B9E] mb-4">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-medium">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 6. WHY CHOOSE MIEUX? SECTION (LIGHT bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              THE MIEUX ADVANTAGE
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Why Choose <span className="text-[#9B1B9E]">MIEUX?</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl mx-auto font-medium">
              End-to-end capabilities engineered to provide reliable performance and seamless project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoosePoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <Reveal key={pt.title} delay={idx * 0.05}>
                  <div className="rounded-[20px] border border-[#E4E4E7] bg-white p-6.5 flex items-start gap-4 shadow-sm hover:shadow-xl hover:border-[#9B1B9E] transition-all duration-300">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-100 border border-[#E4E4E7] text-[#FF6B00]">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#0D0D0F]">
                        {pt.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#52525B] leading-relaxed font-medium">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 7. OUR JOURNEY SECTION (DARK #050505) ─── */}
      <section className="bg-[#050505] py-14 lg:py-20 text-[#F5F5F5] border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              OUR MILESTONES
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Our <span className="text-[#9B1B9E]">Journey</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              A legacy of continuous innovation, strategic expansion, and trusted engineering partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journeyMilestones.map((ms, idx) => {
              const IconComp = ms.icon;
              return (
                <Reveal key={ms.year} delay={idx * 0.05}>
                  <div className="rounded-[20px] border border-[#27272A] bg-[#151518] p-5.5 h-full flex flex-col justify-between shadow-lg hover:border-[#9B1B9E] transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xl font-extrabold text-[#9B1B9E]">
                          {ms.year}
                        </span>
                        <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#0D0D0F] border border-[#27272A] text-[#FF6B00]">
                          <IconComp className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="font-display text-base font-bold text-white mb-1">
                        {ms.title}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-medium">
                        {ms.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 8. FINAL CTA SECTION (DARK #050505 WITH DISPLAY INSTALLATION CANVAS) ─── */}
      <CtaSection />
    </div>
  );
}

