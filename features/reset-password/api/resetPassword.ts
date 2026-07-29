import { ENDPOINTS } from "@/config/endpoints";
import { api } from "@/lib/api";
import { ResetPasswordPayload } from "../types";

async function resetPassword(payload: ResetPasswordPayload) {
  const formData = new FormData();

  formData.append("Email", payload.Email);
  formData.append("Password", payload.Password);
  formData.append("ConfirmPassword", payload.ConfirmPassword);

  const { data } = await api.post(ENDPOINTS.auth.resetPassword, formData);

  return data;
}

export default resetPassword;
