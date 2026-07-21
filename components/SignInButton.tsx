import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";

function SignInButton() {
  const t = useTranslations("actions");

  return (
    <Link
      href={ROUTES.auth.login}
      className="py-1 px-2 bg-accent-soft hover:scale-105 active:scale-95 rounded-lg duration-fast"
    >
      {t("login")}
    </Link>
  );
}

export default SignInButton;
