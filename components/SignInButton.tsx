import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";

function SignInButton() {
  const t = useTranslations("actions");

  return (
    <Link
      href={ROUTES.auth.login}
      className="py-1 px-2 hover:bg-accent-base border rounded-lg duration-normal"
    >
      {t("login")}
    </Link>
  );
}

export default SignInButton;
