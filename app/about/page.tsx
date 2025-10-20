'use client'

import { motion } from 'framer-motion'
import { Award, Target, Users, TrendingUp, CheckCircle, Star, Heart, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'

export default function AboutPage() {
  const { safeMode } = useMotion()

  const achievements = [
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Users, value: '200+', label: 'Brands Served' },
    { icon: TrendingUp, value: '300%', label: 'Avg. ROI' },
    { icon: Target, value: '95%', label: 'Campaign Success' },
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We leverage cutting-edge strategies and emerging platforms to stay ahead of trends.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Results Driven',
      description: 'Every campaign is measured against clear KPIs with transparent reporting.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Premium Quality',
      description: 'We work exclusively with top-tier influencers and luxury brands.',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Strategic Partnership',
      description: 'We become an extension of your team, not just another vendor.',
      icon: Heart,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former VP of Marketing at Fortune 500 companies with 15+ years in influencer marketing.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategy',
      bio: 'Data-driven strategist with expertise in performance marketing and brand partnerships.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-e695c31a6179?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning creative director specializing in authentic brand storytelling.',
      avatar: 'https://images.unsplash.com/photo-1529626465613-d8a49cc7b5e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      bio: 'Operations expert ensuring seamless campaign execution and client satisfaction.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  const credentials = [
    'Google Partner Agency',
    'Meta Business Partner',
    'TikTok Marketing Partner',
    'YouTube Partner Program',
    'Influencer Marketing Hub Top Agency',
    'Digiday Awards Winner'
  ]

  // Safe mode variants - no animations, immediate visibility
  const safeVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  }

  // Normal mode variants - with animations
  const normalVariants = {
    hidden: { opacity: 0, y: 50 },
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
              <Award className="w-4 h-4 text-mm-brown" />
              <span className="text-sm font-medium text-mm-ink">About Munk Media</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Redefining</span>
              <br />
              Influencer Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded by industry veterans, Munk Media has been at the forefront of premium influencer marketing, 
              creating campaigns that don't just reach audiences—they move them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
              className="text-left"
            >
              <h2 className="text-3xl font-bold mb-4 text-mm-ink">Our Story & Impact</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since our inception, we've partnered with leading brands to craft authentic narratives and drive unparalleled engagement. Our innovative strategies and deep understanding of the creator economy set us apart.
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <motion.li 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-mm-brown flex-shrink-0" />
                  <span>Pioneering data-driven influencer strategies</span>
                </motion.li>
                <motion.li 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-mm-brown flex-shrink-0" />
                  <span>Exclusive network of top-tier global creators</span>
                </motion.li>
                <motion.li 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-mm-brown flex-shrink-0" />
                  <span>Measurable ROI and transparent reporting</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={safeMode ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                  className="luxury-card text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-mm-brown to-mm-stone rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-mm-ivory" />
                  </div>
                  <div className="text-3xl font-bold text-mm-ink mb-2">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every campaign we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-mm-ink mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Meet the Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team of strategists, creatives, and operations experts work together to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-mm-brown/50 group-hover:border-mm-brown transition-all duration-300">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-mm-ink mb-2">{member.name}</h3>
                <div className="text-mm-brown font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-mm-brown text-mm-ivory">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Credentials</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Recognized by industry leaders and trusted by premium brands worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="bg-mm-ivory/10 rounded-2xl p-6 text-center group hover:bg-mm-ivory/20 transition-colors"
              >
                <div className="text-mm-ivory font-semibold">{credential}</div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold mb-4 text-mm-ink">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help elevate your brand through strategic influencer partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury">
                Meet the Team
              </button>
              <button className="border border-mm-brown text-mm-brown px-8 py-4 rounded-xl font-semibold hover:bg-mm-stone/40 transition-colors">
                View Careers
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
