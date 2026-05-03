import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Play, CheckCircle2, ArrowRight } from 'lucide-react'
import Badge from '../../components/Badge'
import CTASection from '../../components/CTASection'

export default function ProductDetail({ product }) {
  if (!product) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <p className="text-slate-400">Product not found.</p>
        <Link to="/products" className="mt-4 inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm transition-colors">
          <ArrowLeft size={14} /> Back to Products
        </Link>
      </div>
    )
  }

  const { name, tagline, overview, features, category, platform, links, color, accentColor } = product

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-60"
            style={{ background: `radial-gradient(circle, ${accentColor}15, transparent 70%)` }}
          />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back link */}
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
            {/* Icon */}
            {product.icon ? (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={product.icon}
                alt={`${name} icon`}
                className="w-20 h-20 rounded-[22%] object-cover shadow-2xl flex-shrink-0 border border-white/10"
                style={{ boxShadow: `0 12px 40px ${accentColor}30` }}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-4xl font-bold shadow-2xl flex-shrink-0 border`}
                style={{ borderColor: `${accentColor}30`, color: accentColor }}
              >
                {name[0]}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="slate">{category}</Badge>
                {platform.map((p) => (
                  <Badge key={p} variant="slate">{p}</Badge>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                {name}
              </h1>
              <p className="text-slate-400 text-[15px] mt-2">{tagline}</p>
            </motion.div>
          </div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="flex flex-wrap gap-3"
          >
            {links.appStore !== '#' ? (
              <a
                href={links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0a0a0f] hover:bg-slate-100 text-[13.5px] font-semibold transition-all duration-200"
              >
                App Store <ExternalLink size={13} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-600 border border-white/[0.04] text-[13.5px] font-medium cursor-default">
                App Store
              </span>
            )}
            {links.playStore !== '#' ? (
              <a
                href={links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0a0a0f] hover:bg-slate-100 text-[13.5px] font-semibold transition-all duration-200"
              >
                Google Play <ExternalLink size={13} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-600 border border-white/[0.04] text-[13.5px] font-medium cursor-default">
                Google Play
              </span>
            )}
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-600 border border-white/[0.04] text-[13.5px] font-medium cursor-default">
              <Play size={13} /> Video coming soon
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Overview + Features ───────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Overview */}
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

          {/* Features */}
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

      {/* ── Screenshot Placeholder ────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Screenshots</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: n * 0.06 }}
                className={`aspect-[9/16] rounded-2xl bg-gradient-to-br ${color} border border-white/[0.08] flex items-center justify-center`}
              >
                <span className="text-slate-500 text-[11px]">Screenshot {n}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Placeholder ─────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Watch the video</h2>
          {links.youtube !== '#' ? (
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src={links.youtube.replace('watch?v=', 'embed/')}
                title={`${name} video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className={`aspect-video rounded-2xl bg-gradient-to-br ${color} border border-white/[0.08] flex items-center justify-center`}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: `${accentColor}50`, background: `${accentColor}15` }}
                >
                  <Play size={24} style={{ color: accentColor }} />
                </div>
                <p className="text-slate-500 text-[13px]">Video coming soon</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Portfolio Callout ─────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-[#12121e] border border-white/[0.07]">
            <p className="text-slate-400 text-[14px]">
              <span className="text-white font-medium">{name}</span> is part of the Obrinus product
              portfolio — built and published by Obrinus Group.
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Get in touch"
          title="Interested in this product or want to discuss a project?"
          subtitle="We are happy to answer questions about our products or discuss how we can help you build something."
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="Back to Products"
          secondaryTo="/products"
        />
      </div>
    </>
  )
}
