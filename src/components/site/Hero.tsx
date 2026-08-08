import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/data/site";

const slides = [
  {
    kicker: "LED Video Walls",
    title: "Displays that make every room the main stage",
    body: "Fine-pitch LED walls engineered, calibrated and installed by MIEUX — for auditoriums, lobbies and command centres across India.",
    image: img.heroVideoWall,
  },
  {
    kicker: "Interactive Flat Panels",
    title: "Collaboration without the friction",
    body: "4K multi-touch panels with wireless casting, whiteboarding and fleet management built for classrooms and boardrooms.",
    image: img.heroIfp,
  },
  {
    kicker: "Outdoor LED",
    title: "Brilliance that beats the sunlight",
    body: "IP65 high-brightness facade and billboard systems rated up to 8000 nits, monitored around the clock from the cloud.",
    image: img.heroOutdoor,
  },
  {
    kicker: "Control Rooms",
    title: "Visualisation for mission-critical work",
    body: "Redundant, 24x7-rated LED and LCD walls with KVM and multi-source processing for operations that cannot stop.",
    image: img.controlRoom,
  },
];

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  delay: (i % 7) * 0.6,
  size: 2 + (i % 3),
}));

export function Hero() {
  const [index, setIndex] = useState(0);
  const go = useCallback((dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go]);

  const slide = slides[index]!;

  return (
    <section className="relative isolate overflow-hidden bg-ink text-on-dark">
      <div className="absolute inset-0 grid-glow opacity-40" aria-hidden />
      <div className="absolute inset-0" aria-hidden>
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/60"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -26, 0], opacity: [0.15, 0.8, 0.15] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-on-dark-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                {slide.kicker}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                {slide.title.split(" ").map((w, i) => (
                  <motion.span
                    key={`${index}-${i}`}
                    className="mr-[0.28em] inline-block"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.45 }}
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">{slide.body}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-on-dark backdrop-blur transition-colors hover:border-accent hover:bg-accent/10"
            >
              Get Quote
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.kicker}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-10 bg-accent" : "w-4 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <div className="ml-auto flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:border-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next slide"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:border-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl" aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <AnimatePresence mode="sync">
              <motion.img
                key={index}
                src={slide.image}
                alt={slide.kicker}
                width={1600}
                height={1100}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/20 to-transparent" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
