import { CheckoutFormType, PlaceOrderRequest } from "../types";

export function mapCheckoutToPlaceOrderRequest(
  values: CheckoutFormType,
): PlaceOrderRequest {
  return {
    shippingMethodId: values.shippingMethodId,

    shipment: {
      fullName: values.fullName,
      city: values.city,
      country: values.country,
      region: values.region,
      streetAddress: values.streetAddress,
      buildingNumber: values.buildingNumber,
      floorNumber: values.floorNumber ?? 0,
      apartmentNumber: values.apartmentNumber ?? 0,
      phoneNumber: values.phoneNumber,
      notes: values.notes ?? "",

      trackingNumber: "",
      shippingMethod: "",
      shipmentStatus: "",
    },
  };
}
