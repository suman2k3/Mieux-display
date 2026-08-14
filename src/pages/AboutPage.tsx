import {
  Handshake,
  Scale,
  Sparkles,
  Award,
  Users,
  Target,
  Wrench,
  UserCheck,
  Globe,
  CheckCircle2,
  Flag,
  Layers,
  Building2,
  Star,
  Trophy,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Counter, Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { ClientMarquee } from "@/components/site/sections";
import { CtaSection } from "@/components/site/sections-2";
import { IndiaBranchMap } from "@/components/site/IndiaBranchMap";
import { img, stats } from "@/data/site";

const pillars = [
  {
    title: "Survey first",
    body: "Every quote starts with a site survey: viewing distance, ambient light, structure and cabling.",
  },
  {
    title: "In-house install",
    body: "Our own certified crews handle rigging, calibration and commissioning — no subcontract surprises.",
  },
  {
    title: "Lifetime support",
    body: "AMC options with 4-hour response in 25 cities and spares held locally.",
  },
];

const valuesList = [
  {
    title: "Trust",
    icon: Handshake,
    desc: "Building enduring relationships through transparency, reliability, and consistent product quality.",
  },
  {
    title: "Ethics",
    icon: Scale,
    desc: "Operating with absolute integrity, fairness, and professional honor in every deployment.",
  },
  {
    title: "Innovation",
    icon: Sparkles,
    desc: "Continuously advancing display technology to deliver higher performance, clarity, and value.",
  },
  {
    title: "Excellence",
    icon: Award,
    desc: "Striving for precision engineering, zero-defect installation, and superior visual standards.",
  },
  {
    title: "Teamwork",
    icon: Users,
    desc: "Uniting engineering, support, and sales expertise to deliver turnkey client success.",
  },
  {
    title: "Customer Centric",
    icon: Target,
    desc: "Putting client needs, viewing workflows, and long-term satisfaction at the center of everything we do.",
  },
];

const whyChoosePoints = [
  {
    title: "In-House Installation & Service",
    icon: Wrench,
    desc: "Our certified engineering crews manage end-to-end rigging, optical calibration, and lifecycle maintenance.",
  },
  {
    title: "Trained Technical Resources",
    icon: UserCheck,
    desc: "Skilled hardware and software specialists dedicated to NOC/SOC optimization and 24/7 technical readiness.",
  },
  {
    title: "Partner Network Coverage",
    icon: Globe,
    desc: "Extensive Pan-India service ecosystem ensuring rapid on-site response and local spare availability across 25+ cities.",
  },
  {
    title: "Make in India Products",
    icon: CheckCircle2,
    desc: "Proudly engineered and assembled in India, compliant with national standards and GeM portal guidelines.",
  },
];

const journeyMilestones = [
  {
    year: "2021",
    title: "Brand Launch",
    desc: "Introducing MIEUX IFPD portfolio & brand identity across commercial sectors.",
    icon: Flag,
  },
  {
    year: "2022",
    title: "Product Launch",
    desc: "Expanded into fine-pitch COB LED walls, outdoor displays, and digital kiosks.",
    icon: Layers,
  },
  {
    year: "2023",
    title: "New Branch",
    desc: "Opened new regional offices and service hubs to accelerate Pan-India deployment.",
    icon: Building2,
  },
  {
    year: "2024",
    title: "Brand Popularity",
    desc: "Registered on GeM portal and recognized as a top-tier display brand.",
    icon: Star,
  },
  {
    year: "2025",
    title: "National Level Events",
    desc: "Showcasing engineered solutions at DIDAC, Eldrok, Swaraksha, and IT Voice.",
    icon: Trophy,
  },
];

export function AboutPage() {
  return (
    <div className="bg-[#050505] text-[#F5F5F5] antialiased">
      {/* ─── 1. ABOUT US HERO ─── */}
      <PageHero
        eyebrow="About Us"
        title="A display partner that stays after handover"
        subtitle="Founded by AV engineers, MIEUX DISPLAY has delivered over 500 projects for enterprises, campuses and government bodies across India."
      />

      {/* ─── 2. ENGINEERING, NOT RESELLING (DARK SYSTEM THEME) ─── */}
      <section className="bg-[#0D0D0F] py-20 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal x={-24}>
            <div className="relative overflow-hidden rounded-3xl border border-[#27272A] bg-[#151518] shadow-2xl aspect-[4/3]">
              <img
                src={img.corporate}
                alt="MIEUX team reviewing a video wall deployment"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>
          <Reveal x={24}>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="mt-2 text-3xl font-extrabold font-display text-white sm:text-4xl leading-tight">
              Engineering, not reselling
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
              We started because too many display projects were sold on spec sheets and abandoned at
              delivery. MIEUX owns the entire chain — design, structure, power, processing, content and
              service — so the wall you sign off on still performs three years later.
            </p>
            <div className="mt-8 space-y-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-[#27272A] bg-[#151518] p-5 shadow-lg transition-all duration-300 hover:border-[#9B1B9E]/80 hover:-translate-y-0.5"
                >
                  <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 3. 500+ / 100+ / 25+ / 10+ STATS (RENDERED ONCE) ─── */}
      <section className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-20 border-b border-[#27272A]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl p-6 text-center border border-[#27272A] bg-[#151518] shadow-xl hover:border-[#9B1B9E]/60 transition-colors">
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B00]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── 4. VISION & MISSION SECTION ─── */}
      <section className="bg-[#0D0D0F] py-20 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="OUR PURPOSE"
            title="Vision & Mission"
            subtitle="Guiding principles driving our engineering standards, customer relationships, and product development."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal x={-20}>
              <div className="rounded-[22px] border border-[#27272A] bg-[#151518] p-8 shadow-2xl h-full flex flex-col justify-between hover:border-[#9B1B9E]/60 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-32 w-32 bg-[radial-gradient(ellipse_at_top_right,rgba(155,27,158,0.15),transparent)] pointer-events-none" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                    OUR VISION
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white">
                    Empowering Effective Visual Communication
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    “To be a market leader helping the world to communicate, interact, collaborate and share ideas, learnings and offerings effectively through hassle-free, visually appealing platforms using our innovative and right-value technology products.”
                  </p>
                </div>
                <div className="mt-6 border-t border-[#27272A] pt-4 flex items-center gap-2 text-xs font-semibold text-[#9B1B9E]">
                  <Sparkles className="h-4 w-4" />
                  <span>Right-Value Technology Products</span>
                </div>
              </div>
            </Reveal>

            <Reveal x={20}>
              <div className="rounded-[22px] border border-[#27272A] bg-[#151518] p-8 shadow-2xl h-full flex flex-col justify-between hover:border-[#9B1B9E]/60 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-32 w-32 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.15),transparent)] pointer-events-none" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                    OUR MISSION
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white">
                    Delivering Delight Through Competent Expertise
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    “To offer a range of advanced, world-class technology products to our customers to solve problems and deliver delight through a team of qualified and competent professionals.”
                  </p>
                </div>
                <div className="mt-6 border-t border-[#27272A] pt-4 flex items-center gap-2 text-xs font-semibold text-[#FF6B00]">
                  <Target className="h-4 w-4" />
                  <span>Solving Real-World Display Challenges</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 5. OUR VALUES SECTION ─── */}
      <section className="bg-[#050505] py-20 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="CORE BELIEFS"
            title="Our Values"
            subtitle="The fundamental values that define how we build displays, support partners, and conduct business."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesList.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <Reveal key={val.title} delay={idx * 0.06}>
                  <div className="rounded-[20px] border border-[#27272A] bg-[#151518] p-6 h-full flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#9B1B9E]/80 hover:-translate-y-1">
                    <div>
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0D0D0F] border border-[#27272A] text-[#9B1B9E] mb-4">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {val.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. WHY CHOOSE MIEUX? SECTION ─── */}
      <section className="bg-[#0D0D0F] py-20 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="THE MIEUX ADVANTAGE"
            title="Why Choose MIEUX?"
            subtitle="End-to-end capabilities engineered to provide reliable performance and seamless project execution."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoosePoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <Reveal key={pt.title} delay={idx * 0.08}>
                  <div className="rounded-[20px] border border-[#27272A] bg-[#151518] p-7 flex items-start gap-4 shadow-xl hover:border-[#9B1B9E]/60 transition-colors">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0D0D0F] border border-[#27272A] text-[#FF6B00]">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        {pt.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. OUR JOURNEY SECTION (MILESTONES TIMELINE) ─── */}
      <section className="bg-[#050505] py-20 lg:py-24 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="OUR MILESTONES"
            title="Our Journey"
            subtitle="A legacy of continuous innovation, strategic expansion, and trusted engineering partnerships."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journeyMilestones.map((ms, idx) => {
              const IconComp = ms.icon;
              return (
                <Reveal key={ms.year} delay={idx * 0.08}>
                  <div className="rounded-[20px] border border-[#27272A] bg-[#151518] p-6 h-full flex flex-col justify-between shadow-lg hover:border-[#9B1B9E]/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xl font-extrabold text-[#9B1B9E]">
                          {ms.year}
                        </span>
                        <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#0D0D0F] border border-[#27272A] text-[#FF6B00]">
                          <IconComp className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="font-display text-base font-bold text-white">
                        {ms.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                        {ms.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. OUR PRESENCE ACROSS INDIA (INTERACTIVE MAP) ─── */}
      <IndiaBranchMap />

      {/* ─── 9. TRUSTED BY ENTERPRISE AND GOVERNMENT CLIENTS ─── */}
      <ClientMarquee />

      {/* ─── 10. FINAL CONSULTATION & SPECIFICATION CTA ─── */}
      <CtaSection />
    </div>
  );
}

