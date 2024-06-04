import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["th", "en"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Define the list of pages
  const pages = ["HomePage"];

  const messages = {};

  for (const page of pages) {
    const pageMessages = (await import(`../messages/${page}/${locale}.json`))
      .default;
    Object.assign(messages, pageMessages);
  }

  return { messages, timeZone: "Asia/Bangkok" };
});
