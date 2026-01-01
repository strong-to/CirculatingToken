import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalModalProvider } from '@/components/GlobalModal/GlobalModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Circulating Token',
  description: 'Circulating Token Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const htmlClassName = ['scroll-smooth', 'tongyi-design-pc'].join(' ').trim()
  return (
    <html lang="zh-CN" className={htmlClassName} suppressHydrationWarning>
      <body className={inter.className}>
        <GlobalModalProvider>
          {children}
        </GlobalModalProvider>
      </body>
    </html>
  )
}
