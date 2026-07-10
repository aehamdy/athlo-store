import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";
import Checkout from "@/features/checkout/components/Checkout";

function CheckoutPage() {
  const t = useTranslations("checkoutPage");

  return (
    <main>
      <section className="py-32 px-md">
        <Heading as="h1" className="font-bold text-3xl mb-8">
          {t("title")}
        </Heading>

        <Checkout />
      </section>
    </main>
  );
}

export default CheckoutPage;
