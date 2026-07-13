"use client";

import ProductCard from "../products/components/ProductCard";
import { ProductT } from "../products/types";
import useFetchNewArrivals from "./hooks/useFetchNewArrivals";

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
