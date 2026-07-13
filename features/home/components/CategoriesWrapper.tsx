import fetchCategories from "../api/fetchCategories";
import CategoriesCarousel from "./CategoriesCarousel";

async function CategoriesWrapper() {
  const { data } = await fetchCategories();

  return <CategoriesCarousel categories={data} />;
}

export default CategoriesWrapper;
