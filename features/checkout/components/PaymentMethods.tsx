"use client";

import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import Icon from "@/components/shared/Icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { CheckoutFormType } from "../checkout.schema";

function PaymentMethods() {
  const t = useTranslations("checkoutPage.payment");

  const { watch, setValue } = useFormContext<CheckoutFormType>();

  const paymentMethod = watch("paymentMethod");

  return (
    <Card className="px-md bg-card border-subtle">
      <CardHeader>
        <CardTitle className="flex items-center gap-xs">
          <Icon name="CreditCard" size={24} className="text-accent-base" />
          {t("title")}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-md">
        <div className="grid sm:grid-cols-2 gap-md">
          <Button
            type="button"
            variant="plain"
            size="custom"
            onClick={() =>
              setValue("paymentMethod", "cashOnDelivery", {
                shouldDirty: true,
              })
            }
            className={`flex flex-col items-center p-md border-2 transition-all rounded-lg ${
              paymentMethod === "cashOnDelivery"
                ? "border-accent-base bg-accent-base/10"
                : "border-subtle hover:border-accent-soft"
            }`}
          >
            <Icon name="Truck" />

            <p className="font-medium">{t("cashOnDelivery")}</p>
          </Button>

          <Button
            type="button"
            variant="plain"
            size="custom"
            disabled
            className={`flex flex-col items-center p-md border-2 rounded-lg opacity-60 ${
              paymentMethod === "creditCard"
                ? "border-accent-base bg-accent-base/10"
                : "border-subtle"
            }`}
          >
            <Icon name="CreditCard" />

            <p className="font-medium">{t("creditCard")}</p>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PaymentMethods;
