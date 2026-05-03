import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        {eyebrow && (
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-4">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-5">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-400 text-[15px] leading-relaxed mb-10 max-w-xl mx-auto text-balance">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {primaryTo && (
            <Link
              to={primaryTo}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14.5px] transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
          )}
          {secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.09] border border-white/[0.10] text-white font-medium text-[14.5px] transition-all duration-200"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  )
}
