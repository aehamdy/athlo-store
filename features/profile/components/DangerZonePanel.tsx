import LogoutButton from "@/components/LogoutButton";
import Icon from "@/components/shared/Icon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getCurrentUserClaims from "@/lib/auth/getCurrentUserClaims";
import { useTranslations } from "next-intl";
import useDeleteUserAccount from "../hooks/useDeleteUserAccount";

function DangerZonePanel() {
  const t = useTranslations("profilePage.dangerZone");
  const tLabels = useTranslations("labels");

  const { mutate, isPending } = useDeleteUserAccount();

  const claims = getCurrentUserClaims();
  const userId = claims?.id ?? 0;

  const handleDeleteAccount = () => {
    mutate(userId);
  };

  return (
    <section className="flex flex-col gap-lg">
      <Card className="gap-xs">
        <CardHeader>
          <CardTitle className="font-semibold text-lg">
            {tLabels("signOut")}
          </CardTitle>

          <CardDescription>{t("signOutDescription")}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col px-lg">
          <div className="ms-auto w-40">
            <LogoutButton variant="outline" />
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

        <CardContent className="flex flex-col gap-xl px-lg">
          <div className="ms-auto w-40">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="plain"
                  className="flex items-center gap-xl w-full p-3 text-primary-light bg-red-500 hover:bg-red-400"
                >
                  <Icon name="Trash2" className="text-current" />

                  {tLabels("deleteAccount")}
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent size="sm" className="">
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex flex-col items-center gap-sm">
                    <span className="p-sm bg-accent-light rounded-full">
                      <Icon name="Trash2" size={26} className="" />
                    </span>

                    <span className="text-foreground">
                      {t("deleteAccount")}
                    </span>
                  </AlertDialogTitle>

                  <AlertDialogDescription>
                    {t("deleteAccountMessage")}
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel className="text-foreground">
                    {tLabels("cancel")}
                  </AlertDialogCancel>

                  <AlertDialogAction
                    className="text-primary-light bg-red-500 hover:bg-red-400"
                    disabled={isPending}
                    onClick={handleDeleteAccount}
                  >
                    {isPending ? tLabels("deleting") : tLabels("yes")}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default DangerZonePanel;
