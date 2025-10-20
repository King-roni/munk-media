export interface CaseStudy {
  slug: string
  title: string
  client: string
  category: string
  challenge: string
  solution: string
  results: {
    reach?: string
    engagement?: string
    conversions?: string
    roi?: string
    views?: string
    roas?: string
    revenueLift?: string
    cpa?: string
    cvr?: string
  }
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  image?: string
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'high-growth-fashion-brand',
    title: 'High-Growth Fashion Brand',
    client: 'Premium Fashion Co.',
    category: 'Fashion & Beauty',
    challenge: 'Increase brand awareness among Gen Z consumers and drive online sales during Q4 holiday season.',
    solution: 'Multi-platform influencer campaign with 25 micro and macro influencers across Instagram, TikTok, and YouTube. Created authentic content showcasing product styling and unboxing experiences.',
    results: {
      reach: '2.4M',
      engagement: '8.7%',
      conversions: '12.3%',
      roi: '340%',
      views: '3.2M',
      roas: '4.2x',
      revenueLift: '+185%',
      cpa: '$12.50',
      cvr: '12.3%',
    },
    testimonial: {
      quote: 'Munk Media delivered exceptional results that exceeded our expectations. The influencer partnerships felt authentic and drove real revenue.',
      author: 'Sarah Chen',
      role: 'CMO, Premium Fashion Co.',
    },
    image: '/case-studies/fashion-brand.jpg',
    featured: true,
  },
  {
    slug: 'wellness-supplement-launch',
    title: 'Wellness Supplement Launch',
    client: 'VitalityBoost',
    category: 'Health & Wellness',
    challenge: 'Launch a new supplement line and build credibility in a crowded market with limited brand awareness.',
    solution: 'Partnered with 15 health and fitness influencers to create educational content and authentic product reviews. Implemented a UGC campaign encouraging customer testimonials.',
    results: {
      reach: '1.8M',
      engagement: '11.2%',
      conversions: '15.7%',
      roi: '420%',
      views: '2.1M',
      roas: '5.3x',
      revenueLift: '+220%',
      cpa: '$8.90',
      cvr: '15.7%',
    },
    testimonial: {
      quote: 'The influencer strategy was spot-on. We exceeded our launch goals by 200% in the first month.',
      author: 'Marcus Johnson',
      role: 'Founder, VitalityBoost',
    },
    featured: false,
  },
  {
    slug: 'luxury-skincare-awareness',
    title: 'Luxury Skincare Brand Awareness',
    client: 'LuxeDerm',
    category: 'Beauty & Skincare',
    challenge: 'Expand into the US market and build brand recognition among high-net-worth consumers.',
    solution: 'Curated partnerships with 10 premium beauty influencers known for luxury content. Focus on long-form YouTube reviews and Instagram Stories showcasing the product experience.',
    results: {
      reach: '3.1M',
      engagement: '9.5%',
      conversions: '8.9%',
      roi: '380%',
      views: '4.5M',
      roas: '4.8x',
      revenueLift: '+165%',
      cpa: '$18.20',
      cvr: '8.9%',
    },
    testimonial: {
      quote: 'Munk Media understood our premium positioning and connected us with influencers who truly aligned with our brand values.',
      author: 'Isabella Martinez',
      role: 'Marketing Director, LuxeDerm',
    },
    featured: false,
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured)
}

