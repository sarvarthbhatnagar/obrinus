import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Badge from './Badge'

function StoreButton({ href, label, disabled }) {
  if (disabled || href === '#') {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-slate-600 text-[12px] font-medium cursor-default">
        {label}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] text-slate-300 hover:text-white text-[12px] font-medium transition-all duration-200"
    >
      {label} <ExternalLink size={11} />
    </a>
  )
}

export default function ProductCard({ product, delay = 0 }) {
  const { name, tagline, shortDescription, category, platform, links, slug, color, accentColor, icon } = product

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col rounded-2xl bg-[#12121e] border border-white/[0.07] overflow-hidden hover:border-white/[0.14] hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
    >
      {/* Header area */}
      <div className={`relative h-40 bg-gradient-to-br ${color} flex items-center justify-center overflow-hidden px-6`}>
        <div className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
          }}
        />
        {icon ? (
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-20 h-20 rounded-[22%] object-cover shadow-2xl relative z-10 border border-white/10"
            style={{ boxShadow: `0 12px 40px ${accentColor}30` }}
          />
        ) : (
          <div
            className="w-18 h-18 w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-3xl font-bold shadow-2xl relative z-10"
            style={{ borderColor: `${accentColor}40`, backgroundColor: `${accentColor}15`, color: accentColor }}
          >
            {name[0]}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="text-white font-semibold text-[16.5px] leading-snug">{name}</h3>
          <Badge variant="slate">{category}</Badge>
        </div>
        <p className="text-slate-400 text-[13px] mb-3 font-medium">{tagline}</p>
        <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-5">
          {shortDescription}
        </p>

        {/* Platform badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {platform.map((p) => (
            <span
              key={p}
              className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.08]"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Link
            to={slug}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.11] border border-white/[0.09] text-white text-[13px] font-medium transition-all duration-200"
          >
            View details
            <ArrowRight size={13} />
          </Link>
          <StoreButton href={links.appStore} label="App Store" />
          <StoreButton href={links.playStore} label="Google Play" />
        </div>
      </div>
    </motion.div>
  )
}
