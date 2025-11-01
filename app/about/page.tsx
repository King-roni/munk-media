'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'

export default function AboutPage() {
  const { safeMode } = useMotion()


  const founders = [
    {
      name: 'Pepijn van Erp',
      title: 'Co-Founder / Head of Marketing',
      bio: 'A marketing strategist known for his ability to merge data with creativity. Pepijn leads Munk Media\'s marketing vision, crafting bold campaigns that deliver both impact and elegance.',
      avatar: '/team/pepijn-van-erp.jpg'
    },
    {
      name: 'Matisse Unkel',
      title: 'Co-Founder / Creative Director',
      bio: 'Vision-driven creative with a passion for human storytelling. Matisse leads the creative direction of Munk Media, ensuring every campaign combines artistry, precision, and emotional depth.',
      avatar: '/team/matisse-unkel.jpg'
    }
  ]


  // Safe mode variants - no animations, immediate visibility
  const safeVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  }

  // Normal mode variants - with animations
  const normalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const variants = safeMode ? safeVariants : normalVariants
  const transition = safeMode ? { duration: 0 } : { duration: 0.8 }

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
              <Award className="w-4 h-4 text-mm-brown" />
              <span className="text-sm font-medium text-mm-ink">About Munk Media</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Redefining</span>
              <br />
              Influencer Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded by industry veterans, Munk Media has been at the forefront of premium influencer marketing, 
              creating campaigns that don't just reach audiences—they move them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      {/* Founder Section Added: Replaces old metrics block */}
      {/* Placeholder image to be replaced with Matisse Unkel's portrait */}
      {/* Focus on storytelling and founder vision instead of brand stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-mm-ink mb-6">Our Story & Vision</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Munk Media was founded with a simple belief, that true influence isn't measured in numbers, but in impact.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Built from years of experience in creative strategy and digital storytelling, Munk Media merges artistry with analytics to help brands connect authentically with audiences who care.
                </p>
              </div>
              <ul className="space-y-4 mt-8">
                <motion.li 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-mm-brown flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">Data-informed storytelling rooted in human connection</span>
                </motion.li>
                <motion.li 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-mm-brown flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">A boutique approach that values quality over volume</span>
                </motion.li>
                <motion.li 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-mm-brown flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">A team driven by long-term brand growth, not quick wins</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Right Column - Founder Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={safeMode ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-gradient-to-br from-mm-stone/40 to-mm-ivory rounded-2xl p-8 shadow-lg">
                {/* Founder Portrait */}
                <div className="relative mb-6 mx-auto max-w-xs">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/team/matisse-unkel.jpg"
                      alt="Matisse Unkel, Founder & Creative Director"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-mm-ink mb-1">Matisse Unkel</h3>
                    <p className="text-mm-brown font-semibold">Founder & Creative Director, Munk Media</p>
                  </div>

                  {/* Founder Bio */}
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      Driven by a deep passion for modern storytelling, Matisse founded Munk Media to bridge the gap between data-driven strategy and genuine human emotion.
                    </p>
                    <p>
                      With a background in creative marketing and years of experience collaborating with content creators, he built Munk Media as a place where brands grow through authenticity, not algorithms.
                    </p>
                  </div>

                  {/* Pull Quote */}
                  <div className="mt-8 pt-6 border-t border-mm-stone/50">
                    <blockquote className="text-xl italic text-mm-ink font-medium leading-relaxed">
                      "Influence is more than attention. It's the ability to move people."
                    </blockquote>
                    <p className="text-sm text-gray-600 mt-3">— Matisse Unkel</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deleted 'Our Core Values' section as per updated structure.
           Focus of the About Us page is now storytelling & founder vision,
           not internal value statements. */}

      {/* Updated: 'Meet the Team' section changed to 'Meet the Founders'
           Featuring Matisse Unkel & Pepijn van Erp.
           Removed old team members. Added placeholders for new founder portraits.
           Layout adjusted to 2-column responsive structure. */}
      {/* Meet the Founders Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Meet the Founders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The creative minds behind Munk Media — shaping the future of influencer marketing through innovation, authenticity, and strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-mm-brown/50 group-hover:border-mm-brown transition-all duration-300 bg-mm-stone/30">
                  <Image
                    src={founder.avatar}
                    alt={founder.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-bold text-mm-ink mb-2">{founder.name}</h3>
                <div className="text-mm-brown font-semibold mb-4">{founder.title}</div>
                <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deleted 'Our Credentials' and 'Ready to Work With Us?' sections 
           as per updated About Us page structure.
           Purpose: streamline the page to focus on Munk Media's story and founders.
           Removed all badges, partner mentions, and CTA buttons. */}

      <Footer />
    </main>
  )
}
