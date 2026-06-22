"use client";

import ProductImageGallery from "@/features/products/components/ProductImageGallery";
import { ProductT } from "../types";

type ProductDetailsLayoutProps = {
  product: ProductT;
};

function ProductDetailsLayout({ product }: ProductDetailsLayoutProps) {
  return (
    <section>
      <div className="grid lg:grid-cols-12 gap-lg">
        <div className="lg:col-span-5">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        <div className="lg:col-span-7 pt-sm"></div>
      </div>
    </section>
  );
}

export default ProductDetailsLayout;
