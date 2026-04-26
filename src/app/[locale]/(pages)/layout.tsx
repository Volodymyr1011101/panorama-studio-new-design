import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header";
import ScrollToTop from "@/app/components/ui/scrollToTop/ScrollToTop";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Укажи нужные веса
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "en" | "ua" };
}) {
  // @ts-ignore
  const { locale }: "en" | "ua" = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* noscript вставляємо в head через dangerouslySetInnerHTML */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2033375377556953&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={` ${ebGaramond.className}`}>
        <div
          className={`hidden body-bg bg-[#000000c2] fixed left-0 right-0 top-0 bottom-0 z-[8000]`}
        ></div>
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-[980px] m-auto overflow-hidden relative">
            <Header />
            {children}
            <SpeedInsights />
          </div>
          <Footer />
        </NextIntlClientProvider>
        <ScrollToTop />
        {/* Основний скрипт Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2033375377556953');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
