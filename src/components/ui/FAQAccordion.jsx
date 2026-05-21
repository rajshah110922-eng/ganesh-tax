import { useState } from 'react'

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden bg-paper transition-all">
          <button
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-cream transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-display text-[15px] font-medium text-ink">{faq.question}</span>
            <span className={`text-sage text-xl flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-[14px] text-muted leading-relaxed font-light animate-fade-in-up">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
