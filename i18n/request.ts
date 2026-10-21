import { getRequestConfig } from "next-intl/server";
import * as rootParams from "next/root-params";
import { resolveLocale } from "./locale";

export default getRequestConfig(async ({ locale }) => {
  const requestedLocale = locale
    ? resolveLocale([locale])
    : resolveLocale(await rootParams.locale());

  return {
    locale: requestedLocale,
    messages: (await import(`../messages/${requestedLocale}.json`)).default
  };
});
