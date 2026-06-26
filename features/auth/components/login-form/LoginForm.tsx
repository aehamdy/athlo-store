"use client";

import Icon from "../../../../components/shared/Icon";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import PasswordInput from "../shared/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "../../schemas/login.schema";
import ErrorMessage from "@/components/shared/ErrorMessage";
import useLogin from "../../hooks/useLogin";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth.store";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import { STORAGE_KEYS } from "@/config/constants";

function LoginForm() {
  const actionsT = useTranslations("actions");
  const labelsT = useTranslations("labels");
  const loginMutation = useLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "admin",
      password: "M123_m",
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

      const { login } = useAuthStore.getState();
      login(user);

      router.replace(ROUTES.public.home);
    } catch (err) {
      console.log("Login Failed: ", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-lg w-full"
    >
      <div className="flex flex-col gap-md w-full">
        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="email" className="text-sm">
            {labelsT("username")}
          </label>

          <div className="space-y-xs">
            <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
              <Icon name="UserRound" />

              <input
                type="text"
                id="username"
                placeholder={labelsT("username")}
                className="w-full outline-none"
                {...register("username")}
              />
            </div>

            {errors.username && (
              <ErrorMessage message={errors.username.message} />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-xs w-full">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm">
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

      <div className="flex flex-col gap-sm">
        {/* <input
          type="submit"
          value={
            loginMutation.isPending ? labelsT("loading") : actionsT("login")
          }
          disabled={loginMutation.isPending}
          className="main-button disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        /> */}

        <Button variant="default" disabled={loginMutation.isPending}>
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
