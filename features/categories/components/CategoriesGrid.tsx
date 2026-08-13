import { getLocale } from "next-intl/server";
import fetchCategories from "../api/fetchCategories";
import { CategoryT } from "../types";
import CategoryCard from "./CategoryCard";
import getApiLocale from "@/i18n/locale";

async function CategoriesGrid() {
  const locale = await getLocale();
  const apiLocale = getApiLocale(locale);
  const { data } = await fetchCategories(apiLocale);

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-md px-lg">
      {data.map((category: CategoryT) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  );
}

export default CategoriesGrid;
