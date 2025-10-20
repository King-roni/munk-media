'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Eye, Heart, ShoppingCart, Star, ArrowRight, Calendar, Users, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or database
const caseStudiesData = {
  'aurum-beauty-launch': {
    brand: 'Aurum Beauty',
    category: 'Beauty & Skincare',
    challenge: 'Crowded D2C skincare market; low trust.',
    approach: ['Creator seeding', 'UGC ads', 'Whitelisting'],
    results: { 
      views: '12.4M', 
      roas: '3.7x', 
      cpa: '€8.12',
      revenueLift: '340%',
      cvrs: '12.3%'
    },
    cover: 'https://images.unsplash.com/photo-1588872657578-7efd1f155d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    testimonial: 'Munk Media delivered exceptional results that exceeded our expectations.',
    author: 'Sarah Chen, CMO',
    description: 'A comprehensive influencer marketing campaign that transformed Aurum Beauty\'s market presence and drove unprecedented growth in the competitive skincare industry.',
    timeline: '3 months',
    budget: '$50,000',
    influencers: '25 creators',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    creatives: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  }
}

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { safeMode } = useMotion()
  const study = caseStudiesData[params.slug as keyof typeof caseStudiesData]

  if (!study) {
    notFound()
  }

  const metrics = [
    { icon: Eye, value: study.results.views, label: 'Total Views', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: study.results.roas, label: 'Return on Ad Spend', color: 'from-green-500 to-emerald-500' },
    { icon: ShoppingCart, value: study.results.cpa, label: 'Cost Per Acquisition', color: 'from-purple-500 to-pink-500' },
    { icon: Heart, value: study.results.cvrs, label: 'Conversion Rate', color: 'from-orange-500 to-red-500' },
  ]

  const campaignDetails = [
    { icon: Calendar, label: 'Campaign Duration', value: study.timeline },
    { icon: Target, label: 'Campaign Budget', value: study.budget },
    { icon: Users, label: 'Influencers Used', value: study.influencers },
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
              <TrendingUp className="w-4 h-4 text-mm-brown" />
              <span className="text-sm font-medium text-mm-ink">Case Study</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-mm-ink mb-6">
              <span className="gradient-text">{study.brand}</span>
              <br />
              Campaign Success
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-mm-brown/20 to-mm-stone/20 rounded-3xl overflow-hidden">
                <Image
                  src={study.cover}
                  alt={study.brand}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={safeMode ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="inline-block bg-mm-brown/10 text-mm-brown px-3 py-1 rounded-full text-sm font-medium mb-4">{study.category}</div>
                <h2 className="text-3xl font-bold mb-4 text-mm-ink">{study.brand} Campaign</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-mm-ink mb-2">Challenge:</h3>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-mm-ink mb-2">Approach:</h3>
                  <ul className="space-y-1">
                    {study.approach.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-mm-brown flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Campaign Details */}
              <div className="grid grid-cols-1 gap-4">
                {campaignDetails.map((detail, index) => (
                  <div key={index} className="bg-mm-stone/30 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <detail.icon className="w-5 h-5 text-mm-brown" />
                      <div>
                        <div className="text-sm text-gray-600">{detail.label}</div>
                        <div className="font-semibold text-mm-ink">{detail.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Campaign Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The numbers speak for themselves. Here's how we delivered exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-mm-ink mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Revenue Impact */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="luxury-card text-center"
          >
            <h3 className="text-2xl font-bold text-mm-ink mb-4">Revenue Impact</h3>
            <div className="text-5xl font-bold text-mm-brown mb-2">{study.results.revenueLift}</div>
            <p className="text-gray-600">Increase in Revenue</p>
          </motion.div>
        </div>
      </section>

      {/* Creatives Gallery */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Campaign Creatives</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of high-performing content created during the campaign.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.creatives.map((creative, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="aspect-square bg-gradient-to-br from-mm-brown/20 to-mm-stone/20 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={creative}
                  alt={`Campaign creative ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-mm-brown text-mm-ivory">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">&quot;</div>
            <p className="text-2xl italic mb-8 leading-relaxed">
              {study.testimonial}
            </p>
            <div className="text-lg font-semibold">— {study.author}</div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
          >
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your brand achieve similar results with a tailored influencer marketing strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury">
                Book a Similar Campaign
              </button>
              <Link href="/case-studies" className="flex items-center space-x-2 text-mm-brown hover:text-mm-ink font-semibold">
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
