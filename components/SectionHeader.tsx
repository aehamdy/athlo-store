import Link from "next/link";
import Icon from "./shared/Icon";
import { useLocale } from "next-intl";
import Heading from "./shared/Heading";

type SectionHeaderProps = {
  sectionTitle: string;
  linkText?: string;
  href?: string;
};

function SectionHeader({ sectionTitle, linkText, href }: SectionHeaderProps) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={`flex items-center ${linkText ? "justify-between" : "justify-center"} mb-8`}
    >
      <Heading as="h2" className="text-2xl md:text-3xl font-bold">
        {sectionTitle}
      </Heading>

      {linkText && href && (
        <Link
          href={href || "#"}
          className="flex items-center gap-2 p-1 px-2 hover:text-black hover:bg-accent-base rounded-md duration-normal"
        >
          {linkText}

          {isRTL ? (
            <Icon name="ArrowLeft" className="h-4 w-4 text-current" />
          ) : (
            <Icon name="ArrowRight" className="h-4 w-4 text-current" />
          )}
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
