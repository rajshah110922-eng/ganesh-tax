const colorMap = {
  sage:  'bg-sage-pale text-sage border-sage-light/60',
  rust:  'bg-rust-pale text-rust border-rust/30',
  gold:  'bg-gold-pale text-gold border-gold/30',
  navy:  'bg-navy-pale text-navy border-navy/30',
  muted: 'bg-cream text-muted border-border',
}

export default function Badge({ children, color = 'sage', className = '' }) {
  return (
    <span className={`inline-block font-sketch text-[13px] font-semibold px-3 py-0.5 rounded-full border ${colorMap[color] || colorMap.sage} ${className}`}>
      {children}
    </span>
  )
}
