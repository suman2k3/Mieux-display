import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight, Camera } from "lucide-react";
import { eventGalleries, type GalleryPhoto } from "@/data/galleryData";
import { Reveal } from "@/components/site/motion-primitives";
import { EventGalleryCard } from "@/components/gallery/EventGalleryCard";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { CtaSection } from "@/components/site/sections-2";

const categoryFilters = [
  "All",
  "DIDAC 2025",
  "Eldrok K-12 Summit 2026",
  "IT Voice - 2025",
  "Mieux Kick Off Meet 2026",
  "Swaraksha Mahotsav 2025",
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    eventId: string | null;
    photoIndex: number;
  }>({
    isOpen: false,
    eventId: null,
    photoIndex: 0,
  });

  const featuredCarouselRef = useRef<HTMLDivElement>(null);

  // All published events sorted by displayOrder
  const allPublishedEvents = useMemo(() => {
    return eventGalleries
      .filter((event) => event.isPublished)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }, []);

  // Aggregate all photos for "Moments Worth Remembering" horizontal carousel
  const featuredMoments = useMemo(() => {
    const photos: { photo: GalleryPhoto; eventTitle: string; eventId: string; photoIndex: number }[] = [];
    allPublishedEvents.forEach((evt) => {
      evt.images.forEach((img, idx) => {
        photos.push({ photo: img, eventTitle: evt.title, eventId: evt.id, photoIndex: idx });
      });
    });
    return photos.slice(0, 10);
  }, [allPublishedEvents]);

  // Dynamic cover image for hero background
  const heroCoverImage = allPublishedEvents[0]?.coverImage || allPublishedEvents[0]?.images?.[0]?.url;

  // Scroll spy: update active category pill based on visible event section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      if (window.scrollY < 350) {
        setActiveCategory("All");
        return;
      }

      for (const event of allPublishedEvents) {
        const el = document.getElementById(event.slug);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(event.title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allPublishedEvents]);

  // Category pill click handler
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    if (category === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const matchingEvent = allPublishedEvents.find((evt) => evt.title === category);
    if (matchingEvent) {
      const el = document.getElementById(matchingEvent.slug);
      if (el) {
        const yOffset = -140;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleOpenLightbox = (eventId: string, photoIndex: number) => {
    setLightboxState({ isOpen: true, eventId, photoIndex });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ isOpen: false, eventId: null, photoIndex: 0 });
  };

  // Scroll handler for Featured Moments carousel
  const scrollFeatured = (direction: "left" | "right") => {
    if (featuredCarouselRef.current) {
      const { scrollLeft, clientWidth } = featuredCarouselRef.current;
      const scrollAmount = clientWidth * 0.75;
      featuredCarouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] antialiased min-h-screen">
      {/* ─── 1. GALLERY HERO SECTION (DARK #050505) ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-16 sm:py-20 lg:py-24 border-b border-[#27272A]">
        {heroCoverImage && (
          <img
            src={heroCoverImage}
            alt="MIEUX Display Exhibition"
            className="absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/70 pointer-events-none" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.08),transparent)] pointer-events-none"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#151518] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00] backdrop-blur-md mb-3">
              MIEUX DISPLAY • EVENTS & EXPERIENCES
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Where MIEUX <span className="text-[#9B1B9E]">Comes to Life</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[#A1A1AA] sm:text-lg leading-relaxed font-medium">
              Explore MIEUX installations, exhibitions, industry events and real-world display experiences across India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── 2. CATEGORY FILTERS (STICKY STYLED BAR) ─── */}
      <section className="sticky top-[96px] sm:top-[100px] z-40 border-b border-[#27272A] bg-[#050505]/95 backdrop-blur-md py-4 shadow-2xl text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5">
            {categoryFilters.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`shrink-0 rounded-full px-4.5 py-2 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#9B1B9E] text-white shadow-md scale-[1.02]"
                      : "border border-[#27272A] bg-[#151518] text-[#A1A1AA] hover:border-[#9B1B9E] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. MOMENTS WORTH REMEMBERING (LIGHT SECTION bg-[#F7F7F5]) ─── */}
      <section className="bg-[#F7F7F5] text-[#0D0D0F] py-14 lg:py-20 border-b border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
                GALLERY HIGHLIGHTS
              </span>
              <h2 className="mt-2.5 font-display text-3xl font-extrabold text-[#0D0D0F] sm:text-4xl tracking-tight">
                Moments Worth <span className="text-[#9B1B9E]">Remembering</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-[#52525B] max-w-xl font-medium">
                A glimpse into MIEUX displays, installations and experiences.
              </p>
            </div>

            {/* Circular Controls */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                onClick={() => scrollFeatured("left")}
                aria-label="Previous featured moments"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-all hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollFeatured("right")}
                aria-label="Next featured moments"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#E4E4E7] bg-white text-[#0D0D0F] shadow-sm transition-all hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Moments Horizontal Track */}
        <div
          ref={featuredCarouselRef}
          className="w-full overflow-x-auto py-2 pb-4 no-scrollbar relative z-10 scroll-smooth"
        >
          <div className="flex w-max gap-5 px-4 sm:px-6 lg:px-8 xl:px-12">
            {featuredMoments.map((item, idx) => (
              <Reveal key={`${item.eventId}-${idx}`} delay={idx * 0.04}>
                <div
                  onClick={() => handleOpenLightbox(item.eventId, item.photoIndex)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#E4E4E7] bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9B1B9E] hover:shadow-xl cursor-pointer w-[270px] sm:w-[310px] lg:w-[330px] shrink-0"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                    <img
                      src={item.photo.url}
                      alt={item.photo.alt || item.eventTitle}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#FF6B00]">
                      {item.eventTitle}
                    </span>
                    <p className="mt-1 text-xs text-[#52525B] line-clamp-1 font-medium">
                      {item.photo.alt}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#9B1B9E] border-t border-[#E4E4E7] pt-2.5">
                    <span className="flex items-center gap-1.5">
                      <Camera className="h-3.5 w-3.5 text-[#9B1B9E]" />
                      View Photo
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ALTERNATING EVENT CATEGORY SECTIONS ─── */}
      <div className="min-h-[50vh]">
        {allPublishedEvents.map((event, index) => (
          <EventGalleryCard
            key={event.id}
            event={event}
            index={index}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </div>

      {/* ─── 5. FINAL CTA (DARK #050505) ─── */}
      <section className="bg-[#050505] text-[#F5F5F5] border-t border-[#27272A]">
        <CtaSection />
      </section>

      {/* ─── 6. REUSABLE LIGHTBOX ─── */}
      {lightboxState.isOpen && lightboxState.eventId && (
        <GalleryLightbox
          images={allPublishedEvents.find((e) => e.id === lightboxState.eventId)?.images || []}
          initialIndex={lightboxState.photoIndex}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}
