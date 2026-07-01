// ─── All data extracted directly from Kiruthiga Giridharan's resume ───

export const personalInfo = {
  name: 'Kiruthiga Giridharan',
  firstName: 'Kiruthiga',
  lastName: 'Giridharan',
  title: 'Customer Operations Professional',
  subtitle: 'Customer Operations & Care • Account & Database Management • KPI Reporting & Process Improvement',
  email: 'kiruthigagiri@gmail.com',
  phone: '(+353) 892152652',
  location: 'Dublin, Ireland',
  linkedin: 'https://linkedin.com/in/kiruthiga-giridharan',
  authorisedToWork: 'Authorised to work in Ireland',
  summary:
    'Customer operations professional with 4.5+ years delivering excellent service across consumer (B2C) and enterprise environments, owning a 200+ customer portfolio with 100% on-time delivery and consistently high satisfaction. Trusted point of contact who resolves high-volume customer queries within SLA, manages account registration and onboarding, and safeguards customer database integrity. Data-driven and highly organised, with strong Advanced Excel and SAP S/4HANA skills, turning reporting and analysis into decisions that improve customer outcomes. Proven record of continuous improvement (Lean / DMAIC), cutting recurring errors by 25% and manual effort by 20% while raising service quality.',
};

// ─── Hero KPI stats ───
export const heroStats = [
  { label: 'Years Experience', value: 4.5, suffix: '+', icon: 'clock' },
  { label: 'Customer Portfolio', value: 200, suffix: '+', icon: 'building' },
  { label: 'Queries Resolved / Wk', value: 80, suffix: '+', icon: 'database' },
  { label: 'On-time Delivery', value: 100, suffix: '%', icon: 'shield' },
];

// ─── Work Experience ───
export const experience = [
  {
    id: 1,
    company: 'Circana Market Research',
    role: 'Customer Operations & Client Analyst',
    period: '2024 – Present',
    startYear: 2024,
    endYear: 2026,
    location: 'Dublin, Ireland',
    tagline: 'Own end-to-end customer operations for a 200+ customer portfolio, resolving high-volume queries, safeguarding data integrity, and driving the reporting and process improvements that keep service running smoothly.',
    highlights: [
      'Owned the customer relationship for 200+ accounts as primary point of contact, resolving 80+ queries and issues weekly within SLA and sustaining consistently high customer satisfaction.',
      'Managed customer account registration and onboarding for 25+ new accounts per quarter, personally safeguarding customer database integrity through SQL and SAP S/4HANA validation and reconciliation.',
      'Delivered accurate, on-time KPI reporting and analysis in Power BI, Tableau, and Advanced Excel, giving the team and leadership a clear, real-time view of customer performance with 100% on-time delivery.',
      'Drove continuous improvement across customer processes, cutting recurring errors by 25% and manual effort by 20% through standardisation and automation.',
      'Investigated and resolved data discrepancies with SQL and structured root cause analysis, protecting the accuracy of customer records and preventing repeat issues.',
      'Acted as the trusted link between customers and internal teams, coordinating fast resolution and turning customer feedback into lasting process improvements.',
    ],
    achievements: [
      { label: 'On-time Delivery', value: 100, suffix: '%' },
      { label: 'Recurring Error Reduction', value: 25, suffix: '%' },
      { label: 'Accounts Onboarded / Qtr', value: 25, suffix: '+' },
    ],
    technologies: ['SQL', 'SAP S/4HANA', 'Power BI', 'Tableau', 'Advanced Excel', 'Jira', 'Confluence'],
    color: '#ec4899',
    accentColor: 'rgba(236,72,153,0.15)',
  },
  {
    id: 2,
    company: 'Estee Lauder Companies',
    role: 'Customer & Retail Operations (B2C)',
    period: '2022 – 2024',
    startYear: 2022,
    endYear: 2024,
    location: 'Dublin, Ireland',
    tagline: 'Delivered customer service and retail operations for a global B2C consumer beauty brand, supporting the end-to-end customer experience across retail locations.',
    highlights: [
      'Handled customer queries and resolved issues across retail operations, delivering excellent B2C customer service and a smooth customer experience.',
      'Maintained accurate customer and account records and supported day-to-day transaction and reporting accuracy across retail teams.',
      'Built Advanced Excel KPI trackers (VLOOKUP, Pivot Tables) and Power BI reports to monitor customer and sales performance.',
      'Identified gaps in the customer and sales process and implemented improvements, lifting conversion by 20%+ and improving the customer experience.',
      'Resolved escalated customer queries and complaints in a fast-paced retail environment, consistently turning issues into positive customer experiences and repeat custom.',
      'Balanced multiple priorities to tight deadlines during peak retail periods and product launches, keeping service quality and record accuracy high throughout.',
      'Coordinated 5+ customer-facing product launches annually, managing logistics and communication from planning to execution.',
    ],
    achievements: [
      { label: 'Conversion Uplift', value: 20, suffix: '%+' },
      { label: 'Product Launches / Yr', value: 5, suffix: '+' },
      { label: 'Procurement Cost Cut', value: 15, suffix: '%' },
    ],
    technologies: ['Advanced Excel', 'Power BI', 'Pivot Tables', 'VLOOKUP', 'Salesforce CRM', 'MS Dynamics'],
    color: '#c084fc',
    accentColor: 'rgba(192,132,252,0.15)',
  },
  {
    id: 3,
    company: 'Tata Consultancy Services',
    role: 'Systems Analyst',
    period: '2020 – 2022',
    startYear: 2020,
    endYear: 2022,
    location: 'Chennai, India',
    tagline: 'Delivered data validation, analysis, and reporting for banking and insurance applications across 15+ releases, maintaining high data integrity.',
    highlights: [
      'Designed and executed 100+ SQL queries to validate and reconcile customer and transaction datasets, achieving 100% data accuracy across all releases.',
      'Extracted and structured data from SAP ERP using SQL joins and stored procedures for downstream reporting.',
      'Led root cause analysis on data discrepancies; corrective actions reduced recurrence by 30% and improved system reliability by 25%.',
      'Supported customer account and claims data accuracy for a major banking and insurance client, keeping records correct, consistent, and audit-ready.',
      'Coordinated UAT and resolved issues across 15+ releases, communicating clearly with stakeholders to fix defects before go-live.',
      'Identified and implemented process improvements that streamlined data validation and reduced manual effort.',
      'Documented processes and resolutions in Jira and Confluence, supporting traceability and stakeholder alignment.',
    ],
    achievements: [
      { label: 'Data Accuracy', value: 100, suffix: '%' },
      { label: 'Defect Reduction', value: 30, suffix: '%' },
      { label: 'Reliability Improvement', value: 25, suffix: '%' },
    ],
    technologies: ['SQL', 'SAP ERP', 'Jira', 'Confluence', 'Advanced Excel'],
    color: '#a855f7',
    accentColor: 'rgba(168,85,247,0.15)',
  },
];

// ─── Education ───
export const education = [
  {
    id: 1,
    institution: 'Trinity College Dublin',
    degree: 'MSc in Management',
    specialization: 'MSc in Management',
    period: '2022 – 2023',
    location: 'Dublin, Ireland',
    research: 'Customer Retention Marketing Strategies in the Cosmetics Industry',
    achievements: ['Masters Graduate', 'Statistical Modelling Specialisation'],
    color: '#ec4899',
  },
  {
    id: 2,
    institution: 'Anna University',
    degree: 'BE in Instrumentation & Control Engineering',
    specialization: 'CGPA 8.2/10 · First Class Graduate',
    cgpa: 8.2,
    period: '2016 – 2020',
    location: 'Chennai, India',
    research: 'Runner-up, 18th ISTE Engineering Student Convention, for excellence in technical innovation',
    achievements: ['Best Outgoing Student Award 2020', 'Elected Student Coordinator', 'First Class Graduate'],
    color: '#c084fc',
  },
];

// ─── Skills ───
export const skillCategories = [
  {
    name: 'Customer Service & Operations',
    color: '#ec4899',
    skills: [
      { name: 'Customer Care & Query Resolution', level: 94 },
      { name: 'Account Registration & Onboarding', level: 90 },
      { name: 'SLA-Driven Service', level: 92 },
      { name: 'Customer Database Integrity', level: 90 },
    ],
  },
  {
    name: 'Reporting & Analysis',
    color: '#c084fc',
    skills: [
      { name: 'KPI Reporting & Analysis', level: 90 },
      { name: 'Advanced Excel', level: 88 },
      { name: 'Power BI', level: 86 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    name: 'Process & Delivery',
    color: '#a855f7',
    skills: [
      { name: 'Continuous Improvement (Lean/DMAIC)', level: 85 },
      { name: 'Process Efficiency', level: 88 },
      { name: 'Multitasking & Prioritisation', level: 90 },
      { name: 'Stakeholder Communication', level: 92 },
    ],
  },
  {
    name: 'Business Tools',
    color: '#f9a8d4',
    skills: [
      { name: 'SAP S/4HANA', level: 80 },
      { name: 'Salesforce CRM', level: 78 },
      { name: 'MS Dynamics', level: 75 },
      { name: 'Jira & Confluence', level: 80 },
    ],
  },
  {
    name: 'BI & Data Validation',
    color: '#7c3aed',
    skills: [
      { name: 'Tableau', level: 82 },
      { name: 'Data Validation & Integrity', level: 90 },
      { name: 'Data-Driven Decision Making', level: 88 },
      { name: 'Root Cause Analysis', level: 87 },
    ],
  },
];

// ─── Radar chart data ───
export const radarData = [
  { subject: 'Customer Service', value: 94, fullMark: 100 },
  { subject: 'KPI Reporting', value: 90, fullMark: 100 },
  { subject: 'Advanced Excel', value: 88, fullMark: 100 },
  { subject: 'SQL & Data', value: 88, fullMark: 100 },
  { subject: 'Stakeholder Comms', value: 92, fullMark: 100 },
  { subject: 'SAP S/4HANA', value: 80, fullMark: 100 },
  { subject: 'Process Improvement', value: 85, fullMark: 100 },
  { subject: 'Account Management', value: 90, fullMark: 100 },
];

// ─── Top skills ───
export const topSkills = [
  { name: 'Customer Service', level: 94, color: '#ec4899' },
  { name: 'Advanced Excel', level: 88, color: '#f9a8d4' },
  { name: 'KPI Reporting', level: 90, color: '#c084fc' },
  { name: 'SQL', level: 88, color: '#a855f7' },
  { name: 'SAP S/4HANA', level: 80, color: '#e879f9' },
  { name: 'Power BI', level: 86, color: '#7c3aed' },
];

// ─── Career impact metrics ───
export const impactMetrics = [
  { metric: 'On-time Delivery', value: 100, company: 'Circana', color: '#ec4899' },
  { metric: 'Data Accuracy', value: 100, company: 'TCS', color: '#f9a8d4' },
  { metric: 'Recurring Error Reduction', value: 25, company: 'Circana', color: '#c084fc' },
  { metric: 'Defect Reduction', value: 30, company: 'TCS', color: '#a855f7' },
  { metric: 'Manual Effort Reduction', value: 20, company: 'Circana', color: '#7c3aed' },
  { metric: 'Conversion Uplift', value: 20, company: 'Estee Lauder', color: '#e879f9' },
  { metric: 'System Reliability Improvement', value: 25, company: 'TCS', color: '#f472b6' },
];

// ─── Technology distribution ───
export const techDistribution = [
  { name: 'Customer & Account Ops', value: 30, color: '#ec4899' },
  { name: 'Advanced Excel & SQL', value: 26, color: '#c084fc' },
  { name: 'BI Tools (Power BI / Tableau)', value: 20, color: '#7c3aed' },
  { name: 'SAP / CRM / ERP', value: 18, color: '#a855f7' },
  { name: 'Process & Delivery Tools', value: 6, color: '#e879f9' },
];

// ─── All technologies ───
export const technologies = [
  { name: 'Advanced Excel', category: 'Reporting', size: 'xl', color: '#ec4899', level: 88 },
  { name: 'SQL', category: 'Database', size: 'xl', color: '#c084fc', level: 88 },
  { name: 'SAP S/4HANA', category: 'ERP/CRM', size: 'xl', color: '#f9a8d4', level: 80 },
  { name: 'Power BI', category: 'Reporting', size: 'lg', color: '#7c3aed', level: 86 },
  { name: 'Tableau', category: 'Reporting', size: 'lg', color: '#a855f7', level: 82 },
  { name: 'Salesforce CRM', category: 'ERP/CRM', size: 'md', color: '#0ea5e9', level: 78 },
  { name: 'MS Dynamics', category: 'ERP/CRM', size: 'md', color: '#f59e0b', level: 75 },
  { name: 'Pivot Tables', category: 'Reporting', size: 'md', color: '#e879f9', level: 88 },
  { name: 'Jira', category: 'Tools', size: 'md', color: '#7c3aed', level: 80 },
  { name: 'Confluence', category: 'Tools', size: 'sm', color: '#a855f7', level: 78 },
  { name: 'MS Office', category: 'Reporting', size: 'sm', color: '#10b981', level: 88 },
  { name: 'Lean / DMAIC', category: 'Process', size: 'sm', color: '#f472b6', level: 80 },
];

// ─── Awards ───
export const awards = [
  { title: 'Top Performer Q3 FY2021', organization: 'Tata Consultancy Services', year: '2021', color: '#ec4899' },
  { title: 'Best Project Member 2021', organization: 'Tata Consultancy Services', year: '2021', color: '#c084fc' },
  { title: 'Best Outgoing Student Award 2020', organization: 'Anna University', year: '2020', color: '#7c3aed' },
  { title: 'Runner-up, 18th ISTE Engineering Student Convention', organization: 'Anna University', year: '2020', color: '#a855f7' },
];

// ─── Certifications ───
export const certifications = [
  {
    title: 'PMP® — Project Management Professional',
    organization: 'Project Management Institute (PMI)',
    status: 'In Progress (Expected 2026)',
    color: '#10b981',
  },
];

// ─── Professional Recommendations ───
export const recommendations = [
  {
    name: 'Bosko Bjegovic',
    role: 'Senior Director, AI-Driven Operations',
    company: 'Circana',
    text: '"A highly dependable and talented professional who adapts quickly, integrates seamlessly, and consistently delivers high-quality results. A strong asset to any organization fortunate enough to have her."',
    color: '#ec4899',
  },
  {
    name: 'Magdalena Pisarska',
    role: 'Sr Manager, Data Management',
    company: 'Circana',
    text: '"She seamlessly integrated into our team culture, was always open to feedback, using it to continuously grow and elevate her work. A massive asset wherever she goes next."',
    color: '#c084fc',
  },
];
