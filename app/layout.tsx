import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VercelAnalytics } from '@/components/VercelAnalytics';

export const metadata: Metadata = {
  title: 'Инвалидные коляски для собак — Производство',
  description: 'Индивидуальные и серийные инвалидные коляски для собак. Подбор размера, консультации, доставка.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="fa69aa6957782e2c" />
        <meta name="yandex-verification" content="793414969bb2bc39" />
        <meta name="yandex-verification" content="9f47667387e00b0d" />
        <meta name="yandex-verification" content="91d0c0dde46a84ab" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
