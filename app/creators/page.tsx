'use client'

import { motion } from 'framer-motion'
import { Users, Instagram, Youtube, Twitter, Filter, Search, Star, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'
import { useState } from 'react'

export default function CreatorsPage() {
  const { safeMode } = useMotion()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedReach, setSelectedReach] = useState('All')

  const creators = [
    { 
      name: 'Ava Lux', 
      niche: 'Beauty & Skincare', 
      platforms: ['Instagram', 'TikTok'],
      reach: 'Micro (10K-100K)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '8.2%',
      followers: '45K'
    },
    { 
      name: 'Ethan Style', 
      niche: 'Fitness & Lifestyle', 
      platforms: ['Instagram', 'YouTube'],
      reach: 'Macro (100K-1M)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '6.8%',
      followers: '280K'
    },
    { 
      name: 'Sophia Glow', 
      niche: 'Beauty & Skincare', 
      platforms: ['Instagram', 'TikTok', 'YouTube'],
      reach: 'Mega (1M+)',
      avatar: 'https://images.unsplash.com/photo-1529626465613-d8a49cc7b5e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '4.2%',
      followers: '1.2M'
    },
    { 
      name: 'Liam Tech', 
      niche: 'Tech & Gadgets', 
      platforms: ['YouTube', 'Instagram'],
      reach: 'Macro (100K-1M)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-e695c31a6179?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '7.1%',
      followers: '450K'
    },
    { 
      name: 'Mia Wander', 
      niche: 'Travel & Lifestyle', 
      platforms: ['Instagram', 'TikTok'],
      reach: 'Micro (10K-100K)',
      avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4cfcd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '9.3%',
      followers: '78K'
    },
    { 
      name: 'Noah Foodie', 
      niche: 'Food & Dining', 
      platforms: ['Instagram', 'YouTube', 'TikTok'],
      reach: 'Macro (100K-1M)',
      avatar: 'https://images.unsplash.com/photo-1539571696357-ab249c878d35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '5.8%',
      followers: '320K'
    },
    { 
      name: 'Zoe Fashion', 
      niche: 'Fashion & Style', 
      platforms: ['Instagram', 'TikTok'],
      reach: 'Micro (10K-100K)',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '8.7%',
      followers: '62K'
    },
    { 
      name: 'Alex Fitness', 
      niche: 'Fitness & Wellness', 
      platforms: ['Instagram', 'YouTube'],
      reach: 'Macro (100K-1M)',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      engagement: '6.4%',
      followers: '180K'
    }
  ]

  const categories = ['All', 'Beauty & Skincare', 'Fitness & Lifestyle', 'Tech & Gadgets', 'Travel & Lifestyle', 'Food & Dining', 'Fashion & Style']
  const platforms = ['All', 'Instagram', 'YouTube', 'TikTok']
  const reachTiers = ['All', 'Micro (10K-100K)', 'Macro (100K-1M)', 'Mega (1M+)']

  const filteredCreators = creators.filter(creator => {
    const categoryMatch = selectedCategory === 'All' || creator.niche === selectedCategory
    const platformMatch = selectedPlatform === 'All' || creator.platforms.includes(selectedPlatform)
    const reachMatch = selectedReach === 'All' || creator.reach === selectedReach
    return categoryMatch && platformMatch && reachMatch
  })

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
      <section className="pt-40 pb-20 bg-gradient-to-br from-[#F9F7F4] to-mm-ivory">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={safeMode ? {} : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={safeMode ? {} : { duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-mm-brown/10 backdrop-blur-sm px-4 py-2 rounded-full border border-mm-brown/20 mb-8"
            >
              <Users className="w-4 h-4 text-mm-brown" />
              <span className="text-sm font-medium text-mm-ink">Creator Network</span>
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={safeMode ? {} : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={safeMode ? {} : { duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-mm-ink mb-6 leading-tight"
            >
              Where Creativity
              <br />
              <span className="gradient-text">Meets Partnership</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={safeMode ? {} : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={safeMode ? {} : { duration: 0.8, delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Munk Media connects brands with authentic creators who don't just post — they influence culture.
              <br />
              <span className="text-lg opacity-90 mt-2 block">
                Our network is built on trust, creativity, and long-term collaboration between visionary creators and the world's most ambitious brands.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ARCHIVED_CREATOR_SECTION: To be reactivated once Creator profiles are added. Do not remove. */}
      {/* 
        ARCHIVED: Creator Network – (Archived Layout)
        This section contains the creator profiles grid, filters, and showcase elements.
        It is currently hidden but preserved for future use when creator data becomes available.
        To reactivate: Remove the conditional rendering below and uncomment this section.
      */}
      {false && (
        <>
          {/* Filters Section */}
          <section className="py-8 bg-white border-b border-mm-stone/50">
            <div className="container-max">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={transition}
                className="flex flex-wrap gap-4 justify-center"
              >
                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-mm-brown" />
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-mm-stone rounded-lg text-mm-ink focus:ring-2 focus:ring-mm-brown focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Platform Filter */}
                <div className="flex items-center space-x-2">
                  <span className="text-mm-ink font-medium">Platform:</span>
                  <select 
                    value={selectedPlatform} 
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                    className="px-3 py-2 border border-mm-stone rounded-lg text-mm-ink focus:ring-2 focus:ring-mm-brown focus:border-transparent"
                  >
                    {platforms.map(platform => (
                      <option key={platform} value={platform}>{platform}</option>
                    ))}
                  </select>
                </div>

                {/* Reach Filter */}
                <div className="flex items-center space-x-2">
                  <span className="text-mm-ink font-medium">Reach:</span>
                  <select 
                    value={selectedReach} 
                    onChange={(e) => setSelectedReach(e.target.value)}
                    className="px-3 py-2 border border-mm-stone rounded-lg text-mm-ink focus:ring-2 focus:ring-mm-brown focus:border-transparent"
                  >
                    {reachTiers.map(reach => (
                      <option key={reach} value={reach}>{reach}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Creators Grid */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                {filteredCreators.map((creator, index) => (
                  <motion.div
                    key={creator.name}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                    className="luxury-card text-center group"
                  >
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-mm-brown/50 group-hover:border-mm-brown transition-all duration-300">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-mm-ink mb-2">{creator.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{creator.niche}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div className="bg-mm-stone/30 rounded-lg p-2">
                        <div className="font-semibold text-mm-ink">{creator.followers}</div>
                        <div className="text-gray-600">Followers</div>
                      </div>
                      <div className="bg-mm-stone/30 rounded-lg p-2">
                        <div className="font-semibold text-mm-ink">{creator.engagement}</div>
                        <div className="text-gray-600">Engagement</div>
                      </div>
                    </div>

                    {/* Platforms */}
                    <div className="flex justify-center space-x-2 mb-4">
                      {creator.platforms.map(platform => {
                        const IconComponent = platform === 'Instagram' ? Instagram : 
                                            platform === 'YouTube' ? Youtube : 
                                            platform === 'TikTok' ? Twitter : Twitter
                        return (
                          <div key={platform} className="w-8 h-8 bg-mm-brown/10 rounded-full flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-mm-brown" />
                          </div>
                        )
                      })}
                    </div>

                    <div className="text-xs text-mm-brown font-medium mb-4">{creator.reach}</div>

                    <button className="w-full bg-mm-brown text-mm-ivory py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      View Profile
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Join Our Creator Network - Active Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center"
          >
            <div className="luxury-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-mm-ink mb-4">Join Our Creator Network</h3>
              <p className="text-gray-600 mb-6">
                Are you a creator who wants to collaborate with high-end brands and tell stories that matter?
                <br />
                Join the Munk Media Creator Network and become part of a curated group of visionaries redefining digital influence.
              </p>
              <Link href="/contact" className="inline-block btn-luxury">
                Join the Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
