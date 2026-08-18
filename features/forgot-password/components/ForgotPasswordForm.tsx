"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "../../../components/shared/Icon";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaFormValues,
} from "../forgot-password.schema";
import FormInput from "../../profile/components/FormInput";
import { useForm } from "react-hook-form";
import useSendVerificationCode from "../hooks/useSendVerificationCode";
import LoadingIndicator from "@/components/shared/LoadingIndicator";

function ForgotPasswordForm() {
  const t = useTranslations("authPages");
  const tLabels = useTranslations("labels");

  const { mutate, isPending } = useSendVerificationCode();

  const form = useForm<ForgotPasswordSchemaFormValues>({
    resolver: zodResolver(forgotPasswordSchema(t)),
    mode: "onChange",
  });

  const onSubmit = (data: ForgotPasswordSchemaFormValues) => {
    mutate(data);
  };

  return (
    <section className="main-page flex justify-center w-full">
      <Card className="w-full max-w-[90%] md:max-w-1/2 lg:max-w-125">
        <CardHeader className="flex flex-col items-center gap-md">
          <Logo />

          <CardTitle>{t("forgotPasswordPage.forgotPasswordTitle")}</CardTitle>

          <CardDescription className="text-center">
            {t("forgotPasswordPage.forgotPasswordDescription")}
          </CardDescription>
        </CardHeader>

        <CardContent className="py-xl px-md w-full">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-lg w-full"
          >
            <div className="flex flex-col gap-md w-full">
              <FormInput<ForgotPasswordSchemaFormValues>
                id="email"
                name="email"
                type="email"
                label={tLabels("email")}
                placeholder="you@example.com"
                register={form.register}
                error={form.formState.errors.email}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={!form.formState.isValid || isPending}
              className="main-button w-full"
            >
              {isPending ? (
                <div className="flex items-center gap-sm">
                  <LoadingIndicator size="md" />
                  {t("forgotPasswordPage.sendingCode")}
                </div>
              ) : (
                t("forgotPasswordPage.sendVerificationCode")
              )}
            </Button>

            <Link
              href={ROUTES.auth.login}
              className="flex items-center gap-sm text-muted-foreground hover:text-accent-base"
            >
              <Icon name="ArrowLeft" className="text-current" />
              {t("forgotPasswordPage.backToSignIn")}
            </Link>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default ForgotPasswordForm;
