import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";

function SignInButton() {
  const t = useTranslations("actions");

  return (
    <Link
      href={ROUTES.auth.login}
      className="py-1 px-2 text-primary-dark bg-accent-soft hover:shadow-md active:scale-95 rounded-lg duration-fast"
    >
      {t("login")}
    </Link>
  );
}

export default SignInButton;
