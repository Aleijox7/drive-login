import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kodi Oauth",
  description: "Kodi Oauth",
};

export default function RootLayout({
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
    params: { locale: string };
}>) {
  const detectedLocale = locale || 'en';
  let messages;
  try {
    messages = require(`@/messages/${detectedLocale}.json`);
  } catch (error) {
    messages = require(`@/messages/en.json`);
  }

  return (
    <html lang={detectedLocale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={detectedLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
