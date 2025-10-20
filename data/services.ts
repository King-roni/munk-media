export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  outcomes: string[]
  colorGradient: string
}

export const services: Service[] = [
  {
    id: 'influencer-campaigns',
    title: 'Influencer Campaigns',
    description: 'End-to-end campaign management with our curated selection of premium influencers. We handle everything from strategy to execution and reporting.',
    icon: 'Users',
    features: [
      'Strategic campaign planning & positioning',
      'Influencer vetting, negotiation & contracting',
      'Content approval & brand alignment',
      'Performance tracking & optimization',
      'Detailed analytics & reporting',
    ],
    outcomes: [
      'Average 300% ROI across campaigns',
      '95% campaign success rate',
      'Reach millions of targeted consumers',
      'Build authentic brand partnerships',
    ],
    colorGradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ugc-production',
    title: 'UGC Production',
    description: 'Professional user-generated content that feels authentic. We create scroll-stopping content that converts while maintaining your brand voice.',
    icon: 'Camera',
    features: [
      'UGC campaign design & brief creation',
      'Creator recruitment & management',
      'Content production & editing',
      'Rights management & licensing',
      'Multi-platform optimization',
    ],
    outcomes: [
      '50+ pieces of content per campaign',
      '2x higher engagement vs. branded content',
      'Lifetime content usage rights',
      'Ready-to-use assets for paid social',
    ],
    colorGradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'creator-management',
    title: 'Creator Management',
    description: 'Build and manage long-term relationships with creators who become true brand ambassadors. From onboarding to ongoing collaboration.',
    icon: 'TrendingUp',
    features: [
      'Creator discovery & vetting',
      'Contract negotiation & legal',
      'Campaign coordination & logistics',
      'Relationship management',
      'Performance tracking & insights',
    ],
    outcomes: [
      'Access to 500+ vetted creators',
      'Exclusive partnership opportunities',
      'Consistent brand messaging',
      'Lower acquisition costs over time',
    ],
    colorGradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'paid-social-amplification',
    title: 'Paid Social Amplification',
    description: 'Maximize your influencer content ROI by amplifying top-performing posts through paid social channels.',
    icon: 'Layers',
    features: [
      'Content whitelisting & permissions',
      'Strategic ad campaign setup',
      'A/B testing & optimization',
      'Audience targeting & retargeting',
      'Cross-platform amplification',
    ],
    outcomes: [
      '3-5x increase in content reach',
      'Lower CPM vs. branded content',
      'Extended content lifespan',
      'Improved conversion rates',
    ],
    colorGradient: 'from-orange-500 to-red-500',
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}

