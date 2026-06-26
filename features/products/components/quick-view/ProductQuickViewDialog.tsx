"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductT } from "../../types";
import ProductMetaInfo from "../ProductMetaInfo";
import ProductTitleDisplay from "../ProductTitleDisplay";
import ProductImageGallery from "../ProductImageGallery";
import ProductPriceDisplay from "../ProductPriceDisplay";
import ProductDescription from "../ProductDescription";
import mapProductPrices from "../../utils/mapProductPrices";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";

type Props = {
  product: ProductT;
  children: React.ReactNode;
};

function ProductQuickViewDialog({ product, children }: Props) {
  const t = useTranslations("labels");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-9/10 md:max-w-9/10 lg:max-w-3/5">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>

          <DialogDescription className="sr-only">
            Quickly preview this product.
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2">
          <div className="flex justify-center items-center bg-white">
            <ProductImageGallery
              images={product.images}
              productName={product.name}
              variant="quickView"
            />
          </div>

          <div className="flex flex-col py-md px-xl">
            <ProductMetaInfo
              variant="quickView"
              brand={product.brandName}
              season={product.season}
              category={product.categoryName}
            />

            <div className="mt-xs">
              <ProductTitleDisplay variant="quickView" title={product.name} />
            </div>

            <div className="mt-sm">
              <ProductPriceDisplay
                variant="quickView"
                prices={mapProductPrices(product)}
              />
            </div>

            <div className="mt-lg">
              <ProductDescription
                description={product.description}
                className="line-clamp-4"
              />
            </div>

            <div className="mt-auto flex gap-sm pt-3xl">
              <Button asChild className="flex-1">
                <Link href={ROUTES.public.productDetail(product.id.toString())}>
                  {t("viewDetails")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductQuickViewDialog;
