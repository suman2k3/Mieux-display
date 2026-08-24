import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Download, Eye, FileText } from "lucide-react";
import { Reveal, SectionHeading, Counter } from "./motion-primitives";
import { catalogueProducts } from "@/data/catalogueProducts";

const showcaseProducts = catalogueProducts.map((p) => ({
  slug: p.slug,
  eyebrow: (p.subtitle || p.category).toUpperCase(),
  name: p.name,
  desc: p.description,
  image: p.image,
  specs: p.quickSpecs
    ? (Object.values(p.quickSpecs).filter(Boolean) as string[]).slice(0, 3)
    : ["High Definition", "Commercial Rating", "Enterprise Support"],
}));

export function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#050505] text-[#F5F5F5] py-24 lg:py-32 overflow-hidden border-b border-[#27272A]">
      {/* Subtle purple radial glow background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.06),transparent)] pointer-events-none" 
        aria-hidden 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            dark
            eyebrow="Product Range"
            title="Every display format, one accountable partner"
            subtitle="Ten core display families, each specified, installed and serviced by our own engineering team."
          />

          <div className="flex items-center gap-4">
            <Reveal delay={0.15}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#151518] px-6 py-3 text-xs font-bold text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]/10 hover:shadow-sm"
              >
                View all products <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            {/* Circular Carousel Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous products"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next products"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CAROUSEL */}
      <div 
        ref={scrollRef}
        className="mt-14 w-full overflow-x-auto pb-6 no-scrollbar relative z-10 scroll-smooth"
      >
        <div className="flex w-max gap-6 px-4 sm:px-6 lg:px-12">
          {showcaseProducts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.06 }}
            >
              <Link
                to={`/products/${p.slug}`}
                className="group relative flex flex-col justify-end overflow-hidden rounded-[20px] border border-[#27272A] bg-[#151518] shadow-2xl transition-all duration-400 hover:-translate-y-[5px] hover:border-[#9B1B9E]/50 w-[300px] h-[370px] sm:w-[320px] sm:h-[380px] shrink-0"
              >
                {/* High Quality Display Installation Imagery */}
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Integrated Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" aria-hidden />

                {/* Card Content Integrated at Bottom */}
                <div className="relative z-10 p-6 transition-transform duration-400 group-hover:-translate-y-1">
                  {/* Small Orange Uppercase Eyebrow */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00] block">
                    {p.eyebrow}
                  </span>

                  {/* Product Name */}
                  <h3 className="mt-1.5 font-display text-[21px] font-bold text-white leading-tight group-hover:text-white">
                    {p.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA] line-clamp-2">
                    {p.desc}
                  </p>

                  {/* Subtle Hover Reveal Panel */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-400 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4">
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap items-center gap-1.5 pt-1 mb-3">
                        {p.specs.map((sp) => (
                          <span
                            key={sp}
                            className="rounded-md border border-[#27272A] bg-[#0D0D0F] px-2 py-0.5 text-[10px] font-semibold text-[#A1A1AA] backdrop-blur-sm"
                          >
                            {sp}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E] group-hover:text-white transition-colors">
                        View Product <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionsSection() {
  return (
    <section className="bg-[#050505] text-[#F5F5F5] py-20 lg:py-28 border-b border-[#27272A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Solutions"
          title="Built around how your sector actually works"
          subtitle="From smart classrooms to defence situation rooms, each deployment is designed for its environment, workflow and compliance needs."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/solutions/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#27272A] bg-[#151518] shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9B1B9E]/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#9B1B9E] transition-colors">{s.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[#A1A1AA]">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#9B1B9E] group-hover:text-white transition-colors">
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="bg-[#0D0D0F] text-[#F5F5F5] relative overflow-hidden py-20 lg:py-28 border-b border-[#27272A]">
      <div className="absolute inset-0 grid-glow opacity-30" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal x={-30}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#9B1B9E]/20 blur-3xl" aria-hidden />
            <img
              src={img.indoorLed}
              alt="MIEUX engineers installing a fine-pitch LED wall"
              loading="lazy"
              width={1200}
              height={900}
              className="relative aspect-[4/3] w-full rounded-3xl border border-[#27272A] object-cover"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            dark
            eyebrow="Why MIEUX"
            title="Engineering-led, not box-shifting"
            subtitle="We survey, specify, install, commission and support. One team owns the outcome from first drawing to the last service visit."
          />
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 border border-[#27272A] bg-[#151518]">
                  <p className="font-display text-3xl font-bold text-[#9B1B9E] sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[#A1A1AA]">
                    {s.label}
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

export function FeaturedProducts() {
  const featured = products.slice(0, 6);
  return (
    <section className="bg-[#F5F5F5] text-[#0D0D0F] py-20 lg:py-28 border-b border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Most specified this quarter"
          subtitle="Download a brochure or request pricing directly — our team replies within one business day."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4E4E7] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-[#0D0D0F]">{p.name}</h3>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-[#52525B]">
                    {p.specs.slice(0, 3).map((sp) => (
                      <li key={sp} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B00]" />
                        {sp}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      to={`/products/${p.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3.5 py-2 text-xs font-semibold text-[#0D0D0F] transition-colors hover:bg-[#9B1B9E] hover:text-white"
                    >
                      <Eye className="h-3.5 w-3.5" /> Quick View
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3.5 py-2 text-xs font-semibold text-[#0D0D0F] transition-colors hover:bg-[#9B1B9E] hover:text-white"
                    >
                      <Download className="h-3.5 w-3.5" /> Brochure
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#9B1B9E] px-3.5 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#B52CB8]"
                    >
                      <FileText className="h-3.5 w-3.5" /> Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-[#27272A] bg-[#050505] py-16 text-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A1A1AA]">
          Trusted by 100+ enterprise and government teams
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="grid h-16 w-44 shrink-0 place-items-center rounded-2xl border border-[#27272A] bg-[#151518] font-display text-sm font-bold tracking-[0.18em] text-[#A1A1AA] transition-all duration-300 hover:scale-105 hover:border-[#9B1B9E] hover:text-white hover:bg-[#1D1D21]"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="bg-[#0D0D0F] text-[#F5F5F5] relative overflow-hidden py-20 lg:py-28 border-b border-[#27272A]">
      <div className="absolute inset-0 grid-glow opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Industries"
          title="Versatile solutions for every industry"
          subtitle="Deployments across six core industries, from single boardrooms to multi-city rollouts."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 4) * 0.07}>
              <Link
                to={`/solutions/${ind.slug}`}
                className="group relative block h-72 overflow-hidden rounded-3xl border border-[#27272A]"
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent transition-opacity duration-300 group-hover:from-[#9B1B9E]/70 group-hover:via-[#050505]/60" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{ind.title}</h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read More <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
