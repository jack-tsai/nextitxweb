import type { Metadata } from 'next'
import { Inter, Noto_Sans_TC } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const notoSansTC = Noto_Sans_TC({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-tc'
})

export const metadata: Metadata = {
  title: 'NextITX - AI 時代的企業資源整合專家 | 屏東軟體開發公司',
  description: '專業軟體開發公司，20年經驗專精 AI 智能整合、IT 維運管理、企業資源整合，協助企業實現下一世代資訊服務升級轉型。提供智能ERP、AI數據分析平台、自動化維運解決方案。',
  keywords: '軟體開發,AI智能整合,IT維運管理,企業資源整合,數據分析,下一世代轉型,人工智能,屏東軟體公司,ERP系統,智能化轉型,機器學習,自動化,雲端服務',
  authors: [{ name: 'NextITX Team' }],
  creator: 'NextITX',
  publisher: 'NextITX',
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
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://nextitx.pages.dev',
    siteName: 'NextITX',
    title: 'NextITX - AI 時代的企業資源整合專家',
    description: '專業軟體開發公司，20年經驗專精 AI 智能整合、IT 維運管理、企業資源整合，協助企業實現下一世代資訊服務升級轉型。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NextITX - AI 時代的企業資源整合專家',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NextITX',
    title: 'NextITX - AI 時代的企業資源整合專家',
    description: '專業軟體開發公司，專精 AI 智能整合、IT 維運管理、企業資源整合，協助企業實現下一世代資訊服務升級轉型。',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-verification-code',
  },
  alternates: {
    canonical: 'https://nextitx.pages.dev',
  },
  category: 'Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.variable} ${notoSansTC.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}