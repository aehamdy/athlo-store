"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { GetProductsParams } from "../types";
import fetchProducts from "../api/fetchProducts";
import productQueryKeys from "../productQueryKeys";

function useInfiniteProducts(
  params: Omit<GetProductsParams, "pageNumber"> = {},
) {
  return useInfiniteQuery({
    queryKey: productQueryKeys.infinite(params),

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      fetchProducts({
        ...params,
        pageNumber: pageParam,
      }),

    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.currentPage + 1 : undefined,
  });
}

export default useInfiniteProducts;
