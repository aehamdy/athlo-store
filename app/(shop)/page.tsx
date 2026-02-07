import BrandStoryBanner from "@/components/home/BrandStoryBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import NewArrivals from "@/components/home/NewArrivals";
import NewsletterSection from "@/components/home/NewsletterSection";

function Home() {
  return (
    <main className="">
      <section className="">
        <HeroCarousel />

        <CategoryGrid />

        <FeaturedProducts />

        <BrandStoryBanner />

        <NewArrivals />

        <section className="py-24 bg-surface">
          <NewsletterSection variant="default" />
        </section>
      </section>
    </main>
  );
}

export default Home;
