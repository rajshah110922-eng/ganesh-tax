import { useNavigate } from 'react-router-dom'
import HeroIllustration from '../components/illustrations/HeroIllustration'
import { StartupIllustration, GSTIllustration, TrademarkIllustration, TaxIllustration, MCAIllustration, ComplianceIllustration } from '../components/illustrations/CategoryIllustrations'
import CTABand from '../components/ui/CTABand'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { navCategories, colorMap } from '../data/navigation'
import { useContent } from '../hooks/useContent'

const WHY_COLORS = ['sage', 'rust', 'gold', 'navy', 'sage', 'rust']
const WHY_ICONS = [<CheckIcon key={0}/>, <ClockIcon key={1}/>, <ShieldIcon key={2}/>, <LockIcon key={3}/>, <PeopleIcon key={4}/>, <BuildingIcon key={5}/>]
const WHY_SKETCHES = ['simple ✓', 'fast ⚡', 'clear ✓', 'secure 🔒', 'expert 👨‍💼', 'all-in ♥']

const STEPS = [
  { num: '1', title: 'Pick your service', desc: 'Browse our catalogue and choose exactly what your business needs right now.' },
  { num: '2', title: 'Submit documents', desc: 'Our smart checklist tells you exactly what to upload — nothing more, nothing less.' },
  { num: '3', title: 'We handle the rest', desc: 'Your dedicated expert prepares, reviews, and files everything on your behalf.' },
  { num: '4', title: 'Receive & relax', desc: 'Get certificates, confirmations, and ongoing reminders — all in your dashboard.' },
]

const TESTIMONIALS = [
  { text: 'CorpEase registered our Private Limited company in just 4 days. The team was incredibly responsive and the whole process felt effortless.', name: 'Rahul Kapoor', role: 'Founder, Kapoor Tech Pvt. Ltd.', initials: 'RK', color: 'sage' },
  { text: "Finally a compliance partner that doesn't make me feel dumb. Plain language, zero surprises on billing, and they actually pick up the phone.", name: 'Priya Sharma', role: 'CEO, GreenLeaf Foods', initials: 'PS', color: 'rust' },
  { text: 'Our trademark was registered without a single objection. The team knew exactly what class to file under and guided us through every step.', name: 'Arjun Mehta', role: 'Co-Founder, Mehta Lifestyle', initials: 'AM', color: 'gold' },
]

const PREVIEW_SERVICES = [
  { catSlug: 'startup', slug: 'private-limited-company', tag: 'Startup', tagColor: 'sage', title: 'Business Registration', desc: 'Register your Private Limited, LLP, or OPC with full government approval.', items: ['Private Limited Company', 'Limited Liability Partnership', 'One Person Company', 'Section 8 / NGO'] },
  { catSlug: 'gst', slug: 'gst-registration', tag: 'Tax', tagColor: 'rust', title: 'GST Services', desc: 'Complete GST registration, monthly/quarterly returns, and reconciliation support.', items: ['GST Registration', 'Monthly GSTR-1 & 3B', 'Annual GST Return', 'GST Audit Support'] },
  { catSlug: 'trademark', slug: 'trademark-registration', tag: 'IP', tagColor: 'gold', title: 'Trademark & IP', desc: 'Protect your brand with trademark registration, renewal, and IP strategy support.', items: ['Trademark Registration', 'Trademark Renewal', 'Copyright Registration', 'Patent Filing'] },
  { catSlug: 'income-tax', slug: 'itr-1-salaried', tag: 'Income Tax', tagColor: 'navy', title: 'Income Tax Filing', desc: 'Personal and business income tax returns filed accurately and on time.', items: ['ITR-1 to ITR-6 Filing', 'Tax Planning Advisory', 'TDS Returns', 'Notice Reply'] },
  { catSlug: 'mca', slug: 'annual-roc-filing', tag: 'MCA', tagColor: 'sage', title: 'MCA / ROC Compliance', desc: 'Annual filings, director changes, and all Registrar of Companies requirements.', items: ['Annual ROC Filings', 'Director KYC (DIR-3)', 'Share Transfer', 'Capital Change'] },
  { catSlug: 'compliance', slug: 'payroll-processing', tag: 'HR', tagColor: 'rust', title: 'HR & Payroll', desc: 'End-to-end payroll processing, PF/ESI compliance, and HR documentation support.', items: ['Payroll Processing', 'PF & ESI Registration', 'Labour Law Compliance', 'PT Returns'] },
]

const tagColors = { sage: 'bg-sage-pale text-sage border-sage-light/60', rust: 'bg-rust-pale text-rust border-rust/30', gold: 'bg-gold-pale text-gold border-gold/30', navy: 'bg-navy-pale text-navy border-navy/30' }

export default function Home() {
  const navigate = useNavigate()
  const content = useContent()
  const { hero, stats, whyCards, testimonials } = content
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center px-6 md:px-14 lg:px-20 pt-20 pb-12 bg-paper overflow-hidden">
        {/* Background SVG scribbles */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute right-0 top-0 w-[560px] h-full opacity-90" viewBox="0 0 560 700" fill="none" preserveAspectRatio="xMaxYMid meet">
            <path d="M400 40 Q460 80 480 150 Q500 200 460 240" stroke="#4a7c59" strokeWidth="1.5" fill="none" strokeDasharray="6,4" opacity=".25"/>
            <path d="M500 300 Q540 340 520 400 Q505 440 470 450" stroke="#c94f2a" strokeWidth="1.5" fill="none" strokeDasharray="4,6" opacity=".2"/>
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-pale border border-gold/40 rounded-full px-4 py-1.5 mb-7">
              <span className="font-sketch text-[15px] text-gold font-semibold">✦ India's trusted compliance partner</span>
            </div>
            <h1 className="font-display text-[clamp(44px,5.5vw,72px)] font-bold leading-[1.06] text-ink mb-5 tracking-tight">
              {hero.headline}
            </h1>
            <p className="text-[17px] text-muted font-light leading-relaxed mb-9 max-w-[480px]">
              {hero.subtext}
            </p>
            <div className="flex flex-wrap gap-3 items-center mb-12">
              <Button size="lg" onClick={() => navigate('/services')}>Explore Services</Button>
              <Button size="lg" variant="secondary" onClick={() => navigate('/pricing')}>View Pricing</Button>
              <span className="font-sketch text-[17px] text-rust -rotate-2 inline-block">{hero.sketchNote}</span>
            </div>
            <div className="flex gap-0 border-t border-border pt-8">
              {stats.map(({ num, label }, i) => (
                <div key={i} className={`flex-1 ${i > 0 ? 'pl-6 border-l border-dashed border-border' : ''} ${i > 0 ? 'ml-6' : ''}`}>
                  <span className="font-display text-3xl md:text-4xl font-bold text-ink block tracking-tight">{num}</span>
                  <span className="text-[13px] text-muted font-light block mt-1">{label}</span>

                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[440px] h-[440px] animate-float">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <div className="bg-cream border-y border-border px-6 py-4 overflow-x-auto">
        <div className="flex gap-0 min-w-max mx-auto">
          {navCategories.map((cat, i) => (
            <button
              key={cat.slug}
              onClick={() => navigate(`/services/${cat.slug}`)}
              className={`flex items-center gap-2 px-6 py-1.5 whitespace-nowrap transition-colors group ${i < navCategories.length - 1 ? 'border-r border-dashed border-border' : ''}`}
            >
              <span className={`w-2 h-2 rounded-full ${colorMap[cat.color]?.dot} flex-shrink-0`} />
              <span className="text-[14px] text-muted group-hover:text-sage transition-colors">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Why Section */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-paper">
        <SectionHeader
          eyebrow="// why corpease"
          title="Compliance shouldn't<br/>feel like a <em class='text-sage italic'>maze.</em>"
          subtitle="We've rebuilt every step from scratch — faster, clearer, and actually human. Here's what's different about us."
          className="mb-14 max-w-xl"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyCards.map((item, i) => {
            const color = WHY_COLORS[i] || 'sage'
            const bgMap = { sage: 'bg-sage-pale', rust: 'bg-rust-pale', gold: 'bg-gold-pale', navy: 'bg-navy-pale' }
            return (
              <div key={i} className="bg-cream border border-border rounded-2xl p-7 hover:border-sage-light hover:bg-white transition-all duration-200 group relative">
                <div className={`w-12 h-12 rounded-xl ${bgMap[color]} flex items-center justify-center mb-5`}>{WHY_ICONS[i]}</div>
                <span className="absolute top-4 right-4 font-sketch text-[13px] text-border/70 rotate-12">{WHY_SKETCHES[i]}</span>
                <h3 className="font-display text-[19px] font-medium text-ink mb-2.5 tracking-tight">{item.title}</h3>
                <p className="text-[14px] text-muted font-light leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-cream border-t border-border">
        <SectionHeader
          eyebrow="// how it works"
          title="Four steps to<br/><em class='text-sage italic'>fully compliant.</em>"
          align="center"
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-5xl mx-auto">
          <div className="absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed border-border hidden lg:block" />
          {STEPS.map((step) => (
            <div key={step.num} className="text-center px-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-paper border-2 border-border flex items-center justify-center mx-auto mb-5 font-sketch text-2xl font-bold text-sage hover:bg-sage hover:text-white hover:border-sage transition-all duration-200">
                {step.num}
              </div>
              <h4 className="font-display text-[16px] font-medium text-ink mb-2">{step.title}</h4>
              <p className="text-[13px] text-muted font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-paper">
        <SectionHeader
          eyebrow="// our services"
          title="Everything your<br/>business <em class='text-sage italic'>needs.</em>"
          subtitle="One platform for every compliance requirement — from day one to ongoing operations."
          className="mb-14 max-w-xl"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PREVIEW_SERVICES.map((svc, i) => (
            <div
              key={i}
              onClick={() => navigate(`/services/${svc.catSlug}/${svc.slug}`)}
              className="border border-border rounded-2xl p-6 cursor-pointer hover:bg-cream hover:shadow-md transition-all duration-200 bg-paper relative group"
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-${svc.tagColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <span className={`inline-block font-sketch text-[13px] font-semibold px-3 py-0.5 rounded-full border mb-3.5 ${tagColors[svc.tagColor]}`}>{svc.tag}</span>
              <h3 className="font-display text-[19px] font-medium text-ink mb-2.5 tracking-tight">{svc.title}</h3>
              <p className="text-[13px] text-muted font-light leading-relaxed mb-4">{svc.desc}</p>
              <ul className="space-y-1.5 mb-4">
                {svc.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-[12px] text-muted">
                    <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="font-sketch text-[20px] text-border group-hover:text-sage transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 absolute bottom-5 right-5">→</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="secondary" size="md" onClick={() => navigate('/services')}>View all services &nbsp;→</Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-cream border-t border-border">
        <SectionHeader
          eyebrow="// what clients say"
          title="Real businesses,<br/><em class='text-sage italic'>real results.</em>"
          className="mb-14 max-w-xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const avatarBg = { sage: 'bg-sage-pale text-sage', rust: 'bg-rust-pale text-rust', gold: 'bg-gold-pale text-gold', navy: 'bg-navy-pale text-navy' }
            return (
              <div key={i} className="bg-paper border border-border rounded-2xl p-7 relative">
                <span className="font-display text-7xl leading-none text-sage-pale absolute top-3 right-4 font-bold select-none">"</span>
                <p className="text-[15px] text-ink font-light leading-relaxed italic mb-5">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${avatarBg[t.color] || avatarBg.sage} flex items-center justify-center font-sketch text-[15px] font-bold flex-shrink-0`}>{t.initials}</div>
                  <div>
                    <div className="text-[14px] font-medium text-ink">{t.author}</div>
                    <div className="text-[12px] text-muted">{t.role}{t.company ? `, ${t.company}` : ''}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTABand
        title="Ready to get"
        italic="compliant?"
        subtitle="Join thousands of businesses that trust CorpEase for stress-free compliance. Start your journey today."
        ctaLabel="Talk to an Expert →"
        note="No commitment. Free first consultation."
      />
    </div>
  )
}

// Icon helpers
function CheckIcon() {
  return <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 13 L10 19 L22 7" stroke="#4a7c59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function ClockIcon() {
  return <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="9" stroke="#c94f2a" strokeWidth="2"/><path d="M13 7 L13 13 L17 15" stroke="#c94f2a" strokeWidth="2" strokeLinecap="round"/></svg>
}
function ShieldIcon() {
  return <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M6 4 L20 4 L20 14 Q20 21 13 24 Q6 21 6 14 Z" stroke="#d4a017" strokeWidth="2" fill="none"/><path d="M10 13 L12 15 L16 11" stroke="#d4a017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function LockIcon() {
  return <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="5" y="12" width="16" height="11" rx="3" stroke="#1e3a5f" strokeWidth="2" fill="none"/><path d="M9 12 L9 8 Q9 4 13 4 Q17 4 17 8 L17 12" stroke="#1e3a5f" strokeWidth="2" fill="none"/></svg>
}
function PeopleIcon() {
  return <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="9" cy="10" r="4" stroke="#4a7c59" strokeWidth="2"/><circle cx="17" cy="10" r="4" stroke="#4a7c59" strokeWidth="2"/><path d="M3 22 Q6 16 9 16 Q13 16 13 16 Q16 16 20 22" stroke="#4a7c59" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
}
function BuildingIcon() {
  return <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 22 L6 13 L13 4 L20 13 L22 22" stroke="#c94f2a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22 L9 17 L13 15 L17 17 L17 22" stroke="#c94f2a" strokeWidth="2" fill="none"/></svg>
}
