import OfflineBanner from "@/components/shared/OfflineBanner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <OfflineBanner />
      {children}
    </NextIntlClientProvider>
  );
}
