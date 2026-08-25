import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Download,
  FileText,
  Sparkles,
  Shield,
  ArrowUpRight,
  Phone,
  Layers,
  Zap,
  Activity,
  Wrench,
  Eye,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Monitor,
} from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { img } from "@/data/site";
import {
  catalogueProducts,
  getProductBySlug,
  type CatalogueProduct,
} from "@/data/catalogueProducts";
import { NotFoundPage } from "./NotFoundPage";
import { OTPVerificationModal } from "@/components/site/OTPVerificationModal";
import { DigitalStandeePage } from "./DigitalStandeePage";
import { DigitalPodiumPage } from "./DigitalPodiumPage";

const applicationCards = [
  {
    title: "Education",
    desc: "Interactive smart classrooms, lecture halls and campus signage.",
    image: img.education,
    slug: "education",
  },
  {
    title: "Corporate",
    desc: "Executive boardrooms, high-impact lobbies and experience centres.",
    image: img.corporate,
    slug: "corporate",
  },
  {
    title: "Government",
    desc: "Compliant visual display infrastructure for public assembly & civic offices.",
    image: img.controlRoom,
    slug: "government",
  },
  {
    title: "Banking",
    desc: "Branch digital signage, customer queue management and self-service kiosks.",
    image: img.kiosk,
    slug: "banking",
  },
  {
    title: "Hospitality",
    desc: "High-impact backdrop LED walls for hotel lobbies, reception desks & venues.",
    image: img.signage,
    slug: "hospitality",
  },
  {
    title: "Retail",
    desc: "Storefront window displays, transparent glass facades & digital apparel posters.",
    image: img.transparentLed,
    slug: "retail",
  },
];

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const product: CatalogueProduct | undefined = slug ? getProductBySlug(slug) : undefined;
  const [otpOpen, setOtpOpen] = useState(false);

  // Fallback if product is not found
  if (!product) {
    return <NotFoundPage />;
  }

  // Gallery thumbnails array
  const galleryThumbnails = [
    product.image,
    img.controlRoom,
    img.indoorLed,
    img.corporate,
  ];
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Related products (exclude current product)
  const relatedProducts = catalogueProducts
    .filter((p) => p.id !== product.id && p.slug !== product.slug)
    .slice(0, 4);

  // Split full specs into 2 columns for technical section
  const midIndex = Math.ceil(product.fullSpecs.length / 2);
  const specsLeft = product.fullSpecs.slice(0, midIndex);
  const specsRight = product.fullSpecs.slice(midIndex);

  return (
    <div className="bg-[#050505] text-[#F5F5F5] antialiased min-h-screen selection:bg-[#9B1B9E] selection:text-white">
      {/* ───────────────────────────────────────────────────────── */}
      {/* 1. PRODUCT DETAIL HERO / VISUAL (DARK #050505)           */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#050505] py-10 sm:py-16 lg:py-20 text-[#F5F5F5] border-b border-[#27272A]">
        {/* Background glow and subtle mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.12),transparent)] pointer-events-none" aria-hidden />

        <div className="relative mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A1A1AA] transition-colors hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4 text-[#9B1B9E]" /> Back to Products
          </Link>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-start">
            {/* Left: Product Image Gallery (6 cols) */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-[#9B1B9E]/20 blur-3xl" aria-hidden />

                  {/* Main Display Pure White Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E4E4E7] bg-white shadow-2xl flex items-center justify-center p-3.5 sm:p-6">
                    <img
                      src={selectedImage}
                      alt={product.name}
                      className="h-full w-full object-contain object-center transition-all duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-[#9B1B9E] px-3 sm:px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-md">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="mt-4 flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1 no-scrollbar">
                    {galleryThumbnails.map((thumb, idx) => {
                      const isSelected = selectedImage === thumb;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(thumb)}
                          className={`relative h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-xl border bg-white p-1.5 transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "border-[#9B1B9E] ring-2 ring-[#9B1B9E]/50 scale-105 shadow-md"
                              : "border-[#E4E4E7] opacity-80 hover:opacity-100 hover:border-[#9B1B9E]"
                          }`}
                        >
                          <img
                            src={thumb}
                            alt={`Thumbnail ${idx + 1}`}
                            className="h-full w-full object-contain object-center"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Product Info & 2x3 Spec Grid (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                    {product.category}
                  </span>
                  <h1 className="mt-2.5 font-display text-2xl xs:text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                    {product.name}
                  </h1>
                  <p className="mt-1.5 font-display text-sm font-bold text-[#9B1B9E] sm:text-base lg:text-lg">
                    {product.subtitle}
                  </p>

                  <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[#A1A1AA] font-medium">
                    {product.description}
                  </p>

                  {/* 2x3 Specification Feature Grid */}
                  <div className="mt-5 sm:mt-6 grid grid-cols-2 xs:grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="rounded-xl border border-[#27272A] bg-[#151518] p-3 sm:p-3.5">
                      <Layers className="h-4 w-4 text-[#9B1B9E] mb-1" />
                      <span className="block font-display text-xs sm:text-sm font-bold text-white">16-Bit</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#A1A1AA]">Grayscale</span>
                    </div>

                    <div className="rounded-xl border border-[#27272A] bg-[#151518] p-3 sm:p-3.5">
                      <Zap className="h-4 w-4 text-[#9B1B9E] mb-1" />
                      <span className="block font-display text-xs sm:text-sm font-bold text-white">&lt;2ms</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#A1A1AA]">Low Latency</span>
                    </div>

                    <div className="rounded-xl border border-[#27272A] bg-[#151518] p-3 sm:p-3.5">
                      <Activity className="h-4 w-4 text-[#9B1B9E] mb-1" />
                      <span className="block font-display text-xs sm:text-sm font-bold text-white truncate">{product.quickSpecs.refreshRate || "3840Hz"}</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#A1A1AA]">Refresh Rate</span>
                    </div>

                    <div className="rounded-xl border border-[#27272A] bg-[#151518] p-3 sm:p-3.5">
                      <Wrench className="h-4 w-4 text-[#9B1B9E] mb-1" />
                      <span className="block font-display text-xs sm:text-sm font-bold text-white truncate">{product.quickSpecs.service || "Front & Rear"}</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#A1A1AA]">Maintenance</span>
                    </div>

                    <div className="rounded-xl border border-[#27272A] bg-[#151518] p-3 sm:p-3.5">
                      <Eye className="h-4 w-4 text-[#9B1B9E] mb-1" />
                      <span className="block font-display text-xs sm:text-sm font-bold text-white">160°</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#A1A1AA]">Wide Viewing</span>
                    </div>

                    <div className="rounded-xl border border-[#27272A] bg-[#151518] p-3 sm:p-3.5">
                      <Maximize2 className="h-4 w-4 text-[#9B1B9E] mb-1" />
                      <span className="block font-display text-xs sm:text-sm font-bold text-white">Seamless</span>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#A1A1AA]">Alignment</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5 min-h-[44px]"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => setOtpOpen(true)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-colors hover:border-[#9B1B9E] hover:bg-[#1D1D21] min-h-[44px] cursor-pointer"
                    >
                      <FileText className="h-4 w-4 text-[#9B1B9E]" />
                      <span>Download Brochure</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 2. QUICK SPECIFICATION BAR (DARK #0D0D0F / #151518)       */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0F] border-b border-[#27272A] py-6 text-white">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#27272A] bg-[#151518] p-4 sm:p-5 shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#27272A] text-center">
              <div className="pt-2 sm:pt-0">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">Pixel Pitch</span>
                <span className="font-display text-xs sm:text-sm font-extrabold text-white mt-1 block">
                  {product.quickSpecs.pixelPitch || "P0.9 – P1.2"}
                </span>
              </div>

              <div className="pt-2 sm:pt-0 sm:pl-3">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">Brightness</span>
                <span className="font-display text-xs sm:text-sm font-extrabold text-white mt-1 block">
                  {product.quickSpecs.brightness || "1,200 nits"}
                </span>
              </div>

              <div className="pt-2 sm:pt-0 lg:pl-3">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">Refresh Rate</span>
                <span className="font-display text-xs sm:text-sm font-extrabold text-white mt-1 block">
                  {product.quickSpecs.refreshRate || "3840Hz"}
                </span>
              </div>

              <div className="pt-2 sm:pt-0 lg:pl-3">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">Contrast Ratio</span>
                <span className="font-display text-xs sm:text-sm font-extrabold text-white mt-1 block">
                  10,000 : 1
                </span>
              </div>

              <div className="pt-2 sm:pt-0 lg:pl-3">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">Cabinet Weight</span>
                <span className="font-display text-xs sm:text-sm font-extrabold text-white mt-1 block">
                  5.2 kg / cabinet
                </span>
              </div>

              <div className="pt-2 sm:pt-0 lg:pl-3">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">IP Rating</span>
                <span className="font-display text-xs sm:text-sm font-extrabold text-white mt-1 block">
                  IP40 / IP30
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 3. TECHNICAL SPECIFICATIONS (DARK #050505)               */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-12 sm:py-16 lg:py-20 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              TECHNICAL DATA
            </span>
            <h2 className="mt-2 font-display text-2xl xs:text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Full Specifications
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] font-medium">
              Verified engineering parameters and hardware capabilities for {product.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: 2-Column Table Grid (8 cols) */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#27272A] bg-[#151518] shadow-2xl p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4">
                {/* Column 1 */}
                <div className="divide-y divide-[#27272A]">
                  {specsLeft.map((spec) => (
                    <div key={spec.label} className="py-2.5 sm:py-3 flex flex-col xs:flex-row xs:items-center justify-between text-xs gap-1 xs:gap-2">
                      <span className="font-semibold text-white shrink-0">{spec.label}</span>
                      <span className="text-[#A1A1AA] font-medium xs:text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="divide-y divide-[#27272A]">
                  {specsRight.map((spec) => (
                    <div key={spec.label} className="py-2.5 sm:py-3 flex flex-col xs:flex-row xs:items-center justify-between text-xs gap-1 xs:gap-2">
                      <span className="font-semibold text-white shrink-0">{spec.label}</span>
                      <span className="text-[#A1A1AA] font-medium xs:text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Installation Showcase Card (4 cols) */}
            <div className="lg:col-span-4 flex">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#27272A] bg-[#151518] shadow-2xl w-full flex flex-col justify-end p-5 sm:p-6 aspect-[4/3] sm:aspect-[4/5]">
                <img
                  src={img.controlRoom}
                  alt="Enterprise Installation"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00]">
                    ENGINEERING EXCELLENCE
                  </span>
                  <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-white">
                    Built for Mission-Critical Reliability
                  </h3>
                  <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed font-medium">
                    Engineered to sustain continuous operation in high-footfall and 24/7 control environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 4. DESIGNED FOR EVERY ENVIRONMENT (LIGHT SECTION #F5F5F5) */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] text-[#0D0D0F] py-12 sm:py-16 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              VERSATILE DEPLOYMENTS
            </span>
            <h2 className="mt-2 font-display text-2xl xs:text-3xl font-extrabold text-[#0D0D0F] sm:text-4xl tracking-tight">
              Designed for Every <span className="text-[#9B1B9E]">Environment</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] font-medium">
              Engineered to integrate smoothly into high-stakes corporate, education, retail, and command environments.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 xs:grid-cols-2 lg:grid-cols-4">
            {applicationCards.map((app, idx) => (
              <Reveal key={app.title} delay={idx * 0.05}>
                <Link
                  to={`/solutions/${app.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[18px] sm:rounded-[20px] border border-[#E4E4E7] bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9B1B9E] hover:shadow-xl cursor-pointer h-full"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                    <img
                      src={app.image}
                      alt={app.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      {app.title}
                    </span>
                    <h3 className="mt-0.5 font-display text-sm sm:text-base font-bold text-[#0D0D0F] group-hover:text-[#9B1B9E] transition-colors">
                      {app.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#52525B] leading-relaxed font-medium line-clamp-2">
                      {app.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 5. RECOMMENDED PRODUCTS (DARK #050505)                    */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-12 sm:py-16 lg:py-20 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                RECOMMENDED FOR YOU
              </span>
              <h2 className="mt-2 font-display text-2xl xs:text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                You May Also Like
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E] hover:text-white transition-colors"
            >
              View Full Catalog <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 xs:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 0.05}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-[18px] sm:rounded-[20px] border border-[#27272A] bg-[#151518] p-3.5 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9B1B9E] h-full"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-white border border-[#E4E4E7] mb-3 flex items-center justify-center p-2.5">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      {p.category}
                    </span>
                    <h3 className="mt-0.5 font-display text-sm sm:text-base font-bold text-white group-hover:text-[#9B1B9E] transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#A1A1AA] line-clamp-2 font-medium">
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#9B1B9E] border-t border-[#27272A] pt-2.5">
                    <span>View Specs</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Product Page -> Catalogue Connection Contextual Banner */}
          <div className="mt-10 sm:mt-12 text-center border-t border-[#27272A] pt-8">
            <p className="text-xs sm:text-sm font-medium text-[#A1A1AA]">
              Looking for more display solutions?{" "}
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-1 font-bold text-[#9B1B9E] hover:text-[#B52CB8] transition-colors ml-1"
              >
                <span>Explore the complete MIEUX DISPLAY catalogue</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────── */}
      {/* 6. PREMIUM CTA (DARK #050505 WITH GLOW & OVERLAY)         */}
      {/* ───────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#050505] py-14 sm:py-20 lg:py-24 text-[#F5F5F5] border-b border-[#27272A]">
        {/* Environment overlay photo */}
        <img
          src={img.indoorLed}
          alt="MIEUX Display Environment"
          className="absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.15),transparent)] pointer-events-none" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 z-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
              CONSULTATION & SPECIFICATION
            </span>
            <h2 className="mt-2 font-display text-2xl xs:text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
              Looking for the right display solution?
            </h2>
            <p className="mx-auto mt-3.5 max-w-2xl text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-medium">
              Tell us about your space, requirements and budget. Our engineering team will recommend the right pixel-pitch and layout solution.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row justify-center items-stretch xs:items-center gap-3.5 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5 min-h-[44px]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21] min-h-[44px]"
              >
                <Phone className="h-4 w-4 text-[#9B1B9E]" />
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OTP Verification Modal for Brochure Download */}
      <OTPVerificationModal
        isOpen={otpOpen}
        onClose={() => setOtpOpen(false)}
        documentName={`${product.name} Brochure`}
        documentUrl={`/documents/${product.slug}-brochure.pdf`}
      />
    </div>
  );
}

