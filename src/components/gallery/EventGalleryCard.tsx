import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { EventGallery, GalleryPhoto } from "@/data/galleryData";
import { Reveal } from "@/components/site/motion-primitives";

interface EventGalleryCardProps {
  event: EventGallery;
  index: number;
  onOpenLightbox: (eventId: string, photoIndex: number) => void;
}

const PREVIEW_LIMIT = 5;

export function EventGalleryCard({ event, index, onOpenLightbox }: EventGalleryCardProps) {
  const images = event.images;
  const previewImages = images.slice(0, PREVIEW_LIMIT);
  const isAlternate = index % 2 === 1;
  const photoCount = images.length;
  const photoLabel = photoCount === 1 ? "Photo" : "Photos";

  /** Single image tile with smooth 200ms desktop scale and View Photo overlay */
  const renderImage = (img: GalleryPhoto, idx: number, heightClass: string) => (
    <motion.div
      key={img.id}
      whileHover="hover"
      className={`group relative cursor-pointer overflow-hidden rounded-[18px] bg-[#151518] border border-[#27272A] shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#9B1B9E]/60 ${heightClass}`}
      onClick={() => onOpenLightbox(event.id, idx)}
    >
      <img
        src={img.url}
        alt={img.alt || `${event.title} - Photo ${idx + 1}`}
        loading="lazy"
        className="block h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-105"
      />

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Bottom CTA on Hover (Desktop) */}
      <div className="absolute bottom-3 right-3 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
        <div className="inline-flex items-center gap-1.5 rounded-xl bg-[#050505]/85 border border-[#9B1B9E]/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md shadow-lg">
          <span className="text-[#9B1B9E]">View Photo</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-white" />
        </div>
      </div>
    </motion.div>
  );

  /** Smart Layout: 1 Large Featured Image + Supporting Images Grid */
  const renderLayout = () => {
    const len = previewImages.length;
    if (len === 0) return null;

    if (len === 1) {
      return renderImage(previewImages[0], 0, "h-[280px] sm:h-[360px] lg:h-[440px]");
    }

    if (len === 2) {
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {renderImage(previewImages[0], 0, "h-[240px] sm:h-[300px] lg:h-[360px]")}
          {renderImage(previewImages[1], 1, "h-[240px] sm:h-[300px] lg:h-[360px]")}
        </div>
      );
    }

    const firstImage = previewImages[0];
    const supportingImages = previewImages.slice(1);

    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Large Featured Image (7 cols on desktop) */}
        <div className="lg:col-span-7">
          {renderImage(firstImage, 0, "h-[300px] sm:h-[380px] lg:h-[420px]")}
        </div>

        {/* 4 Supporting Images (5 cols on desktop in 2x2 grid) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {supportingImages.map((img, idx) =>
            renderImage(img, idx + 1, "h-[142px] sm:h-[182px] lg:h-[202px]")
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id={event.slug}
      className={`py-16 sm:py-24 border-b border-[#27272A] ${isAlternate ? "bg-[#0D0D0F]" : "bg-[#050505]"} text-white`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ── Event Header ── */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#27272A] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                EVENT GALLERY
              </span>
              <span className="text-xs font-mono font-bold text-[#A1A1AA]">• {event.year}</span>
            </div>

            <div className="flex items-center gap-3 mt-1.5">
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                {event.title}
              </h2>
              <span className="h-2 w-2 rounded-full bg-[#9B1B9E]" />
            </div>

            {event.description && (
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                “{event.description}”
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#27272A] bg-[#151518] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
              {photoCount} {photoLabel}
            </span>
          </div>
        </div>

        {/* ── Image Gallery Composition ── */}
        <Reveal>
          {renderLayout()}
        </Reveal>

        {/* ── View All Photos Button ── */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center sm:justify-end">
            <button
              onClick={() => onOpenLightbox(event.id, 0)}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
            >
              <span>View all {photoCount} photos</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
