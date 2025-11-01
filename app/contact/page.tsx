'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, Star, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'
import { useState } from 'react'

export default function ContactPage() {
  const { safeMode } = useMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

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
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Let's Create Something</span>
              <br />
              That Moves Culture
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're a brand looking to scale with creators or a storyteller ready to collaborate — we'd love to hear from you. Let's start something that actually matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-mm-ink">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to build real partnerships that drive impact. Reach out to us anytime through the channels below.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="luxury-card cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-mm-ivory" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-mm-ink mb-1">Email Us</h4>
                      <p className="text-gray-600 mb-1">info@munk-media.com</p>
                      <span className="text-mm-brown text-sm font-medium group-hover:text-mm-ink transition-colors">Send us an email</span>
                    </div>
                  </div>
                </div>
                
                <div className="luxury-card cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mm-brown to-mm-stone rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-mm-ivory" />
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
                      <MapPin className="w-6 h-6 text-mm-ivory" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-mm-ink mb-1">Where We Operate</h4>
                      <p className="text-gray-600 mb-1">Australia</p>
                      <span className="text-mm-brown text-sm font-medium group-hover:text-mm-ink transition-colors">We work with brands and creators worldwide</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Removed 'Quick Actions' section for a cleaner and more conversion-focused contact layout. */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={safeMode ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
            >
              <div className="luxury-card">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4 text-mm-ink">Start Your Project</h3>
                  <p className="text-gray-600">Fill out the form below — our team will reach out within 24 hours to explore how we can bring your vision to life.</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-mm-ink mb-2">Message Sent!</h4>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-mm-ink mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                          placeholder="Your full name" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-mm-ink mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                          placeholder="your@email.com" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-mm-ink mb-2">Company Name</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                          placeholder="Your company" 
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-mm-ink mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all" 
                          placeholder="+31 (06) 15548053" 
                        />
                      </div>
                    </div>
                    
                    {/* Updated all contact forms across site:
                         - Removed 'Project Budget' field
                         - Unified brand copy
                         - Streamlined layout and improved storytelling focus */}
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-mm-ink mb-2">Project Details *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5} 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-mm-brown focus:border-transparent transition-all resize-none" 
                        placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                      ></textarea>
                    </div>

                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-luxury flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-mm-ivory border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
          >
            <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-6 py-3 rounded-full border border-mm-brown/20">
              {/* Replaced response-time pill with brand line to match Munk Media voice and tone. */}
              <Star className="w-5 h-5 text-mm-brown" />
              <span className="text-mm-ink font-medium">We build movement, not just marketing.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
