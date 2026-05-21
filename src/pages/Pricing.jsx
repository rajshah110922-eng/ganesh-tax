import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CTABand from '../components/ui/CTABand'
import { useContent } from '../hooks/useContent'

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const navigate = useNavigate()
  const { pricingPlans } = useContent()

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14">
        <span className="font-sketch text-[18px] text-rust block mb-3">// pricing</span>
        <h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">
          Simple, transparent<br/>pricing.
        </h1>
        <p className="text-[17px] text-muted font-light max-w-[540px] leading-relaxed">
          No surprises, no hidden fees. Pick a plan that suits your business stage — or buy individual services à la carte.
        </p>
      </section>

      <div className="px-6 md:px-16 py-14">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-[15px] transition-colors ${!yearly ? 'text-ink font-medium' : 'text-muted'}`}>Monthly</span>
          <button
            onClick={() => setYearly(y => !y)}
            className="relative w-[52px] h-7 bg-sage rounded-full transition-colors focus:outline-none"
            aria-label="Toggle billing period"
          >
            <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${yearly ? 'translate-x-6 left-0.5' : 'left-0.5'}`} />
          </button>
          <span className={`text-[15px] transition-colors ${yearly ? 'text-ink font-medium' : 'text-muted'}`}>Yearly</span>
          <span className="bg-gold-pale text-gold font-sketch text-[13px] font-semibold px-3 py-0.5 rounded-full border border-gold/30">Save 20%</span>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 border relative transition-all ${plan.featured ? 'bg-sage text-white border-sage shadow-xl' : 'bg-paper border-border hover:-translate-y-1 hover:shadow-md'}`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white font-sketch text-[13px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge} ✦
                </div>
              )}
              <div className={`font-display text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-ink'}`}>{plan.name}</div>
              <p className={`text-[13px] font-light mb-6 leading-relaxed ${plan.featured ? 'text-white/70' : 'text-muted'}`}>{plan.desc}</p>
              <div className={`font-display text-5xl font-bold tracking-tight leading-none mb-1 ${plan.featured ? 'text-white' : 'text-ink'}`}>
                ₹{(yearly ? plan.yearlyPrice : plan.monthlyPrice).toLocaleString('en-IN')}
                <span className={`text-base font-body font-light ml-1 ${plan.featured ? 'text-white/70' : 'text-muted'}`}>/mo</span>
              </div>
              <p className={`text-[13px] mb-6 ${plan.featured ? 'text-white/60' : 'text-muted'}`}>{yearly ? 'Billed annually' : 'Billed monthly'}</p>
              <hr className={`mb-6 ${plan.featured ? 'border-white/25' : 'border-dashed border-border'}`} />
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${feat.included ? (plan.featured ? 'bg-white/25 text-white' : 'bg-sage-pale text-sage') : (plan.featured ? 'bg-white/10 text-white/30' : 'bg-warm text-border')}`}>
                      {feat.included ? '✓' : '✕'}
                    </span>
                    <span className={`text-[14px] font-light ${feat.included ? (plan.featured ? 'text-white' : 'text-muted') : (plan.featured ? 'text-white/35' : 'text-border')}`}>{feat.text}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/contact')}
                className={`w-full py-3.5 rounded-full font-body font-medium text-[15px] transition-all ${plan.featured ? 'bg-white text-sage hover:bg-paper' : 'bg-sage text-white hover:bg-sage-dark'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* À la carte note */}
        <div className="mt-14 max-w-5xl mx-auto bg-cream border border-dashed border-border rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-sketch text-[16px] text-rust font-semibold block mb-2">à la carte ✦</span>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Just need one thing?</h3>
            <p className="text-[14px] text-muted font-light">Buy individual services without a subscription. Browse our full catalogue and pay only for what you need.</p>
          </div>
          <button
            onClick={() => navigate('/services')}
            className="bg-sage text-white px-7 py-3 rounded-full font-body font-medium text-[15px] hover:bg-sage-dark transition-all whitespace-nowrap flex-shrink-0"
          >
            Browse Services →
          </button>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink text-center mb-8 tracking-tight">Common pricing questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Are government fees included in the plan prices?', a: 'No. Government fees (MCA fees, stamp duty, Trademark Registry fees, etc.) are charged at actual cost on top of our professional fees. We always disclose these upfront before you start.' },
              { q: 'Can I switch between plans?', a: 'Yes. You can upgrade or downgrade your plan at any time. Upgrades are effective immediately; downgrades take effect from the next billing cycle.' },
              { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfer (NEFT/IMPS), credit/debit cards, and net banking. All payments are processed securely.' },
              { q: 'Is there a refund policy?', a: 'If we are unable to complete the service due to reasons on our end, you are entitled to a full refund. Refunds are not available once government filings have been made, as those fees are non-recoverable.' },
            ].map((item, i) => (
              <div key={i} className="bg-cream border border-border rounded-xl p-5">
                <h4 className="font-display text-[15px] font-medium text-ink mb-2">{item.q}</h4>
                <p className="text-[13px] text-muted font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABand
        title="Ready to get"
        italic="started?"
        subtitle="Choose your plan and our team will reach out to onboard you within 2 hours."
        ctaLabel="Get Started Today →"
      />
    </div>
  )
}
