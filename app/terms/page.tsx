'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useMotion } from '@/components/MotionProvider'

export default function TermsPage() {
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
            <h1 className="text-4xl lg:text-6xl font-bold text-mm-ink mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using Munk Media's services, you accept and agree to be bound by the 
                  terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Services Description</h2>
                <p className="mb-4">
                  Munk Media provides influencer marketing services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Influencer campaign management</li>
                  <li>UGC production and content creation</li>
                  <li>Creator network access and management</li>
                  <li>Paid social amplification</li>
                  <li>Performance tracking and reporting</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Client Responsibilities</h2>
                <p className="mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing accurate project requirements and brand guidelines</li>
                  <li>Timely approval of content and campaign materials</li>
                  <li>Payment according to agreed terms</li>
                  <li>Compliance with applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Payment Terms</h2>
                <p className="mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>50% deposit required before campaign launch</li>
                  <li>Remaining balance due upon campaign completion</li>
                  <li>Payment methods: Bank transfer, credit card, or PayPal</li>
                  <li>Late payment fees may apply</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Intellectual Property</h2>
                <p>
                  All content created as part of our services remains the property of the client, 
                  subject to any third-party rights. Munk Media retains the right to use campaign 
                  results for marketing purposes with client consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Limitation of Liability</h2>
                <p>
                  Munk Media's liability is limited to the amount paid for services. We are not 
                  responsible for indirect damages, lost profits, or consequential damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Termination</h2>
                <p>
                  Either party may terminate services with 30 days written notice. 
                  Immediate termination may occur for breach of contract or non-payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-mm-ink mb-4">Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-mm-stone/30 rounded-lg p-4 mt-4">
                  <p><strong>Email:</strong> legal@munkmedia.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> New York, NY</p>
                </div>
              </div>

              <div className="text-sm text-gray-500 pt-8 border-t border-mm-stone">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
