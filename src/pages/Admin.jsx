import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { DEFAULT_CONTENT } from '../data/siteContent'
import { useContent, updateContent, resetContent, exportAllContent, importAllContent } from '../hooks/useContent'
import { allServicesByCategory, saveServiceOverride, resetServiceOverride, getServiceOverride, saveCustomService, deleteCustomService, getCustomServicesByCategory } from '../data/services/index'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, RECOVERY_EMAIL } from '../config/emailjs'

const DEFAULT_USER = 'admin'
const DEFAULT_PASS = 'gtc2024'

function getCreds() {
  try { return JSON.parse(localStorage.getItem('gtc_admin_creds') || '{}') } catch { return {} }
}
const getUsername = () => getCreds().username || DEFAULT_USER
const getPassword = () => getCreds().password || DEFAULT_PASS

const CATEGORY_LABELS = {
  startup: 'Startup', registrations: 'Registrations', trademark: 'Trademark',
  gst: 'GST', 'income-tax': 'Income Tax', mca: 'MCA', compliance: 'Compliance', global: 'Global',
}

const generateSlug = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// ─── Shared primitives ────────────────────────────────────────────────────────

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] font-medium text-ink uppercase tracking-wide">{label}</label>
      {children}
    </div>
  )
}

const inp = 'w-full px-3 py-2 bg-paper border border-border rounded-lg font-body text-[14px] text-ink outline-none focus:border-sage transition-colors'
const txta = inp + ' resize-none'

function Input({ label, value, onChange, placeholder, type = 'text', readOnly }) {
  return (
    <Field label={label}>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} readOnly={readOnly} className={inp + (readOnly ? ' opacity-60 cursor-default' : '')} />
    </Field>
  )
}

function Textarea({ label, value, onChange, placeholder, rows = 3 }) {
  return (
    <Field label={label}>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows} className={txta} />
    </Field>
  )
}

function Card({ title, children }) {
  return (
    <div className="bg-paper border border-border rounded-xl p-6 space-y-4">
      {title && <h3 className="font-display text-[16px] font-semibold text-ink border-b border-border pb-2">{title}</h3>}
      {children}
    </div>
  )
}

function SaveBtn({ onClick, saved }) {
  return (
    <button onClick={onClick} className={`px-6 py-2.5 rounded-full font-body font-medium text-[14px] transition-all ${saved ? 'bg-sage-dark text-white cursor-default' : 'bg-sage text-white hover:bg-sage-dark active:scale-[0.98]'}`}>
      {saved ? '✓ Saved!' : 'Save Changes'}
    </button>
  )
}

function useSaved() {
  const [saved, setSaved] = useState(false)
  const flash = () => { setSaved(true); setTimeout(() => setSaved(false), 2500) }
  return [saved, flash]
}

// ─── Tab 1: General ───────────────────────────────────────────────────────────

function TabGeneral({ content }) {
  const [contact, setContact] = useState({ ...content.contact })
  const [stats, setStats]     = useState(content.stats.map(s => ({ ...s })))
  const [saved, flash]        = useSaved()

  useEffect(() => { setContact({ ...content.contact }) }, [content.contact])
  useEffect(() => { setStats(content.stats.map(s => ({ ...s }))) }, [content.stats])

  return (
    <div className="space-y-6">
      <Card title="Contact Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Email" value={contact.email} onChange={v => setContact(c => ({ ...c, email: v }))} />
          <Input label="Phone" value={contact.phone} onChange={v => setContact(c => ({ ...c, phone: v }))} />
          <Input label="Booking Label" value={contact.bookingLabel} onChange={v => setContact(c => ({ ...c, bookingLabel: v }))} />
          <Input label="Response Time" value={contact.responseTime} onChange={v => setContact(c => ({ ...c, responseTime: v }))} />
        </div>
        <Textarea label="Office Address (use line breaks)" value={contact.address} onChange={v => setContact(c => ({ ...c, address: v }))} rows={3} />
      </Card>
      <Card title="Homepage Stats">
        <div className="space-y-3">
          {stats.map((s, i) => (
            <div key={i} className="grid grid-cols-2 gap-4">
              <Input label={`Stat ${i + 1} — Number`} value={s.num} onChange={v => setStats(arr => arr.map((x, j) => j === i ? { ...x, num: v } : x))} />
              <Input label="Label" value={s.label} onChange={v => setStats(arr => arr.map((x, j) => j === i ? { ...x, label: v } : x))} />
            </div>
          ))}
        </div>
      </Card>
      <div className="flex items-center justify-between">
        <SaveBtn onClick={() => { updateContent('contact', contact); updateContent('stats', stats); flash() }} saved={saved} />
        <button onClick={() => { resetContent('contact'); resetContent('stats') }} className="text-[13px] text-rust underline">Reset to defaults</button>
      </div>
    </div>
  )
}

// ─── Tab 2: Home ──────────────────────────────────────────────────────────────

function TabHome({ content }) {
  const [hero,  setHero]  = useState({ ...content.hero })
  const [cards, setCards] = useState(content.whyCards.map(c => ({ ...c })))
  const [tests, setTests] = useState(content.testimonials.map(t => ({ ...t })))
  const [saved, flash]    = useSaved()

  useEffect(() => { setHero({ ...content.hero }) }, [content.hero])
  useEffect(() => { setCards(content.whyCards.map(c => ({ ...c }))) }, [content.whyCards])
  useEffect(() => { setTests(content.testimonials.map(t => ({ ...t }))) }, [content.testimonials])

  return (
    <div className="space-y-6">
      <Card title="Hero Section">
        <Input label="Badge Text" value={hero.badge} onChange={v => setHero(h => ({ ...h, badge: v }))} />
        <Input label="Headline" value={hero.headline} onChange={v => setHero(h => ({ ...h, headline: v }))} />
        <Textarea label="Subtext" value={hero.subtext} onChange={v => setHero(h => ({ ...h, subtext: v }))} rows={2} />
        <Input label="Sketch Note (small scribbled text)" value={hero.sketchNote} onChange={v => setHero(h => ({ ...h, sketchNote: v }))} />
      </Card>
      <Card title="Why GTC — 6 Cards">
        {cards.map((c, i) => (
          <div key={i} className="border border-border rounded-lg p-4 space-y-3">
            <div className="text-[12px] font-medium text-muted uppercase tracking-wide">Card {i + 1}</div>
            <div className="grid grid-cols-[80px_1fr] gap-3">
              <Input label="Icon" value={c.icon} onChange={v => setCards(arr => arr.map((x, j) => j === i ? { ...x, icon: v } : x))} />
              <Input label="Title" value={c.title} onChange={v => setCards(arr => arr.map((x, j) => j === i ? { ...x, title: v } : x))} />
            </div>
            <Textarea label="Description" value={c.desc} onChange={v => setCards(arr => arr.map((x, j) => j === i ? { ...x, desc: v } : x))} rows={2} />
          </div>
        ))}
      </Card>
      <Card title="Testimonials">
        <div className="space-y-4">
          {tests.map((t, i) => (
            <div key={i} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-muted uppercase tracking-wide font-medium">Testimonial {i + 1}</span>
                {tests.length > 1 && <button onClick={() => setTests(arr => arr.filter((_, j) => j !== i))} className="text-rust text-[12px] underline">Remove</button>}
              </div>
              <Textarea label="Quote" value={t.quote} onChange={v => setTests(arr => arr.map((x, j) => j === i ? { ...x, quote: v } : x))} rows={2} />
              <div className="grid grid-cols-2 gap-3">
                <Input label="Author Name" value={t.author} onChange={v => setTests(arr => arr.map((x, j) => j === i ? { ...x, author: v } : x))} />
                <Input label="Initials (2 chars)" value={t.initials} onChange={v => setTests(arr => arr.map((x, j) => j === i ? { ...x, initials: v } : x))} />
                <Input label="Role" value={t.role} onChange={v => setTests(arr => arr.map((x, j) => j === i ? { ...x, role: v } : x))} />
                <Input label="Company" value={t.company} onChange={v => setTests(arr => arr.map((x, j) => j === i ? { ...x, company: v } : x))} />
              </div>
              <Field label="Avatar Colour">
                <select value={t.color} onChange={e => setTests(arr => arr.map((x, j) => j === i ? { ...x, color: e.target.value } : x))} className={inp}>
                  {['sage', 'rust', 'gold', 'navy'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
            </div>
          ))}
        </div>
        <button onClick={() => setTests(arr => [...arr, { quote: '', author: '', role: '', company: '', initials: '', color: 'sage' }])} className="text-sage text-[13px] font-medium underline">+ Add Testimonial</button>
      </Card>
      <div className="flex items-center justify-between">
        <SaveBtn onClick={() => { updateContent('hero', hero); updateContent('whyCards', cards); updateContent('testimonials', tests); flash() }} saved={saved} />
        <button onClick={() => { resetContent('hero'); resetContent('whyCards'); resetContent('testimonials') }} className="text-[13px] text-rust underline">Reset to defaults</button>
      </div>
    </div>
  )
}

// ─── Tab 3: Pricing ───────────────────────────────────────────────────────────

function TabPricing({ content }) {
  const [plans, setPlans] = useState(content.pricingPlans.map(p => ({ ...p, features: p.features.map(f => ({ ...f })) })))
  const [saved, flash]    = useSaved()

  useEffect(() => { setPlans(content.pricingPlans.map(p => ({ ...p, features: p.features.map(f => ({ ...f })) }))) }, [content.pricingPlans])

  const setField = (pi, field, val) => setPlans(arr => arr.map((p, i) => i === pi ? { ...p, [field]: val } : p))
  const setFeat  = (pi, fi, field, val) => setPlans(arr => arr.map((p, i) => i === pi ? { ...p, features: p.features.map((f, j) => j === fi ? { ...f, [field]: val } : f) } : p))
  const addFeat  = pi => setPlans(arr => arr.map((p, i) => i === pi ? { ...p, features: [...p.features, { text: '', included: true }] } : p))
  const remFeat  = (pi, fi) => setPlans(arr => arr.map((p, i) => i === pi ? { ...p, features: p.features.filter((_, j) => j !== fi) } : p))

  return (
    <div className="space-y-6">
      {plans.map((plan, pi) => (
        <Card key={plan.id} title={`Plan: ${plan.name}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Plan Name" value={plan.name} onChange={v => setField(pi, 'name', v)} />
            <Input label="CTA Button Text" value={plan.cta} onChange={v => setField(pi, 'cta', v)} />
            <Input label="Monthly Price (₹)" type="number" value={plan.monthlyPrice} onChange={v => setField(pi, 'monthlyPrice', Number(v))} />
            <Input label="Yearly Price (₹)" type="number" value={plan.yearlyPrice} onChange={v => setField(pi, 'yearlyPrice', Number(v))} />
          </div>
          <Input label="Badge Text (leave blank for none)" value={plan.badge} onChange={v => setField(pi, 'badge', v)} />
          <Textarea label="Description" value={plan.desc} onChange={v => setField(pi, 'desc', v)} rows={2} />
          <Field label="Featured (highlighted card)">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={plan.featured} onChange={e => setField(pi, 'featured', e.target.checked)} className="w-4 h-4 accent-sage" />
              <span className="text-[13px] text-ink">Mark as featured plan</span>
            </label>
          </Field>
          <div>
            <div className="text-[12px] font-medium text-ink uppercase tracking-wide mb-2">Features</div>
            <div className="space-y-2">
              {plan.features.map((feat, fi) => (
                <div key={fi} className="flex items-center gap-3">
                  <input type="checkbox" checked={feat.included} onChange={e => setFeat(pi, fi, 'included', e.target.checked)} className="w-4 h-4 accent-sage flex-shrink-0" />
                  <input type="text" value={feat.text} onChange={e => setFeat(pi, fi, 'text', e.target.value)} className={inp + ' flex-1'} placeholder="Feature description" />
                  <button onClick={() => remFeat(pi, fi)} className="text-rust text-[12px] flex-shrink-0">✕</button>
                </div>
              ))}
            </div>
            <button onClick={() => addFeat(pi)} className="mt-2 text-sage text-[13px] font-medium underline">+ Add Feature</button>
          </div>
        </Card>
      ))}
      <div className="flex items-center justify-between">
        <SaveBtn onClick={() => { updateContent('pricingPlans', plans); flash() }} saved={saved} />
        <button onClick={() => resetContent('pricingPlans')} className="text-[13px] text-rust underline">Reset to defaults</button>
      </div>
    </div>
  )
}

// ─── Tab 4: About ─────────────────────────────────────────────────────────────

function TabAbout({ content }) {
  const [about, setAbout] = useState(() => ({
    story: content.about.story.slice(), blockquote: content.about.blockquote,
    blockquoteAuthor: content.about.blockquoteAuthor,
    stats: content.about.stats.map(s => ({ ...s })),
    team: content.about.team.map(t => ({ ...t })),
    values: content.about.values.map(v => ({ ...v })),
  }))
  const [saved, flash] = useSaved()

  useEffect(() => {
    setAbout({ story: content.about.story.slice(), blockquote: content.about.blockquote, blockquoteAuthor: content.about.blockquoteAuthor, stats: content.about.stats.map(s => ({ ...s })), team: content.about.team.map(t => ({ ...t })), values: content.about.values.map(v => ({ ...v })) })
  }, [content.about])

  const sf = (field, val) => setAbout(a => ({ ...a, [field]: val }))

  return (
    <div className="space-y-6">
      <Card title="Our Story — Paragraphs">
        {about.story.map((para, i) => (
          <Textarea key={i} label={`Paragraph ${i + 1}`} value={para} onChange={v => sf('story', about.story.map((p, j) => j === i ? v : p))} rows={3} />
        ))}
      </Card>
      <Card title="Blockquote">
        <Textarea label="Quote Text" value={about.blockquote} onChange={v => sf('blockquote', v)} rows={2} />
        <Input label="Author" value={about.blockquoteAuthor} onChange={v => sf('blockquoteAuthor', v)} />
      </Card>
      <Card title="Company Stats (About page)">
        {about.stats.map((s, i) => (
          <div key={i} className="grid grid-cols-3 gap-3">
            <Input label={`Stat ${i + 1}`} value={s.num} onChange={v => sf('stats', about.stats.map((x, j) => j === i ? { ...x, num: v } : x))} />
            <Input label="Label" value={s.label} onChange={v => sf('stats', about.stats.map((x, j) => j === i ? { ...x, label: v } : x))} />
            <Field label="Colour"><select value={s.color} onChange={e => sf('stats', about.stats.map((x, j) => j === i ? { ...x, color: e.target.value } : x))} className={inp}>{['sage','rust','gold','navy'].map(c=><option key={c} value={c}>{c}</option>)}</select></Field>
          </div>
        ))}
      </Card>
      <Card title="Team Members">
        <div className="space-y-4">
          {about.team.map((m, i) => (
            <div key={i} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-muted uppercase tracking-wide font-medium">Member {i + 1}</span>
                {about.team.length > 1 && <button onClick={() => sf('team', about.team.filter((_, j) => j !== i))} className="text-rust text-[12px] underline">Remove</button>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input label="Initials" value={m.initials} onChange={v => sf('team', about.team.map((x, j) => j === i ? { ...x, initials: v } : x))} />
                <Input label="Full Name" value={m.name} onChange={v => sf('team', about.team.map((x, j) => j === i ? { ...x, name: v } : x))} />
                <Input label="Role" value={m.role} onChange={v => sf('team', about.team.map((x, j) => j === i ? { ...x, role: v } : x))} />
                <Input label="Note (e.g. CA · 12 yrs)" value={m.note} onChange={v => sf('team', about.team.map((x, j) => j === i ? { ...x, note: v } : x))} />
              </div>
              <Field label="Colour"><select value={m.color} onChange={e => sf('team', about.team.map((x, j) => j === i ? { ...x, color: e.target.value } : x))} className={inp}>{['sage','rust','gold','navy'].map(c=><option key={c} value={c}>{c}</option>)}</select></Field>
            </div>
          ))}
        </div>
        <button onClick={() => sf('team', [...about.team, { initials: '', name: '', role: '', note: '', color: 'sage' }])} className="text-sage text-[13px] font-medium underline">+ Add Team Member</button>
      </Card>
      <Card title="Values — Cards">
        {about.values.map((v, i) => (
          <div key={i} className="border border-border rounded-lg p-4 space-y-3">
            <span className="text-[12px] text-muted uppercase tracking-wide font-medium">Value {i + 1}</span>
            <div className="grid grid-cols-[80px_1fr] gap-3">
              <Input label="Icon" value={v.icon} onChange={val => sf('values', about.values.map((x, j) => j === i ? { ...x, icon: val } : x))} />
              <Input label="Title" value={v.title} onChange={val => sf('values', about.values.map((x, j) => j === i ? { ...x, title: val } : x))} />
            </div>
            <Textarea label="Description" value={v.desc} onChange={val => sf('values', about.values.map((x, j) => j === i ? { ...x, desc: val } : x))} rows={2} />
          </div>
        ))}
      </Card>
      <div className="flex items-center justify-between">
        <SaveBtn onClick={() => { updateContent('about', about); flash() }} saved={saved} />
        <button onClick={() => resetContent('about')} className="text-[13px] text-rust underline">Reset to defaults</button>
      </div>
    </div>
  )
}

// ─── Tab 5: Services ──────────────────────────────────────────────────────────

function blankService(categorySlug) {
  return {
    slug: '', name: '', tagline: '',
    category: { slug: categorySlug, label: CATEGORY_LABELS[categorySlug], color: 'sage' },
    heroDescription: '', whatIs: '',
    benefits: [{ title: '', description: '' }, { title: '', description: '' }, { title: '', description: '' }, { title: '', description: '' }],
    steps: [{ num: 1, title: '', description: '' }, { num: 2, title: '', description: '' }],
    documents: [''],
    faqs: [{ question: '', answer: '' }],
    pricing: { plans: [{ name: 'Basic', price: 0, features: [] }, { name: 'Standard', price: 0, features: [] }, { name: 'Premium', price: 0, features: [] }] },
    isCustom: true,
  }
}

function ServiceEditor({ base, isNew, categorySlug, onSaved, onDeleted }) {
  const initForm = () => {
    if (isNew) return { ...base }
    const override = getServiceOverride(base.slug)
    if (!override) return {
      name: base.name, tagline: base.tagline, heroDescription: base.heroDescription, whatIs: base.whatIs,
      benefits: base.benefits.map(b => ({ ...b })), steps: base.steps.map(s => ({ ...s })),
      documents: base.documents.slice(), faqs: base.faqs.map(f => ({ ...f })),
      pricing: { plans: base.pricing.plans.map(p => ({ ...p, features: p.features.slice() })) },
    }
    return {
      name: override.name ?? base.name, tagline: override.tagline ?? base.tagline,
      heroDescription: override.heroDescription ?? base.heroDescription, whatIs: override.whatIs ?? base.whatIs,
      benefits: (override.benefits ?? base.benefits).map(b => ({ ...b })),
      steps: (override.steps ?? base.steps).map(s => ({ ...s })),
      documents: (override.documents ?? base.documents).slice(),
      faqs: (override.faqs ?? base.faqs).map(f => ({ ...f })),
      pricing: { plans: ((override.pricing ?? base.pricing).plans ?? base.pricing.plans).map(p => ({ ...p, features: (p.features ?? []).slice() })) },
    }
  }

  const [form, setForm] = useState(initForm)
  const [saved, flash]  = useSaved()
  const [unsaved, setUnsaved] = useState(false)
  const [slugEdited, setSlugEdited] = useState(false)

  useEffect(() => { setForm(initForm()); setUnsaved(false); setSlugEdited(false) }, [base.slug, isNew])

  const upd = (field, val) => { setForm(f => ({ ...f, [field]: val })); setUnsaved(true) }
  const handleNameChange = v => {
    upd('name', v)
    if (!slugEdited) upd('slug', generateSlug(v))
  }

  const save = () => {
    if (isNew) {
      if (!form.slug) return alert('Please enter a service name first.')
      saveCustomService(categorySlug, { ...form, category: { slug: categorySlug, label: CATEGORY_LABELS[categorySlug], color: 'sage' } })
    } else {
      saveServiceOverride(base.slug, form)
    }
    flash(); setUnsaved(false); onSaved()
  }

  const handleDelete = () => {
    if (!window.confirm(`Delete custom service "${form.name}"? This cannot be undone.`)) return
    deleteCustomService(categorySlug, base.slug)
    onDeleted()
  }

  return (
    <div className="space-y-6">
      {unsaved && <div className="bg-gold-pale border border-gold/40 text-gold rounded-lg px-4 py-2 text-[13px] font-medium">You have unsaved changes on this service.</div>}
      <Card title="Basic Info">
        <Input label="Service Name" value={form.name} onChange={handleNameChange} />
        {isNew && (
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <Input label="URL Slug (auto-generated)" value={form.slug} onChange={v => { setSlugEdited(true); upd('slug', v) }} />
            </div>
            <div className="text-[12px] text-muted pb-2">→ /services/{categorySlug}/{form.slug || 'slug'}</div>
          </div>
        )}
        <Input label="Tagline" value={form.tagline} onChange={v => upd('tagline', v)} />
        <Textarea label="Hero Description" value={form.heroDescription} onChange={v => upd('heroDescription', v)} rows={3} />
        <Textarea label="What Is (detailed explanation)" value={form.whatIs} onChange={v => upd('whatIs', v)} rows={4} />
      </Card>
      <Card title="Benefits">
        {form.benefits.map((b, i) => (
          <div key={i} className="border border-border rounded-lg p-4 space-y-3">
            <span className="text-[12px] text-muted uppercase tracking-wide font-medium">Benefit {i + 1}</span>
            <Input label="Title" value={b.title} onChange={v => upd('benefits', form.benefits.map((x, j) => j === i ? { ...x, title: v } : x))} />
            <Textarea label="Description" value={b.description} onChange={v => upd('benefits', form.benefits.map((x, j) => j === i ? { ...x, description: v } : x))} rows={2} />
          </div>
        ))}
      </Card>
      <Card title="Process Steps">
        {form.steps.map((s, i) => (
          <div key={i} className="border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-muted uppercase tracking-wide font-medium">Step {s.num ?? i + 1}</span>
              {form.steps.length > 1 && <button onClick={() => upd('steps', form.steps.filter((_, j) => j !== i).map((x, k) => ({ ...x, num: k + 1 })))} className="text-rust text-[12px] underline">Remove</button>}
            </div>
            <Input label="Title" value={s.title} onChange={v => upd('steps', form.steps.map((x, j) => j === i ? { ...x, title: v } : x))} />
            <Textarea label="Description" value={s.description} onChange={v => upd('steps', form.steps.map((x, j) => j === i ? { ...x, description: v } : x))} rows={2} />
          </div>
        ))}
        <button onClick={() => upd('steps', [...form.steps, { num: form.steps.length + 1, title: '', description: '' }])} className="text-sage text-[13px] font-medium underline">+ Add Step</button>
      </Card>
      <Card title="Documents Required">
        <div className="space-y-2">
          {form.documents.map((doc, i) => (
            <div key={i} className="flex items-center gap-3">
              <input type="text" value={doc} onChange={e => upd('documents', form.documents.map((d, j) => j === i ? e.target.value : d))} className={inp + ' flex-1'} />
              <button onClick={() => upd('documents', form.documents.filter((_, j) => j !== i))} className="text-rust text-[12px]">✕</button>
            </div>
          ))}
        </div>
        <button onClick={() => upd('documents', [...form.documents, ''])} className="mt-2 text-sage text-[13px] font-medium underline">+ Add Document</button>
      </Card>
      <Card title="FAQs">
        {form.faqs.map((faq, i) => (
          <div key={i} className="border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-muted uppercase tracking-wide font-medium">FAQ {i + 1}</span>
              {form.faqs.length > 1 && <button onClick={() => upd('faqs', form.faqs.filter((_, j) => j !== i))} className="text-rust text-[12px] underline">Remove</button>}
            </div>
            <Input label="Question" value={faq.question} onChange={v => upd('faqs', form.faqs.map((x, j) => j === i ? { ...x, question: v } : x))} />
            <Textarea label="Answer" value={faq.answer} onChange={v => upd('faqs', form.faqs.map((x, j) => j === i ? { ...x, answer: v } : x))} rows={2} />
          </div>
        ))}
        <button onClick={() => upd('faqs', [...form.faqs, { question: '', answer: '' }])} className="text-sage text-[13px] font-medium underline">+ Add FAQ</button>
      </Card>
      <Card title="Pricing Plans">
        {form.pricing.plans.map((plan, pi) => (
          <div key={pi} className="border border-border rounded-lg p-4 space-y-3">
            <span className="text-[12px] text-muted uppercase tracking-wide font-medium">Plan {pi + 1}</span>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Plan Name" value={plan.name} onChange={v => upd('pricing', { plans: form.pricing.plans.map((p, j) => j === pi ? { ...p, name: v } : p) })} />
              <Input label="Price (₹)" type="number" value={plan.price} onChange={v => upd('pricing', { plans: form.pricing.plans.map((p, j) => j === pi ? { ...p, price: Number(v) } : p) })} />
            </div>
            <div>
              <div className="text-[12px] font-medium text-ink uppercase tracking-wide mb-2">Features</div>
              <div className="space-y-2">
                {plan.features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-2">
                    <input type="text" value={feat} onChange={e => { const nf = plan.features.map((f, fj) => fj === fi ? e.target.value : f); upd('pricing', { plans: form.pricing.plans.map((p, j) => j === pi ? { ...p, features: nf } : p) }) }} className={inp + ' flex-1'} />
                    <button onClick={() => { const nf = plan.features.filter((_, fj) => fj !== fi); upd('pricing', { plans: form.pricing.plans.map((p, j) => j === pi ? { ...p, features: nf } : p) }) }} className="text-rust text-[12px]">✕</button>
                  </div>
                ))}
              </div>
              <button onClick={() => upd('pricing', { plans: form.pricing.plans.map((p, j) => j === pi ? { ...p, features: [...p.features, ''] } : p) })} className="mt-2 text-sage text-[13px] font-medium underline">+ Add Feature</button>
            </div>
          </div>
        ))}
      </Card>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <SaveBtn onClick={save} saved={saved} />
        <div className="flex gap-4">
          {base.isCustom && <button onClick={handleDelete} className="text-[13px] text-rust font-medium underline">Delete this service</button>}
          {!isNew && !base.isCustom && <button onClick={() => { resetServiceOverride(base.slug); setForm(initForm()); setUnsaved(false) }} className="text-[13px] text-rust underline">Reset to default</button>}
        </div>
      </div>
    </div>
  )
}

function TabServices() {
  const [activeCat, setActiveCat]   = useState('startup')
  const [activeSlug, setActiveSlug] = useState(null)
  const [isNew, setIsNew]           = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const defaultServices = allServicesByCategory[activeCat] || []
  const customServices  = getCustomServicesByCategory(activeCat)
  const allServices     = [...defaultServices, ...customServices]
  const selectedService = isNew
    ? { ...blankService(activeCat), slug: '__new__' }
    : (activeSlug ? allServices.find(s => s.slug === activeSlug) : null)

  const handleCatChange = (cat) => { setActiveCat(cat); setActiveSlug(null); setIsNew(false) }
  const handleSvcSelect = (slug) => { setActiveSlug(slug); setIsNew(false) }
  const handleNew       = () => { setActiveSlug(null); setIsNew(true) }

  return (
    <div className="space-y-6">
      <Card title="Select Category">
        <div className="flex flex-wrap gap-2">
          {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
            <button key={slug} onClick={() => handleCatChange(slug)} className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all border ${activeCat === slug ? 'bg-sage text-white border-sage' : 'bg-paper text-muted border-border hover:border-sage'}`}>{label}</button>
          ))}
        </div>
      </Card>
      <Card title={`Services in ${CATEGORY_LABELS[activeCat]}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {defaultServices.map(svc => {
            const hasOverride = !!getServiceOverride(svc.slug)
            return (
              <button key={svc.slug} onClick={() => handleSvcSelect(svc.slug)} className={`text-left px-4 py-3 rounded-xl border text-[14px] transition-all ${!isNew && activeSlug === svc.slug ? 'bg-sage text-white border-sage' : 'bg-cream border-border hover:border-sage text-ink'}`}>
                {svc.name}
                {hasOverride && <span className="ml-2 text-[10px] font-sketch text-gold">✦ edited</span>}
              </button>
            )
          })}
          {customServices.map(svc => (
            <button key={svc.slug} onClick={() => handleSvcSelect(svc.slug)} className={`text-left px-4 py-3 rounded-xl border text-[14px] transition-all ${!isNew && activeSlug === svc.slug ? 'bg-sage text-white border-sage' : 'bg-cream border-border hover:border-sage text-ink'}`}>
              {svc.name}
              <span className="ml-2 text-[10px] font-sketch text-rust">✦ custom</span>
            </button>
          ))}
        </div>
        <button onClick={handleNew} className={`w-full mt-2 py-3 rounded-xl border-2 border-dashed text-[14px] font-medium transition-all ${isNew ? 'border-sage bg-sage-pale text-sage' : 'border-border text-muted hover:border-sage hover:text-sage'}`}>
          + Add New Service
        </button>
      </Card>
      {(selectedService || isNew) && (
        <div key={(isNew ? 'new' : activeSlug) + refreshKey}>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-display text-xl font-semibold text-ink">{isNew ? `New Service — ${CATEGORY_LABELS[activeCat]}` : `Editing: ${selectedService.name}`}</h3>
          </div>
          <ServiceEditor
            base={isNew ? blankService(activeCat) : selectedService}
            isNew={isNew}
            categorySlug={activeCat}
            onSaved={() => { setRefreshKey(k => k + 1); setIsNew(false) }}
            onDeleted={() => { setActiveSlug(null); setIsNew(false); setRefreshKey(k => k + 1) }}
          />
        </div>
      )}
      {!selectedService && !isNew && (
        <div className="bg-cream border border-dashed border-border rounded-xl p-10 text-center">
          <p className="text-muted text-[14px]">Select a service above to edit, or click "Add New Service" to create one.</p>
        </div>
      )}
    </div>
  )
}

// ─── Tab 6: Legal ─────────────────────────────────────────────────────────────

const LEGAL_KEYS = [
  { key: 'privacyPolicy', label: 'Privacy Policy' },
  { key: 'termsOfService', label: 'Terms of Service' },
  { key: 'refundPolicy', label: 'Refund Policy' },
  { key: 'disclaimer', label: 'Disclaimer' },
]

function LegalPageEditor({ pageKey, data, onSave }) {
  const [local, setLocal] = useState({ lastUpdated: data.lastUpdated, sections: data.sections.map(s => ({ ...s })) })
  const [saved, flash]    = useSaved()

  const setSection = (i, field, val) => setLocal(l => ({ ...l, sections: l.sections.map((s, j) => j === i ? { ...s, [field]: val } : s) }))
  const addSection = () => setLocal(l => ({ ...l, sections: [...l.sections, { heading: '', body: '' }] }))
  const remSection = i => setLocal(l => ({ ...l, sections: l.sections.filter((_, j) => j !== i) }))

  return (
    <div className="space-y-4">
      <Input label="Last Updated" value={local.lastUpdated} onChange={v => setLocal(l => ({ ...l, lastUpdated: v }))} placeholder="e.g. April 2025" />
      <div className="space-y-4">
        {local.sections.map((s, i) => (
          <div key={i} className="border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-muted uppercase tracking-wide font-medium">Section {i + 1}</span>
              {local.sections.length > 1 && <button onClick={() => remSection(i)} className="text-rust text-[12px] underline">Remove</button>}
            </div>
            <Input label="Heading" value={s.heading} onChange={v => setSection(i, 'heading', v)} />
            <Textarea label="Body Text" value={s.body} onChange={v => setSection(i, 'body', v)} rows={4} />
          </div>
        ))}
      </div>
      <button onClick={addSection} className="text-sage text-[13px] font-medium underline">+ Add Section</button>
      <div className="flex items-center justify-between pt-2">
        <SaveBtn onClick={() => { onSave(local); flash() }} saved={saved} />
        <button onClick={() => { setLocal({ lastUpdated: DEFAULT_CONTENT.legal[pageKey].lastUpdated, sections: DEFAULT_CONTENT.legal[pageKey].sections.map(s => ({ ...s })) }) }} className="text-[13px] text-rust underline">Reset to defaults</button>
      </div>
    </div>
  )
}

function TabLegal({ content }) {
  const [activePage, setActivePage] = useState('privacyPolicy')

  const handleSave = (pageKey, data) => {
    const stored = JSON.parse(localStorage.getItem('corpease_content') || '{}')
    if (!stored.legal) stored.legal = {}
    stored.legal[pageKey] = data
    localStorage.setItem('corpease_content', JSON.stringify(stored))
    window.dispatchEvent(new Event('corpease-content-updated'))
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-1 bg-paper border border-border rounded-xl p-1 overflow-x-auto">
        {LEGAL_KEYS.map(({ key, label }) => (
          <button key={key} onClick={() => setActivePage(key)} className={`flex-1 py-2 px-3 rounded-lg text-[13px] font-medium whitespace-nowrap transition-all ${activePage === key ? 'bg-sage text-white shadow-sm' : 'text-muted hover:text-ink'}`}>{label}</button>
        ))}
      </div>
      {LEGAL_KEYS.map(({ key }) => activePage === key && (
        <LegalPageEditor key={key} pageKey={key} data={content.legal[key]} onSave={(data) => handleSave(key, data)} />
      ))}
    </div>
  )
}

// ─── Export / Import / Reset bar ──────────────────────────────────────────────

function DataBar() {
  const fileRef = useRef()
  const [msg, setMsg] = useState('')

  const handleImport = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const ok = importAllContent(ev.target.result)
      setMsg(ok ? '✓ Backup imported!' : '✕ Invalid backup file.')
      setTimeout(() => setMsg(''), 4000)
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const resetAll = () => {
    if (!window.confirm('This will erase ALL customisations and restore factory defaults. Are you sure?')) return
    localStorage.removeItem('corpease_content')
    localStorage.removeItem('corpease_services')
    localStorage.removeItem('corpease_custom_services')
    window.dispatchEvent(new Event('corpease-content-updated'))
  }

  return (
    <div className="mt-10 border-t border-border pt-6 flex flex-wrap items-center gap-4">
      <button onClick={exportAllContent} className="px-5 py-2 rounded-full border border-border bg-paper text-[13px] font-medium text-ink hover:border-sage transition-all">↓ Export Backup</button>
      <button onClick={() => fileRef.current?.click()} className="px-5 py-2 rounded-full border border-border bg-paper text-[13px] font-medium text-ink hover:border-sage transition-all">↑ Import Backup</button>
      <input ref={fileRef} type="file" accept=".json" className="hidden" onChange={handleImport} />
      {msg && <span className={`text-[13px] font-medium ${msg.startsWith('✓') ? 'text-sage' : 'text-rust'}`}>{msg}</span>}
      <button onClick={resetAll} className="ml-auto px-5 py-2 rounded-full border border-rust/40 text-[13px] font-medium text-rust hover:bg-rust-pale transition-all">Reset ALL to defaults</button>
    </div>
  )
}

// ─── Password Gate (with EmailJS forgot-password flow) ───────────────────────

function PasswordGate({ onAuth }) {
  const [view, setView]       = useState('login')    // 'login' | 'forgot' | 'otp' | 'reset'
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail]     = useState('')
  const [otp, setOtp]         = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError]     = useState('')
  const [sending, setSending] = useState(false)

  const err = (msg) => { setError(msg); setTimeout(() => setError(''), 4000) }

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === getUsername() && password === getPassword()) {
      sessionStorage.setItem('gtc_admin', '1')
      onAuth()
    } else {
      err('Incorrect username or password.')
    }
  }

  const handleSendOtp = async (e) => {
    e.preventDefault()
    if (email !== RECOVERY_EMAIL) { err('Email not recognised.'); return }
    setSending(true)
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    sessionStorage.setItem('gtc_otp', JSON.stringify({ code, expires: Date.now() + 10 * 60 * 1000 }))
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { to_email: email, otp: code }, EMAILJS_PUBLIC_KEY)
      setView('otp')
    } catch (e) {
      console.error('EmailJS error:', e)
      err(`Failed to send OTP: ${e?.text || e?.message || JSON.stringify(e)}`)
    }
    setSending(false)
  }

  const handleVerifyOtp = (e) => {
    e.preventDefault()
    try {
      const stored = JSON.parse(sessionStorage.getItem('gtc_otp') || '{}')
      if (!stored.code || Date.now() > stored.expires) { err('OTP expired. Request a new one.'); return }
      if (otp !== stored.code) { err('Incorrect OTP.'); return }
      setView('reset')
    } catch { err('Invalid OTP.') }
  }

  const handleResetPass = (e) => {
    e.preventDefault()
    if (newPass.length < 6) { err('Password must be at least 6 characters.'); return }
    if (newPass !== confirmPass) { err('Passwords do not match.'); return }
    const creds = getCreds()
    localStorage.setItem('gtc_admin_creds', JSON.stringify({ ...creds, password: newPass }))
    sessionStorage.removeItem('gtc_otp')
    sessionStorage.setItem('gtc_admin', '1')
    onAuth()
  }

  const GtcIcon = () => (
    <svg width="44" height="44" viewBox="360 360 780 780" fill="none" className="mx-auto mb-4">
      <path fill="#114d23" d="M 682.476562 752.65625 C 691.378906 753.09375 698.25 746.832031 700.480469 736.347656 C 702.222656 728.160156 701.144531 720.023438 699.117188 712.121094 C 697.164062 704.503906 696.210938 696.726562 694.433594 689.097656 C 691.570312 676.835938 690.335938 664.304688 687.882812 651.96875 C 685.0625 637.816406 682.578125 623.558594 678.007812 609.824219 C 673.96875 599.953125 668.53125 590.773438 661.8125 582.488281 C 647.140625 569.78125 622.046875 558.324219 601.308594 556.730469 C 570.648438 560.914062 549.695312 569.03125 543.679688 588.503906 C 550.035156 596.121094 564.367188 609.773438 585.363281 634.484375 C 595.371094 652.964844 607.644531 682.277344 611.453125 692.203125 C 608.542969 693.519531 597.71875 674.03125 575.910156 638.433594 C 554.183594 614.460938 522.867188 584.207031 518.210938 577.335938 C 515.046875 572.652344 518.695312 566.042969 532.511719 554.214844 C 553.769531 539.871094 578.292969 530.683594 604.585938 528.761719 C 636.136719 530.789062 652.402344 535.1875 667.679688 546.21875 C 690.484375 567.972656 703.894531 607.171875 708.339844 651.75 C 710.613281 682.023438 715.441406 696.578125 727.835938 732.179688 C 742.089844 756.390625 764.320312 780.378906 797.675781 816.871094 C 814.410156 839.671875 834.347656 874.5625 837.667969 887.402344 C 842.480469 911.039062 842.480469 923.15625 818.605469 914.777344 C 817.570312 894.65625 800.894531 858.878906 784.199219 836.566406 C 761.296875 813.394531 732.484375 781.359375 712.753906 756.414062 C 711.058594 754.554688 708.933594 754.988281 707.566406 757.078125 C 704.917969 766.082031 694.847656 765.078125 676.675781 755.160156 C 675.914062 753.300781 677.828125 752.640625 682.476562 752.65625 Z"/>
    </svg>
  )

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-paper border border-border rounded-2xl p-10 text-center space-y-6">
        <div>
          <GtcIcon />
          <h1 className="font-display text-2xl font-bold text-ink">
            {view === 'login' ? 'Admin Panel' : view === 'forgot' ? 'Forgot Password' : view === 'otp' ? 'Enter OTP' : 'New Password'}
          </h1>
          <p className="text-[13px] text-muted font-light mt-1">
            {view === 'login' ? 'Sign in to manage site content.' : view === 'forgot' ? 'Enter your admin email to receive an OTP.' : view === 'otp' ? 'Enter the 6-digit code sent to your email.' : 'Set a new password for your account.'}
          </p>
        </div>

        {view === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-ink">Username</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="admin" className={inp} autoFocus />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-ink">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className={inp} />
            </div>
            {error && <p className="text-rust text-[13px] text-center">{error}</p>}
            <button type="submit" className="w-full py-3 rounded-full bg-sage text-white font-body font-medium text-[15px] hover:bg-sage-dark transition-all">Sign In →</button>
            <button type="button" onClick={() => { setView('forgot'); setError('') }} className="w-full text-[13px] text-muted hover:text-sage transition-colors text-center">Forgot password?</button>
          </form>
        )}

        {view === 'forgot' && (
          <form onSubmit={handleSendOtp} className="space-y-4 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-ink">Admin Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className={inp} autoFocus />
            </div>
            {error && <p className="text-rust text-[13px] text-center">{error}</p>}
            <button type="submit" disabled={sending} className="w-full py-3 rounded-full bg-sage text-white font-body font-medium text-[15px] hover:bg-sage-dark transition-all disabled:opacity-60">{sending ? 'Sending OTP…' : 'Send OTP →'}</button>
            <button type="button" onClick={() => { setView('login'); setError('') }} className="w-full text-[13px] text-muted hover:text-sage transition-colors text-center">← Back to sign in</button>
          </form>
        )}

        {view === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-ink">6-Digit OTP</label>
              <input type="text" value={otp} onChange={e => setOtp(e.target.value)} placeholder="123456" maxLength={6} className={inp + ' text-center text-2xl tracking-widest'} autoFocus />
            </div>
            {error && <p className="text-rust text-[13px] text-center">{error}</p>}
            <button type="submit" className="w-full py-3 rounded-full bg-sage text-white font-body font-medium text-[15px] hover:bg-sage-dark transition-all">Verify OTP →</button>
            <button type="button" onClick={() => { setView('forgot'); setError('') }} className="w-full text-[13px] text-muted hover:text-sage transition-colors text-center">← Resend OTP</button>
          </form>
        )}

        {view === 'reset' && (
          <form onSubmit={handleResetPass} className="space-y-4 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-ink">New Password</label>
              <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)} placeholder="Min. 6 characters" className={inp} autoFocus />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-ink">Confirm Password</label>
              <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} placeholder="Re-enter password" className={inp} />
            </div>
            {error && <p className="text-rust text-[13px] text-center">{error}</p>}
            <button type="submit" className="w-full py-3 rounded-full bg-sage text-white font-body font-medium text-[15px] hover:bg-sage-dark transition-all">Set New Password →</button>
          </form>
        )}
      </div>
    </div>
  )
}

// ─── Admin Shell ──────────────────────────────────────────────────────────────

const TABS = [
  { id: 'general',  label: 'General' },
  { id: 'home',     label: 'Home' },
  { id: 'pricing',  label: 'Pricing' },
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'legal',    label: 'Legal' },
]

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('gtc_admin') === '1')
  const [tab, setTab]       = useState('general')
  const content             = useContent()

  if (!authed) return <PasswordGate onAuth={() => setAuthed(true)} />

  const signOut = () => { sessionStorage.removeItem('gtc_admin'); setAuthed(false) }

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-paper border-b border-border px-6 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="360 360 780 780" fill="none">
            <path fill="#114d23" d="M 682.476562 752.65625 C 691.378906 753.09375 698.25 746.832031 700.480469 736.347656 C 702.222656 728.160156 701.144531 720.023438 699.117188 712.121094 C 691.570312 676.835938 682.578125 623.558594 678.007812 609.824219 C 661.8125 582.488281 622.046875 558.324219 601.308594 556.730469 C 570.648438 560.914062 543.679688 588.503906 564.367188 609.773438 C 607.644531 682.277344 608.542969 693.519531 575.910156 638.433594 C 554.183594 614.460938 518.210938 577.335938 532.511719 554.214844 C 553.769531 539.871094 604.585938 528.761719 643.230469 532.644531 C 690.484375 567.972656 708.339844 651.75 715.441406 696.578125 C 742.089844 756.390625 797.675781 816.871094 837.667969 887.402344 C 842.480469 923.15625 818.605469 914.777344 784.199219 836.566406 C 749.703125 801.953125 712.753906 756.414062 707.566406 757.078125 C 694.847656 765.078125 676.675781 755.160156 675.914062 753.300781 C 677.828125 752.640625 682.476562 752.65625 682.476562 752.65625 Z"/>
          </svg>
          <div>
            <div className="font-display text-[15px] font-bold text-ink leading-tight">GTC Admin</div>
            <div className="font-sketch text-[12px] text-muted">Content Management</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" target="_blank" rel="noreferrer" className="text-[13px] text-sage font-medium underline">View Site ↗</a>
          <button onClick={signOut} className="text-[13px] text-rust font-medium underline">Sign Out</button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-1 bg-paper border border-border rounded-xl p-1 mb-8 overflow-x-auto">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`flex-1 py-2 px-3 rounded-lg text-[13px] font-medium whitespace-nowrap transition-all ${tab === t.id ? 'bg-sage text-white shadow-sm' : 'text-muted hover:text-ink'}`}>{t.label}</button>
          ))}
        </div>

        {tab === 'general'  && <TabGeneral  content={content} />}
        {tab === 'home'     && <TabHome     content={content} />}
        {tab === 'pricing'  && <TabPricing  content={content} />}
        {tab === 'about'    && <TabAbout    content={content} />}
        {tab === 'services' && <TabServices />}
        {tab === 'legal'    && <TabLegal    content={content} />}

        <DataBar />
      </div>
    </div>
  )
}
