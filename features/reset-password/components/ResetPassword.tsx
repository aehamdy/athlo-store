"use client";

import Logo from "@/components/shared/Logo";
import Icon from "@/components/shared/Icon";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import FormInput from "../../profile/components/FormInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSearchParams } from "next/navigation";
import {
  resetPasswordSchema,
  ResetPasswordSchemaFormValues,
} from "../reset-password.schema";
import useResetPassword from "../hooks/useResetPassword";
import { useForm } from "react-hook-form";

function ResetPassword() {
  const t = useTranslations("authPages.resetPassword");
  const tLabels = useTranslations("labels");
  const tActions = useTranslations("actions");

  const { mutate, isPending } = useResetPassword();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const form = useForm<ResetPasswordSchemaFormValues>({
    resolver: zodResolver(resetPasswordSchema(t)),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  if (!email) {
    return <p>Invalid reset password link.</p>;
  }

  const onSubmit = (data: ResetPasswordSchemaFormValues) => {
    console.log("Data: ", data);

    mutate({
      Email: email,
      Password: data.password,
      ConfirmPassword: data.confirmPassword,
    });
  };

  return (
    <section className="main-page flex justify-center">
      <Card className="w-full max-w-[90%] md:max-w-1/2 lg:max-w-125">
        <CardHeader className="flex flex-col items-center gap-md">
          <Logo />

          <CardTitle>{t("resetPasswordTitle")}</CardTitle>

          <CardDescription className="text-center">
            {t("resetPasswordDescription")}
          </CardDescription>
        </CardHeader>

        <CardContent className="py-xl px-md">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-lg"
          >
            <div className="space-y-md">
              <FormInput<ResetPasswordSchemaFormValues>
                id="password"
                name="password"
                type="password"
                label={tLabels("password")}
                placeholder={t("passwordPlaceholder")}
                register={form.register}
                error={form.formState.errors.password}
                required
              />

              <FormInput<ResetPasswordSchemaFormValues>
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label={tLabels("confirmPassword")}
                placeholder={t("confirmPasswordPlaceholder")}
                register={form.register}
                error={form.formState.errors.confirmPassword}
                required
              />
            </div>

            <Button
              type="submit"
              className="main-button w-full"
              disabled={!form.formState.isValid || isPending}
            >
              {isPending ? (
                <div className="flex items-center gap-sm">
                  <LoadingIndicator size="md" />
                  {t("resettingPassword")}
                </div>
              ) : (
                t("resetPassword")
              )}
            </Button>

            <Link
              href={ROUTES.auth.login}
              className="flex items-center justify-center gap-sm text-muted-foreground hover:text-accent-base"
            >
              <Icon name="ArrowLeft" className="text-current" />
              {tActions("back")}
            </Link>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default ResetPassword;
