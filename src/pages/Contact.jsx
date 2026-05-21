import { useState } from 'react'
import { useContent } from '../hooks/useContent'
import { GOOGLE_SHEET_SCRIPT_URL } from '../config/googleSheets'

const SERVICES_LIST = ['Business Registration', 'GST Registration / Filing', 'Income Tax Filing', 'Trademark Registration', 'MCA / ROC Compliance', 'HR & Payroll', 'Global Expansion', 'Subscription Plans', 'Something else']

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const { contact } = useContent()
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const set = key => val => setFields(f => ({ ...f, [key]: val }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(GOOGLE_SHEET_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(fields),
      })
      setStatus('sent')
      setFields(EMPTY)
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const addressLines = contact.address.split('\n')
  const sending = status === 'sending'
  const sent    = status === 'sent'
  const errored = status === 'error'

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <section className="bg-cream border-b border-border px-6 md:px-16 py-14">
        <span className="font-sketch text-[18px] text-rust block mb-3">// contact us</span>
        <h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold text-ink tracking-tight leading-[1.1] mb-4">
          Let's talk about<br/>your business.
        </h1>
        <p className="text-[17px] text-muted font-light max-w-[540px] leading-relaxed">
          Our experts are ready to understand your needs and recommend the right path forward — no sales pressure.
        </p>
      </section>

      <div className="px-6 md:px-16 py-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        {/* Contact info */}
        <div>
          <h2 className="font-display text-3xl font-bold text-ink tracking-tight mb-3">Get in touch</h2>
          <p className="text-[15px] text-muted font-light leading-relaxed mb-10">
            Whether you have a simple question or need a full compliance roadmap, we're happy to help. Average response time: {contact.responseTime.toLowerCase()}.
          </p>
          <div className="space-y-4 mb-8">
            {[
              { icon: EmailIcon,  bg: 'bg-sage-pale', label: 'Email us',      value: contact.email },
              { icon: PhoneIcon,  bg: 'bg-rust-pale', label: 'Call us',       value: contact.phone },
              { icon: UserIcon,   bg: 'bg-gold-pale', label: 'Book a call',   value: contact.bookingLabel },
              { icon: ClockIcon2, bg: 'bg-navy-pale', label: 'Response time', value: contact.responseTime },
            ].map(({ icon: Icon, bg, label, value }, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-cream border border-border rounded-xl hover:border-sage-light hover:bg-white transition-all">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}><Icon /></div>
                <div>
                  <div className="text-[12px] text-muted mb-0.5">{label}</div>
                  <div className="text-[14px] font-medium text-ink">{value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-cream border border-dashed border-border rounded-xl p-5">
            <span className="font-sketch text-[14px] text-rust block mb-3">offices ✦</span>
            <p className="text-[14px] text-muted font-light leading-relaxed">
              <strong className="text-ink font-medium">Ahmedabad HQ</strong><br/>
              {addressLines.map((line, i) => <span key={i}>{line}{i < addressLines.length - 1 ? <br/> : null}</span>)}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-cream border border-border rounded-2xl p-8">
          <h3 className="font-display text-2xl font-medium text-ink mb-7 tracking-tight">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField label="First name" placeholder="Rahul"  type="text"  required value={fields.firstName} onChange={set('firstName')} />
              <FormField label="Last name"  placeholder="Sharma" type="text"  required value={fields.lastName}  onChange={set('lastName')} />
            </div>
            <FormField label="Email address" placeholder="rahul@yourstartup.com" type="email" required value={fields.email} onChange={set('email')} />
            <FormField label="Phone number"  placeholder="+91 98765 43210"       type="tel"             value={fields.phone} onChange={set('phone')} />

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-ink">What do you need help with?</label>
              <select
                value={fields.service}
                onChange={e => set('service')(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-paper border border-border rounded-xl font-body text-[14px] text-ink outline-none focus:border-sage transition-colors"
              >
                <option value="">Select a service...</option>
                {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-ink">Tell us more</label>
              <textarea
                rows={4}
                value={fields.message}
                onChange={e => set('message')(e.target.value)}
                placeholder="Briefly describe your business and what you're looking for..."
                className="w-full px-3.5 py-2.5 bg-paper border border-border rounded-xl font-body text-[14px] text-ink outline-none focus:border-sage transition-colors resize-none"
              />
            </div>

            {errored && (
              <p className="text-[13px] text-rust text-center">
                Failed to send. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={sending || sent}
              className={`w-full py-3.5 rounded-full font-body font-medium text-[16px] transition-all mt-2 ${
                sent    ? 'bg-sage-dark text-white cursor-default' :
                sending ? 'bg-sage/70 text-white cursor-wait' :
                          'bg-sage text-white hover:bg-sage-dark active:scale-[0.98]'
              }`}
            >
              {sent ? "✓ Message sent! We'll be in touch soon." : sending ? 'Sending…' : 'Send Message →'}
            </button>
          </form>
          <p className="font-sketch text-[14px] text-muted text-center mt-4">✦ We'll get back to you within 2 hours ✦</p>
        </div>
      </div>
    </div>
  )
}

function FormField({ label, placeholder, type, required, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-ink">
        {label}{required && <span className="text-rust ml-0.5">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3.5 py-2.5 bg-paper border border-border rounded-xl font-body text-[14px] text-ink outline-none focus:border-sage transition-colors"
      />
    </div>
  )
}

function EmailIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="#4a7c59" strokeWidth="1.5" fill="none"/><path d="M2 6 L10 12 L18 6" stroke="#4a7c59" strokeWidth="1.5" fill="none"/></svg>
}
function PhoneIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 3h4l2 5-2.5 1.5a9 9 0 0 0 3 3L12 10l5 2v4a2 2 0 0 1-2 2C5.373 18 2 14.627 2 6a2 2 0 0 1 2-3z" stroke="#c94f2a" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg>
}
function UserIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="4" stroke="#d4a017" strokeWidth="1.5"/><path d="M2 18c0-4 3.6-7 8-7s8 3 8 7" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round"/></svg>
}
function ClockIcon2() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#1e3a5f" strokeWidth="1.5"/><path d="M10 6 L10 10 L13 12" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round"/></svg>
}
