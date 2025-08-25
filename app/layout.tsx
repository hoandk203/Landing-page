import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: 'Quantumine - Hệ Sinh Thái Trading Định Lượng Tiên Tiến',
  description: 'Từ backtesting đến live trading với AI-powered insights và cộng đồng trader chuyên nghiệp. Tham gia hành trình đầu tư thông minh cùng 15,000+ traders.',
  keywords: 'quant trading, algorithmic trading, Vietnam, AI trading, backtesting, quantumine, định lượng',
  authors: [{ name: 'Quantumine Team' }],
  creator: 'Quantumine',
  publisher: 'Quantumine',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quantumine.com.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Quantumine - Hệ Sinh Thái Trading Định Lượng Tiên Tiến',
    description: 'Từ backtesting đến live trading với AI-powered insights và cộng đồng trader chuyên nghiệp.',
    url: 'https://quantumine.com.vn',
    siteName: 'Quantumine',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quantumine - Advanced Quantitative Trading Ecosystem',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantumine - Hệ Sinh Thái Trading Định Lượng',
    description: 'Từ backtesting đến live trading với AI-powered insights',
    images: ['/twitter-image.jpg'],
    creator: '@quantumine',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>
        <div className="relative min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}