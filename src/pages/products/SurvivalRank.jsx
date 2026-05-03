import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight, Zap, Users, Trophy } from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import Badge from '../../components/Badge'
import { PRODUCTS } from '../../data/products'
import { BRAND } from '../../config/brand'

const product = PRODUCTS.find((p) => p.id === 'survival-rank')

const HOW_IT_WORKS = [
  {
    icon: Users,
    title: 'Join a room',
    description: 'Create or join a game room with a short code. No accounts - just jump in.',
  },
  {
    icon: Zap,
    title: 'Face a scenario',
    description: 'An AI-generated survival scenario is presented to the group. Discuss your logic.',
  },
  {
    icon: Trophy,
    title: 'Rank and earn',
    description: 'Submit your ranking. See how the group voted. Earn a badge if your read beats the consensus.',
  },
]

export default function SurvivalRank() {
  if (!product) return null

  const { name, tagline, overview, features, category, platform, links, color, accentColor, icon } = product

  return (
    <>
      <PageMeta
        title={`${name} | Products | ${BRAND.name}`}
        description={product.shortDescription}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[130px] opacity-40"
            style={{ background: `radial-gradient(circle, ${accentColor}20, transparent 70%)` }}
          />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="mb-10">
            <Link to="/products" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-[13.5px] transition-colors">
              <ArrowLeft size={14} /> Back to Products
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            {icon && (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={icon}
                alt={`${name} icon`}
                className="w-20 h-20 rounded-[22%] object-cover shadow-2xl flex-shrink-0 border border-white/10"
                style={{ boxShadow: `0 12px 40px ${accentColor}30` }}
              />
            )}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.06 }}>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="green">{category}</Badge>
                <Badge variant="cyan">AI-Powered</Badge>
                {platform.map((p) => <Badge key={p} variant="slate">{p}</Badge>)}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">{name}</h1>
              <p className="text-slate-400 text-[15px] mt-2">{tagline}</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.14 }} className="flex flex-wrap gap-3">
            <a href={links.appStore} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0a0a0f] hover:bg-slate-100 text-[13.5px] font-semibold transition-all duration-200">
              App Store <ExternalLink size={13} />
            </a>
            <a href={links.playStore} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0a0a0f] hover:bg-slate-100 text-[13.5px] font-semibold transition-all duration-200">
              Google Play <ExternalLink size={13} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Overview + Features ───────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="lg:col-span-3">
            <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
            <p className="text-slate-400 text-[14.5px] leading-relaxed">{overview}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">Key features</h2>
            <ul className="space-y-2.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-slate-400 text-[13.5px]">
                  <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-[#12121e] border border-white/[0.07] relative"
              >
                <div className="absolute top-4 right-4 text-[11px] font-bold text-slate-600">0{i + 1}</div>
                <div className="w-9 h-9 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30`, color: accentColor }}>
                  <step.icon size={16} />
                </div>
                <h3 className="text-white font-semibold text-[14.5px] mb-2">{step.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Callout ────────────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 lg:p-10 border border-emerald-500/15"
            style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.06), rgba(6,182,212,0.04))' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}25`, color: accentColor }}>
                <Zap size={17} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-2">AI-Powered</p>
                <h3 className="text-white font-semibold text-[17px] mb-3 text-balance">Gemini AI drives every scenario.</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed max-w-2xl">
                  Survival Rank uses Google Gemini to generate and evaluate scenarios dynamically. This means no
                  two sessions feel the same, and rankings are scored intelligently rather than against a fixed
                  answer key. It is an example of how frontier AI can make games more alive, more replayable,
                  and more genuinely engaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Callout ─────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-[#12121e] border border-white/[0.07]">
            <p className="text-slate-400 text-[14px]">
              <span className="text-white font-medium">{name}</span> is part of the Obrinus product portfolio - built and published by {BRAND.legalName}.
            </p>
            <Link to="/products" className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-[13.5px] font-medium transition-colors flex-shrink-0">
              View all products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Get in touch"
          title="Questions about Survival Rank or interested in collaborating?"
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="Back to Products"
          secondaryTo="/products"
        />
      </div>
    </>
  )
}
