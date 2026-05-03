import { motion } from 'framer-motion'
import PageMeta from '../components/PageMeta'
import { BRAND } from '../config/brand'

const SECTIONS = [
  {
    title: 'Use of this website',
    content:
      'By accessing and using this website, you accept these terms and conditions in full. If you do not agree with any part of these terms, you must not use this website. This website is intended for informational purposes and to allow you to contact us regarding our services.',
  },
  {
    title: 'Intellectual property',
    content: `All content on this website - including text, design, graphics, and code - is the property of ${BRAND.legalName} unless otherwise stated. You may not reproduce, distribute, or use any content from this website without our written permission.`,
  },
  {
    title: 'No warranties',
    content:
      'This website is provided on an "as is" basis. We make no representations or warranties, express or implied, regarding the accuracy, completeness, or fitness of the content for any particular purpose. We reserve the right to update or remove content at any time without notice.',
  },
  {
    title: 'Limitation of liability',
    content: `${BRAND.legalName} will not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of, or inability to use, this website or any linked third-party resources.`,
  },
  {
    title: 'Third-party links',
    content:
      'Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.',
  },
  {
    title: 'Governing law',
    content:
      'These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.',
  },
  {
    title: 'Changes to these terms',
    content:
      'We may update these terms from time to time. Continued use of the website after changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.',
  },
  {
    title: 'Contact',
    content: `For questions about these terms, contact us at ${BRAND.email.general}.`,
  },
]

export default function Terms() {
  return (
    <>
      <PageMeta
        title={`Terms of Use | ${BRAND.name}`}
        description={`Terms of use for the ${BRAND.name} website.`}
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
              Terms of Use
            </h1>
            <p className="text-slate-500 text-[14px]">Last updated: January 2024</p>
            <p className="text-slate-400 text-[14.5px] leading-relaxed mt-4">
              These terms of use govern your access to and use of the {BRAND.name} website operated
              by {BRAND.legalName}. Please read them carefully.
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
