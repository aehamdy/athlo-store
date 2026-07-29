import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";

function NewsletterForm() {
  const labelsT = useTranslations("labels");
  const actionsT = useTranslations("actions");

  return (
    <form
      action=""
      className="flex flex-col md:flex-row items-center gap-sm w-full"
    >
      <div className="flex items-center gap-2 w-full bg-field border border-subtler focus-within:border focus-within:border-accent-strong rounded-sm">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder={labelsT("enterEmail")}
          className="form-input"
        />
      </div>

      <input
        type="submit"
        value={actionsT("subscribe")}
        className="main-button shrink-2"
      />
    </form>
  );
}

export default NewsletterForm;
