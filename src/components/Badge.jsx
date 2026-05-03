export default function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    teal: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    slate: 'bg-white/[0.06] text-slate-400 border-white/[0.08]',
    green: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11.5px] font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
