/**
 * Munk Media Voice & Tone System
 * Enforces brand messaging standards across content
 */

// Brand Slogans (from brandbook)
export const SLOGANS = {
  main: "Together we build the future of marketing.",
  supporting: [
    "We are the movement.",
    "Turning ideas into impact.",
    "From creativity to culture.",
    "Real people. Real stories. Real growth.",
    "We don't follow trends, we create them.",
    "Where creativity meets community.",
    "Culture moves fast. We move faster.",
  ],
} as const

// Tone of Voice Guidelines
export const TONE = {
  open: "Open but intentional",
  creative: "Creative not careless",
  clear: "Clear not complicated",
  confident: "Confident not arrogant",
  real: "Real not rehearsed",
} as const

// Voice Principle
export const VOICE_PRINCIPLE = 
  "We speak to move people, not to impress; words should feel like movement, human, powerful, true to Munk."

// Messaging Values
export const VALUES = {
  valueOverVolume: "Value over volume",
  authenticity: "Authenticity",
  creativity: "Creativity",
  movement: "Movement",
} as const

// CTA Helpers (on-brand CTAs)
export const CTAs = {
  primary: "Book a Discovery Call",
  secondary: "Get a Demo",
  explore: "Explore Our Work",
  connect: "Start a Project",
  learn: "Learn More",
} as const

// Voice Checker
export interface VoiceCheckResult {
  valid: boolean
  warnings: string[]
  suggestions: string[]
}

/**
 * Check if text follows brand voice guidelines
 */
export function checkVoice(text: string): VoiceCheckResult {
  const warnings: string[] = []
  const suggestions: string[] = []

  // Check length (short sentences preferred)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0)
  if (sentences.some(s => s.trim().length > 100)) {
    warnings.push("Sentence exceeds 100 characters - keep it short and clear")
    suggestions.push("Break into shorter sentences")
  }

  // Check for passive voice
  const passiveIndicators = ['was', 'were', 'been', 'being', 'be']
  const words = text.toLowerCase().split(/\s+/)
  const passiveCount = words.filter(w => passiveIndicators.includes(w)).length
  if (passiveCount > words.length * 0.1) {
    warnings.push("High use of passive voice - use active voice for clarity")
  }

  // Check for filler/fluff
  const fluffWords = ['very', 'really', 'just', 'quite', 'rather', 'somewhat']
  const fluffCount = words.filter(w => fluffWords.includes(w)).length
  if (fluffCount > 0) {
    warnings.push("Filler words detected - remove for clearer, bolder messaging")
  }

  // Check for all-caps (should be sentence case)
  if (text !== text.toLowerCase() && text === text.toUpperCase()) {
    warnings.push("All-caps detected - use sentence case for brand consistency")
  }

  // Check for emojis in brand-level copy
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27FF]|[\u2700-\u27BF]/g
  if (emojiRegex.test(text)) {
    warnings.push("Emojis found - use only in social/community context, not brand-level copy")
  }

  return {
    valid: warnings.length === 0,
    warnings,
    suggestions,
  }
}

/**
 * Enforce sentence case for headlines
 */
export function enforceSentenceCase(headline: string): string {
  // Don't lowercase if it's already proper sentence case
  if (headline.length > 0 && headline[0] === headline[0].toUpperCase()) {
    return headline
  }

  // Convert to sentence case
  const words = headline.toLowerCase().split(/\s+/)
  if (words.length > 0) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
  }
  return words.join(' ')
}

/**
 * Get on-brand CTA text
 */
export function getCTA(key: keyof typeof CTAs): string {
  return CTAs[key]
}

/**
 * Writing Style Guidelines
 * Bold, clear, human; short sentences; clarity first; no filler; action-driven language
 */
export const WRITING_STYLE = {
  bold: true,
  clear: true,
  human: true,
  shortSentences: true,
  clarityFirst: true,
  noFiller: true,
  actionDriven: true,
} as const

