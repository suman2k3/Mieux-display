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
  const isDark = index % 2 === 0; // 0 (Dark), 1 (Light), 2 (Dark), 3 (Light), 4 (Dark)
  const photoCount = images.length;
  const photoLabel = photoCount === 1 ? "Photo" : "Photos";

  /** Single image tile with clean hover scale and non-blocking gradient overlay */
  const renderImage = (img: GalleryPhoto, idx: number, heightClass: string, isLightSection: boolean) => (
    <motion.div
      key={img.id}
      whileHover="hover"
      className={`group relative cursor-pointer overflow-hidden rounded-[16px] sm:rounded-[20px] shadow-sm transition-all duration-300 hover:shadow-xl ${
        isLightSection
          ? "border border-[#E4E4E7] bg-white hover:border-[#9B1B9E]"
          : "border border-[#27272A] bg-[#121215] hover:border-[#9B1B9E]/80"
      } ${heightClass}`}
      onClick={() => onOpenLightbox(event.id, idx)}
    >
      <img
        src={img.url}
        alt={img.alt || `${event.title} - Photo ${idx + 1}`}
        loading="lazy"
        className="block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Subtle Bottom Overlay on Hover for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      {/* Bottom CTA Badge on Hover */}
      <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#050505]/85 border border-[#9B1B9E]/50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-bold text-white backdrop-blur-md shadow-lg">
          <span className="text-[#9B1B9E]">View Photo</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-white" />
        </div>
      </div>
    </motion.div>
  );

  /** Vary Editorial Bento Composition to Reduce Visual Repetition */
  const renderEditorialLayout = (isLight: boolean) => {
    const len = previewImages.length;
    if (len === 0) return null;

    const layoutType = index % 4; // 0, 1, 2, 3 pattern

    // Layout 0: Large Featured Left (65%) + 2x2 Grid Right (35%)
    if (layoutType === 0) {
      const firstImage = previewImages[0]!;
      const supporting = previewImages.slice(1, 5);
      return (
        <div className="grid grid-cols-1 gap-3.5 sm:gap-4 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7">
            {renderImage(firstImage, 0, "h-[240px] xs:h-[290px] sm:h-[380px] lg:h-[440px]", isLight)}
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 sm:gap-4">
            {supporting.map((img, idx) =>
              renderImage(img, idx + 1, "h-[120px] xs:h-[145px] sm:h-[182px] lg:h-[212px]", isLight)
            )}
          </div>
        </div>
      );
    }

    // Layout 1: 2x2 Grid Left (35%) + Large Featured Right (65%)
    if (layoutType === 1) {
      const mainImage = previewImages[0]!;
      const supporting = previewImages.slice(1, 5);
      return (
        <div className="grid grid-cols-1 gap-3.5 sm:gap-4 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 sm:gap-4 order-2 lg:order-1">
            {supporting.map((img, idx) =>
              renderImage(img, idx + 1, "h-[120px] xs:h-[145px] sm:h-[182px] lg:h-[212px]", isLight)
            )}
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            {renderImage(mainImage, 0, "h-[240px] xs:h-[290px] sm:h-[380px] lg:h-[440px]", isLight)}
          </div>
        </div>
      );
    }

    // Layout 2: Full-Width Top Feature + 3-Column Supporting Row Below
    if (layoutType === 2) {
      const mainImage = previewImages[0]!;
      const supporting = previewImages.slice(1, 4);
      return (
        <div className="space-y-3.5 sm:space-y-4">
          <div>{renderImage(mainImage, 0, "h-[230px] xs:h-[280px] sm:h-[360px] lg:h-[420px]", isLight)}</div>
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-4">
            {supporting.map((img, idx) =>
              renderImage(img, idx + 1, "h-[140px] xs:h-[160px] sm:h-[200px] lg:h-[230px]", isLight)
            )}
          </div>
        </div>
      );
    }

    // Layout 3: 2 Large Split Features Top + 3 Supporting Cards Below
    const topTwo = previewImages.slice(0, 2);
    const bottomRow = previewImages.slice(2, 5);
    return (
      <div className="space-y-3.5 sm:space-y-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
          {topTwo.map((img, idx) =>
            renderImage(img, idx, "h-[200px] xs:h-[240px] sm:h-[310px] lg:h-[350px]", isLight)
          )}
        </div>
        {bottomRow.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-4">
            {bottomRow.map((img, idx) =>
              renderImage(img, idx + 2, "h-[140px] xs:h-[160px] sm:h-[190px] lg:h-[220px]", isLight)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id={event.slug}
      className={`py-12 sm:py-18 lg:py-24 border-b ${
        isDark
          ? "bg-[#050505] text-[#F5F5F5] border-[#27272A]"
          : "bg-[#F7F7F5] text-[#0D0D0F] border-[#E4E4E7]"
      }`}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
        {/* ── Event Header ── */}
        <div
          className={`mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-3 sm:gap-4 border-b pb-5 sm:pb-6 ${
            isDark ? "border-[#27272A]" : "border-[#E4E4E7]"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                EVENT GALLERY
              </span>
              <span
                className={`text-xs font-mono font-bold ${
                  isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
                }`}
              >
                • {event.year}
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 mt-1 sm:mt-1.5">
              <h2
                className={`font-display text-xl xs:text-2xl font-extrabold sm:text-3xl lg:text-4xl ${
                  isDark ? "text-white" : "text-[#0D0D0F]"
                }`}
              >
                {event.title}
              </h2>
              <span className="h-2 w-2 rounded-full bg-[#9B1B9E] shrink-0" />
            </div>

            {event.description && (
              <p
                className={`mt-1.5 sm:mt-2 max-w-2xl text-xs sm:text-sm font-medium leading-relaxed ${
                  isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
                }`}
              >
                “{event.description}”
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider ${
                isDark
                  ? "border border-[#27272A] bg-[#151518] text-[#A1A1AA]"
                  : "border border-[#E4E4E7] bg-white text-[#52525B] shadow-sm"
              }`}
            >
              {photoCount} {photoLabel}
            </span>
          </div>
        </div>

        {/* ── Editorial Bento Gallery Composition ── */}
        <Reveal>{renderEditorialLayout(!isDark)}</Reveal>

        {/* ── View All Photos Button ── */}
        <Reveal delay={0.15}>
          <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end">
            <button
              onClick={() => onOpenLightbox(event.id, 0)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#9B1B9E] px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5 min-h-[42px] cursor-pointer"
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
