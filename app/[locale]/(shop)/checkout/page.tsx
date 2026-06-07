import CheckoutForm from "@/features/forms/CheckoutForm";
import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";

function CheckoutPage() {
  const t = useTranslations("checkoutPage");

  return (
    <main>
      <section className="py-8 px-md">
        <Heading as="h1" className="font-bold text-3xl mb-8">
          {t("title")}
        </Heading>

        <CheckoutForm />
      </section>
    </main>
  );
}

export default CheckoutPage;
