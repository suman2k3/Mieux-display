import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  ArrowUpRight,
  Film,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
  description: string;
}

export const showcaseVideos: VideoItem[] = [
  {
    id: "v1",
    title: "MIEUX Display Enterprise Solutions & Product Portfolio Showcase",
    category: "PRODUCT SHOWCASE",
    youtubeId: "WQEGCDk8vfo",
    description: "Overview of MIEUX professional display engineering, manufacturing standards and installation excellence.",
  },
  {
    id: "v2",
    title: "High-Brightness Outdoor LED Billboard Technology Demonstration",
    category: "OUTDOOR LED",
    youtubeId: "p5xBqFnAxCo",
    description: "IP65 weather-proof 8000 nits high-brightness outdoor LED billboard in action.",
  },
  {
    id: "v3",
    title: "Ultra-Narrow Bevel Video Wall & Command Center Integration",
    category: "COMMAND CENTER",
    youtubeId: "-4nH6vNi0Mc",
    description: "24/7 mission-critical video wall processing and multi-source display setup.",
  },
  {
    id: "v4",
    title: "Interactive Flat Panel 4K Collaboration & Touch Screen Test",
    category: "INTERACTIVE IFPD",
    youtubeId: "NSXZnhniqN4",
    description: "Sub-8ms latency precision touch writing and wireless multi-device screen casting.",
  },
  {
    id: "v5",
    title: "Fine-Pitch COB Indoor LED Panel Engineering & Installation",
    category: "INDOOR LED",
    youtubeId: "g5Rqpn_YqtQ",
    description: "Ultra-fine pixel pitch COB technology for high-resolution corporate boardrooms and auditoriums.",
  },
  {
    id: "v6",
    title: "Custom Architectural Display & Retail Signage Showcase",
    category: "DIGITAL SIGNAGE",
    youtubeId: "mbbbz617SFU",
    description: "Commercial digital signage and high-impact retail display installations.",
  },
  {
    id: "v7",
    title: "Transparent Glass LED Display Assembly & Live Performance",
    category: "TRANSPARENT LED",
    youtubeId: "2Bjqcreacsc",
    description: "Architectural glass-facade transparent LED installation with high transparency and vivid output.",
  },
];

export function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [thumbnailErrors, setThumbnailErrors] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll left / right
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Close modal handler
  const closeModal = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedVideo, closeModal]);

  const handleImageError = (videoId: string) => {
    setThumbnailErrors((prev) => ({ ...prev, [videoId]: true }));
  };

  return (
    <section className="relative bg-[#050505] text-[#F5F5F5] py-16 lg:py-24 border-b border-[#27272A] overflow-x-clip">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.05),transparent)] pointer-events-none"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            dark
            eyebrow="SEE MIEUX IN ACTION"
            title="Displays Built to Perform in the Real World"
            subtitle="Explore our installations, display technologies and real-world projects through video."
          />

          {/* Action Links & Carousel Navigation Arrows */}
          <div className="flex items-center gap-4">
            <Reveal delay={0.15}>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#A1A1AA] hover:text-white transition-colors uppercase tracking-[0.18em]"
              >
                <span>View All Videos</span>
                <ArrowUpRight className="h-4 w-4 text-[#9B1B9E]" />
              </Link>
            </Reveal>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous videos"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next videos"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO CAROUSEL TRACK */}
      <div
        ref={scrollRef}
        className="mt-10 w-full overflow-x-auto py-4 pb-8 no-scrollbar relative z-10 scroll-smooth"
      >
        <div className="flex w-max gap-6 px-4 sm:px-6 lg:px-8 xl:px-12 items-stretch">
          {showcaseVideos.map((video, idx) => {
            const hasError = thumbnailErrors[video.id];
            const thumbnailUrl = hasError
              ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
              : `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

            return (
              <Reveal key={video.id} delay={idx * 0.08}>
                <div
                  onClick={() => setSelectedVideo(video)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-[#27272A] bg-[#151518] p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9B1B9E]/60 cursor-pointer w-[280px] sm:w-[320px] lg:w-[360px] shrink-0 h-full"
                >
                  <div>
                    {/* Editorial Video Thumbnail Container */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px] border border-[#27272A] bg-[#0D0D0F] mb-4">
                      <img
                        src={thumbnailUrl}
                        alt={video.title}
                        onError={() => handleImageError(video.id)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                      />

                      {/* Subtle Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-[#050505]/30 to-transparent" />

                      {/* Video Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#050505]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FF7A00] backdrop-blur-md border border-[#27272A]">
                          <Film className="h-3 w-3" />
                          {video.category}
                        </span>
                      </div>
                    </div>

                    {/* Video Title */}
                    <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-white transition-colors">
                      {video.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Watch Video CTA Link */}
                  <div className="mt-5 pt-3.5 border-t border-[#27272A] flex items-center justify-between text-xs sm:text-sm font-bold text-[#9B1B9E] group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Play className="h-3.5 w-3.5 fill-[#9B1B9E] text-[#9B1B9E] group-hover:fill-white group-hover:text-white transition-colors" />
                      Watch Video
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* YOUTUBE EMBEDDED PLAYER LIGHTBOX MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl rounded-[24px] border border-[#27272A] bg-[#050505] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#27272A] bg-[#0D0D0F]">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-[#9B1B9E]/20 border border-[#9B1B9E]/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#9B1B9E]">
                  {selectedVideo.category}
                </span>
                <h3 className="font-display text-sm sm:text-base font-bold text-white truncate max-w-md sm:max-w-xl">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                aria-label="Close video"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* YouTube Embed Player Container (16:9 Aspect Ratio) */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-5 bg-[#0D0D0F] border-t border-[#27272A]">
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
