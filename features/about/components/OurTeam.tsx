import Heading from "@/components/shared/Heading";
import Icon from "@/components/shared/Icon";
import TeamMemberCard from "@/features/about/components/TeamMemberCard";
import { useTranslations } from "next-intl";

const teamMembers = [
  {
    id: 1,
    name: "ahmedMohamed",
    role: "founderCeo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    id: 2,
    name: "sarahAhmed",
    role: "designDirector",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    id: 3,
    name: "mohamedAli",
    role: "headOfProduct",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
] as const;

function OurTeam() {
  const t = useTranslations("aboutPage.team");

  return (
    <section className="section-spacing bg-base">
      <div className="felx flex-col items-center px-md">
        <div className="flex flex-col items-center gap-tiny">
          <div className="flex flex-col items-center gap-sm">
            <Icon name="Users" className="text-accent-base" size={40} />

            <Heading
              as="h2"
              className="mb-xl font-bold text-3xl text-foreground"
            >
              {t("title")}
            </Heading>
          </div>

          <p className="w-full md:3/4 lg:w-1/2 mb-5xl text-center font-light text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3xl">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={{
                ...member,
                name: t(member.name),
                role: t(member.role),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
