import { eventGalleries } from "@/data/galleryData";
import { Reveal, SectionHeading } from "@/components/site/motion-primitives";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function GalleryGlimpse() {
  const publishedEvents = eventGalleries.filter((e) => e.isPublished);
  if (!publishedEvents || publishedEvents.length === 0) return null;

  const event = publishedEvents[0];
  const images = event.images;
  if (!images || images.length < 5) return null;

  const featureImage = images[0];
  const supportingImages = images.slice(1, 5);

  return (
    <section className="py-16 lg:py-24 bg-[#F7F7F5] text-[#0D0D0F] border-b border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6">
          <SectionHeading
            dark={false}
            eyebrow="GALLERY"
            title="MIEUX in Action"
            subtitle="Explore our recent display installations, exhibitions, and corporate showcases."
            className="mb-0"
          />
          <Reveal delay={0.2}>
            <Link
              to="/gallery"
              className="inline-flex items-center text-[#9B1B9E] hover:text-[#0D0D0F] font-bold transition-colors text-xs uppercase tracking-wider"
            >
              Explore Gallery <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 md:gap-6">
          <Reveal>
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[360px] lg:min-h-[440px] rounded-[22px] overflow-hidden group shadow-md border border-[#E4E4E7] bg-white">
              <img
                src={featureImage.url}
                alt={featureImage.alt || "Event feature image"}
                className="w-full h-full object-cover object-center opacity-100 transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {supportingImages.map((imgItem, idx) => (
              <Reveal key={idx} delay={0.1 * (idx + 1)}>
                <div className="relative aspect-square rounded-[20px] overflow-hidden group shadow-md border border-[#E4E4E7] bg-white">
                  <img
                    src={imgItem.url}
                    alt={imgItem.alt || "Event supporting image"}
                    className="w-full h-full object-cover object-center opacity-100 transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
