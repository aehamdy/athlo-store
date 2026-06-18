export type ProductT = {
  id: number | string;
  code?: string;
  name: string;
  description: string;
  club?: string;
  brandName?: string;
  categoryName?: string;
  basePrice?: number;
  minPrice?: number;
  maxPrice?: number;
  priceAfterDiscount?: number;
  minPriceAfterDiscount?: number;
  maxPriceAfterDiscount?: number;
  hasVariants?: boolean;
  season: string;
  attributeKey?: string;
  images: string[];
};

export type ProductPricesT = {
  basePrice?: number;
  minPrice?: number;
  maxPrice?: number;
  priceAfterDiscount?: number;
  minPriceAfterDiscount?: number;
  maxPriceAfterDiscount?: number;
};

export type ProductTitleVariant = "card" | "details";
