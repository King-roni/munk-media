'use client'

import { motion } from 'framer-motion'
import { Users, Star, Instagram, Youtube, Twitter } from 'lucide-react'
import { useMotion } from './MotionProvider'

export default function CreatorNetwork() {
  const { safeMode } = useMotion()

  // Safe mode variants - no animations, immediate visibility
  const safeVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  }

  // Normal mode variants - with animations
  const normalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const variants = safeMode ? safeVariants : normalVariants
  const transition = safeMode ? { duration: 0 } : { duration: 0.8 }

  const creators = [
    { name: 'Fashion Influencer', platform: 'Instagram', followers: '2.5M' },
    { name: 'Lifestyle Creator', platform: 'YouTube', followers: '1.8M' },
    { name: 'Beauty Expert', platform: 'TikTok', followers: '3.2M' },
    { name: 'Travel Blogger', platform: 'Instagram', followers: '1.5M' },
    { name: 'Fitness Guru', platform: 'YouTube', followers: '2.1M' },
    { name: 'Food Critic', platform: 'Instagram', followers: '1.9M' },
  ]

  return (
    <section id="creator-network" className="section-padding bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
      <div className="container-max">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
            <Users className="w-4 h-4 text-mm-brown" />
            <span className="text-sm font-medium text-mm-ink">Creator Network</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Elite</span>
            <br />
            Creator Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our curated network of top-tier influencers across all major platforms. 
            Each creator is vetted for authenticity, engagement, and brand alignment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
              className="luxury-card text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-mm-brown to-mm-stone rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-mm-ink" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-mm-ink">{creator.name}</h3>
              <p className="text-gray-600 mb-2">{creator.platform}</p>
              <p className="text-mm-brown font-semibold">{creator.followers} followers</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center"
        >
          <button className="btn-luxury">
            Explore Full Network
          </button>
        </motion.div>
      </div>
    </section>
  )
}