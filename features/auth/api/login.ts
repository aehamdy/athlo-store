import { LoginFormValues } from "../schemas/login.schema";
import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";

async function login(data: LoginFormValues) {
  const response = await api.post(ENDPOINTS.auth.login, data);

  return response.data;
}

export default login;
