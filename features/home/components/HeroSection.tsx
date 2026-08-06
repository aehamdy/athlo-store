import HeroCarousel from "./HeroCarousel";
import HeroMarquee from "./HeroMarquee";

function HeroSection() {
  return (
    <section className="relative h-dvh bg-surface overflow-hidden">
      <HeroCarousel />
      <HeroMarquee />
    </section>
  );
}

export default HeroSection;
