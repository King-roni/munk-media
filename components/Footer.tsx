'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, ArrowUp, Mail, Phone, MapPin, ArrowRight, FileText } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useMotion } from './MotionProvider'
import { SOCIAL_LINKS } from '@/lib/socials'

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
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/brand/munk-logo.png"
                alt="Munk Media logo"
                width={48}
                height={48}
                className="object-contain md:w-[52px] md:h-[52px] transition-transform duration-200 hover:scale-105"
              />
              <span className="font-semibold tracking-tight text-lg md:text-xl">Munk Media</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Munk Media connects creators and brands through stories that move people, not just numbers. From influencer campaigns to authentic UGC, we build partnerships that shape culture and drive real growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram (new tab)"
                data-cta="social"
                data-network="instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-mm-brown focus:ring-offset-2 focus:ring-offset-mm-ink"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.x} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open X (new tab)"
                data-cta="social"
                data-network="x"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-mm-brown focus:ring-offset-2 focus:ring-offset-mm-ink"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn (new tab)"
                data-cta="social"
                data-network="linkedin"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-mm-brown focus:ring-offset-2 focus:ring-offset-mm-ink"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open TikTok (new tab)"
                data-cta="social"
                data-network="tiktok"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-mm-brown focus:ring-offset-2 focus:ring-offset-mm-ink"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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
              <li><Link href="/creators" className="text-gray-400 hover:text-mm-brown transition-colors duration-300">Creators</Link></li>
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
                <span className="text-gray-400">matisse@munk-media.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span className="text-gray-400">+31 6 15548053</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span className="text-gray-400">Amsterdam, A'dam</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span className="text-gray-400">KVK: 98097636</span>
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