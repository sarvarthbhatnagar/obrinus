import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight } from 'lucide-react'
import OBLogo from './OBLogo'

function LinkedinIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YoutubeIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0f" />
    </svg>
  )
}
import { BRAND } from '../config/brand'

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Consulting', to: '/consulting' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'AI Solutions', to: '/ai-solutions' },
      { label: 'Products', to: '/products' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Use', to: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-4" aria-label="Obrinus Group">
              <OBLogo size={34} />
              <span className="text-white font-semibold text-[17px] tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="text-slate-500 text-[14px] leading-relaxed max-w-xs mt-3">
              {BRAND.tagline}
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-md bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-md bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <YoutubeIcon size={15} />
              </a>
              <a
                href={`mailto:${BRAND.email.general}`}
                aria-label="Email"
                className="w-8 h-8 rounded-md bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="text-white text-[12px] font-semibold uppercase tracking-widest mb-5">
                {section.heading}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-500 hover:text-slate-300 text-[14px] transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-slate-600 text-[13px]">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <p className="text-slate-700 text-[12px]">
              Operated through {BRAND.legalName}
            </p>
          </div>
          <p className="text-slate-600 text-[13px]">
            <a
              href={`mailto:${BRAND.email.general}`}
              className="hover:text-slate-400 transition-colors"
            >
              {BRAND.email.general}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
