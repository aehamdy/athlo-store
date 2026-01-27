"use client";

import { useState } from "react";
import Icon from "../shared/Icon";
import Link from "next/link";
import endpoints from "@/lib/endpoints";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword((val) => !val);
  };

  return (
    <form action="" className="flex flex-col items-center gap-lg w-full">
      <div className="flex flex-col gap-md w-full">
        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="email" className="text-sm">
            Email
          </label>

          <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="Mail" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-xs w-full">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm">
              Password
            </label>

            <Link
              href={endpoints.auth.forgotPassword}
              className="text-xs text-accent-base hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

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
        </div>
      </div>

      <input type="submit" value="Sign in" className="main-button" />
    </form>
  );
}

export default SignInForm;
