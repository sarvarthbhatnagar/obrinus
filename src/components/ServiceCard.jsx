import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  to,
  delay = 0,
  variant = 'default',
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      className="group relative h-full rounded-2xl bg-[#12121e] border border-white/[0.07] p-7 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/[0.06] flex flex-col"
    >
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-400 group-hover:border-blue-500/40 transition-colors duration-300">
          <Icon size={18} />
        </div>
      )}
      <h3 className="text-white font-semibold text-[16.5px] mb-2.5 leading-snug">{title}</h3>
      <p className="text-slate-500 text-[14px] leading-relaxed flex-1">{description}</p>
      {to && (
        <div className="mt-5 flex items-center gap-1.5 text-blue-400 text-[13.5px] font-medium group-hover:text-blue-300 transition-colors">
          Learn more
          <ArrowRight
            size={14}
            className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
          />
        </div>
      )}
    </motion.div>
  )

  if (to) {
    return (
      <Link to={to} className="block h-full" aria-label={`Learn more about ${title}`}>
        {content}
      </Link>
    )
  }

  return content
}
