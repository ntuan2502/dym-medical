import NextIntlProvider from "./NextIntlClientProvider";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Providers } from "./providers";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./Navbar";
import Footer from "./components/Home/Footer";
import MetaTags from "./metaTags";
import React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <link rel="icon" href="/dym_icon.svg" sizes="any" />
      <MetaTags />

      <body>
        <NextIntlProvider
          locale={params.locale}
          messages={messages}
          timeZone="Asia/Ho_Chi_Minh"
          now={new Date()}
        >
          <Providers>
            <Navbar />
            <div className="max-w-screen-xl mx-auto">{children}</div>
            <Footer />
            <ToastContainer />
            <SpeedInsights />
            <Analytics />
          </Providers>
        </NextIntlProvider>
      </body>
    </html>
  );
}
