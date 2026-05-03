import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '../config/brand'
import OBLogo from './OBLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Wordmark */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Obrinus Group home">
              <OBLogo size={34} className="drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.4)] transition-all duration-300" />
              <span className="text-white font-semibold text-[17px] tracking-tight leading-none">
                {BRAND.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {BRAND.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3.5 py-2 rounded-md text-[14px] font-medium transition-colors duration-200 ${
                    isActive(item.to)
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[13.5px] font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
              >
                Book a Consultation
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-[#0f0f1a]/98 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl">
              <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {BRAND.nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
                      isActive(item.to)
                        ? 'text-white bg-white/[0.08]'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3 pb-1 border-t border-white/[0.06] mt-2">
                  <Link
                    to="/contact"
                    className="w-full flex justify-center items-center px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[14px] font-semibold transition-all duration-200"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
