export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background dots */}
      <g opacity="0.12">
        {[0,40,80,120,160].map(x => [0,40,80,120,160,200].map(y => (
          <circle key={`${x}-${y}`} cx={220+x} cy={60+y} r="2.5" fill="#4a7c59" />
        )))}
      </g>
      {/* Document stack */}
      <rect x="60" y="120" width="160" height="210" rx="10" fill="#f2ede0" stroke="#c8bda8" strokeWidth="2"/>
      <rect x="50" y="110" width="160" height="210" rx="10" fill="#faf8f3" stroke="#c8bda8" strokeWidth="2"/>
      <rect x="40" y="100" width="160" height="210" rx="10" fill="white" stroke="#4a7c59" strokeWidth="2.5"/>
      {/* Lines */}
      <path d="M60 140 L180 140" stroke="#c8bda8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M60 160 L180 160" stroke="#c8bda8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M60 180 L140 180" stroke="#c8bda8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M60 200 L160 200" stroke="#e8dfc8" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M60 220 L120 220" stroke="#e8dfc8" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Approval stamp */}
      <circle cx="150" cy="255" r="28" fill="#d4ead8" stroke="#4a7c59" strokeWidth="2" strokeDasharray="4,3"/>
      <text x="150" y="262" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#4a7c59" fontWeight="700">✓ OK</text>
      {/* Arrow sketch */}
      <path d="M210 190 Q260 160 280 210 Q285 230 260 240" stroke="#c94f2a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <polygon points="255,248 265,234 270,246" fill="#c94f2a"/>
      {/* Coin stack */}
      <ellipse cx="330" cy="240" rx="32" ry="11" fill="#d4a017" opacity="0.7"/>
      <rect x="298" y="208" width="64" height="32" rx="2" fill="#d4a017" opacity="0.8"/>
      <ellipse cx="330" cy="208" rx="32" ry="11" fill="#e8b820"/>
      <ellipse cx="330" cy="193" rx="32" ry="11" fill="#d4a017" opacity="0.7"/>
      <rect x="298" y="161" width="64" height="32" rx="2" fill="#d4a017" opacity="0.8"/>
      <ellipse cx="330" cy="161" rx="32" ry="11" fill="#e8b820"/>
      {/* Growth arrow */}
      <path d="M280 350 L320 310 L350 330 L400 270" stroke="#4a7c59" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="395,263 408,266 398,276" fill="#4a7c59"/>
      {/* Decorative sketch elements */}
      <text x="390" y="130" fontFamily="Caveat, cursive" fontSize="34" fill="#c94f2a" opacity="0.55" fontWeight="700">✦</text>
      <text x="30" y="380" fontFamily="Caveat, cursive" fontSize="26" fill="#d4a017" opacity="0.45" fontWeight="700">✦</text>
      <text x="380" y="390" fontFamily="Caveat, cursive" fontSize="22" fill="#4a7c59" opacity="0.35">✿</text>
      {/* Dashed curves */}
      <path d="M380 80 Q410 100 420 150 Q425 180 400 200" stroke="#4a7c59" strokeWidth="1.5" fill="none" strokeDasharray="6,4" opacity="0.25"/>
      <path d="M420 280 Q440 310 430 360 Q425 385 400 390" stroke="#c94f2a" strokeWidth="1.5" fill="none" strokeDasharray="4,6" opacity="0.2"/>
    </svg>
  )
}
