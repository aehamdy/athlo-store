import Icon from "../shared/Icon";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";

function OrderTimeline() {
  const t = useTranslations("thankYouPage.timeline");

  return (
    <Card className="w-full mb-3xl bg-card border-subtle animate-fade-in">
      <CardContent className="p-xl">
        <div className="flex justify-between items-center">
          {/* Confirmed */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 mb-xs bg-accent-base rounded-full">
              <Icon name="CheckCircle" className="h-5 w-5 text-primary-dark" />
            </div>
            <p className="font-medium text-xs text-center">{t("confirmed")}</p>
          </div>

          <div className="flex-1 h-0.5 mx-xs bg-subtle" />

          {/* Processing */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 mb-xs bg-muted rounded-full">
              <Icon name="Package" className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-center text-muted-foreground">
              {t("processing")}
            </p>
          </div>

          <div className="flex-1 h-0.5 mx-xs bg-subtle" />

          {/* Shipped */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 mb-xs bg-muted rounded-full">
              <Icon name="Truck" className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-center text-muted-foreground">
              {t("shipped")}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderTimeline;
