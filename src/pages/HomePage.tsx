import { Hero } from "@/components/site/Hero";
import {
  ProductShowcase,
  WhyChoose,
  FeaturedProducts,
  ClientMarquee,
  Industries,
} from "@/components/site/sections";
import { VideoSlider } from "@/components/site/VideoSlider";
import { CtaSection } from "@/components/site/sections-2";

export function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Industries />
      <FeaturedProducts />
      <ClientMarquee />
      <WhyChoose />
      <VideoSlider />
      <CtaSection />
    </>
  );
}
