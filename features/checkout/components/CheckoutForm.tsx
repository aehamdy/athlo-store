"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ShippingInformation from "./ShippingInformation";
import PaymentMethods from "./PaymentMethods";
import OrderSummary from "./OrderSummary";

import { checkoutSchema, CheckoutFormType } from "../checkout.schema";

import { ShippingMethod } from "../types";
import { User } from "@/features/auth/types/auth.types";
import formatTitle from "@/lib/utils/formatTitle";

type CheckoutFormProps = {
  user: User | null;
  shippingMethods: ShippingMethod[];
};

function CheckoutForm({ user, shippingMethods }: CheckoutFormProps) {
  const methods = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutSchema),

    defaultValues: {
      fullName: user ? formatTitle(user.firstName, user.lastName) : "",

      phoneNumber: user?.phoneNumber ?? "",
      city: user ? formatTitle(user?.city) : "",
      region: user ? formatTitle(user.region) : "",
      country: user ? formatTitle(user.country) : "",

      streetAddress: "",
      buildingNumber: undefined,
      floorNumber: undefined,
      apartmentNumber: undefined,
      notes: "",

      paymentMethod: "cashOnDelivery",
      shippingMethodId: shippingMethods[0]?.id,
    },
  });

  const onSubmit = (data: CheckoutFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid lg:grid-cols-[1fr_400px] gap-xl"
      >
        <div className="space-y-xl">
          <ShippingInformation shippingMethods={shippingMethods} />

          <PaymentMethods />
        </div>

        <div className="self-start sticky top-24">
          <OrderSummary shippingMethods={shippingMethods} />
        </div>
      </form>
    </FormProvider>
  );
}

export default CheckoutForm;
