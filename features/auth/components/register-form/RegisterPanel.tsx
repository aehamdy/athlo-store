import ROUTES from "@/lib/routes";
import Link from "next/link";
import AuthHeader from "../shared/AuthHeader";
import RegisterForm from "@/features/auth/components/register-form/RegisterForm";

function RegisterPanel() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-9/10 md:w-3/4 lg:w-1/3 p-3xl space-y-3xl bg-surface border border-subtle rounded-xl shadow-md">
        <AuthHeader
          title="Sign Up"
          description="Create your account to get started"
        />

        {/* Form */}
        <div className="flex flex-col items-center gap-xl">
          <RegisterForm />

          <div className="flex items-center gap-xs text-sm">
            <p className="text-muted-foreground">Have an account? </p>

            <Link
              href={ROUTES.auth.login}
              className="text-accent-base hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPanel;
