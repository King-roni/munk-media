'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMotion } from './MotionProvider'
import { Brand } from './Brand'

export default function Navigation() {
  const { safeMode } = useMotion()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Creators', href: '/creators' },
    { name: 'Blog', href: '/blog' },
    { name: 'About us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  // Safe mode variants - no animations, immediate visibility
  const safeVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 }
  }

  // Normal mode variants - with animations
  const normalVariants = {
    hidden: { y: -100 },
    visible: { y: 0 }
  }

  const variants = safeMode ? safeVariants : normalVariants
  const transition = safeMode ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-mm-brown shadow-lg`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Brand />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 relative group ${
                  pathname === item.href 
                    ? 'text-mm-stone' 
                    : 'text-mm-ivory hover:text-mm-stone'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-mm-stone transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="hidden md:flex items-center space-x-2 bg-mm-stone text-mm-brown px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mm-stone focus:ring-offset-2 focus:ring-offset-mm-brown"
          >
            <span>Book a Call</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-mm-ivory" />
            ) : (
              <Menu className="w-6 h-6 text-mm-ivory" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-mm-brown border-t border-mm-ink/30"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block font-medium transition-colors duration-300 ${
                      pathname === item.href ? 'text-mm-stone' : 'text-mm-ivory hover:text-mm-stone'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  href="/contact" 
                  className="w-full bg-mm-stone text-mm-brown px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg text-center transition-all duration-200 mt-4" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}