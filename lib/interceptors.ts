import { api } from "./api";
import { getAccessToken } from "./auth/auth";

let isSetup = false;

export function setupInterceptors() {
  if (isSetup) return;

  isSetup = true;

  api.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
