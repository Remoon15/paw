import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoziStore. -WebTopupTerpercaya',
  description: 'Versi Beta 0.10.1',
  name: 'google-site-verification',
  content : 'X0udyrnZV8QGYUrrJzz55Ow5OZI9KTUPRU_Hvss_8J8'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="X0udyrnZV8QGYUrrJzz55Ow5OZI9KTUPRU_Hvss_8J8" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
