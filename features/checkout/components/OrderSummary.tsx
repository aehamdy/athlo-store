"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import Icon from "../../../components/shared/Icon";
import Currency from "@/features/products/components/Currency";
import ROUTES from "@/lib/routes";
import useFetchCartSummary from "../hooks/useFetchCartSummary";
import { CheckoutFormType } from "../checkout.schema";
import { ShippingMethod } from "../types";
import CheckoutItemsList from "./CheckoutItemsList";

type OrderSummaryProps = {
  shippingMethods: ShippingMethod[];
  isCreatingOrder: boolean;
};

function OrderSummary({ shippingMethods, isCreatingOrder }: OrderSummaryProps) {
  const t = useTranslations("checkoutPage.summary");

  const {
    watch,
    formState: { isValid, isSubmitting },
  } = useFormContext<CheckoutFormType>();

  const selectedShippingMethodId = watch("shippingMethodId");

  const selectedShippingMethod = shippingMethods.find(
    (method) => method.id === Number(selectedShippingMethodId),
  );

  const shippingCost = selectedShippingMethod?.price;

  const {
    data: summary,
    isPending: isSummaryPending,
    isError: isSummaryError,
  } = useFetchCartSummary();

  if (isSummaryPending) {
    return <div>OrderSummarySkeleton</div>;
  }

  if (isSummaryError || !summary) {
    return <p>Failed to load order summary.</p>;
  }

  const { totalItems, totalPrice, totalPriceAfterDiscount, totalDiscount } =
    summary;

  const subtotal = totalDiscount > 0 ? totalPriceAfterDiscount : totalPrice;

  const total = subtotal + (shippingCost ?? 0);

  return (
    <Card className="bg-card border-subtle">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-xl">{t("title")}</CardTitle>

        <div className="font-medium">
          {t("items")} <span className="font-normal">({totalItems})</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-md">
        <CheckoutItemsList />

        <Separator />

        <div className="space-y-xs">
          {/* Subtotal */}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("subtotal")}</span>

            <div className="flex items-center gap-lg">
              <span
                className={
                  totalDiscount > 0 ? "text-muted-foreground line-through" : ""
                }
              >
                <Currency price={totalPrice} />
              </span>

              {totalDiscount > 0 && (
                <span className="text-red-500">
                  <Currency price={totalPriceAfterDiscount} />
                </span>
              )}
            </div>
          </div>

          {/* Discount */}
          {totalDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("discount")}</span>

              <span className="text-red-500">
                -<Currency price={totalDiscount} />
              </span>
            </div>
          )}

          {/* Shipping */}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("shipping")}</span>

            {selectedShippingMethod ? (
              selectedShippingMethod.price === 0 ? (
                <span>{t("free")}</span>
              ) : (
                <Currency price={selectedShippingMethod.price} />
              )
            ) : (
              <span className="text-muted-foreground">
                {t("notSelectedYet")}
              </span>
            )}
          </div>

          <Separator />

          {/* Total */}
          <div className="flex justify-between text-lg font-semibold">
            <span>{t("total")}</span>

            <span className="text-accent-base">
              <Currency price={total} />
            </span>
          </div>
        </div>

        <Button
          type="submit"
          className="main-button"
          disabled={!isValid || isSubmitting || isCreatingOrder}
        >
          {isCreatingOrder ? (
            <>
              <Icon
                name="LoaderCircle"
                className="me-xs h-4 w-4 animate-spin"
              />
              {t("placingOrder")}
            </>
          ) : (
            <>
              <Icon name="ShieldCheck" className="me-xs h-4 w-4" />
              {t("placeOrder")}
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          {t("termsPrefix")}{" "}
          <Link
            href={ROUTES.public.terms}
            className="underline hover:text-accent-base"
          >
            {t("terms")}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;
