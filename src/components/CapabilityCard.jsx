import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function CapabilityCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay }}
      className="group flex gap-4 p-5 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-300"
    >
      <div className="flex-shrink-0 mt-0.5">
        {Icon ? (
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Icon size={15} />
          </div>
        ) : (
          <CheckCircle2 size={18} className="text-blue-400 mt-0.5" />
        )}
      </div>
      <div>
        <h4 className="text-white font-medium text-[14.5px] mb-1 leading-snug">{title}</h4>
        {description && (
          <p className="text-slate-500 text-[13.5px] leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  )
}
