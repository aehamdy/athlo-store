import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

function AddToCartButton() {
  const t = useTranslations("productCard.actions");

  return (
    <Button
      variant="plain"
      size="custom"
      className="group/button py-xs px-sm items-center gap-sm text-primary-light hover:text-primary-dark bg-primary-dark hover:bg-accent-base active:bg-accent-base rounded-2xl transition-all duration-normal cursor-pointer"
    >
      <Icon
        name="ShoppingBag"
        className="text-primary-light group-hover/button:text-primary-dark transition-colors duration-normal"
      />
      {t("addToCart")}
    </Button>
  );
}

export default AddToCartButton;
