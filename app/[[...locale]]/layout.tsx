import "../globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { resolveLocale } from "../../i18n/locale";
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale?: string[] }> }) {
  const locale = resolveLocale((await params).locale);
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <Script id="theme-init" src="/theme-init.js" strategy="afterInteractive" />
      </head>
      <body><NextIntlClientProvider>{children}</NextIntlClientProvider></body>
    </html>
  );
}
