import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import '../styles/motion.css'
import MotionProvider from '@/components/MotionProvider'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'
import RouteTransition from '@/components/RouteTransition'

// Load Google Fonts (temporarily until brand fonts are added)
const archivo = Archivo({ 
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

// Placeholder for DM Sans (to be loaded from Google Fonts later)
const dmSans = localFont({
  src: [
    { path: '../public/fonts/dmsans-regular.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-dmsans',
  fallback: ['system-ui', 'sans-serif'],
})

// Placeholder for brand fonts (Horizon, Tan Mon Cheri)
const horizon = localFont({
  src: [{ path: '../public/fonts/horizon.otf', weight: '400' }],
  variable: '--font-horizon',
  fallback: ['Archivo Black', 'system-ui', 'sans-serif'],
})

const tanMonCheri = localFont({
  src: [{ path: '../public/fonts/tan-mon-cheri.otf', weight: '400' }],
  variable: '--font-accent',
  fallback: ['system-ui', 'serif'],
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
      <body className={`${archivo.variable} ${dmSans.variable} ${horizon.variable} ${tanMonCheri.variable} font-body`}>
        <ScrollProgress />
        <SmoothScroll>
          <MotionProvider>
            <RouteTransition>
              {children}
            </RouteTransition>
          </MotionProvider>
        </SmoothScroll>
      </body>
    </html>
  )
}
