import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header';
import ScrollToTop from '@/app/components/ui/scrollToTop/ScrollToTop';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.scss';
const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'ua'; };
}) {
  // @ts-ignore
  const { locale }: 'en' | 'ua' = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={` ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <div className='max-w-[980px] m-auto overflow-hidden relative'>
              <Header />
              {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
