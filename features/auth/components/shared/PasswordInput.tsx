"use client";

import Icon from "@/components/shared/Icon";
import { useState } from "react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword((val) => !val);
  };

  return (
    <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
      <Icon name="Lock" />

      <input
        type={showPassword ? "password" : "text"}
        name="password"
        id="password"
        placeholder="••••••••"
        className="w-full outline-none"
      />

      <button
        type="button"
        onClick={handleShowPassword}
        className="hover:primary-dark dark:hover:primary-light cursor-pointer"
      >
        <Icon name={showPassword ? "Eye" : "EyeClosed"} />
      </button>
    </div>
  );
}

export default PasswordInput;
