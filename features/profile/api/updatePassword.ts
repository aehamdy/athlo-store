import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { UpdatePasswordRequest } from "../types";

function updatePassword(payload: UpdatePasswordRequest) {
  return api.put(ENDPOINTS.user.updatePassword, payload);
}

export default updatePassword;
