import { motion } from 'framer-motion'
import PageMeta from '../components/PageMeta'
import { BRAND } from '../config/brand'

const SECTIONS = [
  {
    title: 'Information we collect',
    content:
      'When you use our website or contact us, we may collect information you voluntarily provide — such as your name, email address, company name, and message content submitted through our contact form. We may also collect standard technical information such as browser type, referring URLs, and general usage data through analytics services.',
  },
  {
    title: 'How we use your information',
    content:
      'We use the information you provide to respond to your inquiries, fulfil requests you make, and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    title: 'Cookies and analytics',
    content:
      'Our website may use cookies and analytics tools to understand how visitors use the site. This information is used in aggregate form to improve the website experience. You may disable cookies through your browser settings, though this may affect some website functionality.',
  },
  {
    title: 'Third-party services',
    content:
      'Our contact form may use third-party services to process submissions. These services have their own privacy policies and we encourage you to review them. We select services that meet reasonable data protection standards.',
  },
  {
    title: 'Data retention',
    content:
      'We retain contact and inquiry information only as long as necessary to respond to your request and manage any resulting engagement. We do not retain personal information longer than necessary for these purposes.',
  },
  {
    title: 'Your rights',
    content:
      'You may contact us at any time to request access to, correction of, or deletion of any personal information we hold about you. We will respond to such requests promptly and in accordance with applicable law.',
  },
  {
    title: 'Contact',
    content: `If you have any questions about this Privacy Policy, please contact us at ${BRAND.email.general}.`,
  },
]

export default function Privacy() {
  return (
    <>
      <PageMeta
        title={`Privacy Policy | ${BRAND.name}`}
        description={`Privacy policy for ${BRAND.name} — how we collect, use, and protect your information.`}
      />

      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-[14px]">
              Last updated: {BRAND.incorporated === '2022' ? 'January 2024' : 'January 2024'}
            </p>
            <p className="text-slate-400 text-[14.5px] leading-relaxed mt-4">
              {BRAND.legalName} (&quot;{BRAND.name}&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is committed to protecting your privacy. This policy describes how we
              collect and use information through our website and services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-t border-white/[0.06] pt-8"
              >
                <h2 className="text-white font-semibold text-[16px] mb-3">{section.title}</h2>
                <p className="text-slate-400 text-[14.5px] leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
