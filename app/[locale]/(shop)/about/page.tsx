import OurMission from "@/features/about/components/OurMission";
import OurValues from "@/features/about/components/OurValues";
import Stats from "@/features/about/components/Stats";
import PageHero from "@/components/layout/PageHero";
import { useTranslations } from "next-intl";
import OurStory from "@/features/about/components/OurStory";
import OurTeam from "@/features/about/components/OurTeam";

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
