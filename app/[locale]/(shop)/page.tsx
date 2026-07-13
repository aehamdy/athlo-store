import BrandStoryBanner from "@/features/home/BrandStoryBanner";
import ShopByCategory from "@/features/home/ShopByCategory";
import HeroSection from "@/features/home/HeroSection";
import NewsletterSection from "@/features/home/NewsletterSection";
import type { Metadata } from "next";
import NewArrivals from "@/features/home/NewArrivals";

export const metadata: Metadata = {
  title: "Athlo Store | Premium Sportswear & Athletic Gear",
  description:
    "Discover premium sportswear, running shoes, training apparel, and athletic accessories designed to elevate your performance.",

  keywords: [
    "sportswear",
    "athletic apparel",
    "running shoes",
    "fitness clothing",
    "sports gear",
    "athlo store",
    "training apparel",
    "activewear",
  ],

  openGraph: {
    title: "Athlo Store | Premium Sportswear & Athletic Gear",
    description:
      "Shop premium sportswear, running shoes, and training apparel built for performance.",
    url: "https://your-domain.com",
    siteName: "Athlo Store",
    type: "website",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Athlo Store",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Athlo Store | Premium Sportswear & Athletic Gear",
    description:
      "Shop premium sportswear, running shoes, and training apparel built for performance.",
    images: ["/images/og-home.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

function Home() {
  return (
    <main>
      <HeroSection />

      <ShopByCategory />

      <BrandStoryBanner />

      <NewArrivals />

      <section className="py-11xl bg-surface">
        <NewsletterSection variant="default" />
      </section>
    </main>
  );
}

export default Home;
