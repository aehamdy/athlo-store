import { useTranslations } from "next-intl";
import Icon from "../../../components/shared/Icon";
import Heading from "@/components/shared/Heading";

function OurMission() {
  const t = useTranslations("aboutPage.mission");

  return (
    <section className="section-spacing bg-base">
      <div className="flex flex-col items-center gap-xl">
        <div className="flex flex-col items-center gap-sm">
          <Icon name="Target" size={24} className="text-accent-base" />

          <Heading as="h2" className="font-bold text-3xl text-foreground">
            {t("title")}
          </Heading>
        </div>

        <p className="w-full md:w-3/4 lg:w-1/2 px-sm lg:px-0 text-center font-normal text-md text-muted-foreground">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

export default OurMission;
