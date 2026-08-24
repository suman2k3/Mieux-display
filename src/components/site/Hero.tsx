import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Tv, Users, MapPin, Award, Headphones } from "lucide-react";
import { catalogueProducts, type CatalogueProduct } from "@/data/catalogueProducts";
import { Counter } from "./motion-primitives";

// All original products for the Home Hero Carousel
const heroProducts: CatalogueProduct[] = catalogueProducts;

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
    <section className="relative isolate overflow-hidden bg-[#050505] text-[#F5F5F5] min-h-[700px] sm:min-h-[calc(100svh-4rem)] flex flex-col justify-between border-b border-[#27272A] w-full max-w-full">
      {/* ─── FAINT TECHNICAL DOT PATTERN ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(#9B1B9E_0.85px,transparent_0.85px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none z-0" />

      {/* ─── SUBTLE AMBIENT PURPLE RADIAL GLOW BEHIND PRODUCT SHOWCASE ─── */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(155,27,158,0.22)_0%,rgba(155,27,158,0.05)_55%,transparent_75%)] blur-3xl pointer-events-none z-0" />

      {/* ─── SUBTLE GEOMETRIC HALO RING ─── */}
      <div aria-hidden className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] lg:w-[540px] h-[380px] sm:h-[480px] lg:h-[540px] rounded-full border border-[#9B1B9E]/20 pointer-events-none z-0" />

      {/* ─── MAIN HERO CONTAINER ─── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full py-8 sm:py-12 lg:py-14 relative z-10 my-auto pb-6 sm:pb-28 lg:pb-36 flex-1 flex flex-col justify-between">
        {/* TOP / CENTER: 2-COLUMN SPLIT-SCREEN (LEFT 45% TEXT + RIGHT 55% LARGE PRODUCT SHOWCASE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-2 sm:pt-0">
          
          {/* LEFT COLUMN: PRODUCT INFORMATION & PRIMARY CTAS (5 cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* 1. Category Eyebrow */}
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF7A00] backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#9B1B9E]" />
                  {slide.category}
                </span>

                {/* 2. Product Name */}
                <h1 className="mt-3 text-[32px] leading-[1.06] sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] drop-shadow-lg tracking-tight font-display">
                  <Link
                    to={`/products/${slide.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {slide.name}
                  </Link>
                </h1>

                {/* 3. Subtitle / Category */}
                <p className="mt-1.5 text-xs sm:text-sm font-extrabold text-[#9B1B9E] uppercase tracking-widest">
                  {slide.subtitle}
                </p>

                {/* 4. Short Description */}
                <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-[#A1A1AA] font-medium line-clamp-3">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* 5. Primary CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to={`/products/${slide.slug}`}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B52CB8]"
              >
                <span>View Product</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#27272A] bg-[#151518]/90 px-6 py-3 text-xs sm:text-sm font-semibold text-[#F5F5F5] backdrop-blur-md transition-all hover:bg-[#1D1D21] hover:border-[#9B1B9E]"
              >
                Request a Quote
              </Link>
            </div>

            {/* Desktop Only Carousel Controls */}
            <div className="hidden lg:flex mt-8 items-center gap-4">
              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {heroProducts.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-7 bg-[#9B1B9E]" : "w-3 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Counter & Arrows */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#A1A1AA] mr-1">
                  {String(index + 1).padStart(2, "0")} / {String(heroProducts.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous product"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next product"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PREMIUM UNCONTAINED FLOATING PRODUCT SHOWCASE WITH LIGHT FRAME (7 cols Desktop ~ 55% Width) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-end mt-4 lg:mt-0 relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.95, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -14 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full flex flex-col items-center lg:items-end justify-center"
              >
                {/* ─── MAIN HERO PURE WHITE PRODUCT SHOWCASE ─── */}
                <div className="relative w-full max-w-[460px] xl:max-w-[500px] rounded-2xl sm:rounded-3xl border border-[#E4E4E7] bg-white p-3 sm:p-4 lg:p-5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden group">
                  {/* Subtle Ambient Soft Glow Accent */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[#E4E4E7] pointer-events-none" />
                  <div className="absolute -top-20 -right-20 w-36 h-36 bg-[#9B1B9E]/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-36 h-36 bg-[#9B1B9E]/8 rounded-full blur-2xl pointer-events-none" />

                  {/* 100% CLICKABLE PRODUCT VISUAL AREA */}
                  <Link
                    to={`/products/${slide.slug}`}
                    className="relative block w-full cursor-pointer focus:outline-none"
                    aria-label={`Explore ${slide.name}`}
                  >
                    {/* Pure White Background Asset Framing */}
                    <div className="relative z-10 w-full flex items-center justify-center min-h-[220px] sm:min-h-[270px] lg:min-h-[310px] bg-white rounded-xl p-3 sm:p-4">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="h-auto w-full max-h-[230px] sm:max-h-[280px] lg:max-h-[320px] xl:max-h-[350px] object-contain drop-shadow-md transition-all duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* EXPLORE PRODUCT Option */}
                    <div className="relative z-20 mt-3 pt-3 border-t border-[#E4E4E7] flex items-center justify-between px-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B00]">
                        {slide.badge || slide.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#9B1B9E] transition-all duration-300 group-hover:text-[#B52CB8] group-hover:translate-x-1">
                        EXPLORE PRODUCT <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Only Carousel Navigation Controls (Positioned after Product Visual) */}
        <div className="lg:hidden mt-6 flex items-center justify-between px-2">
          <div className="flex items-center gap-1.5">
            {heroProducts.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#9B1B9E]" : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#A1A1AA] mr-1">
              0{index + 1} / 0{heroProducts.length}
            </span>
            <button
              onClick={() => go(-1)}
              aria-label="Previous product"
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next product"
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ─── DEDICATED MOBILE STATISTICS PANEL (VISIBLE ON <= 768px INSIDE HERO) ─── */}
        <div className="md:hidden mt-6 rounded-[18px] border border-white/12 bg-[#0D0D0F]/90 backdrop-blur-md p-3.5 shadow-2xl z-20">
          <div className="grid grid-cols-2 gap-2.5">
            {/* 1. Installations */}
            <div className="flex flex-col items-center text-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
              <Tv className="h-4 w-4 text-[#9B1B9E] mb-1" />
              <span className="font-display text-2xl font-extrabold text-white leading-none">
                <Counter to={500} suffix="+" />
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[1.2px] text-[#A1A1AA]">
                INSTALLATIONS
              </span>
            </div>

            {/* 2. Clients */}
            <div className="flex flex-col items-center text-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
              <Users className="h-4 w-4 text-[#9B1B9E] mb-1" />
              <span className="font-display text-2xl font-extrabold text-white leading-none">
                <Counter to={100} suffix="+" />
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[1.2px] text-[#A1A1AA]">
                CLIENTS
              </span>
            </div>

            {/* 3. Cities */}
            <div className="flex flex-col items-center text-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
              <MapPin className="h-4 w-4 text-[#9B1B9E] mb-1" />
              <span className="font-display text-2xl font-extrabold text-white leading-none">
                <Counter to={25} suffix="+" />
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[1.2px] text-[#A1A1AA]">
                CITIES
              </span>
            </div>

            {/* 4. Years */}
            <div className="flex flex-col items-center text-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/5">
              <Award className="h-4 w-4 text-[#9B1B9E] mb-1" />
              <span className="font-display text-2xl font-extrabold text-white leading-none">
                <Counter to={10} suffix="+" />
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[1.2px] text-[#A1A1AA]">
                YEARS
              </span>
            </div>

            {/* 5. 24/7 Support */}
            <div className="col-span-2 flex flex-col items-center text-center justify-center p-2.5 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30">
              <div className="flex items-center gap-1.5 text-[#FF6B00] mb-0.5">
                <Headphones className="h-4 w-4" />
                <span className="font-display text-2xl font-extrabold text-[#FF6B00] leading-none">
                  24/7
                </span>
              </div>
              <span className="text-[9.5px] font-bold uppercase tracking-[1.2px] text-[#FF6B00]">
                ENTERPRISE SUPPORT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FLOATING DESKTOP HERO STATISTICS OVERLAY (VISIBLE ONLY ON DESKTOP > 768px) ─── */}
      <div className="hidden md:block absolute bottom-5 sm:bottom-6 lg:bottom-7 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 z-30 pointer-events-none">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 sm:p-5 shadow-2xl pointer-events-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            
            <div className="flex flex-col items-center text-center">
              <Tv className="h-5 w-5 text-[#9B1B9E] mb-1.5" />
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
                <Counter to={500} suffix="+" />
              </span>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
                DISPLAY INSTALLATIONS
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="h-5 w-5 text-[#9B1B9E] mb-1.5" />
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
                <Counter to={100} suffix="+" />
              </span>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
                ENTERPRISE CLIENTS
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <MapPin className="h-5 w-5 text-[#9B1B9E] mb-1.5" />
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
                <Counter to={25} suffix="+" />
              </span>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
                CITIES SERVED
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Award className="h-5 w-5 text-[#9B1B9E] mb-1.5" />
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight leading-none drop-shadow-md">
                <Counter to={10} suffix="+" />
              </span>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
                YEARS EXPERIENCE
              </span>
            </div>

            <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1">
              <Headphones className="h-5 w-5 text-[#FF6B00] mb-1.5" />
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF6B00] tracking-tight leading-none drop-shadow-md">
                24/7
              </span>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
                ENTERPRISE SUPPORT
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
