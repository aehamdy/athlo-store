import Cookies from "js-cookie";
import { STORAGE_KEYS } from "@/config/constants";

export function isAuthenticated() {
  return !!Cookies.get(STORAGE_KEYS.accessToken);
}
