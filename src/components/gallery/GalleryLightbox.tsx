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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6 select-none"
      >
        {/* Top Header Bar */}
        <div className="absolute top-0 inset-x-0 z-50 flex items-center justify-between p-5 bg-gradient-to-b from-black/80 to-transparent">
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
            className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
          >
            <X className="h-4.5 w-4.5" />
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
            className="absolute left-4 sm:left-8 z-50 grid h-12 w-12 place-items-center rounded-full border border-[#27272A] bg-[#151518]/90 text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Main Image Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[80vh] max-w-[90vw] flex flex-col items-center justify-center"
        >
          <motion.img
            key={currentImage.id}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={currentImage.url}
            alt={currentImage.alt || "MIEUX Display Gallery Photo"}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl border border-[#27272A] shadow-2xl"
          />

          {/* Caption & Counter Footer */}
          <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
            {currentImage.alt && (
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl font-medium">
                {currentImage.alt}
              </p>
            )}
            <span className="font-mono text-xs font-bold text-white bg-[#151518] px-3.5 py-1 rounded-full border border-[#27272A]">
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
            className="absolute right-4 sm:right-8 z-50 grid h-12 w-12 place-items-center rounded-full border border-[#27272A] bg-[#151518]/90 text-white backdrop-blur-md transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
