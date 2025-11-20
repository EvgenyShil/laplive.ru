import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VercelAnalytics } from '@/components/VercelAnalytics';

const title = 'DogWheel — поддержка движения для собак, кроликов и других животных';
const description =
  'Индивидуальные технологичные коляски для животных. Лёгкие, прочные и эстетичные конструкции, разработанные под вашего питомца.';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DogWheel',
  url: 'https://dogwheel.ru',
  logo: 'https://dogwheel.ru/favicon.svg',
  sameAs: ['https://t.me/your_dog_is_happy'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-903-220-35-02',
    contactType: 'customer service',
    availableLanguage: ['Russian']
  }
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://dogwheel.ru',
  name: 'DogWheel',
  potentialAction: {
    '@type': 'ContactAction',
    target: 'https://dogwheel.ru/contact',
    name: 'Связаться с командой DogWheel'
  }
};

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://dogwheel.ru'),
  keywords: [
    'DogWheel',
    'коляски для животных',
    'коляска для собаки',
    'коляска для кролика',
    'реабилитация питомцев'
  ],
  openGraph: {
    title,
    description,
    url: 'https://dogwheel.ru/',
    siteName: 'DogWheel',
    locale: 'ru_RU',
    type: 'website'
  },
  alternates: { canonical: '/' },
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
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify([organizationJsonLd, websiteJsonLd])}
        </Script>
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
