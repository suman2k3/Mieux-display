import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { CtaSection } from "@/components/site/sections-2";
import { solutions } from "@/data/site";

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
    description: "Viewing distance, ambient lighting, room dimensions, and pixel-pitch math.",
  },
  {
    number: "02",
    title: "Display Technology",
    description: "Fine-pitch LED, LCD video walls, IFPD interactive panels, and transparent displays.",
  },
  {
    number: "03",
    title: "Installation & Integration",
    description: "Custom structural brackets, thermal management, power distribution, and cabling.",
  },
  {
    number: "04",
    title: "Long-Term Support",
    description: "Pan-India SLA coverage, spare module buffer inventory, and 24/7 hotline support.",
  },
];

const solutionProcessSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understanding operational objectives, viewing distance requirements, and room workflow.",
  },
  {
    number: "02",
    title: "Specify",
    description: "Engineering evaluation of structural weight support, thermal airflow, and electrical supply.",
  },
  {
    number: "03",
    title: "Design",
    description: "Custom CAD drawings, module pitch selection, signal routing, and controller specification.",
  },
  {
    number: "04",
    title: "Install",
    description: "Precision laser bracket alignment, magnetic module snap-in, and 72-hour burn-in testing.",
  },
  {
    number: "05",
    title: "Support",
    description: "Pan-India SLA coverage, spare module buffer inventory, and 24/7 technical hotline.",
  },
];

export function SolutionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSolutions = solutions.filter((s) => {
    if (activeFilter === "All") return true;
    return s.title.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow="SOLUTIONS"
        title="Sector-specific display engineering"
        subtitle="Explore how MIEUX Display engineers custom visual display solutions tailored for specific industry workflows, security standards, and operational environments."
      />

      {/* MAIN SOLUTIONS GRID SECTION */}
      <section className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 border-b border-[#27272A] relative overflow-hidden">
        {/* Subtle purple radial glow background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.04),transparent)] pointer-events-none"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          {/* INDUSTRY FILTER PILLS */}
          <div className="flex items-center justify-start gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 sm:mb-12">
            {industryFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#9B1B9E] text-white shadow-md scale-[1.02]"
                      : "border border-[#27272A] bg-[#151518] text-[#A1A1AA] hover:border-[#9B1B9E] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* DYNAMIC CARDS GRID (3 per row desktop, 2 tablet, 1 mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredSolutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#27272A] bg-[#151518] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9B1B9E]/60"
                >
                  <div>
                    {/* Consistent Aspect-Ratio Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#0D0D0F] mb-5">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151518]/60 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Sector Category Eyebrow */}
                    <span className="text-xs font-bold uppercase tracking-widest text-[#9B1B9E]">
                      {s.category || s.title} Deployment
                    </span>

                    {/* Card Title */}
                    <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {s.title}
                    </h2>

                    {/* Card Description */}
                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
                      {s.description}
                    </p>

                    {/* Highlights List */}
                    {s.highlights && s.highlights.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-[#27272A] space-y-2">
                        {s.highlights.map((h) => (
                          <div key={h} className="text-xs sm:text-sm font-semibold text-[#A1A1AA] flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#9B1B9E]" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Action CTA */}
                  <div className="mt-6 pt-4 border-t border-[#27272A] flex items-center gap-2 text-xs sm:text-sm font-bold text-[#9B1B9E] group-hover:text-white transition-colors">
                    <span>Explore Solution</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SOLVE SECTION ("Designed Around Your Environment") */}
      <section className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <SectionHeading
            dark
            eyebrow="ENVIRONMENTAL DESIGN"
            title="Designed Around Your Environment"
            subtitle="Every display environment has different requirements. We design the right combination of hardware, content, installation and support around the way your space works."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentFactors.map((factor, idx) => (
              <Reveal key={factor.number} delay={idx * 0.08}>
                <div className="group h-full rounded-[20px] border border-[#27272A] bg-[#151518] p-6 shadow-xl transition-all duration-300 hover:border-[#9B1B9E]/60 hover:-translate-y-1">
                  <div className="h-10 w-10 rounded-xl bg-[#9B1B9E]/20 border border-[#9B1B9E]/40 text-[#9B1B9E] flex items-center justify-center font-display font-black text-sm mb-4">
                    {factor.number}
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION PROCESS SECTION ("From Vision to Installation") */}
      <section className="py-16 lg:py-24 bg-[#0D0D0F] text-[#F5F5F5] border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <SectionHeading
            dark
            eyebrow="PROCESS"
            title="From Vision to Installation"
            subtitle="Our systematic engineering methodology ensures flawless execution from initial drawing to final calibration."
          />

          <div className="mt-12 lg:mt-14 relative">
            {/* Connecting Line (Horizontal on Desktop) */}
            <div
              className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#9B1B9E] via-[#27272A] to-[#FF6B00] z-0"
              aria-hidden
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
              {solutionProcessSteps.map((step, idx) => (
                <Reveal key={step.number} delay={idx * 0.08}>
                  <div className="group flex flex-col items-start lg:items-center text-left lg:text-center rounded-[20px] border border-[#27272A] bg-[#151518] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-[#9B1B9E] hover:-translate-y-1 h-full">
                    <div className="h-14 w-14 rounded-2xl bg-[#9B1B9E] text-white flex items-center justify-center font-display font-black text-xl mb-5 transition-all duration-300 shadow-md shrink-0">
                      {step.number}
                    </div>
                    <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection />
    </>
  );
}
