import ShippingInformationSkeleton from "./ShippingInformationSkeleton ";
import PaymentMethodsSkeleton from "./PaymentMethodsSkeleton";
import OrderSummarySkeleton from "./OrderSummarySkeleton";

function CheckoutSkeleton() {
  return (
    <section className="grid lg:grid-cols-[1fr_400px] gap-xl">
      <div className="space-y-xl">
        <ShippingInformationSkeleton />

        <PaymentMethodsSkeleton />
      </div>

      <div className="self-start sticky top-24">
        <OrderSummarySkeleton />
      </div>
    </section>
  );
}

export default CheckoutSkeleton;
