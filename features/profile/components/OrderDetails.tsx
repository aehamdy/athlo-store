import Icon from "@/components/shared/Icon";
import Currency from "@/features/products/components/Currency";
import { MyOrderT } from "../types";
import { useTranslations } from "next-intl";

type OrderDetailsProps = {
  order: MyOrderT;
  date: string;
  orderStatusStyle: string;
};

function OrderDetails({ order, date, orderStatusStyle }: OrderDetailsProps) {
  const t = useTranslations("profilePage.my-orders");

  return (
    <section className="space-y-lg">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex-1 flex flex-col items-start gap-0.5">
          <span className="">{t("orderDate")}</span>
          <span className="text-foreground">{date}</span>
        </div>

        <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
          <span className="">{t("status")}</span>
          <span
            className={`text-sm py-0.5 px-xs ${orderStatusStyle} rounded-xl`}
          >
            {t(order.status)}
          </span>
        </div>
      </div>

      <ul className="max-h-73.75 border border-subtle rounded-md overflow-y-auto">
        {order.items.map((product, idx: number) => (
          <li
            key={`${product.productName}-${idx}`}
            className="not-last:border-b"
          >
            <article className="p-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-sm">
                  <div className="flex justify-center items-center w-9 h-9 p-xs bg-accent-light rounded-md">
                    <Icon name="Package" className="w-4 h-4 text-accent-base" />
                  </div>

                  <div className="flex flex-col items-start text-sm text-muted-foreground">
                    <span className="text-foreground">
                      {product.productName}
                    </span>

                    <span className="flex items-center gap-xs">
                      <span className="">{product.quantity} x </span>
                      <Currency price={product.unitPrice} />
                    </span>
                  </div>
                </div>

                <div className="text-sm text-foreground">
                  <Currency price={product.totalPrice} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-sm font-semibold text-md text-foreground">
        <span>Total</span>

        <Currency price={order.totalAmount} />
      </div>
    </section>
  );
}

export default OrderDetails;
