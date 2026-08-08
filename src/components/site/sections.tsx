import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Eye, FileText } from "lucide-react";
import { Reveal, SectionHeading, Counter } from "./motion-primitives";
import { products, solutions, industries, stats, clients, img } from "@/data/site";

export function ProductShowcase() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Product Range"
            title="Every display format, one accountable partner"
            subtitle="Ten core display families, each specified, installed and serviced by our own engineering team."
          />
          <Reveal delay={0.15}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              View all products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto pb-6">
        <div className="flex w-max gap-6 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2))]">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.07 }}
            >
              <Link
                to={`/products/${p.slug}`}
                className="group relative block h-[420px] w-[300px] overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-lift sm:w-[340px]"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6 pt-20">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {p.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-on-dark">{p.name}</h3>
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm leading-relaxed text-on-dark-muted">{p.description}</p>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground">
                        View Product <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionsSection() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Solutions"
          title="Built around how your sector actually works"
          subtitle="From smart classrooms to defence situation rooms, each deployment is designed for its environment, workflow and compliance needs."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/solutions/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section-dark relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 grid-glow opacity-30" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal x={-30}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-3xl" aria-hidden />
            <img
              src={img.indoorLed}
              alt="MIEUX engineers installing a fine-pitch LED wall"
              loading="lazy"
              width={1200}
              height={900}
              className="relative aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            dark
            eyebrow="Why MIEUX"
            title="Engineering-led, not box-shifting"
            subtitle="We survey, specify, install, commission and support. One team owns the outcome from first drawing to the last service visit."
          />
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6">
                  <p className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-on-dark-muted">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  const featured = products.slice(0, 6);
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Most specified this quarter"
          subtitle="Download a brochure or request pricing directly — our team replies within one business day."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">{p.name}</h3>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                    {p.specs.slice(0, 3).map((sp) => (
                      <li key={sp} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {sp}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      to={`/products/${p.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Eye className="h-3.5 w-3.5" /> Quick View
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Download className="h-3.5 w-3.5" /> Brochure
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <FileText className="h-3.5 w-3.5" /> Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Trusted by 100+ enterprise and government teams
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="grid h-16 w-44 shrink-0 place-items-center rounded-2xl border border-border bg-surface font-display text-sm font-bold tracking-[0.18em] text-muted-foreground grayscale transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:text-primary hover:grayscale-0"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="section-dark relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 grid-glow opacity-25" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Industries"
          title="Versatile solutions for every industry"
          subtitle="Deployments across six core industries, from single boardrooms to multi-city rollouts."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 4) * 0.07}>
              <Link
                to={`/solutions/${ind.slug}`}
                className="group relative block h-72 overflow-hidden rounded-3xl border border-white/10"
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-300 group-hover:from-primary/70 group-hover:via-ink/60" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-lg font-semibold text-on-dark">{ind.title}</h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-on-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read More <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
