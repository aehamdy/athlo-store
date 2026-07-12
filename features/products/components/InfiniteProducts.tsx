"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import ProductCard from "@/features/products/components/ProductCard";
import LoadingMoreProducts from "../../product/components/LoadingMoreProducts";

import { ProductT } from "@/features/products/types";
import fetchProducts from "../api/fetchProducts";

type PaginatedProductsResponse = {
  data: ProductT[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
};

type InfiniteProductsProps = {
  initialData: PaginatedProductsResponse;
};

function InfiniteProducts({ initialData }: InfiniteProductsProps) {
  const [products, setProducts] = useState(initialData.data);

  const [currentPage, setCurrentPage] = useState(initialData.currentPage);

  const [hasNextPage, setHasNextPage] = useState(initialData.hasNextPage);

  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasNextPage) return;

    setIsLoading(true);

    try {
      const data = await fetchProducts({
        pageNumber: currentPage + 1,
        pageSize: initialData.pageSize,
      });

      setProducts((prev) => [...prev, ...data.data]);

      setCurrentPage(data.currentPage);

      setHasNextPage(data.hasNextPage);
    } catch (error) {
      console.error("Failed to fetch more products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, hasNextPage, isLoading, initialData.pageSize]);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 1,
      },
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => observerRef.current?.disconnect();
  }, [loadMore]);

  return (
    <section className="flex-1">
      <div className="grid grid-cols-1 gap-xl sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasNextPage && <div ref={loadMoreRef} className="h-10" />}

      {isLoading && <LoadingMoreProducts />}

      {!hasNextPage && products.length > 0 && (
        <div className="mt-xl">
          <p className="text-center text-sm text-muted-foreground">
            No more products to load.
          </p>
        </div>
      )}
    </section>
  );
}

export default InfiniteProducts;
