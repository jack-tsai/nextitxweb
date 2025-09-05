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
  title: 'NextITX - AI 時代的企業資源整合專家',
  description: '專業軟體開發公司，專精 AI 智能整合、IT 維運管理、企業資源整合，協助企業實現下一世代資訊服務升級轉型',
  keywords: '軟體開發,AI智能整合,IT維運管理,企業資源整合,數據分析,下一世代轉型,人工智能',
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