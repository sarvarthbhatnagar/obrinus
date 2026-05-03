/**
 * Product data — update store links, YouTube URL, descriptions, and features here.
 * All three products are published by Obrinus Technology Limited.
 */

export const PRODUCTS = [
  {
    id: 'midnight-council',
    slug: '/products/midnight-council',
    name: 'Midnight Council',
    tagline: 'Social deduction, elevated. No safe seats.',
    shortDescription:
      'A social deduction and strategy game designed for groups who enjoy mystery, hidden roles, secret objectives, and earned betrayals.',
    overview:
      "Midnight Council turns your next gathering into a high-stakes thriller. Players are assigned hidden roles — Mob, Detective, Guardian, or Loyalist — and must use strategy, reading, and deduction to survive. The twist: every player also carries a private hidden objective. Complete it, and you unlock a power that can reshape the game. One quiet completion can turn a losing day into a theatrical comeback.",
    features: [
      'Four distinct roles: Mob, Detective, Guardian, Loyalist',
      'Hidden objectives layered on top of roles',
      'Power unlocks for completing your private mission',
      'Night phase for secret actions, Day phase for debate and voting',
      'Room code system — one code to join, no accounts required',
      'Designed for 5+ players around a table or on voice calls',
      'iOS and Android with real-time multiplayer',
    ],
    category: 'Social Deduction',
    categoryLabel: 'AI-Powered Gaming',
    platform: ['iOS', 'Android'],
    links: {
      appStore: 'https://apps.apple.com/kz/app/midnight-council/id6761691999',
      playStore: 'https://play.google.com/store/apps/details?id=com.antigravity.midnightcouncil',
      youtube: '#',
    },
    color: 'from-violet-900/40 to-indigo-900/30',
    accentColor: '#8b5cff',
    icon: '/icons/midnight-council-icon.png',
  },
  {
    id: 'survival-rank',
    slug: '/products/survival-rank',
    name: 'Survival Rank',
    tagline: 'AI-powered scenario ranking. Discuss, decide, survive.',
    shortDescription:
      'A multiplayer survival-ranking game where players join a room, face AI-generated scenarios, discuss survival decisions, and earn badges when their instincts beat the group.',
    overview:
      'Survival Rank is an AI-powered multiplayer game built around scenario-based reasoning. Players join a shared room, face a survival scenario, discuss their logic with the group, then each submit a ranked decision. Powered by Gemini AI, the game evaluates rankings, reveals outcomes, and awards badges when your personal read beats the group consensus. Every session is different — and every decision matters.',
    features: [
      'Room-based multiplayer — join with a code, no accounts required',
      'AI-powered scenario generation and evaluation via Gemini',
      'Shared group ranking with individual overrides',
      'Badge system for players who outperform the group consensus',
      'Realtime multiplayer using Supabase Realtime',
      'Drag-and-drop ranking interface',
      'Scenarios designed to spark genuine group discussion',
    ],
    category: 'AI Strategy',
    categoryLabel: 'AI-Powered Gaming',
    platform: ['iOS', 'Android', 'Web'],
    links: {
      appStore: 'https://apps.apple.com/ca/app/survival-rank/id6760982077',
      playStore: 'https://play.google.com/store/apps/details?id=com.survivalrank.app',
      youtube: '#',
    },
    color: 'from-emerald-900/40 to-teal-900/30',
    accentColor: '#34d399',
    icon: '/icons/survival-rank-icon.png',
  },
  {
    id: 'buzz-qr',
    slug: '/products/buzz-qr',
    name: 'Buzz QR Generator',
    tagline: 'The fastest, most intuitive QR code creator — completely free.',
    shortDescription:
      'A fully-featured QR code generator that lets you create beautiful, customized QR codes for links, Wi-Fi, contacts, WhatsApp, and more. No paywalls, no subscriptions.',
    overview:
      'Buzz QR is a clean, fast, and focused tool for creating fully customized QR codes. Design codes with quick style presets, deep color customization, frame styles, and center sticker icons. Export unlimited high-resolution PNGs, share directly, or copy to clipboard. Built with practicality and craft — no hidden paywalls, no limits on exports.',
    features: [
      'Encode web links, Wi-Fi, contacts (vCard), WhatsApp, and plain text',
      'Quick style presets: Midnight, Ocean, Forest, Aurora, and more',
      'Deep customization: ink/paper colors, finder eyes, data dot shapes',
      'Frame styles: Aurora, Sunset, Neon gradient rings',
      'Center sticker icons for WhatsApp, YouTube, Wi-Fi, Contact',
      'Unlimited high-res PNG downloads — no paywalls',
      'Privacy-first: no data collected, no tracking',
    ],
    category: 'Utility',
    categoryLabel: 'Utility',
    platform: ['iOS', 'Android', 'Web'],
    links: {
      appStore: 'https://apps.apple.com/ca/app/buzz-qr-generator/id6762408289',
      playStore: 'https://play.google.com/store/apps/details?id=com.obrinus.buzzqr',
      youtube: '#',
    },
    color: 'from-cyan-900/40 to-sky-900/30',
    accentColor: '#06b6d4',
    icon: '/icons/buzz-qr-icon.png',
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: 'gaming',
    label: 'AI-Powered Gaming',
    description:
      'Multiplayer experiences built around social dynamics, strategic reasoning, and intelligent game design.',
    products: ['midnight-council', 'survival-rank'],
  },
  {
    id: 'utility',
    label: 'Utility',
    description: 'Practical tools designed to make everyday digital tasks faster and more elegant.',
    products: ['buzz-qr'],
  },
]
