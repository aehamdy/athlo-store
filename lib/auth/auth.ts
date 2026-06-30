import Cookies from "js-cookie";
import { STORAGE_KEYS } from "@/config/constants";

export function getAccessToken() {
  return Cookies.get(STORAGE_KEYS.accessToken);
}

export function isAuthenticated() {
  return !!Cookies.get(STORAGE_KEYS.accessToken);
}

export function logout() {
  Cookies.remove(STORAGE_KEYS.accessToken);
  Cookies.remove(STORAGE_KEYS.refreshToken);
}
