export default function Button({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-full cursor-pointer'
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-[15px]',
    lg: 'px-9 py-4 text-base',
  }
  const variants = {
    primary:   'bg-sage text-white hover:bg-sage-dark active:scale-[0.98] shadow-sm',
    secondary: 'bg-transparent text-ink border border-border hover:border-sage hover:text-sage',
    white:     'bg-white text-sage hover:bg-paper',
    ghost:     'bg-transparent text-muted hover:text-ink hover:bg-cream',
    rust:      'bg-rust text-white hover:bg-rust-dark',
    gold:      'bg-gold text-white hover:bg-gold-dark',
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
