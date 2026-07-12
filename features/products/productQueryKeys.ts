import { GetProductsParams } from "./types";

const productQueryKeys = {
  all: ["products"] as const,
  infinite: (params: Omit<GetProductsParams, "pageNumber">) =>
    [...productQueryKeys.all, "infinite", params] as const,
};

export default productQueryKeys;
