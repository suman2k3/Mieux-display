import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, ExternalLink, X } from "lucide-react";
import { Reveal } from "./motion-primitives";
import { videoItems, type VideoItem } from "@/data/videoShowcaseData";

export function VideoSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

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

  return (
    <section className="bg-background py-20 lg:py-28 overflow-hidden border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0057FF]">
              Video Showcase
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-[#071D35] sm:text-4xl">
              See MIEUX Displays in Action
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Watch real-world installation case studies, product walkthroughs, and field stress tests.
            </p>
          </div>

          {/* Left / Right Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous video"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card text-[#071D35] shadow-sm transition-all hover:border-[#0057FF] hover:bg-[#0057FF] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next video"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card text-[#071D35] shadow-sm transition-all hover:border-[#0057FF] hover:bg-[#0057FF] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Sliding Video Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {videoItems.map((video) => (
            <article
              key={video.id}
              className="snap-start shrink-0 w-[290px] sm:w-[360px] group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0057FF]/50 hover:shadow-lift"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div
                onClick={() => setActiveVideo(video)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/10 cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 rounded-full bg-[#071D35]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur shadow-sm">
                  {video.category}
                </span>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                  {video.duration}
                </span>
              </div>

              {/* Title & Actions */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <h3
                  onClick={() => setActiveVideo(video)}
                  className="font-display text-base font-bold text-[#071D35] group-hover:text-[#0057FF] transition-colors cursor-pointer line-clamp-2"
                >
                  {video.title}
                </h3>

                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="inline-flex items-center gap-1.5 font-bold text-[#0057FF] hover:underline"
                  >
                    Watch Video <Play className="h-3.5 w-3.5 fill-current" />
                  </button>

                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    title="Open on YouTube"
                  >
                    YouTube <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-[#071D35] p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0057FF]">
                  {activeVideo.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player Frame / Dummy Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
              <span>Attach your YouTube link in <code className="text-[#0057FF]">src/data/videoShowcaseData.ts</code></span>
              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#0057FF] hover:underline"
              >
                Open directly on YouTube <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
