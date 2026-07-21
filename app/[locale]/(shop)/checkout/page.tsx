import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";
import Checkout from "@/features/checkout/components/Checkout";

function CheckoutPage() {
  const t = useTranslations("checkoutPage");

  return (
    <main className="bg-base">
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
