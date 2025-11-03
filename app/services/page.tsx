'use client'

import { motion } from 'framer-motion'
import { Users, Camera, TrendingUp, Rocket, Layers, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'

export default function ServicesPage() {
  const { safeMode } = useMotion()

  const services = [
    {
      icon: Users,
      title: 'Influencer Campaigns',
      headline: 'Stories That Scale Through Authentic Influence',
      description: 'We design and manage creator-led campaigns that amplify your brand through genuine connections, not paid impressions.',
      features: [
        'Strategic storytelling and campaign architecture',
        'Handpicked creator partnerships built on trust',
        'Real-time creative approvals and optimization',
        'Transparent performance dashboards'
      ],
      outcomes: [
        'Organic reach that converts',
        'Faster go-live and measurable ROI',
        'Campaigns that create cultural impact'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Camera,
      title: 'UGC Production',
      headline: 'Real People. Real Content. Real Results.',
      description: 'We produce UGC that feels human, authentic visuals and videos that drive trust, relatability, and performance.',
      features: [
        'Authentic lifestyle content (photo/video)',
        'Editing optimized for multi-platform use',
        'Brand-aligned tone and messaging',
        'Story-first creative strategy'
      ],
      outcomes: [
        'Up to 3x engagement increase',
        'Reduced ad fatigue & higher CTR',
        'Brand trust built through real voices'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Creator Management',
      headline: 'Building Long-Term Creator Partnerships That Last',
      description: 'We help brands nurture high-value relationships with creators, from onboarding to performance tracking and creative growth.',
      features: [
        'Creator onboarding, vetting & coaching',
        'Partnership growth programs',
        'Incentive structures & performance insights',
        'Alignment tracking across all content'
      ],
      outcomes: [
        'Higher creator retention and loyalty',
        'Consistent creative output',
        'Authentic, ongoing brand storytelling'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Outbound Growth Partnerships',
      headline: 'Empowering Agencies to Scale Beyond Inbound',
      description: 'Most influencer marketing agencies focus only on inbound traffic, we help you break that ceiling. Munk Media partners directly with agencies to run outbound marketing campaigns that generate high-intent brand leads, saving time while increasing your deal flow.',
      features: [
        'Outbound marketing systems designed for IMAs',
        'Done-for-you outreach & campaign management',
        'Lower agency fee model (built for long-term collaboration)',
        'Strategy sessions to optimize messaging and targeting',
        'Multi-channel execution (email, LinkedIn, direct outreach)'
      ],
      advantages: [
        'Long-term partnership model — not short-term retainers',
        'Transparent lead tracking and reporting',
        'Tailored campaigns that match your brand identity',
        'Scale without adding internal workload'
      ],
      outcomes: [
        'Consistent inbound of qualified brand deals',
        'Reduced acquisition costs',
        'Stronger reputation within your niche'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Discovery: Understanding the Brand DNA',
      description: 'Before anything else, we dive deep into what makes your brand real, your story, audience, voice, and purpose. We identify emotional triggers, cultural opportunities, and strategic positioning to form a foundation for your campaign.',
      outcome: 'Full brand insight deck & creative direction blueprint.',
      icon: '🔍'
    },
    {
      number: 2,
      title: 'Strategy: Designing for Impact',
      description: 'We turn insights into a clear action plan. From influencer matchmaking to content roadmap, we design strategies that are data-backed yet emotionally resonant.',
      outcome: 'Campaign strategy map, creator selection matrix, and timeline proposal.',
      icon: '📋'
    },
    {
      number: 3,
      title: 'Creation: Turning Strategy Into Storytelling',
      description: 'Our in-house creators and partners bring your brand vision to life through authentic content and dynamic storytelling, all aligned with your core message and audience psychology.',
      outcome: 'Multi-platform creative suite (UGC, paid media, organic).',
      icon: '🎨'
    },
    {
      number: 4,
      title: 'Execution: Launching the Movement',
      description: 'We launch with precision, managing creators, optimizing timelines, and monitoring every metric in real-time to ensure a high-performing campaign rollout.',
      outcome: 'Measurable growth through authentic influence.',
      icon: '🚀'
    },
    {
      number: 5,
      title: 'Optimization & Insight: Continuous Growth Loop',
      description: 'Post-launch, we don\'t stop. Every campaign is refined through data analysis, creative testing, and psychological insight, ensuring your next move hits even harder.',
      outcome: 'Detailed performance report + next-step scaling strategy.',
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
              <Layers className="w-4 h-4 text-mm-brown" />
              <span className="text-sm font-medium text-mm-ink">Our Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-mm-ink mb-6">
              <span className="gradient-text">Purpose-Driven</span> Growth
              <br />
              for Modern Brands
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We craft creator-led strategies that blend storytelling, culture, and performance, helping brands grow through authenticity, not algorithms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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
                    <h3 className="text-2xl font-bold mb-2 text-mm-ink group-hover:text-mm-brown transition-colors">{service.title}</h3>
                    {service.headline && (
                      <p className="text-lg font-semibold text-mm-brown mb-3 italic">{service.headline}</p>
                    )}
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

                    {/* Unique Advantages (for Outbound Growth Partnerships) */}
                    {service.advantages && (
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-mm-ink mb-2">Unique Advantages:</h4>
                        {service.advantages.map((advantage, advantageIndex) => (
                          <motion.div
                            key={advantageIndex}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={safeMode ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 + advantageIndex * 0.05 }}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-mm-brown flex-shrink-0" />
                            <span className="text-sm text-gray-600">{advantage}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

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

      {/* Process Section - The Munk Method */}
      <section className="section-padding bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mm-ink">
              The Munk Method: <span className="gradient-text">Where Data Meets Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every partnership follows a proven process that blends creativity, community, and performance. We don't just launch campaigns, we build movements that last.
            </p>
          </motion.div>

          {/* Vertical Timeline Layout */}
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={safeMode ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
                className="luxury-card"
              >
                <div className="flex items-start space-x-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-mm-brown to-mm-stone rounded-2xl flex flex-col items-center justify-center">
                      <div className="text-2xl">{step.icon}</div>
                      <div className="text-xs font-bold text-mm-ivory mt-1">{step.number}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-mm-ink">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    {step.outcome && (
                      <div className="bg-mm-brown/10 border-l-4 border-mm-brown pl-4 py-2 rounded-r-lg">
                        <p className="text-sm font-semibold text-mm-ink">
                          → Outcome: <span className="font-normal text-gray-700">{step.outcome}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="text-center mt-12"
          >
            <a
              href="https://calendly.com/matisse-unkel8/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Calendly booking (new tab)"
              data-cta="calendly"
              data-location="services"
              className="inline-flex items-center space-x-2 bg-mm-brown text-mm-ivory px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mm-brown focus:ring-offset-2"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-6 text-gray-600 italic max-w-2xl mx-auto">
              From first conversation to final report, our process is built to create real impact, not empty impressions.
            </p>
          </motion.div>
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
            <a
              href="https://calendly.com/matisse-unkel8/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Calendly booking (new tab)"
              data-cta="calendly"
              data-location="services"
              className="inline-block bg-mm-ivory text-mm-brown px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
