import { api } from "@/lib/api";
import { VerifyCodePayload } from "../types";
import { ENDPOINTS } from "@/config/endpoints";

async function verifyCode(payload: VerifyCodePayload) {
  const { data } = await api.get(ENDPOINTS.auth.verifyCode, {
    params: {
      Email: payload.email,
      Code: payload.code,
    },
  });

  return data;
}

export default verifyCode;
