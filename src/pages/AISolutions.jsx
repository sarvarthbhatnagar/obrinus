import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BrainCircuit,
  Search,
  GitBranch,
  Plug,
  Shield,
  FlaskConical,
  Zap,
  Settings2,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CapabilityCard from '../components/CapabilityCard'
import CTASection from '../components/CTASection'
import PageMeta from '../components/PageMeta'
import { SEO } from '../config/brand'

const SERVICES = [
  { icon: Search, title: 'AI Readiness & Use Case Discovery', description: 'Identify high-value, feasible opportunities where AI can improve speed, insight, or user experience within your operations.' },
  { icon: FlaskConical, title: 'Claude-powered Prototypes', description: 'Build demonstrable prototypes using frontier AI models to validate value before wider rollout.' },
  { icon: GitBranch, title: 'Agentic Workflow Design', description: 'Design intelligent workflows where AI can reason, decide, and interact with tools in a controlled and auditable way.' },
  { icon: BrainCircuit, title: 'Prompt & Interaction Design', description: 'Engineer effective prompts, interaction patterns, and model instructions for reliable, high-quality outputs.' },
  { icon: Plug, title: 'API / MCP Tool Integration', description: 'Enable AI systems to securely interact with enterprise tools, APIs, and operational systems through principled integration patterns.' },
  { icon: Shield, title: 'Governance & Responsible AI Patterns', description: 'Guide adoption using scoped access, human-in-the-loop design, clear auditability, and data minimization principles.' },
  { icon: Zap, title: 'AI Automation for Internal Operations', description: 'Identify and implement AI-assisted automation for knowledge work, reporting, triage, and internal tooling.' },
  { icon: Settings2, title: 'Advisory for Architecture and Rollout', description: 'Provide architectural guidance and rollout planning to help teams move from prototype to production responsibly.' },
]

const DETAILED = [
  {
    icon: Search,
    title: 'AI Use Case Discovery',
    description:
      'Identify high-value, feasible opportunities where AI can improve speed, insight, or user experience. We help teams evaluate readiness, prioritize use cases, and build a realistic path to implementation.',
  },
  {
    icon: GitBranch,
    title: 'Agentic Orchestration',
    description:
      'Design workflows where AI can reason, decide, and interact with tools in a controlled way. We focus on architecturally sound patterns that remain explainable, auditable, and safe.',
  },
  {
    icon: Plug,
    title: 'API & MCP Integration',
    description:
      'Enable AI systems to securely interact with enterprise tools, APIs, and operational systems. We design integration layers that expose the right capabilities while maintaining security and control.',
  },
  {
    icon: Shield,
    title: 'Governance & Safety',
    description:
      'Guide adoption using principles such as scoped access, human-in-the-loop design, clear auditability, and data minimization. Responsible AI is an architecture decision, not an afterthought.',
  },
  {
    icon: FlaskConical,
    title: 'Prototype Delivery',
    description:
      'Build demonstrable prototypes that help teams validate value before wider rollout. We move quickly from concept to working demonstration, with a focus on real-world usability.',
  },
  {
    icon: Lightbulb,
    title: 'Prompt & Interaction Design',
    description:
      'Engineer effective prompts, system instructions, and interaction patterns for consistent, high-quality AI outputs across different model types and deployment contexts.',
  },
]

const INTERNAL_PATTERNS = [
  'Activity logging support and contextual awareness',
  'Intelligent task and context identification',
  'Exposing tools and business actions to AI through API-based designs',
  'MCP-based integration patterns for enterprise tool access',
]

export default function AISolutions() {
  return (
    <>
      <PageMeta title={SEO.ai.title} description={SEO.ai.description} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[600px] rounded-full bg-cyan-600/[0.05] blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/[0.04] blur-[100px]" />
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
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-cyan-400 mb-4"
          >
            AI & Agentic Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5 text-balance"
          >
            AI consulting and agentic solution design for{' '}
            <span className="gradient-text">practical business outcomes.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-slate-400 text-[16px] leading-relaxed max-w-xl mx-auto mb-10"
          >
            We help organizations identify meaningful AI opportunities and turn them into secure,
            implementable solutions — without the hype.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14.5px] transition-all duration-200 shadow-lg shadow-blue-600/25"
            >
              Talk to us about AI adoption
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/consulting"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.10] text-white font-medium text-[14.5px] transition-all duration-200"
            >
              View consulting services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-600/[0.07] to-blue-600/[0.05] border border-cyan-500/[0.12] p-10 lg:p-14">
            <div className="max-w-2xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-cyan-400 mb-3">
                Our approach
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-5 text-balance">
                Practical AI adoption, not hype.
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                Our AI work focuses on practical adoption. We help businesses identify use cases,
                design intelligent workflows, expose the right systems and tools to AI, and build
                prototypes that can evolve toward production. The goal is always: real value, properly
                governed, built on sound architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Capabilities"
            title="What we offer."
            subtitle="End-to-end AI advisory and implementation — from strategy through to working prototypes."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Capabilities ─────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="In depth"
            title="Core capability areas."
            align="left"
            className="mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {DETAILED.map((cap, i) => (
              <CapabilityCard
                key={cap.title}
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Innovation Block ─────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-cyan-400 mb-3">
                Internal innovation
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-5 text-balance">
                Patterns we have explored internally.
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                Obrinus has explored internal AI-assisted workflow concepts including activity
                logging support, intelligent task and context identification, and patterns for
                exposing tools and business actions to AI systems through API- and MCP-based designs.
                This hands-on exploration informs how we advise clients.
              </p>
            </motion.div>
            <div className="space-y-3">
              {INTERNAL_PATTERNS.map((pattern, i) => (
                <motion.div
                  key={pattern}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/20 transition-colors"
                >
                  <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-[13.5px]">{pattern}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── On Modern AI / Frontier Models ───────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-[#12121e] border border-white/[0.07] p-10 lg:p-12">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 mt-1">
                <BrainCircuit size={18} />
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-1.5">
                  On frontier AI models
                </p>
                <h3 className="text-white font-semibold text-[17px] leading-snug text-balance">
                  Using modern AI capabilities responsibly.
                </h3>
              </div>
            </div>
            <p className="text-slate-400 text-[14.5px] leading-relaxed max-w-3xl">
              We are interested in modern frontier AI models because they unlock practical new
              workflows in knowledge work, assistance, automation, and internal operations. Our
              focus is on using these capabilities responsibly, with the right architectural and
              governance patterns — ensuring that AI systems are predictable, auditable, and aligned
              with the needs of the organization.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Let's talk"
          title="Ready to explore practical AI adoption?"
          subtitle="We help teams identify the right use cases, design safe workflows, and build demonstrable solutions. Let us start with a conversation."
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="View Consulting Services"
          secondaryTo="/consulting"
        />
      </div>
    </>
  )
}
