import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Admin from './pages/Admin'

const Home            = lazy(() => import('./pages/Home'))
const ServicesHub     = lazy(() => import('./pages/ServicesHub'))
const ServiceCategory = lazy(() => import('./pages/ServiceCategory'))
const ServiceDetail   = lazy(() => import('./pages/ServiceDetail'))
const Pricing         = lazy(() => import('./pages/Pricing'))
const About           = lazy(() => import('./pages/About'))
const Contact         = lazy(() => import('./pages/Contact'))
const PrivacyPolicy   = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService  = lazy(() => import('./pages/TermsOfService'))
const RefundPolicy    = lazy(() => import('./pages/RefundPolicy'))
const Disclaimer      = lazy(() => import('./pages/Disclaimer'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12">
          <svg viewBox="0 0 36 36" fill="none" className="animate-spin" style={{ animationDuration: '1.5s' }}>
            <rect x="2" y="2" width="32" height="32" rx="8" fill="#4a7c59"/>
            <path d="M10 24 L14 12 L18 20 L22 15 L26 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="26" cy="12" r="3" fill="#d4a017"/>
          </svg>
        </div>
        <span className="font-sketch text-lg text-muted">Loading...</span>
      </div>
    </div>
  )
}

function LayoutWrapper({ children }) {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')
  return (
    <>
      {!isAdmin && <Navbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <LayoutWrapper>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/"                              element={<Home />} />
            <Route path="/services"                      element={<ServicesHub />} />
            <Route path="/services/:category"            element={<ServiceCategory />} />
            <Route path="/services/:category/:service"   element={<ServiceDetail />} />
            <Route path="/pricing"                       element={<Pricing />} />
            <Route path="/about"                         element={<About />} />
            <Route path="/contact"                       element={<Contact />} />
            <Route path="/admin"                         element={<Admin />} />
            <Route path="/privacy-policy"               element={<PrivacyPolicy />} />
            <Route path="/terms-of-service"             element={<TermsOfService />} />
            <Route path="/refund-policy"                element={<RefundPolicy />} />
            <Route path="/disclaimer"                   element={<Disclaimer />} />
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center text-center pt-20 px-6">
                <span className="font-sketch text-8xl text-sage-pale mb-4">404</span>
                <h1 className="font-display text-4xl font-bold text-ink mb-3">Page not found</h1>
                <p className="text-muted font-light mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="bg-sage text-white px-6 py-3 rounded-full font-body font-medium hover:bg-sage-dark transition-colors">Go Home</a>
              </div>
            } />
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </>
  )
}
