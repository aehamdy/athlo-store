import { ENDPOINTS } from "@/config/endpoints";
import ProductDetailsLayout from "@/features/products/components/ProductDetailsLayout";
import { ProductDetailsApiResponse } from "@/features/products/types";
import { api } from "@/lib/api";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const productId = Number(id);

  if (Number.isNaN(productId)) notFound();

  const response = await api.get<ProductDetailsApiResponse>(
    ENDPOINTS.product.productDetails(productId.toString()),
  );

  const product = response.data.data;

  if (!product) notFound();

  return (
    <main className="pt-20 lg:pt-30 pb-4xl section-spacing-x bg-surface">
      <ProductDetailsLayout product={product} />
    </main>
  );
}
