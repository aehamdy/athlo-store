import fetchCategories from "../api/fetchCategories";
import { CategoryT } from "../types";
import CategoryCard from "./CategoryCard";

async function CategoriesGrid() {
  const { data } = await fetchCategories();

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-md px-lg">
      {data.map((category: CategoryT) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  );
}

export default CategoriesGrid;
