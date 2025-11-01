'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import CreatorNetwork from '@/components/CreatorNetwork'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useDataMotion } from '@/hooks/useDataMotion'

console.log('[BOOT] page loading')

export default function Home() {
  console.log('[BOOT] page ready')
  // Enable all data-driven motion effects
  useDataMotion()

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CreatorNetwork />
      <Contact />
      <Footer />
    </main>
  )
}
