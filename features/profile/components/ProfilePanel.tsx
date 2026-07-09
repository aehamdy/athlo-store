"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileFormType, profileSchema } from "../schema/profile.schema";
import FormInput from "./FormInput";
import { User } from "@/features/auth/types/auth.types";
import { useTranslations } from "next-intl";
import getCurrentUserClaims from "@/lib/auth/getCurrentUserClaims";
import useUpdateProfile from "../hooks/useUpdateProfile";
import LoadingIndicator from "@/components/shared/LoadingIndicator";

type ProfilePanelProps = {
  user: User;
};

function ProfilePanel({ user }: ProfilePanelProps) {
  const t = useTranslations("profilePage.profile");
  const tLabels = useTranslations("labels");
  const claims = getCurrentUserClaims();

  const userId = claims?.id ?? 0;
  const userName = claims?.userName ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<ProfileFormType>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      userName: userName ?? "",
      email: user.email ?? "",
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      phoneNumber: user.phoneNumber ?? "",
      birthDate: user.birthDate.split("T")[0] ?? "",
      city: user.city ?? "",
      region: user.region ?? "",
      postalCode: user.postalCode ?? "",
      country: user.country ?? "",
    },
  });

  const { mutate, isPending } = useUpdateProfile();

  function onSubmit(values: ProfileFormType) {
    mutate({ id: userId, ...values });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>

        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormInput
              id="userName"
              name="userName"
              label={tLabels("username")}
              register={register}
              error={errors.userName}
            />

            <FormInput
              id="email"
              name="email"
              type="email"
              label={tLabels("email")}
              register={register}
              error={errors.email}
            />

            <FormInput
              id="firstName"
              name="firstName"
              label={tLabels("firstName")}
              register={register}
              error={errors.firstName}
            />

            <FormInput
              id="lastName"
              name="lastName"
              label={tLabels("lastName")}
              register={register}
              error={errors.lastName}
            />

            <FormInput
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              label={tLabels("phoneNumber")}
              register={register}
              error={errors.phoneNumber}
            />

            <FormInput
              id="birthDate"
              name="birthDate"
              type="date"
              label={tLabels("birthDate")}
              register={register}
              error={errors.birthDate}
            />

            <FormInput
              id="city"
              name="city"
              label={tLabels("city")}
              register={register}
              error={errors.city}
            />

            <FormInput
              id="region"
              name="region"
              label={tLabels("region")}
              register={register}
              error={errors.region}
            />

            <FormInput
              id="country"
              name="country"
              label={tLabels("country")}
              register={register}
              error={errors.country}
            />

            <FormInput
              id="postalCode"
              name="postalCode"
              label={tLabels("postalCode")}
              register={register}
              error={errors.postalCode}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!isDirty || !isValid || isPending || isSubmitting}
            >
              {isPending ? (
                <div className="flex items-center gap-sm">
                  <LoadingIndicator size="sm" />
                  {tLabels("updating")}
                </div>
              ) : (
                tLabels("saveChanges")
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ProfilePanel;
