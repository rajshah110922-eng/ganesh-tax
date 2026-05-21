import { useParams, Link, useNavigate } from 'react-router-dom'
import { navCategories, colorMap } from '../data/navigation'
import { getCategoryServices } from '../data/services/index'
import CTABand from '../components/ui/CTABand'
import Button from '../components/ui/Button'

export default function ServiceCategory() {
  const { category: catSlug } = useParams()
  const navigate = useNavigate()
  const catInfo = navCategories.find(c => c.slug === catSlug)
  const services = getCategoryServices(catSlug)
  const colors = colorMap[catInfo?.color || 'sage'] || colorMap.sage

  if (!catInfo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="font-display text-3xl font-bold text-ink mb-3">Category not found</h1>
        <Button onClick={() => navigate('/services')}>Browse All Services</Button>
      </div>
    )
  }

  return (
    <div className="pt-[68px]">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border px-6 md:px-16 py-3 flex items-center gap-2 text-[13px] text-muted">
        <Link to="/" className="hover:text-sage transition-colors">Home</Link>
        <span className="text-border">›</span>
        <Link to="/services" className="hover:text-sage transition-colors">Services</Link>
        <span className="text-border">›</span>
        <span className="text-ink font-medium">{catInfo.label}</span>
      </div>

      {/* Hero */}
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14">
        <span className={`inline-block font-sketch text-[14px] font-semibold px-4 py-1.5 rounded-full border mb-4 ${colors.badge}`}>{catInfo.label}</span>
        <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-bold text-ink tracking-tight leading-[1.1] mb-3">{catInfo.description}</h1>
        <p className="text-[16px] text-muted font-light max-w-[500px] leading-relaxed">
          {services.length} services available in this category. Browse and select the one that fits your needs.
        </p>
      </section>

      {/* Services grid */}
      <div className="px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(svc => (
            <div
              key={svc.slug}
              onClick={() => navigate(`/services/${catSlug}/${svc.slug}`)}
              className={`bg-cream border border-border rounded-2xl p-6 cursor-pointer transition-all hover:bg-white hover:border-sage-light hover:-translate-y-1 hover:shadow-md group ${colors.hover}`}
            >
              <h3 className="font-display text-[19px] font-medium text-ink mb-2.5 tracking-tight group-hover:text-sage transition-colors">{svc.name}</h3>
              <p className="text-[13px] text-muted font-light leading-relaxed mb-4 line-clamp-2">{svc.tagline}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {svc.benefits?.slice(0, 2).map((b, i) => (
                  <span key={i} className="text-[11px] text-muted bg-paper border border-border rounded-full px-2.5 py-0.5 line-clamp-1">{b.title}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-5">
                <span className="font-body text-[14px] font-semibold text-sage">Explore service →</span>
                <svg className="w-4 h-4 text-border group-hover:text-sage transition-colors" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other categories */}
      <section className="bg-cream border-t border-border px-6 md:px-16 py-10">
        <h3 className="font-display text-lg font-medium text-ink mb-4">Explore other service categories</h3>
        <div className="flex flex-wrap gap-3">
          {navCategories.filter(c => c.slug !== catSlug).map(c => {
            const cc = colorMap[c.color] || colorMap.sage
            return (
              <button
                key={c.slug}
                onClick={() => navigate(`/services/${c.slug}`)}
                className={`font-sketch text-[13px] font-semibold px-4 py-1.5 rounded-full border transition-all hover:scale-105 ${cc.badge}`}
              >
                {c.label}
              </button>
            )
          })}
        </div>
      </section>

      <CTABand
        title="Need help choosing"
        italic="the right service?"
        subtitle="Our compliance experts will guide you to the right service for your business stage and needs."
        ctaLabel="Talk to an Expert →"
      />
    </div>
  )
}
