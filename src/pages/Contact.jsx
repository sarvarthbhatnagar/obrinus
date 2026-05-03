import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YoutubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0f" />
    </svg>
  )
}
import ContactForm from '../components/ContactForm'
import PageMeta from '../components/PageMeta'
import { SEO, BRAND } from '../config/brand'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'General inquiries',
    value: BRAND.email.general,
    href: `mailto:${BRAND.email.general}`,
  },
  {
    icon: Mail,
    label: 'Partnerships',
    value: BRAND.email.partnerships,
    href: `mailto:${BRAND.email.partnerships}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: `linkedin.com/company/obrinus`,
    href: BRAND.social.linkedin,
    external: true,
  },
  {
    icon: YoutubeIcon,
    label: 'YouTube',
    value: `youtube.com/@obrinus`,
    href: BRAND.social.youtube,
    external: true,
  },
]

export default function Contact() {
  return (
    <>
      <PageMeta title={SEO.contact.title} description={SEO.contact.description} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/[0.05] blur-[110px]" />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5 text-balance"
          >
            Let&apos;s build something practical.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-slate-400 text-[16px] leading-relaxed max-w-lg mx-auto"
          >
            Whether you are exploring AI, product development, or consulting support, we would love
            to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-white font-semibold text-[17px] mb-1.5">
                  Get in touch
                </h2>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  We respond promptly to all inquiries. Use the form or contact us directly at any
                  of the channels below.
                </p>
              </div>

              <div className="space-y-3">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.value}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#12121e] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[12px] mb-0.5">{item.label}</p>
                      <p className="text-white text-[13.5px] font-medium group-hover:text-blue-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response promise */}
              <div className="p-4 rounded-xl bg-blue-500/[0.06] border border-blue-500/15">
                <p className="text-blue-300 text-[13px] leading-relaxed">
                  We aim to respond to all inquiries within one to two business days.
                </p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-2xl bg-[#12121e] border border-white/[0.07]">
                <h2 className="text-white font-semibold text-[17px] mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
