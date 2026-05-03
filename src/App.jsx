import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Consulting from './pages/Consulting'
import AISolutions from './pages/AISolutions'
import Products from './pages/Products'
import MidnightCouncil from './pages/products/MidnightCouncil'
import SurvivalRank from './pages/products/SurvivalRank'
import QRUtility from './pages/products/QRUtility'
import BuzzQR from './pages/products/BuzzQR'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-blue-400 mb-3">404</p>
      <h1 className="text-4xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-slate-400 text-[15px] mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14.5px] transition-colors"
      >
        Go home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/midnight-council" element={<MidnightCouncil />} />
          <Route path="/products/survival-rank" element={<SurvivalRank />} />
          <Route path="/products/qr-utility" element={<QRUtility />} />
          <Route path="/products/buzz-qr" element={<BuzzQR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
