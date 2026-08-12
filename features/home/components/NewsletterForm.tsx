"use client";

import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type NewsletterFormProps = {
  variant?: string;
};

function NewsletterForm({ variant }: NewsletterFormProps) {
  const labelsT = useTranslations("labels");
  const tActions = useTranslations("actions");
  const tNewsletter = useTranslations("home.newsletter");

  return (
    <form
      action=""
      className={`flex ${variant === "footer" ? "flex-col justify-end w-full" : "flex-col md:flex-row w-full"} items-center gap-sm`}
    >
      <div
        className={`flex items-center gap-2 ${variant === "footer" ? "ms-auto w-full lg:w-3/4 bg-white" : "w-full bg-field"}  border border-subtler focus-within:border focus-within:border-accent-strong rounded-sm`}
      >
        <Input
          disabled
          type="email"
          name="email"
          id="email"
          placeholder={labelsT("enterEmail")}
          className={`${variant === "footer" ? "" : "form-input"}`}
        />
      </div>

      <Button
        type="button"
        onClick={() => {
          toast.warning(tNewsletter("newsletterWarning"));
        }}
        variant={`${variant === "footer" ? "outline" : "outline"}`}
        className={`disabled:bg-gray-400 disabled:text-black ${variant === "footer" ? "ms-auto w-full lg:w-3/4" : "main-button shrink-2"}`}
      >
        {tActions("subscribe")}
      </Button>
    </form>
  );
}

export default NewsletterForm;
