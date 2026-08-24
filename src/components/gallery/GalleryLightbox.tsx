import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import type { GalleryPhoto } from "@/data/galleryData";

interface GalleryLightboxProps {
  images: GalleryPhoto[];
  initialIndex: number;
  onClose: () => void;
  eventTitle?: string;
}

export function GalleryLightbox({ images, initialIndex, onClose, eventTitle }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrevious, handleNext]);

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-black/95 backdrop-blur-xl p-4 sm:p-6 select-none pt-20 sm:pt-24 pb-8"
      >
        {/* Top Header Bar */}
        <div className="absolute top-0 inset-x-0 z-[100000] flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black via-black/90 to-transparent border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#9B1B9E]/20 border border-[#9B1B9E]/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#9B1B9E]">
              <Camera className="h-3 w-3" />
              GALLERY VIEWER
            </span>
            {eventTitle && (
              <h3 className="font-display text-sm sm:text-base font-bold text-white truncate max-w-md">
                {eventTitle}
              </h3>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close image viewer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E] hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Previous Arrow Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[100000] grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E] hover:scale-105 shadow-2xl"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Main Image Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[70vh] sm:max-h-[75vh] max-w-[90vw] flex flex-col items-center justify-center my-auto"
        >
          <motion.img
            key={currentImage.id}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={currentImage.url}
            alt={currentImage.alt || "MIEUX Display Gallery Photo"}
            className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-2xl border border-white/15 shadow-2xl"
          />

          {/* Caption & Counter Footer */}
          <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
            {currentImage.alt && (
              <p className="text-xs sm:text-sm text-[#D4D4D8] max-w-xl font-medium drop-shadow">
                {currentImage.alt}
              </p>
            )}
            <span className="font-mono text-xs font-bold text-white bg-white/10 px-4 py-1 rounded-full border border-white/20 backdrop-blur-md">
              0{currentIndex + 1} / 0{images.length}
            </span>
          </div>
        </div>

        {/* Next Arrow Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[100000] grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E] hover:scale-105 shadow-2xl"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
