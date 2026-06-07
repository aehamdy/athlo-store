import Heading from "@/components/shared/Heading";
import FAQItem from "@/features/faqs/components/FAQItem";
import { useTranslations } from "next-intl";

function FAQContent() {
  const t = useTranslations("faqsPage");

  const categories = [
    "ordersShipping",
    "returnsExchanges",
    "productsSizing",
    "paymentSecurity",
  ];

  return (
    <section className="section-spacing bg-base">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-md">
        {categories.map((key) => {
          const category = t.raw(`categories.${key}`);

          return (
            <div key={key} className="mb-4xl">
              <Heading
                as="h2"
                className="mb-md font-bold text-xl text-accent-base"
              >
                {category.title}
              </Heading>

              <FAQItem
                item={{
                  title: category.title,
                  faqs: category.items,
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQContent;
