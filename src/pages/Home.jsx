import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  BarChart3,
  Layers,
  Zap,
  GitBranch,
  Shield,
  Code2,
  Database,
  CheckCircle2,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CapabilityCard from '../components/CapabilityCard'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import StatsStrip from '../components/StatsStrip'
import PageMeta from '../components/PageMeta'
import { SEO } from '../config/brand'
import { PRODUCTS } from '../data/products'

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'Enterprise Consulting Experience',
    description:
      'Hands-on delivery leadership across complex enterprise data, analytics, and platform initiatives.',
  },
  {
    icon: Code2,
    title: 'Published Mobile Products',
    description:
      'Designed and shipped real apps to the App Store and Google Play - combining creativity with product engineering.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Agentic Systems',
    description:
      'Practical AI adoption, workflow design, agentic orchestration, and API/MCP integration patterns.',
  },
  {
    icon: Database,
    title: 'Cloud, API & Data Integration',
    description:
      'Architecture and delivery of cloud-connected, API-driven, and data-enriched solutions.',
  },
]

const SERVICES = [
  {
    icon: Layers,
    title: 'Technology Consulting',
    description:
      'Architecture, data integration, cloud-connected systems, and digital solution delivery for modern business needs.',
    to: '/consulting',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Agentic Solutions',
    description:
      'AI strategy, Claude-powered prototypes, agentic workflows, orchestration patterns, governance, and API/MCP-based integration.',
    to: '/ai-solutions',
  },
  {
    icon: Code2,
    title: 'Product Studio',
    description:
      'Designing and shipping practical digital products, mobile apps, utilities, and game experiences.',
    to: '/products',
  },
]

const ENTERPRISE_CAPABILITIES = [
  { title: 'Real-time data ingestion and processing' },
  { title: 'Client analytics portals and decision-support platforms' },
  { title: 'CRM and business data enrichment' },
  { title: 'Dashboarding, intelligence, and workflow enablement' },
]

const AI_CAPABILITIES = [
  { icon: BrainCircuit, title: 'AI Use Case Discovery' },
  { icon: GitBranch, title: 'Prompt & workflow design' },
  { icon: Zap, title: 'Agentic orchestration' },
  { icon: Layers, title: 'API / MCP integration patterns' },
  { icon: Shield, title: 'Governance and responsible AI controls' },
  { icon: Code2, title: 'Prototyping and implementation support' },
]

const WHY_OBRINUS = [
  'Blend of consulting, architecture, and hands-on delivery',
  'Experience across enterprise data, AI, and app development',
  'Product mindset grounded in business understanding',
  'Practical, implementation-focused approach',
  'Comfortable across strategy, design, and execution',
]

export default function Home() {
  return (
    <>
      <PageMeta title={SEO.home.title} description={SEO.home.description} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-blue-600/[0.06] blur-[120px]" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />
          <div className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[12px] font-medium mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  AI · Consulting · Digital Products
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight text-balance mb-6"
              >
                Building practical AI, digital products, and{' '}
                <span className="gradient-text">enterprise-grade</span> technology solutions.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-slate-400 text-[16px] leading-relaxed mb-10 max-w-lg text-balance"
              >
                Obrinus Group helps organizations design and deliver AI-powered workflows,
                enterprise analytics platforms, cloud-integrated systems, and mobile products -
                combining consulting depth with hands-on product execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="flex flex-wrap gap-3.5"
              >
                <Link
                  to="/consulting"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14.5px] transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35"
                >
                  Explore Our Services
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.10] text-white font-medium text-[14.5px] transition-all duration-200"
                >
                  View Products
                </Link>
              </motion.div>
            </div>

            {/* Right panel - abstract UI cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Main card */}
                <div className="rounded-2xl bg-[#12121e] border border-white/[0.08] p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2 h-2 rounded-full bg-red-500/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <div className="w-2 h-2 rounded-full bg-green-500/70" />
                    <div className="flex-1 mx-3 h-5 rounded bg-white/[0.04] border border-white/[0.06] flex items-center px-2">
                      <span className="text-slate-600 text-[10px]">ai-workflow.config</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'AI Use Case', status: 'Identified', color: 'text-green-400', dot: 'bg-green-400' },
                      { label: 'Agentic Workflow', status: 'Designing', color: 'text-blue-400', dot: 'bg-blue-400' },
                      { label: 'API Integration', status: 'Connected', color: 'text-cyan-400', dot: 'bg-cyan-400' },
                      { label: 'Governance Layer', status: 'Active', color: 'text-teal-400', dot: 'bg-teal-400' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.025] border border-white/[0.05]">
                        <span className="text-slate-400 text-[13px]">{row.label}</span>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${row.dot} animate-pulse`} />
                          <span className={`text-[12px] font-medium ${row.color}`}>{row.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-[#12121e] border border-blue-500/30 rounded-xl px-4 py-2.5 shadow-xl shadow-blue-500/10"
                >
                  <p className="text-[11px] text-slate-500 mb-0.5">Delivery approach</p>
                  <p className="text-white text-[13px] font-semibold">Consulting + product</p>
                </motion.div>

                {/* Floating stat */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-5 -left-4 bg-[#12121e] border border-cyan-500/20 rounded-xl px-4 py-2.5 shadow-xl"
                >
                  <p className="text-[11px] text-slate-500 mb-0.5">Enterprise experience</p>
                  <p className="text-white text-[13px] font-semibold">Capital markets · Data</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Credibility Strip ──────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group p-5 rounded-2xl bg-[#12121e] border border-white/[0.07] hover:border-blue-500/20 transition-all duration-300"
              >
                <item.icon size={20} className="text-blue-400 mb-3" />
                <h3 className="text-white font-semibold text-[14.5px] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What we do"
            title="Three core focus areas."
            subtitle="From enterprise consulting to AI workflows and shipped products - we operate across the full technology delivery spectrum."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Labs & Published Work ─────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-5 flex-wrap gap-4">
            <SectionHeader
              eyebrow="Labs & Published Work"
              title="Built and shipped by Obrinus."
              subtitle="Alongside consulting, we design and publish live digital products - demonstrating the same engineering standards and product thinking we bring to enterprise work."
              align="left"
              className="mb-0"
            />
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-[14px] font-medium transition-colors flex-shrink-0"
            >
              View all work <ArrowRight size={15} />
            </Link>
          </div>

          {/* Category label */}
          <div className="flex flex-wrap gap-2 mb-8 mt-8">
            {[
              { label: 'AI-Powered Gaming', active: true },
              { label: 'Utility Apps', active: true },
              { label: 'Technical Insights', active: false, soon: true },
            ].map((tag) => (
              <span
                key={tag.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
                  tag.active
                    ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                    : 'bg-white/[0.03] border-white/[0.06] text-slate-600'
                }`}
              >
                {tag.label}
                {tag.soon && (
                  <span className="text-[10px] text-slate-600 font-normal">soon</span>
                )}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise Experience ─────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">
                Enterprise experience
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-5 text-balance">
                Built on real enterprise delivery experience.
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
                Obrinus brings experience from complex enterprise technology initiatives, including
                leading delivery for client analytics and data-driven platforms in regulated financial
                environments. This includes designing and delivering solutions that ingest near
                real-time trade and client activity data, enrich business intelligence, and provide
                actionable insights for front-office and relationship teams.
              </p>
              <Link
                to="/consulting"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-[14px] transition-colors"
              >
                View consulting capabilities <ArrowRight size={15} />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ENTERPRISE_CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.025] border border-white/[0.06]"
                >
                  <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-[13.5px] leading-snug">{cap.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI / Agentic ──────────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/[0.04] blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            eyebrow="AI & Agentic"
            title="From AI exploration to real implementation."
            subtitle="We help businesses translate AI interest into practical solutions - from identifying use cases to designing agentic workflows, integrating enterprise tools, and building safe, scalable prototypes."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {AI_CAPABILITIES.map((cap, i) => (
              <CapabilityCard key={cap.title} icon={cap.icon} title={cap.title} delay={i * 0.06} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/ai-solutions"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-[14px] transition-colors"
            >
              Explore AI capabilities <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Company Stats ─────────────────────────────────────── */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <StatsStrip />
        </div>
      </section>

      {/* ── Why Obrinus ───────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 gap-3">
              {WHY_OBRINUS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.06 }}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.10] transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={13} className="text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-[14px]">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">
                Why teams work with us
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-5 text-balance">
                Why teams work with Obrinus.
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
                We combine the strategic clarity of consulting with the delivery mindset of a product
                team - giving you the blend of thinking and execution that most engagements need.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-[14px] transition-colors"
              >
                About Obrinus Group <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Get started"
          title="Looking to build something meaningful with AI, data, or digital products?"
          subtitle="Whether you are exploring AI adoption, need enterprise consulting support, or want to discuss a product idea - we would like to hear from you."
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="View Consulting Services"
          secondaryTo="/consulting"
        />
      </div>
    </>
  )
}
