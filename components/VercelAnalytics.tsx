'use client';

import Script from 'next/script';

const devSrc = 'https://va.vercel-scripts.com/v1/script.debug.js';
const prodSrc = 'https://va.vercel-scripts.com/v1/script.js';

export function VercelAnalytics() {
  const token = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID;
  if (!token) {
    return null;
  }

  const scriptSrc = process.env.NODE_ENV === 'development' ? devSrc : prodSrc;

  return (
    <>
      <Script id="vercel-analytics-init" strategy="afterInteractive">
        {`window.va=window.va||function(){(window.va.q=window.va.q||[]).push(arguments);}`}
      </Script>
      <Script src={scriptSrc} strategy="afterInteractive" data-token={token} />
    </>
  );
}
