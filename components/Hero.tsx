'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'
import MotionSafe from './MotionSafe'
import { useMotion } from './MotionProvider'

export default function Hero() {
  const { safeMode } = useMotion()

      const TaglineContent = () => (
        <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
          <Star className="w-4 h-4 text-mm-brown" />
          <span className="text-sm font-medium text-mm-ink">Premium Influencer Marketing Agency</span>
        </div>
      )

      const HeadlineContent = () => (
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="gradient-text">Scale</span>
          <br />
          with creators your
          <br />
          <span className="text-mm-ink">customers already trust</span>
        </h1>
      )

      const SubheadContent = () => (
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Full-funnel influencer campaigns, UGC production, and creator management for high-growth brands.
        </p>
      )

      const CTAButtons = () => (
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-luxury flex items-center space-x-2 group">
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center space-x-2 text-mm-ink hover:text-mm-brown font-semibold group">
            <div className="w-12 h-12 bg-mm-brown/10 rounded-full flex items-center justify-center group-hover:bg-mm-brown/20 transition-colors">
              <Play className="w-5 h-5 ml-1" />
            </div>
            <span>See Case Studies</span>
          </button>
        </div>
      )

      const StatsContent = () => (
        <div className="flex flex-wrap justify-center gap-8 text-mm-ink">
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">500+</div>
            <div className="text-sm text-gray-600">Influencers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">200+</div>
            <div className="text-sm text-gray-600">Brands Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">300%</div>
            <div className="text-sm text-gray-600">Avg. ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      )

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-mm-ivory via-mm-stone/30 to-mm-ivory">
      {/* Particle Animation */}
      {!safeMode && <MotionSafe count={30} />}
      
      {/* Background Elements */}
      {!safeMode && (
        <div className="absolute inset-0 overflow-hidden parallax-bg">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
                className="absolute top-20 right-20 w-32 h-32 bg-mm-brown/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
                className="absolute bottom-20 left-20 w-40 h-40 bg-mm-brown/5 rounded-full blur-xl"
          />
        </div>
      )}

      <div className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline */}
          {safeMode ? (
            <TaglineContent />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TaglineContent />
            </motion.div>
          )}

          {/* Main Headline */}
          {safeMode ? (
            <HeadlineContent />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HeadlineContent />
            </motion.div>
          )}

          {/* Subheadline */}
          {safeMode ? (
            <SubheadContent />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <SubheadContent />
            </motion.div>
          )}

          {/* CTA Buttons */}
          {safeMode ? (
            <CTAButtons />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CTAButtons />
            </motion.div>
          )}

          {/* Stats */}
          {safeMode ? (
            <StatsContent />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <StatsContent />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
