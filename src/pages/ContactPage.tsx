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
  ShieldCheck,
  Building,
  Award,
  Globe,
  Clock,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { company, img } from "@/data/site";

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
  { value: "500+", label: "PROJECTS DELIVERED", desc: "Across enterprise & govt sectors" },
  { value: "100+", label: "ENTERPRISE CLIENTS", desc: "Trusted by industry leaders" },
  { value: "25+", label: "CITIES COVERED", desc: "Pan-India deployment network" },
  { value: "10+", label: "YEARS EXPERIENCE", desc: "In display engineering" },
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
      {/* ─── 1. REFINED HERO SECTION (50/50 COMPOSITION WITH INTEGRATED RIGHT-SIDE EXPERTISE PANEL) ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-16 sm:py-20 lg:py-24 border-b border-[#27272A]">
        {/* Dark project background image */}
        <img
          src={img.controlRoom}
          alt="MIEUX Engineered Display Installation"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />

        {/* Gradient overlays for readability while keeping photography visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/98 via-[#050505]/85 to-[#050505]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.1),transparent)] pointer-events-none" aria-hidden />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00] mb-4 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  GET A QUOTE
                </div>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl leading-[1.15]">
                  Tell Us About Your Space
                </h1>

                <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl font-medium">
                  Share your space, viewing distance and project requirements. Our team will recommend the right display solution for your environment.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-xl transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518]/90 px-7 py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
                  >
                    Talk to an Expert
                  </a>
                </div>

                {/* Trust stats bar (ALL 4 STATS INCLUDED NOW) */}
                <div className="mt-10 border-t border-[#27272A] pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">500+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mt-0.5 block">Projects Delivered</span>
                  </div>
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">100+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mt-0.5 block">Enterprise Clients</span>
                  </div>
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">25+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mt-0.5 block">Cities Covered</span>
                  </div>
                  <div>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-white block">10+</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] mt-0.5 block">Years Experience</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side: Natural Integrated Content Panel (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="rounded-[22px] border border-[#27272A] bg-[#151518]/85 backdrop-blur-md p-6 sm:p-8 shadow-2xl space-y-6">
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
                  <div className="space-y-4 border-t border-[#27272A] pt-5">
                    <div className="flex items-start gap-3.5">
                      <span className="font-mono text-sm font-bold text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-2.5 py-1 rounded-lg shrink-0">
                        01
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                          TELL US YOUR REQUIREMENT
                        </h4>
                        <p className="mt-0.5 text-xs text-[#A1A1AA] leading-relaxed">
                          Share your space, application and project timeline.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <span className="font-mono text-sm font-bold text-[#9B1B9E] bg-[#9B1B9E]/10 border border-[#9B1B9E]/30 px-2.5 py-1 rounded-lg shrink-0">
                        02
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                          GET THE RIGHT RECOMMENDATION
                        </h4>
                        <p className="mt-0.5 text-xs text-[#A1A1AA] leading-relaxed">
                          Our team evaluates your requirements and recommends the appropriate display solution.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <span className="font-mono text-sm font-bold text-white bg-[#27272A] border border-[#3F3F46] px-2.5 py-1 rounded-lg shrink-0">
                        03
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                          RECEIVE YOUR QUOTE
                        </h4>
                        <p className="mt-0.5 text-xs text-[#A1A1AA] leading-relaxed">
                          Get a tailored recommendation, layout and quotation from our team.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Typical Response Time Badge */}
                  <div className="border-t border-[#27272A] pt-4 flex items-center justify-between text-xs">
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

      {/* ─── 2. QUOTE FORM & DIRECT CONTACT SECTION ─── */}
      <section id="quote-form" className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left: Form Card (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-[22px] border border-[#27272A] bg-[#151518] p-6 sm:p-8 lg:p-9 shadow-2xl text-white">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                    PROJECT DETAILS
                  </span>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-white">
                    Let's plan your display solution.
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                    Tell us a little about your requirements and our team will get back to you with the right recommendation.
                  </p>

                  {sent ? (
                    <div className="flex flex-col items-center py-12 text-center rounded-xl bg-[#0D0D0F] border border-[#27272A] p-6">
                      <CheckCircle2 className="h-12 w-12 text-[#9B1B9E]" />
                      <h3 className="mt-4 font-display text-2xl font-bold text-white">Request Received</h3>
                      <p className="mt-2 max-w-md text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        Thank you — our solutions team will analyze your requirements and get back to you with a detailed proposal within one business day.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="mt-6 rounded-xl border border-[#27272A] bg-[#151518] px-6 py-2.5 text-xs font-semibold text-white hover:border-[#9B1B9E]"
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
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                          Product of Interest
                        </span>
                        <select
                          name="product"
                          className="mt-1.5 h-11 w-full rounded-xl border border-[#27272A] bg-[#0D0D0F] px-3.5 text-xs text-white outline-none focus:border-[#9B1B9E] transition-colors"
                        >
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat} className="bg-[#0D0D0F]">
                              {cat}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="sm:col-span-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">
                          Project Details
                        </span>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          placeholder="Room size, viewing distance, indoor or outdoor, timeline, budget guidance…"
                          className="mt-1.5 w-full rounded-xl border border-[#27272A] bg-[#0D0D0F] p-3.5 text-xs text-white outline-none focus:border-[#9B1B9E] transition-colors leading-relaxed"
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
                <div className="rounded-[22px] border border-[#27272A] bg-[#151518] p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                      DIRECT REACH
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-extrabold text-white">
                      Talk to us directly
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      Need immediate consultation or technical specification advice? Contact our engineering team.
                    </p>

                    <ul className="mt-6 space-y-4 text-xs font-medium border-t border-[#27272A] pt-6">
                      <li className="flex items-start gap-3.5">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0D0D0F] border border-[#27272A] text-[#FF6B00]">
                          <Phone className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block">Phone</span>
                          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-sm sm:text-base font-bold text-white hover:text-[#FF6B00] transition-colors">
                            {company.phone}
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-3.5">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0D0D0F] border border-[#27272A] text-[#9B1B9E]">
                          <Mail className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block">Email</span>
                          <a href={`mailto:${company.email}`} className="text-xs sm:text-sm font-bold text-white hover:text-[#9B1B9E] transition-colors break-all">
                            {company.email}
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-3.5">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0D0D0F] border border-[#27272A] text-[#FF6B00]">
                          <MapPin className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block">Office Address</span>
                          <span className="text-xs font-medium leading-relaxed text-[#A1A1AA] block mt-0.5">
                            {company.address}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-[#27272A] pt-5 bg-[#0D0D0F] rounded-xl p-4 border">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                      <Clock className="h-4 w-4 text-[#9B1B9E]" />
                      <span>Support Hours</span>
                    </div>
                    <p className="text-[11px] leading-relaxed font-medium text-[#A1A1AA]">
                      Monday to Saturday, 9:00 – 19:00 IST. AMC clients receive 24x7 priority support.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRUST / CREDIBILITY SECTION ("Why MIEUX?") ─── */}
      <section className="bg-[#0D0D0F] py-16 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="WHY MIEUX?"
            title="Engineering Excellence in Action"
            subtitle="From specification to installation, our team delivers display solutions engineered for real-world environments."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {trustStats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.08}>
                <div className="rounded-[20px] border border-[#27272A] bg-[#151518] p-6 text-center transition-all duration-300 hover:border-[#9B1B9E]/60 hover:-translate-y-1 shadow-lg">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-white block">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FF6B00] block">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-xs text-[#A1A1AA] block font-medium">
                    {stat.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. PROCESS SECTION ("From Requirement to Installation") ─── */}
      <section className="bg-[#050505] py-16 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="OUR PROCESS"
            title="From Requirement to Installation"
            subtitle="From the first conversation to final installation, our team manages every stage of the display journey."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08}>
                <div className="relative rounded-[20px] border border-[#27272A] bg-[#151518] p-6 h-full flex flex-col justify-between shadow-md hover:border-[#9B1B9E]/60 transition-colors">
                  <div>
                    <span className="font-mono text-2xl font-bold text-[#9B1B9E] block mb-3">
                      {step.step}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PROJECT PREVIEW SECTION ("MIEUX IN ACTION") ─── */}
      <section className="bg-[#0D0D0F] py-16 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading
              align="left"
              dark
              eyebrow="MIEUX IN ACTION"
              title="See Our Display Solutions in Real Environments"
              subtitle="Real installations across command centers, corporate headquarters, and education hubs."
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {previewProjects.map((proj, idx) => (
              <Reveal key={proj.id} delay={idx * 0.08}>
                <Link
                  to="/gallery"
                  className="group relative overflow-hidden rounded-[20px] border border-[#27272A] bg-[#151518] shadow-xl aspect-[4/3] block"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00]">
                      {proj.category}
                    </span>
                    <h4 className="mt-1 font-display text-sm font-bold text-white group-hover:text-[#9B1B9E] transition-colors line-clamp-1">
                      {proj.title}
                    </h4>
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs font-bold text-[#9B1B9E]">
                      <span>View Gallery</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. FINAL CONSULTATION & SPECIFICATION CTA ─── */}
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
            <p className="mt-4 text-sm text-[#A1A1AA] sm:text-base max-w-xl mx-auto leading-relaxed">
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
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A1A1AA]">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 h-11 w-full rounded-xl border border-[#27272A] bg-[#0D0D0F] px-3.5 text-xs text-white outline-none transition-colors focus:border-[#9B1B9E]"
      />
    </label>
  );
}
