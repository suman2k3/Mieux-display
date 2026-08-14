import { img } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  // DEMO DATA — Replace with actual case study content
  const caseStudies = [
    {
      id: 1,
      title: "Transforming the National Command Center",
      industry: "Defense",
      excerpt: "How a custom curved active LED video wall enhanced real-time decision-making for national security operations.",
      image: img.controlRoom || "",
      large: true,
    },
    {
      id: 2,
      title: "Next-Gen Corporate Boardroom",
      industry: "Corporate",
      excerpt: "Seamless integration of interactive displays for a Fortune 500 company's headquarters.",
      image: img.corporate || "",
      large: false,
    },
    {
      id: 3,
      title: "Modernizing Medical Education",
      industry: "Healthcare",
      excerpt: "High-resolution displays deployed across 50 lecture halls to support detailed medical imaging analysis.",
      image: img.education || "",
      large: false,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#050505] text-white border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          dark
          eyebrow="Case Studies"
          title="Engineering Excellence in Action"
          subtitle="Deep dives into our most complex and impactful deployments."
          className="mb-12 lg:mb-16 text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Card */}
          <Reveal className="lg:col-span-2">
            <div className="group rounded-[20px] border border-white/10 bg-[#0B1F35] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full transition-all duration-300 hover:border-[#1268FF]/50 hover:-translate-y-1">
              <div className="md:w-1/2 relative overflow-hidden aspect-video md:aspect-auto md:h-full min-h-[300px]">
                <img
                  src={caseStudies[0].image}
                  alt={caseStudies[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35] via-transparent to-transparent opacity-80" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-slate-200 border border-white/15 w-fit mb-4">
                  {caseStudies[0].industry}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-[#1268FF] transition-colors leading-tight">
                  {caseStudies[0].title}
                </h3>
                <p className="text-slate-300 mb-8 text-base leading-relaxed">
                  {caseStudies[0].excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-bold text-[#1268FF] hover:text-white transition-colors"
                  >
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Smaller Cards */}
          {caseStudies.slice(1).map((study, idx) => (
            <Reveal key={study.id} delay={0.1 * (idx + 1)}>
              <div className="group rounded-[20px] border border-white/10 bg-[#0B1F35] overflow-hidden shadow-2xl flex flex-col h-full transition-all duration-300 hover:border-[#1268FF]/50 hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F35] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-slate-200 border border-white/15 w-fit mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#1268FF] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-slate-300 mb-6 text-xs leading-relaxed flex-grow">
                    {study.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm font-bold text-[#1268FF] hover:text-white transition-colors"
                    >
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
