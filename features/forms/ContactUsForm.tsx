import { useTranslations } from "next-intl";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

function ContactUsForm() {
  const t = useTranslations("labels");
  const actionsT = useTranslations("actions");

  return (
    <form action="" className="space-y-xl">
      <div className="space-y-sm">
        <Label htmlFor="name">{t("yourName")}</Label>
        <Input
          id="name"
          required
          placeholder={t("enterYourName")}
          className=""
        />
      </div>

      <div className="space-y-sm">
        <Label htmlFor="email">{t("yourEmail")}</Label>
        <Input id="email" required placeholder={t("enterEmail")} className="" />
      </div>

      <div className="space-y-sm">
        <Label htmlFor="message">{t("yourMessage")}</Label>
        <Textarea
          required
          placeholder={t("enterYourMessage")}
          className="bg-field"
        />
      </div>

      <Button className="main-button">{actionsT("sendMessage")}</Button>
    </form>
  );
}

export default ContactUsForm;
