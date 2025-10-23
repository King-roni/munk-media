'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import CreatorNetwork from '@/components/CreatorNetwork'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useDataMotion } from '@/hooks/useDataMotion'

export default function Home() {
  // Enable all data-driven motion effects
  useDataMotion()

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <CreatorNetwork />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
