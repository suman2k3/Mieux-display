import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/site/motion-primitives";
import { clients, testimonials } from "@/data/site";
import makeInIndiaImg from "@/assets/make-in-india-logo.png";

export function TrustCredibility() {
  const [index, setIndex] = useState(0);

  // Triple duplicate for 100% seamless infinite right-to-left marquee loop
  const marqueeRow = [...clients, ...clients, ...clients];

  const count = testimonials.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  // Autoplay testimonial carousel every 5 seconds
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  // Index helpers for 3-card desktop layout
  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  return (
    <section className="bg-[#F5F5F5] text-[#0D0D0F] py-10 sm:py-12 lg:py-14 border-b border-[#E4E4E7] relative overflow-hidden">
      
      {/* 1. HEADING WITH COMPACT VERTICAL SPACING */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center mb-6 sm:mb-7">
        <SectionHeading
          eyebrow="TRUST & CREDIBILITY"
          title="Trusted by Businesses Across India"
          subtitle="Deployments commissioned for India's leading corporate, government, education, and defence organizations."
        />
      </div>

      {/* 2. BRAND LOGOS — FULL-WIDTH EDGE-TO-EDGE CONTINUOUS RIGHT-TO-LEFT MARQUEE */}
      <div className="w-full mb-8 sm:mb-10 overflow-hidden">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
          <div className="flex w-max animate-marquee gap-3.5 hover:[animation-play-state:paused]">
            {marqueeRow.map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="grid h-12 sm:h-13 w-38 sm:w-44 shrink-0 place-items-center rounded-xl border border-[#E4E4E7] bg-white font-display text-xs sm:text-sm font-bold tracking-[0.16em] text-[#0D0D0F] shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#9B1B9E] hover:text-[#9B1B9E] cursor-default"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. TESTIMONIALS — SLIDING CARDS CAROUSEL (FULL WIDTH 3-CARD BALANCED LAYOUT) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-7">
        <div className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden py-2">
          
          {/* PREVIOUS CARD PEEK (DESKTOP/TABLET) */}
          <div 
            onClick={prev}
            className="hidden md:block w-72 sm:w-80 lg:w-96 shrink-0 rounded-2xl border border-[#E4E4E7] bg-white/70 p-5 lg:p-6 shadow-sm opacity-50 scale-95 hover:opacity-80 transition-all duration-300 cursor-pointer select-none"
          >
            <div className="flex items-center gap-1 text-[#FF6B00] mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-[#52525B] line-clamp-2 italic font-medium">
              “{testimonials[prevIndex]!.quote}”
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-[#E4E4E7] pt-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#9B1B9E]/80 text-xs font-bold text-white">
                {testimonials[prevIndex]!.initials}
              </span>
              <div className="min-w-0">
                <span className="block truncate text-xs font-bold text-[#0D0D0F]">
                  {testimonials[prevIndex]!.name}
                </span>
                <span className="block truncate text-[11px] text-[#52525B]">
                  {testimonials[prevIndex]!.role}
                </span>
              </div>
            </div>
          </div>

          {/* ACTIVE MAIN TESTIMONIAL CARD */}
          <div className="w-full max-w-[620px] lg:max-w-[700px] shrink-0">
            <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6 sm:p-8 lg:p-9 shadow-lg relative transition-all duration-300">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#FF6B00]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-7 w-7 sm:h-8 sm:w-8 text-[#E4E4E7]" />
                  </div>

                  <blockquote className="mt-4 font-display text-sm sm:text-base lg:text-lg leading-relaxed text-[#0D0D0F] italic font-medium">
                    “{testimonials[index]!.quote}”
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3.5 border-t border-[#E4E4E7] pt-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#9B1B9E] font-display text-xs font-bold text-white shadow-sm">
                      {testimonials[index]!.initials}
                    </span>
                    <div className="min-w-0">
                      <span className="block truncate text-sm sm:text-base font-bold text-[#0D0D0F]">
                        {testimonials[index]!.name}
                      </span>
                      <span className="block truncate text-xs text-[#52525B] font-medium">
                        {testimonials[index]!.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* NEXT CARD PEEK (DESKTOP/TABLET) */}
          <div 
            onClick={next}
            className="hidden md:block w-72 sm:w-80 lg:w-96 shrink-0 rounded-2xl border border-[#E4E4E7] bg-white/70 p-5 lg:p-6 shadow-sm opacity-50 scale-95 hover:opacity-80 transition-all duration-300 cursor-pointer select-none"
          >
            <div className="flex items-center gap-1 text-[#FF6B00] mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-[#52525B] line-clamp-2 italic font-medium">
              “{testimonials[nextIndex]!.quote}”
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-[#E4E4E7] pt-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#9B1B9E]/80 text-xs font-bold text-white">
                {testimonials[nextIndex]!.initials}
              </span>
              <div className="min-w-0">
                <span className="block truncate text-xs font-bold text-[#0D0D0F]">
                  {testimonials[nextIndex]!.name}
                </span>
                <span className="block truncate text-[11px] text-[#52525B]">
                  {testimonials[nextIndex]!.role}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* CAROUSEL SUBTLE CONTROLS (ARROWS + DOTS) */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid h-8 w-8 place-items-center rounded-lg border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-colors hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-[#FF6B00]" : "w-2.5 bg-[#E4E4E7] hover:bg-[#A1A1AA]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-8 w-8 place-items-center rounded-lg border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-colors hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 4. COMPACT TRUST BADGES ROW (BALANCED WIDE ROW ON DESKTOP) */}
      <div className="mx-auto max-w-4xl lg:max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {/* Make in India Badge */}
        <div className="flex-1 rounded-xl border border-[#E4E4E7] bg-white px-5 py-3.5 flex items-center gap-3.5 shadow-sm w-full sm:w-auto">
          <img
            src={makeInIndiaImg}
            alt="Make in India"
            className="h-8 sm:h-9 w-auto object-contain shrink-0"
          />
          <div>
            <h4 className="text-xs sm:text-sm font-display font-bold text-[#0D0D0F]">Proudly Made in India</h4>
            <p className="text-[#52525B] text-[11px] sm:text-xs font-medium">
              Indigenous display assembly & engineering self-reliance.
            </p>
          </div>
        </div>

        {/* GeM Registered Badge */}
        <div className="flex-1 rounded-xl border border-[#E4E4E7] bg-white px-5 py-3.5 flex items-center gap-3.5 shadow-sm w-full sm:w-auto">
          <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-[#0D0D0F] text-white flex items-center justify-center font-display font-black text-xs sm:text-sm">
            GeM
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-display font-bold text-[#0D0D0F]">Registered on GeM</h4>
            <p className="text-[#52525B] text-[11px] sm:text-xs font-medium">
              Official verified vendor on Government e Marketplace.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
