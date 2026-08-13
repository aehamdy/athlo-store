import Cookies from "js-cookie";

import { api } from "./api";
import { getAccessToken } from "./auth/auth";

let isSetup = false;

export function setupInterceptors() {
  if (isSetup) return;

  isSetup = true;

  api.interceptors.request.use((config) => {
    const token = getAccessToken();
    const locale = Cookies.get("NEXT_LOCALE") || "en";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Accept-Language"] = locale === "ar" ? "ar-EG" : "en-US";
    return config;
  });
}
