export type CheckoutFormType = {
  shippingMethodId: number;

  fullName: string;
  phoneNumber: string;

  streetAddress: string;
  city: string;
  region: string;
  country: string;

  buildingNumber: number;
  floorNumber?: number;
  apartmentNumber?: number;

  notes?: string;
};

export type PlaceOrderRequest = {
  shippingMethodId: number;

  shipment: {
    fullName: string;
    city: string;
    country: string;
    region: string;
    streetAddress: string;
    buildingNumber: number;
    floorNumber: number;
    apartmentNumber: number;
    phoneNumber: string;
    notes: string;
    trackingNumber: string;
    shippingMethod: string;
    shipmentStatus: string;
  };
};

export type ShippingMethod = {
  id: number;
  name: string;
  description: string;
  price: number;
  estimatedDeliveryDays: number;
};
