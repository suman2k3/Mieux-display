import { Reveal, SectionHeading } from "@/components/site/motion-primitives";

export function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Understanding operational objectives, viewing distance requirements, and pixel-pitch needs.",
    },
    {
      number: "02",
      title: "Site Assessment",
      description: "Engineering evaluation of structural weight support, thermal airflow, and electrical supply.",
    },
    {
      number: "03",
      title: "Display Design",
      description: "Custom CAD drawings, module pitch selection, signal flow, and controller specification.",
    },
    {
      number: "04",
      title: "Installation",
      description: "Precision laser bracket alignment, magnetic module snap-in, and 72-hour burn-in testing.",
    },
    {
      number: "05",
      title: "Support",
      description: "Pan-India SLA coverage, spare module buffer inventory, and 24/7 technical hotline.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0D0D0F] text-[#F5F5F5] border-b border-[#27272A] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
            {steps.map((step, idx) => (
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
  );
}
