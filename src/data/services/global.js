export const globalServices = [
  {
    slug: 'uae-company-formation',
    name: 'UAE Company Formation',
    tagline: 'Set up your business in Dubai with our expert UAE incorporation team',
    category: { slug: 'global', label: 'Global', color: 'gold' },
    heroDescription: 'The UAE is one of the world\'s top business destinations — zero personal income tax, 9% corporate tax (with thresholds), and a gateway to Middle Eastern, African, and South Asian markets. We guide you through every step of UAE company formation.',
    whatIs: 'Companies in the UAE can be formed in Mainland (DED-licensed, can trade anywhere in UAE), Free Zones (over 40 zones, 100% foreign ownership, zone-specific benefits), or Offshore (international business, no UAE operations). Each structure has different ownership, licensing, and operational requirements.',
    benefits: [
      { title: 'Zero Personal Income Tax', description: 'UAE has no personal income tax. Expatriate founders and employees retain full earnings.' },
      { title: '100% Foreign Ownership', description: 'Free Zones and most mainland business activities now allow 100% foreign ownership following the 2021 FDI law amendment.' },
      { title: 'UAE Residency Visa', description: 'Company formation enables 2–3 year investor and employee residency visas for founders and their families.' },
      { title: 'Strategic Global Location', description: 'Dubai is a global hub connecting to 150+ countries with world-class infrastructure and trade connectivity.' },
    ],
    steps: [
      { num: 1, title: 'Structure Selection', description: 'We assess your business activity and recommend the optimal structure — Mainland, Free Zone (DMCC, DIFC, ADGM, etc.), or Offshore.' },
      { num: 2, title: 'Trade Name Reservation', description: 'Company name is reserved with the relevant authority (DED for Mainland or the specific Free Zone authority).' },
      { num: 3, title: 'License Application', description: 'We prepare and submit the full license application — commercial, professional, or industrial based on your activity.' },
      { num: 4, title: 'Bank Account & Visa', description: 'Upon license issuance, we assist with corporate bank account opening and investor visa processing.' },
    ],
    documents: [
      'Passport copy of all shareholders and directors',
      'UAE Residence Visa (if applicable)',
      'Proof of address in home country',
      'Brief business plan / description of activities',
      'No Objection Certificate from UAE sponsor (for some visa categories)',
      'Educational certificates (for professional license)',
    ],
    faqs: [
      { question: 'What is the difference between Mainland and Free Zone?', answer: 'Mainland companies can operate anywhere in UAE and trade with UAE clients directly. Free Zone companies operate within the zone; to trade with mainland UAE, they need a local distributor or a Mainland company.' },
      { question: 'What is the UAE Corporate Tax?', answer: 'From June 2023, UAE has a 9% corporate tax on profits exceeding AED 375,000 (approx. ₹86 lakhs). Free Zone entities qualifying for "Qualifying Income" status pay 0% on qualifying income.' },
      { question: 'How long does UAE company formation take?', answer: 'Free Zone formation takes 5–10 working days. Mainland formation takes 10–15 working days. Bank account opening takes 3–6 weeks.' },
    ],
    pricing: {
      plans: [
        { name: 'Free Zone Basic', price: 49999, features: ['Free Zone License', 'Name Reservation', 'Establishment Card', 'Visa Quota (1)'] },
        { name: 'Mainland Standard', price: 79999, features: ['Mainland DED License', 'MOA Drafting', 'Local Sponsor Advisory', 'Visa Quota (2)', 'Bank Account Guidance'] },
        { name: 'Full Setup Premium', price: 129999, features: ['License + Visa Processing (2)', 'Bank Account Opening Support', 'Accounting Setup', 'Ongoing Compliance Advisory'] },
      ],
    },
  },
  {
    slug: 'global-expansion',
    name: 'Global Expansion Advisory',
    tagline: 'Strategic guidance for taking your Indian business global',
    category: { slug: 'global', label: 'Global', color: 'gold' },
    heroDescription: 'Expanding internationally involves complex decisions — entity structure, tax treaties, transfer pricing, FEMA compliance, and regulatory requirements in target markets. Our global advisory team guides you through every decision.',
    whatIs: 'Global expansion advisory covers the end-to-end strategy and execution support for Indian companies looking to expand internationally — whether through foreign branches, subsidiaries, joint ventures, or partnerships. It includes jurisdictional analysis, FEMA/RBI compliance, tax optimisation, and local regulatory navigation.',
    benefits: [
      { title: 'Right Market Entry Strategy', description: 'Choose the optimal entry structure — wholly-owned subsidiary, branch, joint venture, or representative office — based on your goals.' },
      { title: 'FEMA Compliance', description: 'All foreign investments by Indian entities must comply with FEMA regulations and RBI reporting requirements. We manage this seamlessly.' },
      { title: 'Tax Treaty Benefits', description: 'Leverage India\'s DTAA (Double Tax Avoidance Agreement) with 90+ countries to minimise cross-border tax burden.' },
      { title: 'Transfer Pricing', description: 'Related party transactions must meet arm\'s length pricing. We set up transfer pricing policies and documentation.' },
    ],
    steps: [
      { num: 1, title: 'Market & Structure Analysis', description: 'We analyse target markets and recommend the optimal entry structure based on your business model and growth objectives.' },
      { num: 2, title: 'FEMA & RBI Advisory', description: 'All outward direct investments (ODI) require RBI approvals / reporting. We manage compliance with FEMA regulations.' },
      { num: 3, title: 'Local Incorporation Support', description: 'We coordinate with local advisors in target countries to ensure the entity is incorporated per local laws.' },
      { num: 4, title: 'Ongoing Compliance', description: 'Annual ODI reporting to RBI, APR (Annual Performance Report), and transfer pricing documentation are managed.' },
    ],
    documents: [
      'Company registration documents (India entity)',
      'Board resolution approving international expansion',
      'Bank statements (last 2 years)',
      'Business plan for the target market',
      'Details of proposed investment amount',
    ],
    faqs: [
      { question: 'Do I need RBI approval to invest abroad?', answer: 'Under the Automatic Route (up to 400% of net worth), no prior RBI approval is needed. Larger investments or investments in countries subject to FATF/UN sanctions require Government Route approval.' },
      { question: 'What is APR filing?', answer: 'Annual Performance Report is filed by Indian entities with their AD (Authorised Dealer) bank every July for their overseas investments. Non-filing attracts penalties.' },
    ],
    pricing: {
      plans: [
        { name: 'Consultation', price: 9999, features: ['Market Entry Strategy Session', 'Jurisdiction Analysis (up to 3)', 'FEMA Compliance Briefing'] },
        { name: 'Full Advisory', price: 24999, features: ['Complete Market Entry Plan', 'FEMA / ODI Filing', 'Local Incorporation Coordination', 'Transfer Pricing Policy'] },
        { name: 'Managed Expansion', price: 49999, features: ['Full Advisory + Ongoing', 'Annual RBI Reporting', 'Transfer Pricing Documentation', 'Legal & Tax Advisory in Target Country'] },
      ],
    },
  },
  {
    slug: 'international-trademark',
    name: 'International Trademark',
    tagline: 'Protect your brand in 130+ countries with a single Madrid Protocol application',
    category: { slug: 'global', label: 'Global', color: 'gold' },
    heroDescription: 'As your business expands globally, so should your trademark protection. Through the Madrid Protocol, a single application from India can secure trademark protection in over 130 countries — cost-effectively and efficiently.',
    whatIs: 'The Madrid System (administered by WIPO) allows trademark owners to file a single International Application designating multiple member countries. India is a signatory to the Protocol since 2013. An Indian trademark owner can extend protection internationally through a base application or registration in India.',
    benefits: [
      { title: 'Single Application, Global Coverage', description: 'One Madrid application can cover 130+ countries — far cheaper and simpler than filing separate national applications.' },
      { title: 'Centralised Management', description: 'Changes, renewals, and assignments are managed centrally through WIPO — not separately in each country.' },
      { title: 'Cost-Effective', description: 'Madrid Protocol filings are significantly cheaper than individual national filings when protecting in 5+ countries.' },
      { title: 'WIPO Certificate', description: 'WIPO issues an internationally recognised trademark certificate covering all designated countries.' },
    ],
    steps: [
      { num: 1, title: 'India Base Application/Registration', description: 'An Indian trademark application or registration is required as the "basic mark" before filing an international application.' },
      { num: 2, title: 'Country Selection', description: 'We identify the countries you need coverage in and assess class requirements and fees for each.' },
      { num: 3, title: 'Form MM2 Preparation', description: 'International application (Form MM2) is prepared with WIPO-compliant descriptions and filed via the Indian IP Office.' },
      { num: 4, title: 'WIPO Processing', description: 'WIPO processes the application and forwards to designated countries. National offices examine and register the mark.' },
    ],
    documents: [
      'Indian trademark application number or registration certificate',
      'Logo / trademark image (WIPO format)',
      'List of goods and services (in WIPO-approved language)',
      'List of countries for designation',
      'Applicant\'s identity documents',
    ],
    faqs: [
      { question: 'How long does international trademark registration take?', answer: 'WIPO issues the international registration within 18 months in most cases. Designated countries may take 12–18 months to register or refuse.' },
      { question: 'What happens if India base application is refused?', answer: 'If the Indian base application is refused within 5 years, the international registration also ceases to have effect in all designated countries. This is the "central attack" risk of the Madrid System.' },
    ],
    pricing: {
      plans: [
        { name: 'USA + EU', price: 24999, features: ['India Base Application', 'US + EU Designation', 'WIPO Filing', 'Status Monitoring'] },
        { name: 'Up to 5 Countries', price: 34999, features: ['India Base + 5 Country Designations', 'WIPO Certificate', 'Examination Response (1 round per country)'] },
        { name: 'Comprehensive', price: 59999, features: ['Up to 15 Country Designations', 'Full WIPO Management', 'Prosecution Support in each country', 'Annual Watch Service'] },
      ],
    },
  },
]
