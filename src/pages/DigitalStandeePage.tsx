import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Usb,
  FileVideo,
  Layers,
  Sparkles,
  ArrowRight,
  Download,
  CheckCircle2,
  Tv,
  Touchpad,
  ShieldCheck,
  Cpu,
  Sliders,
  Maximize2,
  ArrowUpRight,
  Phone,
  FileText,
} from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { img, company } from "@/data/site";
import { OTPVerificationModal } from "@/components/site/OTPVerificationModal";

const featureStrip = [
  {
    icon: Monitor,
    title: "4K Display",
    specs: "FHD to 4K UHD",
    desc: "Ultra-clear high-density panel with 178° wide viewing angles.",
  },
  {
    icon: Usb,
    title: "Plug & Play",
    specs: "USB & Auto Play",
    desc: "Instant content playback on power-on without extra hardware.",
  },
  {
    icon: FileVideo,
    title: "Multiple File Support",
    specs: "Video, Images & Web",
    desc: "Native decoding for MP4, AVI, JPG, PNG, PDF & HTML5.",
  },
  {
    icon: Layers,
    title: "HDMI, USB & VGA",
    specs: "Versatile I/O Ports",
    desc: "Seamless connectivity for external media players & PCs.",
  },
];

const productVariants = [
  {
    id: "a-frame",
    name: "A-Frame Standee",
    tagline: "Portable Storefront Display",
    desc: "Foldable, portable single or dual-sided digital standee engineered for storefront entrances, event registration, and temporary pop-up venues.",
    image: img.kiosk,
    badge: "Portable & Foldable",
    specs: ["Single or Dual Sided", "Foldable Heavy-Duty Frame", "Battery & AC Power Options"],
  },
  {
    id: "touch-standee",
    name: "Touch Standee",
    tagline: "Interactive 10-Point Touch",
    desc: "Interactive 10-point PCAP capacitive touch standee for self-service wayfinding, product catalogs, queue check-in, and visitor registration.",
    image: img.heroIfp,
    badge: "10-Point Touch",
    specs: ["10-Point PCAP Touch", "Sub-8ms Pen & Finger Latency", "Android 13 / Windows 11"],
  },
  {
    id: "non-touch-standee",
    name: "Non-touch Standee",
    tagline: "24/7 Commercial Poster",
    desc: "High-brightness 700 nits commercial digital poster display engineered for continuous brand advertising, promotional media, and announcements.",
    image: img.signage,
    badge: "24/7 Continuous",
    specs: ["700 Nits High Brightness", "Cloud CMS Remote Scheduling", "Anti-Glare Tempered Glass"],
  },
];

const realWorldDeployments = [
  {
    title: "Retail & Flagship Malls",
    category: "RETAIL & SHOPPING",
    image: img.transparentLed,
    desc: "High-footfall storefront entrances, promo zones, and brand campaign displays.",
    span: "lg:col-span-7",
  },
  {
    title: "Corporate Lobbies & HQ",
    category: "CORPORATE",
    image: img.corporate,
    desc: "Welcome screens, visitor check-in, and internal communications.",
    span: "lg:col-span-5",
  },
  {
    title: "Hospitality & Hotels",
    category: "HOSPITALITY",
    image: img.indoorLed,
    desc: "Event schedules, banquet navigation, and luxury concierge information.",
    span: "lg:col-span-5",
  },
  {
    title: "Education & Campuses",
    category: "EDUCATION",
    image: img.education,
    desc: "Campus announcements, event notices, and student guidance.",
    span: "lg:col-span-7",
  },
];

const capabilities = [
  {
    icon: Monitor,
    title: "High-Resolution Display",
    desc: "4K UHD IPS panel delivering 10-bit color depth, 700 nits brightness, and 178° viewing angles.",
  },
  {
    icon: Layers,
    title: "Multiple Connectivity Options",
    desc: "Dual HDMI 2.0, USB 3.0, VGA, Wi-Fi 6, Ethernet, and Bluetooth for seamless media integration.",
  },
  {
    icon: Usb,
    title: "Plug & Play Operation",
    desc: "Auto-boot looping playback directly from USB storage or cloud CMS without technical setup.",
  },
  {
    icon: FileVideo,
    title: "Multiple Media Formats",
    desc: "Native hardware decoding for 4K H.265 video, dynamic graphics, web feeds, and multi-zone layouts.",
  },
  {
    icon: Touchpad,
    title: "Touch / Non-Touch Options",
    desc: "Choose 10-point PCAP interactive touch or high-nit non-touch commercial poster mode.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Commercial Deployment",
    desc: "Powder-coated steel chassis with 4mm shatterproof tempered glass for 24/7 public venues.",
  },
];

const specsColumnLeft = [
  { label: "Display Sizes Available", value: '43" / 49" / 55" / 65" Diagonal' },
  { label: "Native Resolution", value: "4K UHD (3840 × 2160 @ 60Hz)" },
  { label: "Panel Brightness", value: "500 – 700 nits Commercial Grade" },
  { label: "Contrast Ratio", value: "4,000 : 1 Static" },
  { label: "Viewing Angle", value: "178° Horizontal / 178° Vertical" },
  { label: "Protective Glass", value: "4mm Shatterproof Anti-Glare Tempered Glass" },
];

const specsColumnRight = [
  { label: "Touch Technology", value: "10-Point PCAP Touch / Non-Touch Options" },
  { label: "OS Platform", value: "Android 13 / Windows 11 OPS Slot" },
  { label: "Media Playback", value: "Plug & Play USB / MIEUX Cloud CMS" },
  { label: "Connectivity Ports", value: "2× HDMI, 2× USB 3.0, VGA, RJ45, Wi-Fi" },
  { label: "Duty Cycle Rating", value: "24/7/365 Continuous Operation" },
  { label: "Chassis Material", value: "Powder-Coated Mild Steel Enclosure" },
];

const environments = [
  {
    title: "Retail",
    desc: "Window storefronts, promotional aisles, and shopping mall concourses.",
    image: img.transparentLed,
  },
  {
    title: "Corporate",
    desc: "Lobby welcome boards, executive reception areas, and wayfinding.",
    image: img.corporate,
  },
  {
    title: "Hospitality",
    desc: "Hotel receptions, banquet halls, and luxury lounge announcements.",
    image: img.indoorLed,
  },
  {
    title: "Education",
    desc: "University auditoriums, library entrances, and campus notice hubs.",
    image: img.education,
  },
];

export function DigitalStandeePage() {
  const [otpOpen, setOtpOpen] = useState(false);

  return (
    <div className="bg-[#050505] text-[#F5F5F5] antialiased min-h-screen">
      {/* ─── 1. PREMIUM PRODUCT HERO (DARK #050505) ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-16 sm:py-20 lg:py-24 border-b border-[#27272A]">
        {/* Futuristic commercial backdrop overlay */}
        <img
          src={img.corporate}
          alt="Commercial Retail Environment"
          className="absolute inset-0 h-full w-full object-cover opacity-20 brightness-110 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.15),transparent)] pointer-events-none" aria-hidden />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00] mb-4 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  COMMERCIAL DISPLAY
                </div>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                  Mieux Commercial Display
                </h1>
                <p className="mt-2 font-display text-lg sm:text-xl font-bold text-[#9B1B9E]">
                  Engage. Enhance. Elevate.
                </p>

                <p className="mt-5 text-xs sm:text-base leading-relaxed text-[#A1A1AA] font-medium max-w-xl">
                  Experience stunning picture quality and powerful audio with large format displays designed for open spaces, delivering a truly immersive viewing experience.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-xl transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => setOtpOpen(true)}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518]/90 px-7 py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
                  >
                    <FileText className="h-4 w-4 text-[#9B1B9E]" /> Download Brochure
                  </button>
                </div>

                {/* Quick Trust Highlights */}
                <div className="mt-10 border-t border-[#27272A] pt-5 flex flex-wrap gap-6 text-xs font-semibold text-[#A1A1AA]">
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#9B1B9E]" /> 4K Ultra HD IPS Panel
                  </span>
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" /> 24/7 Commercial Rating
                  </span>
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#9B1B9E]" /> Plug & Play / Cloud CMS
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Product Image Composition (6 cols) */}
            <div className="lg:col-span-6 relative">
              <Reveal delay={0.12}>
                <div className="relative">
                  {/* Subtle purple radial glow */}
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-[#9B1B9E]/25 blur-3xl" aria-hidden />

                  {/* Pure White Main Product Canvas */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px] border border-[#E4E4E7] bg-white shadow-2xl flex items-center justify-center p-4 sm:p-6">
                    <img
                      src={img.kiosk}
                      alt="Mieux Digital Standee Commercial Display"
                      className="h-full w-full object-contain object-center transition-transform duration-500"
                    />

                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between rounded-xl bg-white/95 border border-[#E4E4E7] p-4 shadow-md backdrop-blur-md">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B00]">
                          PREMIUM COMMERCIAL HARDWARE
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#0D0D0F]">
                          Available in 43", 49", 55" & 65"
                        </h4>
                      </div>
                      <span className="rounded-full bg-[#9B1B9E] px-3 py-1 text-[11px] font-bold text-white shadow-md">
                        4K UHD
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. KEY FEATURES STRIP (LIGHT SECTION bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-12 lg:py-16 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featureStrip.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <Reveal key={feat.title} delay={idx * 0.05}>
                  <div className="rounded-[20px] border border-[#E4E4E7] bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#9B1B9E] transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-100 border border-[#E4E4E7] text-[#9B1B9E] mb-4">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#0D0D0F]">
                        {feat.title}
                      </h3>
                      <span className="inline-block mt-0.5 text-xs font-bold text-[#FF6B00]">
                        {feat.specs}
                      </span>
                      <p className="mt-2 text-xs text-[#52525B] leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. PRODUCT VARIANTS (DARK #050505) ─── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-14 lg:py-20 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              STANDARDS & CONFIGURATIONS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Choose the Right Commercial Display <span className="text-[#9B1B9E]">for Your Space</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              Explore our core commercial display configurations designed for diverse commercial deployment requirements.
            </p>
          </div>

          {/* 3 Editorial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productVariants.map((variant, idx) => (
              <Reveal key={variant.id} delay={idx * 0.06}>
                <div className="rounded-[24px] border border-[#27272A] bg-[#151518] p-6 h-full flex flex-col justify-between shadow-2xl hover:border-[#9B1B9E] transition-all duration-300 group">
                  <div>
                    {/* Pure White Image Container */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-white mb-5 border border-[#E4E4E7] flex items-center justify-center p-3">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        loading="lazy"
                        className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-[#9B1B9E] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        {variant.badge}
                      </span>
                    </div>

                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#FF6B00]">
                      {variant.tagline}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-[#9B1B9E] transition-colors">
                      {variant.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed font-medium">
                      {variant.desc}
                    </p>

                    {/* Bullet Specs */}
                    <div className="mt-4 space-y-1.5 border-t border-[#27272A] pt-4 text-xs font-medium text-[#A1A1AA]">
                      {variant.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#9B1B9E] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-6 pt-4 border-t border-[#27272A] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setOtpOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E] hover:text-white transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" /> Download Brochure
                    </button>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-[#9B1B9E] transition-colors"
                    >
                      View Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. REAL-WORLD DEPLOYMENTS (LIGHT SECTION bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              FIELD DEPLOYMENTS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Built for Real-World <span className="text-[#9B1B9E]">Engagement</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl mx-auto font-medium">
              Explore how MIEUX Digital Standees perform in high-footfall commercial environments.
            </p>
          </div>

          {/* Bento-inspired Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {realWorldDeployments.map((dep, idx) => (
              <Reveal key={dep.title} delay={idx * 0.05} className={dep.span}>
                <div className="group relative overflow-hidden rounded-[24px] border border-[#E4E4E7] bg-white shadow-sm hover:shadow-xl hover:border-[#9B1B9E] transition-all duration-300 aspect-[16/10] flex flex-col justify-end p-6">
                  <img
                    src={dep.image}
                    alt={dep.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      {dep.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">
                      {dep.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed max-w-lg font-medium">
                      {dep.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TECHNOLOGY / CAPABILITIES (DARK #050505 WITH SUBTLE GLASSMORPHISM) ─── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-14 lg:py-20 border-b border-[#27272A] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              ENGINEERING & PERFORMANCE
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Technology Designed <span className="text-[#9B1B9E]">for Visibility</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              Hardware and software capabilities built to maximize uptime, visual clarity, and engagement.
            </p>
          </div>

          {/* 6 Glassmorphism Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <Reveal key={cap.title} delay={idx * 0.05}>
                  <div className="rounded-[20px] border border-[#27272A] bg-[#151518]/80 backdrop-blur-md p-6 shadow-xl transition-all duration-300 hover:border-[#9B1B9E]/80 hover:-translate-y-1 h-full flex flex-col justify-between">
                    <div>
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0D0D0F] border border-[#27272A] text-[#9B1B9E] mb-4">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-medium">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. TECHNICAL SPECIFICATIONS (LIGHT SECTION bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              TECHNICAL PARAMETERS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Technical <span className="text-[#9B1B9E]">Specifications</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-2xl mx-auto font-medium">
              Verified hardware and operational specifications for MIEUX Digital Standee series.
            </p>
          </div>

          {/* Two-Column Specification Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Specs Column */}
            <div className="rounded-[24px] border border-[#E4E4E7] bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9B1B9E] mb-4 flex items-center gap-2">
                <Monitor className="h-4 w-4" /> Display & Optical Characteristics
              </h3>
              <div className="divide-y divide-[#E4E4E7]">
                {specsColumnLeft.map((spec) => (
                  <div key={spec.label} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#0D0D0F]">{spec.label}</span>
                    <span className="font-medium text-[#52525B] text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Specs Column */}
            <div className="rounded-[24px] border border-[#E4E4E7] bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-4 flex items-center gap-2">
                <Cpu className="h-4 w-4" /> Hardware & Platform Features
              </h3>
              <div className="divide-y divide-[#E4E4E7]">
                {specsColumnRight.map((spec) => (
                  <div key={spec.label} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#0D0D0F]">{spec.label}</span>
                    <span className="font-medium text-[#52525B] text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. PRODUCT APPLICATIONS (DARK #050505) ─── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-14 lg:py-20 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              TARGET SECTORS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Designed for Every <span className="text-[#9B1B9E]">Environment</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              Tailored display solutions engineered for high-impact commercial installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environments.map((env, idx) => (
              <Reveal key={env.title} delay={idx * 0.05}>
                <Link
                  to="/solutions"
                  className="group relative block overflow-hidden rounded-[20px] border border-[#27272A] bg-[#151518] shadow-xl aspect-[4/3]"
                >
                  <img
                    src={env.image}
                    alt={env.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#9B1B9E] transition-colors">
                      {env.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed line-clamp-2 font-medium">
                      {env.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FINAL CTA (DARK #050505 WITH FUTURISTIC RETAIL OVERLAY) ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-[#F5F5F5] py-16 sm:py-24 border-t border-[#27272A]">
        {/* Background futuristic display environment */}
        <img
          src={img.transparentLed}
          alt="MIEUX Futuristic Display Environment"
          className="absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/80 pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
              GET STARTED TODAY
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready to Put Your Brand on Display?
            </h2>
            <p className="mt-4 text-sm text-[#A1A1AA] sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
              Let's find the right digital display solution for your space.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-8 py-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-8 py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reusable OTP Verification Modal */}
      <OTPVerificationModal
        isOpen={otpOpen}
        onClose={() => setOtpOpen(false)}
        documentName="Mieux Digital Standee Brochure"
        documentUrl="/documents/digital-standee-brochure.pdf"
      />
    </div>
  );
}
