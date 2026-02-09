import FAQItem from "@/features/faqs/components/FAQItem";

const faqCategories = [
  {
    title: "Orders & Shipping",
    faqs: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 3–5 business days within the UAE. International shipping takes 7–14 business days depending on the destination.",
      },
      {
        q: "Can I track my order?",
        a: "Yes! Once your order ships, you'll receive an email with a tracking number and a link to track your shipment in real time.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes, we offer free shipping on orders over AED 200 within the UAE.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    faqs: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of purchase. Items must be in original condition with all tags attached. Please contact our support team to initiate a return.",
      },
      {
        q: "How do I exchange an item?",
        a: "You can request an exchange through our Contact page or via email. We'll send you a free shipping label and ship the new item once we receive the original.",
      },
    ],
  },
  {
    title: "Products & Sizing",
    faqs: [
      {
        q: "How do I find the right size?",
        a: "We provide a detailed size guide on every product page. We recommend measuring yourself and comparing with the chart for the best fit.",
      },
      {
        q: "Are your products authentic?",
        a: "Yes, all our products are 100% authentic. We work directly with brands and authorized distributors to ensure quality.",
      },
      {
        q: "Can I get notified when an item is back in stock?",
        a: "Yes! On the out-of-stock product page, you can enter your email to receive a notification as soon as the item is restocked.",
      },
    ],
  },
  {
    title: "Payment & Security",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "We accept Visa, Mastercard, Apple Pay, and Cash on Delivery within the UAE.",
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use SSL encryption and secure payment gateways to protect all your transactions. We never store your card details on our servers.",
      },
    ],
  },
];

function FAQContent() {
  return (
    <section className="section-spacing bg-base">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-md">
        {faqCategories.map((cat, idx) => (
          <div key={idx} className="mb-4xl">
            <h2 className="mb-md font-bold text-xl text-accent-base">
              {cat.title}
            </h2>
            <FAQItem item={cat} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQContent;
