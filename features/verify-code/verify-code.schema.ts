import z from "zod";

export const verifyCodeSchema = (t: (key: string) => string) =>
  z.object({
    code: z.string().trim().length(6, t("invalidVerificationCode")),
  });

export type VerifyCodeSchemaFormValues = z.infer<
  ReturnType<typeof verifyCodeSchema>
>;
