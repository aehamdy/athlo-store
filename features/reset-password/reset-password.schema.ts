import { z } from "zod";

export const resetPasswordSchema = (t: (key: string) => string) =>
  z
    .object({
      password: z.string().trim().min(8, t("passwordMinLength")),

      confirmPassword: z.string().trim().min(1, t("confirmPasswordRequired")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: t("passwordsDoNotMatch"),
    });

export type ResetPasswordSchemaFormValues = z.infer<
  ReturnType<typeof resetPasswordSchema>
>;
