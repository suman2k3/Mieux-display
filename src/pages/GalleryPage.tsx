import { PageHero } from "@/components/site/PageHero";
import { GallerySection, CtaSection } from "@/components/site/sections-2";

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Installations we are proud of"
        subtitle="Filter by environment to see how our walls, panels and signage networks look in the field."
      />
      <GallerySection compact={false} />
      <CtaSection />
    </>
  );
}
