import { PASSWORD_MIN_LENGTH } from "@/features/profile/constants";
import { z } from "zod";

export const registerSchema = z
  .object({
    userName: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters")
      .max(20),

    email: z.string().trim().email("Invalid email address"),

    password: z
      .string()
      .min(
        PASSWORD_MIN_LENGTH,
        `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
      )
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),

    confirmPassword: z.string(),

    firstName: z.string().trim().min(1, "First name is required"),

    lastName: z.string().trim().min(1, "Last name is required"),

    phoneNumber: z
      .string()
      .trim()
      .min(11, "Phone number is too short")
      .max(11, "Phone number is too long"),

    birthDate: z
      .string()
      .min(1, "Birth date is required")
      .refine((value) => !isNaN(Date.parse(value)), "Invalid birth date"),

    city: z.string().trim().min(2, "City is required"),

    region: z.string().trim().min(1),

    postalCode: z.string().trim().min(3).max(20),

    country: z.string().trim().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormType = z.infer<typeof registerSchema>;
