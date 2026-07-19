import { api } from "@/lib/api";
import { RegisterRequest, RegisterResponse } from "../types/auth.types";
import { ENDPOINTS } from "@/config/endpoints";

async function register(payload: RegisterRequest) {
  const response = await api.post<RegisterResponse>(
    ENDPOINTS.user.register,
    payload,
  );

  return response.data;
}

export default register;
