import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { navCategories, colorMap } from '../../data/navigation'
import GtcLogo from '../ui/Logo'

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 text-decoration-none">
    <GtcLogo size={36} />
    <div className="flex flex-col leading-tight">
      <span className="font-display text-[16px] font-bold text-ink tracking-tight">Ganesh Tax</span>
      <span className="font-display text-[11px] font-medium text-muted tracking-tight">Consultancy LLP</span>
    </div>
  </Link>
)

function ServicesFullMegaMenu({ onClose }) {
  const navigate = useNavigate()
  const ROW1 = navCategories.slice(0, 4)
  const ROW2 = navCategories.slice(4)

  const handleCatClick = (slug) => { navigate(`/services/${slug}`); onClose() }
  const handleSvcClick = (catSlug, svcSlug) => { navigate(`/services/${catSlug}/${svcSlug}`); onClose() }

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-paper border border-border rounded-2xl shadow-xl z-50 p-6 animate-slide-down"
      style={{ width: 'min(820px, 95vw)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-dashed border-border">
        <span className="font-sketch text-[16px] text-sage font-semibold">All Services</span>
        <button
          onClick={() => { navigate('/services'); onClose() }}
          className="text-[13px] text-muted hover:text-sage font-body transition-colors"
        >
          Browse all →
        </button>
      </div>

      {/* 4-column grid — row 1 */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {ROW1.map(cat => {
          const colors = colorMap[cat.color] || colorMap.sage
          return (
            <div key={cat.slug}>
              <button
                onClick={() => handleCatClick(cat.slug)}
                className={`font-sketch text-[12px] font-semibold px-3 py-1 rounded-full border mb-2.5 transition-all hover:scale-105 ${colors.badge}`}
              >
                {cat.label}
              </button>
              <div className="space-y-0.5">
                {cat.services.slice(0, 4).map(svc => (
                  <button
                    key={svc.slug}
                    onClick={() => handleSvcClick(cat.slug, svc.slug)}
                    className="block w-full text-left px-1 py-1.5 rounded-lg text-[13px] text-muted hover:text-sage hover:bg-cream transition-colors font-body leading-snug"
                  >
                    {svc.label}
                  </button>
                ))}
                {cat.services.length > 4 && (
                  <button
                    onClick={() => handleCatClick(cat.slug)}
                    className="block w-full text-left px-1 py-1 text-[12px] text-sage/70 hover:text-sage font-body transition-colors"
                  >
                    +{cat.services.length - 4} more →
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-border mb-4" />

      {/* 4-column grid — row 2 */}
      <div className="grid grid-cols-4 gap-4">
        {ROW2.map(cat => {
          const colors = colorMap[cat.color] || colorMap.sage
          return (
            <div key={cat.slug}>
              <button
                onClick={() => handleCatClick(cat.slug)}
                className={`font-sketch text-[12px] font-semibold px-3 py-1 rounded-full border mb-2.5 transition-all hover:scale-105 ${colors.badge}`}
              >
                {cat.label}
              </button>
              <div className="space-y-0.5">
                {cat.services.slice(0, 4).map(svc => (
                  <button
                    key={svc.slug}
                    onClick={() => handleSvcClick(cat.slug, svc.slug)}
                    className="block w-full text-left px-1 py-1.5 rounded-lg text-[13px] text-muted hover:text-sage hover:bg-cream transition-colors font-body leading-snug"
                  >
                    {svc.label}
                  </button>
                ))}
                {cat.services.length > 4 && (
                  <button
                    onClick={() => handleCatClick(cat.slug)}
                    className="block w-full text-left px-1 py-1 text-[12px] text-sage/70 hover:text-sage font-body transition-colors"
                  >
                    +{cat.services.length - 4} more →
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MobileDrawer({ open, onClose }) {
  const [expandedCat, setExpandedCat] = useState(null)
  const navigate = useNavigate()

  const handleNav = (path) => { navigate(path); onClose() }

  useEffect(() => { if (!open) setExpandedCat(null) }, [open])

  return (
    <>
      {open && <div className="drawer-overlay lg:hidden" onClick={onClose} />}
      <div className={`fixed top-0 right-0 bottom-0 w-[320px] max-w-[90vw] bg-paper border-l border-border z-[200] overflow-y-auto transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border sticky top-0 bg-paper z-10">
          <Logo />
          <button onClick={onClose} className="text-muted hover:text-ink p-1" aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 6 L16 16 M16 6 L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {['/', '/pricing', '/about', '/contact'].map(path => {
            const labels = { '/': 'Home', '/pricing': 'Pricing', '/about': 'About', '/contact': 'Contact' }
            return (
              <button key={path} onClick={() => handleNav(path)} className="w-full text-left px-4 py-2.5 rounded-xl text-[14px] text-muted hover:text-ink hover:bg-cream transition-colors font-body">
                {labels[path]}
              </button>
            )
          })}
          <div className="border-t border-dashed border-border my-3" />
          <div className="px-4 py-1.5">
            <span className="font-sketch text-[13px] text-muted">Services</span>
          </div>
          {navCategories.map(cat => {
            const colors = colorMap[cat.color] || colorMap.sage
            return (
              <div key={cat.slug}>
                <button
                  onClick={() => setExpandedCat(expandedCat === cat.slug ? null : cat.slug)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-cream transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span className="text-[14px] font-medium text-ink">{cat.label}</span>
                  </div>
                  <span className={`text-muted text-lg transition-transform duration-200 ${expandedCat === cat.slug ? 'rotate-180' : ''}`}>›</span>
                </button>
                {expandedCat === cat.slug && (
                  <div className="ml-4 mt-1 space-y-0.5 pl-3 border-l-2 border-dashed border-border">
                    {cat.services.map(svc => (
                      <button
                        key={svc.slug}
                        onClick={() => handleNav(`/services/${cat.slug}/${svc.slug}`)}
                        className="w-full text-left px-3 py-2 rounded-lg text-[13px] text-muted hover:text-sage hover:bg-cream transition-colors"
                      >
                        {svc.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
        <div className="p-4 pt-0">
          <button onClick={() => handleNav('/contact')} className="w-full bg-sage text-white rounded-full py-3 font-body font-medium text-[15px] hover:bg-sage-dark transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeTimer = useRef(null)
  const servicesRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const openServices = () => { clearTimeout(closeTimer.current); setServicesOpen(true) }
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 150) }
  const closeServices = () => setServicesOpen(false)

  useEffect(() => { closeServices(); setDrawerOpen(false) }, [location.pathname])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const NAV_LINKS = [['/', 'Home'], ['/pricing', 'Pricing'], ['/about', 'About'], ['/contact', 'Contact']]

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-paper/95 backdrop-blur-sm border-b border-border h-[68px] flex items-center px-5 md:px-10 justify-between">
      <Logo />

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-1">
        <Link
          to="/"
          className={`relative text-[14px] px-3.5 py-2 rounded-lg transition-all font-body ${isActive('/') ? 'text-ink bg-cream font-medium' : 'text-muted hover:text-ink hover:bg-cream'}`}
        >
          Home
        </Link>

        {/* Services with unified mega-menu */}
        <div
          ref={servicesRef}
          className="relative"
          onMouseEnter={openServices}
          onMouseLeave={scheduleClose}
        >
          <button
            className={`flex items-center gap-1 text-[14px] px-3.5 py-2 rounded-lg transition-all font-body ${servicesOpen || isActive('/services') ? 'text-ink bg-cream font-medium' : 'text-muted hover:text-ink hover:bg-cream'}`}
          >
            Services
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
              <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {servicesOpen && (
            <div onMouseEnter={() => clearTimeout(closeTimer.current)} onMouseLeave={scheduleClose}>
              <ServicesFullMegaMenu onClose={closeServices} />
            </div>
          )}
        </div>

        {NAV_LINKS.slice(1).map(([path, label]) => (
          <Link
            key={path}
            to={path}
            className={`relative text-[14px] px-3.5 py-2 rounded-lg transition-all font-body ${isActive(path) ? 'text-ink bg-cream font-medium' : 'text-muted hover:text-ink hover:bg-cream'}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/contact')} className="hidden lg:block bg-sage text-white text-[14px] font-body font-medium px-5 py-2.5 rounded-full hover:bg-sage-dark transition-all active:scale-[0.98]">
          Get Started
        </button>
        {/* Hamburger */}
        <button
          className="lg:hidden p-2 text-muted hover:text-ink transition-colors"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6 H21 M3 12 H21 M3 18 H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  )
}
