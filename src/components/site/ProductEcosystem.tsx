import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import {
  catalogueProducts,
  type CatalogueProduct,
} from "@/data/catalogueProducts";

/* Filter categories specified by prompt */
const categoryFilters = [
  { label: "All", category: "All Products" },
  { label: "Indoor LED", category: "Indoor LED" },
  { label: "Outdoor LED", category: "Outdoor LED" },
  { label: "IFPD", category: "Interactive Displays" },
  { label: "Kiosk", category: "Commercial Displays" },
  { label: "Standee", category: "Digital Signage" },
  { label: "Signage", category: "Digital Signage" },
  { label: "Other Products", category: "Control Room" },
];

/* Marketing taglines matching requested style */
const getMarketingTagline = (product: CatalogueProduct) => {
  if (product.category === "Indoor LED") return "FINE-PITCH BRILLIANCE FOR INTERIORS";
  if (product.category === "Outdoor LED") return "BUILT FOR SUNLIGHT AND STORMS";
  if (product.category === "Interactive Displays") return "COLLABORATION THAT FEELS NATURAL";
  if (product.category === "Commercial Displays") return "24×7 PROFESSIONAL PANELS";
  if (product.category === "Digital Signage") return "IMPACTFUL DIGITAL POSTERS";
  if (product.category === "Control Room") return "MISSION-CRITICAL 24/7 CANVAS";
  return "ENGINEERED DISPLAY SOLUTIONS";
};

export function ProductEcosystem() {
  const [activeFilterLabel, setActiveFilterLabel] = useState<string>("All");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter products based on active filter button
  const filteredProducts = catalogueProducts.filter((product) => {
    if (activeFilterLabel === "All") return true;
    if (activeFilterLabel === "Indoor LED") return product.category === "Indoor LED";
    if (activeFilterLabel === "Outdoor LED") return product.category === "Outdoor LED";
    if (activeFilterLabel === "IFPD") return product.category === "Interactive Displays";
    if (activeFilterLabel === "Kiosk") return product.category === "Commercial Displays" || product.name.toLowerCase().includes("kiosk");
    if (activeFilterLabel === "Standee") return product.category === "Digital Signage" || product.name.toLowerCase().includes("signa");
    if (activeFilterLabel === "Signage") return product.category === "Digital Signage";
    if (activeFilterLabel === "Other Products")
      return (
        product.category === "Control Room" ||
        product.category === "Creative LED" ||
        product.category === "Video Walls"
      );
    return true;
  });

  // Scroll left/right handler
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

  // Reset scroll to left when filter changes
  const handleFilterClick = (label: string) => {
    setActiveFilterLabel(label);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Continuous auto-scroll carousel (slides automatically every 2.5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + 340, behavior: "smooth" });
        }
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 overflow-x-clip border-b border-[#27272A]">
      {/* Subtle purple radial glow background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.05),transparent)] pointer-events-none"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            dark
            eyebrow="PRODUCT RANGE"
            title="Every display format, one accountable partner."
            subtitle="Ten core display families, each specified, installed and serviced by our own engineering team."
          />

          {/* Action Links & Circular Arrow Controls */}
          <div className="flex items-center gap-4">
            <Reveal delay={0.15}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#151518] px-5 py-2.5 text-xs font-bold text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]/10"
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous products"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]/30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next products"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]/30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Category Navigation Filter Pills */}
        <div className="mt-8 flex items-center justify-start gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categoryFilters.map((tab) => {
            const isActive = activeFilterLabel === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => handleFilterClick(tab.label)}
                className={`shrink-0 rounded-full px-4.5 py-2 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#9B1B9E] text-white shadow-md scale-[1.02]"
                    : "border border-[#27272A] bg-[#151518] text-[#A1A1AA] hover:border-[#9B1B9E] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* LARGE PORTRAIT IMAGE CAROUSEL TRACK WITH FLOATING TRANSPARENT LEFT & RIGHT ARROWS */}
      <div className="relative w-full">
        {/* Floating Left Arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/30 bg-black/20 text-white shadow-2xl backdrop-blur-md transition-all hover:bg-[#9B1B9E]/80 hover:border-[#9B1B9E] hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Floating Right Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/30 bg-black/20 text-white shadow-2xl backdrop-blur-md transition-all hover:bg-[#9B1B9E]/80 hover:border-[#9B1B9E] hover:scale-110"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div
          ref={scrollRef}
          className="mt-6 w-full overflow-x-auto py-10 pb-16 no-scrollbar relative z-10 scroll-smooth"
        >
          <div className="flex w-max gap-6 px-4 sm:px-6 lg:px-8 xl:px-12 items-center">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => {
                const tagline = getMarketingTagline(p);
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: Math.min(i, 4) * 0.04 }}
                    className="relative z-10 hover:z-50 shrink-0"
                  >
                    <Link
                      to={`/products/${p.slug}`}
                      className="group relative block aspect-[4/5] w-[290px] sm:w-[320px] lg:w-[340px] xl:w-[350px] cursor-pointer"
                    >
                      {/* BASE CARD */}
                      <div className="relative flex flex-col justify-end overflow-hidden rounded-[22px] border border-[#27272A] bg-[#171719] shadow-[0_15px_35px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 group-hover:border-[#9B1B9E] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(155,27,158,0.3)] h-full w-full">
                        {/* Full Portrait Background Image */}
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04] brightness-105"
                        />

                        {/* Gradient Overlay for Readable Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Text Container Positioned at Bottom of Image */}
                        <div className="relative z-10 p-6 flex flex-col justify-end">
                          {/* Eyebrow Tagline */}
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B1B9E] leading-snug">
                            {tagline}
                          </span>

                          {/* Product / Category Title */}
                          <h3 className="mt-1.5 font-display text-xl sm:text-2xl lg:text-[23px] font-bold text-white leading-tight">
                            {p.name}
                          </h3>

                          {/* Short Description */}
                          <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#A1A1AA] line-clamp-2">
                            {p.description}
                          </p>

                          {/* View Product CTA Link */}
                          <div className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#9B1B9E] border-t border-[#27272A] pt-3">
                            <span>View Product</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* FLOATING ENLARGED POP-OUT PREVIEW */}
                      <div className="hidden lg:block absolute -inset-2.5 sm:-inset-3 z-30 rounded-[26px] border-2 border-[#9B1B9E] bg-[#171719] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(155,27,158,0.35)] opacity-0 scale-95 transition-all duration-250 ease-out group-hover:opacity-100 group-hover:scale-105 pointer-events-none overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="absolute inset-0 h-full w-full object-cover scale-105 brightness-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/98 via-[#050505]/50 to-transparent" />
                        <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
                            {tagline}
                          </span>
                          <h3 className="mt-1.5 font-display text-2xl font-extrabold text-white">
                            {p.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA] line-clamp-3">
                            {p.description}
                          </p>
                          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#9B1B9E] border-t border-[#27272A] pt-3.5">
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
      </div>
    </section>
  );
}
