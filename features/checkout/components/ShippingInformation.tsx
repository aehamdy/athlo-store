"use client";

import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import Icon from "@/components/shared/Icon";
import Heading from "@/components/shared/Heading";
import FormInput from "@/features/profile/components/FormInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckoutFormType } from "../checkout.schema";
import { ShippingMethod } from "../types";
import ShippingMethodCard from "./ShippingMethodCard";

type ShippingInformationProps = {
  shippingMethods: ShippingMethod[];
};

function ShippingInformation({ shippingMethods }: ShippingInformationProps) {
  const t = useTranslations("checkoutPage.shipping");

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CheckoutFormType>();

  const selectedShippingMethodId = Number(watch("shippingMethodId"));

  return (
    <Card className="bg-card border-border px-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-md">
          <Icon name="Truck" size={24} className="text-accent-base" />
          {t("title")}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-md">
        <div className="grid sm:grid-cols-2 gap-md">
          <FormInput
            id="fullName"
            name="fullName"
            label={t("fullName")}
            register={register}
            error={errors.fullName}
            required
          />

          <FormInput
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            label={t("phone")}
            register={register}
            error={errors.phoneNumber}
            required
          />
        </div>

        <FormInput
          id="streetAddress"
          name="streetAddress"
          label={t("address")}
          register={register}
          error={errors.streetAddress}
          required
        />

        <div className="grid grid-cols-2 gap-md">
          <FormInput
            id="city"
            name="city"
            label={t("city")}
            register={register}
            error={errors.city}
            required
          />

          <FormInput
            id="region"
            name="region"
            label={t("region")}
            register={register}
            error={errors.region}
          />
        </div>

        <div className="grid grid-cols-2 gap-md">
          <FormInput
            id="country"
            name="country"
            label={t("country")}
            register={register}
            error={errors.country}
            required
          />

          <FormInput
            id="buildingNumber"
            name="buildingNumber"
            label={t("buildingNumber")}
            register={register}
            error={errors.buildingNumber}
            valueAsNumber
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-md">
          <FormInput
            id="floorNumber"
            name="floorNumber"
            label={t("floorNumber")}
            register={register}
            error={errors.floorNumber}
            valueAsNumber
            required
          />

          <FormInput
            id="apartmentNumber"
            name="apartmentNumber"
            label={t("apartmentNumber")}
            register={register}
            error={errors.apartmentNumber}
            valueAsNumber
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="font-medium text-muted-foreground">
            {t("notes")}
          </Label>

          <Textarea
            id="notes"
            placeholder={t("notesPlaceholder")}
            {...register("notes")}
            className="form-input"
          />

          {errors.notes && (
            <p className="text-sm text-destructive">{errors.notes.message}</p>
          )}
        </div>

        <div className="mt-4xl space-y-md">
          <div className="flex items-center gap-md">
            <Icon name="Box" size={24} className="text-accent-base" />

            <Heading as="h3" className="font-semibold">
              {t("shippingMethods")}
            </Heading>
          </div>

          <ul className="max-h-71 p-sm space-y-sm overflow-y-auto">
            {shippingMethods.map((method) => (
              <li key={method.id}>
                <ShippingMethodCard
                  shippingMethod={method}
                  selectedShippingMethodId={selectedShippingMethodId}
                />
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShippingInformation;
