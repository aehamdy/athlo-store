import getCurrentUserData from "@/lib/auth/getCurrentUserData";
import { useQuery } from "@tanstack/react-query";

function useCurrentUser() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const currentUser = await getCurrentUserData();

      if (!currentUser) throw new Error("Not authenticated");

      return currentUser;
    },
  });
}

export default useCurrentUser;
