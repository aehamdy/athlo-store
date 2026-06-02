import BrandStoryBanner from "@/components/home/BrandStoryBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import NewArrivals from "@/components/home/NewArrivals";
import NewsletterSection from "@/components/home/NewsletterSection";
import { useTranslations } from "next-intl";

function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="">
      <section className="">
        <HeroCarousel />
        <h1 className="w-fit my-8 mx-auto font-bold text-xl text-pink-500">
          {t("title")}
        </h1>
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
