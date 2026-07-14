import Icon from "@/components/shared/Icon";
import { MyOrderT } from "../types";
import formatDate from "@/lib/utils/formatDate";
import Currency from "@/features/products/components/Currency";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import OrderDetails from "./OrderDetails";
import { useTranslations } from "next-intl";

type MyOrderCardProps = {
  order: MyOrderT;
  orderIndex: number;
};

function MyOrderCard({ order, orderIndex }: MyOrderCardProps) {
  const t = useTranslations("profilePage.my-orders");

  const { date } = formatDate(order.createdAt);

  let orderStatusStyle = "";

  switch (order.status) {
    case "Pending":
      orderStatusStyle = "text-yellow-600 bg-yellow-200 border-yellow-500";
      break;
    case "Shipped":
      orderStatusStyle = "text-blue-600 bg-indigo-200 border-indigo-500";
      break;
    case "Paid":
      orderStatusStyle = "text-blue-600 bg-blue-200 border-blue-500";
    case "Completed":
    case "Delivered":
      orderStatusStyle = "text-green-600 bg-green-500 border-red-500";
      break;
    case "Cancelled":
      orderStatusStyle = "text-red-600 bg-red-200 border-red-500";
      break;
    default:
      orderStatusStyle = "text-primary-black bg-gray-200 border-gray-500";
  }

  return (
    <article className="p-xs md:p-md hover:bg-accent-light border border-subtle hover:border-accent-base rounded-md duration-fast">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-xs md:gap-0">
        <div className="flex items-start gap-sm">
          <div className="flex justify-center items-center w-11 h-11 p-xs bg-accent-light rounded-md">
            <Icon name="Package" className="w-6 h-6 text-accent-base" />
          </div>

          <div className="flex-1 space-y-tiny">
            <div className="flex-1 flex justify-between items-center gap-sm">
              <span className="font-semibold text-foreground">
                {t("order")} #{orderIndex + 1}
              </span>

              <div
                className={`text-sm py-0.5 px-xs ${orderStatusStyle} rounded-xl`}
              >
                {t(order.status)}
              </div>
            </div>

            <p className="">{date}</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-xl">
          <div className="flex md:flex-col items-center gap-sm md:gap-tiny">
            <div className="text-muted-foreground">{t("total")}</div>

            <div className="font-semibold text-sm text-foreground">
              <Currency price={order.totalAmount} />
            </div>
          </div>

          <div className="">
            <Dialog>
              <DialogTrigger className="p-xs text-sm hover:text-primary-dark hover:bg-accent-soft border rounded-md cursor-pointer">
                {t("viewDetails")}
              </DialogTrigger>

              <DialogContent className="sm:max-w-125">
                <DialogHeader>
                  <DialogTitle className="text-foreground">
                    {t("orderDetails")}
                  </DialogTitle>

                  <DialogDescription className="sr-only">
                    {t("viewOrderDetails")}
                  </DialogDescription>
                </DialogHeader>

                <OrderDetails
                  order={order}
                  date={date}
                  orderStatusStyle={orderStatusStyle}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MyOrderCard;
