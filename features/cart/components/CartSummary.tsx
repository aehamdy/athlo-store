import useGetCartSummary from "../hooks/useGetCartSummary";

type CartSummaryProps = {
  open: boolean;
};

function CartSummary({ open }: CartSummaryProps) {
  const { data, isLoading } = useGetCartSummary(open);

  if (isLoading) {
    return (
      <div className="flex justify-between items-center mb-xs">
        <p>Loading subtotal...</p>
      </div>
    );
  }

  const subtotal = data?.totalPrice ?? 0;
  const discountedSubtotal = data?.totalPriceAfterDiscount ?? 0;

  return (
    <div className="flex justify-between items-center mb-xs">
      <p className="text-muted-foreground">Subtotal:</p>

      <div className="flex items-center gap-sm">
        {discountedSubtotal < subtotal ? (
          <div>
            <p className="text-xs text-muted-foreground line-through">
              {subtotal}
            </p>

            <p className="font-medium text-sm text-red-500">
              {discountedSubtotal.toFixed(2)} EGP
            </p>
          </div>
        ) : (
          <p className="font-medium text-sm text-accent-base">
            {subtotal.toFixed(2)} EGP
          </p>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
