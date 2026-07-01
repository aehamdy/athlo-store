import { z } from "zod";

export const profileSchema = z.object({
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username must not exceed 30 characters."),

  email: z.email("Please enter a valid email address."),

  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters.")
    .max(50),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters.")
    .max(50),

  phoneNumber: z.string().min(8, "Please enter a valid phone number.").max(20),

  birthDate: z.string(),

  city: z.string().min(2, "City is required.").max(100),

  region: z.string().min(2, "Region is required.").max(100),

  postalCode: z.string().min(3, "Postal code is required.").max(20),

  country: z.string().min(2, "Country is required.").max(100),
});

export type ProfileFormType = z.infer<typeof profileSchema>;
