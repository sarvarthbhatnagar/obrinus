import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const INQUIRY_TYPES = [
  'Consulting Engagement',
  'AI Solutions',
  'Product Inquiry',
  'Partnership',
  'Other',
]

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  inquiryType: '',
  message: '',
}

function validate(fields) {
  const errs = {}
  if (!fields.name.trim()) errs.name = 'Name is required.'
  if (!fields.email.trim()) {
    errs.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errs.email = 'Please enter a valid email address.'
  }
  if (!fields.message.trim()) errs.message = 'Message is required.'
  if (fields.message.trim().length > 0 && fields.message.trim().length < 20) {
    errs.message = 'Please provide a bit more detail (at least 20 characters).'
  }
  return errs
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('submitting')

    try {
      // Replace this URL with your Formspree endpoint or preferred email service
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (name) =>
    `w-full bg-white/[0.04] border ${
      errors[name] ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.09] focus:border-blue-500/60'
    } rounded-xl px-4 py-3 text-white text-[14px] placeholder-slate-600 outline-none transition-colors duration-200`

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-16 gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
              <CheckCircle2 size={28} className="text-emerald-400" />
            </div>
            <h3 className="text-white text-xl font-semibold">Message received</h3>
            <p className="text-slate-400 text-[14px] max-w-xs">
              Thank you for reaching out. We will be in touch shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-blue-400 hover:text-blue-300 text-[13.5px] font-medium transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[12.5px] font-medium text-slate-400 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={fieldClass('name')}
                />
                {errors.name && <p className="mt-1.5 text-[12px] text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[12.5px] font-medium text-slate-400 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={fieldClass('email')}
                />
                {errors.email && <p className="mt-1.5 text-[12px] text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-[12.5px] font-medium text-slate-400 mb-1.5">
                  Company <span className="text-slate-600">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className={fieldClass('company')}
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-[12.5px] font-medium text-slate-400 mb-1.5">
                  Inquiry type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  className={`${fieldClass('inquiryType')} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-[#12121e]">Select a topic…</option>
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[#12121e]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-[12.5px] font-medium text-slate-400 mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, or questions…"
                className={`${fieldClass('message')} resize-none`}
              />
              {errors.message && (
                <p className="mt-1.5 text-[12px] text-red-400">{errors.message}</p>
              )}
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-[13px]">
                <AlertCircle size={15} className="flex-shrink-0" />
                Something went wrong. Please email us directly at info@obrinusgroup.com.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold text-[14.5px] transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
