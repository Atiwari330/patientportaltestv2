import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { QueryProvider } from '@/lib/providers/query-provider'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Mental Health Patient Portal',
  description: 'AI-powered patient portal for mental health providers',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#4F46E5',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-blue-50 to-slate-50 min-h-screen">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}