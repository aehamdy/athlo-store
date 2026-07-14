import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfilePanel from "./ProfilePanel";
import PasswordPanel from "./PasswordPanel";
import DangerZonePanel from "./DangerZonePanel";
import { User } from "@/features/auth/types/auth.types";
import { useLocale, useTranslations } from "next-intl";
import MyOrders from "./MyOrders";

const tabsList = [
  { id: 1, value: "profile", label: "profile" },
  { id: 2, value: "my-orders", label: "my-orders" },
  { id: 3, value: "password", label: "password" },
  { id: 4, value: "danger-zone", label: "dangerZone" },
];

type TabWrapperProps = {
  user: User;
};

function TabsWrapper({ user }: TabWrapperProps) {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const t = useTranslations("profilePage.tabs");

  return (
    <Tabs dir={dir} defaultValue="profile" className="w-full space-y-lg">
      <TabsList className="w-full space-x-sm bg-surface">
        {tabsList.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className="data-[state=active]:text-red-500 data-[state=active]:bg-red-500 cursor-pointer"
          >
            {t(tab.label)}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="profile">
        <ProfilePanel user={user} />
      </TabsContent>

      <TabsContent value="my-orders">
        <MyOrders />
      </TabsContent>

      <TabsContent value="password">
        <PasswordPanel />
      </TabsContent>

      <TabsContent value="danger-zone">
        <DangerZonePanel />
      </TabsContent>
    </Tabs>
  );
}

export default TabsWrapper;
