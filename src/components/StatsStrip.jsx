import { motion } from 'framer-motion'

const STATS = [
  { value: '2022', label: 'Year incorporated' },
  { value: '3+', label: 'Published products' },
  { value: 'Enterprise', label: 'Consulting depth' },
  { value: 'Canada', label: 'Headquartered' },
]

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-[#0f0f1a] px-6 py-6 flex flex-col items-center text-center"
        >
          <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
          <span className="text-slate-500 text-[12.5px] mt-1">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
