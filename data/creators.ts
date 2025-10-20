export interface Creator {
  id: string
  name: string
  category: string
  platforms: string[]
  followers: string
  engagementRate: string
  niches: string[]
  reachTier: 'micro' | 'mid' | 'macro' | 'mega'
  avatar?: string
}

export const creators: Creator[] = [
  {
    id: 'fashion-style-1',
    name: 'Sophia Laurent',
    category: 'Fashion & Style',
    platforms: ['Instagram', 'TikTok'],
    followers: '2.5M',
    engagementRate: '8.2%',
    niches: ['Fashion', 'Luxury', 'Lifestyle'],
    reachTier: 'macro',
  },
  {
    id: 'lifestyle-wellness-1',
    name: 'Maya Chen',
    category: 'Wellness & Lifestyle',
    platforms: ['YouTube', 'Instagram'],
    followers: '1.8M',
    engagementRate: '9.5%',
    niches: ['Wellness', 'Fitness', 'Mindfulness'],
    reachTier: 'macro',
  },
  {
    id: 'beauty-skincare-1',
    name: 'Isabella Rose',
    category: 'Beauty & Skincare',
    platforms: ['TikTok', 'Instagram'],
    followers: '3.2M',
    engagementRate: '11.3%',
    niches: ['Beauty', 'Skincare', 'Makeup'],
    reachTier: 'macro',
  },
  {
    id: 'travel-adventure-1',
    name: 'Alex Rivera',
    category: 'Travel & Adventure',
    platforms: ['Instagram', 'YouTube'],
    followers: '1.5M',
    engagementRate: '7.8%',
    niches: ['Travel', 'Adventure', 'Photography'],
    reachTier: 'macro',
  },
  {
    id: 'fitness-health-1',
    name: 'Marcus Stone',
    category: 'Fitness & Health',
    platforms: ['YouTube', 'Instagram'],
    followers: '2.1M',
    engagementRate: '10.2%',
    niches: ['Fitness', 'Nutrition', 'Wellness'],
    reachTier: 'macro',
  },
  {
    id: 'food-lifestyle-1',
    name: 'Elena Russo',
    category: 'Food & Lifestyle',
    platforms: ['Instagram', 'TikTok'],
    followers: '1.9M',
    engagementRate: '9.1%',
    niches: ['Food', 'Culinary', 'Lifestyle'],
    reachTier: 'macro',
  },
  {
    id: 'tech-gadgets-1',
    name: 'David Kim',
    category: 'Tech & Innovation',
    platforms: ['YouTube', 'Twitter'],
    followers: '950K',
    engagementRate: '6.8%',
    niches: ['Tech', 'Gadgets', 'Reviews'],
    reachTier: 'mid',
  },
  {
    id: 'home-decor-1',
    name: 'Olivia Brooks',
    category: 'Home & Decor',
    platforms: ['Instagram', 'Pinterest'],
    followers: '780K',
    engagementRate: '8.9%',
    niches: ['Interior Design', 'Home Decor', 'DIY'],
    reachTier: 'mid',
  },
]

export const categories = [
  'All',
  'Fashion & Style',
  'Beauty & Skincare',
  'Wellness & Lifestyle',
  'Travel & Adventure',
  'Fitness & Health',
  'Food & Lifestyle',
  'Tech & Innovation',
  'Home & Decor',
]

export const reachTiers = [
  { value: 'all', label: 'All Reach Tiers' },
  { value: 'micro', label: 'Micro (10K-100K)' },
  { value: 'mid', label: 'Mid-Tier (100K-1M)' },
  { value: 'macro', label: 'Macro (1M-5M)' },
  { value: 'mega', label: 'Mega (5M+)' },
]

export function getCreatorsByCategory(category: string): Creator[] {
  if (category === 'All') return creators
  return creators.filter((c) => c.category === category)
}

export function getCreatorsByReachTier(tier: string): Creator[] {
  if (tier === 'all') return creators
  return creators.filter((c) => c.reachTier === tier)
}

