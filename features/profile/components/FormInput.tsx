"use client";

import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps<T extends FieldValues> = {
  id: FieldPath<T>;
  name: FieldPath<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  valueAsNumber?: boolean;
};

function FormInput<T extends FieldValues>({
  id,
  name,
  label,
  register,
  error,
  required,
  type = "text",
  placeholder,
  disabled,
  valueAsNumber,
}: FormInputProps<T>) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="font-medium text-muted-foreground">
        {label}
        {required && <span className="ms-0.5 text-destructive">*</span>}
      </Label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, {
          valueAsNumber,
        })}
        className="form-input"
      />

      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}

export default FormInput;
