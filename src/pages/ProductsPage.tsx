import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Building2,
  GraduationCap,
  Store,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeading, Reveal } from "@/components/site/motion-primitives";
import { img } from "@/data/site";
import {
  catalogueProducts,
  type CatalogueProduct,
} from "@/data/catalogueProducts";

/* Exact Category Filters requested */
const inPageCategories = [
  { label: "All Products", key: "All" },
  { label: "Indoor LED", key: "Indoor LED" },
  { label: "Outdoor LED", key: "Outdoor LED" },
  { label: "IFPD", key: "Interactive Displays" },
  { label: "Kiosk", key: "Commercial Displays" },
  { label: "Standee", key: "Digital Signage" },
  { label: "Signage", key: "Digital Signage" },
  { label: "Digital Signage", key: "Digital Signage" },
  { label: "Video Walls", key: "Video Walls" },
  { label: "Control Room", key: "Control Room" },
  { label: "Other Products", key: "Other Products" },
];

/* Marketing taglines matching requested style */
const getMarketingTagline = (product: CatalogueProduct) => {
  if (product.category === "Indoor LED") return "FINE-PITCH BRILLIANCE FOR INTERIORS";
  if (product.category === "Outdoor LED") return "BUILT FOR SUNLIGHT AND STORMS";
  if (product.category === "Interactive Displays") return "COLLABORATION THAT FEELS NATURAL";
  if (product.category === "Commercial Displays") return "24×7 PROFESSIONAL PANELS";
  if (product.category === "Digital Signage") return "IMPACTFUL DIGITAL POSTERS";
  if (product.category === "Control Room") return "MISSION-CRITICAL 24/7 CANVAS";
  if (product.category === "Video Walls") return "SEAMLESS NARROW BEZEL CANVAS";
  return "ENGINEERED DISPLAY SOLUTIONS";
};

/* Reusable Hero Carousel Data Structure */
interface HeroProductSlide {
  id: string;
  category: string;
  name: string;
  specification: string;
  image: string;
  slug: string;
}

const heroProducts: HeroProductSlide[] = [
  {
    id: "slide-1",
    category: "FINE-PITCH LED",
    name: "MIEUX Spectra S1",
    specification: "P0.9–P1.2 Fine Pitch Display Canvas",
    image: img.indoorLed,
    slug: "spectra-s1",
  },
  {
    id: "slide-2",
    category: "COB LED",
    name: "MIEUX Apex COB",
    specification: "Ultra-fine pitch command center display",
    image: img.controlRoom,
    slug: "apex-cob",
  },
  {
    id: "slide-3",
    category: "INTERACTIVE DISPLAY",
    name: "MIEUX Interactive Pro",
    specification: "4K interactive professional display",
    image: img.heroIfp,
    slug: "interactive-pro",
  },
  {
    id: "slide-4",
    category: "DIGITAL SIGNAGE",
    name: "MIEUX SignaView",
    specification: "Professional commercial signage panel",
    image: img.signage,
    slug: "signaview",
  },
];

export function ProductsPage() {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>("All");
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);
  const [isHeroHovered, setIsHeroHovered] = useState<boolean>(false);

  /* Autoplay hero carousel every 4.5 seconds (paused on hover) */
  useEffect(() => {
    if (isHeroHovered) return;
    const interval = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroProducts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHeroHovered]);

  const currentHeroSlide = heroProducts[activeHeroIndex] || heroProducts[0];

  const nextHeroSlide = () => {
    setActiveHeroIndex((prev) => (prev + 1) % heroProducts.length);
  };

  const prevHeroSlide = () => {
    setActiveHeroIndex((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
  };

  /* Filter products dynamically based on selected category key */
  const filteredProducts = useMemo(() => {
    if (selectedCategoryKey === "All") return catalogueProducts;
    if (selectedCategoryKey === "Other Products") {
      return catalogueProducts.filter(
        (p) =>
          p.category === "Control Room" ||
          p.category === "Creative LED" ||
          p.category === "Video Walls"
      );
    }
    return catalogueProducts.filter((p) => p.category === selectedCategoryKey);
  }, [selectedCategoryKey]);

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      {/* ─────────────────────────────────────────────── */}
      {/* 1. DYNAMIC PRODUCT HERO SHOWCASE                */}
      {/* ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050505] py-12 lg:py-16 border-b border-[#27272A] text-[#F5F5F5]">
        {/* Background ambient radial glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.06),transparent)] pointer-events-none"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Column: Eyebrow + Heading + Subtitle + Buttons (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#151518] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A00] backdrop-blur-md mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  PRODUCT COLLECTION
                </span>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-md">
                  Display Solutions <br />
                  <span className="text-[#A1A1AA]">Built for Every Environment</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl drop-shadow">
                  Explore professional LED displays, interactive panels, digital signage and display solutions engineered for demanding environments.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="#product-catalog"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-7 py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-7 py-3.5 text-xs font-bold text-[#F5F5F5] backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
                  >
                    Request a Quote
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Image Container (5-8% width reduction) + Preview Strip (6 cols) */}
            <div className="lg:col-span-6 relative flex flex-col lg:items-end z-10 hover:z-50">
              <Reveal delay={0.15} className="w-full lg:max-w-[94%] ml-auto">
                <div
                  onMouseEnter={() => setIsHeroHovered(true)}
                  onMouseLeave={() => setIsHeroHovered(false)}
                  className="group relative block aspect-[16/10] w-full cursor-pointer z-10 hover:z-50"
                >
                  {/* BASE CARD CONTAINER (CONTAINER BG HAS TONAL SEPARATION) */}
                  <div className="relative h-[290px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden rounded-[24px] border border-[#27272A] bg-[#171719] shadow-[0_20px_45px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentHeroSlide.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="h-full w-full relative"
                      >
                        <Link to={`/products/${currentHeroSlide.slug}`} className="block h-full w-full">
                          {/* Background Product Photograph */}
                          <img
                            src={currentHeroSlide.image}
                            alt={currentHeroSlide.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] brightness-105"
                          />

                          {/* Transparent Gradient Overlay for Text Readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent" />

                          {/* Bottom Overlay Content */}
                          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex flex-col justify-end z-10">
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
                              {currentHeroSlide.category}
                            </span>
                            <h3 className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-white">
                              {currentHeroSlide.name}
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-[#A1A1AA] font-medium">
                              {currentHeroSlide.specification}
                            </p>

                            <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#9B1B9E]">
                              <span>View Product</span>
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    </AnimatePresence>

                    {/* Previous / Next Arrow Controls */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          prevHeroSlide();
                        }}
                        aria-label="Previous product slide"
                        className="grid h-9 w-9 place-items-center rounded-full border border-[#27272A] bg-[#050505]/80 text-white backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          nextHeroSlide();
                        }}
                        aria-label="Next product slide"
                        className="grid h-9 w-9 place-items-center rounded-full border border-[#27272A] bg-[#050505]/80 text-white backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* FLOATING ENLARGED POP-OUT PREVIEW (POPS OUTSIDE HERO BOUNDARIES ON DESKTOP HOVER, BELOW FIXED HEADER) */}
                  <Link
                    to={`/products/${currentHeroSlide.slug}`}
                    className="hidden lg:block absolute -inset-5 z-30 rounded-[28px] border-2 border-[#9B1B9E] bg-[#171719] shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(155,27,158,0.35)] opacity-0 scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-105 pointer-events-none group-hover:pointer-events-auto overflow-hidden"
                  >
                    <img
                      src={currentHeroSlide.image}
                      alt={currentHeroSlide.name}
                      className="absolute inset-0 h-full w-full object-cover scale-105 brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/98 via-[#050505]/60 to-transparent" />
                    <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
                        {currentHeroSlide.category}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-extrabold text-white">
                        {currentHeroSlide.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#A1A1AA] font-medium">
                        {currentHeroSlide.specification}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#9B1B9E] border-t border-[#27272A] pt-3.5">
                        <span>View Product</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Progress Indicators & Numeric Counter Directly Below Main Image */}
                <div className="mt-3 flex items-center justify-between px-1 text-xs text-[#A1A1AA] font-medium">
                  <div className="flex items-center gap-2">
                    {heroProducts.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveHeroIndex(idx);
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === activeHeroIndex
                            ? "w-7 bg-[#9B1B9E]"
                            : "w-2 bg-[#27272A] hover:bg-[#A1A1AA]"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="font-mono text-xs font-bold text-[#A1A1AA]">
                    0{activeHeroIndex + 1} / 0{heroProducts.length}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* ─────────────────────────────────────────────── */}
      {/* 2. IN-PAGE PRODUCT CATEGORY NAVIGATION          */}
      {/* (HIGHEST Z-INDEX WITHIN PAGE CONTENT - Z-50)   */}
      {/* ─────────────────────────────────────────────── */}
      <section
        id="product-catalog"
        className="sticky top-[96px] sm:top-[100px] z-50 border-b border-[#27272A] bg-[#050505]/95 backdrop-blur-md py-4 shadow-2xl text-[#F5F5F5]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {inPageCategories.map((cat) => {
              const isActive = selectedCategoryKey === cat.key;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategoryKey(cat.key)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#9B1B9E] text-white shadow-md scale-[1.02]"
                      : "border border-[#27272A] bg-[#151518] text-[#A1A1AA] hover:border-[#9B1B9E] hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 3. DARK PRODUCT SHOWCASE HEADING               */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-[#050505] pt-16 pb-6 text-[#F5F5F5] border-b border-[#27272A] relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="PRODUCT SHOWCASE"
            title="Every display format, one accountable partner."
            subtitle="Explore MIEUX's display technologies across indoor, outdoor, interactive and commercial environments."
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 4. IMAGE-LED PRODUCT CATALOG GRID               */}
      {/* (HOVER Z-30, POP-OUT ANCHORED AT TOP-0)         */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-[#050505] pt-8 sm:pt-12 pb-16 lg:pb-24 text-[#F5F5F5] border-b border-[#27272A] relative z-10 overflow-visible">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 overflow-visible">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => {
                const tagline = getMarketingTagline(p);
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.04 }}
                    className="relative z-10 hover:z-30"
                  >
                    <Link
                      to={`/products/${p.slug}`}
                      className="group relative block aspect-[4/5] w-full cursor-pointer"
                    >
                      {/* BASE CARD */}
                      <div className="relative flex flex-col justify-end overflow-hidden rounded-[24px] border border-[#27272A] bg-[#171719] shadow-[0_15px_35px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 group-hover:border-[#9B1B9E] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(155,27,158,0.3)] h-full w-full">
                        {/* Full Portrait Background Image */}
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04] brightness-105"
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Text Overlay Positioned at Bottom of Image */}
                        <div className="relative z-10 p-6 flex flex-col justify-end">
                          {/* Eyebrow Tagline */}
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF7A00] leading-snug">
                            {tagline}
                          </span>

                          {/* Product / Category Title */}
                          <h3 className="mt-1.5 font-display text-lg sm:text-xl font-bold text-white leading-tight">
                            {p.name}
                          </h3>

                          {/* Short Description */}
                          <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                            {p.description}
                          </p>

                          {/* View Product CTA Link */}
                          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E] border-t border-[#27272A] pt-3">
                            <span>View Product</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* FLOATING POP-OUT PREVIEW (POPS OUTSIDE CARD BOUNDARIES ON DESKTOP HOVER, ANCHORED AT TOP-0 UNDER CATEGORY FILTER Z-50) */}
                      <div className="hidden lg:block absolute -inset-x-3.5 -bottom-4 top-0 z-30 rounded-[28px] border-2 border-[#9B1B9E] bg-[#171719] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(155,27,158,0.35)] opacity-0 scale-95 origin-top transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-[1.04] pointer-events-none overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="absolute inset-0 h-full w-full object-cover scale-105 brightness-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/98 via-[#050505]/50 to-transparent" />
                        <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                            {tagline}
                          </span>
                          <h3 className="mt-1.5 font-display text-xl font-extrabold text-white">
                            {p.name}
                          </h3>
                          <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                            {p.description}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#9B1B9E] border-t border-[#27272A] pt-3">
                            <span>View Product</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 5. EDITORIAL FEATURE SECTION (DARK CHARCOAL)    */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0F] py-24 lg:py-32 text-[#F5F5F5] border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Installation Image */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-[#27272A] shadow-2xl aspect-[4/3] bg-[#151518]">
                  <img
                    src={img.indoorLed}
                    alt="MIEUX Display Installation Environment"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-transparent to-transparent opacity-80" />
                </div>
              </Reveal>
            </div>

            {/* Right: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                  ARCHITECTURAL ADAPTABILITY
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Designed for Every Environment
                </h2>
                <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
                  Every MIEUX display series is purpose-engineered to meet environmental ratings, thermal dissipation needs, optical clarity targets, and operational duty cycles.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#27272A] pt-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Indoor Fine-Pitch</h4>
                      <p className="text-xs text-[#71717A] mt-0.5">High grey-scale boardrooms & auditoriums.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Store className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Outdoor All-Weather</h4>
                      <p className="text-xs text-[#71717A] mt-0.5">8000 Nits IP65 billboards & facades.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Interactive IFPD</h4>
                      <p className="text-xs text-[#71717A] mt-0.5">4K 40-point multi-touch collaboration.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">24/7 Commercial</h4>
                      <p className="text-xs text-[#71717A] mt-0.5">Command center NOC/SOC redundancy.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 6. DARK HIGH-IMPACT CTA SECTION                */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-[#050505] py-24 text-[#F5F5F5] border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#FF6B00]">
              CONSULTATION & SPECIFICATION
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Ready to Transform Your Display Experience?
            </h2>
            <p className="mt-4 text-base text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
              Share your space, budget and timeline. We'll help recommend the right display solution.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-8 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
              >
                Talk to an Expert
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
