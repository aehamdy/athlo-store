import PageHero from "@/components/layout/PageHero";
import appConfig from "@/config/appConfig";
import ProfileWrapper from "@/features/profile/components/ProfileWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "My Profile",
  description: `Manage your ${appConfig.name} account, personal information, addresses, and preferences.`,
  robots: {
    index: false,
    follow: false,
  },
};

function ProfilePage() {
  const t = useTranslations("profilePage");

  return (
    <main className="bg-base">
      <PageHero title={t("title")} description={t("description")} />

      <ProfileWrapper />
    </main>
  );
}

export default ProfilePage;
