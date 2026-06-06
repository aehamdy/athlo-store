import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import OurValues from "@/components/about/OurValues";
import Stats from "@/components/about/Stats";
import PageHero from "@/components/layout/PageHero";
import { useTranslations } from "next-intl";

function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <main>
      <PageHero
        title={t("title")}
        description={t("description")}
        image="url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920)"
      />

      <OurStory />

      <Stats />

      <OurMission />

      <OurValues />

      <OurTeam />
    </main>
  );
}

export default AboutPage;
