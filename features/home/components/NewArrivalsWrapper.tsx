"use client";

import ProductCard from "@/features/products/components/ProductCard";
import useFetchNewArrivals from "../hooks/useFetchNewArrivals";
import { ProductT } from "@/features/products/types";

function NewArrivalsWrapper() {
  const { data: newProducts } = useFetchNewArrivals();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {newProducts?.map((product: ProductT) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default NewArrivalsWrapper;
