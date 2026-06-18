import Icon from "@/components/shared/Icon";
import ProductActionButton from "./ProductActionButton";

type actionButtonT = {
  id: number;
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  onClick: () => void;
};

const actionButtons: actionButtonT[] = [
  { id: 1, icon: "Heart", label: "Add to wishlist", onClick: () => {} },
  { id: 2, icon: "Eye", label: "Quick View", onClick: () => {} },
  { id: 3, icon: "GitCompare", label: "Compare", onClick: () => {} },
  { id: 4, icon: "ShoppingBag", label: "Add to cart", onClick: () => {} },
];

function ProductActions() {
  return (
    <div className="absolute top-1.5 end-1.5 lg:-end-full lg:group-hover:end-1.5 flex flex-col gap-sm py-xs px-tiny transition-all duration-normal">
      {actionButtons.map((button: actionButtonT) => (
        <ProductActionButton
          key={button.id}
          variant="icon"
          icon={button.icon}
          label={button.label}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
}

export default ProductActions;
