import type { Metadata } from 'next'
import { Archivo, DM_Sans } from 'next/font/google'
import './globals.css'
import MotionProvider from '@/components/MotionProvider'
import ScrollProgress from '@/components/ScrollProgress'

const archivo = Archivo({ 
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://munkmedia.vercel.app'),
  title: 'Munk Media - Scale with creators your customers already trust',
  description: 'Full-funnel influencer campaigns, UGC production, and creator management for high-growth brands.',
  keywords: 'influencer marketing, UGC production, creator management, paid social amplification, brand partnerships',
  authors: [{ name: 'Munk Media' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Munk Media - Scale with creators your customers already trust',
    description: 'Full-funnel influencer campaigns, UGC production, and creator management for high-growth brands.',
    type: 'website',
    locale: 'en_US',
    images: ['/icon.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Munk Media - Scale with creators your customers already trust',
    description: 'Full-funnel influencer campaigns, UGC production, and creator management for high-growth brands.',
    images: ['/icon.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${dmSans.variable} bg-mm-ivory text-mm-ink font-body antialiased`}>
        <ScrollProgress />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}
