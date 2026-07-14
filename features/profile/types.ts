export type ApiResponse<T> = {
  statusCode: number;
  meta: unknown;
  succeeded: boolean;
  message: string;
  errors: string[] | null;
  data: T;
};

export type UpdateProfileRequest = {
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

export type UpdatePasswordRequest = {
  id: number;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type MyOrderT = {
  id: number;
  createdAt: string;
  paymentMethod: string;
  status: string;
  totalAmount: number;
  shipmentInfo: OrderShipmentInfoT;
  items: OrderItemT[];
};

export type OrderShipmentInfoT = {
  apartmentNumber: number;
  buildingNumber: number;
  city: string;
  country: string;
  floorNumber: number;
  fullName: string;
  notes: string;
  phoneNumber: string;
  region: string;
  shipmentStatus: string;
  shippingMethod: string;
  streetAddress: string;
  trackingNumber: number | string | null;
};

export type OrderItemT = {
  productVariantId: number;
  productName: string;
  sku: string;

  attributeKey: string;
  attributeValue: string;

  unit: string | null;

  colorLabel: string | null;
  colorHex: string;

  unitPrice: number;
  quantity: number;
  totalPrice: number;
};
