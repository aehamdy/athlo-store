import Icon from "@/components/shared/Icon";
import ProductActionButton from "./ProductActionButton";
import { useTranslations } from "next-intl";

type actionButtonT = {
  id: number;
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  onClick: () => void;
};

const actionButtons: actionButtonT[] = [
  { id: 1, icon: "Heart", label: "addToWishlist", onClick: () => {} },
  { id: 2, icon: "Eye", label: "quickView", onClick: () => {} },
  { id: 3, icon: "GitCompare", label: "addToCompare", onClick: () => {} },
  { id: 4, icon: "ShoppingBag", label: "addToCart", onClick: () => {} },
];

function ProductActions() {
  const t = useTranslations("actions");

  return (
    <div className="absolute top-1.5 right-1.5 lg:-right-full lg:group-hover:right-1.5 flex flex-col gap-sm py-xs px-tiny transition-all duration-normal">
      {actionButtons.map((button: actionButtonT) => (
        <ProductActionButton
          key={button.id}
          variant="icon"
          icon={button.icon}
          label={t(button.label)}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
}

export default ProductActions;
