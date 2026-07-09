import { api } from "@/lib/api";
import { UpdateProfileRequest } from "../types";
import { ENDPOINTS } from "@/config/endpoints";

function updateProfile(payload: UpdateProfileRequest) {
  return api.put(ENDPOINTS.user.update, payload);
}

export default updateProfile;
