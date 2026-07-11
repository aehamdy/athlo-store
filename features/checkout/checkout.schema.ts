import { z } from "zod";

export const checkoutSchema = z.object({
  shippingMethodId: z.number(),

  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  region: z.string().min(1, "Region is required"),
  country: z.string().min(1, "Country is required"),

  buildingNumber: z.string().min(1, "Building number is required"),
  floorNumber: z.string().optional(),
  apartmentNumber: z.string().optional(),

  paymentMethod: z.enum(["cashOnDelivery", "creditCard"]),

  notes: z.string().optional(),
});

export type CheckoutFormType = z.infer<typeof checkoutSchema>;
