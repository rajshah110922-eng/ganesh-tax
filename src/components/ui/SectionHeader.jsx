export default function SectionHeader({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`${alignCls} ${className}`}>
      {eyebrow && (
        <span className="font-sketch text-[18px] font-semibold text-rust block mb-3 -rotate-1">{eyebrow}</span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.1] mb-4"
        dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && (
        <p className="text-base text-muted font-light leading-relaxed max-w-lg">{subtitle}</p>
      )}
    </div>
  )
}
