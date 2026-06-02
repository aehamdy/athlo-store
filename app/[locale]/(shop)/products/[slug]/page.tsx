import ProductActions from "@/components/product/ProductActions";
import ProductBreadcrumbs from "@/components/product/ProductBreadcrumbs";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductQuantity from "@/components/product/ProductQuantity";
import ProductSizeSelection from "@/components/product/ProductSizeSelection";
import ProductTitleAndPrice from "@/components/product/ProductTitleAndPrice";
import { products } from "@/components/products/ProductsGrid";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  // const name = language === "ar" ? product.nameAr : product.name;
  // const description =
  //   language === "ar" ? product.descriptionAr : product.description;

  //     const relatedProducts = products
  //   .filter((p) => p.category === product.category && p.id !== product.id)
  //   .slice(0, 4);

  // const handleAddToCart = () => {
  //   addToCart(product, selectedSize, selectedColor, quantity);
  // };

  return (
    <main className="pb-lg section-spacing-x">
      {/* Breadcrumbs */}

      <div className="">
        <div className="py-xl">
          <ProductBreadcrumbs productId={slug} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5xl">
          {/* Image Gallery */}
          <div className="">
            <ProductImageGallery product={product} />
          </div>
          <div className="space-y-sm">
            <ProductInfo product={product} />

            <ProductTitleAndPrice product={product} />

            <ProductSizeSelection product={product} />

            <ProductQuantity />

            <ProductActions />
          </div>
        </div>
      </div>
    </main>
  );
}
