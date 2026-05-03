import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Gamepad2, Wrench, BookOpen, Rss } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import PageMeta from '../components/PageMeta'
import { SEO } from '../config/brand'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products'

const INSIGHTS_TOPICS = [
  {
    tag: 'AI & Agentic Systems',
    title: 'Designing agentic workflows: principles and patterns',
    excerpt:
      'How to think about AI agents that reason, act, and interact with enterprise tools — and the architectural decisions that make them trustworthy.',
  },
  {
    tag: 'Enterprise Data',
    title: 'From raw data to decision support: the analytics platform journey',
    excerpt:
      'What it takes to build a platform that transforms transactional, CRM, and market data into actionable intelligence for business users.',
  },
  {
    tag: 'Product Development',
    title: 'Shipping to the App Store: what the engineering process actually looks like',
    excerpt:
      'A practical look at going from concept to published product — architecture decisions, platform constraints, and lessons learned from real releases.',
  },
]

const CATEGORY_ICONS = {
  gaming: Gamepad2,
  utility: Wrench,
}

export default function Products() {
  return (
    <>
      <PageMeta title={SEO.products.title} description={SEO.products.description} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-indigo-600/[0.05] blur-[110px]" />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-4"
          >
            Labs & Published Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5 text-balance"
          >
            Built, shipped, and published by Obrinus.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-slate-400 text-[16px] leading-relaxed max-w-2xl mx-auto"
          >
            Alongside our consulting and AI work, we design and publish digital products that
            demonstrate what strong product engineering, creative design, and thoughtful UX actually
            look like in practice. These are live products — on the App Store and Google Play.
          </motion.p>
        </div>
      </section>

      {/* ── Why Products Matter ───────────────────────────────── */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Gamepad2,
                title: 'Applied AI in gaming',
                description: 'Games are a natural proving ground for intelligent design — turn management, role logic, and outcome systems that mirror real AI workflow thinking.',
              },
              {
                icon: Wrench,
                title: 'Utility with craft',
                description: 'Tools that solve real problems deserve real polish. Our utility apps apply the same engineering standards we bring to enterprise work.',
              },
              {
                icon: BookOpen,
                title: 'Builder credibility',
                description: 'We do not just advise on digital products — we build and ship them. That gives our consulting perspective a practical, grounded edge.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-[#12121e] border border-white/[0.07]"
              >
                <item.icon size={18} className="text-blue-400 mb-3" />
                <h3 className="text-white font-semibold text-[14.5px] mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ────────────────────────────────── */}
      {PRODUCT_CATEGORIES.map((cat) => {
        const catProducts = PRODUCTS.filter((p) => cat.products.includes(p.id))
        const CatIcon = CATEGORY_ICONS[cat.id] || Wrench

        return (
          <section key={cat.id} className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <CatIcon size={15} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-[17px] leading-none">{cat.label}</h2>
                  <p className="text-slate-500 text-[13px] mt-0.5">{cat.description}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {catProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} delay={i * 0.08} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Insights / Writing ────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Rss size={15} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-[17px] leading-none">Insights & Writing</h2>
                <p className="text-slate-500 text-[13px] mt-0.5">
                  Technical and industry perspectives from the Obrinus team.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-medium">
              Coming soon
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {INSIGHTS_TOPICS.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col p-6 rounded-2xl bg-[#12121e] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-300 cursor-default"
              >
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-500 text-[11px] font-medium mb-4 w-fit">
                  {post.tag}
                </span>
                <h3 className="text-white font-semibold text-[14.5px] leading-snug mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-slate-600 text-[12.5px] font-medium flex items-center gap-1.5">
                  Article coming soon
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Builder Mindset ───────────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-[#12121e] to-[#0f1525] border border-white/[0.07] p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">
                  Our mindset
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-5 text-balance">
                  Consulting depth, product execution.
                </h2>
                <p className="text-slate-400 text-[15px] leading-relaxed">
                  Our product and publishing work is not separate from our consulting identity — it
                  is an expression of it. Every app we ship reflects the same technical standards,
                  design thinking, and delivery discipline that we bring to enterprise engagements.
                  When we advise clients on product development or AI implementation, we speak from
                  direct experience.
                </p>
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Live on App Store', value: '2+' },
                  { label: 'Live on Google Play', value: '2+' },
                  { label: 'Product categories', value: '2' },
                  { label: 'Engineering stack', value: 'Flutter · React' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="p-5 rounded-xl bg-white/[0.025] border border-white/[0.06] text-center"
                  >
                    <p className="text-white font-bold text-xl mb-1">{stat.value}</p>
                    <p className="text-slate-500 text-[12px]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <CTASection
          eyebrow="Get in touch"
          title="Interested in our work or want to collaborate?"
          subtitle="Whether you want to discuss a product partnership, consulting engagement, or just want to say hello — we would love to hear from you."
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="View Consulting"
          secondaryTo="/consulting"
        />
      </div>
    </>
  )
}
