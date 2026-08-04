import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function fetchCategories() {
  const response = await api.get(ENDPOINTS.category.list);

  return response.data;
}

export default fetchCategories;
