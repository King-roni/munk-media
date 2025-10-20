'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useMotion } from './MotionProvider'

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "Munk Media transformed our brand presence. The results exceeded our wildest expectations.",
      author: "Sarah Chen",
      role: "CMO, High-Growth Fashion Brand",
      rating: 5
    },
    {
      quote: "Professional, creative, and results-driven. They understand influencer marketing like no other.",
      author: "Michael Rodriguez",
      role: "Brand Director, Premium Beauty",
      rating: 5
    },
    {
      quote: "The ROI on our campaign was incredible. Munk Media delivers on every promise.",
      author: "Emma Thompson",
      role: "Marketing VP, High-End Retail",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
            <Quote className="w-4 h-4 text-mm-brown" />
            <span className="text-sm font-medium text-mm-ink">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Client</span>
            <br />
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the high-growth brands we've helped achieve extraordinary results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
              className="luxury-card text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-mm-brown fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-mm-ink">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}