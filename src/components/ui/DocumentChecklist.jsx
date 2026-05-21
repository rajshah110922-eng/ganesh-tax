export default function DocumentChecklist({ documents }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {documents.map((doc, i) => (
        <li key={i} className="flex items-start gap-3 bg-cream border border-border rounded-xl p-4">
          <span className="w-6 h-6 rounded-full bg-sage-pale border border-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6 L5 9 L10 3" stroke="#4a7c59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-[14px] text-ink font-light leading-snug">{doc}</span>
        </li>
      ))}
    </ul>
  )
}
