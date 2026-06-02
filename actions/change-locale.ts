"use server";

import { cookies } from "next/headers";
import { Locale } from "next-intl";

export async function changeLocale(locale: Locale) {
  const cookieStore = await cookies();

  cookieStore.set("locale", locale);
}
