import Heading from "@/components/shared/Heading";
import { useTranslations } from "next-intl";

function CategoriesSectionTitle() {
  const t = useTranslations("home.shopByCategory");

  return (
    <>
      <div className="hidden lg:flex h-full rounded-2xl bg-accent-base text-primary-dark p-10 justify-center items-center">
        <Heading
          as="h2"
          className=" whitespace-pre-line text-center flex flex-col items-center gap-4xl text-7xl font-black uppercase leading-[0.9] tracking-widest"
        >
          <span className="block">{t("separateTitle.shop")}</span>
          <span className="block">{t("separateTitle.by")}</span>
          <span className="block">{t("separateTitle.category")}</span>
        </Heading>
      </div>

      <div className="flex justify-center lg:hidden">
        <Heading as="h2" className="text-3xl font-black uppercase">
          {t("title")}
        </Heading>
      </div>
    </>
  );
}

export default CategoriesSectionTitle;
