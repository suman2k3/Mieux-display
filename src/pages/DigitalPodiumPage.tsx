import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mic,
  Monitor,
  Volume2,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  FileText,
  CheckCircle2,
  Tv,
  Layers,
  ShieldCheck,
  Cpu,
  Maximize2,
  Phone,
  Usb,
  Cast,
} from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { img } from "@/data/site";
import { OTPVerificationModal } from "@/components/site/OTPVerificationModal";

const featureStrip = [
  {
    icon: Monitor,
    title: "Interactive Touch Screen",
    specs: '21.5" Full HD / 4K',
    desc: "Inbuilt 10-point capacitive PCAP touch monitor for fluid digital annotation and presentation control.",
  },
  {
    icon: Mic,
    title: "Dual Gooseneck Mic",
    specs: "Noise-Canceling",
    desc: "Integrated high-sensitivity gooseneck microphones with phantom power and acoustic echo suppression.",
  },
  {
    icon: SlidersHorizontal,
    title: "Motorized Adjustment",
    specs: "Height & Tilt Angle",
    desc: "Electrical height and screen tilt angle control for comfortable presenter posture.",
  },
  {
    icon: Volume2,
    title: "Integrated Audio",
    specs: "Amplifier & Speakers",
    desc: "Built-in high-fidelity audio system for crystal-clear voice amplification across auditoriums.",
  },
];

const podiumVariants = [
  {
    id: "ultra-podium",
    name: "Mieux Ultra Digital Podium",
    tagline: "Motorized Executive Presentation Hub",
    desc: "Premium motorized digital podium featuring a 21.5\" 4K touch monitor, dual gooseneck microphones, electrical height adjustment, built-in audio amplifier, and optional Windows OPS computer.",
    image: img.digitalPodium,
    badge: "Motorized Executive",
    specs: ['21.5" 4K PCAP Touch', "Electrical Height & Tilt", "Dual Gooseneck Mics + OPS Slot"],
  },
  {
    id: "slim-podium",
    name: "Mieux Slim Digital Podium",
    tagline: "Compact Smart Classroom Podium",
    desc: "Sleek, lightweight smart podium designed for modern classrooms and lecture halls with interactive touch screen, mic input, and plug-and-play multimedia connectivity.",
    image: img.digitalPodium,
    badge: "Smart Classroom",
    specs: ['21.5" Full HD Touch', "Gooseneck Microphone", "Heavy-Duty Lockable Castors"],
  },
];

const capabilities = [
  {
    icon: Monitor,
    title: "Inbuilt Touch Screen Monitor",
    desc: "21.5-inch 10-point PCAP capacitive touch screen with zero-gap bonding for natural digital writing and presentation navigation.",
  },
  {
    icon: Mic,
    title: "Integrated Gooseneck Microphones",
    desc: "Dual professional noise-canceling gooseneck microphones delivering clear audio pickup for auditoriums and halls.",
  },
  {
    icon: SlidersHorizontal,
    title: "Motorized Height & Angle Control",
    desc: "Smooth electric motor height adjustment and screen tilt customization for presenters of all heights.",
  },
  {
    icon: Volume2,
    title: "High-Fidelity Audio Amplification",
    desc: "Built-in commercial audio amplifier and speaker system with master volume and tone equalizer controls.",
  },
  {
    icon: Usb,
    title: "Universal I/O & Connectivity",
    desc: "Front & rear HDMI in/out, USB 3.0, XLR microphone output, RJ45 LAN, 3.5mm audio out, and Bluetooth.",
  },
  {
    icon: ShieldCheck,
    title: "Heavy-Duty Metallic Construction",
    desc: "Robust powder-coated steel chassis with lockable storage compartment and smooth multi-directional castor wheels.",
  },
];

const specsColumnLeft = [
  { label: "Interactive Touch Screen", value: '21.5" IPS Full HD / 4K UHD' },
  { label: "Touch Sensor Type", value: "10-Point PCAP Capacitive Touch" },
  { label: "Microphone System", value: "Dual Gooseneck Microphones + Phantom Power" },
  { label: "Audio System", value: "Built-in High-Fidelity Amplifier & Stereo Speakers" },
  { label: "Height & Tilt Adjustment", value: "Electrical Motorized Control" },
  { label: "Chassis Material", value: "Powder-Coated Mild Steel with Lockable Storage" },
];

const specsColumnRight = [
  { label: "OS & Processing", value: "Built-in Android 13 + Standard 80-Pin OPS Slot" },
  { label: "Video Connectivity", value: "HDMI Input, HDMI Pass-Through Output" },
  { label: "Audio & Mic Connectivity", value: "XLR Balanced Output, 3.5mm Line Out" },
  { label: "Network Connectivity", value: "Gigabit Ethernet RJ45, Dual-Band Wi-Fi, Bluetooth" },
  { label: "Mobility Architecture", value: "Heavy-Duty 360° Lockable Castor Wheels" },
  { label: "Commercial Warranty", value: "3 Years Commercial On-Site Replacement Warranty" },
];

const environments = [
  {
    title: "Modern Classrooms & Universities",
    desc: "Interactive teaching, digital whiteboarding, and hybrid university lecture halls.",
    image: img.solutionEducation,
  },
  {
    title: "Corporate Conference Halls",
    desc: "Executive boardrooms, AGM presentations, and corporate town hall meetings.",
    image: img.solutionCorporate,
  },
  {
    title: "Government & Civic Auditoriums",
    desc: "Public briefing halls, municipal assemblies, and official press conference centers.",
    image: img.solutionGovernment,
  },
  {
    title: "Convention Centers & Hotels",
    desc: "Keynote speeches, international summits, and banquet event halls.",
    image: img.solutionHospitality,
  },
];

export function DigitalPodiumPage() {
  const [otpOpen, setOtpOpen] = useState(false);

  return (
    <div className="bg-[#050505] text-[#F5F5F5] antialiased min-h-screen">
      {/* ─── 1. PREMIUM PRODUCT HERO (DARK #050505) ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-16 sm:py-20 lg:py-24 border-b border-[#27272A]">
        {/* Backdrop visual */}
        <img
          src={img.solutionCorporate}
          alt="Digital Podium Presentation Environment"
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
                  SMART DIGITAL PODIUM
                </div>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                  Mieux Digital Podium
                </h1>
                <p className="mt-2 font-display text-lg sm:text-xl font-bold text-[#9B1B9E]">
                  Speak. Present. Impress.
                </p>

                <p className="mt-5 text-xs sm:text-base leading-relaxed text-[#A1A1AA] font-medium max-w-xl">
                  Elevate presentations with the Mieux Ultra and Slim Digital Podium. Designed for modern classrooms, conference halls, and auditoriums, it features an inbuilt touch screen monitor, integrated gooseneck microphone, and multiple connectivity options delivering seamless control, clear communication, and a professional presentation experience every time.
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
                    <CheckCircle2 className="h-4 w-4 text-[#9B1B9E]" /> 21.5" Inbuilt Touch Screen
                  </span>
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#FF6B00]" /> Dual Gooseneck Microphones
                  </span>
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#9B1B9E]" /> Motorized Height & Tilt
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Product Image Composition (6 cols) */}
            <div className="lg:col-span-6 relative">
              <Reveal delay={0.12}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-[#9B1B9E]/25 blur-3xl" aria-hidden />

                  {/* Pure White Main Product Canvas */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px] border border-[#E4E4E7] bg-white shadow-2xl flex items-center justify-center p-4 sm:p-6">
                    <img
                      src={img.digitalPodium}
                      alt="Mieux Digital Podium"
                      className="h-full w-full object-contain object-center transition-transform duration-500 hover:scale-105"
                    />

                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between rounded-xl bg-white/95 border border-[#E4E4E7] p-4 shadow-md backdrop-blur-md">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF6B00]">
                          PREMIUM PRESENTATION HARDWARE
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#0D0D0F]">
                          Mieux Ultra & Slim Series
                        </h4>
                      </div>
                      <span className="rounded-full bg-[#9B1B9E] px-3 py-1 text-[11px] font-bold text-white shadow-md">
                        Inbuilt Touch + Mic
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. FEATURE STRIP (PURE WHITE LIGHT SECTION bg-[#F8F9FA]) ─── */}
      <section className="bg-[#F8F9FA] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              PODIUM ARCHITECTURE
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Engineered for Seamless <span className="text-[#9B1B9E]">Speaker Confidence</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] font-medium max-w-xl mx-auto">
              Combines touch screen navigation, professional audio pickup, electrical tilt controls, and clean cable routing into one unified podium.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              PODIUM SERIES & CONFIGURATIONS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Choose the Right Podium <span className="text-[#9B1B9E]">for Your Venue</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              Explore Mieux Ultra and Slim Digital Podium series designed for auditoriums, boardrooms, and academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {podiumVariants.map((variant, idx) => (
              <Reveal key={variant.id} delay={idx * 0.08}>
                <div className="rounded-[24px] border border-[#27272A] bg-[#151518] p-6 sm:p-8 h-full flex flex-col justify-between shadow-2xl hover:border-[#9B1B9E] transition-all duration-300 group">
                  <div>
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-white mb-6 border border-[#E4E4E7] flex items-center justify-center p-4">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 rounded-full bg-[#FF6B00] px-3 py-1 text-[10px] font-extrabold uppercase text-white shadow-md">
                        {variant.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#9B1B9E] transition-colors">
                      {variant.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-[#FF6B00]">
                      {variant.tagline}
                    </p>
                    <p className="mt-3 text-xs text-[#A1A1AA] leading-relaxed font-medium">
                      {variant.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#27272A] pt-4">
                    <ul className="space-y-2 text-xs font-semibold text-[#A1A1AA]">
                      {variant.specs.map((sp) => (
                        <li key={sp} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#9B1B9E] shrink-0" />
                          <span>{sp}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] py-3.5 text-xs font-bold text-white shadow-lg transition-all hover:bg-[#B52CB8]"
                    >
                      Enquire for {variant.name} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. CAPABILITIES GRID (PURE WHITE LIGHT SECTION bg-[#F8F9FA]) ─── */}
      <section className="bg-[#F8F9FA] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              KEY PERFORMANCE ADVANTAGES
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Comprehensive Features <span className="text-[#9B1B9E]">Built In</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] font-medium max-w-xl mx-auto">
              Discover how Mieux Digital Podium elevates modern speaker confidence and auditorium presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <Reveal key={cap.title} delay={idx * 0.05}>
                  <div className="rounded-[22px] border border-[#E4E4E7] bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#9B1B9E] transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 border border-[#E4E4E7] text-[#9B1B9E] mb-4">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#0D0D0F]">
                        {cap.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#52525B] leading-relaxed font-medium">
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

      {/* ─── 5. FULL SPECIFICATIONS (DARK #050505) ─── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-14 lg:py-20 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Commercial Hardware <span className="text-[#9B1B9E]">Data Sheet</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              Verified specifications for Mieux Digital Podium installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Specs Box */}
            <div className="rounded-[24px] border border-[#27272A] bg-[#151518] p-6 sm:p-8 shadow-2xl">
              <h3 className="font-display text-lg font-bold text-white mb-6 border-b border-[#27272A] pb-3 text-[#FF6B00]">
                Display & Microphones
              </h3>
              <div className="space-y-4">
                {specsColumnLeft.map((spec) => (
                  <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#27272A]/50 pb-3 text-xs">
                    <span className="font-medium text-[#A1A1AA]">{spec.label}</span>
                    <span className="font-bold text-white sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Specs Box */}
            <div className="rounded-[24px] border border-[#27272A] bg-[#151518] p-6 sm:p-8 shadow-2xl">
              <h3 className="font-display text-lg font-bold text-white mb-6 border-b border-[#27272A] pb-3 text-[#9B1B9E]">
                Connectivity & Enclosure
              </h3>
              <div className="space-y-4">
                {specsColumnRight.map((spec) => (
                  <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#27272A]/50 pb-3 text-xs">
                    <span className="font-medium text-[#A1A1AA]">{spec.label}</span>
                    <span className="font-bold text-white sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. REAL WORLD DEPLOYMENT VENUES (PURE WHITE LIGHT SECTION bg-[#F8F9FA]) ─── */}
      <section className="bg-[#F8F9FA] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              REAL-WORLD VENUES
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-[#0D0D0F] tracking-tight font-display">
              Designed for High-Impact <span className="text-[#9B1B9E]">Presentation Spaces</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environments.map((env, idx) => (
              <Reveal key={env.title} delay={idx * 0.06}>
                <div className="group rounded-[22px] border border-[#E4E4E7] bg-white p-5 shadow-sm hover:shadow-xl hover:border-[#9B1B9E] transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 mb-4 border border-[#E4E4E7]">
                      <img
                        src={env.image}
                        alt={env.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-base font-bold text-[#0D0D0F]">
                      {env.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#52525B] leading-relaxed font-medium">
                      {env.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. BOTTOM CTA SECTION (DARK #050505) ─── */}
      <section className="bg-[#050505] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00] mb-4">
            UPGRADE YOUR PRESENTATION VENUE
          </span>
          <h2 className="text-3xl font-extrabold sm:text-5xl font-display tracking-tight text-white leading-tight">
            Ready to deploy <span className="text-[#9B1B9E]">Mieux Digital Podium?</span>
          </h2>
          <p className="mt-4 text-xs sm:text-base text-[#A1A1AA] font-medium max-w-2xl mx-auto">
            Connect with our solution engineers for live demos, custom CAD drawings, and enterprise commercial pricing.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-[#B52CB8] hover:scale-105"
            >
              Request Presentation Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setOtpOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-8 py-4 text-sm font-semibold text-white transition-all hover:border-[#9B1B9E]"
            >
              <FileText className="h-4 w-4 text-[#9B1B9E]" /> Download Datasheet
            </button>
          </div>
        </div>
      </section>

      {/* OTP Verification Modal */}
      <OTPVerificationModal
        isOpen={otpOpen}
        onClose={() => setOtpOpen(false)}
        documentName="Mieux Digital Podium Datasheet"
        documentUrl="#"
      />
    </div>
  );
}
