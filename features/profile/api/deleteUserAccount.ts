import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

function deleteUserAccount(userId: number) {
  return api.delete(ENDPOINTS.user.delete(userId.toString()));
}

export default deleteUserAccount;
