"use client";

import Icon from "../../components/shared/Icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useTranslations } from "next-intl";

function ShippingInformation() {
  const t = useTranslations("checkoutPage.shipping");

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-md">
          <Icon name="Truck" size={24} className="text-accent-base" />
          {t("title")}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-md">
        <div className="grid sm:grid-cols-2 gap-md">
          <div className="space-y-md">
            <Label htmlFor="firstName">{t("firstName")}</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              className="bg-field border-subtle"
            />
          </div>

          <div className="space-y-xs">
            <Label htmlFor="lastName">{t("lastName")}</Label>
            <Input
              id="lastName"
              name="lastName"
              required
              className="bg-field border-subtle"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-md">
          <div className="space-y-xs">
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-field border-subtle"
            />
          </div>

          <div className="space-y-xs">
            <Label htmlFor="phone">{t("phone")}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="bg-field border-subtle"
            />
          </div>
        </div>

        <div className="space-y-xs">
          <Label htmlFor="address">{t("address")}</Label>
          <Input
            id="address"
            name="address"
            required
            className="bg-field border-subtle"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-md">
          <div className="space-y-xs">
            <Label htmlFor="city">{t("city")}</Label>
            <Input
              id="city"
              name="city"
              required
              className="bg-field border-subtle"
            />
          </div>

          <div className="space-y-xs">
            <Label htmlFor="postalCode">{t("postalCode")}</Label>
            <Input
              id="postalCode"
              name="postalCode"
              required
              className="bg-field border-subtle"
            />
          </div>

          <div className="space-y-xs">
            <Label htmlFor="country">{t("country")}</Label>
            <Input
              id="country"
              name="country"
              required
              className="bg-field border-subtle"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShippingInformation;
