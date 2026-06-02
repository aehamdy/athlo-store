import { ReactNode, use } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = use(params);

  const messages = use(getMessages());

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
