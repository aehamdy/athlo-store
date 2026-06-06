import Heading from "@/components/shared/Heading";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ROUTES from "@/lib/routes";

export default function NotFound() {
  const t = useTranslations("notFound");
  const actionsT = useTranslations("actions");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <Heading as="h1" className="text-6xl font-bold mb-4">
        404
      </Heading>

      <p className="text-xl mb-6">{t("message")}</p>

      <Link
        href={ROUTES.public.home}
        className="px-6 py-3 bg-[#88db1b] text-white rounded-lg hover:brightness-90"
      >
        {actionsT("goHome")}
      </Link>
    </main>
  );
}
