"use client";

import { useQuery } from "@tanstack/react-query";
import fetchCategories from "../api/fetchCategories";
import { CategoriesResponseT } from "../types";
import { useLocale } from "next-intl";

function useFetchCategories() {
  const locale = useLocale();

  return useQuery<CategoriesResponseT>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(locale),
  });
}

export default useFetchCategories;
