import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";
import Checkout from "@/features/checkout/components/Checkout";
import { Metadata } from "next";
import appConfig from "@/config/appConfig";

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
    <main className="main-page">
      <section className="py-xl lg:py-8xl px-md">
        <Heading as="h1" className="mb-8 font-bold text-3xl text-foreground">
          {t("title")}
        </Heading>

        <Checkout />
      </section>
    </main>
  );
}

export default CheckoutPage;
