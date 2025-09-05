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
  title: 'NextIT - 軟體開發與數據分析專家',
  description: '專業的軟體開發、數據分析及IT資訊整合服務，提供創新的技術解決方案',
  keywords: '軟體開發,數據分析,IT整合,企業解決方案,雲端服務',
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