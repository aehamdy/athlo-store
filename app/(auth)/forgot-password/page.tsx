import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import Icon from "@/components/shared/Icon";
import endpoints from "@/lib/endpoints";
import Link from "next/link";

function ForgorPasswordPage() {
  return (
    <main className="h-dvh">
      <div className="h-full flex items-center justify-center">
        <div className="w-9/10 md:w-3/4 lg:w-1/3 p-3xl space-y-3xl bg-surface border border-subtle rounded-xl shadow-md">
          <div className="flex flex-col items-center gap-md">
            <h1 className="">LOGO</h1>

            <div className="flex flex-col items-center gap-sm">
              <h1 className="font-bold text-xl text-foreground">
                Forgot Password?
              </h1>

              <p className="text-center text-muted-foreground">
                Enter your email and we&apos;ll send you a reset link
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center gap-xl">
            <ForgotPasswordForm />

            <Link
              href={endpoints.auth.signIn}
              className="flex items-center gap-xs text-xs text-muted-foreground hover:text-foreground transition-colors duration-normal"
            >
              <Icon name="ArrowLeft" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgorPasswordPage;
