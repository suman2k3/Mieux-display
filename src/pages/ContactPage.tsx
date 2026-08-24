import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { company, img } from "@/data/site";
import { Counter } from "@/components/site/motion-primitives";

const productCategories = [
  "Not sure yet",
  "Indoor LED",
  "Outdoor LED",
  "IFPD",
  "Kiosk",
  "Standee",
  "Signage",
  "Other Products",
];

const trustStats = [
  { value: 500, suffix: "+", label: "PROJECTS DELIVERED", desc: "Across enterprise & govt sectors" },
  { value: 100, suffix: "+", label: "ENTERPRISE CLIENTS", desc: "Trusted by industry leaders" },
  { value: 25, suffix: "+", label: "CITIES COVERED", desc: "Pan-India deployment network" },
  { value: 10, suffix: "+", label: "YEARS EXPERIENCE", desc: "In display engineering" },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Initial space, distance & workflow audit" },
  { step: "02", title: "Site Assessment", desc: "Structural & technical site evaluation" },
  { step: "03", title: "Solution Design", desc: "Custom resolution & pixel pitch blueprint" },
  { step: "04", title: "Quote & Approval", desc: "Fixed pricing proposal & specifications" },
  { step: "05", title: "Installation & Support", desc: "Turnkey setup with 24x7 AMC support" },
];

const previewProjects = [
  {
    id: 1,
    title: "National Strategic Command Center",
    category: "CONTROL ROOM",
    image: img.controlRoom,
  },
  {
    id: 2,
    title: "Fortune 500 Executive Boardroom",
    category: "INDOOR FINE PITCH",
    image: img.indoorLed,
  },
  {
    id: 3,
    title: "Medical University Auditorium",
    category: "INTERACTIVE DISPLAY",
    image: img.education,
  },
  {
    id: 4,
    title: "Luxury Flagship Glass Facade",
    category: "TRANSPARENT LED",
    image: img.transparentLed,
  },
];

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
    }, 800);
  };

  const scrollToForm = () => {
    const el = document.getElementById("quote-form");
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] antialiased min-h-screen">
      {/* ─── 1. HERO SECTION (DARK #050505 WITH BRIGHTER RECOGNIZABLE DISPLAY PHOTO) ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-14 sm:py-20 lg:py-24 border-b border-[#27272A]">
        {/* Brighter background photography so the real environment is immediately recognizable */}
        <img
          src={img.controlRoom}
          alt="MIEUX Engineered Display Installation"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55 brightness-110"
        />

        {/* Crisp gradient overlays ensuring text is 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-[#050505]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.12),transparent)] pointer-events-none" aria-hidden />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00] mb-3.5 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  GET A QUOTE
                </div>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl leading-[1.12]">
                  Tell Us About Your Space
                </h1>

                <p className="mt-3.5 text-xs sm:text-base text-[#A1A1AA] leading-relaxed max-w-xl font-medium">
                  Share your space, viewing distance and project requirements. Our team will recommend the right display solution for your environment.
                </p>

                {/* CTAs */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518]/90 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
                  >
                    Talk to an Expert
                  </a>
                </div>

                {/* Quick Trust Bar */}
                <div className="mt-8 border-t border-[#27272A] pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">500+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block">Projects</span>
                  </div>
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">100+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block">Clients</span>
                  </div>
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">25+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block">Cities</span>
                  </div>
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">10+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] block">Years</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side: Natural Integrated Content Panel (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.12}>
                <div className="rounded-[22px] border border-[#27272A] bg-[#151518]/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl space-y-5">
                  {/* Title & Overview */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E] block mb-1">
                      YOUR PROJECT, OUR EXPERTISE
                    </span>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-medium">
                      “From initial consultation to final installation, our team helps you choose the right display for your space, viewing distance, environment and budget.”
                    </p>
                  </div>

                  {/* 3-Step Consultation Flow */}
                  <div className="space-y-3.5 border-t border-[#27272A] pt-4">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-2 py-0.5 rounded-lg shrink-0">
                        01
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          TELL US YOUR REQUIREMENT
                        </h4>
                        <p className="mt-0.5 text-xs text-[#A1A1AA] leading-relaxed font-medium">
                          Share your space, application and project timeline.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-[#9B1B9E] bg-[#9B1B9E]/10 border border-[#9B1B9E]/30 px-2 py-0.5 rounded-lg shrink-0">
                        02
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          GET THE RIGHT RECOMMENDATION
                        </h4>
                        <p className="mt-0.5 text-xs text-[#A1A1AA] leading-relaxed font-medium">
                          Our team evaluates your requirements and recommends the appropriate display solution.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-white bg-[#27272A] border border-[#3F3F46] px-2 py-0.5 rounded-lg shrink-0">
                        03
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          RECEIVE YOUR QUOTE
                        </h4>
                        <p className="mt-0.5 text-xs text-[#A1A1AA] leading-relaxed font-medium">
                          Get a tailored recommendation, layout and quotation from our team.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time Badge */}
                  <div className="border-t border-[#27272A] pt-3.5 flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-[#A1A1AA] text-[10px]">
                      TYPICAL RESPONSE TIME
                    </span>
                    <span className="font-bold text-white bg-[#9B1B9E]/20 border border-[#9B1B9E]/40 px-3 py-1 rounded-full text-xs">
                      Within 1 business day
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. QUOTE FORM & DIRECT CONTACT SECTION (LIGHT SECTION bg-[#F7F7F5]) ─── */}
      <section id="quote-form" className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left: Form Card (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-[24px] border border-[#E4E4E7] bg-white p-6 sm:p-8 lg:p-9 shadow-xl text-[#0D0D0F]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                    PROJECT DETAILS
                  </span>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#0D0D0F]">
                    Let's plan your display solution.
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6 font-medium">
                    Tell us a little about your requirements and our team will get back to you with the right recommendation.
                  </p>

                  {sent ? (
                    <div className="flex flex-col items-center py-10 text-center rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] p-6">
                      <CheckCircle2 className="h-12 w-12 text-[#9B1B9E]" />
                      <h3 className="mt-4 font-display text-2xl font-bold text-[#0D0D0F]">Request Received</h3>
                      <p className="mt-2 max-w-md text-xs sm:text-sm text-[#52525B] leading-relaxed font-medium">
                        Thank you — our solutions team will analyze your requirements and get back to you with a detailed proposal within one business day.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="mt-6 rounded-xl border border-[#E4E4E7] bg-white px-6 py-2.5 text-xs font-semibold text-[#0D0D0F] hover:border-[#9B1B9E]"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                      <Field label="Full Name" name="name" placeholder="John Doe" />
                      <Field label="Company" name="company" placeholder="Company / Institution" />
                      <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                      <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />

                      <label className="sm:col-span-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#52525B]">
                          Product of Interest
                        </span>
                        <select
                          name="product"
                          className="mt-1.5 h-11 w-full rounded-xl border border-[#D4D4D8] bg-[#F4F4F5] px-3.5 text-xs text-[#0D0D0F] outline-none focus:border-[#9B1B9E] focus:bg-white transition-colors"
                        >
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat} className="bg-white text-[#0D0D0F]">
                              {cat}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="sm:col-span-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#52525B]">
                          Project Details
                        </span>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          placeholder="Room size, viewing distance, indoor or outdoor, timeline, budget guidance…"
                          className="mt-1.5 w-full rounded-xl border border-[#D4D4D8] bg-[#F4F4F5] p-3.5 text-xs text-[#0D0D0F] placeholder:text-[#A1A1AA] outline-none focus:border-[#9B1B9E] focus:bg-white transition-colors leading-relaxed"
                        />
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5 sm:col-span-2 sm:w-fit disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Processing...</span>
                        ) : (
                          <>
                            <span>Send Request</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right: Direct Contact Card (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-[24px] border border-[#E4E4E7] bg-white p-6 sm:p-8 text-[#0D0D0F] shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                      DIRECT REACH
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-extrabold text-[#0D0D0F]">
                      Talk to us directly
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] leading-relaxed font-medium">
                      Need immediate consultation or technical specification advice? Contact our engineering team.
                    </p>

                    <ul className="mt-6 space-y-4 text-xs font-medium border-t border-[#E4E4E7] pt-5">
                      <li className="flex items-start gap-3.5">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 border border-[#E4E4E7] text-[#FF6B00]">
                          <Phone className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block">Phone</span>
                          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-sm sm:text-base font-bold text-[#0D0D0F] hover:text-[#FF6B00] transition-colors">
                            {company.phone}
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-3.5">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 border border-[#E4E4E7] text-[#9B1B9E]">
                          <Mail className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block">Email</span>
                          <a href={`mailto:${company.email}`} className="text-xs sm:text-sm font-bold text-[#9B1B9E] transition-colors break-all">
                            {company.email}
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-3.5">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 border border-[#E4E4E7] text-[#FF6B00]">
                          <MapPin className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block">Office Address</span>
                          <span className="text-xs font-medium leading-relaxed text-[#52525B] block mt-0.5">
                            {company.address}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-[#E4E4E7] pt-4 bg-slate-50 rounded-xl p-4 border border-[#E4E4E7]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0D0D0F] mb-1">
                      <Clock className="h-4 w-4 text-[#9B1B9E]" />
                      <span>Support Hours</span>
                    </div>
                    <p className="text-[11px] leading-relaxed font-medium text-[#52525B]">
                      Monday to Saturday, 9:00 – 19:00 IST. AMC clients receive 24x7 priority support.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ENGINEERING EXCELLENCE + CLEAN HORIZONTAL STAT BAND (DARK #050505) ─── */}
      <section className="bg-[#050505] py-14 lg:py-20 border-b border-[#27272A] text-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              WHY MIEUX?
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              Engineering Excellence <span className="text-[#9B1B9E]">in Action</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              From specification to installation, our team delivers display solutions engineered for real-world environments.
            </p>
          </div>

          {/* Clean Horizontal Stat Band (No Heavy Cards) */}
          <div className="mt-8 pt-8 border-t border-b border-[#27272A] py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#27272A] text-center">
              {trustStats.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.05} className="pt-4 lg:pt-0 first:pt-0">
                  <div className="px-4">
                    <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-xs text-[#A1A1AA] font-medium">
                      {stat.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PROCESS SECTION WITH CONNECTED PROGRESSION FLOW (DARK #050505) ─── */}
      <section className="bg-[#050505] py-14 lg:py-20 border-b border-[#27272A] text-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              OUR PROCESS
            </span>
            <h2 className="mt-2.5 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              From Requirement <span className="text-[#9B1B9E]">to Installation</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-medium">
              From the first conversation to final installation, our team manages every stage of the display journey.
            </p>
          </div>

          {/* Connected Progression Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {processSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.05}>
                <div className="relative rounded-[20px] border border-[#27272A] bg-[#151518] p-5.5 h-full flex flex-col justify-between shadow-lg hover:border-[#9B1B9E] transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xl font-extrabold text-[#9B1B9E]">
                        {step.step}
                      </span>
                      {idx < processSteps.length - 1 && (
                        <ChevronRight className="hidden lg:block h-4 w-4 text-[#71717A] group-hover:text-[#9B1B9E] transition-colors" />
                      )}
                    </div>
                    <h4 className="font-display text-base font-bold text-white mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. DISPLAY SOLUTIONS GALLERY (LIGHT SECTION bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                MIEUX IN ACTION
              </span>
              <h2 className="mt-2.5 font-display text-3xl font-extrabold text-[#0D0D0F] sm:text-4xl tracking-tight">
                See Our Display Solutions in <span className="text-[#9B1B9E]">Real Environments</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-xl font-medium">
                Real installations across command centers, corporate headquarters, and education hubs.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-[#9B1B9E] px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5 shrink-0"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {previewProjects.map((proj, idx) => (
              <Reveal key={proj.id} delay={idx * 0.05}>
                <Link
                  to="/gallery"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#E4E4E7] bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9B1B9E] hover:shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      {proj.category}
                    </span>
                    <h4 className="mt-1 font-display text-xs font-bold text-[#0D0D0F] group-hover:text-[#9B1B9E] transition-colors line-clamp-1">
                      {proj.title}
                    </h4>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#9B1B9E] border-t border-[#E4E4E7] pt-2.5">
                    <span>View Gallery</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. FINAL CTA (DARK #050505) ─── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-16 sm:py-24 border-t border-[#27272A] relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.08),transparent)] pointer-events-none" aria-hidden />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
              CONSULTATION & SPECIFICATION
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your Display Experience?
            </h2>
            <p className="mt-4 text-sm text-[#A1A1AA] sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
              Share your space, budget and timeline. We’ll recommend the right display solution for your environment.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-8 py-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-8 py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
              >
                Talk to an Expert
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label>
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#52525B]">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 h-11 w-full rounded-xl border border-[#D4D4D8] bg-[#F4F4F5] px-3.5 text-xs text-[#0D0D0F] placeholder:text-[#A1A1AA] outline-none transition-colors focus:border-[#9B1B9E] focus:bg-white font-medium"
      />
    </label>
  );
}
