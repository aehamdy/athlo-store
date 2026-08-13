import { ENDPOINTS } from "@/config/endpoints";
import ProductDetailsLayout from "@/features/products/components/ProductDetailsLayout";
import { ProductDetailsApiResponse } from "@/features/products/types";
import getApiLocale from "@/i18n/locale";
import { api } from "@/lib/api";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const response = await api.get<ProductDetailsApiResponse>(
    ENDPOINTS.product.productDetails(id),
  );

  const product = response.data.data;

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description:
      product.description ||
      `Shop ${product.name} at Athlo with fast shipping and secure checkout.`,
  };
}

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const locale = await getLocale();
  const apiLocale = getApiLocale(locale);
  const { id } = await params;

  const productId = Number(id);

  if (Number.isNaN(productId)) notFound();

  const response = await api.get<ProductDetailsApiResponse>(
    ENDPOINTS.product.productDetails(productId.toString()),
    {
      headers: {
        "Accept-Language": apiLocale,
      },
    },
  );

  const product = response.data.data;

  if (!product) notFound();

  return (
    <main className="main-page">
      <ProductDetailsLayout product={product} locale={locale} />
    </main>
  );
}
