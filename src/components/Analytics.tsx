'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Facebook Pixel */}
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
          fbq('init', 'XXXXXXXXXXXXXXXXX');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXXX&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
}