import { PASSWORD_MIN_LENGTH } from "@/features/profile/constants";
import { z } from "zod";

export const registerSchema = z
  .object({
    userName: z.string().trim().min(3, "Username is required"),

    email: z.string().trim().email("Invalid email address"),

    password: z
      .string()
      .min(
        PASSWORD_MIN_LENGTH,
        `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
      ),

    confirmPassword: z.string(),

    firstName: z.string().trim().min(1, "First name is required"),

    lastName: z.string().trim().min(1, "Last name is required"),

    phoneNumber: z.string().trim().min(1, "Phone number is required"),

    birthDate: z.string().min(1, "Birth date is required"),

    city: z.string().trim().min(1),

    region: z.string().trim().min(1),

    postalCode: z.string().trim().min(1),

    country: z.string().trim().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormType = z.infer<typeof registerSchema>;
