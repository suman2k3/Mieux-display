import { Reveal } from "@/components/site/motion-primitives";

export function MakeInIndia() {
  return (
    <section className="py-16 bg-[#080808] text-white border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-[#0B1F35] p-8 flex flex-col items-center justify-center text-center shadow-2xl h-full transition-all hover:border-white/20">
              {/* // PLACEHOLDER — Replace with actual Make in India logo asset */}
              <div className="w-20 h-20 mb-6 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                <span className="font-display font-black text-white text-xl tracking-wider">MII</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Proudly Made in India</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Committed to indigenous manufacturing and self-reliance in display engineering.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-[#0B1F35] p-8 flex flex-col items-center justify-center text-center shadow-2xl h-full transition-all hover:border-white/20">
              {/* // PLACEHOLDER — Replace with actual GeM logo asset */}
              <div className="w-20 h-20 mb-6 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                <span className="font-display font-black text-white text-xl tracking-wider">GeM</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Registered on GeM</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Authorized vendor and display technology partner on Government e Marketplace.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
