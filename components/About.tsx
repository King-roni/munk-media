'use client'

import { motion } from 'framer-motion'
import { Award, Target, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { useMotion } from './MotionProvider'

export default function About() {
  const { safeMode } = useMotion()

  const achievements = [
    { icon: Award, value: '∞', label: 'Endless Creativity' },
    { icon: Users, value: '100+', label: 'Creators in our network' },
    { icon: TrendingUp, value: '0%', label: 'Fake followers tolerated' },
    { icon: Target, value: '1', label: 'Shared mission' },
  ]

  const values = [
    {
      title: 'Authentic Creativity',
      description: 'We turn bold ideas into meaningful stories that move people and shape culture.',
      icon: '🔥'
    },
    {
      title: 'Driven by Purpose',
      description: 'Every campaign begins with intention, built to create real impact, not noise.',
      icon: '⚡'
    },
    {
      title: 'Built on Trust',
      description: 'We grow through genuine collaboration and lasting relationships with our creators and partners.',
      icon: '💎'
    },
    {
      title: 'Connected Through Culture',
      description: 'We don\'t follow trends, we create movement through creativity, honesty, and shared vision.',
      icon: '🌍'
    }
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
    <section id="about" className="section-padding bg-white">
      <div className="container-max text-center">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
        >
              <div className="inline-flex items-center space-x-2 bg-mm-brown/10 px-4 py-2 rounded-full border border-mm-brown/20 mb-6">
                <Award className="w-4 h-4 text-mm-brown" />
                <span className="text-sm font-medium text-mm-ink">About Munk Media</span>
              </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Redefining</span>
            <br />
            Influencer Marketing
          </h2>
          
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Founded by industry veterans, Munk Media has been at the forefront of premium influencer marketing, 
                creating campaigns that don't just reach audiences—they move them.
              </p>
        </motion.div>

        {/* Achievements */}
        <div className="mt-16 mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-left"
          >
                <h3 className="text-3xl font-bold mb-4 text-mm-ink">Our Story & Vision</h3>
            <p className="text-lg text-gray-600 mb-6">
              We're building the next era of influencer marketing, one driven by creativity, culture, and connection. At Munk Media, every partnership starts with purpose. We craft campaigns that move people, not just metrics, and we grow through collaboration that shapes what's next.
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
                <span>Purpose-driven influencer strategies</span>
              </motion.li>
              <motion.li 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                    <CheckCircle className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span>Curated network of authentic creators</span>
              </motion.li>
              <motion.li 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                    <CheckCircle className="w-5 h-5 text-mm-brown flex-shrink-0" />
                <span>Culture-focused storytelling with measurable impact</span>
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

        {/* Values Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
          className="text-center mb-16"
        >
              <h3 className="text-3xl font-bold mb-4 text-mm-ink">Our Core Values</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These values shape every story we tell and every partnership we build.
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
              <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-mm-ink mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}