import SignInForm from "@/components/forms/SignInForm";
import endpoints from "@/lib/endpoints";
import Link from "next/link";

function SignIn() {
  return (
    <main className="h-dvh">
      <div className="h-full flex items-center justify-center">
        <div className="w-9/10 md:w-3/4 lg:w-1/3 p-3xl space-y-3xl bg-surface border border-subtle rounded-xl shadow-md">
          <div className="flex flex-col items-center gap-md">
            <h1 className="">LOGO</h1>

            <div className="flex flex-col items-center gap-sm">
              <h1 className="font-bold text-xl text-foreground">Sign In</h1>

              <p className="text-center text-muted-foreground">
                Enter your credentials to continue
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center gap-xl">
            <SignInForm />

            <div className="flex items-center gap-xs text-sm">
              <p className="text-muted-foreground">
                Don&apos;t have an account?{" "}
              </p>

              <Link
                href={endpoints.auth.signUp}
                className="text-accent-base hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
