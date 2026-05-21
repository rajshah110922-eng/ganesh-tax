import { Link } from 'react-router-dom'
import { navCategories } from '../../data/navigation'
import GtcLogo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="px-6 md:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <GtcLogo size={32} />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-bold text-white">Ganesh Tax</span>
              <span className="font-display text-[11px] font-medium text-white/60">Consultancy LLP</span>
            </div>
          </div>
          <p className="text-[13px] leading-relaxed max-w-[240px] mb-5">
            Your trusted partner for GST, income tax, business registrations, trademark, and all compliance needs across India.
          </p>
          <span className="font-sketch text-[18px] text-sage-light">made with ♥ in India</span>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-display text-[14px] font-medium text-white mb-4">Services</h5>
          <div className="space-y-2">
            {navCategories.slice(0, 6).map(cat => (
              <Link key={cat.slug} to={`/services/${cat.slug}`} className="block text-[13px] text-white/55 hover:text-white transition-colors">
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h5 className="font-display text-[14px] font-medium text-white mb-4">Company</h5>
          <div className="space-y-2">
            {[['/', 'Home'], ['/about', 'About Us'], ['/pricing', 'Pricing'], ['/contact', 'Contact'], ['/services', 'All Services']].map(([to, label]) => (
              <Link key={to} to={to} className="block text-[13px] text-white/55 hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <h5 className="font-display text-[14px] font-medium text-white mb-4">Legal</h5>
          <div className="space-y-2">
            <Link to="/privacy-policy" className="block text-[13px] text-white/55 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="block text-[13px] text-white/55 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="block text-[13px] text-white/55 hover:text-white transition-colors">Refund Policy</Link>
            <Link to="/disclaimer" className="block text-[13px] text-white/55 hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-[12px] text-white/50 leading-relaxed">
              <strong className="text-white/70 font-medium">Ahmedabad Office</strong><br/>
              E/802 Krish Luxuria,<br/>
              Nr. Galaxy Coral Bungalows,<br/>
              Vastral, Ahmedabad – 382418
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-white/40">© 2025 Ganesh Tax Consultancy LLP. All rights reserved.</p>
        <span className="font-sketch text-[18px] text-sage-light">✦ compliance, simplified</span>
      </div>
    </footer>
  )
}
