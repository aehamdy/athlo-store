"use client";

import { useLocale } from "next-intl";

type CurrencyProps = {
  price: number;
};

function Currency({ price }: CurrencyProps) {
  const locale = useLocale();
  const fraction = price < 1000 ? 2 : 0;

  return new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-EG", {
    style: "currency",
    currency: "EGP",
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction,
  }).format(price);
}

export default Currency;
