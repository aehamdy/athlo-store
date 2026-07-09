"use client";

import UserCard from "./UserCard";
import useCurrentUser from "../hooks/useCurrentUser";
import TabsWrapper from "./TabsWrapper";

function ProfileWrapper() {
  const { data: user, isPending, isError } = useCurrentUser();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !user) {
    return <div>Failed to load profile.</div>;
  }

  return (
    <section className="mx-auto space-y-xl px-sm py-5xl lg:w-[65%]">
      <UserCard user={user.data} />
      <TabsWrapper user={user.data} />
    </section>
  );
}

export default ProfileWrapper;
