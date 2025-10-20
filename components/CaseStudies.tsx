'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import { useMotion } from './MotionProvider'

export default function CaseStudies() {
  const { safeMode } = useMotion()

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
    <section id="case-studies" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
            <TrendingUp className="w-4 h-4 text-mm-brown" />
            <span className="text-sm font-medium text-mm-ink">Case Studies</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Proven</span>
            <br />
            Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real campaigns, real results. See how we've helped high-growth brands achieve exceptional outcomes through strategic influencer partnerships.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-mm-brown/20 to-mm-stone/20 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Campaign Visual</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-mm-brown/20">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-mm-brown fill-current" />
                  <span className="font-semibold text-mm-ink">Featured Campaign</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
              className="space-y-6"
            >
              <div>
                <div className="inline-block bg-mm-brown/10 text-mm-brown px-3 py-1 rounded-full text-sm font-medium mb-4">Fashion & Beauty</div>
                <h3 className="text-3xl font-bold mb-4 text-mm-ink">High-Growth Fashion Brand</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-mm-ink mb-2">Challenge:</h4>
                  <p className="text-gray-600">Increase brand awareness among Gen Z consumers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-mm-ink mb-2">Solution:</h4>
                  <p className="text-gray-600">Multi-platform influencer campaign with micro and macro influencers</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-mm-brown/10 to-mm-stone/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-4 h-4 text-mm-brown" />
                    <span className="text-sm text-gray-600">Reach</span>
                  </div>
                  <div className="text-2xl font-bold text-mm-ink">2.4M</div>
                </div>
                <div className="bg-gradient-to-br from-mm-brown/10 to-mm-stone/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-4 h-4 text-mm-brown" />
                    <span className="text-sm text-gray-600">Engagement</span>
                  </div>
                  <div className="text-2xl font-bold text-mm-ink">8.7%</div>
                </div>
                <div className="bg-gradient-to-br from-mm-brown/10 to-mm-stone/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <ShoppingCart className="w-4 h-4 text-mm-brown" />
                    <span className="text-sm text-gray-600">Conversions</span>
                  </div>
                  <div className="text-2xl font-bold text-mm-ink">12.3%</div>
                </div>
                <div className="bg-gradient-to-br from-mm-brown/10 to-mm-stone/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-mm-brown" />
                    <span className="text-sm text-gray-600">ROI</span>
                  </div>
                  <div className="text-2xl font-bold text-mm-ink">340%</div>
                </div>
              </div>
              <div className="bg-mm-stone/30 rounded-2xl p-6 border border-mm-brown/20">
                <p className="text-gray-700 italic mb-4">"Munk Media delivered exceptional results that exceeded our expectations."</p>
                <div className="text-sm font-medium text-mm-ink">— Sarah Chen, CMO</div>
              </div>
              <button className="inline-flex items-center space-x-2 text-mm-brown hover:text-mm-ink font-semibold transition-colors">
                <span>View Full Case Study</span>
                <motion.div
                  whileHover={safeMode ? {} : { x: 5 }}
                  className="inline-block"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}