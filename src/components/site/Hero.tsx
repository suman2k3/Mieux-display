import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { catalogueProducts, type CatalogueProduct } from "@/data/catalogueProducts";
import { Counter } from "./motion-primitives";

// Selected showcase products for the Home Hero Carousel
const heroProducts: CatalogueProduct[] = [
  catalogueProducts.find((p) => p.id === "spectra-s1")!,
  catalogueProducts.find((p) => p.id === "apex-cob")!,
  catalogueProducts.find((p) => p.id === "visionwall-4k")!,
  catalogueProducts.find((p) => p.id === "interactive-pro")!,
  catalogueProducts.find((p) => p.id === "nova-outdoor")!,
  catalogueProducts.find((p) => p.id === "controlview")!,
].filter(Boolean);

export function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + heroProducts.length) % heroProducts.length);
  }, []);

  // Autoplay carousel (always autoslides continuously every 2 seconds)
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroProducts.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const slide = heroProducts[index]!;

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] text-[#F5F5F5] min-h-[calc(100svh-4rem)] flex flex-col justify-between border-b border-[#27272A]">
      {/* ─── FULL-WIDTH ACTIVE PRODUCT BACKGROUND IMAGE WITH CROSSFADE ─── */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.id}
          src={slide.image}
          alt={slide.name}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40 brightness-110 pointer-events-none"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* ─── DARK GRADIENT OVERLAYS FOR CRISP READABILITY & CONTRAST ─── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70 pointer-events-none" />

      {/* ─── MAIN HERO CONTAINER OVER FULL-WIDTH BACKGROUND ─── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full py-16 sm:py-20 lg:py-24 relative z-10 my-auto pb-28 sm:pb-32">
        {/* TOP / CENTER: PRODUCT INFORMATION & PRIMARY CTAS */}
        <div className="max-w-2xl my-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF7A00] backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#9B1B9E]" />
                {slide.category}
              </span>

              <h1 className="mt-3 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-5xl text-[#FFFFFF] drop-shadow-lg tracking-tight font-display">
                <Link
                  to={`/products/${slide.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {slide.name}
                </Link>
              </h1>

              <p className="mt-1.5 text-xs sm:text-sm font-bold text-[#9B1B9E] uppercase tracking-widest">
                {slide.subtitle}
              </p>

              <p className="mt-2.5 max-w-xl text-xs sm:text-sm leading-relaxed text-[#A1A1AA] drop-shadow font-medium line-clamp-2 sm:line-clamp-3">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Primary CTAs */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to={`/products/${slide.slug}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B52CB8]"
            >
              <span>View Product</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518]/90 px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#F5F5F5] backdrop-blur-md transition-all hover:bg-[#1D1D21] hover:border-[#9B1B9E]"
            >
              Request a Quote
            </Link>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="mt-5 flex items-center gap-4">
            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {heroProducts.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 sm:w-9 bg-[#9B1B9E]" : "w-3 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Counter & Arrows */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#A1A1AA] mr-1">
                0{index + 1} / 0{heroProducts.length}
              </span>
              <button
                onClick={() => go(-1)}
                aria-label="Previous product"
                className="grid h-7 w-7 place-items-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next product"
                className="grid h-7 w-7 place-items-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FLOATING HERO STATISTICS OVERLAY (VISIBILITY IN FIRST VIEWPORT) ─── */}
      <div className="absolute bottom-5 sm:bottom-6 lg:bottom-7 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 z-30 pointer-events-none">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center pointer-events-auto">
          <div className="flex flex-col text-left sm:text-center">
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
              <Counter to={500} suffix="+" />
            </span>
            <span className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
              DISPLAY INSTALLATIONS
            </span>
          </div>

          <div className="flex flex-col text-left sm:text-center">
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
              <Counter to={100} suffix="+" />
            </span>
            <span className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
              ENTERPRISE CLIENTS
            </span>
          </div>

          <div className="flex flex-col text-left sm:text-center">
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
              <Counter to={25} suffix="+" />
            </span>
            <span className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
              CITIES SERVED
            </span>
          </div>

          <div className="flex flex-col text-left sm:text-center">
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
              <Counter to={10} suffix="+" />
            </span>
            <span className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
              YEARS EXPERIENCE
            </span>
          </div>

          <div className="flex flex-col text-left sm:text-center col-span-2 sm:col-span-1">
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF6B00] tracking-tight leading-none drop-shadow-md">
              24/7
            </span>
            <span className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
              ENTERPRISE SUPPORT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
