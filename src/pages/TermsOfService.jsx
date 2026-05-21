import { useContent } from '../hooks/useContent'
import CTABand from '../components/ui/CTABand'

export default function TermsOfService() {
  const { legal } = useContent()
  const { lastUpdated, sections } = legal.termsOfService

  return (
    <div className="pt-[68px]">
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14">
        <span className="font-sketch text-[18px] text-rust block mb-3">// legal</span>
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">
          Terms of Service
        </h1>
        <p className="text-[15px] text-muted font-light">Last updated: {lastUpdated}</p>
      </section>

      <div className="px-6 md:px-16 py-14 max-w-3xl">
        <p className="text-[15px] text-muted font-light leading-relaxed mb-10">
          Please read these Terms of Service carefully before using our services. By engaging Ganesh Tax Consultancy LLP, you agree to be bound by these terms.
        </p>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i} className="bg-paper border border-border rounded-xl p-6">
              <h2 className="font-display text-[17px] font-semibold text-ink mb-3">{s.heading}</h2>
              <p className="text-[14px] text-muted font-light leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABand
        title="Ready to get"
        italic="started?"
        subtitle="Engage our team and we'll have you onboarded within 2 hours."
        ctaLabel="Get Started →"
      />
    </div>
  )
}
