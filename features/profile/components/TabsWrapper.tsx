import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfilePanel from "./ProfilePanel";
import PasswordPanel from "./PasswordPanel";
import DangerZonePanel from "./DangerZonePanel";
import { User } from "@/features/auth/types/auth.types";
import { useTranslations } from "next-intl";

const tabsList = [
  { id: 1, value: "profile", label: "profile" },
  { id: 2, value: "password", label: "password" },
  { id: 3, value: "danger-zone", label: "dangerZone" },
];

type TabWrapperProps = {
  user: User;
};

function TabsWrapper({ user }: TabWrapperProps) {
  const t = useTranslations("profilePage.tabs");

  return (
    <Tabs defaultValue="profile" className="w-full space-y-lg">
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
