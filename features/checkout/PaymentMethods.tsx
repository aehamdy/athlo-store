"use client";

import { useState } from "react";
import Icon from "../../components/shared/Icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";

function PaymentMethods() {
  const t = useTranslations("checkoutPage.payment");

  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <Card className="bg-card border-subtle">
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
            onClick={() => setPaymentMethod("cod")}
            className={`flex flex-col items-center p-md border-2 transition-all rounded-lg ${
              paymentMethod === "cod"
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
            // disabled
            className={`flex flex-col items-center p-md border-2 rounded-lg ${
              paymentMethod === "card"
                ? "border-accent-base bg-accent-base/10"
                : "border-subtle"
            }`}
          >
            <Icon name="CreditCard" />
            <p className="font-medium">{t("creditCard")}</p>
          </Button>
        </div>

        {paymentMethod === "card" && (
          <div className="space-y-md mt-md">
            <div className="space-y-xs">
              <Label>{t("cardNumber")}</Label>
              <Input
                placeholder="1234 5678 9012 3456"
                className="bg-field border-subtle"
              />
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div className="space-y-xs">
                <Label>{t("expiryDate")}</Label>
                <Input placeholder="MM/YY" className="bg-field border-subtle" />
              </div>

              <div className="space-y-xs">
                <Label>{t("cvv")}</Label>
                <Input placeholder="123" className="bg-field border-subtle" />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default PaymentMethods;
