import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

function CopyLinkButton() {
  const t = useTranslations("labels");

  const copyProductLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      toast.success(t("productLinkCopied"));
    } catch {
      toast.error(t("copyLinkFailed"));
    }
  };

  return (
    <Button
      variant="outline"
      aria-label={t("copyLink")}
      onClick={copyProductLink}
    >
      <Icon name="Copy" className="text-current" />
    </Button>
  );
}

export default CopyLinkButton;
