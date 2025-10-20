'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Eye, Heart, ShoppingCart, Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'

export default function CaseStudiesPage() {
  const { safeMode } = useMotion()

  const caseStudies = [
    {
      slug: 'aurum-beauty-launch',
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
      author: 'Sarah Chen, CMO'
    },
    {
      slug: 'luxury-fashion-campaign',
      brand: 'Luxury Fashion Brand',
      category: 'Fashion & Style',
      challenge: 'Increase brand awareness among Gen Z luxury consumers',
      approach: ['Multi-platform campaign', 'Micro & macro influencers', 'Exclusive content'],
      results: { 
        views: '2.4M', 
        roas: '4.2x', 
        cpa: '$15.30',
        revenueLift: '280%',
        cvrs: '8.7%'
      },
      cover: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      testimonial: 'The launch campaign was a massive success, thanks to Munk Media\'s innovative approach.',
      author: 'David Lee, Marketing Director'
    },
    {
      slug: 'tech-gadget-launch',
      brand: 'Premium Tech Brand',
      category: 'Tech & Gadgets',
      challenge: 'Generate excitement and pre-orders for a new electric sports car',
      approach: ['Exclusive content series', 'Tech reviewers', 'Automotive influencers'],
      results: { 
        views: '5.1M', 
        roas: '2.8x', 
        cpa: '$45.20',
        revenueLift: '180%',
        cvrs: '6.5%'
      },
      cover: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      testimonial: 'Professional, creative, and results-driven. They understand tech marketing like no other.',
      author: 'Emma Thompson, VP Marketing'
    },
    {
      slug: 'food-delivery-growth',
      brand: 'Gourmet Food Delivery',
      category: 'Food & Dining',
      challenge: 'Scale user acquisition in competitive food delivery market',
      approach: ['Foodie influencers', 'Recipe content', 'Local partnerships'],
      results: { 
        views: '8.7M', 
        roas: '5.1x', 
        cpa: '$12.80',
        revenueLift: '420%',
        cvrs: '15.2%'
      },
      cover: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      testimonial: 'The ROI on our campaign was incredible. Munk Media delivers on every promise.',
      author: 'Michael Rodriguez, Brand Director'
    },
    {
      slug: 'fitness-app-launch',
      brand: 'Premium Fitness App',
      category: 'Fitness & Wellness',
      challenge: 'Launch new fitness app in saturated market',
      approach: ['Fitness influencers', 'Transformation stories', 'Community building'],
      results: { 
        views: '6.2M', 
        roas: '4.8x', 
        cpa: '$18.50',
        revenueLift: '290%',
        cvrs: '11.8%'
      },
      cover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      testimonial: 'Munk Media transformed our brand presence. The results exceeded our wildest expectations.',
      author: 'Sophia Martinez, CMO'
    },
    {
      slug: 'luxury-travel-promotion',
      brand: 'Luxury Travel Agency',
      category: 'Travel & Lifestyle',
      challenge: 'Promote luxury travel packages to high-net-worth individuals',
      approach: ['Travel influencers', 'Luxury lifestyle content', 'Exclusive experiences'],
      results: { 
        views: '3.9M', 
        roas: '6.2x', 
        cpa: '$125.00',
        revenueLift: '380%',
        cvrs: '9.4%'
      },
      cover: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      testimonial: 'Exceptional results that exceeded our expectations. Highly recommend Munk Media.',
      author: 'James Wilson, Marketing VP'
    }
  ]

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '95%', label: 'Campaign Success Rate' },
    { value: '320%', label: 'Average ROI' },
    { value: '85%', label: 'Repeat Clients' },
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
              <span className="text-sm font-medium text-mm-ink">Case Studies</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-mm-ink mb-6">
              <span className="gradient-text">Proven</span>
              <br />
              Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real campaigns, real results. See how we've helped brands achieve exceptional outcomes through strategic influencer partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card text-center"
              >
                <div className="text-3xl font-bold text-mm-brown mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card group cursor-pointer"
              >
                <div className="relative mb-6">
                  <div className="aspect-[4/3] bg-gradient-to-br from-mm-brown/20 to-mm-stone/20 rounded-2xl overflow-hidden">
                    <Image
                      src={study.cover}
                      alt={study.brand}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-mm-brown text-mm-ivory px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-mm-ink mb-2">{study.brand}</h3>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-mm-stone/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Eye className="w-4 h-4 text-mm-brown" />
                        <span className="text-xs text-gray-600">Views</span>
                      </div>
                      <div className="text-lg font-bold text-mm-ink">{study.results.views}</div>
                    </div>
                    <div className="bg-mm-stone/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-mm-brown" />
                        <span className="text-xs text-gray-600">ROAS</span>
                      </div>
                      <div className="text-lg font-bold text-mm-ink">{study.results.roas}</div>
                    </div>
                    <div className="bg-mm-stone/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <ShoppingCart className="w-4 h-4 text-mm-brown" />
                        <span className="text-xs text-gray-600">CPA</span>
                      </div>
                      <div className="text-lg font-bold text-mm-ink">{study.results.cpa}</div>
                    </div>
                    <div className="bg-mm-stone/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Heart className="w-4 h-4 text-mm-brown" />
                        <span className="text-xs text-gray-600">CVR</span>
                      </div>
                      <div className="text-lg font-bold text-mm-ink">{study.results.cvrs}</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-mm-stone/20 rounded-lg p-4">
                    <p className="text-gray-700 italic text-sm mb-2">&quot;{study.testimonial}&quot;</p>
                    <div className="text-xs font-medium text-mm-ink">— {study.author}</div>
                  </div>

                  {/* CTA */}
                  <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center space-x-2 text-mm-brown hover:text-mm-ink font-semibold group">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help your brand achieve similar results.
            </p>
            <button className="bg-mm-ivory text-mm-brown px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Book a Similar Campaign
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
