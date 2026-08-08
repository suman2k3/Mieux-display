import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Check, Download, FileText } from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { CtaSection } from "@/components/site/sections-2";
import { img } from "@/data/site";
import {
  catalogueCategories,
  catalogueProducts,
  type CatalogueProductCategory,
} from "@/data/catalogueProducts";

export function ProductsPage() {
  const [activeCategory, setActiveCategory] =
    useState<CatalogueProductCategory>("All Products");

  const filteredProducts = catalogueProducts.filter((product) => {
    if (activeCategory === "All Products") return true;
    return product.category === activeCategory;
  });

  const scrollToGrid = () => {
    const element = document.getElementById("product-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ---------------------------------------- */}
      {/* 1. PRODUCTS HERO (COMPACT DARK NAVY)     */}
      {/* ---------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-[#071D35] py-16 text-white lg:py-24">
        {/* Subtle grid glow */}
        <div className="absolute inset-0 grid-glow opacity-30" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-[#FF6A00]" />
              PRODUCT COLLECTION
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">
              Display Solutions Built for Every Environment
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Explore professional LED displays, interactive panels, digital signage and commercial display solutions engineered for demanding enterprise environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToGrid}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0057FF] px-7 py-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,87,255,0.4)] transition-all hover:-translate-y-0.5 hover:bg-[#0057FF]/90"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-[#FF6A00] hover:bg-[#FF6A00]/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Right visual with floating badges */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#0057FF]/20 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <img
                src={img.heroVideoWall}
                alt="MIEUX Display Hardware Showcase"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071D35]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Specification Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-white/20 bg-[#071D35]/90 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0057FF] font-bold text-white text-xs">
                  4K
                </span>
                <div>
                  <div className="text-xs font-bold text-white">Ultra-HD Canvas</div>
                  <div className="text-[10px] text-slate-300">3840×2160 Resolution</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 rounded-2xl border border-white/20 bg-[#071D35]/90 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                3840Hz Refresh | 24/7 Rated
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 2. PRODUCT CATEGORY NAVIGATION           */}
      {/* ---------------------------------------- */}
      <section id="product-grid" className="border-b border-border bg-card py-6 shadow-sm sticky top-16 z-30 backdrop-blur-md bg-card/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {catalogueCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0057FF] text-white shadow-[0_4px_14px_rgba(0,87,255,0.35)]"
                      : "border border-border bg-background text-foreground/80 hover:border-[#0057FF]/40 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 3. PRODUCT GRID                          */}
      {/* ---------------------------------------- */}
      <section className="bg-[#F5F7FA] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0057FF]">
                Display Hardware
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#071D35]">
                {activeCategory === "All Products" ? "All Product Series" : activeCategory}
              </h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Showing {filteredProducts.length} demo product models
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-[5px] hover:border-[#0057FF]/50 hover:shadow-[0_12px_30px_rgba(0,87,255,0.18)]"
                >
                  {/* Image Container (60% height aspect ratio) */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category / Specs Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 rounded-full bg-[#071D35]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur shadow-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF6A00]">
                        {product.subtitle}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-[#071D35] group-hover:text-[#0057FF] transition-colors">
                        {product.name}
                      </h3>

                      {/* Specs Pills */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {product.quickSpecs.pixelPitch && (
                          <span className="rounded-md bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground">
                            {product.quickSpecs.pixelPitch}
                          </span>
                        )}
                        {product.quickSpecs.brightness && (
                          <span className="rounded-md bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground">
                            {product.quickSpecs.brightness}
                          </span>
                        )}
                        {product.quickSpecs.refreshRate && (
                          <span className="rounded-md bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground">
                            {product.quickSpecs.refreshRate}
                          </span>
                        )}
                        {product.quickSpecs.dutyCycle && (
                          <span className="rounded-md bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground">
                            {product.quickSpecs.dutyCycle}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                      <Link
                        to={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0057FF] hover:underline"
                      >
                        View Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <Link
                        to="/contact"
                        className="rounded-lg bg-[#0057FF] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* CTA SECTION BEFORE FOOTER                */}
      {/* ---------------------------------------- */}
      <CtaSection />
    </>
  );
}
