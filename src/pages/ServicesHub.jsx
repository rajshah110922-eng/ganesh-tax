import { useNavigate } from 'react-router-dom'
import { navCategories, colorMap } from '../data/navigation'
import { allServicesByCategory } from '../data/services/index'
import CTABand from '../components/ui/CTABand'
import {
  StartupIllustration, GSTIllustration, TrademarkIllustration,
  TaxIllustration, MCAIllustration, ComplianceIllustration,
  GlobalIllustration, RegistrationsIllustration
} from '../components/illustrations/CategoryIllustrations'

const ILLUSTRATIONS = {
  startup: StartupIllustration,
  registrations: RegistrationsIllustration,
  trademark: TrademarkIllustration,
  gst: GSTIllustration,
  'income-tax': TaxIllustration,
  mca: MCAIllustration,
  compliance: ComplianceIllustration,
  global: GlobalIllustration,
}

export default function ServicesHub() {
  const navigate = useNavigate()

  return (
    <div className="pt-[68px]">
      {/* Page hero */}
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14">
        <span className="font-sketch text-[18px] text-rust block mb-3">// all services</span>
        <h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">
          Everything your<br/>business ever needs.
        </h1>
        <p className="text-[17px] text-muted font-light max-w-[540px] leading-relaxed">
          From the first registration to annual filings, trademark protection to payroll — one platform, one team, zero hassle.
        </p>
      </section>

      {/* Category grid */}
      <div className="px-6 md:px-16 py-14 space-y-16">
        {navCategories.map(cat => {
          const colors = colorMap[cat.color] || colorMap.sage
          const services = allServicesByCategory[cat.slug] || []
          const IllComp = ILLUSTRATIONS[cat.slug] || StartupIllustration
          return (
            <div key={cat.slug} id={cat.slug}>
              {/* Category header */}
              <div className="flex flex-wrap items-center gap-4 mb-7 pb-5 border-b border-dashed border-border">
                <span className={`font-sketch text-[14px] font-semibold px-4 py-1.5 rounded-full border ${colors.badge}`}>{cat.label}</span>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-ink tracking-tight">{cat.description}</h2>
                <button
                  onClick={() => navigate(`/services/${cat.slug}`)}
                  className="ml-auto text-[13px] text-sage hover:underline font-medium"
                >
                  View all →
                </button>
              </div>

              {/* Services grid + illustration */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {/* Illustration panel */}
                <div className="hidden lg:flex bg-cream border border-border rounded-2xl items-center justify-center p-6">
                  <div className="w-44 h-36 animate-float">
                    <IllComp />
                  </div>
                </div>
                {/* Service cards */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map(svc => (
                    <div
                      key={svc.slug}
                      onClick={() => navigate(`/services/${cat.slug}/${svc.slug}`)}
                      className={`bg-cream border border-border rounded-xl p-5 cursor-pointer transition-all hover:bg-white hover:border-sage-light hover:-translate-y-0.5 hover:shadow-sm ${colors.hover}`}
                    >
                      <h4 className="font-display text-[15px] font-medium text-ink mb-2 leading-snug">{svc.name}</h4>
                      <p className="text-[12px] text-muted font-light leading-relaxed line-clamp-2">{svc.tagline}</p>
                      <span className="font-body text-[14px] font-semibold text-sage block mt-3">Learn more →</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <CTABand
        title="Not sure where"
        italic="to start?"
        subtitle="Our experts will assess your exact requirements and recommend the right services for you."
        ctaLabel="Get Free Consultation →"
      />
    </div>
  )
}
