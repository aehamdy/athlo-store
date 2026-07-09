import PageHero from "@/components/layout/PageHero";
import ProfileWrapper from "@/features/profile/components/ProfileWrapper";
import { useTranslations } from "next-intl";

function ProfilePage() {
  const t = useTranslations("profilePage");

  return (
    <main className="bg-base">
      <PageHero
        title={t("title")}
        description={t("description")}
        image="url(https://unsplash.com/photos/old-grunge-baseball-background-with-vintage-brown-texture-copy-space-for-sports-banner-jCVJpsg_OOE)"
      />

      <ProfileWrapper />
    </main>
  );
}

export default ProfilePage;
