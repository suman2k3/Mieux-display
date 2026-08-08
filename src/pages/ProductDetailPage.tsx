import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Download, FileText, Sparkles, Shield, ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { img } from "@/data/site";
import {
  catalogueProducts,
  getProductBySlug,
  type CatalogueProduct,
} from "@/data/catalogueProducts";
import { NotFoundPage } from "./NotFoundPage";

const applicationCards = [
  { title: "Corporate", desc: "Executive boardrooms, high-impact lobbies and experience centres.", image: img.corporate, slug: "corporate" },
  { title: "Education", desc: "Interactive smart classrooms, lecture halls and campus signage.", image: img.education, slug: "education" },
  { title: "Retail", desc: "Flagship window displays, shelf-edge signage and video walls.", image: img.transparentLed, slug: "retail" },
  { title: "Control Rooms", desc: "24/7 mission-critical NOC/SOC command and dispatch centers.", image: img.controlRoom, slug: "control-room" },
];

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product: CatalogueProduct | undefined = slug ? getProductBySlug(slug) : undefined;

  // Fallback if product is not found
  if (!product) {
    return <NotFoundPage />;
  }

  // Related products (exclude current product)
  const relatedProducts = catalogueProducts
    .filter((p) => p.id !== product.id && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      {/* ---------------------------------------- */}
      {/* 1. PRODUCT DETAIL HERO / VISUAL          */}
      {/* ---------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-[#071D35] py-16 text-white lg:py-24">
        <div className="absolute inset-0 grid-glow opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Back button */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Large Product Visual */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[#0057FF]/20 blur-3xl" aria-hidden />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl bg-black/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-[#0057FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Right: Product Info & Key Specs */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6A00]">
                {product.category}
              </span>
              <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl text-white">
                {product.name}
              </h1>
              <p className="mt-2 text-base font-semibold text-[#0057FF] sm:text-lg">
                {product.subtitle}
              </p>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                {product.description}
              </p>

              {/* Key Quick Specifications Box */}
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#FF6A00]" />
                  Key Specifications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  {product.quickSpecs.pixelPitch && (
                    <div>
                      <span className="block text-slate-400 text-[11px]">Pixel Pitch</span>
                      <span className="font-semibold text-white">{product.quickSpecs.pixelPitch}</span>
                    </div>
                  )}
                  {product.quickSpecs.brightness && (
                    <div>
                      <span className="block text-slate-400 text-[11px]">Brightness</span>
                      <span className="font-semibold text-white">{product.quickSpecs.brightness}</span>
                    </div>
                  )}
                  {product.quickSpecs.refreshRate && (
                    <div>
                      <span className="block text-slate-400 text-[11px]">Refresh Rate</span>
                      <span className="font-semibold text-white">{product.quickSpecs.refreshRate}</span>
                    </div>
                  )}
                  {product.quickSpecs.cabinetSize && (
                    <div>
                      <span className="block text-slate-400 text-[11px]">Cabinet Size</span>
                      <span className="font-semibold text-white">{product.quickSpecs.cabinetSize}</span>
                    </div>
                  )}
                  {product.quickSpecs.service && (
                    <div>
                      <span className="block text-slate-400 text-[11px]">Maintenance</span>
                      <span className="font-semibold text-white">{product.quickSpecs.service}</span>
                    </div>
                  )}
                  {product.quickSpecs.dutyCycle && (
                    <div>
                      <span className="block text-slate-400 text-[11px]">Duty Cycle</span>
                      <span className="font-semibold text-white">{product.quickSpecs.dutyCycle}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Applications Tags */}
              <div className="mt-6">
                <span className="text-xs font-semibold text-slate-400 mr-2">Target Applications:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-[#0057FF] px-7 py-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,87,255,0.4)] transition-transform hover:-translate-y-0.5"
                >
                  Request Quote
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-[#0057FF] hover:bg-[#0057FF]/10"
                >
                  <FileText className="h-4 w-4" /> Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 2. FULL SPECIFICATION SECTION             */}
      {/* ---------------------------------------- */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0057FF]">
              Technical Data
            </span>
            <h2 className="font-display text-3xl font-bold text-[#071D35]">
              Full Specifications
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Demo technical parameters for client evaluation. Subject to custom OEM configuration.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <div className="divide-y divide-border">
              {product.fullSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 text-sm ${
                    i % 2 === 0 ? "bg-card" : "bg-surface/50"
                  }`}
                >
                  <span className="font-semibold text-[#071D35]">{spec.label}</span>
                  <span className="text-muted-foreground mt-1 sm:mt-0 font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 3. APPLICATIONS SECTION                   */}
      {/* ---------------------------------------- */}
      <section className="bg-[#F5F7FA] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0057FF]">
              Versatile Deployments
            </span>
            <h2 className="font-display text-3xl font-bold text-[#071D35]">
              Designed for Every Environment
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Engineered to integrate smoothly into high-stakes corporate, education, retail, and command environments.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applicationCards.map((app) => (
              <Link
                key={app.title}
                to={`/solutions/${app.slug}`}
                className="group relative block h-72 overflow-hidden rounded-3xl border border-border shadow-soft"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D35] via-[#071D35]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0057FF]/80 group-hover:via-[#071D35]/60" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white">{app.title}</h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">{app.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore Solution <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 4. RELATED PRODUCTS ("YOU MAY ALSO LIKE") */}
      {/* ---------------------------------------- */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0057FF]">
                Recommendations
              </span>
              <h2 className="font-display text-2xl font-bold text-[#071D35]">
                You May Also Like
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0057FF] hover:underline"
            >
              View Full Catalog <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0057FF]/50 hover:shadow-lift"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-900/10">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6A00]">
                      {p.subtitle}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-[#071D35] group-hover:text-[#0057FF] transition-colors">
                      {p.name}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#0057FF]">
                    View Specs <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 5. REQUEST QUOTE CTA                     */}
      {/* ---------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#071D35] via-[#0B1A30] to-[#0057FF]/90 py-20 text-white">
        <div className="absolute inset-0 grid-glow opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-white">
            Looking for the right display solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 leading-relaxed">
            Tell us about your space, requirements and budget. Our engineering team will recommend the right pixel-pitch and layout drawing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-[#0057FF] px-8 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(0,87,255,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
