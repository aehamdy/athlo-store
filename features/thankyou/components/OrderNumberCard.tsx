import { Card, CardContent } from "../../components/ui/card";
import { useTranslations } from "next-intl";

function OrderNumberCard() {
  const t = useTranslations("thankYouPage.orderNumberCard");

  return (
    <Card className="flex w-full mb-3xl bg-card border-subtle animate-fade-in">
      <CardContent className="flex flex-col items-center p-xl">
        <p className="mb-xs text-sm text-muted-foreground">{t("label")}</p>

        <p className="font-bold text-2xl text-accent-base">123-456-78</p>
      </CardContent>
    </Card>
  );
}

export default OrderNumberCard;
