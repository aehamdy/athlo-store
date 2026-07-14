import { useQuery } from "@tanstack/react-query";
import fetchCategories from "../api/fetchCategories";

function useFetchCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}

export default useFetchCategories;
