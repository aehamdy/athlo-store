import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

function QuickViewButton() {
  const t = useTranslations("productCard.actions.quickView");

  return (
    <Button
      variant="plain"
      size="custom"
      className="group/button py-xs px-sm items-center gap-sm text-primary-light hover:text-primary-dark hover:bg-primary-light active:bg-primary-light border border-primary-light rounded-2xl transition-all duration-normal cursor-pointer"
    >
      <Icon
        name="Eye"
        className="text-primary-light group-hover/button:text-primary-dark transition-colors duration-normal"
      />
      {t("actions.quickView")}
    </Button>
  );
}

export default QuickViewButton;
