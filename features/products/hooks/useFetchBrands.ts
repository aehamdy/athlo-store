import { useQuery } from "@tanstack/react-query";
import fetchBrands from "../api/fetchBrands";

function useFetchBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });
}

export default useFetchBrands;
