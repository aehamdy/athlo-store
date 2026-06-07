import Link from "next/link";
import { useLocale } from "next-intl";
import { HeadingLevel } from "./types";
import Heading from "./Heading";
import Icon from "./Icon";

type SectionHeaderProps = {
  headingLevel?: HeadingLevel;
  sectionTitle: string;
  linkText?: string;
  href?: string;
};

function SectionHeader({
  headingLevel = "h1",
  sectionTitle,
  linkText,
  href,
}: SectionHeaderProps) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={`flex  ${linkText ? "justify-between" : "flex-col justify-center"} items-center mb-8`}
    >
      <Heading
        as={headingLevel}
        className={`${headingLevel === "h1" ? "mb-xs text-4xl md:text-5xl" : "text-2xl md:text-3xl"} font-bold text-foreground`}
      >
        {sectionTitle}
      </Heading>

      {linkText && href && (
        <Link
          href={href}
          className="group flex items-center gap-sm py-tiny px-xs text-foreground hover:text-black hover:bg-accent-base rounded-md duration-normal"
        >
          {linkText}

          <Icon
            name={`${isRTL ? "ArrowLeft" : "ArrowRight"}`}
            className={`w-4 h-4 me-2 ${isRTL ? "group-hover:-translate-x-xs" : "group-hover:translate-x-xs"} text-current duration-normal`}
          />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
