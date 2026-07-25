"use client";

import UserCard from "./UserCard";
import useCurrentUser from "../hooks/useCurrentUser";
import TabsWrapper from "./TabsWrapper";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { Button } from "@/components/ui/button";
import ProfileSkeleton from "./ProfileSkeleton";

function ProfileWrapper() {
  const { data: user, isPending, isError } = useCurrentUser();

  if (isPending) return <ProfileSkeleton />;

  if (isError || !user) {
    return (
      <div className="flex flex-col items-center gap-lg py-6xl">
        <ErrorMessage message="Failed to load profile." />

        <div className="flex justify-center items-center">
          <Button variant="default">Return to home</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto space-y-xl px-sm py-5xl lg:w-[65%]">
      <UserCard user={user.data} />
      <TabsWrapper user={user.data} />
    </section>
  );
}

export default ProfileWrapper;
