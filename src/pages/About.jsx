import CTABand from '../components/ui/CTABand'
import { useContent } from '../hooks/useContent'

const avatarBg = { sage: 'bg-sage-pale text-sage', rust: 'bg-rust-pale text-rust', gold: 'bg-gold-pale text-gold', navy: 'bg-navy-pale text-navy' }
const statBg   = { sage: 'bg-sage-pale border-sage-light text-sage', rust: 'bg-rust-pale border-rust/40 text-rust', gold: 'bg-gold-pale border-gold/40 text-gold', navy: 'bg-navy-pale border-navy/40 text-navy' }

export default function About() {
  const { about } = useContent()
  const { story, blockquote, blockquoteAuthor, stats, team, values } = about

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14 md:py-20">
        <span className="font-sketch text-[18px] text-rust block mb-3">// our story</span>
        <h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">
          We're on a mission<br/>to make compliance<br/><em className="text-sage italic">human.</em>
        </h1>
        <p className="text-[17px] text-muted font-light max-w-[540px] leading-relaxed">
          Founded in 2018 by a team of CAs, lawyers, and engineers tired of watching great businesses struggle with needless bureaucracy.
        </p>
      </section>

      {/* Story */}
      <section className="px-6 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink tracking-tight mb-5">From frustration<br/>to a platform</h2>
          {story.map((para, i) => (
            <p key={i} className="text-[15px] text-muted font-light leading-relaxed mb-4">{para}</p>
          ))}
        </div>
        <div className="space-y-5">
          <div className="bg-cream border border-border rounded-2xl p-7">
            <blockquote className="font-display text-[22px] font-medium italic text-ink leading-snug mb-4">
              "{blockquote}"
            </blockquote>
            <cite className="font-sketch text-[16px] text-sage font-semibold not-italic">— {blockquoteAuthor}</cite>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.num} className={`rounded-xl border p-5 text-center ${statBg[s.color] || statBg.sage}`}>
                <span className="font-display text-4xl font-bold block mb-1">{s.num}</span>
                <span className="text-[13px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream border-t border-border px-6 md:px-16 py-16">
        <span className="font-sketch text-[18px] text-rust block mb-3">// our values</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-12">What we<br/><em className="text-sage italic">stand for.</em></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div key={i} className="text-center bg-paper border border-border rounded-2xl p-7 hover:border-sage-light hover:-translate-y-1 transition-all">
              <span className="text-4xl mb-4 block">{v.icon}</span>
              <h4 className="font-display text-[17px] font-medium text-ink mb-2">{v.title}</h4>
              <p className="text-[13px] text-muted font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-16 py-16">
        <span className="font-sketch text-[18px] text-rust block mb-3">// the team</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-12">The people<br/>behind <em className="text-sage italic">GTC.</em></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <div key={i} className="text-center bg-cream border border-border rounded-2xl p-7 hover:border-sage-light hover:bg-white transition-all">
              <div className={`w-16 h-16 rounded-full ${avatarBg[member.color] || avatarBg.sage} flex items-center justify-center font-sketch text-2xl font-bold mx-auto mb-4`}>{member.initials}</div>
              <h4 className="font-display text-[16px] font-medium text-ink mb-1">{member.name}</h4>
              <p className="text-[12px] text-muted mb-2">{member.role}</p>
              <span className="font-sketch text-[13px] text-sage">{member.note}</span>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Ready to work with"
        italic="our team?"
        subtitle="Let's discuss your compliance needs and build a plan that works for your business."
        ctaLabel="Get in Touch →"
      />
    </div>
  )
}
