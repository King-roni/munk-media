'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Youtube, ArrowUp, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useMotion } from './MotionProvider'

export default function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-mm-ink text-mm-ivory">
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center">
                <span className="text-mm-ivory font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">Munk Media</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Full-funnel influencer campaigns, UGC production, and creator management for high-growth brands. We connect you with top-tier creators to amplify your brand's presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-pink-500" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-blue-400" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-blue-600" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-red-500" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
          >
            <h3 className="text-lg font-bold mb-6 text-mm-ivory">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">Influencer Campaigns</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">UGC Production</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">Creator Management</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">Paid Social Amplification</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
          >
            <h3 className="text-lg font-bold mb-6 text-mm-ivory">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">Case Studies</Link></li>
              <li><Link href="/creators" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">Creator Network</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
          >
            <h3 className="text-lg font-bold mb-6 text-mm-ivory">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span className="text-gray-400">hello@munkmedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-mm-ivory">Stay Updated</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-mm-brown" />
                <button className="px-4 py-2 bg-mm-brown text-mm-ivory rounded-r-lg hover:opacity-90 transition-opacity">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
              className="text-gray-400 text-sm"
            >
              © 2025 Munk Media. All rights reserved.
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
              className="flex space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-gray-400 hover:text-mm-brown transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-mm-brown transition-colors">Terms of Service</Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={safeMode ? {} : { scale: 1.1 }}
        whileTap={safeMode ? {} : { scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-mm-brown text-mm-ivory rounded-full shadow-lg hover:opacity-90 transition-opacity z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </motion.button>
    </footer>
  )
}