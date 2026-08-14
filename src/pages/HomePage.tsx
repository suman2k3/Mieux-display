import { Hero } from "@/components/site/Hero";
import { ProductEcosystem } from "@/components/site/ProductEcosystem";
import { InteractiveSolutions } from "@/components/site/InteractiveSolutions";
import { MieuxAdvantage } from "@/components/site/MieuxAdvantage";
import { ProjectsCaseStudies } from "@/components/site/ProjectsCaseStudies";
import { GalleryGlimpse } from "@/components/site/GalleryGlimpse";
import { TrustCredibility } from "@/components/site/TrustCredibility";
import { HowWeWork } from "@/components/site/HowWeWork";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { CtaSection } from "@/components/site/sections-2";

export function HomePage() {
  return (
    <>
      {/* 1. Cinematic Dark Hero + Compact Stats Strip */}
      <Hero />

      {/* 2. Product Ecosystem — Interactive Category Visual Showcase */}
      <ProductEcosystem />

      {/* 3. Solutions — Interactive Industry Deployment Showcase */}
      <InteractiveSolutions />

      {/* 4. MIEUX Advantage — Engineering Credibility & Installation Photo */}
      <MieuxAdvantage />

      {/* 5. Projects & Case Studies — Editorial Layout (1 Large + 3 Supporting) */}
      <ProjectsCaseStudies />

      {/* 6. MIEUX in Action — Dynamic Gallery Glimpse (Pulls from eventGalleries) */}
      <GalleryGlimpse />

      {/* 7. Trust & Credibility — Enterprise Clients, Make in India, GeM & Testimonial Slider */}
      <TrustCredibility />

      {/* 8. How We Work — Compact 5-Step Process Timeline */}
      <HowWeWork />

      {/* 9. Video Showcase — Real-World Displays in Action Media Carousel */}
      <VideoShowcase />

      {/* 10. Final High-Impact Conversion CTA */}
      <CtaSection />
    </>
  );
}
