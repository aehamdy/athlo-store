"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import ROUTES from "@/lib/routes";
import { STORAGE_KEYS } from "@/config/constants";
import { useAuthStore } from "@/lib/stores/auth.store";

import { Button } from "@/components/ui/button";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import ErrorMessage from "@/components/shared/ErrorMessage";
import useLogin from "../../hooks/useLogin";
import { LoginFormValues, loginSchema } from "../../schemas/login.schema";
import FormInput from "@/features/profile/components/FormInput";
import PasswordInput from "../shared/PasswordInput";

function LoginForm() {
  const actionsT = useTranslations("actions");
  const labelsT = useTranslations("labels");

  const router = useRouter();
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "ahmed",
      password: "Ahmed.10",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await loginMutation.mutateAsync(data);

      const { accessToken, refreshToken, user } = result.data;

      Cookies.set(STORAGE_KEYS.accessToken, accessToken, {
        expires: 7,
        sameSite: "lax",
      });

      Cookies.set(STORAGE_KEYS.refreshToken, refreshToken.tokenString, {
        expires: 30,
        sameSite: "lax",
      });

      useAuthStore.getState().login(user);

      router.replace(ROUTES.public.home);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-lg w-full"
    >
      <div className="space-y-md">
        <FormInput
          id="username"
          name="username"
          label={labelsT("username")}
          placeholder={labelsT("username")}
          register={register}
          error={errors.username}
        />

        <div className="space-y-xs">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm text-muted-foreground">
              {labelsT("password")}
            </label>

            <Link
              href={ROUTES.auth.forgotPassword}
              className="text-xs text-accent-base hover:underline"
            >
              {labelsT("forgotPassword")}
            </Link>
          </div>

          <PasswordInput error={errors.password} {...register("password")} />
        </div>
      </div>

      <div className="space-y-sm">
        <Button
          type="submit"
          disabled={loginMutation.isPending}
          className="w-full"
        >
          {loginMutation.isPending ? (
            <div className="flex items-center gap-sm">
              <LoadingIndicator size="xs" />
              {labelsT("loading")}
            </div>
          ) : (
            actionsT("login")
          )}
        </Button>

        {loginMutation.isError && (
          <ErrorMessage
            message={
              loginMutation.error instanceof Error
                ? loginMutation.error.message
                : "Something went wrong!"
            }
          />
        )}
      </div>
    </form>
  );
}

export default LoginForm;
