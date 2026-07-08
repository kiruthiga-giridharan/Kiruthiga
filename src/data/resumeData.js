// ─── All data extracted directly from Kiruthiga Giridharan's resume ───

export const personalInfo = {
  name: 'Kiruthiga Giridharan',
  firstName: 'Kiruthiga',
  lastName: 'Giridharan',
  title: 'Data & Operations Analyst',
  subtitle: 'SQL Reporting • Financial Systems & Data Quality • Azure Pipeline & BI',
  email: 'kiruthigagiri@gmail.com',
  phone: '(+353) 892152652',
  location: 'Dublin, Ireland',
  linkedin: 'https://linkedin.com/in/kiruthiga-giridharan',
  authorisedToWork: 'Authorised to work in Ireland',
  summary:
    'Data and Operations Analyst focused on SQL reporting, data quality, and process improvement across EMEA enterprise and financial services environments. Direct financial sector exposure gained supporting data quality audits and insurance claims operations reporting for Nationwide within a regulated financial services environment. Adept in data pipeline operations, turning complex datasets into accurate weekly and monthly client reports using SQL, Power BI, and Tableau. Hands-on with Azure Pipeline, Microsoft applications, and SAP data extraction in high-volume, SLA-driven environments. Strong track record managing 200+ enterprise accounts across a €10M+ portfolio with 100% SLA compliance.',
};

// ─── Hero KPI stats ───
export const heroStats = [
  { label: 'Years Experience', value: 4.5, suffix: '+', icon: 'clock' },
  { label: 'Enterprise Accounts', value: 200, suffix: '+', icon: 'building' },
  { label: 'Tickets Resolved / Wk', value: 80, suffix: '+', icon: 'database' },
  { label: 'SLA Compliance', value: 100, suffix: '%', icon: 'shield' },
];

// ─── Work Experience ───
export const experience = [
  {
    id: 1,
    company: 'Circana Market Research',
    role: 'Data & Operations Analyst',
    period: '2024 – Present',
    startYear: 2024,
    endYear: 2026,
    location: 'Dublin, Ireland',
    tagline: 'Managed weekly data operations and client reporting for a €10M+ EMEA portfolio of 200+ enterprise accounts.',
    highlights: [
      'Processed and validated weekly client datasets via Azure Pipeline and Microsoft Access DB, ensuring data integrity before report generation.',
      'Published Tableau performance reports benchmarking each client against the EMEA portfolio, achieving 100% on-time delivery every week.',
      'Built and automated monthly statistical reports for 200+ clients using SQL-driven workflows in Azure Pipeline, reducing manual processing time by 20%.',
      'Designed Power BI dashboards using DAX formulas and M Queries to present client performance trends and operational metrics across the EMEA portfolio.',
      'Triaged and resolved 80+ tickets weekly via CRIMS, covering data issues, access requests, and client queries within SLA.',
      'Tested Azure Pipeline connections and transformation logic for new client onboarding, validating SQL queries to ensure accurate data flow.',
      'Trained new clients on Power BI reporting tools and built VLOOKUP-based Excel trackers to support client-side data validation and go-live readiness.',
      'Owned end-to-end client operations, acting as primary liaison between EMEA clients, commercial, product, and development teams.',
      'Identified data discrepancies between client expectations and source data using SQL queries and gap analysis; logged resolutions in Jira.',
      'Integrated AI tools including ChatGPT and Claude to analyse data outputs, troubleshoot Azure Pipeline errors, and generate technical summaries.',
    ],
    achievements: [
      { label: 'On-time Delivery', value: 100, suffix: '%' },
      { label: 'Manual Processing Cut', value: 20, suffix: '%' },
      { label: 'Tickets Resolved / Wk', value: 80, suffix: '+' },
    ],
    technologies: ['SQL', 'Azure Pipeline', 'Power BI', 'DAX', 'Tableau', 'Python', 'Jira', 'SAP', 'Microsoft Access', 'Excel'],
    color: '#0ea5e9',
    accentColor: 'rgba(14,165,233,0.15)',
  },
  {
    id: 2,
    company: 'Estée Lauder Companies',
    role: 'Business Consultant',
    period: '2022 – 2024',
    startYear: 2022,
    endYear: 2024,
    location: 'Dublin, Ireland',
    tagline: 'Redesigned business processes across marketing and operations, contributing to a 20%+ increase in conversion rate.',
    highlights: [
      'Redesigned business processes across marketing and operations, contributing to a 20%+ increase in conversion rate.',
      'Analysed sales and marketing performance using Power BI and VLOOKUP-based Excel models, shaping campaign strategy and driving 20%+ conversion growth.',
      'Produced functional specifications and revised process flows ensuring consistent execution across all teams.',
      'Managed client and vendor relationships via Salesforce and MS Dynamics CRM, producing strategic recommendations for senior leadership.',
      'Led vendor negotiations using spend data analysis, achieving a 15% reduction in procurement costs.',
      'Organised and coordinated in-store product launches and masterclass events, managing logistics, stakeholder communication, and on-the-day execution.',
    ],
    achievements: [
      { label: 'Conversion Uplift', value: 20, suffix: '%+' },
      { label: 'Procurement Cost Cut', value: 15, suffix: '%' },
      { label: 'Process Redesigns', value: 5, suffix: '+' },
    ],
    technologies: ['Power BI', 'Advanced Excel', 'VLOOKUP', 'Salesforce CRM', 'MS Dynamics'],
    color: '#6366f1',
    accentColor: 'rgba(99,102,241,0.15)',
  },
  {
    id: 3,
    company: 'Tata Consultancy Services',
    role: 'System Analyst',
    period: '2020 – 2022',
    startYear: 2020,
    endYear: 2022,
    location: 'Chennai, India',
    tagline: 'Assigned to Nationwide (US banking & insurance client), supporting financial data quality audits and insurance claims operations reporting in a regulated environment.',
    highlights: [
      'Assigned to Nationwide, a US-based banking and insurance client, supporting financial data quality audits and insurance claims operations reporting within a regulated financial services environment.',
      'Wrote SQL queries to extract, validate, and report on financial and claims data from CRM systems, helping operations teams spot missed follow-ups and reporting gaps.',
      'Designed complaint heatmaps in Power BI to identify recurring issues within claims processing, reducing escalation rates for the financial services client.',
      'Built Excel-based performance trackers using VLOOKUP, conditional formatting, and formulas for over 50 team members supporting financial services operations.',
      'Created Python-based charts and analytics on financial and sales data to provide insights to stakeholders including Project Managers.',
      'Supported testing and validation of transformed financial data, identifying inconsistencies and aligning data fields with new schemas.',
      'Collaborated with backend and QA teams to maintain high-quality data inputs and outputs across financial reporting systems.',
    ],
    achievements: [
      { label: 'Data Accuracy', value: 100, suffix: '%' },
      { label: 'Escalation Rate Cut', value: 30, suffix: '%' },
      { label: 'Team Members Supported', value: 50, suffix: '+' },
    ],
    technologies: ['SQL', 'Power BI', 'Python', 'Excel', 'Jira', 'Confluence', 'CRM Systems'],
    color: '#818cf8',
    accentColor: 'rgba(129,140,248,0.15)',
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
    research: 'Customer Retention Marketing Strategies in the Cosmetics Industry, Ireland',
    achievements: ['Masters Graduate', 'Stakeholder & Data-Driven Research'],
    color: '#0ea5e9',
  },
  {
    id: 2,
    institution: 'Anna University',
    degree: 'Bachelor of Engineering',
    specialization: 'CGPA 8.2/10 · First Class Graduate',
    cgpa: 8.2,
    period: '2016 – 2020',
    location: 'Chennai, India',
    research: 'Engineering systems, instrumentation, and control — First Class graduate with academic distinction',
    achievements: ['Best Outgoing Student Award 2020', 'Elected Student Coordinator', 'First Class Graduate'],
    color: '#6366f1',
  },
];

// ─── Skills ───
export const skillCategories = [
  {
    name: 'SQL & Data Operations',
    color: '#0ea5e9',
    skills: [
      { name: 'SQL Reporting & Automation', level: 92 },
      { name: 'Data Quality & Validation', level: 90 },
      { name: 'Azure Pipeline', level: 85 },
      { name: 'Gap Analysis', level: 88 },
    ],
  },
  {
    name: 'BI & Visualisation',
    color: '#38bdf8',
    skills: [
      { name: 'Power BI & DAX', level: 88 },
      { name: 'Tableau', level: 86 },
      { name: 'Advanced Excel & VLOOKUP', level: 90 },
      { name: 'M Queries', level: 80 },
    ],
  },
  {
    name: 'Financial Systems',
    color: '#818cf8',
    skills: [
      { name: 'Financial & Insurance Reporting', level: 84 },
      { name: 'Claims Operations Reporting', level: 82 },
      { name: 'SAP Integration', level: 78 },
      { name: 'Data Quality Audits', level: 88 },
    ],
  },
  {
    name: 'Business & Process',
    color: '#6366f1',
    skills: [
      { name: 'UAT & Test Strategy', level: 82 },
      { name: 'Business Requirements Docs', level: 84 },
      { name: 'Process Mapping & Gap Analysis', level: 86 },
      { name: 'Agile & Sprint Planning', level: 82 },
    ],
  },
  {
    name: 'Tech & Tools',
    color: '#4f46e5',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Linux', level: 70 },
      { name: 'Jira & Confluence', level: 84 },
      { name: 'Salesforce CRM', level: 78 },
    ],
  },
];

// ─── Radar chart data ───
export const radarData = [
  { subject: 'SQL & Reporting', value: 92, fullMark: 100 },
  { subject: 'Power BI & DAX', value: 88, fullMark: 100 },
  { subject: 'Data Quality', value: 90, fullMark: 100 },
  { subject: 'Azure Pipeline', value: 85, fullMark: 100 },
  { subject: 'Stakeholder Mgmt', value: 88, fullMark: 100 },
  { subject: 'Financial Systems', value: 84, fullMark: 100 },
  { subject: 'Python', value: 80, fullMark: 100 },
  { subject: 'UAT & Agile', value: 82, fullMark: 100 },
];

// ─── Top skills ───
export const topSkills = [
  { name: 'SQL', level: 92, color: '#0ea5e9' },
  { name: 'Power BI & DAX', level: 88, color: '#38bdf8' },
  { name: 'Advanced Excel', level: 90, color: '#6366f1' },
  { name: 'Azure Pipeline', level: 85, color: '#818cf8' },
  { name: 'Tableau', level: 86, color: '#4f46e5' },
  { name: 'Python', level: 80, color: '#a5b4fc' },
];

// ─── Career impact metrics ───
export const impactMetrics = [
  { metric: 'SLA Compliance', value: 100, company: 'Circana', color: '#0ea5e9' },
  { metric: 'Data Accuracy', value: 100, company: 'TCS', color: '#38bdf8' },
  { metric: 'Manual Processing Cut', value: 20, company: 'Circana', color: '#6366f1' },
  { metric: 'Defect Reduction', value: 30, company: 'TCS', color: '#818cf8' },
  { metric: 'Conversion Uplift', value: 20, company: 'Estee Lauder', color: '#a5b4fc' },
  { metric: 'Procurement Cost Cut', value: 15, company: 'Estee Lauder', color: '#4f46e5' },
  { metric: 'Escalation Rate Cut', value: 30, company: 'TCS', color: '#34d399' },
];

// ─── Technology distribution ───
export const techDistribution = [
  { name: 'SQL & Pipeline Ops', value: 28, color: '#0ea5e9' },
  { name: 'BI & Reporting', value: 26, color: '#38bdf8' },
  { name: 'Financial Systems', value: 18, color: '#6366f1' },
  { name: 'Business Tools (CRM/ERP)', value: 16, color: '#818cf8' },
  { name: 'Python & Automation', value: 12, color: '#a5b4fc' },
];

// ─── All technologies ───
export const technologies = [
  { name: 'SQL', category: 'Database', size: 'xl', color: '#0ea5e9', level: 92 },
  { name: 'Power BI', category: 'BI Tools', size: 'xl', color: '#6366f1', level: 88 },
  { name: 'Azure Pipeline', category: 'Cloud', size: 'xl', color: '#38bdf8', level: 85 },
  { name: 'Tableau', category: 'BI Tools', size: 'lg', color: '#818cf8', level: 86 },
  { name: 'Advanced Excel', category: 'BI Tools', size: 'lg', color: '#4f46e5', level: 90 },
  { name: 'Python', category: 'Programming', size: 'lg', color: '#0ea5e9', level: 80 },
  { name: 'DAX', category: 'BI Tools', size: 'md', color: '#a5b4fc', level: 82 },
  { name: 'SAP', category: 'Enterprise', size: 'md', color: '#38bdf8', level: 78 },
  { name: 'Salesforce CRM', category: 'Enterprise', size: 'md', color: '#0ea5e9', level: 78 },
  { name: 'Jira', category: 'Tools', size: 'md', color: '#6366f1', level: 84 },
  { name: 'Linux', category: 'Tools', size: 'sm', color: '#818cf8', level: 70 },
  { name: 'Confluence', category: 'Tools', size: 'sm', color: '#4f46e5', level: 80 },
  { name: 'M Queries', category: 'BI Tools', size: 'sm', color: '#34d399', level: 80 },
];

// ─── Awards ───
export const awards = [
  { title: 'Top Performer Q3 FY2021', organization: 'Tata Consultancy Services', year: '2021', color: '#0ea5e9' },
  { title: 'Best Project Member 2021', organization: 'Tata Consultancy Services', year: '2021', color: '#6366f1' },
  { title: 'Best Outgoing Student Award 2020', organization: 'Anna University', year: '2020', color: '#818cf8' },
  { title: 'Runner-up, 18th ISTE Engineering Student Convention', organization: 'Anna University', year: '2020', color: '#4f46e5' },
];

// ─── Certifications ───
export const certifications = [
  {
    title: 'PMP® — Project Management Professional',
    organization: 'Project Management Institute (PMI)',
    status: 'In Progress (Expected 2026)',
    color: '#34d399',
  },
];

// ─── Professional Recommendations ───
export const recommendations = [
  {
    name: 'Bosko Bjegovic',
    role: 'Senior Director, AI-Driven Operations',
    company: 'Circana',
    text: '"A highly dependable and talented professional who adapts quickly, integrates seamlessly, and consistently delivers high-quality results. A strong asset to any organization fortunate enough to have her."',
    color: '#0ea5e9',
  },
  {
    name: 'Magdalena Pisarska',
    role: 'Sr Manager, Data Management',
    company: 'Circana',
    text: '"She seamlessly integrated into our team culture, was always open to feedback, using it to continuously grow and elevate her work. A massive asset wherever she goes next."',
    color: '#6366f1',
  },
  {
    name: 'Kristen Worth',
    role: 'Manager',
    company: 'Estée Lauder',
    text: '"She is a clever, fast thinking, efficient and focused worker who consistently excels and would be a benefit to any employer."',
    color: '#818cf8',
  },
];
