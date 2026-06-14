import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required").trim(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
