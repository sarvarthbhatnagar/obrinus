import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Layers,
  Database,
  GitMerge,
  LayoutDashboard,
  Users,
  Workflow,
  CheckCircle2,
  Building2,
  TrendingUp,
  Code2,
  BarChart3,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CapabilityCard from '../components/CapabilityCard'
import CTASection from '../components/CTASection'
import PageMeta from '../components/PageMeta'
import { SEO } from '../config/brand'

const SERVICES = [
  { icon: Layers, title: 'Solution Architecture', description: 'Designing scalable, maintainable systems with clear separation of concerns and strong integration patterns.' },
  { icon: Database, title: 'Data & Analytics Platforms', description: 'End-to-end design and delivery of platforms that surface business intelligence from complex data sources.' },
  { icon: GitMerge, title: 'API and Integration Design', description: 'Connecting systems through well-designed APIs, event-driven patterns, and reliable data pipelines.' },
  { icon: LayoutDashboard, title: 'Digital Product Advisory', description: 'Shaping digital product strategy, requirements, and delivery - from early vision to execution.' },
  { icon: Users, title: 'Delivery Leadership', description: 'Hands-on technical and delivery leadership across cross-functional projects and programs.' },
  { icon: Workflow, title: 'Workflow Modernization', description: 'Identifying and redesigning manual or inefficient workflows through automation and modern tooling.' },
]

const DETAILED_SERVICES = [
  {
    title: 'Enterprise Data & Analytics',
    description:
      'Design and delivery of platforms that combine transactional, CRM, and business data into actionable intelligence for end users and decision makers. This includes data modelling, ingestion pipelines, aggregation layers, and front-end analytical experiences.',
    bullets: ['Multi-source data integration', 'Real-time and batch ingestion patterns', 'Business intelligence layers', 'User-facing portal design'],
  },
  {
    title: 'Delivery Leadership & Solution Execution',
    description:
      'Hands-on leadership across requirements definition, technical design, delivery planning, and solution implementation. We work alongside teams to ensure strong architectural decisions and reliable delivery outcomes.',
    bullets: ['Requirements and technical scoping', 'Architecture documentation', 'Delivery planning and stakeholder alignment', 'Implementation oversight and review'],
  },
  {
    title: 'Integration & Workflow Systems',
    description:
      'Designing connected systems using APIs, event-driven patterns, workflow automation, and operational data flows. We help teams move from siloed tools to well-integrated, maintainable systems.',
    bullets: ['API design and documentation', 'Event-driven architecture patterns', 'Workflow automation design', 'Operational data connectivity'],
  },
  {
    title: 'Product and Application Development',
    description:
      'Helping shape and build digital products from concept to implementation - from requirements and product design through to engineering and release.',
    bullets: ['Product scoping and roadmapping', 'Technical architecture', 'Mobile and web application development', 'Release and iteration planning'],
  },
]

const CASE_STUDY_BULLETS = [
  'Multi-source data ingestion and harmonization',
  'Business intelligence and insight generation',
  'User-centric portal and dashboard experience',
  'Delivery leadership from design through execution',
]

const INDUSTRIES = [
  { icon: Building2, label: 'Financial Services' },
  { icon: TrendingUp, label: 'Capital Markets' },
  { icon: Code2, label: 'Technology businesses' },
  { icon: Database, label: 'Data-intensive teams' },
  { icon: BarChart3, label: 'Product-led organizations' },
  { icon: LayoutDashboard, label: 'Digital-native companies' },
]

export default function Consulting() {
  return (
    <>
      <PageMeta title={SEO.consulting.title} description={SEO.consulting.description} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/[0.05] blur-[110px]" />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
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
            Consulting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5 text-balance"
          >
            Technology consulting grounded in real delivery experience.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-slate-400 text-[16px] leading-relaxed max-w-xl mx-auto mb-10"
          >
            We help businesses design and deliver modern systems across data, analytics, cloud
            integration, and digital products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14.5px] transition-all duration-200 shadow-lg shadow-blue-600/25"
            >
              Discuss a consulting engagement
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Services"
            title="What we help with."
            subtitle="Practical technology consulting across the areas that matter most to modern businesses."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Services ─────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="In detail"
            title="Service areas in depth."
            align="left"
            className="mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {DETAILED_SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="p-7 rounded-2xl bg-[#12121e] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300"
              >
                <h3 className="text-white font-semibold text-[17px] mb-3">{service.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-slate-400 text-[13.5px]">
                      <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Style Block ────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-[#12121e] to-[#0f1525] border border-blue-500/[0.12] overflow-hidden">
            <div className="p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">
                    Representative experience
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-6 text-balance">
                    Representative consulting experience.
                  </h2>
                  <p className="text-slate-400 text-[14.5px] leading-relaxed">
                    Led delivery for a client analytics and intelligence platform in the capital
                    markets domain, supporting front-office users with enriched client, revenue,
                    interaction, and market-related insights. The solution involved integrating data
                    from multiple internal and external sources, supporting near real-time ingestion
                    patterns, and enabling richer analytics and dashboards for business stakeholders.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {CASE_STUDY_BULLETS.map((b, i) => (
                    <motion.div
                      key={b}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.38, delay: i * 0.07 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.025] border border-white/[0.06]"
                    >
                      <CheckCircle2 size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-[13.5px]">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Context"
            title="Industries and environments."
            subtitle="We bring relevant experience across these domains and business contexts."
            className="mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-[#12121e] border border-white/[0.07] hover:border-white/[0.12] transition-colors"
              >
                <ind.icon size={20} className="text-blue-400 mb-2.5" />
                <span className="text-slate-400 text-[12.5px] leading-snug">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Get in touch"
          title="Ready to discuss a consulting engagement?"
          subtitle="We work with businesses to scope, design, and deliver practical technology solutions. Let us talk about your needs."
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="View AI Solutions"
          secondaryTo="/ai-solutions"
        />
      </div>
    </>
  )
}
