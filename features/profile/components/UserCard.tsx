"use client";

import { User } from "@/features/auth/types/auth.types";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  const usernameInitials = [user.firstName?.[0], user.lastName?.[0]]
    .filter(Boolean)
    .join("")
    .toUpperCase();
  const username = [user.firstName, user.lastName].filter(Boolean).join(" ");
  const userEmail = user.email;

  return (
    <div className="p-xl bg-surface border border-subtle rounded-md">
      <div className="flex item-senter gap-sm">
        <div className="p-4.5 uppercase font-bold text-lg bg-accent-soft rounded-full">
          {usernameInitials ?? "!!"}
        </div>

        <div className="">
          <div className="font-bold text-xl text-foreground capitalize">
            {username}
          </div>
          <div className="text-muted-foreground">{userEmail}</div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
