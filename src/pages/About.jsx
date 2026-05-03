import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, BrainCircuit, Smartphone, BarChart3, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import StatsStrip from '../components/StatsStrip'
import PageMeta from '../components/PageMeta'
import { SEO, BRAND } from '../config/brand'

const FOCUS_AREAS = [
  {
    icon: Building2,
    title: 'Consulting & Architecture',
    description:
      'Solution architecture, delivery leadership, platform design, and technical advisory across complex initiatives.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Agentic Systems',
    description:
      'Use case discovery, agentic workflow design, prompt engineering, API/MCP integration, and responsible AI patterns.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Product Development',
    description:
      'Designing and shipping mobile apps and digital products - from concept through to App Store and Google Play.',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description:
      'Platform design for analytics, business intelligence, real-time data ingestion, and decision-support tooling.',
  },
]

const SNAPSHOT = [
  { label: 'Incorporated', value: BRAND.incorporated },
  { label: 'Focus', value: 'Consulting + digital products' },
  { label: 'Experience', value: 'Enterprise and consumer technology' },
  { label: 'Location', value: BRAND.location },
  { label: 'Approach', value: 'Practical, modern delivery' },
]

export default function About() {
  return (
    <>
      <PageMeta title={SEO.about.title} description={SEO.about.description} />

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/[0.05] blur-[100px]" />
          <div className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-4"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5 text-balance"
          >
            About {BRAND.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-slate-400 text-[16px] leading-relaxed max-w-xl mx-auto"
          >
            A technology venture and consulting company focused on practical innovation.
          </motion.p>
        </div>
      </section>

      {/* ── Company Story ─────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">
                Our story
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-6 text-balance">
                From consulting roots to a broader technology venture.
              </h2>
              <div className="space-y-4 text-slate-400 text-[15px] leading-relaxed">
                <p>
                  {BRAND.legalName} was incorporated in 2022 and began as a technology consulting
                  business delivering hands-on technical leadership and solution development. Over
                  time, the business expanded into a broader venture focused on consulting, product
                  development, AI experimentation, and digital solutions.
                </p>
                <p>
                  Today, {BRAND.name} represents that broader vision - bringing together consulting
                  depth, product thinking, and modern AI and cloud capabilities to help organizations
                  and users benefit from thoughtful technology.
                </p>
              </div>
            </motion.div>

            {/* Snapshot grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-[#12121e] border border-white/[0.07] overflow-hidden"
            >
              <div className="p-6 border-b border-white/[0.06]">
                <h3 className="text-white font-semibold text-[15px]">Company snapshot</h3>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {SNAPSHOT.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-6 py-4">
                    <span className="text-slate-500 text-[13.5px]">{item.label}</span>
                    <span className="text-white text-[13.5px] font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission / Approach ────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600/[0.08] to-cyan-600/[0.05] border border-blue-500/[0.15] p-10 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">
                Our approach
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-5 text-balance">
                Technology should create clarity, efficiency, and meaningful user value.
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                Whether we are building internal workflows, advising on AI adoption, or shipping
                mobile products, our approach is grounded in practical use cases, strong architecture,
                and responsible design. We do not over-engineer - we focus on what delivers real value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Focus Areas ──────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Focus areas"
            title="What we focus on."
            subtitle="Four interconnected areas that define our work and expertise."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FOCUS_AREAS.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group p-7 rounded-2xl bg-[#12121e] border border-white/[0.07] hover:border-blue-500/25 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-400">
                  <area.icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-[16px] mb-2.5">{area.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <StatsStrip />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Work with us"
          title="Interested in working with Obrinus?"
          subtitle="Whether you need consulting support, are exploring AI adoption, or want to discuss a project - we would be glad to talk."
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="View Services"
          secondaryTo="/consulting"
        />
      </div>
    </>
  )
}
