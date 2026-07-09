"use client";

import { FieldError, Path, UseFormRegister } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps<T extends Record<string, unknown>> = {
  id: Path<T>;
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
};

function FormInput<T extends Record<string, unknown>>({
  id,
  name,
  label,
  register,
  error,
  type = "text",
  placeholder,
  disabled,
}: FormInputProps<T>) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="font-normal text-foreground">
        {label}
      </Label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className="text-foreground border-subtle focus-visible:border-none focus-visible:ring-accent-ring"
      />

      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}

export default FormInput;
