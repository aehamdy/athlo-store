"use client";

import { useState } from "react";
import Icon from "../shared/Icon";

function SignUpForm() {
  const [visiblePasswords, setVisiblePasswords] = useState({
    password: true,
    confirmPassword: true,
  });

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <form action="" className="flex flex-col items-center gap-lg w-full">
      <div className="flex flex-col gap-md w-full">
        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="name" className="text-sm">
            Name
          </label>

          <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="User" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your full name"
              className="w-full outline-none"
            />
          </div>
        </div>

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
          <label htmlFor="password" className="text-sm">
            Password
          </label>

          <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="Lock" />

            <input
              type={visiblePasswords.password ? "password" : "text"}
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full outline-none"
            />

            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              className="hover:primary-dark dark:hover:primary-light cursor-pointer"
            >
              <Icon name={visiblePasswords.password ? "Eye" : "EyeClosed"} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-xs w-full">
          <label htmlFor="confirm-password" className="text-sm">
            Confirm Password
          </label>

          <div className="flex items-center gap-2 p-xs bg-field border-2 border-subtler focus-within:border-2 focus-within:border-accent-strong rounded-sm">
            <Icon name="Lock" />

            <input
              type={visiblePasswords.confirmPassword ? "password" : "text"}
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="w-full outline-none"
            />

            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="hover:primary-dark dark:hover:primary-light cursor-pointer"
            >
              <Icon
                name={visiblePasswords.confirmPassword ? "Eye" : "EyeClosed"}
              />
            </button>
          </div>
        </div>
      </div>

      <input type="submit" value="Sign in" className="main-button" />
    </form>
  );
}

export default SignUpForm;
