'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { useMotion } from './MotionProvider'
import SplitText, { SplitTextGradient } from './SplitText'
import { springConfigs } from '@/lib/motionConfig'

export default function Hero() {
  const { safeMode } = useMotion()

      const TaglineContent = () => (
        <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
          <Star className="w-4 h-4 text-mm-brown" />
          <span className="text-sm font-medium text-mm-ink">Built for the new era of influencer marketing</span>
        </div>
      )

      const HeadlineContent = () => (
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
          {safeMode ? (
            <>
              <span className="gradient-text">Together</span>
              <br />
              We build the
              <br />
              <span className="text-mm-ink">future of marketing</span>
            </>
          ) : (
            <>
              <SplitTextGradient>Together</SplitTextGradient>
              <br />
              We build the
              <br />
              future of marketing
            </>
          )}
        </h1>
      )

      const SubheadContent = () => (
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Munk Media connects brands and creators through purpose-driven campaigns and authentic partnerships that shape culture and drive growth.
        </p>
      )

      const CTAButtons = () => (
        <div className="flex justify-center mb-12">
          {safeMode ? (
            <a 
              href="https://calendly.com/matisse-unkel8/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Calendly booking (new tab)"
              data-cta="calendly"
              data-location="home"
              className="inline-flex items-center gap-2 bg-mm-brown text-mm-ivory px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mm-brown focus:ring-offset-2"
              style={{
                boxShadow: '0 4px 14px 0 rgba(82, 52, 31, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(82, 52, 31, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(82, 52, 31, 0.2)';
              }}
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          ) : (
            <a 
              href="https://calendly.com/matisse-unkel8/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Calendly booking (new tab)"
              data-cta="calendly"
              data-location="home"
              className="inline-flex items-center gap-2 bg-mm-brown text-mm-ivory px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mm-brown focus:ring-offset-2"
              style={{
                boxShadow: '0 4px 14px 0 rgba(82, 52, 31, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(82, 52, 31, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(82, 52, 31, 0.2)';
              }}
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          )}
        </div>
      )

      const StatsContent = () => (
        <div className="flex flex-wrap justify-center gap-8 text-mm-ink">
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">∞</div>
            <div className="text-sm text-gray-600">Creativity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">24/7</div>
            <div className="text-sm text-gray-600">Collaboration</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">100%</div>
            <div className="text-sm text-gray-600">Authenticity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mm-brown mb-1">01</div>
            <div className="text-sm text-gray-600">Culture-first</div>
          </div>
        </div>
      )

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-mm-ivory via-mm-stone/30 to-mm-ivory pt-32 sm:pt-36 md:pt-40">
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
