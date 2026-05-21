import { useContent } from '../hooks/useContent'
import CTABand from '../components/ui/CTABand'

export default function RefundPolicy() {
  const { legal } = useContent()
  const { lastUpdated, sections } = legal.refundPolicy

  return (
    <div className="pt-[68px]">
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14">
        <span className="font-sketch text-[18px] text-rust block mb-3">// legal</span>
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">
          Refund Policy
        </h1>
        <p className="text-[15px] text-muted font-light">Last updated: {lastUpdated}</p>
      </section>

      <div className="px-6 md:px-16 py-14 max-w-3xl">
        <p className="text-[15px] text-muted font-light leading-relaxed mb-10">
          We want every engagement to be a positive experience. Below is our clear, fair refund policy for professional and government fees.
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
        title="Have a refund"
        italic="request?"
        subtitle="Email us at ganeshtaxconsultancy.1126@gmail.com and we'll respond within 3 business days."
        ctaLabel="Contact Us →"
      />
    </div>
  )
}
