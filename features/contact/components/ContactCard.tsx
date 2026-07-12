import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import { Info } from "@/features/contact/types";
import { useTranslations } from "next-intl";

interface ContactCardProps {
  info: Info;
}

function ContactCard({ info }: ContactCardProps) {
  const t = useTranslations("labels");
  const businessT = useTranslations("businessHours");

  return (
    <article className="p-xl bg-surface border border-subtle hover:border-accent-soft/70 rounded-xl transition-colors">
      <div className="flex items-center justify-center w-12 h-12 mb-md bg-accent-base/10 rounded-full">
        <Icon name={info.icon} className="w-5 h-5 text-accent-base" />
      </div>

      <Heading as="h3" className="mb-xs font-semibold text-foreground">
        {t(info.title)}
      </Heading>

      {info.details.map((detail, idx) => {
        const isBusiness = detail.startsWith("businessHours");

        return (
          <p key={idx} className="text-sm text-muted-foreground">
            {isBusiness
              ? businessT(detail.replace("businessHours.", ""))
              : detail}
          </p>
        );
      })}
    </article>
  );
}

export default ContactCard;
