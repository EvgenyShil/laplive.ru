import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VercelAnalytics } from '@/components/VercelAnalytics';

export const metadata: Metadata = {
  title: 'DogWheel — поддержка движения для собак, кроликов и других питомцев',
  description:
    'DogWheel проектирует и производит тёплые и технологичные решения поддержки для животных: подбор, кастомизация и сопровождение.',
  metadataBase: new URL('https://laplive.ru'),
  icons: {
    icon: '/favicon.svg'
  }
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
