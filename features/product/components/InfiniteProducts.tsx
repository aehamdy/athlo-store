"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import { Product } from "./ProductsGrid";
import ProductCard from "@/features/products/components/ProductCard";
import LoadingMoreProducts from "./LoadingMoreProducts";

type InfiniteProductsProps = {
  initialProducts: Product[];
  initialPage: number;
  hasNextPage: boolean;
};

type PaginatedProductsResponse = {
  data: Product[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
};

export default function InfiniteProducts({
  initialProducts,
  initialPage,
  hasNextPage: initialHasNextPage,
}: InfiniteProductsProps) {
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasNextPage) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/products?pageNumber=${currentPage + 1}&pageSize=20`,
      );

      if (!response.ok) {
        const text = await response.text();
        console.error("API error:", text);
        return;
      }

      const data: PaginatedProductsResponse = await response.json();

      setProducts((prev) => [...prev, ...data.data]);
      setCurrentPage(data.currentPage);
      setHasNextPage(data.hasNextPage);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, hasNextPage, isLoading]);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 },
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => observerRef.current?.disconnect();
  }, [loadMore]);

  return (
    <section className="flex-1">
      <div className="grid grid-cols-1 gap-xl sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link key={product.id} href={ROUTES.public.productDetail(product.id)}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      {hasNextPage && <div ref={loadMoreRef} className="h-10" />}

      {isLoading && <LoadingMoreProducts />}

      {!hasNextPage && products.length > 0 && (
        <div>
          <p className="text-center text-sm text-muted-foreground">
            No more products to load.
          </p>
        </div>
      )}
    </section>
  );
}
