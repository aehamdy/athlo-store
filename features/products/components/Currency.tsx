import { useTranslations } from "next-intl";

type CurrencyProps = {
  price: number | string;
};

function Currency({ price }: CurrencyProps) {
  const t = useTranslations("productCard");

  return (
    <p className="font-medium text-lg text-primary-light">
      {t("currency")} {price}
    </p>
  );
}

export default Currency;
