import OrderSummary from "../checkout/OrderSummary";
import PaymentMethods from "../checkout/PaymentMethods";
import ShippingInformation from "../checkout/ShippingInformation";

function CheckoutForm() {
  return (
    <form
    //  onSubmit={() => {}}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Information */}
          <ShippingInformation />

          {/* Payment Method */}
          <PaymentMethods />
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
