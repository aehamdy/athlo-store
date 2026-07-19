"use client";

import UserCard from "./UserCard";
import useCurrentUser from "../hooks/useCurrentUser";
import TabsWrapper from "./TabsWrapper";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { Button } from "@/components/ui/button";

function ProfileWrapper() {
  const { data: user, isPending, isError } = useCurrentUser();

  if (isPending) {
    return <LoadingIndicator size="lg" />;
  }

  if (isError || !user) {
    return (
      <div className="flex flex-col gap-lg">
        <ErrorMessage message="Failed to load profile." />

        <Button variant="default">Return to home</Button>
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
