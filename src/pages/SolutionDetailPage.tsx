import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { CtaSection } from "@/components/site/sections-2";
import { solutions, products } from "@/data/site";
import { NotFoundPage } from "./NotFoundPage";

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return <NotFoundPage />;
  }

  return (
    <>
      <section className="bg-[#050505] text-[#F5F5F5] relative overflow-hidden py-16 lg:py-24 border-b border-[#27272A]">
        <div className="absolute inset-0 grid-glow opacity-25" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1A1AA] hover:text-white transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" /> All Solutions
            </Link>
            <h1 className="mt-6 text-4xl font-bold font-display text-white sm:text-5xl">{solution.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#A1A1AA]">{solution.description}</p>
            <ul className="mt-8 space-y-3">
              {solution.outcomes.map((o: string) => (
                <li key={o} className="flex items-center gap-3 text-sm text-white">
                  <Check className="h-4 w-4 shrink-0 text-[#9B1B9E]" />
                  {o}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-9 inline-flex rounded-xl bg-[#9B1B9E] px-7 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5">
              Get Quote
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#9B1B9E]/20 blur-3xl" aria-hidden />
            <img src={solution.image} alt={solution.title} width={1200} height={900} className="relative aspect-[4/3] w-full rounded-3xl border border-[#27272A] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0F] text-[#F5F5F5] py-20 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white">Recommended products</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link to={`/products/${p.slug}`} className="group block overflow-hidden rounded-3xl border border-[#27272A] bg-[#151518] shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9B1B9E]/50">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="p-5 font-display text-base font-bold text-white group-hover:text-[#9B1B9E] transition-colors">{p.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
