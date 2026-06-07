import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import Icon from "../../components/shared/Icon";
import { Button } from "../../components/ui/button";
import { products } from "../../components/products/ProductsGrid";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";

function OrderSummary() {
  const t = useTranslations("checkoutPage.summary");

  const items = products.slice(0, 3);

  return (
    <div>
      <Card className="sticky top-24 bg-card border-subtle">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-md">
          <div className="space-y-sm max-h-64 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex gap-sm">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded-md"
                />

                <div className="flex-1">
                  <p className="font-medium text-sm truncate">{item.name}</p>

                  <p className="text-xs text-muted-foreground">
                    {t("itemDetails")}
                  </p>

                  <p className="font-semibold text-sm text-accent-base">
                    {t("itemTotal")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-xs">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("subtotal")}</span>
              <span>{t("subtotalValue")}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("shipping")}</span>
              <span>{t("free")}</span>
            </div>

            <Separator />

            <div className="flex justify-between font-semibold text-lg">
              <span>{t("total")}</span>
              <span className="text-accent-base">{t("totalValue")}</span>
            </div>
          </div>

          <Button type="submit" className="main-button">
            <Icon name="ShieldCheck" className="w-4 h-4 me-xs" />
            {t("placeOrder")}
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
    </div>
  );
}

export default OrderSummary;
