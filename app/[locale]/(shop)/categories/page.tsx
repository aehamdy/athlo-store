import Heading from "@/components/shared/Heading";
import CategoriesGrid from "@/features/categories/components/CategoriesGrid";
import { useTranslations } from "next-intl";

function CategoriesPage() {
  const t = useTranslations("categoriesPage");

  return (
    <main className="main-page">
      <div className="flex flex-col justify-between gap-md mb-3xl">
        <Heading as="h1" className="font-bold text-3xl text-foreground">
          {t("title")}
        </Heading>

        <CategoriesGrid />
      </div>
    </main>
  );
}

export default CategoriesPage;
