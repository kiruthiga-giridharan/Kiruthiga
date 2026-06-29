// ─── All data extracted directly from Kiruthiga Giridharan's resume ───

export const personalInfo = {
  name: 'Kiruthiga Giridharan',
  firstName: 'Kiruthiga',
  lastName: 'Giridharan',
  title: 'Data Analyst',
  subtitle: 'Python • SQL • Business Intelligence Reporting',
  email: 'kiruthigagiri@gmail.com',
  phone: '(+353) 892152652',
  location: 'Dublin, Ireland',
  linkedin: '#',
  authorisedToWork: 'Authorised to work in Ireland',
  summary:
    'Data Analyst with 5+ years of experience collecting, cleaning, transforming, and analysing complex datasets to support business decisions across enterprise, banking, and commercial environments. Proficient in Python for data manipulation, cleaning, and statistical analysis, and SQL for data extraction and transformation from relational databases. Experienced building interactive dashboards and reports using Power BI and Tableau to visualise key metrics for senior stakeholders.',
};

// ─── Hero KPI stats (from resume) ───
export const heroStats = [
  { label: 'Years Experience', value: 5, suffix: '+', icon: 'clock' },
  { label: 'Enterprise Accounts', value: 200, suffix: '+', icon: 'building' },
  { label: 'SQL Queries', value: 100, suffix: '+', icon: 'database' },
  { label: 'Regulated Releases', value: 15, suffix: '+', icon: 'shield' },
];

// ─── Work Experience ───
export const experience = [
  {
    id: 1,
    company: 'Circana Market Research',
    role: 'Data Analyst',
    period: '2024 – Present',
    startYear: 2024,
    endYear: 2026,
    location: 'Dublin, Ireland',
    tagline:
      'Delivered end-to-end data analysis, reporting, and BI solutions for 200+ enterprise accounts across a $10M+ EMEA portfolio, operating across Commercial, Product, TechOps, and Client Success functions.',
    highlights: [
      'Collected, cleaned, and transformed raw data from multiple enterprise sources using Python (Pandas, NumPy) and SQL, preparing structured datasets for analysis across 200+ accounts and 12+ concurrent programmes.',
      'Performed statistical analysis on large datasets to identify trends, patterns, and data quality anomalies.',
      'Achieved 100% on-time reporting delivery across all assigned accounts.',
      'Delivered a 25% reduction in recurring data issues through systematic root cause analysis.',
    ],
    achievements: [
      { label: 'On-time Delivery', value: 100, suffix: '%' },
      { label: 'Data Issue Reduction', value: 25, suffix: '%' },
      { label: 'Accounts Managed', value: 200, suffix: '+' },
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Tableau', 'Azure Pipeline', 'Jira'],
    color: '#06b6d4',
    accentColor: 'rgba(6,182,212,0.15)',
  },
  {
    id: 2,
    company: 'Estee Lauder Companies',
    role: 'Business and Data Analyst',
    period: '2022 – 2024',
    startYear: 2022,
    endYear: 2024,
    location: 'Dublin, Ireland',
    tagline:
      'Supported commercial analytics and retail performance reporting for a global beauty brand across 8 retail locations in Ireland.',
    highlights: [
      'Analysed CRM datasets (Salesforce, MS Dynamics) and retail sales data to identify performance gaps through structured as-is analysis, contributing to a 20%+ uplift in conversion rate across 8 locations.',
      'Designed and maintained Excel-based KPI tracking models using VLOOKUP and conditional logic to provide cross-functional visibility of weekly performance metrics.',
      'Produced structured performance reports and analytical trackers for technical and non-technical stakeholders, improving reporting turnaround time by 30% across the commercial team.',
      'Conducted vendor spend analysis using structured data models, translating findings into supplier negotiations that achieved a 15% reduction in procurement costs, saving approximately EUR 120K annually.',
    ],
    achievements: [
      { label: 'Conversion Rate Uplift', value: 20, suffix: '%+' },
      { label: 'Reporting Improvement', value: 30, suffix: '%' },
      { label: 'Cost Savings', value: 120, suffix: 'K EUR' },
    ],
    technologies: ['Salesforce CRM', 'MS Dynamics', 'Advanced Excel', 'Power BI', 'SQL', 'Confluence'],
    color: '#a855f7',
    accentColor: 'rgba(168,85,247,0.15)',
  },
  {
    id: 3,
    company: 'Tata Consultancy Services',
    role: 'Data and Systems Analyst',
    period: '2020 – 2022',
    startYear: 2020,
    endYear: 2022,
    location: 'Chennai, India',
    tagline:
      'Delivered SQL-based data validation, statistical analysis, and compliance reporting across 15+ regulated banking system releases for Nationwide Bank.',
    highlights: [
      'Designed and executed 100+ SQL queries to extract, validate, and verify complex banking transaction datasets, maintaining 100% data accuracy across all 15 regulated releases for Nationwide Bank.',
      'Cleaned and transformed large-scale banking datasets using Python and SQL to support compliance and audit reporting, ensuring data integrity across security-critical system releases.',
      'Conducted structured root cause analysis on data and process defects during testing phases, reducing defect recurrence by 30% and improving system reliability by 25% across subsequent releases.',
      'Collaborated with cross-functional teams (development, QA, business stakeholders) to translate analytical findings into actionable system improvements.',
      'Coordinated data validation activities during UAT including test scenario validation and defect triage, achieving zero critical defects at go-live across 100% of managed releases.',
      'Maintained 98% quality adherence — awarded Top Performer Q3 FY2021 and Best Project Member 2021.',
    ],
    achievements: [
      { label: 'Data Accuracy', value: 100, suffix: '%' },
      { label: 'Defect Reduction', value: 30, suffix: '%' },
      { label: 'Quality Adherence', value: 98, suffix: '%' },
    ],
    technologies: ['SQL', 'Python', 'Azure Pipeline', 'Jira', 'Confluence', 'Excel'],
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
    research:
      'Data-Driven Decision Frameworks and Customer Retention Strategies in Regulated Consumer Markets, Ireland',
    achievements: ['Masters Graduate', 'Statistical Modelling Specialisation'],
    color: '#06b6d4',
  },
  {
    id: 2,
    institution: 'Anna University',
    degree: 'Bachelor of Engineering',
    specialization: 'CGPA 8.2/10 · First Class Graduate',
    cgpa: 8.2,
    period: '2016 – 2020',
    location: 'Chennai, India',
    research: 'Final Year Project: Network Security and Intrusion Detection Systems',
    achievements: ['Best Outgoing Student Award 2020', 'Elected Student Coordinator', 'First Class Graduate'],
    color: '#a855f7',
  },
];

// ─── Skills (grouped from resume competencies) ───
export const skillCategories = [
  {
    name: 'Programming & Analysis',
    color: '#06b6d4',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 82 },
      { name: 'Statistical Analysis', level: 82 },
    ],
  },
  {
    name: 'SQL & Database',
    color: '#a855f7',
    skills: [
      { name: 'SQL', level: 92 },
      { name: 'Data Extraction', level: 90 },
      { name: 'Data Transformation', level: 88 },
      { name: 'Data Validation', level: 92 },
    ],
  },
  {
    name: 'BI & Reporting',
    color: '#6366f1',
    skills: [
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 83 },
      { name: 'Advanced Excel', level: 88 },
      { name: 'Dashboard Development', level: 84 },
    ],
  },
  {
    name: 'Business Tools',
    color: '#8b5cf6',
    skills: [
      { name: 'Salesforce CRM', level: 75 },
      { name: 'MS Dynamics', level: 73 },
      { name: 'Jira', level: 80 },
      { name: 'Confluence', level: 78 },
    ],
  },
  {
    name: 'Delivery & Cloud',
    color: '#3b82f6',
    skills: [
      { name: 'Agile (Scrum/Kanban)', level: 78 },
      { name: 'Azure Pipeline', level: 65 },
      { name: 'Root Cause Analysis', level: 88 },
      { name: 'Stakeholder Engagement', level: 85 },
    ],
  },
];

// ─── Radar chart data (core competency areas from resume) ───
export const radarData = [
  { subject: 'Data Analysis', value: 93, fullMark: 100 },
  { subject: 'SQL & Database', value: 92, fullMark: 100 },
  { subject: 'Python', value: 88, fullMark: 100 },
  { subject: 'BI & Reporting', value: 85, fullMark: 100 },
  { subject: 'Statistical Analysis', value: 82, fullMark: 100 },
  { subject: 'Stakeholder Mgmt', value: 83, fullMark: 100 },
  { subject: 'Data Validation', value: 90, fullMark: 100 },
  { subject: 'Agile Delivery', value: 78, fullMark: 100 },
];

// ─── Top skills for circular rings ───
export const topSkills = [
  { name: 'SQL', level: 92, color: '#a855f7' },
  { name: 'Python', level: 90, color: '#06b6d4' },
  { name: 'Data Analysis', level: 93, color: '#22d3ee' },
  { name: 'Power BI', level: 85, color: '#6366f1' },
  { name: 'Advanced Excel', level: 88, color: '#8b5cf6' },
  { name: 'Tableau', level: 83, color: '#3b82f6' },
];

// ─── Career impact metrics (directly from resume) ───
export const impactMetrics = [
  { metric: 'On-time Delivery', value: 100, company: 'Circana', color: '#06b6d4' },
  { metric: 'Data Accuracy', value: 100, company: 'TCS', color: '#06b6d4' },
  { metric: 'Quality Adherence', value: 98, company: 'TCS', color: '#22d3ee' },
  { metric: 'Reporting Turnaround', value: 30, company: 'Estee Lauder', color: '#a855f7' },
  { metric: 'Defect Reduction', value: 30, company: 'TCS', color: '#8b5cf6' },
  { metric: 'Data Issue Reduction', value: 25, company: 'Circana', color: '#6366f1' },
  { metric: 'Conversion Uplift', value: 20, company: 'Estee Lauder', color: '#a855f7' },
  { metric: 'Cost Reduction', value: 15, company: 'Estee Lauder', color: '#ec4899' },
];

// ─── Technology distribution (relative frequency in resume) ───
export const techDistribution = [
  { name: 'Python & Libraries', value: 30, color: '#06b6d4' },
  { name: 'SQL & Database', value: 28, color: '#a855f7' },
  { name: 'BI Tools', value: 22, color: '#6366f1' },
  { name: 'Business Apps', value: 12, color: '#8b5cf6' },
  { name: 'Cloud & DevOps', value: 8, color: '#3b82f6' },
];

// ─── All technologies (for TechStack section) ───
export const technologies = [
  { name: 'Python', category: 'Programming', size: 'xl', color: '#06b6d4', level: 90 },
  { name: 'SQL', category: 'Database', size: 'xl', color: '#a855f7', level: 92 },
  { name: 'Pandas', category: 'Programming', size: 'lg', color: '#06b6d4', level: 88 },
  { name: 'NumPy', category: 'Programming', size: 'md', color: '#22d3ee', level: 82 },
  { name: 'Power BI', category: 'BI Tools', size: 'lg', color: '#6366f1', level: 85 },
  { name: 'Tableau', category: 'BI Tools', size: 'lg', color: '#4f46e5', level: 83 },
  { name: 'Excel', category: 'BI Tools', size: 'lg', color: '#10b981', level: 88 },
  { name: 'Salesforce', category: 'Business Apps', size: 'md', color: '#0ea5e9', level: 75 },
  { name: 'MS Dynamics', category: 'Business Apps', size: 'md', color: '#f59e0b', level: 73 },
  { name: 'Azure Pipeline', category: 'Cloud', size: 'sm', color: '#3b82f6', level: 65 },
  { name: 'Jira', category: 'Tools', size: 'md', color: '#6366f1', level: 80 },
  { name: 'Confluence', category: 'Tools', size: 'sm', color: '#8b5cf6', level: 78 },
  { name: 'Scrum', category: 'Delivery', size: 'sm', color: '#a855f7', level: 78 },
  { name: 'Kanban', category: 'Delivery', size: 'sm', color: '#ec4899', level: 78 },
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
    title: 'Elected Student Coordinator',
    organization: 'Anna University',
    year: '2016 – 2020',
    color: '#8b5cf6',
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
    text: '"She seamlessly integrated into our team culture, was always open to feedback, using it to continuously improve and elevate her work. A massive asset wherever she goes next."',
    color: '#a855f7',
  },
  {
    name: 'Kristen Worth',
    role: 'Manager',
    company: 'Estee Lauder',
    text: '"She is a clever, fast thinking, efficient and focused worker who consistently excels and would be a benefit to any employer."',
    color: '#6366f1',
  },
];
