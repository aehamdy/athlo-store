import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import CopyLinkButton from "./CopyLinkButton";
import appConfig from "@/config/appConfig";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

type ShareProps = {
  productTitle: string;
};

function Share({ productTitle }: ShareProps) {
  const t = useTranslations("labels");

  const shareProduct = async () => {
    const shareData = {
      title: productTitle,
      text: `Check out ${productTitle} on ${appConfig.name}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") {
          toast.error(t("shareFailed"));
        }
      }
    } else {
      toast.info(t("sharingNotSupported"));
      return;
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="plain"
          aria-label={t("shareProduct")}
          className="py-3 px-4 text-foreground hover:text-primary-dark bg-surface hover:bg-accent-soft rounded-full shadow-md"
        >
          <Icon name="Share2" className="text-current" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-sm">
        <PopoverHeader>
          <PopoverTitle>{t("shareProduct")}</PopoverTitle>

          <PopoverDescription className="sr-only">
            {t("shareProductDescription")}
          </PopoverDescription>
        </PopoverHeader>

        <div className="flex items-center gap-sm">
          <Button variant="outline" onClick={shareProduct}>
            {t("share")}
          </Button>

          <CopyLinkButton />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Share;
