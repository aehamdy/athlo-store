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

function PasswordPanel() {
  const t = useTranslations("profilePage.password");
  const tLabels = useTranslations("labels");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormType>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: PasswordFormType) {
    console.log(values);
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
              disabled={isSubmitting}
              className="flex items-center gap-sm text-black"
            >
              <Icon name="Lock" className="text-current" />
              {tLabels("updatePassword")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default PasswordPanel;
