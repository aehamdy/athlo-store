type CurrencyProps = {
  price: number;
};

function Currency({ price }: CurrencyProps) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default Currency;
