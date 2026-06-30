import { jwtDecode } from "jwt-decode";

import { getAccessToken } from "./auth";

type DecodedToken = {
  Id: string;
  PhoneNumber: string;

  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
};

export type CurrentUser = {
  id: number;
  userName: string;
  email: string;
  phoneNumber: string;
  role: string;
};

export function getCurrentUser(): CurrentUser | null {
  const token = getAccessToken();

  if (!token) return null;

  try {
    const decoded = jwtDecode<DecodedToken>(token);

    return {
      id: Number(decoded.Id),
      userName:
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      email:
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ],
      phoneNumber: decoded.PhoneNumber,
      role: decoded[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ],
    };
  } catch {
    return null;
  }
}
