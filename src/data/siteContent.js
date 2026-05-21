// Default content for all editable site sections.
// The admin panel writes overrides to localStorage; these are the fallback defaults.

export const DEFAULT_CONTENT = {

  contact: {
    email: 'ganeshtaxconsultancy.1126@gmail.com',
    phone: '+91 87994 15983',
    bookingLabel: 'Free 30-min consultation',
    responseTime: 'Under 2 business hours',
    address: 'E/802 Krish Luxuria,\nNr. Galaxy Coral Bungalows, Nr. Canara Bank,\nOpp. RAF Camp, Vastral,\nAhmedabad – 382418',
  },

  stats: [
    { num: '50K+', label: 'Businesses registered' },
    { num: '99%',  label: 'Filing success rate' },
    { num: '₹0',   label: 'Hidden charges' },
  ],

  hero: {
    badge: "✦ India's trusted compliance partner",
    headline: 'Your business, compliantly done right.',
    subtext: 'From company registration to annual filings — we simplify every compliance step so you can focus on building what matters.',
    sketchNote: '→ it\'s free to start!',
  },

  whyCards: [
    { icon: '✓', title: 'No jargon, ever', desc: 'We translate complex legal and tax requirements into plain language. You\'ll always know exactly what\'s happening and why.' },
    { icon: '⚡', title: 'Lightning turnaround', desc: 'Most registrations completed in 3–5 business days. Our streamlined process eliminates unnecessary back-and-forth.' },
    { icon: '🛡', title: 'Transparent pricing', desc: 'Fixed fees, no surprises. You see the full cost upfront — government fees, professional fees, everything included.' },
    { icon: '🔒', title: '100% secure & compliant', desc: 'Your documents are encrypted and stored securely. We follow all data protection guidelines with full audit trails.' },
    { icon: '👨‍💼', title: 'Dedicated experts', desc: 'Every account gets a dedicated CA and CS expert. Real humans, not chatbots — available via call, chat, or email.' },
    { icon: '♥', title: 'End-to-end coverage', desc: 'From day zero to ongoing compliance — we handle registration, filings, renewals, and everything in between.' },
  ],

  testimonials: [
    { quote: 'Ganesh Tax Consultancy registered our Private Limited company in just 4 days. The team was incredibly responsive and the whole process felt effortless.', author: 'Rahul Kapoor', role: 'Founder', company: 'Kapoor Tech Pvt. Ltd.', initials: 'RK', color: 'sage' },
    { quote: "Finally a compliance partner that doesn't make me feel dumb. Plain language, zero surprises on billing, and they actually pick up the phone.", author: 'Priya Sharma', role: 'CEO', company: 'GreenLeaf Foods', initials: 'PS', color: 'rust' },
    { quote: 'Our trademark was registered without a single objection. The team knew exactly what class to file under and guided us through every step.', author: 'Arjun Mehta', role: 'Co-Founder', company: 'Mehta Lifestyle', initials: 'AM', color: 'gold' },
  ],

  pricingPlans: [
    {
      id: 'starter',
      name: 'Starter',
      desc: 'For solo founders and small businesses just getting started.',
      monthlyPrice: 1999,
      yearlyPrice: 1599,
      badge: '',
      cta: 'Get Started',
      featured: false,
      features: [
        { text: '1 Business Registration', included: true },
        { text: 'GST Registration', included: true },
        { text: 'Quarterly ITR Filing', included: true },
        { text: 'Email Support', included: true },
        { text: 'Trademark Filing', included: false },
        { text: 'Dedicated CA', included: false },
        { text: 'MCA Compliance Pack', included: false },
        { text: 'Payroll Processing', included: false },
      ],
    },
    {
      id: 'growth',
      name: 'Growth',
      desc: 'For growing companies that need full compliance coverage.',
      monthlyPrice: 3999,
      yearlyPrice: 3199,
      badge: 'Most Popular',
      cta: 'Get Started',
      featured: true,
      features: [
        { text: 'Everything in Starter', included: true },
        { text: '1 Trademark Registration', included: true },
        { text: 'Monthly GST Filing', included: true },
        { text: 'Dedicated CA Support', included: true },
        { text: 'Annual MCA Filing', included: true },
        { text: 'Priority Chat & Call', included: true },
        { text: 'Payroll Processing', included: false },
        { text: 'Multi-entity Support', included: false },
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      desc: 'For established companies needing complete, managed compliance.',
      monthlyPrice: 7999,
      yearlyPrice: 6399,
      badge: '',
      cta: 'Contact Sales',
      featured: false,
      features: [
        { text: 'Everything in Growth', included: true },
        { text: 'Payroll Processing (50 emp)', included: true },
        { text: 'Multi-entity Support', included: true },
        { text: 'Unlimited Trademark', included: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Tax Planning Advisory', included: true },
        { text: 'Legal Document Drafting', included: true },
        { text: '24/7 Priority Support', included: true },
      ],
    },
  ],

  about: {
    story: [
      'Our founders spent years watching businesses lose momentum to compliance confusion — missed deadlines, wrong filings, surprise penalties. The paperwork was getting in the way of the real work.',
      'So we established Ganesh Tax Consultancy LLP — bringing together experienced Chartered Accountants, tax professionals, and compliance experts to make regulatory requirements genuinely effortless for businesses of every size.',
      'We\'ve since helped thousands of businesses across Gujarat and India navigate registrations, tax filings, trademark protection, and annual compliance. Every service we offer is born from a real problem a client faced.',
    ],
    blockquote: 'Compliance doesn\'t have to be intimidating — it just needs the right people explaining it in the right way.',
    blockquoteAuthor: 'Founder, Ganesh Tax Consultancy LLP',
    stats: [
      { num: '50K+', label: 'Businesses served',     color: 'sage' },
      { num: '7+',   label: 'Years of expertise',    color: 'rust' },
      { num: '200+', label: 'Expert professionals',  color: 'gold' },
      { num: '99%',  label: 'Filing success rate',   color: 'navy' },
    ],
    team: [
      { initials: 'GS', name: 'Ganesh Shah',   role: 'Founder & Managing Partner', note: 'CA · 15 yrs exp', color: 'sage' },
      { initials: 'RP', name: 'Rajesh Patel',  role: 'Senior Tax Consultant',      note: 'CA · 10 yrs',    color: 'rust' },
      { initials: 'MV', name: 'Meera Vora',    role: 'Head of Compliance',         note: 'CS · 8 yrs exp', color: 'gold' },
      { initials: 'AK', name: 'Ankit Kumar',   role: 'GST Specialist',             note: 'CA · 6 yrs exp', color: 'navy' },
    ],
    values: [
      { icon: '🌱', title: 'Founder-first',         desc: 'Everything we do prioritises the business owner\'s time and peace of mind. We exist to serve you, not the other way.' },
      { icon: '🔍', title: 'Radical transparency',  desc: 'No hidden fees, no vague timelines. We tell you exactly what\'s happening at every step of the process.' },
      { icon: '⚡', title: 'Speed as a feature',    desc: 'We believe slow bureaucracy is a design problem. Our workflows are engineered to move fast without compromising accuracy.' },
      { icon: '🤝', title: 'Long-term partnership', desc: 'We don\'t do one-time transactions. We\'re your compliance partner for every stage of your business growth.' },
    ],
  },

  legal: {
    privacyPolicy: {
      lastUpdated: 'April 2025',
      sections: [
        { heading: '1. Information We Collect', body: 'We collect personal information you provide when using our services, including your name, email address, phone number, PAN, Aadhaar number, business documents, and financial information required for compliance filings. We also collect usage data such as pages visited and actions taken on our website.' },
        { heading: '2. How We Use Your Information', body: 'Your information is used solely to provide the compliance and tax services you have engaged us for. This includes filing returns, registrations, and government submissions on your behalf. We may also use your contact details to send service updates, reminders about filing deadlines, and important compliance alerts.' },
        { heading: '3. Data Sharing and Disclosure', body: 'We do not sell or rent your personal information to third parties. We share your data only with government portals and regulatory authorities (MCA, GSTN, Income Tax Department, Trademark Registry) as required to perform the services you have requested. We may also share data with our professional advisors under strict confidentiality obligations.' },
        { heading: '4. Data Security', body: 'We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal data from unauthorised access, disclosure, or loss. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.' },
        { heading: '5. Cookies and Tracking', body: 'Our website uses cookies to improve your browsing experience and analyse site traffic. You may disable cookies through your browser settings, but doing so may affect certain site features. We do not use cookies to collect personal information beyond standard analytics.' },
        { heading: '6. Your Rights', body: 'You have the right to access, correct, or request deletion of your personal data held by us. To exercise these rights, please contact us at ganeshtaxconsultancy.1126@gmail.com. We will respond to your request within 30 days.' },
        { heading: '7. Retention of Data', body: 'We retain your personal data for as long as necessary to provide our services and to comply with applicable legal obligations. Tax and compliance records are retained for a minimum of 8 years as required under Indian law.' },
        { heading: '8. Changes to This Policy', body: 'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes your acceptance of the revised policy.' },
        { heading: '9. Contact Us', body: 'If you have any questions about this Privacy Policy, please contact us at ganeshtaxconsultancy.1126@gmail.com or call +91 87994 15983. Our office is at E/802 Krish Luxuria, Nr. Galaxy Coral Bungalows, Vastral, Ahmedabad – 382418.' },
      ],
    },
    termsOfService: {
      lastUpdated: 'April 2025',
      sections: [
        { heading: '1. Acceptance of Terms', body: 'By engaging our services or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.' },
        { heading: '2. Services Offered', body: 'Ganesh Tax Consultancy LLP provides professional tax, compliance, and business registration services as described on this website. The scope of services for each engagement is defined in our service agreement or invoice. We reserve the right to modify or discontinue any service at any time.' },
        { heading: '3. Payment Terms', body: 'Our professional fees are payable as agreed at the time of engagement. Government fees, stamp duties, and statutory charges are billed separately at actual cost. Payments are accepted via UPI, bank transfer, or card. Services commence only after receipt of agreed fees.' },
        { heading: '4. Client Obligations', body: 'You agree to provide accurate, complete, and timely information and documents required for the completion of services. Delays caused by incomplete or incorrect information provided by you are not our responsibility.' },
        { heading: '5. No Guarantee of Outcome', body: 'While we apply our best professional judgment and expertise, we cannot guarantee specific outcomes from government authorities (MCA, GST authorities, Trademark Registry, Income Tax Department). Approvals, rejections, or timelines are at the sole discretion of the relevant government body.' },
        { heading: '6. Limitation of Liability', body: 'Our liability for any claim arising from our services is limited to the professional fees paid by you for the specific service in question. We are not liable for indirect, consequential, or special damages, or for delays caused by government portals or authorities.' },
        { heading: '7. Intellectual Property', body: 'All content on this website, including text, graphics, and design, is the property of Ganesh Tax Consultancy LLP and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our prior written consent.' },
        { heading: '8. Governing Law', body: 'These Terms of Service are governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.' },
        { heading: '9. Contact', body: 'For any questions regarding these Terms of Service, please contact us at ganeshtaxconsultancy.1126@gmail.com or call +91 87994 15983.' },
      ],
    },
    refundPolicy: {
      lastUpdated: 'April 2025',
      sections: [
        { heading: '1. Government Fees — Non-Refundable', body: 'Government fees, statutory charges, stamp duties, and filing fees paid to government authorities (MCA, GSTN, Trademark Registry, Income Tax Department, etc.) are non-refundable once paid. These amounts are passed through at actual cost and are outside our control.' },
        { heading: '2. Professional Fees — Work Not Started', body: 'If you cancel a service engagement before we have commenced any work, you are entitled to a full refund of professional fees paid. Cancellation requests must be submitted in writing to ganeshtaxconsultancy.1126@gmail.com.' },
        { heading: '3. Professional Fees — Work In Progress', body: 'If work has commenced but is not complete, we will assess the stage of completion and issue a proportionate refund of the professional fee. Work is considered commenced once we begin document collection, drafting, or any filing activity on your behalf.' },
        { heading: '4. Completed Services', body: 'No refund is available once a service has been fully delivered. This includes situations where a government authority rejects an application, as such rejections are beyond our control. We will advise on rectification at no additional charge for errors attributable to us.' },
        { heading: '5. Timeline for Refunds', body: 'Approved refunds are processed within 7–10 business days to the original payment method. For bank transfers, please allow additional processing time as per your bank\'s policies.' },
        { heading: '6. How to Request a Refund', body: 'To request a refund, email us at ganeshtaxconsultancy.1126@gmail.com with your name, service details, payment reference, and reason for refund. Our team will review and respond within 3 business days.' },
      ],
    },
    disclaimer: {
      lastUpdated: 'April 2025',
      sections: [
        { heading: '1. General Information Only', body: 'The information provided on this website is for general informational purposes only. It is not intended to constitute legal, financial, or tax advice. While we strive to keep all information accurate and up to date, laws and regulations change frequently and the content may not reflect the most current legal developments.' },
        { heading: '2. Not a Substitute for Professional Advice', body: 'Nothing on this website should be construed as professional legal or financial advice for your specific situation. For advice specific to your circumstances, please engage our professionals directly or consult an appropriate licensed practitioner.' },
        { heading: '3. Accuracy of Information', body: 'Ganesh Tax Consultancy LLP makes no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information on this website. Any reliance you place on such information is strictly at your own risk.' },
        { heading: '4. Third-Party Links', body: 'Our website may contain links to third-party websites for your convenience. We do not endorse, control, or take responsibility for the content or practices of any linked sites. Visiting these links is done at your own discretion.' },
        { heading: '5. Results May Vary', body: 'Outcomes mentioned on this website (such as registration timelines, success rates, or cost estimates) are indicative and based on typical cases. Actual results may vary depending on government processing times, document completeness, and other factors outside our control.' },
        { heading: '6. Contact Us', body: 'If you have any questions about this disclaimer or require professional advice, please contact us at ganeshtaxconsultancy.1126@gmail.com or call +91 87994 15983.' },
      ],
    },
  },
}
