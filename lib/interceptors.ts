import { api } from "./api";

let isSetup = false;

export function setupInterceptors() {
  if (isSetup) return;

  isSetup = true;

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
