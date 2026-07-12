import Image from "next/image";
import { TeamMember } from "../types";
import Heading from "@/components/shared/Heading";

type TeamMemberCardProps = {
  member: TeamMember;
};

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="group flex flex-col items-center gap-sm ">
      <div className="relative mb-md rounded-xl overflow-hidden ">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-tiny text-center">
        <Heading as="h3" className="font-semibold text-foreground">
          {member.name}
        </Heading>

        <p className="text-center text-sm text-muted-foreground">
          {member.role}
        </p>
      </div>
    </article>
  );
}

export default TeamMemberCard;
