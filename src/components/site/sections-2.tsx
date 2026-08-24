import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star, X, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "./motion-primitives";
import { company, galleryFilters, galleryItems, testimonials } from "@/data/site";

export function GallerySection({ compact = true }: { compact?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[number] | null>(null);
  const items = galleryItems.filter((g) => filter === "All" || g.category === filter);

  return (
    <section className="bg-[#050505] py-24 lg:py-32 text-[#F5F5F5] border-b border-[#27272A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="PROJECT GALLERY"
          title="Recent Installations"
          subtitle={compact ? "A selection of walls, panels and signage networks commissioned by our team." : undefined}
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                filter === f
                  ? "bg-[#9B1B9E] text-white shadow-md"
                  : "border border-[#27272A] bg-[#151518] text-[#A1A1AA] hover:border-[#9B1B9E] hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {items.map((g) => (
              <motion.button
                layout
                key={g.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightbox(g)}
                className="group mb-5 block w-full overflow-hidden rounded-[20px] border border-[#27272A] text-left shadow-soft bg-[#151518]"
              >
                <div className={`overflow-hidden ${g.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 bg-[#151518] px-5 py-4 border-t border-[#27272A]">
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-semibold text-white">{g.title}</p>
                    <p className="text-xs text-[#A1A1AA]">{g.category}</p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-[#9B1B9E]">View</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#27272A] bg-[#151518]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full object-contain" />
              <div className="bg-[#0D0D0F] px-6 py-4 text-white">
                <p className="font-display text-base font-semibold">{lightbox.title}</p>
                <p className="text-xs text-[#A1A1AA]">{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-black/70 text-white hover:bg-black"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[#0D0D0F] text-[#F5F5F5] relative overflow-hidden py-24 lg:py-32 border-b border-[#27272A]">
      <div className="absolute inset-0 grid-glow opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading dark eyebrow="TESTIMONIALS" title="What our clients say" />
        <div className="mt-12 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-8 sm:p-12 border border-[#27272A] bg-[#151518]"
            >
              <div className="flex gap-1 text-[#FF6B00]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">
                “{testimonials[index]!.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#9B1B9E] font-display text-sm font-bold text-white shadow-md">
                  {testimonials[index]!.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-semibold text-white">{testimonials[index]!.name}</span>
                  <span className="block truncate text-sm text-[#A1A1AA]">{testimonials[index]!.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-[#FF6B00]" : "w-4 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] py-16 lg:py-24 text-[#F5F5F5] border-b border-[#27272A]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTA Buttons (6 cols) */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl font-display leading-[1.15]">
                Ready to Transform Your <span className="text-[#9B1B9E]">Display Experience?</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A1A1AA] font-medium max-w-xl">
                Let's discuss your requirements and create a solution that makes an impact.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#9B1B9E] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B52CB8]"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-white/10"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Futuristic Display Canvas Image (6 cols — Matching Reference Mockup) */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-[26px] border border-[#27272A] bg-[#151518] shadow-2xl aspect-[16/10]">
                <img
                  src={company.imgHero || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"}
                  alt="Futuristic display technology canvas"
                  className="h-full w-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
