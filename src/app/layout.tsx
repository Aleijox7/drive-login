import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import {siteConfig} from "@/config/siteConfig";

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
      <head>
        <title>{siteConfig.appName}</title>
        <meta name="description" content="Play your Google Drive media with the simplicity that Kodi offers"/>
        <meta property="og:url" content="https://kodi-drive.nejo.dev"/>
        <meta property="og:type" content="website"/>
        <meta property="og:type" content="KodiDrive"/>
        <meta property="og:description" content="Play your Google Drive media with the simplicity that Kodi offers"/>
        <meta property="og:image" content="https://kodi-drive.nejo.dev/open-graph-img.png"/>
        <meta property="twitter:card" content=""/>
        <meta property="twitter:title" content="KodiDrive"/>
        <meta property="twitter:description" content="Play your Google Drive media with the simplicity that Kodi offers"/>
        <meta property="twitter:image" content="https://kodi-drive.nejo.dev/open-graph-img.png"/>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={detectedLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
