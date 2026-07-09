import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

function DangerZonePanel() {
  const t = useTranslations("profilePage.dangerZone");
  const tLabels = useTranslations("labels");

  return (
    <section className="flex flex-col gap-lg">
      <Card className="gap-xs">
        <CardHeader>
          <CardTitle className="font-semibold text-lg">
            {tLabels("signOut")}
          </CardTitle>

          <CardDescription>{t("signOutDescription")}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col">
          <div className="ms-auto w-40">
            <Button
              variant="plain"
              className="flex items-center gap-xl w-full p-3 text-foreground bg-base hover:bg-subtle border border-subtle"
            >
              <Icon name="LogOut" className="text-current" />

              {tLabels("signOut")}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="gap-xs border-red-500/50">
        <CardHeader>
          <CardTitle className="font-semibold text-lg text-red-500">
            {tLabels("deleteAccount")}
          </CardTitle>

          <CardDescription>{t("deleteAccountDescription")}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-xl">
          <div className="ms-auto w-40">
            <Button
              variant="plain"
              className="flex items-center gap-xl w-full p-3 text-primary-light bg-red-500 hover:bg-red-400"
            >
              <Icon name="Trash2" className="text-current" />

              {tLabels("deleteAccount")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default DangerZonePanel;
