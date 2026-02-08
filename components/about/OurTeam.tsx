import Icon from "../shared/Icon";
import TeamMemberCard from "@/features/values/components/TeamMemberCard";

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    id: 3,
    name: "Mohamed Ali",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
];

function OurTeam() {
  return (
    <section className="section-spacing bg-base">
      <div className="felx flex-col items-center px-md">
        <div className="flex flex-col items-center gap-tiny">
          <div className="flex flex-col items-center gap-sm">
            <Icon name="Users" className="text-accent-base" size={40} />

            <h2 className="text-3xl font-bold mb-xl">Our Team</h2>
          </div>

          <p className="w-full md:3/4 lg:w-1/2 mb-5xl text-center font-light text-lg text-muted-foreground">
            Our team consists of passionate athletes, designers, and engineers
            working together to create the best sportswear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3xl">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
