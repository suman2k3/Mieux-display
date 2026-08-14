import { Reveal, SectionHeading, Counter } from "@/components/site/motion-primitives";
import { img, stats } from "@/data/site";
import { CheckCircle2 } from "lucide-react";

export function MieuxAdvantage() {
  const proofPoints = [
    {
      title: "Engineering-Led Specification",
      desc: "Pixel-pitch math, viewing distance calculation, and site power assessment before any hardware recommendation.",
    },
    {
      title: "End-to-End Delivery",
      desc: "Single-point ownership from structural bracket drawings to software configuration and final calibration.",
    },
    {
      title: "Professional Installation",
      desc: "Certified installation teams with laser alignment tools and rigorous structural safety standards.",
    },
    {
      title: "24/7 After-Sales Support",
      desc: "Pan-India SLA coverage with spare module inventory, cloud remote diagnostics, and on-site support.",
    },
  ];

  return (
    <section className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 relative overflow-hidden border-b border-[#27272A]">
      <div className="absolute inset-0 grid-glow opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          {/* Left: Large Installation Photograph (6 cols) */}
          <div className="lg:col-span-6 relative">
            <Reveal x={-30}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-[#9B1B9E]/15 blur-2xl" aria-hidden />
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.1] w-full overflow-hidden rounded-[22px] border border-[#27272A] shadow-2xl bg-[#151518]">
                  <img
                    src={img.indoorLed}
                    alt="MIEUX engineers installing a fine-pitch LED display wall"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Headline + Supporting Copy + 4 Clean Proof Points List */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              dark
              eyebrow="MIEUX ADVANTAGE"
              title="Engineering-led. Not box-shifting."
              subtitle="We survey, specify, install, commission and support. One engineering team owns the outcome from first drawing to last service visit."
            />

            {/* 4 Proof Points List (Clean Typography, NO Card Boxes) */}
            <div className="space-y-4 pt-2 border-t border-[#27272A]">
              {proofPoints.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="font-display text-base sm:text-lg font-bold text-white">
                        {p.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Compact Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#27272A] pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl sm:text-3xl font-black text-[#9B1B9E] tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
