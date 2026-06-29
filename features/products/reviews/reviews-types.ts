export type ReviewItemT = {
  id: number;
  productId: number;
  productName: string;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type ReviewsApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type AddReviewPayload = {
  productId: number;
  rating: number;
  comment: string;
};
