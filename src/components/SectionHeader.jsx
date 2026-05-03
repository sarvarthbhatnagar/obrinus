import { motion } from 'framer-motion'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${alignClasses[align]} ${className}`}
    >
      {eyebrow && (
        <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-tight tracking-tight text-balance">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-slate-400 text-[15px] leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
