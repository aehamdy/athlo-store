import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { CategoriesResponseT } from "../types";

async function fetchCategories(locale: string) {
  const response = await api.get<CategoriesResponseT>(ENDPOINTS.category.list, {
    headers: {
      "Accept-Language": locale,
    },
  });

  return response.data;
}

export default fetchCategories;
