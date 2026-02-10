"use client";

import { useState } from "react";
import Icon from "../shared/Icon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <Card className="bg-card border-subtle">
      <CardHeader>
        <CardTitle className="flex items-center gap-xs">
          <Icon name="CreditCard" size={24} className="text-accent-base" />
          Payment Method
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-md">
        <div className="grid sm:grid-cols-2 gap-md">
          <Button
            type="button"
            variant="plain"
            size="custom"
            // onClick={() => setPaymentMethod("cod")}
            className={`flex flex-col items-center p-md border-2 transition-all rounded-lg cursor-pointer ${
              paymentMethod === "cod"
                ? "border-accent-base bg-accent-base/10"
                : "border-subtle hover:border-accent-soft"
            }`}
          >
            <Icon name="Truck" />

            <p className="font-medium">Cash on Delivery</p>
          </Button>

          <Button
            type="button"
            variant="plain"
            size="custom"
            disabled
            // onClick={() => setPaymentMethod("card")}
            className={`flex flex-col items-center p-md border-2 transition-all rounded-lg cursor-not-allowed ${
              paymentMethod === "card"
                ? "border-accent-base bg-accent-base/10"
                : "border-subtle hover:border-accent-soft"
            }`}
          >
            <Icon name="CreditCard" />

            <p className="font-medium">Credit Card</p>
          </Button>
        </div>

        {paymentMethod === "card" && (
          <div className="space-y-md mt-md">
            <div className="space-y-xs">
              <Label>Card Number</Label>
              <Input
                placeholder="1234 5678 9012 3456"
                className="bg-field border-subtle"
              />
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div className="space-y-xs">
                <Label>Expiry Date</Label>
                <Input placeholder="MM/YY" className="bg-field border-subtle" />
              </div>

              <div className="space-y-xs">
                <Label>CVV</Label>
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
