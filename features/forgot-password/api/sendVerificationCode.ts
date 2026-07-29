import { api } from "@/lib/api";
import { SendVerificationCodePayload } from "../types";
import { ENDPOINTS } from "@/config/endpoints";

async function sendVerificationCode({ email }: SendVerificationCodePayload) {
  const { data } = await api.post(ENDPOINTS.auth.sendVerificationCode, null, {
    params: {
      Email: email,
    },
  });

  return data;
}

export default sendVerificationCode;
