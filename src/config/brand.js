/**
 * Brand configuration — swap values here to rebrand the entire site globally.
 * Primary brand: Obrinus Group
 * Legal entity:  Obrinus Technologies Limited
 */

export const BRAND = {
  name: 'Obrinus Group',
  legalName: 'Obrinus Technologies Limited',
  tagline: 'Technology consulting, AI solutions, and digital product development.',
  domain: 'obrinusgroup.com',
  incorporated: '2022',
  location: 'Canada',

  email: {
    general: 'info@obrinusgroup.com',
    partnerships: 'partners@obrinusgroup.com',
  },

  social: {
    linkedin: 'https://linkedin.com/company/obrinus',
    youtube: 'https://youtube.com/@obrinus',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Consulting', to: '/consulting' },
    { label: 'AI Solutions', to: '/ai-solutions' },
    { label: 'Products', to: '/products' },
    { label: 'Contact', to: '/contact' },
  ],
}

export const SEO = {
  home: {
    title: `${BRAND.name} | AI, Technology Consulting & Digital Products`,
    description:
      'Obrinus Group is a technology venture and consulting company focused on AI-powered solutions, agentic workflows, enterprise analytics, and digital product development.',
  },
  about: {
    title: `About | ${BRAND.name}`,
    description:
      'Learn about Obrinus Group — a technology venture and consulting company incorporated in Canada in 2022, focused on consulting, AI, and digital product development.',
  },
  consulting: {
    title: `Consulting | ${BRAND.name}`,
    description:
      'Technology consulting grounded in real delivery experience — architecture, data & analytics, integration design, and digital product advisory.',
  },
  ai: {
    title: `AI & Agentic Solutions | ${BRAND.name}`,
    description:
      'AI consulting and agentic solution design for practical business outcomes — use case discovery, agentic orchestration, API/MCP integration, and responsible AI patterns.',
  },
  products: {
    title: `Products | ${BRAND.name}`,
    description:
      'Digital products built and published by Obrinus Group — including Midnight Council, Survival Rank, and QR Utility.',
  },
  contact: {
    title: `Contact | ${BRAND.name}`,
    description:
      'Get in touch with Obrinus Group for consulting inquiries, AI advisory, product partnerships, and general questions.',
  },
}
