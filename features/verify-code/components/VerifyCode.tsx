"use client";

import Icon from "@/components/shared/Icon";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useVerifyCode from "../hooks/useVerifyCode";
import { useForm } from "react-hook-form";
import {
  verifyCodeSchema,
  VerifyCodeSchemaFormValues,
} from "../verify-code.schema";
import { zodResolver } from "@hookform/resolvers/zod";

function VerifyCode() {
  const t = useTranslations("authPages.verifyCode");
  const tActions = useTranslations("actions");

  const { mutate, isPending } = useVerifyCode();

  const form = useForm<VerifyCodeSchemaFormValues>({
    resolver: zodResolver(verifyCodeSchema(t)),
    defaultValues: {
      code: "",
    },
  });

  const code = form.watch("code");

  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  if (!email) {
    return <p>Invalid verification link.</p>;
  }

  const onSubmit = (data: VerifyCodeSchemaFormValues) => {
    mutate({
      email,
      code: data.code,
    });
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Card className="w-full max-w-[95%] md:max-w-3/4 lg:max-w-125 max-h-1/2 lg:max-h-3/4">
        <CardHeader className="flex flex-col items-center gap-md">
          <Logo />

          <CardTitle>{t("enterVerificationCodeTitle")}</CardTitle>

          <CardDescription className="text-center">
            {t("enterVerificationCodeDescription")}
          </CardDescription>
        </CardHeader>

        <CardContent
          dir="ltr"
          className="flex flex-col items-center gap-10 w-full py-xl px-md"
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-lg">
            <InputOTP
              maxLength={6}
              value={code}
              onChange={(value) =>
                form.setValue("code", value, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }
            >
              {form.formState.errors.code && (
                <p className="mt-2 text-sm text-destructive">
                  {form.formState.errors.code.message}
                </p>
              )}
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-14 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-14 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

            <div className="flex flex-col items-center gap-5 w-full">
              <div className="w-full">
                <Button
                  type="submit"
                  className="main-button w-full"
                  disabled={code.length !== 6 || isPending}
                >
                  {isPending ? t("verifyingCode") : t("verifyCode")}
                </Button>
              </div>

              <Link
                href={ROUTES.auth.forgotPassword}
                className="flex items-center gap-sm text-muted-foreground hover:text-accent-base"
              >
                <Icon name="ArrowLeft" className="text-current" />
                {tActions("back")}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default VerifyCode;
