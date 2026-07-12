"use client";

import ErrorMessage from "@/components/shared/ErrorMessage";
import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type PasswordInputProps = {
  error?: FieldError;
} & UseFormRegisterReturn &
  React.InputHTMLAttributes<HTMLInputElement>;

function PasswordInput({ error, ...inputProps }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowPassword = () => {
    setIsVisible((val) => !val);
  };

  return (
    <div className="space-y-xs">
      <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
        <Icon name="Lock" />

        <input
          type={isVisible ? "text" : "password"}
          placeholder="••••••••"
          {...inputProps}
          className="w-full outline-none text-muted-foreground"
        />

        <Button
          type="button"
          variant="plain"
          size="xs"
          onClick={handleShowPassword}
        >
          <Icon name={isVisible ? "EyeClosed" : "Eye"} className="" />
        </Button>
      </div>

      {error && <ErrorMessage message={error?.message} />}
    </div>
  );
}

export default PasswordInput;
