import fetchProducts from "@/features/products/api/fetchProducts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const pageNumber = Number(searchParams.get("pageNumber") ?? 1);
  const pageSize = Number(searchParams.get("pageSize") ?? 20);
  const search = searchParams.get("search") ?? undefined;
  const ordering = searchParams.get("ordering")
    ? Number(searchParams.get("ordering"))
    : undefined;

  try {
    const data = await fetchProducts({
      pageNumber,
      pageSize,
      search,
      ordering,
    });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
