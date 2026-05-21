// Unique inline SVG illustrations for each of the 45 services.
// All use the same design language: cream/sage/rust/gold/navy, 1.5-2px strokes.

const S = '#4a7c59'   // sage
const R = '#c94f2a'   // rust
const G = '#d4a017'   // gold
const N = '#1e3a5f'   // navy
const C = '#f2ede0'   // cream
const P = '#faf8f3'   // paper
const B = '#c8bda8'   // border

const base = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }

// ── Startup ────────────────────────────────────────────────────────────────

export function PrivateLimitedSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="60" y="40" width="80" height="90" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      <rect x="75" y="55" width="15" height="15" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="95" y="55" width="15" height="15" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="115" y="55" width="15" height="15" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="75" y="78" width="15" height="15" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="95" y="78" width="15" height="15" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="115" y="78" width="15" height="15" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="88" y="100" width="24" height="30" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <line x1="100" y1="28" x2="100" y2="42" stroke={R} strokeWidth="2"/>
      <path d="M100 28 L108 33 L100 38 L92 33 Z" fill={R} stroke={R} strokeWidth="1"/>
    </svg>
  )
}

export function LlpSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="50" width="44" height="80" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      <rect x="116" y="50" width="44" height="80" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <rect x="52" y="65" width="12" height="12" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="52" y="85" width="12" height="12" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="136" y="65" width="12" height="12" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <rect x="136" y="85" width="12" height="12" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <path d="M84 80 C90 72 110 72 116 80" stroke={G} strokeWidth="2.5" strokeDasharray="4 3"/>
      <path d="M84 80 C90 88 110 88 116 80" stroke={G} strokeWidth="2.5" strokeDasharray="4 3"/>
      <circle cx="100" cy="80" r="7" fill={G} stroke={G} strokeWidth="1" opacity="0.3"/>
    </svg>
  )
}

export function OpcSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M70 130 L70 75 L100 55 L130 75 L130 130 Z" fill={C} stroke={S} strokeWidth="2"/>
      <rect x="88" y="100" width="24" height="30" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="80" y="80" width="14" height="14" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="106" y="80" width="14" height="14" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <circle cx="100" cy="42" r="12" fill={C} stroke={S} strokeWidth="2"/>
      <circle cx="100" cy="38" r="5" fill={S} opacity="0.4"/>
      <path d="M90 48 Q100 54 110 48" stroke={S} strokeWidth="1.5"/>
      <polygon points="100,55 96,65 104,65" fill={S} opacity="0.5"/>
    </svg>
  )
}

export function SoleProprietorshipSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="45" y="72" width="110" height="65" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      <path d="M45 80 L100 58 L155 80" stroke={S} strokeWidth="2"/>
      <rect x="65" y="90" width="70" height="6" rx="3" fill={G} opacity="0.5"/>
      <rect x="65" y="103" width="70" height="6" rx="3" fill={G} opacity="0.3"/>
      <path d="M80 137 L80 115 L120 115 L120 137" stroke={S} strokeWidth="1.5"/>
      <circle cx="100" cy="44" r="11" fill={C} stroke={R} strokeWidth="1.8"/>
      <circle cx="100" cy="40" r="4.5" fill={R} opacity="0.35"/>
      <path d="M91 50 Q100 56 109 50" stroke={R} strokeWidth="1.5"/>
      <line x1="100" y1="55" x2="100" y2="72" stroke={R} strokeWidth="1.5" strokeDasharray="3 2"/>
    </svg>
  )
}

export function PartnershipFirmSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="68" cy="52" r="13" fill={C} stroke={S} strokeWidth="1.8"/>
      <circle cx="132" cy="52" r="13" fill={C} stroke={N} strokeWidth="1.8"/>
      <path d="M55 65 Q55 85 68 90" stroke={S} strokeWidth="1.8"/>
      <path d="M81 65 Q81 85 68 90" stroke={S} strokeWidth="1.8"/>
      <path d="M119 65 Q119 85 132 90" stroke={N} strokeWidth="1.8"/>
      <path d="M145 65 Q145 85 132 90" stroke={N} strokeWidth="1.8"/>
      <path d="M80 108 C85 95 115 95 120 108" stroke={G} strokeWidth="2" strokeDasharray="3 2"/>
      <path d="M88 112 L100 100 L112 112" fill={G} stroke={G} strokeWidth="1.5" opacity="0.6"/>
      <path d="M94 118 L94 108 M100 120 L100 100 M106 118 L106 108" stroke={G} strokeWidth="1.5" opacity="0.6"/>
    </svg>
  )
}

export function NgoSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M55 90 L55 130 L145 130 L145 90 L100 65 Z" fill={C} stroke={S} strokeWidth="2"/>
      <path d="M82 130 L82 108 L118 108 L118 130" stroke={S} strokeWidth="1.5"/>
      <path d="M100,48 C100,48 78,58 78,72 C78,82 89,87 100,82 C111,87 122,82 122,72 C122,58 100,48 100,48Z" fill={R} stroke={R} strokeWidth="1" opacity="0.7"/>
      <rect x="68" y="90" width="16" height="16" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="116" y="90" width="16" height="16" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
    </svg>
  )
}

export function MsmeUdyamSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="85" cy="80" r="32" fill={C} stroke={S} strokeWidth="2"/>
      <circle cx="85" cy="80" r="14" fill={P} stroke={S} strokeWidth="1.5"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => {
        const rad = (a * Math.PI) / 180
        const ix = 85 + 24 * Math.cos(rad), iy = 80 + 24 * Math.sin(rad)
        const ox = 85 + 32 * Math.cos(rad), oy = 80 + 32 * Math.sin(rad)
        return <line key={i} x1={ix} y1={iy} x2={ox} y2={oy} stroke={S} strokeWidth="6" strokeLinecap="round"/>
      })}
      <rect x="122" y="62" width="40" height="52" rx="4" fill={C} stroke={G} strokeWidth="1.8"/>
      <path d="M129 75 L154 75 M129 83 L154 83 M129 91 L148 91" stroke={G} strokeWidth="1.5"/>
      <path d="M129 67 L135 67" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="151" cy="105" r="8" fill={G} stroke={G} strokeWidth="1" opacity="0.3"/>
      <path d="M147 105 L150 108 L155 102" stroke={G} strokeWidth="1.8"/>
    </svg>
  )
}

export function StartupIndiaSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M100 130 L88 105 L100 40 L112 105 Z" fill={C} stroke={S} strokeWidth="2"/>
      <path d="M88 105 C82 110 75 112 68 108 L80 95 Z" fill={R} stroke={R} strokeWidth="1" opacity="0.7"/>
      <path d="M112 105 C118 110 125 112 132 108 L120 95 Z" fill={G} stroke={G} strokeWidth="1" opacity="0.7"/>
      <circle cx="100" cy="75" r="10" fill={P} stroke={S} strokeWidth="1.5"/>
      <path d="M60 52 L75 52 M165 52 L150 52" stroke={S} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
      <path d="M65 65 L75 60 M135 65 L125 60" stroke={S} strokeWidth="1.5" opacity="0.4"/>
      {[[-20,-15],[20,-15],[0,-22]].map(([dx,dy],i)=>(
        <circle key={i} cx={100+dx} cy={100+dy} r="2" fill={G}/>
      ))}
      <rect x="60" y="128" width="80" height="8" rx="4" fill={S} opacity="0.15"/>
    </svg>
  )
}

// ── Registrations ──────────────────────────────────────────────────────────

export function TradeLicenseSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="50" y="65" width="100" height="70" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <path d="M50 80 L150 80" stroke={N} strokeWidth="1.5"/>
      <path d="M65 65 L65 55 L135 55 L135 65" stroke={N} strokeWidth="1.8"/>
      <circle cx="100" cy="105" r="18" fill={P} stroke={G} strokeWidth="2"/>
      <path d="M92 105 L98 111 L110 99" stroke={G} strokeWidth="2.2"/>
      <path d="M72 72 L88 72 M112 72 L128 72" stroke={N} strokeWidth="1.5"/>
      <path d="M60 45 L80 38 L100 42 L120 38 L140 45" stroke={R} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6"/>
    </svg>
  )
}

export function ShopEstablishmentSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="75" width="120" height="60" rx="2" fill={C} stroke={S} strokeWidth="2"/>
      <path d="M40 75 L40 55 L160 55 L160 75" stroke={S} strokeWidth="2"/>
      <path d="M40 75 Q70 90 100 75 Q130 90 160 75" stroke={S} strokeWidth="1.5" fill="none"/>
      <rect x="78" y="95" width="44" height="40" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <circle cx="100" cy="117" r="4" fill={S} opacity="0.4"/>
      <rect x="52" y="88" width="22" height="22" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="126" y="88" width="22" height="22" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <path d="M65 48 L65 38 M100 48 L100 35 M135 48 L135 38" stroke={G} strokeWidth="1.5"/>
      <path d="M55 38 L145 38" stroke={G} strokeWidth="1.5"/>
    </svg>
  )
}

export function FssaiSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="80" r="45" fill={C} stroke={S} strokeWidth="2" strokeDasharray="5 3"/>
      <path d="M80 65 L80 100 M80 72 L90 65 M80 83 L92 78" stroke={R} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M110 65 Q125 65 125 78 Q125 90 110 90 L110 65Z" fill={C} stroke={R} strokeWidth="2"/>
      <path d="M110 90 L110 100" stroke={R} strokeWidth="2.5"/>
      <path d="M55 115 Q75 125 100 118 Q125 125 145 115" stroke={S} strokeWidth="1.5" fill="none"/>
      <circle cx="100" cy="50" r="6" fill={G} stroke={G} strokeWidth="1" opacity="0.5"/>
      <path d="M96 50 C98 44 102 44 104 50" fill={S} stroke={S} strokeWidth="1" opacity="0.5"/>
    </svg>
  )
}

export function ImportExportCodeSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="100" cy="95" rx="55" ry="38" fill={C} stroke={N} strokeWidth="2"/>
      <ellipse cx="100" cy="95" rx="30" ry="38" fill="none" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="45" y1="95" x2="155" y2="95" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M50 70 Q75 60 100 62 Q125 60 150 70" stroke={N} strokeWidth="1.5" fill="none"/>
      <path d="M50 120 Q75 132 100 130 Q125 132 150 120" stroke={N} strokeWidth="1.5" fill="none"/>
      <path d="M118 48 L140 42 L136 60 Z" fill={R} stroke={R} strokeWidth="1" opacity="0.7"/>
      <path d="M82 42 L60 48 L64 30 Z" fill={S} stroke={S} strokeWidth="1" opacity="0.6"/>
      <line x1="100" y1="57" x2="100" y2="95" stroke={N} strokeWidth="1.5" strokeDasharray="3 2"/>
    </svg>
  )
}

export function ProfessionalTaxRegistrationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="55" y="50" width="55" height="80" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      <rect x="62" y="62" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="85" y="62" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="62" y="85" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="85" y="85" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <path d="M62 108 L96 108 M62 115 L85 115" stroke={S} strokeWidth="1.5"/>
      <circle cx="138" cy="80" r="20" fill={C} stroke={N} strokeWidth="1.8"/>
      <circle cx="131" cy="74" r="6" fill={P} stroke={N} strokeWidth="1.5"/>
      <path d="M122 92 Q124 84 131 82 Q138 80 146 84 Q150 88 150 95" stroke={N} strokeWidth="1.5"/>
      <circle cx="147" cy="112" r="14" fill={G} stroke={G} strokeWidth="1" opacity="0.2"/>
      <path d="M140 112 L145 117 L155 107" stroke={G} strokeWidth="2"/>
    </svg>
  )
}

export function RcmcRegistrationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="100" cy="85" rx="42" ry="42" fill={C} stroke={N} strokeWidth="2"/>
      <ellipse cx="100" cy="85" rx="42" ry="20" fill="none" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="58" y1="85" x2="142" y2="85" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="100" y1="43" x2="100" y2="127" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <rect x="78" y="35" width="44" height="55" rx="3" fill={P} stroke={G} strokeWidth="2"/>
      <path d="M85 48 L115 48 M85 56 L115 56 M85 64 L105 64" stroke={G} strokeWidth="1.5"/>
      <path d="M87 72 L92 77 L104 65" stroke={G} strokeWidth="2"/>
      <path d="M80 90 L80 100 Q100 108 120 100 L120 90" fill={G} stroke={G} strokeWidth="1.5" opacity="0.3"/>
    </svg>
  )
}

// ── Trademark ──────────────────────────────────────────────────────────────

export function TrademarkRegistrationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="82" r="50" fill={C} stroke={R} strokeWidth="2.5"/>
      <circle cx="100" cy="82" r="42" fill="none" stroke={R} strokeWidth="1" strokeDasharray="5 4" opacity="0.4"/>
      <text x="100" y="100" textAnchor="middle" fontFamily="serif" fontSize="46" fontWeight="bold" fill={R} opacity="0.85">™</text>
    </svg>
  )
}

export function TrademarkSearchSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="88" cy="78" r="38" fill={C} stroke={S} strokeWidth="2"/>
      <text x="88" y="93" textAnchor="middle" fontFamily="serif" fontSize="34" fontWeight="bold" fill={R} opacity="0.8">™</text>
      <line x1="116" y1="106" x2="148" y2="138" stroke={S} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="88" cy="78" r="38" fill="none" stroke={S} strokeWidth="2"/>
      <path d="M115 78 C115 72 120 68 126 70" stroke={S} strokeWidth="1.5" opacity="0.5"/>
    </svg>
  )
}

export function TrademarkRenewalSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M100 45 A40 40 0 1 1 68 118" stroke={S} strokeWidth="2.5" fill="none"/>
      <path d="M60 118 L68 108 L78 120 Z" fill={S}/>
      <path d="M100 35 L100 55 M100 35 L110 48" stroke={S} strokeWidth="2" strokeLinecap="round"/>
      <text x="100" y="98" textAnchor="middle" fontFamily="serif" fontSize="32" fontWeight="bold" fill={R} opacity="0.8">™</text>
    </svg>
  )
}

export function CopyrightRegistrationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="65" y="30" width="70" height="90" rx="5" fill={C} stroke={B} strokeWidth="1.5"/>
      <rect x="60" y="35" width="70" height="90" rx="5" fill={C} stroke={B} strokeWidth="1.5"/>
      <rect x="55" y="40" width="70" height="90" rx="5" fill={P} stroke={N} strokeWidth="1.8"/>
      <circle cx="90" cy="76" r="20" fill={C} stroke={N} strokeWidth="2"/>
      <text x="90" y="83" textAnchor="middle" fontFamily="serif" fontSize="24" fontWeight="bold" fill={N} opacity="0.85">©</text>
      <path d="M65 108 L115 108 M65 116 L105 116" stroke={N} strokeWidth="1.5" opacity="0.5"/>
    </svg>
  )
}

export function PatentFilingSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M100 35 L100 35 C80 35 65 50 65 68 C65 82 73 94 85 100 L85 115 L115 115 L115 100 C127 94 135 82 135 68 C135 50 120 35 100 35 Z" fill={C} stroke={G} strokeWidth="2"/>
      <line x1="85" y1="115" x2="115" y2="115" stroke={G} strokeWidth="2"/>
      <line x1="85" y1="122" x2="115" y2="122" stroke={G} strokeWidth="2"/>
      <line x1="88" y1="129" x2="112" y2="129" stroke={G} strokeWidth="2"/>
      <line x1="100" y1="60" x2="100" y2="95" stroke={G} strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M90 72 L100 60 L110 72" stroke={G} strokeWidth="1.5" fill="none"/>
      <rect x="82" y="138" width="36" height="10" rx="3" fill={N} stroke={N} strokeWidth="1" opacity="0.4"/>
    </svg>
  )
}

export function DesignRegistrationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="45" y="42" width="90" height="90" rx="4" fill={C} stroke={B} strokeWidth="1.5"/>
      <rect x="50" y="47" width="80" height="80" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <circle cx="90" cy="87" r="22" fill="none" stroke={R} strokeWidth="1.8" strokeDasharray="5 3"/>
      <path d="M70 107 L90 65 L110 107 Z" fill={S} stroke={S} strokeWidth="1" opacity="0.25"/>
      <line x1="70" y1="87" x2="110" y2="87" stroke={S} strokeWidth="1.5" opacity="0.5"/>
      <rect x="140" y="38" width="12" height="48" rx="4" transform="rotate(35 140 38)" fill={G} stroke={G} strokeWidth="1" opacity="0.7"/>
      <path d="M150 118 L138 130 L132 126 L144 114 Z" fill={G} stroke={G} strokeWidth="1" opacity="0.7"/>
      <path d="M155 110 L150 118 L144 114 L149 106 Z" fill={R} stroke={R} strokeWidth="1" opacity="0.6"/>
    </svg>
  )
}

// ── GST ────────────────────────────────────────────────────────────────────

export function GstRegistrationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="50" y="45" width="65" height="90" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      <rect x="58" y="58" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="80" y="58" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="58" y="80" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="80" y="80" width="18" height="18" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <rect x="58" y="102" width="40" height="8" rx="2" fill={P} stroke={S} strokeWidth="1.5"/>
      <path d="M65 52 L100 52" stroke={S} strokeWidth="1.5"/>
      <circle cx="138" cy="105" r="25" fill={C} stroke={G} strokeWidth="2"/>
      <path d="M127 105 L133 111 L150 94" stroke={G} strokeWidth="2.5"/>
      <text x="138" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill={G} opacity="0.7">GST</text>
    </svg>
  )
}

export function MonthlyGstFilingSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="45" y="50" width="95" height="88" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <rect x="45" y="50" width="95" height="22" rx="4" fill={N} stroke={N} strokeWidth="1" opacity="0.15"/>
      <path d="M65 44 L65 58 M115 44 L115 58" stroke={N} strokeWidth="2" strokeLinecap="round"/>
      <text x="92" y="67" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill={N} opacity="0.8">GST</text>
      {[0,1,2,3,4].map(col =>
        [0,1,2,3].map(row => (
          <rect key={`${col}-${row}`} x={52+col*17} y={80+row*15} width="13" height="11" rx="1"
            fill={col===2&&row===1?S:P} stroke={B} strokeWidth="1" opacity="0.8"/>
        ))
      )}
      <rect x="147" y="82" width="14" height="58" rx="2" fill={S} stroke={S} strokeWidth="1" opacity="0.7"/>
      <rect x="147" y="110" width="14" height="30" rx="2" fill={G} stroke={G} strokeWidth="1" opacity="0.6"/>
    </svg>
  )
}

export function AnnualGstReturnSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="55" y="35" width="65" height="85" rx="4" fill={C} stroke={B} strokeWidth="1.5"/>
      <rect x="50" y="40" width="65" height="85" rx="4" fill={C} stroke={B} strokeWidth="1.5"/>
      <rect x="45" y="45" width="65" height="85" rx="4" fill={P} stroke={N} strokeWidth="2"/>
      <path d="M52 60 L103 60 M52 70 L103 70 M52 80 L90 80" stroke={N} strokeWidth="1.5" opacity="0.5"/>
      <text x="72" y="108" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill={N} opacity="0.5">ANNUAL GST</text>
      <path d="M52 88 L65 88" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <path d="M52 94 L75 94" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="140" cy="95" r="25" fill={C} stroke={G} strokeWidth="2"/>
      <path d="M140 75 L140 95 L152 107" stroke={G} strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  )
}

export function GstAuditSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="45" y="40" width="75" height="100" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      {[55,68,80,92,104,116].map((y,i)=>(
        <g key={i}>
          <rect x="53" y={y} width="8" height="8" rx="1" fill={i<3?S:P} stroke={S} strokeWidth="1.2"/>
          <line x1="65" y1={y+4} x2="112" y2={y+4} stroke={B} strokeWidth="1.2"/>
        </g>
      ))}
      <circle cx="143" cy="100" r="26" fill={C} stroke={R} strokeWidth="2.5"/>
      <circle cx="143" cy="100" r="18" fill="none" stroke={R} strokeWidth="1.5"/>
      <line x1="161" y1="118" x2="175" y2="132" stroke={R} strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}

export function LutFilingSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="50" width="70" height="90" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <path d="M47 65 L103 65 M47 75 L103 75 M47 85 L85 85" stroke={N} strokeWidth="1.5" opacity="0.5"/>
      <path d="M47 95 L65 95 M47 105 L65 105" stroke={N} strokeWidth="1.5" opacity="0.3"/>
      <path d="M130 95 L130 50 L160 50 L160 95" stroke={S} strokeWidth="2" fill="none"/>
      <path d="M120 95 L170 95" stroke={S} strokeWidth="2"/>
      <path d="M145 75 L145 30" stroke={S} strokeWidth="2.5"/>
      <path d="M133 42 L145 30 L157 42" fill={S} stroke={S} strokeWidth="1"/>
    </svg>
  )
}

export function GstCancellationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="55" y="38" width="75" height="95" rx="4" fill={C} stroke={B} strokeWidth="1.5"/>
      <path d="M62 55 L122 55 M62 65 L122 65 M62 75 L105 75" stroke={B} strokeWidth="1.5"/>
      <text x="92" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill={N} opacity="0.5">GST</text>
      <circle cx="118" cy="112" r="28" fill={R} stroke={R} strokeWidth="1" opacity="0.12"/>
      <line x1="100" y1="94" x2="136" y2="130" stroke={R} strokeWidth="3" strokeLinecap="round"/>
      <line x1="136" y1="94" x2="100" y2="130" stroke={R} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="118" cy="112" r="22" fill="none" stroke={R} strokeWidth="2"/>
    </svg>
  )
}

// ── Income Tax ─────────────────────────────────────────────────────────────

export function Itr1SalariedSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="78" cy="58" r="18" fill={C} stroke={S} strokeWidth="2"/>
      <circle cx="78" cy="52" r="7" fill={S} opacity="0.3"/>
      <path d="M58 80 Q58 70 78 70 Q98 70 98 80 L98 100 L58 100 Z" fill={C} stroke={S} strokeWidth="1.8"/>
      <rect x="106" y="45" width="58" height="75" rx="4" fill={P} stroke={N} strokeWidth="2"/>
      <text x="135" y="62" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={N} opacity="0.6">ITR-1</text>
      <path d="M113 72 L157 72 M113 80 L157 80 M113 88 L145 88" stroke={N} strokeWidth="1.3" opacity="0.5"/>
      <path d="M113 96 L130 96 M113 104 L125 104" stroke={G} strokeWidth="1.5"/>
    </svg>
  )
}

export function ItrBusinessSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="55" y="75" width="55" height="62" rx="3" fill={C} stroke={S} strokeWidth="2"/>
      <path d="M55 85 L110 85" stroke={S} strokeWidth="1.5"/>
      <path d="M70 75 L70 62 L95 62 L95 75" stroke={S} strokeWidth="1.8"/>
      <rect x="63" y="92" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="80" y="92" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="63" y="110" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="80" y="110" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="118" y="45" width="42" height="60" rx="3" fill={P} stroke={N} strokeWidth="1.8"/>
      <text x="139" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="bold" fill={N} opacity="0.6">ITR-3/4</text>
      <path d="M124 68 L154 68 M124 76 L154 76 M124 84 L145 84" stroke={N} strokeWidth="1.3" opacity="0.5"/>
      <path d="M124 92 L140 92 M124 98 L138 98" stroke={G} strokeWidth="1.5"/>
    </svg>
  )
}

export function CompanyItrSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="40" y="62" width="75" height="75" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      <path d="M40 80 L115 80" stroke={S} strokeWidth="1.5"/>
      <rect x="50" y="88" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="68" y="88" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="86" y="88" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="50" y="106" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="68" y="106" width="12" height="12" rx="1" fill={P} stroke={S} strokeWidth="1.2"/>
      <rect x="50" y="124" width="30" height="13" rx="2" fill={P} stroke={S} strokeWidth="1.2"/>
      <path d="M57 72 L57 63 L98 63 L98 72" stroke={S} strokeWidth="1.5"/>
      <rect x="122" y="45" width="45" height="62" rx="3" fill={P} stroke={N} strokeWidth="1.8"/>
      <text x="144" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="bold" fill={N} opacity="0.6">ITR-6</text>
      <path d="M128 68 L161 68 M128 76 L161 76 M128 84 L150 84" stroke={N} strokeWidth="1.3" opacity="0.5"/>
      <path d="M128 92 L145 92 M128 98 L142 98" stroke={G} strokeWidth="1.5"/>
    </svg>
  )
}

export function TdsReturnFilingSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="72" cy="75" r="25" fill={C} stroke={G} strokeWidth="2"/>
      <path d="M60 75 L72 75 L72 62" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <text x="72" y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill={G} opacity="0.7">TDS</text>
      <path d="M105 65 L140 65" stroke={R} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M128 55 L140 65 L128 75" fill={R} stroke={R} strokeWidth="1"/>
      <rect x="142" y="50" width="20" height="55" rx="3" fill={C} stroke={N} strokeWidth="1.8"/>
      <rect x="142" y="78" width="20" height="27" rx="2" fill={N} stroke={N} strokeWidth="1" opacity="0.2"/>
      <path d="M147 70 L157 70 M147 76 L157 76" stroke={N} strokeWidth="1.2"/>
      <circle cx="78" cy="122" r="8" fill={G} stroke={G} strokeWidth="1" opacity="0.5"/>
      <circle cx="100" cy="122" r="8" fill={G} stroke={G} strokeWidth="1" opacity="0.35"/>
      <circle cx="122" cy="122" r="8" fill={G} stroke={G} strokeWidth="1" opacity="0.2"/>
    </svg>
  )
}

export function TaxPlanningSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M55 130 L55 88 L80 88 L80 130" fill={S} stroke={S} strokeWidth="1" opacity="0.3"/>
      <path d="M85 130 L85 70 L110 70 L110 130" fill={S} stroke={S} strokeWidth="1" opacity="0.5"/>
      <path d="M115 130 L115 50 L140 50 L140 130" fill={S} stroke={S} strokeWidth="1" opacity="0.7"/>
      <line x1="45" y1="130" x2="155" y2="130" stroke={B} strokeWidth="2"/>
      <path d="M58 88 L92 70 L122 50" stroke={G} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="58" cy="88" r="4" fill={G}/>
      <circle cx="92" cy="70" r="4" fill={G}/>
      <circle cx="122" cy="50" r="4" fill={G}/>
      <ellipse cx="100" cy="45" rx="18" ry="12" fill={C} stroke={G} strokeWidth="2"/>
      <path d="M94 45 L98 49 L108 40" stroke={G} strokeWidth="2"/>
    </svg>
  )
}

export function IncomeTaxNoticeSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="48" y="48" width="72" height="90" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <path d="M48 65 Q84 80 120 65" stroke={N} strokeWidth="1.5" fill="none"/>
      <path d="M55 75 L113 75 M55 83 L113 83 M55 91 L95 91" stroke={N} strokeWidth="1.3" opacity="0.4"/>
      <path d="M55 100 L75 100" stroke={R} strokeWidth="2" strokeLinecap="round"/>
      <path d="M130 95 L130 118" stroke={R} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="130" cy="126" r="3.5" fill={R}/>
      <circle cx="130" cy="78" r="22" fill={C} stroke={R} strokeWidth="2"/>
      <path d="M122 86 L138 70" stroke={R} strokeWidth="2" strokeLinecap="round"/>
      <path d="M138 86 L122 70" stroke={R} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

// ── MCA ────────────────────────────────────────────────────────────────────

export function AnnualRocFilingSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="38" y="52" width="120" height="88" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <rect x="45" y="65" width="25" height="65" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <rect x="75" y="55" width="25" height="75" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <rect x="105" y="70" width="25" height="50" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <path d="M38 140 L158 140" stroke={N} strokeWidth="2"/>
      <path d="M38 48 L38 52 M78 44 L78 52 M118 48 L118 52 M158 48 L158 52" stroke={N} strokeWidth="2"/>
      <text x="98" y="46" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={N} opacity="0.5">MCA</text>
    </svg>
  )
}

export function DirectorKycSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="42" y="48" width="95" height="68" rx="6" fill={C} stroke={N} strokeWidth="2"/>
      <circle cx="70" cy="75" r="18" fill={P} stroke={N} strokeWidth="1.5"/>
      <circle cx="70" cy="70" r="7" fill={N} opacity="0.2"/>
      <path d="M58 85 Q60 78 70 76 Q80 78 82 85" stroke={N} strokeWidth="1.5" fill="none"/>
      <path d="M98 62 L128 62 M98 70 L128 70 M98 78 L118 78" stroke={N} strokeWidth="1.5" opacity="0.5"/>
      <path d="M96 84 L113 100" stroke={S} strokeWidth="5" strokeLinecap="round" opacity="0.15"/>
      {[[0,0],[20,0],[0,18],[20,18],[10,9]].map(([dx,dy],i)=>(
        <circle key={i} cx={138+dx} cy={108+dy} r="2.5" fill={S} opacity={0.3+i*0.1}/>
      ))}
      <path d="M128 98 Q148 93 165 103 Q165 122 148 127 Q131 122 128 103 Z" fill="none" stroke={S} strokeWidth="1.8" strokeDasharray="3 2"/>
      <path d="M136 112 L142 118 L158 105" stroke={S} strokeWidth="2"/>
    </svg>
  )
}

export function ShareTransferSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="58" cy="65" r="16" fill={C} stroke={S} strokeWidth="1.8"/>
      <circle cx="58" cy="60" r="6" fill={S} opacity="0.3"/>
      <path d="M42 82 Q42 75 58 75 Q74 75 74 82 L74 95 L42 95 Z" fill={C} stroke={S} strokeWidth="1.5"/>
      <circle cx="142" cy="65" r="16" fill={C} stroke={N} strokeWidth="1.8"/>
      <circle cx="142" cy="60" r="6" fill={N} opacity="0.3"/>
      <path d="M126 82 Q126 75 142 75 Q158 75 158 82 L158 95 L126 95 Z" fill={C} stroke={N} strokeWidth="1.5"/>
      <rect x="80" y="105" width="40" height="30" rx="3" fill={P} stroke={G} strokeWidth="2"/>
      <path d="M85 115 L115 115 M85 122 L108 122" stroke={G} strokeWidth="1.3" opacity="0.6"/>
      <path d="M90 105 L90 95 M110 105 L110 95" stroke={G} strokeWidth="1.5" strokeDasharray="3 2"/>
      <path d="M80 96 L120 96" stroke={G} strokeWidth="1.5"/>
      <path d="M95 92 L100 96 L105 92" fill={G} stroke={G} strokeWidth="1"/>
    </svg>
  )
}

export function AuthorizedCapitalSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="100" cy="125" rx="28" ry="10" fill={G} stroke={G} strokeWidth="1" opacity="0.4"/>
      <ellipse cx="100" cy="108" rx="28" ry="10" fill={G} stroke={G} strokeWidth="1.8" opacity="0.6"/>
      <ellipse cx="100" cy="92" rx="28" ry="10" fill={G} stroke={G} strokeWidth="1.8"/>
      <path d="M72 92 L72 108 M128 92 L128 108" stroke={G} strokeWidth="1.8"/>
      <path d="M72 108 L72 125 M128 108 L128 125" stroke={G} strokeWidth="1.8" opacity="0.6"/>
      <path d="M100 60 L100 30" stroke={S} strokeWidth="2.5"/>
      <path d="M86 42 L100 30 L114 42" fill={S} stroke={S} strokeWidth="1.5"/>
      <path d="M75 65 L100 55 L125 65" stroke={S} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
    </svg>
  )
}

export function RegisteredOfficeChangeSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M100 35 C82 35 68 50 68 68 C68 95 100 130 100 130 C100 130 132 95 132 68 C132 50 118 35 100 35Z" fill={C} stroke={R} strokeWidth="2"/>
      <circle cx="100" cy="68" r="14" fill={P} stroke={R} strokeWidth="1.8"/>
      <rect x="93" y="62" width="14" height="12" rx="2" fill={R} opacity="0.25"/>
      <path d="M93 74 L107 74" stroke={R} strokeWidth="1.5"/>
      <path d="M55 118 L85 110 M115 110 L145 118" stroke={B} strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M85 110 L95 118 L105 110 L115 118" stroke={S} strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

// ── Compliance & HR ────────────────────────────────────────────────────────

export function PayrollProcessingSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="42" y="40" width="70" height="90" rx="4" fill={C} stroke={S} strokeWidth="2"/>
      <path d="M42 58 L112 58" stroke={S} strokeWidth="1.5"/>
      <text x="77" y="52" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={S} opacity="0.6">PAYSLIP</text>
      <path d="M50 68 L104 68 M50 76 L104 76 M50 84 L88 84" stroke={B} strokeWidth="1.3"/>
      <path d="M50 92 L65 92" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <path d="M50 100 L70 100" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <path d="M50 108 L60 108" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <path d="M85 92 L104 92" stroke={S} strokeWidth="2" strokeLinecap="round"/>
      <path d="M85 100 L104 100" stroke={S} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="148" cy="108" r="18" fill={C} stroke={G} strokeWidth="1.8"/>
      <path d="M143 108 Q148 100 153 108 Q148 116 143 108Z" fill={G} stroke={G} strokeWidth="1" opacity="0.5"/>
      <circle cx="148" cy="72" r="12" fill={C} stroke={G} strokeWidth="1.5"/>
      <circle cx="148" cy="72" r="5" fill={G} opacity="0.3"/>
      <line x1="148" y1="84" x2="148" y2="90" stroke={G} strokeWidth="1.5" strokeDasharray="2 2"/>
    </svg>
  )
}

export function PfEsiRegistrationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M100 32 L148 55 L148 100 Q148 128 100 140 Q52 128 52 100 L52 55 Z" fill={C} stroke={S} strokeWidth="2"/>
      <circle cx="75" cy="95" r="12" fill={P} stroke={S} strokeWidth="1.5"/>
      <circle cx="100" cy="90" r="12" fill={P} stroke={S} strokeWidth="1.5"/>
      <circle cx="125" cy="95" r="12" fill={P} stroke={S} strokeWidth="1.5"/>
      <path d="M63 107 Q65 100 75 98 Q82 96 90 100" stroke={S} strokeWidth="1.5" fill="none"/>
      <path d="M110 100 Q118 96 125 98 Q135 100 137 107" stroke={S} strokeWidth="1.5" fill="none"/>
      <path d="M100 60 L100 40 M88 48 L100 40 L112 48" stroke={G} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function LabourLawComplianceSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="58" y="35" width="55" height="75" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <path d="M65 50 L106 50 M65 60 L106 60 M65 70 L95 70 M65 80 L100 80" stroke={N} strokeWidth="1.3" opacity="0.5"/>
      <path d="M65 90 L80 90" stroke={G} strokeWidth="2" strokeLinecap="round"/>
      <path d="M55 118 Q100 105 145 118" stroke={N} strokeWidth="3" strokeLinecap="round"/>
      <path d="M75 118 L75 110" stroke={N} strokeWidth="2"/>
      <path d="M125 118 L125 110" stroke={N} strokeWidth="2"/>
      <path d="M100 118 L100 95" stroke={N} strokeWidth="2"/>
      <path d="M80 110 Q100 100 120 110" fill="none" stroke={N} strokeWidth="1.5"/>
    </svg>
  )
}

export function ProfessionalTaxComplianceSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M65 130 L65 75 L100 55 L135 75 L135 130 Z" fill={C} stroke={N} strokeWidth="2"/>
      <rect x="83" y="100" width="34" height="30" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <rect x="74" y="80" width="16" height="16" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <rect x="110" y="80" width="16" height="16" rx="2" fill={P} stroke={N} strokeWidth="1.5"/>
      <path d="M65 55 L42 42 M135 55 L158 42" stroke={N} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
      <circle cx="42" cy="38" r="5" fill={N} opacity="0.3"/>
      <circle cx="158" cy="38" r="5" fill={N} opacity="0.3"/>
      <path d="M55 73 L45 73 M145 73 L155 73" stroke={N} strokeWidth="1.5" opacity="0.4"/>
    </svg>
  )
}

export function StatutoryComplianceAuditSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="42" y="38" width="78" height="100" rx="4" fill={C} stroke={N} strokeWidth="2"/>
      <path d="M42 58 L120 58" stroke={N} strokeWidth="1.5"/>
      <text x="81" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={N} opacity="0.5">AUDIT</text>
      {[1,2,3,4,5,6].map((n,i)=>(
        <g key={i}>
          <rect x="50" y={64+i*13} width="8" height="8" rx="1" fill={i<4?S:P} stroke={S} strokeWidth="1"/>
          <line x1="62" y1={68+i*13} x2="112" y2={68+i*13} stroke={B} strokeWidth="1.2"/>
        </g>
      ))}
      <circle cx="148" cy="105" r="28" fill={C} stroke={R} strokeWidth="2.5"/>
      <circle cx="148" cy="105" r="20" fill="none" stroke={R} strokeWidth="1.5"/>
      <line x1="162" y1="119" x2="178" y2="135" stroke={R} strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}

// ── Global ─────────────────────────────────────────────────────────────────

export function UaeCompanyFormationSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Burj Khalifa silhouette */}
      <path d="M98 130 L98 45 L100 35 L102 45 L102 130 Z" fill={G} stroke={G} strokeWidth="1" opacity="0.7"/>
      <path d="M94 130 L94 70 L98 65 L102 65 L106 70 L106 130 Z" fill={G} stroke={G} strokeWidth="1" opacity="0.5"/>
      <path d="M88 130 L88 90 L94 85 L106 85 L112 90 L112 130 Z" fill={G} stroke={G} strokeWidth="1" opacity="0.4"/>
      <path d="M78 130 L78 105 L88 100 L112 100 L122 105 L122 130 Z" fill={G} stroke={G} strokeWidth="1" opacity="0.3"/>
      {/* Crescent */}
      <path d="M138 52 C132 46 132 38 138 34 C126 36 120 50 128 60 C132 65 140 64 145 60 C141 58 140 54 138 52Z" fill={S} stroke={S} strokeWidth="1" opacity="0.8"/>
      <line x1="40" y1="130" x2="160" y2="130" stroke={B} strokeWidth="1.5"/>
    </svg>
  )
}

export function GlobalExpansionSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="100" cy="88" rx="55" ry="55" fill={C} stroke={N} strokeWidth="2"/>
      <ellipse cx="100" cy="88" rx="30" ry="55" fill="none" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="45" y1="88" x2="155" y2="88" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M48 68 Q74 58 100 60 Q126 58 152 68" stroke={N} strokeWidth="1.5" fill="none"/>
      <path d="M48 108 Q74 120 100 118 Q126 120 152 108" stroke={N} strokeWidth="1.5" fill="none"/>
      <path d="M100 33 L100 20" stroke={S} strokeWidth="2.5"/>
      <path d="M88 28 L100 20 L112 28" fill={S} stroke={S} strokeWidth="1.5"/>
      <path d="M155 88 L168 88" stroke={S} strokeWidth="2.5"/>
      <path d="M162 80 L168 88 L162 96" fill={S} stroke={S} strokeWidth="1.5"/>
      <path d="M45 88 L32 88" stroke={S} strokeWidth="2.5"/>
      <path d="M38 80 L32 88 L38 96" fill={S} stroke={S} strokeWidth="1.5"/>
    </svg>
  )
}

export function InternationalTrademarkSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="88" cy="88" rx="42" ry="42" fill={C} stroke={N} strokeWidth="2"/>
      <ellipse cx="88" cy="88" rx="22" ry="42" fill="none" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <line x1="46" y1="88" x2="130" y2="88" stroke={N} strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M48 72 Q68 64 88 66 Q108 64 128 72" stroke={N} strokeWidth="1.3" fill="none"/>
      <path d="M48 104 Q68 114 88 112 Q108 114 128 104" stroke={N} strokeWidth="1.3" fill="none"/>
      <circle cx="148" cy="72" r="24" fill={C} stroke={R} strokeWidth="2"/>
      <circle cx="148" cy="72" r="18" fill="none" stroke={R} strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
      <text x="148" y="80" textAnchor="middle" fontFamily="serif" fontSize="22" fontWeight="bold" fill={R} opacity="0.85">™</text>
    </svg>
  )
}

// ── Slug → Component map ───────────────────────────────────────────────────

export const SERVICE_ILLUSTRATIONS = {
  'private-limited-company':    PrivateLimitedSVG,
  'llp':                        LlpSVG,
  'one-person-company':         OpcSVG,
  'sole-proprietorship':        SoleProprietorshipSVG,
  'partnership-firm':           PartnershipFirmSVG,
  'section-8-ngo':              NgoSVG,
  'msme-udyam':                 MsmeUdyamSVG,
  'startup-india':              StartupIndiaSVG,
  'trade-license':              TradeLicenseSVG,
  'shop-establishment':         ShopEstablishmentSVG,
  'fssai-food-license':         FssaiSVG,
  'import-export-code':         ImportExportCodeSVG,
  'professional-tax-registration': ProfessionalTaxRegistrationSVG,
  'rcmc-registration':          RcmcRegistrationSVG,
  'trademark-registration':     TrademarkRegistrationSVG,
  'trademark-search':           TrademarkSearchSVG,
  'trademark-renewal':          TrademarkRenewalSVG,
  'copyright-registration':     CopyrightRegistrationSVG,
  'patent-filing':              PatentFilingSVG,
  'design-registration':        DesignRegistrationSVG,
  'gst-registration':           GstRegistrationSVG,
  'monthly-gst-filing':         MonthlyGstFilingSVG,
  'annual-gst-return':          AnnualGstReturnSVG,
  'gst-audit':                  GstAuditSVG,
  'gst-lut-filing':             LutFilingSVG,
  'gst-cancellation':           GstCancellationSVG,
  'itr-1-salaried':             Itr1SalariedSVG,
  'itr-business':               ItrBusinessSVG,
  'company-itr':                CompanyItrSVG,
  'tds-return-filing':          TdsReturnFilingSVG,
  'tax-planning':               TaxPlanningSVG,
  'income-tax-notice':          IncomeTaxNoticeSVG,
  'annual-roc-filing':          AnnualRocFilingSVG,
  'director-kyc':               DirectorKycSVG,
  'share-transfer':             ShareTransferSVG,
  'authorized-capital':         AuthorizedCapitalSVG,
  'registered-office-change':   RegisteredOfficeChangeSVG,
  'payroll-processing':         PayrollProcessingSVG,
  'pf-esi-registration':        PfEsiRegistrationSVG,
  'labour-law-compliance':      LabourLawComplianceSVG,
  'professional-tax-compliance':ProfessionalTaxComplianceSVG,
  'statutory-compliance-audit': StatutoryComplianceAuditSVG,
  'uae-company-formation':      UaeCompanyFormationSVG,
  'global-expansion':           GlobalExpansionSVG,
  'international-trademark':    InternationalTrademarkSVG,
}
