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
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { CtaSection } from "@/components/site/sections-2";
import { img } from "@/data/site";
import {
  catalogueProducts,
  type CatalogueProduct,
} from "@/data/catalogueProducts";

/* Category Filters */
const inPageCategories = [
  { label: "All Products", key: "All" },
  { label: "Interactive Flat Panel", key: "Interactive Displays" },
  { label: "LED Video Wall", key: "Indoor LED" },
  { label: "Commercial Display", key: "Commercial Displays" },
  { label: "Digital Standee", key: "Digital Signage" },
  { label: "Digital Podium", key: "Interactive Displays" },
  { label: "Digital Kiosk", key: "Commercial Displays" },
  { label: "LCD Video Wall", key: "Video Walls" },
  { label: "PTZ Camera", key: "Interactive Displays" },
  { label: "OPS Module", key: "Interactive Displays" },
  { label: "Shiksha Software", key: "Interactive Displays" },
  { label: "Accessories", key: "Interactive Displays" },
];

/* Marketing taglines */
const getMarketingTagline = (product: CatalogueProduct) => {
  if (product.subtitle) return product.subtitle.toUpperCase();
  if (product.category === "Indoor LED") return "FINE-PITCH BRILLIANCE FOR INTERIORS";
  if (product.category === "Outdoor LED") return "BUILT FOR SUNLIGHT AND STORMS";
  if (product.category === "Interactive Displays") return "TOUCH. TEACH. TRANSFORM.";
  if (product.category === "Commercial Displays") return "ENGAGE SMARTER. DISPLAY BETTER.";
  if (product.category === "Digital Signage") return "IMPACTFUL DIGITAL POSTERS";
  if (product.category === "Control Room") return "MISSION-CRITICAL 24/7 CANVAS";
  if (product.category === "Video Walls") return "SEAMLESS NARROW BEZEL CANVAS";
  return "ENGINEERED DISPLAY SOLUTIONS";
};

/* Hero Carousel Data */
interface HeroProductSlide {
  id: string;
  category: string;
  name: string;
  specification: string;
  image: string;
  slug: string;
}

const heroProducts: HeroProductSlide[] = catalogueProducts.map((p) => ({
  id: p.id,
  category: p.badge || p.category.toUpperCase(),
  name: p.name,
  specification: p.subtitle || p.description,
  image: p.image,
  slug: p.slug,
}));

const solutionProcessSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understanding operational objectives, viewing distance, requirements and workflow.",
  },
  {
    number: "02",
    title: "Specify",
    description: "Engineering evaluation of structural weight, airflow and electrical requirements.",
  },
  {
    number: "03",
    title: "Design",
    description: "Custom CAD drawings, module pitch selection and signal routing.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Professional installation, commissioning and calibration.",
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing maintenance, monitoring and enterprise support.",
  },
];



export function ProductsPage() {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>("All");
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);
  const [isHeroHovered, setIsHeroHovered] = useState<boolean>(false);

  /* Autoplay hero carousel every 4.5 seconds */
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

  /* Filter products dynamically */
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
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen antialiased selection:bg-[#9B1B9E] selection:text-white">
      {/* ─────────────────────────────────────────────── */}
      {/* 1. HERO SHOWCASE SECTION (DARK #050505)        */}
      {/* ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050505] py-10 sm:py-14 lg:py-20 border-b border-[#27272A] text-[#F5F5F5]">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.08),transparent)] pointer-events-none"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center">
            {/* Left Column (6 cols on desktop, full width on mobile) */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#151518] px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A00] backdrop-blur-md mb-4">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  PRODUCT COLLECTION
                </span>

                <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Display Solutions <br className="hidden xs:inline" />
                  <span className="text-[#A1A1AA]">Built for Every Environment</span>
                </h1>

                <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#A1A1AA] leading-relaxed max-w-xl font-medium">
                  Explore professional LED displays, interactive panels, digital signage and display solutions engineered for demanding environments.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4">
                  <a
                    href="#product-catalog"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#B52CB8] hover:-translate-y-0.5 min-h-[44px]"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-[#F5F5F5] backdrop-blur transition-all duration-300 hover:border-[#9B1B9E] hover:bg-[#1D1D21] min-h-[44px]"
                  >
                    <span>Request a Quote</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Image Container (6 cols on desktop) */}
            <div className="lg:col-span-6 relative flex flex-col lg:items-end z-10 hover:z-50">
              <Reveal delay={0.15} className="w-full lg:max-w-[96%] xl:max-w-[92%] ml-auto">
                <div
                  onMouseEnter={() => setIsHeroHovered(true)}
                  onMouseLeave={() => setIsHeroHovered(false)}
                  className="group relative block aspect-[16/10] w-full cursor-pointer z-10 hover:z-50"
                >
                  <div className="relative h-[260px] xs:h-[300px] sm:h-[350px] lg:h-[390px] 2xl:h-[430px] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E4E4E7] bg-white shadow-2xl p-4 sm:p-6 flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentHeroSlide.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="h-full w-full relative flex flex-col justify-between"
                      >
                        <Link to={`/products/${currentHeroSlide.slug}`} className="block h-full w-full relative group/img flex flex-col justify-between p-1">
                          <div className="h-[170px] xs:h-[200px] sm:h-[250px] lg:h-[280px] 2xl:h-[320px] w-full flex items-center justify-center bg-white overflow-hidden rounded-xl">
                            <img
                              src={currentHeroSlide.image}
                              alt={currentHeroSlide.name}
                              className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover/img:scale-[1.03]"
                            />
                          </div>
                          <div className="mt-2 pt-2 border-t border-[#E4E4E7] flex items-center justify-between">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B00] truncate max-w-[55%]">
                              {currentHeroSlide.category}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E] group-hover/img:text-[#B52CB8] shrink-0">
                              <span>View Product</span>
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    </AnimatePresence>

                    {/* Arrow Controls */}
                    <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          prevHeroSlide();
                        }}
                        aria-label="Previous product slide"
                        className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E] hover:text-white cursor-pointer"
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
                        className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E] hover:text-white cursor-pointer"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="mt-3 flex items-center justify-between px-1 text-xs text-[#A1A1AA] font-medium">
                  <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-[75%] sm:max-w-[80%] no-scrollbar">
                    {heroProducts.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveHeroIndex(idx);
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 shrink-0 cursor-pointer ${
                          idx === activeHeroIndex
                            ? "w-6 sm:w-7 bg-[#9B1B9E]"
                            : "w-2 bg-[#27272A] hover:bg-[#A1A1AA]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#A1A1AA] shrink-0">
                    {String(activeHeroIndex + 1).padStart(2, "0")} / {String(heroProducts.length).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 2. PRODUCT SHOWCASE (LIGHT SECTION bg-[#F7F7F5]) */}
      {/* ─────────────────────────────────────────────── */}
      <section id="product-catalog" className="bg-[#F7F7F5] text-[#0D0D0F] py-12 sm:py-16 lg:py-20 border-b border-[#E4E4E7] relative z-10">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                PRODUCT CATALOG
              </span>
              <h2 className="mt-2 text-2xl xs:text-3xl font-extrabold sm:text-4xl lg:text-5xl text-[#0D0D0F] tracking-tight font-display">
                Every display format, <span className="text-[#9B1B9E]">one accountable partner.</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl font-medium">
                Explore MIEUX's display technologies across indoor, outdoor, interactive and commercial environments.
              </p>
            </div>
          </div>

          {/* Restyled Filter Pills for Light Background */}
          <div className="flex items-center justify-start gap-2 overflow-x-auto pb-3.5 no-scrollbar mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            {inPageCategories.map((cat) => {
              const isActive = selectedCategoryKey === cat.key;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategoryKey(cat.key)}
                  className={`shrink-0 rounded-full px-4 sm:px-4.5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer min-h-[38px] ${
                    isActive
                      ? "bg-[#9B1B9E] text-white shadow-md scale-[1.02]"
                      : "border border-[#E4E4E7] bg-white text-[#52525B] hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Product Cards Grid — Fully Responsive across Mobile, Tablet, Laptop, Desktop & Mac */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
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
                    className="relative z-10 hover:z-30 h-full"
                  >
                    <Link
                      to={`/products/${p.slug}`}
                      className="group relative block w-full h-full cursor-pointer"
                    >
                      {/* PURE WHITE PRODUCT CARD — DYNAMIC RESPONSIVE HEIGHT */}
                      <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E4E4E7] bg-white shadow-sm sm:shadow-md transition-all duration-300 group-hover:border-[#9B1B9E] group-hover:shadow-2xl h-full min-h-[390px] sm:min-h-[420px] w-full">
                        
                        {/* Top Image Frame Box */}
                        <div className="relative h-[160px] xs:h-[175px] sm:h-[185px] 2xl:h-[210px] w-full overflow-hidden bg-[#F8F9FA] border-b border-[#E4E4E7] flex items-center justify-center p-3.5 shrink-0">
                          <img
                            src={p.image}
                            alt={p.name}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.05]"
                          />
                        </div>

                        {/* Bottom White Information Section */}
                        <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                          <div className="space-y-1.5">
                            {/* Eyebrow Tagline */}
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#9B1B9E] block leading-tight truncate">
                              {tagline}
                            </span>

                            {/* Product Title */}
                            <h3 className="font-display text-base sm:text-lg font-extrabold text-[#0D0D0F] leading-snug group-hover:text-[#9B1B9E] transition-colors">
                              {p.name}
                            </h3>

                            {/* Short Description */}
                            <p className="text-[11.5px] sm:text-xs text-[#52525B] leading-relaxed line-clamp-2 font-medium">
                              {p.description}
                            </p>
                          </div>

                          {/* View Product CTA Link */}
                          <div className="mt-3.5 flex items-center gap-1.5 text-xs font-extrabold text-[#9B1B9E] border-t border-[#E4E4E7] pt-2.5">
                            <span>View Product</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* HOVER STATE OVERLAY (Desktop/Laptop hover) */}
                      <div className="hidden lg:flex absolute inset-0 z-30 rounded-[24px] border-2 border-[#9B1B9E] bg-white shadow-[0_25px_60px_rgba(155,27,158,0.3)] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 pointer-events-none flex-col items-center justify-center p-6 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="max-h-[85%] max-w-[85%] object-contain object-center scale-110 transition-transform duration-300"
                        />
                        <span className="absolute bottom-4 rounded-full bg-[#9B1B9E] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md flex items-center gap-1.5">
                          <span>Explore Product</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
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
      {/* 2.5 FULL PRODUCT CATALOGUE CTA (DARK #050505)   */}
      {/* ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050505] py-14 sm:py-18 lg:py-24 border-b border-[#27272A] text-[#F5F5F5]">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.12),transparent)] pointer-events-none"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-6 bg-[#FF7A00]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FF7A00]">
                    COMPLETE PRODUCT RANGE
                  </span>
                </div>

                <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Explore Our <br className="hidden sm:inline" />
                  <span className="text-[#9B1B9E]">Complete Catalogue</span>
                </h2>

                <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-medium max-w-xl">
                  Explore the complete MIEUX DISPLAY product range, including interactive panels, LED displays, digital signage and professional display solutions.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4">
                  <Link
                    to="/catalogue"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#B52CB8] hover:-translate-y-0.5 group min-h-[44px]"
                  >
                    <span>View Full Catalogue</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#A1A1AA] backdrop-blur transition-all duration-300 hover:border-[#9B1B9E] hover:text-white min-h-[44px]"
                  >
                    <span>Download Catalogue</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Curated Product Image Collage */}
            <div className="lg:col-span-6 relative">
              <Reveal delay={0.15}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    className="absolute -inset-4 rounded-[2.5rem] bg-[#9B1B9E]/20 blur-3xl pointer-events-none"
                    aria-hidden
                  />

                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#27272A] bg-[#151518] p-3.5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#9B1B9E]/60 group">
                    <div className="relative h-full w-full overflow-hidden rounded-[14px] sm:rounded-[16px] bg-white border border-[#E4E4E7] flex items-center justify-center p-3 sm:p-4">
                      <img
                        src={img.heroIfp}
                        alt="MIEUX Interactive Flat Panel Collection"
                        loading="lazy"
                        className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute top-0 inset-x-8 h-0.5 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent opacity-80" />
                      <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 rounded-full bg-[#050505]/90 border border-[#27272A] px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-extrabold text-[#9B1B9E] backdrop-blur shadow-md truncate max-w-[85%]">
                        Interactive & Commercial Displays
                      </span>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -right-2 sm:-right-4 w-[55%] sm:w-[50%] aspect-[4/3] rounded-[18px] sm:rounded-[20px] border border-[#27272A] bg-[#151518] p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(155,27,158,0.25)] transition-all duration-500 hover:border-[#9B1B9E] hover:scale-[1.03] hidden sm:block">
                    <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-white border border-[#E4E4E7] flex items-center justify-center p-2">
                      <img
                        src={img.kiosk}
                        alt="MIEUX Digital Kiosk"
                        loading="lazy"
                        className="max-h-full max-w-full object-contain object-center"
                      />
                      <span className="absolute bottom-2 left-2 rounded-full bg-[#9B1B9E] px-2.5 py-0.5 text-[9px] font-bold text-white shadow">
                        Digital Kiosk
                      </span>
                    </div>
                  </div>

                  <div className="absolute -top-4 -left-2 sm:-left-4 rounded-2xl border border-[#27272A] bg-[#050505]/90 px-3.5 py-2 text-xs font-bold text-white shadow-xl backdrop-blur hidden sm:flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF7A00] animate-pulse shrink-0" />
                    <span>30+ Commercial Displays</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 3. DESIGNED FOR EVERY ENVIRONMENT (DARK #050505)*/}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-[#050505] py-12 sm:py-16 lg:py-20 text-[#F5F5F5] border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#27272A] shadow-2xl aspect-[16/10] bg-[#151518]">
                  <img
                    src={img.indoorLed}
                    alt="MIEUX Display Installation Environment"
                    className="h-full w-full object-cover brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <Reveal delay={0.1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                  ARCHITECTURAL ADAPTABILITY
                </span>
                <h2 className="mt-2 font-display text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Designed for <span className="text-[#9B1B9E]">Every Environment</span>
                </h2>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-medium">
                  Every MIEUX display series is purpose-engineered to meet environmental ratings, thermal dissipation needs, optical clarity targets, and operational duty cycles.
                </p>

                <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 border-t border-[#27272A] pt-4">
                  <div className="flex items-start gap-3 rounded-xl border border-[#27272A] bg-[#151518] p-3.5">
                    <Building2 className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Indoor Fine-Pitch</h4>
                      <p className="text-[11px] text-[#A1A1AA] mt-0.5">High grey-scale boardrooms & auditoriums.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#27272A] bg-[#151518] p-3.5">
                    <Store className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Outdoor All-Weather</h4>
                      <p className="text-[11px] text-[#A1A1AA] mt-0.5">8000 Nits IP65 billboards & facades.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#27272A] bg-[#151518] p-3.5">
                    <GraduationCap className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Interactive IFPD</h4>
                      <p className="text-[11px] text-[#A1A1AA] mt-0.5">4K 40-point multi-touch collaboration.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#27272A] bg-[#151518] p-3.5">
                    <Shield className="h-5 w-5 shrink-0 text-[#9B1B9E] mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">24/7 Commercial</h4>
                      <p className="text-[11px] text-[#A1A1AA] mt-0.5">Command center NOC/SOC redundancy.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 4. PROCESS SECTION (LIGHT SECTION bg-[#F7F7F5]) */}
      {/* ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F7F7F5] text-[#0D0D0F] border-b border-[#E4E4E7] relative overflow-hidden">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              SYSTEMATIC METHODOLOGY
            </span>
            <h2 className="mt-2 text-2xl xs:text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              From Vision to <span className="text-[#9B1B9E]">Installation</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl mx-auto font-medium">
              Our systematic engineering methodology ensures flawless execution from initial drawing to final calibration.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Connecting Line (Desktop) */}
            <div
              className="hidden lg:block absolute top-7 left-16 right-16 h-0.5 bg-gradient-to-r from-[#9B1B9E]/40 via-[#9B1B9E] to-[#FF6B00] z-0"
              aria-hidden
            />

            {/* 5 Process Steps — Fully Responsive Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
              {solutionProcessSteps.map((step, idx) => (
                <Reveal key={step.number} delay={idx * 0.05}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="h-12 w-12 sm:h-13 sm:w-13 rounded-full bg-[#9B1B9E] text-white flex items-center justify-center font-display font-black text-xs sm:text-sm shadow-md mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                      {step.number}
                    </div>

                    <h4 className="text-sm sm:text-base font-display font-bold text-[#0D0D0F] mb-1">
                      {step.title}
                    </h4>

                    <p className="text-[11.5px] sm:text-xs text-[#52525B] leading-relaxed font-medium max-w-[210px]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* 6. FINAL CTA SECTION (DARK #050505)            */}
      {/* ─────────────────────────────────────────────── */}
      <CtaSection />
    </div>
  );
}
