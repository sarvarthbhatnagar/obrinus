import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Play, CheckCircle2, ArrowRight } from 'lucide-react'
import PageMeta from '../../components/PageMeta'
import CTASection from '../../components/CTASection'
import Badge from '../../components/Badge'
import { PRODUCTS } from '../../data/products'
import { BRAND } from '../../config/brand'

const product = PRODUCTS.find((p) => p.id === 'midnight-council')

const ROLES = [
  {
    id: 'mob',
    name: 'Mob',
    faction: 'Faction',
    color: 'from-rose-900/40 to-rose-800/20',
    accent: '#ff4d7d',
    accentBg: 'rgba(255,77,125,0.35)',
    img: '/icons/mc-mob.png',
    description: 'You know your allies. At night the Mob converges on a single target. By day you perform innocence with a smile.',
  },
  {
    id: 'detective',
    name: 'Detective',
    faction: 'Town',
    color: 'from-cyan-900/40 to-cyan-800/20',
    accent: '#3cf0ff',
    accentBg: 'rgba(60,240,255,0.35)',
    img: '/icons/mc-detective.png',
    description: 'Investigate at night. Learn who is Mob. The catch: the truth is powerful, and danger follows anyone who holds it.',
  },
  {
    id: 'guardian',
    name: 'Guardian',
    faction: 'Town',
    color: 'from-emerald-900/40 to-emerald-800/20',
    accent: '#3dffba',
    accentBg: 'rgba(61,255,186,0.35)',
    img: '/icons/mc-guardian.png',
    description: 'Choose who lives through the night. A perfect read can nullify the Mob. A predictable pattern becomes a weakness.',
  },
  {
    id: 'loyalist',
    name: 'Loyalist',
    faction: 'Town',
    color: 'from-amber-900/40 to-amber-800/20',
    accent: '#ffc14a',
    accentBg: 'rgba(255,193,74,0.35)',
    img: '/icons/mc-loyalist.png',
    description: 'No flashy powers, no easy tells. You win by persuasion - the day vote is your weapon, and the council is your stage.',
  },
]

export default function MidnightCouncil() {
  if (!product) return null

  const { name, tagline, overview, features, category, platform, links, color, accentColor } = product

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
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[120px] opacity-50"
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
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-10"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-[13.5px] transition-colors"
            >
              <ArrowLeft size={14} /> Back to Products
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src="/icons/midnight-council-icon.png"
              alt="Midnight Council icon"
              className="w-20 h-20 rounded-[22%] shadow-2xl flex-shrink-0 border border-white/10"
              style={{ boxShadow: `0 12px 40px ${accentColor}30` }}
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="slate">{category}</Badge>
                {platform.map((p) => <Badge key={p} variant="slate">{p}</Badge>)}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                {name}
              </h1>
              <p className="text-slate-400 text-[15px] mt-2 italic">{tagline}</p>
            </motion.div>
          </div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0a0a0f] hover:bg-slate-100 text-[13.5px] font-semibold transition-all duration-200"
            >
              App Store <ExternalLink size={13} />
            </a>
            <a
              href={links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0a0a0f] hover:bg-slate-100 text-[13.5px] font-semibold transition-all duration-200"
            >
              Google Play <ExternalLink size={13} />
            </a>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.11] border border-white/[0.09] text-white text-[13.5px] font-medium transition-all duration-200"
            >
              <Play size={13} /> Watch on YouTube
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Overview + Features ───────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3"
          >
            <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
            <p className="text-slate-400 text-[14.5px] leading-relaxed">{overview}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-2"
          >
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

      {/* ── Roles ─────────────────────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">Four identities. One table.</h2>
          <p className="text-slate-500 text-[14px] mb-8">
            Every player is assigned a hidden role. Each faction has different goals, powers, and tells.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLES.map((role, i) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`flex flex-col rounded-2xl bg-gradient-to-br ${role.color} border border-white/[0.08] overflow-hidden`}
              >
                <div className="p-4 flex items-start justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    {role.faction}
                  </span>
                  <span
                    className="text-[12px] font-bold px-2.5 py-0.5 rounded-full border"
                    style={{ borderColor: role.accentBg, color: role.accent, background: `${role.accentBg}` }}
                  >
                    {role.name}
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center p-4 min-h-[180px]">
                  <img
                    src={role.img}
                    alt={`${role.name} role artwork`}
                    className="w-full max-w-[160px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="p-4 border-t border-white/[0.06]">
                  <h4 className="text-white font-semibold text-[14px] mb-1.5">{role.name}</h4>
                  <p className="text-slate-400 text-[12.5px] leading-relaxed">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hidden Objectives Twist ───────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 lg:p-10 border"
            style={{
              background: 'linear-gradient(135deg, rgba(255,77,125,0.07), rgba(139,92,255,0.06), rgba(60,240,255,0.05))',
              borderColor: 'rgba(255,77,125,0.20)',
            }}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-3 block">
              The twist
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-4 text-balance">
              Hidden objectives and earned powers.
            </h2>
            <p className="text-slate-400 text-[14.5px] leading-relaxed mb-6 max-w-2xl">
              Roles are only the opening move. Midnight Council layers a private mission on top - a
              hidden objective only you can see. Complete it and you unlock a power that can torch a
              vote, slip past daylight pressure, or steal one more breath of night.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  title: 'Personal agenda',
                  body: 'Everyone chases a side mission that rewards gutsy reads, careful timing, and ruthless patience.',
                },
                {
                  title: 'Powers on demand',
                  body: 'Finish the objective and earn leverage that can reshape a single round. Exact tools stay secret.',
                },
                {
                  title: 'Council politics',
                  body: "You're not only hunting faction lines. You're juggling a clock only you can hear.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-black/20 border border-white/[0.07]"
                >
                  <h4 className="text-white font-semibold text-[13.5px] mb-1.5">{item.title}</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── YouTube Video ─────────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Watch the video</h2>
          <div className="rounded-2xl overflow-hidden border border-white/[0.07]" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/dzcSkFDEUAQ"
              title="Midnight Council - official video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* ── Portfolio Callout ─────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-[#12121e] border border-white/[0.07]">
            <p className="text-slate-400 text-[14px]">
              <span className="text-white font-medium">{name}</span> is part of the Obrinus product
              portfolio - built and published by {BRAND.legalName}.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-[13.5px] font-medium transition-colors flex-shrink-0"
            >
              View all products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Get in touch"
          title="Questions about this product or interested in collaborating?"
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="Back to Products"
          secondaryTo="/products"
        />
      </div>
    </>
  )
}
