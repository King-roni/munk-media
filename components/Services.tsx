'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Camera, TrendingUp, Layers, ArrowRight, CheckCircle } from 'lucide-react'
import { useMotion } from './MotionProvider'

export default function Services() {
  const { safeMode } = useMotion()

  const services = [
    {
      icon: Users,
      title: 'Influencer Campaigns',
      description: 'End-to-end campaign strategy built around creators who connect with your audience.',
      features: [
        'Purpose-driven storytelling',
        'Authentic creator partnerships',
        'Campaign design & execution',
        'Impact measurement & optimization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Camera,
      title: 'UGC Production',
      description: 'Human, story-led content created to inspire trust and emotion.',
      features: [
        'Real creators, real stories',
        'Platform-optimized production',
        'Seamless brand integration',
        'Measurable engagement impact'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Creator Management',
      description: 'We nurture lasting creator relationships built on trust, creativity, and shared purpose.',
      features: [
        'Talent onboarding & communication',
        'Performance coaching & creative direction',
        'Long-term growth strategy',
        'Collaborative brand alignment'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

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
    <section id="services" className="section-padding bg-gradient-to-br from-luxury-beige/30 to-luxury-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center mb-16"
        >
              <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
                <Layers className="w-4 h-4 text-mm-brown" />
                <span className="text-sm font-medium text-mm-ink">Our Services</span>
              </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-mm-ink mb-6">
            <span className="gradient-text">Purpose-Driven</span> Solutions
            <br />
            for Modern Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We craft influencer campaigns and creator partnerships that move people, build culture, and turn creativity into real impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
              className="luxury-card group cursor-pointer"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <motion.div
                  whileHover={safeMode ? {} : { scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-mm-ink group-hover:text-mm-brown transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={safeMode ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center space-x-2"
                      >
                          <CheckCircle className="w-4 h-4 text-mm-brown flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/services">
                    <motion.div
                      whileHover={safeMode ? {} : { x: 5 }}
                      className="inline-flex items-center space-x-2 text-mm-brown font-semibold group-hover:text-mm-ink transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}