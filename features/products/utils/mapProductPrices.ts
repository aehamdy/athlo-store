import { ProductT, ProductPricesT } from "../types";

function mapProductPrices(product: ProductT): ProductPricesT {
  return {
    basePrice: product.basePrice,
    minPrice: product.minPrice,
    maxPrice: product.maxPrice,
    priceAfterDiscount: product.priceAfterDiscount,
    minPriceAfterDiscount: product.minPriceAfterDiscount,
    maxPriceAfterDiscount: product.maxPriceAfterDiscount,
  };
}

export default mapProductPrices;
