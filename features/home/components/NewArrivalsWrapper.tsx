"use client";

import ProductCard from "@/features/products/components/ProductCard";
import useFetchNewArrivals from "../hooks/useFetchNewArrivals";
import { ProductT } from "@/features/products/types";
import ProductCardSkeleton from "@/features/products/components/ProductCardSkeleton";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { useTranslations } from "next-intl";

function NewArrivalsWrapper() {
  const t = useTranslations("home.newArrivals");
  const { data: newProducts, isLoading, isError } = useFetchNewArrivals();

  if (isLoading)
    return (
      <div className="grid grid-cols-4 gap-xl">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );

  if (isError) return <ErrorMessage message={t("failedFetchingNewArrivals")} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
      {newProducts?.map((product: ProductT) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default NewArrivalsWrapper;
