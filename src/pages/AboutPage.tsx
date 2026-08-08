import { PageHero } from "@/components/site/PageHero";
import { Counter, Reveal } from "@/components/site/motion-primitives";
import { ClientMarquee } from "@/components/site/sections";
import { CtaSection } from "@/components/site/sections-2";
import { img, stats } from "@/data/site";

const pillars = [
  { title: "Survey first", body: "Every quote starts with a site survey: viewing distance, ambient light, structure and cabling." },
  { title: "In-house install", body: "Our own certified crews handle rigging, calibration and commissioning — no subcontract surprises." },
  { title: "Lifetime support", body: "AMC options with 4-hour response in 25 cities and spares held locally." },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A display partner that stays after handover"
        subtitle="Founded by AV engineers, MIEUX DISPLAY has delivered over 500 projects for enterprises, campuses and government bodies across India."
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal x={-24}>
            <img src={img.corporate} alt="MIEUX team reviewing a video wall deployment" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
          </Reveal>
          <Reveal x={24}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Engineering, not reselling</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We started because too many display projects were sold on spec sheets and abandoned at
              delivery. MIEUX owns the entire chain — design, structure, power, processing, content and
              service — so the wall you sign off on still performs three years later.
            </p>
            <div className="mt-8 space-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="font-display text-base font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-7 text-center">
                <p className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-on-dark-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ClientMarquee />
      <CtaSection />
    </>
  );
}
