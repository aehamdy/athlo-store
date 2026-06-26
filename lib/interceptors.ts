import { STORAGE_KEYS } from "@/config/constants";
import { api } from "./api";
import Cookies from "js-cookie";

let isSetup = false;

export function setupInterceptors() {
  if (isSetup) return;

  isSetup = true;

  api.interceptors.request.use((config) => {
    const token = Cookies.get(STORAGE_KEYS.accessToken);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
