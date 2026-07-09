import { ENDPOINTS } from "@/config/endpoints";
import { api } from "../api";
import getCurrentUserClaims from "./getCurrentUserClaims";

async function getCurrentUserData() {
  const userClaims = getCurrentUserClaims();

  if (!userClaims) return null;

  const response = await api.get(
    ENDPOINTS.user.profile(userClaims.id.toString()),
  );
  const data = {
    ...response.data,
    data: { id: userClaims.id, ...response.data.data },
  };

  return data;
}

export default getCurrentUserData;
