import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function fetchBrands() {
  const response = await api.get(ENDPOINTS.brand.list);

  return response.data;
}

export default fetchBrands;
