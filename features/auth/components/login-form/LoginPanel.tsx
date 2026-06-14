import ROUTES from "@/lib/routes";
import Link from "next/link";
import AuthHeader from "../shared/AuthHeader";
import LoginForm from "@/features/auth/components/login-form/LoginForm";
import { useTranslations } from "next-intl";

function LoginPanel() {
  const actionsT = useTranslations("actions");
  const authT = useTranslations("authPages");

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-9/10 md:w-3/4 lg:w-1/3 p-3xl space-y-3xl bg-surface border border-subtle rounded-xl shadow-md">
        <AuthHeader
          title={actionsT("login")}
          description={authT("enterCredentialsToContinue")}
        />

        {/* Form */}
        <div className="flex flex-col items-center gap-xl">
          <LoginForm />

          <div className="flex items-center gap-xs text-sm">
            <p className="text-muted-foreground">
              {authT("dontHaveAnAccount")}
            </p>

            <Link
              href={ROUTES.auth.register}
              className="text-accent-base hover:underline"
            >
              {actionsT("register")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPanel;
