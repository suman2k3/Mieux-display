import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="section-dark relative isolate overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 grid-glow opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-on-dark-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 text-4xl font-bold text-on-dark sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-on-dark-muted"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
