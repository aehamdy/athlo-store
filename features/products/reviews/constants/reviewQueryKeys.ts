const reviewQueryKeys = {
  all: ["reviews"],
  list: (productId: string) => [...reviewQueryKeys.all, productId],
} as const;

export default reviewQueryKeys;
