import FAQItem from "@/features/faqs/components/FAQItem";
import { useTranslations } from "next-intl";

function FAQContent() {
  const t = useTranslations("faqs");

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
              <h2 className="mb-md font-bold text-xl text-accent-base">
                {category.title}
              </h2>

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
