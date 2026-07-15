import ROUTES from "@/lib/routes";
import Link from "next/link";
import AuthHeader from "../shared/AuthHeader";
import RegisterForm from "@/features/auth/components/register-form/RegisterForm";
import { useTranslations } from "next-intl";
import Icon from "@/components/shared/Icon";

function RegisterPanel() {
  const actionsT = useTranslations("actions");
  const authT = useTranslations("authPages");

  return (
    <div className="h-full flex justify-center items-center w-full my-4">
      <div className="w-[95%] md:w-3/4 lg:w-1/2 p-4 space-y-3xl bg-surface border border-subtle rounded-xl shadow-md">
        <AuthHeader
          title={actionsT("register")}
          description={authT("createYourAccountToGetStarted")}
        />

        <div className="flex flex-col text-center items-center gap-xs text-red-500">
          <Icon name="OctagonAlert" size="38" className="text-current" />
          <p>
            Registration is currently unavailable because the backend
            implementation is still in progress.
          </p>

          <p>Please use one of the provided test accounts to sign in.</p>
        </div>

        <div className="flex flex-col items-center gap-xl">
          <RegisterForm />

          <div className="flex items-center gap-xs text-sm">
            <p className="text-muted-foreground">{authT("haveAnAccount")} </p>

            <Link
              href={ROUTES.auth.login}
              className="text-accent-base hover:underline"
            >
              {actionsT("login")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPanel;
