import CategoriesSectionTitle from "./CategoriesSectionTitle";
import CategoriesBentoGrid from "./CategoriesBentoGrid";

function CategoriesSection() {
  return (
    <section className="bg-surface py-4xl px-lg">
      <div className="flex flex-col gap-lg lg:grid lg:grid-cols-[340px_1fr] lg:gap-8">
        <CategoriesSectionTitle />

        <CategoriesBentoGrid />
      </div>
    </section>
  );
}

export default CategoriesSection;
