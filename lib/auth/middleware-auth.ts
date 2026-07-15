import { NextRequest } from "next/server";
import { STORAGE_KEYS } from "@/config/constants";

export function isAuthenticated(request: NextRequest) {
  return !!request.cookies.get(STORAGE_KEYS.accessToken)?.value;
}
