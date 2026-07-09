"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/features/profile/components/FormInput";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import { Button } from "@/components/ui/button";

import {
  RegisterFormType,
  registerSchema,
} from "../../schemas/register.schema";
import useRegister from "../../hooks/useRegister";

function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthDate: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
    },
  });

  function onSubmit(data: RegisterFormType) {
    mutate(data, {
      onSuccess() {
        reset();
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-lg w-full"
    >
      <div className="grid grid-cols-2 gap-6 w-full">
        <FormInput
          id="userName"
          name="userName"
          label="Username"
          register={register}
          error={errors.userName}
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email"
          register={register}
          error={errors.email}
        />

        <FormInput
          id="firstName"
          name="firstName"
          label="First Name"
          register={register}
          error={errors.firstName}
        />

        <FormInput
          id="lastName"
          name="lastName"
          label="Last Name"
          register={register}
          error={errors.lastName}
        />

        <FormInput
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          label="Phone Number"
          register={register}
          error={errors.phoneNumber}
        />

        <FormInput
          id="birthDate"
          name="birthDate"
          type="date"
          label="Birth Date"
          register={register}
          error={errors.birthDate}
        />

        <FormInput
          id="city"
          name="city"
          label="City"
          register={register}
          error={errors.city}
        />

        <FormInput
          id="region"
          name="region"
          label="Region"
          register={register}
          error={errors.region}
        />

        <FormInput
          id="postalCode"
          name="postalCode"
          label="Postal Code"
          register={register}
          error={errors.postalCode}
        />

        <FormInput
          id="country"
          name="country"
          label="Country"
          register={register}
          error={errors.country}
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Password"
          register={register}
          error={errors.password}
        />

        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          register={register}
          error={errors.confirmPassword}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={!isDirty || !isValid || isPending}
      >
        {isPending ? (
          <div className="flex items-center gap-sm">
            <LoadingIndicator size="xs" />
            Creating Account...
          </div>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}

export default RegisterForm;
