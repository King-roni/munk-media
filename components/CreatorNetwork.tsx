'use client'

import { motion } from 'framer-motion'
import { Users, ArrowRight, CheckCircle } from 'lucide-react'
import { useMotion } from './MotionProvider'
import { useFormState } from 'react-dom'
import { submitCreatorApplication } from '@/app/actions/creator-application'

export default function CreatorNetwork() {
  const { safeMode } = useMotion()
  const [formState, formAction] = useFormState(submitCreatorApplication, null)

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
            <span className="gradient-text">Join the Movement.</span>
            <br />
            Become a Munk Creator.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building a global network of authentic creators — storytellers who move culture forward.
            <br />
            If you're ready to partner with brands that value creativity, honesty, and impact, we want to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="max-w-2xl mx-auto"
        >
          <div className="luxury-card">
            <h3 className="text-2xl font-bold mb-6 text-mm-ink">Creator Application Form</h3>
            
            {/* Success Message */}
            {formState?.ok && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-medium">Thank you! We'll review your application and get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {formState?.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800 mb-2">{formState.error}</p>
                <p className="text-red-700 text-sm">
                  <a href="mailto:info@munk-media.com" className="underline hover:text-red-900">Email us directly</a> if you continue to experience issues.
                </p>
              </div>
            )}

            <form action={formAction} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label htmlFor="creator-name" className="block text-sm font-medium text-mm-ink mb-2">Name *</label>
                <input 
                  type="text" 
                  id="creator-name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                  placeholder="Your name" 
                />
              </div>

              <div>
                <label htmlFor="creator-email" className="block text-sm font-medium text-mm-ink mb-2">Email *</label>
                <input 
                  type="email" 
                  id="creator-email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                  placeholder="your@email.com" 
                />
              </div>

              <div>
                <label htmlFor="creator-platform" className="block text-sm font-medium text-mm-ink mb-2">Platform(s) *</label>
                <select 
                  id="creator-platform" 
                  name="platform" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all"
                >
                  <option value="">Select platform</option>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="creator-followers" className="block text-sm font-medium text-mm-ink mb-2">Follower count (optional)</label>
                <input 
                  type="text" 
                  id="creator-followers" 
                  name="followerCount" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                  placeholder="e.g., 10K, 100K, 1M" 
                />
              </div>

              <div>
                <label htmlFor="creator-niche" className="block text-sm font-medium text-mm-ink mb-2">Content niche *</label>
                <input 
                  type="text" 
                  id="creator-niche" 
                  name="niche" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                  placeholder="e.g., Fashion, Beauty, Lifestyle, Tech" 
                />
              </div>

              <div>
                <label htmlFor="creator-message" className="block text-sm font-medium text-mm-ink mb-2">Message *</label>
                <textarea 
                  id="creator-message" 
                  name="message" 
                  required 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all resize-none" 
                  placeholder="Tell us about yourself and why you'd like to join the Munk Creator network..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-luxury flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Submit Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-600 text-center">
              Every partnership begins with purpose.
              <br />
              Munk Media connects creators and brands through stories that inspire, connect, and create real movement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
