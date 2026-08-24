import { Reveal } from "@/components/site/motion-primitives";
import { MessageSquare, Layout, Wrench, ShieldCheck, Headphones } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Consultation",
      description: "Understanding your needs and space",
    },
    {
      number: "2",
      icon: Layout,
      title: "Solution Design",
      description: "Tailored solution and planning",
    },
    {
      number: "3",
      icon: Wrench,
      title: "Engineering",
      description: "Precision manufacturing and testing",
    },
    {
      number: "4",
      icon: ShieldCheck,
      title: "Installation",
      description: "Expert installation and integration",
    },
    {
      number: "5",
      icon: Headphones,
      title: "Support & Care",
      description: "24/7 support and maintenance",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F7F7F5] text-[#0D0D0F] border-b border-[#E4E4E7] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
            FROM VISION TO INSTALLATION
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
            Our Proven Process For <span className="text-[#9B1B9E]">Perfect Delivery</span>
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Connecting Process Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-16 right-16 h-0.5 bg-gradient-to-r from-[#9B1B9E]/30 via-[#9B1B9E] to-[#FF6B00] z-0"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <Reveal key={step.number} delay={idx * 0.06}>
                  <div className="flex flex-col items-center text-center group">
                    
                    {/* Top Icon Circle */}
                    <div className="h-20 w-20 rounded-full border-2 border-[#E4E4E7] bg-white text-[#9B1B9E] flex items-center justify-center shadow-md mb-4 group-hover:border-[#9B1B9E] group-hover:scale-105 transition-all duration-300 relative z-10">
                      <IconComp className="h-8 w-8" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="h-7 w-7 rounded-full bg-[#9B1B9E] text-white flex items-center justify-center font-display font-bold text-xs shadow mb-3">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-display font-bold text-[#0D0D0F] mb-1">
                      {step.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-[#52525B] leading-relaxed font-medium max-w-[200px]">
                      {step.description}
                    </p>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
