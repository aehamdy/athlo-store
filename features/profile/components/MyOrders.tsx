import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import MyOrderCard from "./MyOrderCard";
import useFetchMyOrders from "../hooks/useFetchMyOrders";

function MyOrders() {
  const t = useTranslations("profilePage.my-orders");

  const { data: orders } = useFetchMyOrders();

  if (!orders) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-lg">{t("title")}</CardTitle>

        <CardDescription className="text-muted-foreground">
          {t("description")}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-md text-sm text-muted-foreground">
        <ul className="max-h-85 p-tiny space-y-md rounded-md overflow-y-auto">
          {orders?.data.map((order, idx) => (
            <li key={order.id} className="">
              <MyOrderCard order={order} orderIndex={idx} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default MyOrders;
