import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VercelAnalytics } from '@/components/VercelAnalytics';

export const metadata: Metadata = {
  title: 'DogWheel — поддержка движения для собак, кроликов и других питомцев',
  description:
    'DogWheel проектирует и производит тёплые и технологичные решения поддержки для питомцев: подбор, кастомизация и сопровождение.',
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105391406', 'ym');

            ym(105391406, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/105391406"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
