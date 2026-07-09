import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordFormType, passwordSchema } from "../schema/password.schema";
import { Button } from "@/components/ui/button";
import Icon from "@/components/shared/Icon";
import { useTranslations } from "next-intl";
import getCurrentUserClaims from "@/lib/auth/getCurrentUserClaims";
import useUpdatePassword from "../hooks/useUpdatePassword";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import { toast } from "sonner";

function PasswordPanel() {
  const t = useTranslations("profilePage.password");
  const tLabels = useTranslations("labels");
  const claims = getCurrentUserClaims();

  const userId = claims?.id ?? 0;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<PasswordFormType>({
    resolver: zodResolver(passwordSchema),
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useUpdatePassword();

  function onSubmit(values: PasswordFormType) {
    mutate(
      { id: userId, ...values },
      {
        onSuccess: () => {
          toast.success(tLabels("passwordUpdated"));
          reset();
        },

        onError: (err) => {
          toast.error(err.message);
        },
      },
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-lg">{t("title")}</CardTitle>

        <CardDescription className="text-muted-foreground">
          {t("description")}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            <FormInput
              id="currentPassword"
              name="currentPassword"
              label={tLabels("currentPassword")}
              type="password"
              register={register}
              error={errors.currentPassword}
            />

            <FormInput
              id="newPassword"
              name="newPassword"
              label={tLabels("newPassword")}
              type="password"
              register={register}
              error={errors.newPassword}
            />

            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              label={tLabels("confirmPassword")}
              type="password"
              register={register}
              error={errors.confirmPassword}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!isDirty || !isValid || isPending || isSubmitting}
              className="text-black"
            >
              {isPending ? (
                <div className="flex items-center gap-sm">
                  <LoadingIndicator size="sm" />
                  {tLabels("updating")}
                </div>
              ) : (
                <div className="flex items-center gap-sm">
                  <Icon name="Lock" className="text-current" />
                  {tLabels("updatePassword")}
                </div>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default PasswordPanel;
