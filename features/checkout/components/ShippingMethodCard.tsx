import Currency from "@/features/products/components/Currency";
import { ShippingMethod } from "../types";
import { useFormContext } from "react-hook-form";
import { CheckoutFormType } from "../checkout.schema";
import { useTranslations } from "next-intl";

type ShippingMethodCardProps = {
  shippingMethod: ShippingMethod;
  selectedShippingMethodId: number;
};

function ShippingMethodCard({
  shippingMethod,
  selectedShippingMethodId,
}: ShippingMethodCardProps) {
  const t = useTranslations("checkoutPage.shipping");

  const { register } = useFormContext<CheckoutFormType>();

  return (
    <article className="">
      <label
        className={`flex items-start justify-between gap-md p-md border rounded-md cursor-pointer transition-colors ${
          selectedShippingMethodId === shippingMethod.id
            ? "border-accent-base bg-accent-base/10"
            : "border-subtle hover:border-accent-soft"
        }`}
      >
        <div className="flex gap-md">
          <input
            type="radio"
            value={shippingMethod.id}
            {...register("shippingMethodId", {
              valueAsNumber: true,
            })}
            className="mt-1"
          />

          <div>
            <p className="font-medium">{shippingMethod.name}</p>

            <p className="text-sm text-muted-foreground">
              {shippingMethod.description}
            </p>
          </div>
        </div>

        <span className="font-semibold text-accent-base whitespace-nowrap">
          {shippingMethod.price === 0 ? (
            t("free")
          ) : (
            <Currency price={shippingMethod.price} />
          )}
        </span>
      </label>
    </article>
  );
}

export default ShippingMethodCard;
