export type ProductT = ProductPricesT & {
  id: number;
  code?: string;
  name: string;
  description: string;

  club?: string;
  brandName?: string;
  categoryName?: string;

  hasVariants?: boolean;
  season: string;
  attributeKey?: string;

  images: string[];

  variants?: ProductVariantT[];
};

export type ProductDetails = {
  id: number;
  code: string;
  name: string;
  description: string;
  season: string;
  club: string;
  brandName: string;
  categoryName: string;
  basePrice: number;
  minPrice: number;
  maxPrice: number;
  hasVariants: boolean;
  priceAfterDiscount: number;
  minPriceAfterDiscount: number;
  maxPriceAfterDiscount: number;
  attributeKey: string;
  images: string[];
  variants: ProductVariantT[];
};

export type ProductDetailsApiResponse = {
  statusCode: number;
  meta: unknown;
  succeeded: boolean;
  message: string;
  errors: unknown;
  data: ProductDetails;
};

export type ProductVariantT = {
  id: number;
  sku: string;
  price: number;
  priceAfterDiscount: number;
  stockQuantity: number;
  attributeValueEn: string;
  attributeValueAr: string;
  unit: string;
  colorLabel: string;
  colorHex: string;
};

export type ProductPricesT = {
  basePrice?: number;
  minPrice?: number;
  maxPrice?: number;
  priceAfterDiscount?: number;
  minPriceAfterDiscount?: number;
  maxPriceAfterDiscount?: number;
};

export type GetProductsParams = {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  ordering?: number;
};

export type PaginatedProductsResponse = {
  data: ProductT[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize: number;
};

export type ProductViewVariant = "details" | "card" | "cart-item" | "quickView";
