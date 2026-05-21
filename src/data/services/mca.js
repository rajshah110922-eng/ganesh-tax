export const mcaServices = [
  {
    slug: 'annual-roc-filing',
    name: 'Annual ROC Filing',
    tagline: 'AOC-4 and MGT-7 annual returns filed on time, every year',
    category: { slug: 'mca', label: 'MCA', color: 'sage' },
    heroDescription: 'Every company registered in India must file its annual returns and financial statements with the Registrar of Companies (ROC). Missing deadlines attracts heavy penalties and can lead to director disqualification.',
    whatIs: 'Annual ROC compliance includes filing Form AOC-4 (annual financial statements — P&L and balance sheet) and Form MGT-7 (annual return). Due dates are 30 days from AGM for AOC-4 and 60 days from AGM for MGT-7. The AGM must be held within 6 months from the end of the financial year (i.e., by 30th September).',
    benefits: [
      { title: 'Avoid Heavy Penalties', description: 'Late filing of AOC-4 and MGT-7 attracts ₹100/day per form with no upper cap. Delay of 6 months = ₹18,000 penalty per form.' },
      { title: 'Prevent Director Disqualification', description: 'Directors of companies that fail to file annual returns for 3 consecutive years face disqualification under Section 164(2).' },
      { title: 'Maintain Active Status', description: 'Non-filing leads to "ACTIVE non-compliant" status — affecting the company\'s ability to raise funds, open bank accounts, or apply for tenders.' },
      { title: 'Clean MCA Record', description: 'A well-maintained filing history builds credibility with banks, investors, and government authorities.' },
    ],
    steps: [
      { num: 1, title: 'Financial Statement Preparation', description: 'Audited balance sheet and P&L account are prepared or sourced from the statutory auditor.' },
      { num: 2, title: 'AOC-4 Filing', description: 'Financial statements are attached to Form AOC-4 and filed on the MCA portal within 30 days of AGM.' },
      { num: 3, title: 'MGT-7 Filing', description: 'Annual return (MGT-7) containing details of shareholders, directors, meetings, and charges is filed within 60 days of AGM.' },
      { num: 4, title: 'AGM Minutes', description: 'We assist in preparation of AGM notice, agenda, and minutes to comply with the Companies Act.' },
    ],
    documents: [
      'Audited financial statements (Balance Sheet, P&L, Cash Flow)',
      'Auditor\'s report',
      'Board\'s report (Director\'s report)',
      'List of shareholders with shareholding details',
      'Details of directors (DIN, address, changes during the year)',
      'Details of charges (if any) on company assets',
    ],
    faqs: [
      { question: 'What is the penalty for late filing?', answer: 'AOC-4 and MGT-7 carry a late fee of ₹100/day per form with no upper limit. For a 30-day delay, the penalty alone is ₹3,000 per form. Additional compounding fees may also apply.' },
      { question: 'What if the company has not done any business?', answer: 'Even dormant companies with no transactions must file annual returns. They can alternatively apply for dormant company status under Section 455 of the Companies Act.' },
      { question: 'Can a company be struck off for non-filing?', answer: 'Yes. Under Section 248 of the Companies Act, the ROC can strike off a company that fails to file returns for 2 consecutive years.' },
    ],
    pricing: {
      plans: [
        { name: 'Basic', price: 3999, features: ['AOC-4 Filing', 'MGT-7 Filing', 'MCA Portal Submission', 'Filing Confirmations'] },
        { name: 'Standard', price: 5999, features: ['Everything in Basic', 'AGM Notice & Minutes', 'Board Report Drafting', 'Annual Compliance Calendar'] },
        { name: 'Full Annual', price: 9999, features: ['Everything in Standard', 'Director KYC (DIR-3)', 'Auditor Appointment (ADT-1)', 'Dedicated CA Manager'] },
      ],
    },
  },
  {
    slug: 'director-kyc',
    name: 'Director KYC (DIR-3 KYC)',
    tagline: 'Mandatory yearly KYC for every director with an active DIN',
    category: { slug: 'mca', label: 'MCA', color: 'sage' },
    heroDescription: 'Every individual holding a Director Identification Number (DIN) must complete DIR-3 KYC annually. Failure to comply results in DIN deactivation — making it impossible to sign any company documents until the DIN is re-activated with a penalty.',
    whatIs: 'DIR-3 KYC was introduced by MCA to keep DIN records updated. Every director must file their KYC annually (by 30th September) through Form DIR-3 KYC (first time) or DIR-3 KYC Web (subsequent years). If not filed, the DIN is marked as "Deactivated due to non-filing of DIR-3 KYC".',
    benefits: [
      { title: 'Active DIN Maintained', description: 'A deactivated DIN prevents the director from signing any board resolutions, annual returns, or company filings.' },
      { title: 'Avoid Reactivation Fee', description: 'Reactivation of a deactivated DIN requires paying ₹5,000 penalty plus filing the KYC. Prevention is far cheaper.' },
      { title: 'Quick Process', description: 'DIR-3 KYC Web is a simple online form that takes less than 30 minutes to complete once documents are ready.' },
    ],
    steps: [
      { num: 1, title: 'Confirm KYC Type', description: 'Determine if it\'s a first-time filing (Form DIR-3 KYC with DSC) or subsequent year (DIR-3 KYC Web with OTP).' },
      { num: 2, title: 'Document Preparation', description: 'PAN, Aadhaar, email, and mobile (linked to Aadhaar) are verified and confirmed.' },
      { num: 3, title: 'KYC Submission', description: 'Form DIR-3 KYC is submitted on the MCA portal. For web-based KYC, OTP is verified on the portal directly.' },
      { num: 4, title: 'DIN Active Confirmation', description: 'Post filing, DIN status shows "KYC done" on the MCA portal. Confirmation is shared with you.' },
    ],
    documents: [
      'Director Identification Number (DIN)',
      'PAN Card of the director',
      'Aadhaar Card (with mobile linked to Aadhaar)',
      'Unique personal mobile number and email (for OTP verification)',
      'DSC (for first-time DIR-3 KYC form)',
    ],
    faqs: [
      { question: 'What is the due date for DIR-3 KYC?', answer: 'The due date is typically 30th September each year. If not filed by this date, the DIN is deactivated from 1st October.' },
      { question: 'What if I have already left the company?', answer: 'Even if a director has resigned from all companies, they must still file DIR-3 KYC annually as long as the DIN is active.' },
    ],
    pricing: {
      plans: [
        { name: 'Single Director', price: 999, features: ['DIR-3 KYC / KYC Web Filing', 'DIN Active Confirmation', 'Annual Reminder'] },
        { name: 'Multiple Directors', price: 2499, features: ['Up to 5 Directors\' KYC', 'All DIN Confirmations', 'Priority Filing'] },
      ],
    },
  },
  {
    slug: 'share-transfer',
    name: 'Share Transfer',
    tagline: 'Transfer shares legally with complete documentation and MCA compliance',
    category: { slug: 'mca', label: 'MCA', color: 'sage' },
    heroDescription: 'Transferring shares in a Private Limited Company requires proper documentation including a Share Transfer Deed (Form SH-4), board resolution, and stamp duty. We handle the entire process to ensure the transfer is legally valid and recorded in the register of members.',
    whatIs: 'A share transfer involves the movement of ownership of shares from an existing shareholder (transferor) to a new owner (transferee). Under the Companies Act, 2013, the transfer must be documented through a Share Transfer Deed (Form SH-4), certified by the company, and updated in the Register of Members.',
    benefits: [
      { title: 'Legal Documentation', description: 'Proper SH-4 deed and board resolution ensure the transfer is legally enforceable and cannot be disputed.' },
      { title: 'Register of Members Update', description: 'The company\'s Register of Members (Form MGT-1) is updated to reflect the new shareholding pattern.' },
      { title: 'Stamp Duty Compliance', description: 'We calculate the correct stamp duty (0.25% of share value) and ensure it is paid on the Share Transfer Deed.' },
      { title: 'No Future Disputes', description: 'With proper documentation, both transferor and transferee are protected from future ownership disputes.' },
    ],
    steps: [
      { num: 1, title: 'SH-4 Deed Preparation', description: 'Share Transfer Deed (SH-4) is prepared with details of shares being transferred, consideration, and signatures.' },
      { num: 2, title: 'Stamp Duty Payment', description: 'Stamp duty at 0.25% of consideration (or face value, whichever is higher) is paid on the deed.' },
      { num: 3, title: 'Board Resolution', description: 'A board resolution approving the share transfer is passed and documented in the board minutes.' },
      { num: 4, title: 'Share Certificate & MGT-1', description: 'New share certificates are issued to the transferee. Register of Members is updated.' },
    ],
    documents: [
      'Original share certificate of the transferor',
      'Identity proof of both transferor and transferee (PAN, Aadhaar)',
      'Board resolution approving the transfer',
      'Executed SH-4 deed with stamp duty paid',
      'Any shareholder agreement or right of first refusal clauses (if applicable)',
    ],
    faqs: [
      { question: 'Can shares of a Pvt. Ltd. be freely transferred?', answer: 'No. Articles of Association of a Pvt. Ltd. typically restrict share transfers. Directors can refuse transfer in specified conditions, and existing shareholders may have Right of First Refusal.' },
      { question: 'Is MCA filing required for share transfer?', answer: 'No MCA form needs to be filed for a simple share transfer in a Pvt. Ltd. company. However, if the shareholding crosses certain thresholds in a listed/large company, filings may be required.' },
    ],
    pricing: {
      plans: [
        { name: 'Basic', price: 3999, features: ['SH-4 Deed Drafting', 'Board Resolution', 'Share Certificate Issuance', 'Register Update'] },
        { name: 'Standard', price: 5999, features: ['Everything in Basic', 'Stamp Duty Computation & Guidance', 'Shareholder Agreement Review', 'Compliance Certificate'] },
      ],
    },
  },
  {
    slug: 'authorized-capital',
    name: 'Authorized Capital Change',
    tagline: 'Increase your company\'s authorised share capital via SH-7 and MGT-14',
    category: { slug: 'mca', label: 'MCA', color: 'sage' },
    heroDescription: 'If you need to issue new shares beyond your current authorised capital — for investment rounds, ESOPs, or internal restructuring — you must first increase the authorised capital. We handle the resolution, stamp duty, and MCA filing.',
    whatIs: 'Authorised share capital is the maximum amount of share capital that a company is authorised to issue by its Memorandum of Association (MOA). To issue shares beyond this limit, the company must pass a special resolution, amend the MOA (Clause V), pay stamp duty, and file Form SH-7 and MGT-14 with MCA within 30 days.',
    benefits: [
      { title: 'Enable New Investment', description: 'Increasing authorised capital is a prerequisite for raising equity funding in any investment round.' },
      { title: 'ESOP Implementation', description: 'Companies planning to grant Employee Stock Options must have sufficient authorised capital to issue shares when options vest.' },
      { title: 'No Upper Limit', description: 'There is no statutory cap on authorised capital — you can increase it to any amount needed for your growth plans.' },
    ],
    steps: [
      { num: 1, title: 'Board Resolution', description: 'Board passes a resolution recommending increase in authorised capital, and calls for an EGM (or passes resolutions by circulation for eligible companies).' },
      { num: 2, title: 'Special Resolution (EGM/Circular)', description: 'Shareholders pass a special resolution approving the increase and amending MOA Clause V.' },
      { num: 3, title: 'Stamp Duty Payment', description: 'State-specific stamp duty on the increased authorised capital is paid on the amended MOA.' },
      { num: 4, title: 'SH-7 & MGT-14 Filing', description: 'Form SH-7 (notice of capital alteration) and Form MGT-14 (resolution filing) are filed with MCA within 30 days.' },
    ],
    documents: [
      'Current Memorandum of Association (MOA)',
      'Board resolution for increase',
      'Special resolution of shareholders',
      'Altered MOA (Clause V)',
      'Stamp duty payment proof',
      'Notice of EGM / proof of circulation',
    ],
    faqs: [
      { question: 'What is the stamp duty on increased authorised capital?', answer: 'Stamp duty varies by state. In Maharashtra, it is approximately 0.2% of the increase. In Karnataka, it is 0.15%. We calculate the exact amount before proceeding.' },
      { question: 'How long does the MCA process take?', answer: 'SH-7 and MGT-14 are auto-approved on the MCA portal within 1–3 working days of filing. The increase is effective from the date of EGM/circular resolution.' },
    ],
    pricing: {
      plans: [
        { name: 'Standard', price: 4999, features: ['Board & Shareholder Resolutions', 'MOA Amendment', 'SH-7 + MGT-14 Filing', 'Stamp Duty Advisory'] },
        { name: 'Premium', price: 7499, features: ['Everything in Standard', 'EGM Notice & Minutes', 'Updated Share Certificate Issuance', 'Annual Review'] },
      ],
    },
  },
  {
    slug: 'registered-office-change',
    name: 'Registered Office Change',
    tagline: 'Update your company\'s registered address with proper MCA compliance',
    category: { slug: 'mca', label: 'MCA', color: 'sage' },
    heroDescription: 'Changing your registered office address requires board approval, shareholder approval (for state changes), and MCA filings. We handle the resolutions, MOA amendment (if needed), and timely INC-22/23 filings.',
    whatIs: 'A company\'s registered office is the official address for all legal and government communications. Changing it within the same city requires Form INC-22. Changing from one RoC jurisdiction to another (within same state) requires special resolution and MGT-14. Changing state requires INC-23 petition to Regional Director — a complex process.',
    benefits: [
      { title: 'Legal Compliance', description: 'All communications from MCA, courts, and regulatory bodies go to the registered office. Updating it prevents missed notices.' },
      { title: 'Avoid Prosecution', description: 'Section 12 requires maintaining a physical registered office. Not updating the address is a punishable offence.' },
      { title: 'Bank & GST Update', description: 'After the MCA update, we help you update the address in GST registration, bank accounts, and other records.' },
    ],
    steps: [
      { num: 1, title: 'Board Resolution', description: 'Board of Directors passes a resolution approving the change of registered office address.' },
      { num: 2, title: 'Shareholder Approval', description: 'For inter-RoC or inter-state changes, a special resolution of shareholders is required.' },
      { num: 3, title: 'INC-22 Filing', description: 'Form INC-22 is filed with MCA within 30 days of the address change, along with proof of new address.' },
      { num: 4, title: 'MOA Amendment (if needed)', description: 'For inter-state changes, MOA Clause II is amended and INC-23 petition is filed with the Regional Director.' },
    ],
    documents: [
      'Proof of new registered office address (rent agreement or utility bill)',
      'NOC from owner of new premises',
      'Board resolution approving the change',
      'Shareholder resolution (for inter-RoC changes)',
      'Current MOA and COI',
    ],
    faqs: [
      { question: 'How long can a company use its old address after the change?', answer: 'The company must file INC-22 within 30 days of the change. The new address becomes effective from the date of filing, not from the date of moving.' },
      { question: 'Can I change the registered office to a residential address?', answer: 'Yes, a company can have its registered office at a residential address, provided the owner gives an NOC.' },
    ],
    pricing: {
      plans: [
        { name: 'Within City', price: 2999, features: ['Board Resolution', 'INC-22 Filing', 'New Address Proof Compilation'] },
        { name: 'Inter-RoC', price: 5999, features: ['Board + Shareholder Resolutions', 'MGT-14 + INC-22', 'MOA Amendment (Clause II)'] },
        { name: 'Inter-State', price: 14999, features: ['Full State Change', 'INC-23 Petition (Regional Director)', 'MOA Amendment', 'NOC from Creditors'] },
      ],
    },
  },
]
