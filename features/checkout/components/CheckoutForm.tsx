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
import useCreateorder from "../hooks/useCreateOrder";
import ROUTES from "@/lib/routes";
import { useRouter } from "next/navigation";

type CheckoutFormProps = {
  user: User | null;
  shippingMethods: ShippingMethod[];
};

function CheckoutForm({ user, shippingMethods }: CheckoutFormProps) {
  const { mutateAsync: createOrder, isPending } = useCreateorder();
  const router = useRouter();

  const methods = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
    reValidateMode: "onChange",

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
      shippingMethodId: undefined as never,
    },
  });

  const onSubmit = async (data: CheckoutFormType) => {
    const selectedShippingMethod = shippingMethods.find(
      (method) => method.id === data.shippingMethodId,
    );

    const payload = {
      shippingMethodId: data.shippingMethodId,
      shipment: {
        fullName: data.fullName,
        city: data.city,
        country: data.country,
        region: data.region,
        streetAddress: data.streetAddress,

        buildingNumber: data.buildingNumber,
        floorNumber: data.floorNumber,
        apartmentNumber: data.apartmentNumber,

        phoneNumber: data.phoneNumber,
        notes: data.notes ?? "",
        shippingMethod: selectedShippingMethod?.name ?? "",

        trackingNumber: "",
        shipmentStatus: "Pending",
      },
    };

    await createOrder(payload);

    router.push(ROUTES.public.thankyou);
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
          <OrderSummary
            shippingMethods={shippingMethods}
            isCreatingOrder={isPending}
          />
        </div>
      </form>
    </FormProvider>
  );
}

export default CheckoutForm;
