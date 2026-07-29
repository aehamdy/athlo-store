import z from "zod";

export const forgotPasswordSchema = (t: (key: string) => string) =>
  z.object({
    email: z.email(t("invalidEmail")).trim(),
  });

export type ForgotPasswordSchemaFormValues = z.infer<
  ReturnType<typeof forgotPasswordSchema>
>;
