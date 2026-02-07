import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/features/products/components/ProductCard";
import { products } from "./FeaturedProducts";

function NewArrivals() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">New Arrivals</h2>
          <Link href="/products">
            <Button variant="ghost" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
