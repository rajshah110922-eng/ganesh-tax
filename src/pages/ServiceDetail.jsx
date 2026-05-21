import { useParams, Link, useNavigate } from 'react-router-dom'
import { getService } from '../data/services/index'
import { navCategories, colorMap } from '../data/navigation'
import FAQAccordion from '../components/ui/FAQAccordion'
import DocumentChecklist from '../components/ui/DocumentChecklist'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import CTABand from '../components/ui/CTABand'
import {
  StartupIllustration, GSTIllustration, TrademarkIllustration,
  TaxIllustration, MCAIllustration, ComplianceIllustration,
  GlobalIllustration, RegistrationsIllustration
} from '../components/illustrations/CategoryIllustrations'
import { SERVICE_ILLUSTRATIONS } from '../components/illustrations/ServiceIllustrations'

const CATEGORY_FALLBACKS = {
  startup: StartupIllustration,
  registrations: RegistrationsIllustration,
  trademark: TrademarkIllustration,
  gst: GSTIllustration,
  'income-tax': TaxIllustration,
  mca: MCAIllustration,
  compliance: ComplianceIllustration,
  global: GlobalIllustration,
}

const BENEFIT_ICONS = [
  <svg key="a" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11 L8 17 L20 5" stroke="#4a7c59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="b" width="22" height="22" viewBox="0 0 22 22" fill="none"><polygon points="11,2 14,8 20,9 15.5,13.5 17,20 11,17 5,20 6.5,13.5 2,9 8,8" stroke="#d4a017" strokeWidth="1.8" fill="none"/></svg>,
  <svg key="c" width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#c94f2a" strokeWidth="1.8"/><path d="M11 7 L11 11 L14 13" stroke="#c94f2a" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg key="d" width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="#1e3a5f" strokeWidth="1.8" fill="none"/><path d="M7 11 L10 14 L15 8" stroke="#1e3a5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
]

const colorRing = { sage: 'ring-sage/30', rust: 'ring-rust/30', gold: 'ring-gold/30', navy: 'ring-navy/30' }

export default function ServiceDetail() {
  const { category: catSlug, service: svcSlug } = useParams()
  const navigate = useNavigate()
  const service = getService(catSlug, svcSlug)
  const catInfo = navCategories.find(c => c.slug === catSlug)
  const colors = colorMap[catInfo?.color || 'sage'] || colorMap.sage

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <span className="font-sketch text-6xl text-border mb-4">404</span>
        <h1 className="font-display text-3xl font-bold text-ink mb-3">Service not found</h1>
        <p className="text-muted mb-6">This service page doesn't exist yet or the URL is incorrect.</p>
        <Button onClick={() => navigate('/services')}>Browse All Services</Button>
      </div>
    )
  }

  const IllustrationComp = SERVICE_ILLUSTRATIONS[svcSlug] || CATEGORY_FALLBACKS[catSlug] || StartupIllustration

  return (
    <div className="pt-[68px]">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border px-6 md:px-16 py-3 flex items-center gap-2 text-[13px] text-muted overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-sage transition-colors">Home</Link>
        <span className="text-border">›</span>
        <Link to="/services" className="hover:text-sage transition-colors">Services</Link>
        <span className="text-border">›</span>
        <Link to={`/services/${catSlug}`} className="hover:text-sage transition-colors capitalize">{catInfo?.label}</Link>
        <span className="text-border">›</span>
        <span className="text-ink font-medium">{service.name}</span>
      </div>

      {/* Hero */}
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge color={catInfo?.color || 'sage'} className="mb-5">{catInfo?.label}</Badge>
            <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">{service.name}</h1>
            <p className="font-sketch text-[18px] text-muted mb-4 -rotate-1">{service.tagline}</p>
            <p className="text-[16px] text-muted font-light leading-relaxed mb-8 max-w-[520px]">{service.heroDescription}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button size="md" onClick={() => navigate('/contact')}>Get Started Today</Button>
              <Button size="md" variant="secondary" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>View Pricing</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Expert CA Managed', 'Fast Turnaround', 'Transparent Pricing'].map(badge => (
                <span key={badge} className="flex items-center gap-1.5 text-[12px] text-muted bg-paper border border-border rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />{badge}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-64 h-48 lg:w-80 lg:h-60 animate-float">
              <IllustrationComp />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-20">

        {/* What Is */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-5 tracking-tight">What is {service.name}?</h2>
          <p className="text-[15px] text-muted font-light leading-relaxed max-w-3xl">{service.whatIs}</p>
        </section>

        {/* Benefits */}
        <section>
          <span className="font-sketch text-[16px] text-rust block mb-3 -rotate-1">// why your business needs it</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-8 tracking-tight">How it helps your business grow</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.benefits.map((b, i) => (
              <div key={i} className={`bg-cream border border-border rounded-xl p-5 hover:border-sage-light transition-all ring-1 ring-transparent hover:${colorRing[catInfo?.color || 'sage']}`}>
                <div className="w-9 h-9 rounded-lg bg-paper border border-border flex items-center justify-center mb-3">
                  {BENEFIT_ICONS[i % 4]}
                </div>
                <h3 className="font-display text-[17px] font-medium text-ink mb-1.5">{b.title}</h3>
                <p className="text-[13px] text-muted font-light leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <span className="font-sketch text-[16px] text-rust block mb-3 -rotate-1">// how it works</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-8 tracking-tight">Step-by-step process</h2>
          <div className="space-y-4">
            {service.steps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start p-5 bg-cream border border-border rounded-xl hover:border-sage-light transition-colors">
                <div className="w-10 h-10 rounded-full bg-paper border-2 border-border flex items-center justify-center font-sketch text-xl font-bold text-sage flex-shrink-0">{step.num}</div>
                <div>
                  <h4 className="font-display text-[16px] font-medium text-ink mb-1">{step.title}</h4>
                  <p className="text-[13px] text-muted font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section>
          <span className="font-sketch text-[16px] text-rust block mb-3 -rotate-1">// what you need to provide</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-8 tracking-tight">Documents required</h2>
          <DocumentChecklist documents={service.documents} />
          <div className="mt-5 bg-gold-pale border border-gold/30 rounded-xl p-4 flex gap-3 items-start">
            <span className="text-gold text-lg mt-0.5">ℹ</span>
            <p className="text-[13px] text-muted leading-relaxed"><strong className="font-medium text-ink">Not sure about documents?</strong> Our team will send you a personalised checklist after your initial consultation — no guesswork.</p>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <span className="font-sketch text-[16px] text-rust block mb-3 -rotate-1">// questions & answers</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-8 tracking-tight">Frequently asked questions</h2>
          <FAQAccordion faqs={service.faqs} />
        </section>

        {/* Pricing — intentionally at the bottom */}
        <section id="pricing">
          <div className="text-center mb-10">
            <span className="font-sketch text-[16px] text-rust block mb-3">// transparent pricing</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-3">Simple, clear pricing</h2>
            <p className="text-muted font-light">No hidden fees. Government charges included in all plans.</p>
          </div>
          <div className={`grid grid-cols-1 ${service.pricing.plans.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-5`}>
            {service.pricing.plans.map((plan, i) => {
              const isFeatured = i === 1 && service.pricing.plans.length >= 3
              return (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-7 border relative ${isFeatured ? 'bg-sage text-white border-sage shadow-lg' : 'bg-paper border-border hover:border-sage-light transition-all'}`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white font-sketch text-[13px] font-bold px-4 py-1 rounded-full whitespace-nowrap">Best Value ✦</div>
                  )}
                  <div className={`font-display text-xl font-bold mb-1 ${isFeatured ? 'text-white' : 'text-ink'}`}>{plan.name}</div>
                  <div className={`font-display text-4xl font-bold tracking-tight mb-1 ${isFeatured ? 'text-white' : 'text-ink'}`}>
                    ₹{plan.price.toLocaleString('en-IN')}
                    <span className={`text-sm font-body font-light ml-1 ${isFeatured ? 'text-white/70' : 'text-muted'}`}>+ govt fees</span>
                  </div>
                  <hr className={`my-5 ${isFeatured ? 'border-white/25' : 'border-dashed border-border'}`} />
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 ${isFeatured ? 'bg-white/20 text-white' : 'bg-sage-pale text-sage'}`}>✓</span>
                        <span className={`text-[13px] font-light ${isFeatured ? 'text-white/90' : 'text-muted'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3 rounded-full font-body font-medium text-[14px] transition-all ${isFeatured ? 'bg-white text-sage hover:bg-paper' : 'bg-sage text-white hover:bg-sage-dark'}`}
                  >
                    Get Started
                  </button>
                </div>
              )
            })}
          </div>
          <p className="text-center text-[13px] text-muted mt-6 font-sketch">✦ Not sure which plan? Talk to us — we'll recommend the right one for free.</p>
        </section>
      </div>

      {/* Related services */}
      {catInfo && (
        <section className="bg-cream border-t border-border px-6 md:px-16 py-12">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-xl font-medium text-ink mb-5">More {catInfo.label} services</h3>
            <div className="flex flex-wrap gap-3">
              {catInfo.services.filter(s => s.slug !== svcSlug).slice(0, 5).map(svc => (
                <Link
                  key={svc.slug}
                  to={`/services/${catSlug}/${svc.slug}`}
                  className="px-4 py-2 bg-paper border border-border rounded-full text-[13px] text-muted hover:text-sage hover:border-sage-light transition-all"
                >
                  {svc.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Ready to get started with"
        italic={service.name + '?'}
        subtitle="Our experts are ready to guide you through the entire process. Free consultation — no commitment."
        ctaLabel="Book Free Consultation →"
      />
    </div>
  )
}
