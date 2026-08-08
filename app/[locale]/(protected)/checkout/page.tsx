import { useTranslations } from "next-intl";
import Checkout from "@/features/checkout/components/Checkout";
import { Metadata } from "next";
import appConfig from "@/config/appConfig";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Checkout",
  description: `Complete your purchase securely with ${appConfig.name}'s fast and secure checkout.`,
  robots: {
    index: false,
    follow: false,
  },
};

function CheckoutPage() {
  const t = useTranslations("checkoutPage");

  return (
    <main className="bg-base">
      <PageHero title={t("title")} />

      <section className="py-2xl lg:py-12xl px-xs lg:px-lg">
        <Checkout />
      </section>
    </main>
  );
}

export default CheckoutPage;
