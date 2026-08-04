import CategoriesSection from "@/features/categories/components/CategoriesSection";
import BrandStoryBanner from "@/features/home/components/BrandStoryBanner";
import HeroSection from "@/features/home/components/HeroSection";
import NewArrivals from "@/features/home/components/NewArrivals";
import NewsletterSection from "@/features/home/components/NewsletterSection";

function Home() {
  return (
    <main>
      <HeroSection />

      <CategoriesSection />

      <BrandStoryBanner />

      <NewArrivals />

      <section className="py-11xl bg-surface">
        <NewsletterSection variant="default" />
      </section>
    </main>
  );
}

export default Home;
