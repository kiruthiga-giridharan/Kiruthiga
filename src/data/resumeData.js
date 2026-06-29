// ─── All data extracted directly from Kiruthiga Giridharan's resume ───

export const personalInfo = {
  name: 'Kiruthiga Giridharan',
  firstName: 'Kiruthiga',
  lastName: 'Giridharan',
  title: 'Commercial Analyst',
  subtitle: 'Data Analysis & SQL • Tableau & Power BI Dashboards • Performance & P&L Insights',
  email: 'kiruthigagiri@gmail.com',
  phone: '(+353) 892152652',
  location: 'Dublin, Ireland',
  linkedin: 'https://linkedin.com/in/kiruthiga-giridharan',
  authorisedToWork: 'Authorised to work in Ireland',
  summary:
    'Commercial and data analyst with 4.5+ years turning large datasets into actionable insights that drive conversion, margin, and commercial growth across a 200+ client EMEA portfolio. Hands-on with SQL on large datasets, building automated, scalable reporting and interactive dashboards in Tableau and Power BI that let stakeholders track performance and trends. Strong commercial acumen: identifies growth opportunities, runs P&L and performance deep dives, and analyses pricing, conversion, and cost drivers to inform decisions. Communicates complex findings clearly to non-specialist and senior audiences; collaborates across business, product, and finance teams and with external partners.',
};

// ─── Hero KPI stats (from resume) ───
export const heroStats = [
  { label: 'Years Experience', value: 4.5, suffix: '+', icon: 'clock' },
  { label: 'EMEA Client Portfolio', value: 200, suffix: '+', icon: 'building' },
  { label: 'Accounts Onboarded / Qtr', value: 25, suffix: '+', icon: 'database' },
  { label: 'Regulated Releases', value: 15, suffix: '+', icon: 'shield' },
];

// ─── Work Experience ───
export const experience = [
  {
    id: 1,
    company: 'Circana Market Research',
    role: 'Commercial & Operations Analyst',
    period: '2024 – Present',
    startYear: 2024,
    endYear: 2026,
    location: 'Dublin, Ireland',
    tagline:
      'Analyse performance and deliver reporting and commercial insight across a 200+ client EMEA portfolio, partnering with Commercial, Product, and Development teams.',
    highlights: [
      'Analysed trading and account performance across 200+ enterprise clients using SQL on large datasets, identifying the key drivers behind outcomes and surfacing growth opportunities.',
      'Built automated, scalable reporting and interactive dashboards in Tableau and Power BI (DAX) that let stakeholders track performance, pricing, and conversion trends.',
      'Ran P&L and deep-dive analysis on performance trends and data discrepancies with SQL and Python, reducing recurring errors by 25% and protecting margin.',
      'Communicated complex findings clearly to non-specialist stakeholders and senior leadership, turning analysis into actionable recommendations.',
      'Reduced manual reporting effort by 20% by standardising and automating recurring reporting workflows in Azure pipelines.',
      'Supported partner and client onboarding for 25+ new accounts per quarter, providing analytical support and certifying data accuracy.',
    ],
    achievements: [
      { label: 'Recurring Error Reduction', value: 25, suffix: '%' },
      { label: 'Manual Reporting Reduction', value: 20, suffix: '%' },
      { label: 'Accounts Onboarded / Qtr', value: 25, suffix: '+' },
    ],
    technologies: ['SQL', 'Tableau', 'Power BI', 'DAX', 'Python', 'Azure', 'Salesforce CRM', 'MS Dynamics', 'SAP S/4HANA'],
    color: '#06b6d4',
    accentColor: 'rgba(6,182,212,0.15)',
  },
  {
    id: 2,
    company: 'Estee Lauder Companies',
    role: 'Commercial Analyst',
    period: '2022 – 2024',
    startYear: 2022,
    endYear: 2024,
    location: 'Dublin, Ireland',
    tagline:
      'Drove commercial analysis, performance reporting, and growth initiatives across sales, operations, and marketing for a global beauty brand.',
    highlights: [
      'Lifted conversion by 20%+ by analysing the sales funnel in Power BI and Excel to pinpoint gaps and prioritise high-impact improvements.',
      'Ran vendor spend and cost analysis in Advanced Excel (Pivot Tables, complex formulas), leading evidence-based negotiations that cut procurement costs by 15%.',
      'Built KPI dashboards and performance reports in Power BI and Excel that gave leadership clear, data-driven visibility for commercial decisions.',
      'Conducted competitor and market analysis, presenting structured findings to senior leadership to shape go-to-market strategy.',
      'Coordinated 5+ product launches annually, supporting data analysis and performance tracking from planning to execution.',
    ],
    achievements: [
      { label: 'Conversion Uplift', value: 20, suffix: '%+' },
      { label: 'Procurement Cost Cut', value: 15, suffix: '%' },
      { label: 'Product Launches / Yr', value: 5, suffix: '+' },
    ],
    technologies: ['Power BI', 'Advanced Excel', 'Pivot Tables', 'Salesforce CRM', 'MS Dynamics'],
    color: '#a855f7',
    accentColor: 'rgba(168,85,247,0.15)',
  },
  {
    id: 3,
    company: 'Tata Consultancy Services',
    role: 'Systems Analyst',
    period: '2020 – 2022',
    startYear: 2020,
    endYear: 2022,
    location: 'Chennai, India',
    tagline:
      'Delivered data validation, analysis, and reporting for banking and insurance applications across 15+ releases.',
    highlights: [
      'Designed and executed 100+ SQL queries and Python scripts to validate, reconcile, and analyse large financial datasets, achieving 100% data accuracy.',
      'Extracted and structured data from SAP ERP using SQL joins and stored procedures for downstream reporting and analysis.',
      'Led root cause analysis on data discrepancies; corrective actions reduced recurrence by 30% and improved system reliability by 25%.',
      'Documented processes and reporting in Jira and Confluence, supporting traceability and stakeholder alignment.',
    ],
    achievements: [
      { label: 'Data Accuracy', value: 100, suffix: '%' },
      { label: 'Defect Reduction', value: 30, suffix: '%' },
      { label: 'Reliability Improvement', value: 25, suffix: '%' },
    ],
    technologies: ['SQL', 'Python', 'SAP ERP', 'Jira', 'Confluence'],
    color: '#8b5cf6',
    accentColor: 'rgba(139,92,246,0.15)',
  },
];

// ─── Education ───
export const education = [
  {
    id: 1,
    institution: 'Trinity College Dublin',
    degree: 'MSc in Management',
    specialization: 'Statistical Modelling, Enterprise Risk and Analytics',
    period: '2022 – 2023',
    location: 'Dublin, Ireland',
    research: 'Customer Retention Marketing Strategies in the Cosmetics Industry',
    achievements: ['Masters Graduate', 'Statistical Modelling Specialisation'],
    color: '#06b6d4',
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
    color: '#a855f7',
  },
];

// ─── Skills (grouped from resume competencies) ───
export const skillCategories = [
  {
    name: 'Data & Analytics',
    color: '#06b6d4',
    skills: [
      { name: 'SQL', level: 92 },
      { name: 'Large-Dataset Analysis', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'KPI & Trend Analysis', level: 88 },
    ],
  },
  {
    name: 'BI & Reporting',
    color: '#a855f7',
    skills: [
      { name: 'Tableau', level: 86 },
      { name: 'Power BI (DAX)', level: 88 },
      { name: 'Automated Reporting', level: 85 },
      { name: 'Interactive Dashboards', level: 87 },
    ],
  },
  {
    name: 'Commercial & Performance',
    color: '#6366f1',
    skills: [
      { name: 'P&L & Cost Analysis', level: 87 },
      { name: 'Pricing & Conversion Analysis', level: 85 },
      { name: 'Performance Deep Dives', level: 88 },
      { name: 'Growth Opportunity ID', level: 84 },
    ],
  },
  {
    name: 'Business Tools',
    color: '#8b5cf6',
    skills: [
      { name: 'Advanced Excel', level: 88 },
      { name: 'Salesforce CRM', level: 78 },
      { name: 'MS Dynamics', level: 75 },
      { name: 'SAP S/4HANA', level: 70 },
    ],
  },
  {
    name: 'Delivery & Cloud',
    color: '#3b82f6',
    skills: [
      { name: 'Azure', level: 70 },
      { name: 'Jira & Confluence', level: 80 },
      { name: 'Stakeholder Communication', level: 90 },
      { name: 'Cross-functional Collaboration', level: 87 },
    ],
  },
];

// ─── Radar chart data (core competency areas from resume) ───
export const radarData = [
  { subject: 'SQL & Data Analysis', value: 92, fullMark: 100 },
  { subject: 'Commercial Analysis', value: 88, fullMark: 100 },
  { subject: 'BI & Reporting', value: 87, fullMark: 100 },
  { subject: 'P&L & Cost Analysis', value: 87, fullMark: 100 },
  { subject: 'Stakeholder Comms', value: 90, fullMark: 100 },
  { subject: 'Python', value: 80, fullMark: 100 },
  { subject: 'Advanced Excel', value: 88, fullMark: 100 },
  { subject: 'Process Automation', value: 80, fullMark: 100 },
];

// ─── Top skills for circular rings ───
export const topSkills = [
  { name: 'SQL', level: 92, color: '#a855f7' },
  { name: 'Power BI (DAX)', level: 88, color: '#6366f1' },
  { name: 'Tableau', level: 86, color: '#3b82f6' },
  { name: 'Advanced Excel', level: 88, color: '#8b5cf6' },
  { name: 'P&L & Cost Analysis', level: 87, color: '#22d3ee' },
  { name: 'Python', level: 80, color: '#06b6d4' },
];

// ─── Career impact metrics (directly from resume) ───
export const impactMetrics = [
  { metric: 'Data Accuracy', value: 100, company: 'TCS', color: '#06b6d4' },
  { metric: 'Recurring Error Reduction', value: 25, company: 'Circana', color: '#22d3ee' },
  { metric: 'System Reliability Improvement', value: 25, company: 'TCS', color: '#6366f1' },
  { metric: 'Defect Reduction', value: 30, company: 'TCS', color: '#8b5cf6' },
  { metric: 'Manual Reporting Reduction', value: 20, company: 'Circana', color: '#06b6d4' },
  { metric: 'Conversion Uplift', value: 20, company: 'Estee Lauder', color: '#a855f7' },
  { metric: 'Procurement Cost Cut', value: 15, company: 'Estee Lauder', color: '#ec4899' },
];

// ─── Technology distribution (relative frequency in resume) ───
export const techDistribution = [
  { name: 'SQL & Database', value: 28, color: '#a855f7' },
  { name: 'BI Tools', value: 26, color: '#6366f1' },
  { name: 'Advanced Excel & Python', value: 22, color: '#06b6d4' },
  { name: 'Business Apps (CRM/ERP)', value: 16, color: '#8b5cf6' },
  { name: 'Cloud & Delivery', value: 8, color: '#3b82f6' },
];

// ─── All technologies (for TechStack section) ───
export const technologies = [
  { name: 'SQL', category: 'Database', size: 'xl', color: '#a855f7', level: 92 },
  { name: 'Power BI', category: 'BI Tools', size: 'xl', color: '#6366f1', level: 88 },
  { name: 'DAX', category: 'BI Tools', size: 'md', color: '#818cf8', level: 80 },
  { name: 'Tableau', category: 'BI Tools', size: 'lg', color: '#4f46e5', level: 86 },
  { name: 'Advanced Excel', category: 'BI Tools', size: 'lg', color: '#10b981', level: 88 },
  { name: 'Python', category: 'Programming', size: 'lg', color: '#06b6d4', level: 80 },
  { name: 'PowerPoint', category: 'BI Tools', size: 'sm', color: '#f97316', level: 75 },
  { name: 'Salesforce CRM', category: 'Business Apps', size: 'md', color: '#0ea5e9', level: 78 },
  { name: 'MS Dynamics', category: 'Business Apps', size: 'md', color: '#f59e0b', level: 75 },
  { name: 'SAP S/4HANA', category: 'Business Apps', size: 'md', color: '#fbbf24', level: 70 },
  { name: 'Azure', category: 'Cloud', size: 'sm', color: '#3b82f6', level: 70 },
  { name: 'Jira', category: 'Tools', size: 'md', color: '#6366f1', level: 80 },
  { name: 'Confluence', category: 'Tools', size: 'sm', color: '#8b5cf6', level: 78 },
];

// ─── Awards ───
export const awards = [
  {
    title: 'Top Performer Q3 FY2021',
    organization: 'Tata Consultancy Services',
    year: '2021',
    color: '#06b6d4',
  },
  {
    title: 'Best Project Member 2021',
    organization: 'Tata Consultancy Services',
    year: '2021',
    color: '#a855f7',
  },
  {
    title: 'Best Outgoing Student Award 2020',
    organization: 'Anna University',
    year: '2020',
    color: '#6366f1',
  },
  {
    title: 'Runner-up, 18th ISTE Engineering Student Convention',
    organization: 'Anna University',
    year: '2020',
    color: '#8b5cf6',
  },
];

// ─── Certifications ───
export const certifications = [
  {
    title: 'CAPM® — Certified Associate in Project Management',
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
    color: '#06b6d4',
  },
  {
    name: 'Magdalena Pisarska',
    role: 'Sr Manager, Data Management',
    company: 'Circana',
    text: '"She seamlessly integrated into our team culture, was always open to feedback, using it to continuously grow and elevate her work. A massive asset wherever she goes next."',
    color: '#a855f7',
  },
];
