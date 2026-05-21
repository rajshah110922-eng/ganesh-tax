import { useContent } from '../hooks/useContent'
import CTABand from '../components/ui/CTABand'

export default function Disclaimer() {
  const { legal } = useContent()
  const { lastUpdated, sections } = legal.disclaimer

  return (
    <div className="pt-[68px]">
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14">
        <span className="font-sketch text-[18px] text-rust block mb-3">// legal</span>
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">
          Disclaimer
        </h1>
        <p className="text-[15px] text-muted font-light">Last updated: {lastUpdated}</p>
      </section>

      <div className="px-6 md:px-16 py-14 max-w-3xl">
        <p className="text-[15px] text-muted font-light leading-relaxed mb-10">
          The information on this website is provided in good faith for general guidance only. Please read this disclaimer carefully before relying on any content.
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
        title="Need specific"
        italic="advice?"
        subtitle="Speak to one of our experts for advice tailored to your situation."
        ctaLabel="Talk to an Expert →"
      />
    </div>
  )
}
