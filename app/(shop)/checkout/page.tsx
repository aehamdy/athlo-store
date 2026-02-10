import CheckoutForm from "@/components/forms/CheckoutForm";
import Heading from "@/components/shared/Heading";

function CheckoutPage() {
  return (
    <main>
      <section className="py-8 px-md">
        <Heading as="h1" className="font-bold text-3xl mb-8">
          Checkout
        </Heading>

        <CheckoutForm />
      </section>
    </main>
  );
}

export default CheckoutPage;
