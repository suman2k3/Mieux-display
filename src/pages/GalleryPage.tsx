import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight, Camera } from "lucide-react";
import { eventGalleries, type GalleryPhoto } from "@/data/galleryData";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { EventGalleryCard } from "@/components/gallery/EventGalleryCard";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";

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

  // All published events sorted by displayOrder (all 5 categories are rendered continuously)
  const allPublishedEvents = useMemo(() => {
    return eventGalleries
      .filter((event) => event.isPublished)
      .sort((a, b) => a.displayOrder - b.displayOrder);
  }, []);

  // Aggregate all photos for "Featured Moments" carousel
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

  // Scroll spy: update active category pill based on which event section is visible in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      // If near top of page (hero / featured section), highlight "All"
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

  // Category pill click handler: smoothly scroll to that category section without hiding other categories
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
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative isolate overflow-hidden bg-[#050505] text-white py-16 sm:py-20 lg:py-24 border-b border-[#27272A]">
        {heroCoverImage && (
          <img
            src={heroCoverImage}
            alt="MIEUX Display Exhibition"
            className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(155,27,158,0.06),transparent)] pointer-events-none" aria-hidden />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF6B00]">
              MIEUX DISPLAY • EVENTS & EXPERIENCES
            </span>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where MIEUX Comes to Life
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[#A1A1AA] sm:text-lg leading-relaxed">
              Explore MIEUX installations, exhibitions, industry events and real-world display experiences across India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── 2. CATEGORY FILTERS (STICKY SPY NAVIGATION) ─── */}
      <section className="sticky top-[96px] z-40 border-b border-[#27272A] bg-[#050505]/95 backdrop-blur-md py-4 shadow-2xl text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5">
            {categoryFilters.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${
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

      {/* ─── 3. FEATURED MOMENTS CAROUSEL ─── */}
      <section className="bg-[#0D0D0F] py-16 lg:py-20 border-b border-[#27272A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              dark
              eyebrow="FEATURED MOMENTS"
              title="Moments Worth Remembering"
              subtitle="A glimpse into MIEUX displays, installations and experiences."
            />

            {/* Circular Carousel Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollFeatured("left")}
                aria-label="Previous featured moments"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollFeatured("right")}
                aria-label="Next featured moments"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#151518] text-white transition-all hover:border-[#9B1B9E] hover:bg-[#9B1B9E]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Moments Horizontal Track */}
        <div
          ref={featuredCarouselRef}
          className="mt-8 w-full overflow-x-auto py-4 pb-6 no-scrollbar relative z-10 scroll-smooth"
        >
          <div className="flex w-max gap-5 px-4 sm:px-6 lg:px-8 xl:px-12">
            {featuredMoments.map((item, idx) => (
              <Reveal key={`${item.eventId}-${idx}`} delay={idx * 0.05}>
                <div
                  onClick={() => handleOpenLightbox(item.eventId, item.photoIndex)}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-[18px] border border-[#27272A] bg-[#151518] shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#9B1B9E]/60 cursor-pointer aspect-[4/3] w-[260px] sm:w-[300px] lg:w-[320px] shrink-0"
                >
                  <img
                    src={item.photo.url}
                    alt={item.photo.alt || item.eventTitle}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent" />

                  <div className="relative z-10 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00]">
                      {item.eventTitle}
                    </span>
                    <p className="mt-1 text-xs text-[#A1A1AA] line-clamp-1 font-medium">
                      {item.photo.alt}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#9B1B9E] border-t border-[#27272A] pt-2.5">
                      <span className="flex items-center gap-1.5">
                        <Camera className="h-3.5 w-3.5" />
                        View Photo
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ALL EVENT CATEGORY SECTIONS (ALWAYS RENDERED IN FULL) ─── */}
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

      {/* ─── 5. BOTTOM CTA ─── */}
      <section className="bg-[#0D0D0F] text-[#F5F5F5] py-16 sm:py-20 border-t border-[#27272A]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Let's Create Something Worth Seeing.
            </h2>
            <p className="mt-3 text-sm text-[#A1A1AA] sm:text-base">
              Talk to our team about your next display project.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9B1B9E] px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-[#27272A] bg-[#151518] px-7 py-3.5 text-xs font-semibold text-white backdrop-blur transition-all hover:border-[#9B1B9E] hover:bg-[#1D1D21]"
              >
                Explore Products →
              </Link>
            </div>
          </Reveal>
        </div>
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
