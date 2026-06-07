import Heading from "../../components/shared/Heading";
import { useTranslations } from "next-intl";

function SuccessMessage() {
  const t = useTranslations("thankYouPage.successMessage");

  return (
    <div className="flex flex-col items-center gap-tiny">
      <Heading
        as="h1"
        className="mb-md font-bold text-3xl md:text-4xl animate-fade-in"
      >
        {t("title")}
      </Heading>

      <p className="mb-xs text-center text-xl text-muted-foreground animate-fade-in">
        {t("subtitle")}
      </p>

      <p className="mb-3xl text-center text-muted-foreground animate-fade-in">
        {t("description")}
      </p>
    </div>
  );
}

export default SuccessMessage;
