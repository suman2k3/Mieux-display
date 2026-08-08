import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Sun,
  Tablet,
  LayoutGrid,
  Grid,
  Tv,
  Smartphone,
  ShieldAlert,
  Boxes,
  ChevronRight,
  ArrowUpRight,
  Download,
  FileText,
} from "lucide-react";
import {
  megaCategories,
  megaFilters,
  megaProducts,
  type CategoryId,
  type FilterId,
} from "@/data/megaMenuData";

interface ProductsMegaMenuProps {
  onClose: () => void;
}

const categoryIcons: Record<CategoryId, React.ComponentType<{ className?: string }>> = {
  "indoor-led": Monitor,
  "outdoor-led": Sun,
  "interactive-panel": Tablet,
  "commercial-display": LayoutGrid,
  "lcd-video-wall": Grid,
  "digital-signage": Tv,
  "touch-kiosk": Smartphone,
  "control-room": ShieldAlert,
  "all-products": Boxes,
};

export function ProductsMegaMenu({ onClose }: ProductsMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("indoor-led");
  const [activeFilter, setActiveFilter] = useState<FilterId>("All Series");
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Filter products based on selected Category and Filter
  const filteredProducts = megaProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "all-products" || product.category === activeCategory;
    const matchesFilter =
      activeFilter === "All Series" || product.filterTag.includes(activeFilter);
    return matchesCategory && matchesFilter;
  });

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "rgba(7, 29, 53, 0.92)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
      className="absolute left-1/2 top-full z-50 mt-1 w-[92vw] max-w-5xl -translate-x-1/2 rounded-b-2xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.45)] text-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row max-h-[520px]">
        {/* ---------------------------------------- */}
        {/* LEFT CATEGORY PANEL (Width 230-240px)    */}
        {/* ---------------------------------------- */}
        <div className="w-full md:w-[230px] shrink-0 border-b md:border-b-0 md:border-r border-white/10 p-3 sm:p-4 bg-black/10">
          <div className="mb-2.5 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Categories
          </div>
          <div className="space-y-0.5">
            {megaCategories.map((cat) => {
              const IconComponent = categoryIcons[cat.id] || Monitor;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition-all duration-200 ${
                    isActive
                      ? "border-l-2 border-[#0057FF] bg-white/[0.08] text-[#0057FF] font-semibold pl-2"
                      : "border-l-2 border-transparent text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <IconComponent
                      className={`h-4 w-4 shrink-0 transition-colors ${
                        isActive ? "text-[#0057FF]" : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                    <span className="truncate">{cat.label}</span>
                  </div>
                  <ChevronRight
                    className={`h-3.5 w-3.5 shrink-0 transition-all duration-200 ${
                      isActive
                        ? "text-[#0057FF] opacity-100 translate-x-0"
                        : "text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* RIGHT PRODUCT AREA                       */}
        {/* ---------------------------------------- */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
          <div>
            {/* TOP FILTER BAR (COMPACT TEXT TABS) */}
            <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-4 text-xs">
                {megaFilters.map((filter) => {
                  const isSelected = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`relative pb-1.5 transition-colors font-medium text-xs ${
                        isSelected
                          ? "text-[#0057FF] font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {filter}
                      {isSelected && (
                        <motion.span
                          layoutId="activeFilterUnderline"
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0057FF] rounded-full"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="hidden sm:block text-[11px] text-slate-400">
                Showing {filteredProducts.length} series
              </div>
            </div>

            {/* PRODUCT ITEMS GRID (3-4 COLUMNS COMPACT LIST) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 max-h-[360px] overflow-y-auto pr-1"
              >
                {filteredProducts.length === 0 ? (
                  <div className="col-span-full py-10 text-center text-xs text-slate-400">
                    No series found for this filter.
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl border border-transparent p-2 text-left transition-all duration-200 hover:bg-white/[0.06] hover:border-white/10"
                    >
                      {/* Compact Thumbnail (44px x 44px) */}
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white/5">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Product Text */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="truncate text-xs font-semibold text-white transition-colors group-hover:text-[#0057FF]">
                            {product.name}
                          </span>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#0057FF] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </div>
                        <p className="truncate text-[11px] text-slate-400">
                          {product.tagline}
                        </p>
                      </div>
                    </Link>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------------------------------------- */}
          {/* COMPACT BOTTOM CATALOG CTA               */}
          {/* ---------------------------------------- */}
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              MIEUX DISPLAY — Enterprise Grade Technology
            </span>
            <div className="flex items-center gap-4 ml-auto">
              <Link
                to="/products"
                onClick={onClose}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#0057FF] hover:underline"
              >
                View All Products <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <span className="h-3 w-px bg-white/15" aria-hidden />
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white"
              >
                <FileText className="h-3.5 w-3.5 text-[#0057FF]" /> Download Catalogue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
