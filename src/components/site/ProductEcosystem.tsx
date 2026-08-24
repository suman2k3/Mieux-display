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
  if (product.subtitle) return product.subtitle.toUpperCase();
  if (product.category === "Indoor LED") return "FINE-PITCH BRILLIANCE FOR INTERIORS";
  if (product.category === "Outdoor LED") return "BUILT FOR SUNLIGHT AND STORMS";
  if (product.category === "Interactive Displays") return "TOUCH. TEACH. TRANSFORM.";
  if (product.category === "Commercial Displays") return "ENGAGE SMARTER. DISPLAY BETTER.";
  if (product.category === "Digital Signage") return "IMPACTFUL DIGITAL POSTERS";
  if (product.category === "Control Room") return "MISSION-CRITICAL 24/7 CANVAS";
  return "ENGINEERED DISPLAY SOLUTIONS";
};

export function ProductEcosystem() {
  const [activeFilterLabel, setActiveFilterLabel] = useState<string>("All");
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
    <section className="relative bg-[#F8F9FA] text-[#0D0D0F] py-16 lg:py-24 overflow-hidden w-full max-w-full border-b border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              OUR DISPLAY SOLUTIONS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Innovative Displays For <span className="text-[#9B1B9E]">Every Need</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52525B] max-w-2xl font-medium">
              From small spaces to large arenas, our display solutions are built to perform in any environment.
            </p>
          </div>

          {/* Action Links & Circular Arrow Controls */}
          <div className="flex items-center gap-4">
            <Reveal delay={0.15}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[#9B1B9E] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
              >
                Explore All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous products"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-all hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next products"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-all hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
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
                    : "border border-[#E4E4E7] bg-white text-[#52525B] hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
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
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-[#E4E4E7] bg-white/90 text-[#0D0D0F] shadow-2xl backdrop-blur-md transition-all hover:bg-[#9B1B9E] hover:text-white hover:border-[#9B1B9E] hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Floating Right Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-[#E4E4E7] bg-white/90 text-[#0D0D0F] shadow-2xl backdrop-blur-md transition-all hover:bg-[#9B1B9E] hover:text-white hover:border-[#9B1B9E] hover:scale-110"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div
          ref={scrollRef}
          className="mt-6 w-full overflow-x-auto py-6 pb-12 no-scrollbar relative z-10 scroll-smooth snap-x snap-mandatory"
        >
          <div className="flex w-max gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 xl:px-12 items-center">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => {
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: Math.min(i, 4) * 0.04 }}
                    className="relative z-10 shrink-0 snap-center"
                  >
                    <Link
                      to={`/products/${p.slug}`}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#E4E4E7] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#9B1B9E] hover:-translate-y-1 w-[84vw] max-w-[280px] sm:w-[280px] h-[370px]"
                    >
                      {/* Product Image Frame — Fits all product images cleanly inside the frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F8F9FA] border border-[#E4E4E7] mb-4 flex items-center justify-center p-2.5">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00]">
                            {p.category}
                          </span>
                          <h3 className="mt-1 font-display text-lg font-bold text-[#0D0D0F] group-hover:text-[#9B1B9E] transition-colors leading-tight">
                            {p.name}
                          </h3>
                          <p className="mt-1.5 text-xs text-[#52525B] line-clamp-2 leading-relaxed font-medium">
                            {p.description}
                          </p>
                        </div>

                        {/* CTA Link */}
                        <div className="mt-4 flex items-center justify-between border-t border-[#E4E4E7] pt-3 text-xs font-bold text-[#9B1B9E]">
                          <span>Explore Series</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* HOVER OVERLAY CARD — HIDES TEXT & SHOWS ENLARGED PRODUCT IMAGE ONLY */}
                      <div className="absolute inset-0 z-30 rounded-[20px] border-2 border-[#9B1B9E] bg-white shadow-[0_20px_50px_rgba(155,27,158,0.3)] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 pointer-events-none flex flex-col items-center justify-center p-5 overflow-hidden">
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
      </div>
    </section>
  );
}
