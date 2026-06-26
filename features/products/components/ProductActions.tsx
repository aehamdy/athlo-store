"use client";

import Icon from "@/components/shared/Icon";
import ProductActionButton from "./ProductActionButton";
import { useTranslations } from "next-intl";
import ROUTES from "@/lib/routes";
import useHandleAddToCart from "@/features/cart/hooks/useHandleAddToCart";
import { useRouter } from "next/navigation";
import { ProductT } from "../types";
import ProductQuickViewDialog from "./quick-view/ProductQuickViewDialog";

type actionButtonT = {
  id: number;
  type: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  onClick: () => void;
};

const actionButtons: actionButtonT[] = [
  {
    id: 1,
    type: "wishlist",
    icon: "Heart",
    label: "addToWishlist",
    onClick: () => {},
  },
  {
    id: 2,
    type: "quickview",
    icon: "Eye",
    label: "quickView",
    onClick: () => {},
  },
  {
    id: 3,
    type: "compare",
    icon: "GitCompare",
    label: "addToCompare",
    onClick: () => {},
  },
  {
    id: 4,
    type: "cart",
    icon: "ShoppingBag",
    label: "addToCart",
    onClick: () => {},
  },
];

type ProductActionsProps = {
  product: ProductT;
  hasVariants: boolean | undefined;
};

function ProductActions({ product, hasVariants }: ProductActionsProps) {
  const t = useTranslations("actions");
  const router = useRouter();
  const { addProduct } = useHandleAddToCart();

  return (
    <div className="absolute top-1.5 right-1.5 lg:-right-full lg:group-hover:right-1.5 flex flex-col gap-sm py-xs px-tiny transition-all duration-normal">
      {actionButtons.map((button: actionButtonT) => {
        if (button.type === "quickview") {
          return (
            <ProductQuickViewDialog key={button.id} product={product}>
              <ProductActionButton
                variant="icon"
                icon="Eye"
                label={t("quickView")}
                tooltip="left"
              />
            </ProductQuickViewDialog>
          );
        }

        return (
          <ProductActionButton
            key={button.id}
            variant="icon"
            icon={
              button.type === "cart" && hasVariants
                ? "PackageSearch"
                : button.icon
            }
            label={
              button.type === "cart" && hasVariants
                ? t("selectOptions")
                : t(button.label)
            }
            tooltip="left"
            onClick={() => {
              if (button.type === "cart") {
                if (hasVariants) {
                  router.push(
                    ROUTES.public.productDetail(product.id.toString()),
                  );
                } else {
                  addProduct(product.id);
                }
                return;
              }
              button.onClick();
            }}
          />
        );
      })}
    </div>
  );
}

export default ProductActions;
