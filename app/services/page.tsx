'use client'

import { motion } from 'framer-motion'
import { Users, Camera, TrendingUp, Layers, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'

export default function ServicesPage() {
  const { safeMode } = useMotion()

  const services = [
    {
      icon: Users,
      title: 'Influencer Campaigns',
      description: 'End-to-end campaign management with our curated selection of premium influencers.',
      features: [
        'Strategic campaign planning',
        'Influencer vetting & selection',
        'Content approval & management',
        'Performance tracking & optimization'
      ],
      outcomes: [
        'Average 3.2x ROAS',
        '15% higher engagement rates',
        '40% faster campaign launch',
        'Real-time performance dashboards'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Camera,
      title: 'UGC Production',
      description: 'Professional content production that aligns with your brand aesthetic and values.',
      features: [
        'High-quality visual content',
        'Video production & editing',
        'Brand-aligned messaging',
        'Multi-platform optimization'
      ],
      outcomes: [
        '50% cost reduction vs traditional ads',
        '3x higher conversion rates',
        'Authentic brand storytelling',
        'Scalable content library'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Creator Management',
      description: 'Comprehensive strategies to elevate your brand presence and market position.',
      features: [
        'Creator onboarding & training',
        'Long-term partnership development',
        'Performance optimization',
        'Relationship management'
      ],
      outcomes: [
        '85% creator retention rate',
        '2x longer partnership duration',
        'Consistent brand alignment',
        'Reduced management overhead'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Layers,
      title: 'Paid Social Amplification',
      description: 'Leverage user-generated content to build authentic brand connections.',
      features: [
        'UGC campaign design',
        'Community engagement',
        'Content curation & rights',
        'Amplification strategies'
      ],
      outcomes: [
        '60% lower cost per acquisition',
        '4x higher engagement',
        'Improved ad performance',
        'Extended content lifespan'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const processSteps = [
    {
      title: 'Discovery',
      description: 'Deep dive into your brand, goals, and target audience.',
      icon: '🔍'
    },
    {
      title: 'Strategy',
      description: 'Develop a comprehensive campaign strategy tailored to your objectives.',
      icon: '📋'
    },
    {
      title: 'Execution',
      description: 'Launch and manage campaigns with our premium influencer network.',
      icon: '🚀'
    },
    {
      title: 'Optimization',
      description: 'Monitor performance and optimize for maximum ROI.',
      icon: '📊'
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
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
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
            <h1 className="text-4xl lg:text-6xl font-bold text-mm-ink mb-6">
              <span className="gradient-text">Premium</span> Solutions
              <br />
              for Elite Brands
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive influencer marketing services designed to deliver exceptional results 
              for luxury brands seeking authentic, high-impact campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-mm-ink mb-2">What's Included:</h4>
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

                    {/* Outcomes */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-mm-ink mb-2">Expected Outcomes:</h4>
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <motion.div
                          key={outcomeIndex}
                          initial="hidden"
                          animate="visible"
                          variants={variants}
                          transition={safeMode ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 + outcomeIndex * 0.05 }}
                          className="flex items-center space-x-2"
                        >
                          <Star className="w-4 h-4 text-mm-brown flex-shrink-0" />
                          <span className="text-sm text-gray-600">{outcome}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      whileHover={safeMode ? {} : { x: 5 }}
                      className="inline-flex items-center space-x-2 text-mm-brown font-semibold group-hover:text-mm-ink transition-colors cursor-pointer"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Our Seamless Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial strategy to campaign execution and detailed reporting, we ensure a smooth and effective journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card text-center group"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-4xl font-bold text-mm-brown mb-4">{index + 1}.</div>
                <h4 className="text-xl font-semibold text-mm-ink mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-mm-brown text-mm-ivory">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Brand?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can drive exceptional results for your brand.
            </p>
            <button className="bg-mm-ivory text-mm-brown px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Book a Discovery Call
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
