import { motion } from "framer-motion";
import { clientLogos } from "@/data/site";

export function ClientLogosMarquee() {
  // Multiply for smooth continuous infinite marquee scroll
  const marqueeRow = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-[#050505] text-[#F5F5F5] py-8 border-b border-[#27272A] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-4 flex items-center justify-between gap-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF7A00]">
          TRUSTED BY LEADING ORGANIZATIONS & INSTITUTIONS ACROSS INDIA
        </span>
        <span className="text-[11px] text-[#A1A1AA] font-mono hidden sm:inline">
          PAN-INDIA DEPLOYMENTS
        </span>
      </div>

      <div className="relative flex overflow-hidden py-3">
        {/* Left and Right Fade Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          className="flex gap-5 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {marqueeRow.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex shrink-0 items-center gap-3.5 rounded-2xl border border-[#E4E4E7] bg-white px-5 py-3 transition-all hover:border-[#9B1B9E] hover:scale-[1.03] shadow-md group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 sm:h-12 w-auto object-contain max-w-[120px] transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display text-xs font-bold text-[#0D0D0F] tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
