import { api } from "@/lib/api";
import { RegisterRequest } from "../types/auth.types";
import { ENDPOINTS } from "@/config/endpoints";

function register(payload: RegisterRequest) {
  return api.post(ENDPOINTS.user.register, payload);
}

export default register;
