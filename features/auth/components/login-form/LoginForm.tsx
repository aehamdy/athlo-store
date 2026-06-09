"use client";

import Icon from "../../../../components/shared/Icon";
import Link from "next/link";
import ROUTES from "@/lib/routes";
import PasswordInput from "../shared/PasswordInput";

function LoginForm() {
  return (
    <form action="" className="flex flex-col items-center gap-lg w-full">
      <div className="flex flex-col gap-md w-full">
        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="email" className="text-sm">
            Username
          </label>

          <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="UserRound" />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
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
              href={ROUTES.auth.forgotPassword}
              className="text-xs text-accent-base hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <PasswordInput />
        </div>
      </div>

      <input type="submit" value="Sign in" className="main-button" />
    </form>
  );
}

export default LoginForm;
