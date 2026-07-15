// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "en",
//   localePrefix: "always",
// });

// export const config = {
//   matcher: ["/((?!_next|api|.*\\..*|favicon.ico).*)"],
// };

import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import routeAccess from "@/config/route-access";
import { STORAGE_KEYS } from "@/config/constants";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
});

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Detect locale
  const locale = pathname.match(/^\/(en|ar)(?=\/|$)/)?.[1] ?? "en";

  // Remove locale prefix
  const pathnameWithoutLocale =
    pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";

  const isAuthenticated = !!request.cookies.get(STORAGE_KEYS.accessToken)
    ?.value;

  const isProtectedRoute = routeAccess.protected.some((route) =>
    pathnameWithoutLocale.startsWith(route),
  );

  const isGuestRoute = routeAccess.guest.some((route) =>
    pathnameWithoutLocale.startsWith(route),
  );

  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  if (isAuthenticated && isGuestRoute) {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*|favicon.ico).*)"],
};
