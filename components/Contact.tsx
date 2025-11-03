'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react'
import { useMotion } from './MotionProvider'
import { useFormState } from 'react-dom'
import { submitContact } from '@/app/actions/contact'

export default function Contact() {
  const { safeMode } = useMotion()
  const [formState, formAction] = useFormState(submitContact, null)

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
    <section id="contact" className="section-padding bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
      <div className="container-max">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
            <Mail className="w-4 h-4 text-mm-brown" />
            <span className="text-sm font-medium text-mm-ink">Contact Munk Media</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Create Something</span>
            <br />
            That Moves Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're a brand looking to scale with creators or a storyteller ready to collaborate — we'd love to hear from you. Let's start something that actually matters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-mm-ink">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're here to build real partnerships that drive impact. Reach out to us anytime through the channels below.
              </p>
            </div>
            
            <div className="space-y-6">
              <a 
                href="mailto:info@munk-media.com"
                rel="noopener noreferrer"
                className="luxury-card cursor-pointer group block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-mm-ink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-mm-ink mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-1">info@munk-media.com</p>
                    <span className="text-mm-brown text-sm font-medium group-hover:text-mm-ink transition-colors">Send us an email</span>
                  </div>
                </div>
              </a>

              <div className="luxury-card cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-mm-ink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-mm-ink mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-1">+31 (06) 15548053</p>
                    <span className="text-mm-brown text-sm font-medium group-hover:text-mm-ink transition-colors">Schedule a call</span>
                  </div>
                </div>
              </div>

              <div className="luxury-card cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-mm-ink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-mm-ink mb-1">Where We Operate</h4>
                    <p className="text-gray-600 mb-1">Australia</p>
                    <span className="text-mm-brown text-sm font-medium group-hover:text-mm-ink transition-colors">We work with brands and creators worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="luxury-card"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-mm-ink">Start Your Project</h3>
              <p className="text-gray-600">Fill out the form below — our team will reach out within 24 hours to explore how we can bring your vision to life.</p>
            </div>

            {/* Success Message */}
            {formState?.ok && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-medium">Thank you for reaching out! We'll get back to you within 24 hours.</p>
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
              <input type="hidden" name="page" value="home" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mm-ink mb-2">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mm-ink mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mm-ink mb-2">Message *</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all resize-none" placeholder="Tell us about your project goals, target audience, and any specific requirements..."></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-luxury flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-6 py-3 rounded-full border border-mm-brown/20">
            {/* Replaced response-time pill with brand line to match Munk Media voice and tone. */}
            <Star className="w-5 h-5 text-mm-brown" />
            <span className="text-mm-ink font-medium">We build movement, not just marketing.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}