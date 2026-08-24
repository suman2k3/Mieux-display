import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Play, X } from "lucide-react";
import { SectionHeading } from "@/components/site/motion-primitives";
import { clients, testimonials } from "@/data/site";
import makeInIndiaImg from "@/assets/make-in-india-logo.png";

export function TrustCredibility() {
  const [index, setIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<{
    isOpen: boolean;
    videoId: string;
    title: string;
  }>({
    isOpen: false,
    videoId: "",
    title: "",
  });

  // Triple duplicate for 100% seamless infinite right-to-left marquee loop
  const marqueeRow = [...clients, ...clients, ...clients];

  const count = testimonials.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  // Autoplay testimonial carousel every 5 seconds
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeVideo.isOpen) {
        setActiveVideo({ isOpen: false, videoId: "", title: "" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo.isOpen]);

  // Index helpers for 3-card desktop layout
  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  const videoCards = [
    {
      id: "qKrM83Trtv8",
      title: "MIEUX Display Customer Case Study",
      category: "Video Story 1",
    },
    {
      id: "Aq1UX3KkjBw",
      title: "Interactive Panel Live Demonstration",
      category: "Video Story 2",
    },
    {
      id: "ZhohYp36QVc",
      title: "High-Brightness LED Video Wall",
      category: "Video Story 3",
    },
  ];

  return (
    <section className="bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 border-b border-[#27272A] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Row with Make in India & GeM Logos at Top Right */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/40 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
              TRUSTED BY LEADERS, PROVEN BY RESULTS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl text-white tracking-tight font-display">
              What Our Clients <span className="text-[#9B1B9E]">Say</span>
            </h2>
          </div>

          {/* Header Right: Make in India & GeM Logos */}
          <div className="flex items-center gap-4 bg-[#151518] border border-[#27272A] rounded-2xl px-4 py-2">
            <img
              src={makeInIndiaImg}
              alt="Make in India"
              className="h-7 w-auto object-contain brightness-110"
            />
            <div className="h-5 w-px bg-[#27272A]" />
            <div className="flex items-center gap-1.5 font-display font-bold text-xs text-white">
              <span className="grid h-6 w-6 place-items-center rounded bg-[#FF6B00] text-[10px] font-black text-white">
                GeM
              </span>
              <span>Government Marketplace</span>
            </div>
          </div>
        </div>

        {/* Layout: Left 3 Testimonial Carousel Cards (8 cols) + Right Stats Card (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Testimonials Carousel Track (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative flex items-center gap-4 overflow-hidden py-1">
              
              {/* Floating Left Arrow */}
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition-all hover:bg-[#9B1B9E] hover:border-[#9B1B9E]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Floating Right Arrow */}
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition-all hover:bg-[#9B1B9E] hover:border-[#9B1B9E]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* 3 Visible Testimonial Cards on Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full px-6">
                {[prevIndex, index, nextIndex].map((idxPos, slotIndex) => {
                  const item = testimonials[idxPos]!;
                  const isMain = slotIndex === 1;
                  return (
                    <motion.div
                      key={`${item.name}-${slotIndex}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: isMain ? 1 : 0.75, scale: isMain ? 1 : 0.97 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
                        isMain
                          ? "bg-[#17171C] border-[#9B1B9E]/60 shadow-[0_0_25px_rgba(155,27,158,0.2)]"
                          : "bg-[#121215] border-[#27272A]"
                      }`}
                    >
                      <div>
                        <div className="flex gap-1 text-[#FF6B00] mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-[#A1A1AA] line-clamp-4 leading-relaxed font-medium italic">
                          “{item.quote}”
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-3 border-t border-[#27272A] pt-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#9B1B9E] text-xs font-bold text-white">
                          {item.initials}
                        </span>
                        <div className="min-w-0">
                          <span className="block truncate text-xs font-bold text-white">
                            {item.name}
                          </span>
                          <span className="block truncate text-[10.5px] text-[#A1A1AA]">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 3 Plain Video Thumbnails directly in the red marked area below the 3 Testimonial Cards */}
            <div className="mt-5 px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {videoCards.map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => setActiveVideo({ isOpen: true, videoId: vid.id, title: vid.title })}
                    className="group rounded-xl border border-[#27272A] bg-[#121215] p-2 transition-all duration-300 hover:border-[#9B1B9E] hover:shadow-xl cursor-pointer"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black border border-[#27272A]">
                      {/* Plain High-Res Video Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                        alt={vid.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Subtle Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />

                      {/* Centered Glowing Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-[#9B1B9E]/90 text-white shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#9B1B9E]">
                          <Play className="h-4 w-4 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Top Category Tag Badge */}
                      <div className="absolute top-2 left-2 z-10">
                        <span className="rounded bg-black/75 border border-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FF6B00] backdrop-blur-sm">
                          {vid.category}
                        </span>
                      </div>
                    </div>

                    <div className="mt-1.5 px-0.5">
                      <p className="text-[11px] font-semibold text-white truncate">{vid.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Statistics Block (4 cols — Exact Match to Reference Mockup) */}
          <div className="lg:col-span-4 rounded-2xl border border-[#27272A] bg-[#151518] p-6 flex flex-col justify-between shadow-xl">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 rounded-xl bg-[#0D0D0F] border border-[#27272A]">
                <span className="block font-display text-2xl font-black text-white">500+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">Installations</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D0D0F] border border-[#27272A]">
                <span className="block font-display text-2xl font-black text-white">100+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">Enterprise Clients</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D0D0F] border border-[#27272A]">
                <span className="block font-display text-2xl font-black text-white">25+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">Cities Served</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D0D0F] border border-[#27272A]">
                <span className="block font-display text-2xl font-black text-white">10+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">Years Experience</span>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-[#0D0D0F] border border-[#FF6B00]/40 text-center">
              <span className="block font-display text-3xl font-black text-[#FF6B00]">24/7</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">
                Enterprise Support
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* ── Fullscreen Video Lightbox Modal (Opens when user clicks any video card) ── */}
      <AnimatePresence>
        {activeVideo.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo({ isOpen: false, videoId: "", title: "" })}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/92 backdrop-blur-xl p-4 sm:p-6"
          >
            {/* Top Modal Header */}
            <div className="absolute top-0 inset-x-0 z-[100000] flex items-center justify-between p-5 bg-gradient-to-b from-black via-black/80 to-transparent border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#9B1B9E]/20 border border-[#9B1B9E]/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#9B1B9E]">
                  <Play className="h-3 w-3 fill-current" />
                  MIEUX VIDEO STORY
                </span>
                <h3 className="font-display text-sm sm:text-base font-bold text-white truncate max-w-md">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo({ isOpen: false, videoId: "", title: "" });
                }}
                aria-label="Close video player"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E] hover:scale-105"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl mt-12"
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
