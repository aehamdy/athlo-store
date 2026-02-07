import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "all", name: "All", nameAr: "الكل" },
  { id: "men", name: "Men", nameAr: "رجال" },
  { id: "women", name: "Women", nameAr: "نساء" },
  { id: "shoes", name: "Shoes", nameAr: "أحذية" },
  { id: "accessories", name: "Accessories", nameAr: "إكسسوارات" },
];

const categoryImages: Record<string, string> = {
  men: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
  women: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
  shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  accessories:
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
};

function CategoryGrid() {
  //   const { language, isRTL } = useLanguage();
  const displayCategories = categories.filter((c) => c.id !== "all");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {/* {isRTL ? "تسوق حسب الفئة" : "Shop by Category"} */}
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href=""
              //   href={`/products?category=${category.id}`}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={categoryImages[category.id]}
                // alt={language === "ar" ? category.nameAr : category.name}
                alt={category.name}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {/* {language === "ar" ? category.nameAr : category.name} */}
                  {category.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;
