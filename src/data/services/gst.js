export const gstServices = [
  {
    slug: 'gst-registration',
    name: 'GST Registration',
    tagline: 'Get your GSTIN and start doing business legally',
    category: { slug: 'gst', label: 'GST', color: 'rust' },
    heroDescription: 'GST Registration is mandatory for any business with an annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states). A GSTIN is your unique tax identity — required for issuing tax invoices, claiming input tax credit, and filing GST returns.',
    whatIs: 'Goods and Services Tax (GST) is India\'s unified indirect tax that replaced a host of central and state taxes. Any business that crosses the threshold turnover must register and obtain a GSTIN (GST Identification Number). Even voluntary registration is possible and beneficial for B2B businesses to claim input tax credit.',
    benefits: [
      { title: 'Input Tax Credit', description: 'Registered businesses can claim credit for GST paid on purchases, significantly reducing the effective tax burden.' },
      { title: 'Inter-state Business', description: 'GST registration is mandatory for businesses selling goods across state borders, regardless of turnover.' },
      { title: 'Legal Compliance', description: 'Operating without GST registration when liable attracts penalties up to ₹10,000 per month and prosecution.' },
      { title: 'Business Credibility', description: 'Having a GSTIN is expected by corporate clients, government agencies, and e-commerce platforms.' },
    ],
    steps: [
      { num: 1, title: 'GST Portal Application', description: 'We register your business on the GST portal (gst.gov.in) and fill in Form REG-01 with business details.' },
      { num: 2, title: 'Document Upload', description: 'Required documents are uploaded to the portal. OTP verification is done via Aadhaar or digital signature.' },
      { num: 3, title: 'Application Review', description: 'The GST officer reviews the application. We respond to any queries raised within the prescribed timeframe.' },
      { num: 4, title: 'GSTIN Issuance', description: 'Upon approval, your 15-digit GSTIN is issued. Typically takes 3–5 working days from application.' },
    ],
    documents: [
      'PAN Card of the business entity',
      'Aadhaar Card of the authorised signatory',
      'Proof of business address (rent agreement or utility bill)',
      'Bank account details (cancelled cheque or bank statement)',
      'Photograph of the authorised signatory',
      'Incorporation certificate / partnership deed (for companies and firms)',
    ],
    faqs: [
      { question: 'Is GST registration mandatory for all businesses?', answer: 'Mandatory for businesses with annual turnover > ₹20 lakhs (₹10 lakhs for North-East states). Also mandatory for inter-state supply, e-commerce sellers, and reverse charge recipients regardless of turnover.' },
      { question: 'Can I have multiple GSTINs?', answer: 'Yes, a business with operations in multiple states must register in each state separately. Multiple business verticals within a state can also have separate GSTINs.' },
      { question: 'What is the composition scheme?', answer: 'Small businesses with turnover up to ₹1.5 crore can opt for the Composition Scheme, pay a flat tax rate (1–5%), and file quarterly returns instead of monthly.' },
    ],
    pricing: {
      plans: [
        { name: 'Registration Only', price: 1499, features: ['GST Portal Application', 'GSTIN Certificate', '3–5 Day Turnaround'] },
        { name: 'Registration + 1st Return', price: 2999, features: ['Everything in Basic', 'First GSTR-3B Filing', 'HSN/SAC Code Advisory'] },
        { name: 'Registration + Annual Pack', price: 8999, features: ['GST Registration', '12 Months GSTR-1 & 3B', 'Annual GSTR-9', 'Dedicated Accountant'] },
      ],
    },
  },
  {
    slug: 'monthly-gst-filing',
    name: 'Monthly GST Filing',
    tagline: 'GSTR-1 and GSTR-3B filed accurately and on time, every month',
    category: { slug: 'gst', label: 'GST', color: 'rust' },
    heroDescription: 'Missing GST return deadlines attracts late fees of ₹50/day (₹20/day for NIL returns). Our monthly GST filing service ensures your GSTR-1 (outward supply) and GSTR-3B (tax summary) are filed on time, every month.',
    whatIs: 'GSTR-1 reports details of all outward taxable supplies made during the month. GSTR-3B is a monthly self-declared summary of GST liabilities and input tax credits. Monthly filers must file by the 11th and 20th of the following month respectively. Quarterly filers under QRMP use GSTR-1 (13th) and PMT-06 challan.',
    benefits: [
      { title: 'Zero Late Fees', description: 'We file before every deadline, ensuring you never pay ₹50/day late fees.' },
      { title: 'Accurate ITC Matching', description: 'We reconcile purchase data with GSTR-2B to ensure you claim maximum eligible input tax credit.' },
      { title: 'eInvoice & eWay Bill', description: 'We assist with e-Invoice generation (if applicable) and e-Way bill for goods movement.' },
      { title: 'Dedicated GST Manager', description: 'A dedicated accountant manages your account, answers queries, and ensures seamless compliance.' },
    ],
    steps: [
      { num: 1, title: 'Sales & Purchase Data', description: 'Share your monthly sales invoices and purchase bills (or accounting software access) by the 5th of each month.' },
      { num: 2, title: 'Data Verification', description: 'Our accountant verifies data, reconciles GSTR-2B, and identifies any mismatches.' },
      { num: 3, title: 'GSTR-1 Filing', description: 'Outward supply details are filed on the GST portal by the 11th of the month.' },
      { num: 4, title: 'GSTR-3B Filing', description: 'Tax liability is computed, ITC is matched, and GSTR-3B is filed with payment by the 20th.' },
    ],
    documents: [
      'Monthly sales invoices / billing data',
      'Monthly purchase invoices / expense data',
      'Bank statements (for payments verification)',
      'GST portal credentials',
    ],
    faqs: [
      { question: 'What is QRMP — should I opt for it?', answer: 'QRMP (Quarterly Return Monthly Payment) allows taxpayers with turnover up to ₹5 crore to file GSTR-1 quarterly but pay GST monthly. We advise you on the best option.' },
      { question: 'What if I have no transactions in a month?', answer: 'NIL returns must still be filed. Late fee for NIL returns is ₹20/day, capped at ₹500 per return.' },
    ],
    pricing: {
      plans: [
        { name: 'Monthly', price: 999, features: ['GSTR-1 Filing', 'GSTR-3B Filing', 'GST Payment Advice', 'Email Support'] },
        { name: 'Monthly + ITC', price: 1499, features: ['Everything in Basic', 'GSTR-2B Reconciliation', 'ITC Optimisation', 'eInvoice Support'] },
        { name: 'Annual Pack', price: 9999, features: ['12 Months Monthly Filing', 'Annual GSTR-9', 'Dedicated Accountant', 'Priority Support'] },
      ],
    },
  },
  {
    slug: 'annual-gst-return',
    name: 'Annual GST Return (GSTR-9)',
    tagline: 'Annual reconciliation return for all registered GST taxpayers',
    category: { slug: 'gst', label: 'GST', color: 'rust' },
    heroDescription: 'GSTR-9 is the annual GST return that consolidates all monthly/quarterly returns filed during the financial year. It must be filed by 31st December of the following financial year. Missing this deadline attracts a late fee of ₹200/day.',
    whatIs: 'GSTR-9 provides a consolidated summary of all outward and inward supplies made during the year. It reconciles figures from GSTR-1, GSTR-3B, and purchase register. Taxpayers with annual turnover above ₹2 crore must also file GSTR-9C (reconciliation statement certified by a CA). Turnover below ₹2 crore is currently exempt from GSTR-9C.',
    benefits: [
      { title: 'Mandatory Compliance', description: 'GSTR-9 is mandatory for all regular taxpayers (excluding composite dealers). Non-filing leads to late fees and notices.' },
      { title: 'Reconcile the Full Year', description: 'Identify and correct mismatches between outward supply data (GSTR-1) and tax paid data (GSTR-3B) for the entire year.' },
      { title: 'Avoid Scrutiny', description: 'A properly filed GSTR-9 reduces the risk of GST audits, notices, and assessments from the GST department.' },
    ],
    steps: [
      { num: 1, title: 'Data Compilation', description: 'We compile all GST returns filed during the year — GSTR-1, GSTR-3B, and purchase register.' },
      { num: 2, title: 'Annual Reconciliation', description: 'We identify and reconcile differences between outward supplies, ITC claimed, and tax paid.' },
      { num: 3, title: 'GSTR-9 Preparation', description: 'All tables in GSTR-9 are populated accurately — turnover, tax, ITC, and amendments.' },
      { num: 4, title: 'Filing & Confirmation', description: 'GSTR-9 is filed on the GST portal with your confirmation. Acknowledgment is shared.' },
    ],
    documents: [
      'GST portal login credentials',
      'All GSTR-1 and GSTR-3B returns for the financial year',
      'Purchase register for the year',
      'Sales register / tally data',
      'Bank statements (for cross-verification)',
    ],
    faqs: [
      { question: 'Is GSTR-9 mandatory for all businesses?', answer: 'Mandatory for all regular taxpayers. Composite dealers file GSTR-9A instead. Currently, businesses with turnover below ₹2 crore are exempt from filing GSTR-9 (waived by government notification).' },
      { question: 'What is GSTR-9C?', answer: 'GSTR-9C is a reconciliation statement between audited financial statements and GSTR-9. It must be certified by a CA/CMA and is mandatory for turnover above ₹5 crore.' },
    ],
    pricing: {
      plans: [
        { name: 'Basic', price: 2999, features: ['Annual Data Compilation', 'GSTR-9 Filing', 'Acknowledgment Copy'] },
        { name: 'With Reconciliation', price: 4999, features: ['Everything in Basic', 'Full Year ITC Reconciliation', 'Mismatch Resolution', 'GST Department Query Handling'] },
        { name: 'With GSTR-9C', price: 8999, features: ['GSTR-9 + GSTR-9C', 'CA Certification', 'Audit Support', 'Full Compliance Report'] },
      ],
    },
  },
  {
    slug: 'gst-audit',
    name: 'GST Audit (GSTR-9C)',
    tagline: 'Mandatory CA-certified reconciliation for high-turnover businesses',
    category: { slug: 'gst', label: 'GST', color: 'rust' },
    heroDescription: 'If your annual turnover exceeds ₹5 crore, you must file GSTR-9C — a reconciliation statement between your audited financial statements and your annual GST return. Our CAs ensure accurate certification and zero-risk filing.',
    whatIs: 'GSTR-9C is a reconciliation statement that must be prepared and certified by a Chartered Accountant or Cost Accountant. It reconciles the figures in the audited annual financial statements with GSTR-9. It identifies any differences in turnover, ITC, and tax paid, and explains the reasons.',
    benefits: [
      { title: 'Mandatory Compliance', description: 'Non-filing of GSTR-9C by businesses with turnover > ₹5 crore attracts late fees of ₹200/day and potential audit proceedings.' },
      { title: 'Accurate Reconciliation', description: 'Ensures your GST records match your audited financials — reducing the risk of demand notices.' },
      { title: 'Expert CA Review', description: 'Our experienced GST CAs review your returns and financials to identify reconciling items and provide certified statements.' },
    ],
    steps: [
      { num: 1, title: 'Financial Data Collection', description: 'Collect audited financial statements, trial balance, and all GST returns for the year.' },
      { num: 2, title: 'Reconciliation Exercise', description: 'Reconcile turnover, ITC, and tax paid between financials and GSTR-9. Identify and explain differences.' },
      { num: 3, title: 'CA Review & Certification', description: 'Our CA reviews the reconciliation, certifies GSTR-9C, and provides detailed notes.' },
      { num: 4, title: 'GSTR-9C Filing', description: 'Filed on the GST portal along with the GSTR-9 (if not already filed).' },
    ],
    documents: [
      'Audited financial statements for the year',
      'Trial balance and P&L account',
      'All GST returns filed during the year',
      'GST reconciliation workings',
      'List of pending ITC and reasons',
    ],
    faqs: [
      { question: 'Who must file GSTR-9C?', answer: 'All regular taxpayers with annual aggregate turnover exceeding ₹5 crore must file GSTR-9C. From FY 2020-21, the self-certification option has been removed — CA certification is mandatory.' },
    ],
    pricing: {
      plans: [
        { name: 'Standard', price: 4999, features: ['Turnover up to ₹5 crore', 'Reconciliation Statement', 'CA Certification', 'GSTR-9C Filing'] },
        { name: 'Advanced', price: 9999, features: ['Turnover ₹5–₹20 crore', 'Detailed Reconciliation Notes', 'CA Certification', 'GST Notice Response (1 round)'] },
        { name: 'Enterprise', price: 18999, features: ['Turnover above ₹20 crore', 'Multi-GSTIN Reconciliation', 'Dedicated GST CA Team', 'Unlimited Query Support'] },
      ],
    },
  },
  {
    slug: 'gst-lut-filing',
    name: 'GST LUT Filing',
    tagline: 'Export goods and services without paying GST at the time of supply',
    category: { slug: 'gst', label: 'GST', color: 'rust' },
    heroDescription: 'A Letter of Undertaking (LUT) under GST allows exporters to supply goods or services without paying integrated GST (IGST) at the time of export. Without a valid LUT, exporters must pay IGST and then claim a refund — a cash flow burden.',
    whatIs: 'Under Section 16(3) of the IGST Act, exporters can either pay IGST and claim a refund, or furnish a Bond/LUT to export without paying IGST. For most exporters, the LUT route is more cash-flow-friendly. LUT must be filed on the GST portal before exporting in each financial year.',
    benefits: [
      { title: 'Zero GST on Exports', description: 'Export goods and services without paying IGST, improving your working capital and cash flow significantly.' },
      { title: 'No Refund Wait', description: 'Avoid the lengthy GST refund process. LUT eliminates the need to apply for refunds after each export.' },
      { title: 'Annual Validity', description: 'LUT is valid for the entire financial year. One filing covers all exports until 31st March.' },
    ],
    steps: [
      { num: 1, title: 'Eligibility Check', description: 'Verify that you have no prosecution under GST, CGST, or IGST Acts in the last 5 years. Most regular exporters qualify.' },
      { num: 2, title: 'LUT Application (Form GST RFD-11)', description: 'We prepare and submit the LUT application on the GST portal with your undertaking details.' },
      { num: 3, title: 'LUT Acknowledgment', description: 'The LUT is acknowledged on the GST portal. You can begin exporting without IGST payment.' },
      { num: 4, title: 'Annual Renewal', description: 'We remind you to renew LUT each April for the new financial year before the first export.' },
    ],
    documents: [
      'GST portal credentials',
      'IEC (Import Export Code)',
      'Bank details of the business',
      'List of authorised signatories',
    ],
    faqs: [
      { question: 'Who is eligible to file an LUT?', answer: 'Any registered exporter who has not been prosecuted for tax evasion exceeding ₹2.5 crore in the preceding 5 years is eligible to file an LUT.' },
      { question: 'Can a new exporter file an LUT?', answer: 'Yes, new exporters (first-time) are also eligible to file an LUT. There is no requirement of past export history.' },
    ],
    pricing: {
      plans: [
        { name: 'Basic', price: 1299, features: ['LUT Application Filing', 'Annual Renewal Reminder', 'Export Compliance Advisory'] },
        { name: 'With IEC', price: 2999, features: ['LUT Filing', 'IEC Registration', 'Export GST Advisory', 'Annual Package'] },
      ],
    },
  },
  {
    slug: 'gst-cancellation',
    name: 'GST Cancellation',
    tagline: 'Cancel your GSTIN registration properly to avoid future compliance obligations',
    category: { slug: 'gst', label: 'GST', color: 'rust' },
    heroDescription: 'If your business has closed, fallen below the GST threshold, or is no longer engaged in taxable supply, you should cancel your GSTIN. Keeping an inactive GSTIN active without filing returns attracts late fees and scrutiny.',
    whatIs: 'GST registration cancellation is the process of surrendering your GSTIN. It can be done voluntarily (by the taxpayer) or compulsorily (by the GST officer). Upon cancellation, you must file a final GSTR-10 (final return) within 3 months. All pending returns must be filed before cancellation can be processed.',
    benefits: [
      { title: 'Stop Compliance Obligations', description: 'Cancel your GSTIN and stop the obligation to file monthly/quarterly returns and annual returns.' },
      { title: 'Avoid Late Fees', description: 'An inactive GSTIN with unfiled returns accumulates late fees indefinitely. Cancellation stops the clock.' },
      { title: 'Clean Exit', description: 'Proper GST cancellation with GSTR-10 filing ensures clean exit from the GST system without future liability.' },
    ],
    steps: [
      { num: 1, title: 'Pending Return Filing', description: 'All pending GST returns (GSTR-1, GSTR-3B) must be filed before cancellation application.' },
      { num: 2, title: 'Cancellation Application (REG-16)', description: 'Form REG-16 is filed with reason for cancellation, last date of business, and stock details.' },
      { num: 3, title: 'Final Return (GSTR-10)', description: 'GSTR-10 (final return) must be filed within 3 months of cancellation order.' },
      { num: 4, title: 'Cancellation Order', description: 'GST officer reviews the application and issues Form REG-19 confirming cancellation.' },
    ],
    documents: [
      'GST portal credentials',
      'Reason for cancellation',
      'Date of last business transaction',
      'Details of stock on hand on the date of cancellation',
      'All pending GST return data',
    ],
    faqs: [
      { question: 'Can a cancelled GST registration be revoked?', answer: 'Yes, within 30 days of the cancellation order, the taxpayer can apply for revocation of cancellation in Form REG-21.' },
      { question: 'Can I cancel without filing pending returns?', answer: 'No. The GST portal blocks cancellation applications if there are pending GSTR-3B returns. All pending returns must be filed first.' },
    ],
    pricing: {
      plans: [
        { name: 'Standard', price: 1999, features: ['REG-16 Application', 'GSTR-10 Final Return', 'Cancellation Order Tracking'] },
        { name: 'With Clearance', price: 4999, features: ['Filing of Pending Returns (up to 3)', 'REG-16 + GSTR-10', 'Full Closure Support'] },
      ],
    },
  },
]
