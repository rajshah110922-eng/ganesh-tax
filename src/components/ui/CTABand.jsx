import { useNavigate } from 'react-router-dom'
import Button from './Button'

export default function CTABand({ title, italic, subtitle, ctaLabel = 'Talk to an Expert →', note }) {
  const navigate = useNavigate()
  return (
    <section className="bg-sage px-6 md:px-16 py-16 md:py-20 relative overflow-hidden text-center">
      <span className="absolute right-10 top-6 font-sketch text-6xl text-white/10 -rotate-12 select-none pointer-events-none">✦ start now ✦</span>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
        {title}<br/><em className="text-gold-pale">{italic}</em>
      </h2>
      {subtitle && <p className="text-white/75 text-base font-light mb-8 max-w-md mx-auto leading-relaxed">{subtitle}</p>}
      <Button variant="white" size="lg" onClick={() => navigate('/contact')}>{ctaLabel}</Button>
      {note && <p className="text-white/50 text-[13px] mt-4">{note}</p>}
    </section>
  )
}
