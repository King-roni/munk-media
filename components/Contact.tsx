'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react'
import { useMotion } from './MotionProvider'

export default function Contact() {
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
            <span className="text-sm font-medium text-mm-ink">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Create</span>
            <br />
            Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your brand with premium influencer marketing? Let's discuss your goals and create a campaign that delivers exceptional results.
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
                We're here to help you create impactful influencer marketing campaigns. Reach out to us through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="luxury-card cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-mm-ink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-mm-ink mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-1">hello@munkmedia.com</p>
                    <span className="text-mm-brown text-sm font-medium group-hover:text-mm-ink transition-colors">Send us an email</span>
                  </div>
                </div>
              </div>

              <div className="luxury-card cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-mm-ink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-mm-ink mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
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
                    <h4 className="font-bold text-mm-ink mb-1">Visit Us</h4>
                    <p className="text-gray-600 mb-1">New York, NY</p>
                    <span className="text-mm-brown text-sm font-medium group-hover:text-mm-ink transition-colors">Get directions</span>
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
              <h3 className="text-3xl font-bold mb-4 text-mm-ink">Start Your Campaign</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours to discuss your project.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mm-ink mb-2">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mm-ink mb-2">Email Address *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-mm-ink mb-2">Company Name</label>
                  <input type="text" id="company" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" placeholder="Your company" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-mm-ink mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-mm-ink mb-2">Project Budget</label>
                <select id="budget" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all">
                  <option value="">Select budget range</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mm-ink mb-2">Project Details *</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all resize-none" placeholder="Tell us about your project goals, target audience, and any specific requirements..."></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={safeMode ? {} : { scale: 1.02 }}
                whileTap={safeMode ? {} : { scale: 0.98 }}
                className="w-full btn-luxury flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
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
            <Star className="w-5 h-5 text-mm-brown" />
            <span className="text-mm-ink font-medium">Average response time: 4 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}