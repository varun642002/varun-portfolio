// Single source of truth for site copy. Ported from the real data in the
// previous portfolio (varun642002.github.io) -- nothing here is invented.
import { asset } from "@/lib/asset";


export const person = {
  name: "Varun S.",
  initials: "VS",
  photo: asset("/profile.png"),
  roles: ["Analyst", "Engineer", "Builder", "Scholar"],
  tagline:
    "Building analytics that people act on — SQL models, Power BI dashboards and Azure pipelines, from raw extract to the decision it supports.",
  email: "varunaadithiya@gmail.com",
  resume: asset("/resume.pdf"),
  contactLine:
    "Open to opportunities in data analytics, business analytics, business intelligence and entry-level data engineering roles.",
  socials: [
    { label: "GitHub", href: "https://github.com/varun642002" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/varun64200/" },
    { label: "Email", href: "mailto:varunaadithiya@gmail.com" },
  ],
};

export const about = {
  paragraph:
    "I started out in automobile engineering — brake systems, test rigs, Formula Student deadlines — and moved into business analytics because the questions I cared about were always in the data. Day to day that means SQL models, Power BI and Looker dashboards, and Azure pipelines that turn messy operational data into decisions people actually make. The rest of the time I ship the analysis as software.",
  focus:
    "IGNYT, an offline-first fitness app on Google Play; IGNYT Coach, the platform trainers run their clients from; AuraVault, a family health record vault; and MoneyVault, an expense tracker built on a single live ledger.",
};

export const stats = [
  { target: 100, suffix: "K+", unit: "rows", label: "Records analysed across live projects" },
  { target: 30, suffix: "", unit: "people", label: "Formula Student team led to a national podium" },
  { target: 8, suffix: "", unit: "certs", label: "Certifications across AI, ML, stats and finance" },
];

export type SkillGroup = {
  title: string;
  body: string;
};

export const skills: SkillGroup[] = [
  {
    title: "Data Analytics & BI",
    body: "Power BI, Advanced Excel, Power Query, Looker Studio, Tableau, SPSS, and R.",
  },
  {
    title: "SQL & Databases",
    body: "Queries, joins, aggregations, CTEs, window functions, data cleaning, and analytical querying over relational databases.",
  },
  {
    title: "Cloud Data Engineering",
    body: "Azure Data Factory, Azure Databricks, Azure Synapse Analytics, Dataflows, Pipelines, and Azure Key Vault.",
  },
  {
    title: "Statistical Analysis",
    body: "Descriptive statistics, Pearson correlation, regression, hypothesis testing, reliability analysis, and ROI analysis.",
  },
  {
    title: "Business Analytics",
    body: "KPI development, requirements analysis, dashboard design, business reporting, and stakeholder communication.",
  },
  {
    title: "Generative AI & ML",
    body: "IBM-certified generative AI application development; Jain-certified machine learning for business and predictive analytics.",
  },
  {
    title: "Application Development",
    body: "FastAPI and PostgreSQL services, Next.js and React front ends, React Native and Capacitor builds, and Firebase.",
  },
  {
    title: "Programming",
    body: "Python for data analysis and automation, with foundational front-end CSS.",
  },
];

export type Work = {
  slug: string;
  title: string;
  kind: string;
  period?: string;
  summary: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  reportHref?: string;
  shots?: string[];
  metrics?: { value: string; label: string }[];
  featured: boolean;
  category: "product" | "analytics" | "research";
};

// Flagship builds — shipped products with real screenshots and, in most
// cases, a live URL. These get full case-study pages.
export const flagshipWork: Work[] = [
  {
    slug: "forgeinsight",
    title: "ForgeInsight",
    kind: "AI analytics workspace",
    summary:
      "An analytics workspace where users upload datasets, explore data, generate insights and work through analytical workflows in a modern web interface.",
    problem:
      "Turning a raw dataset into a decision usually means bouncing between a notebook, a BI tool and a chat window. ForgeInsight puts upload, exploration and AI-assisted insight generation in one workspace.",
    approach:
      "A web application built around dataset upload, exploratory analysis views and generative-AI-assisted insight surfacing — the same instinct behind the BI dashboard work, wired into a product instead of a report.",
    tags: ["AI Analytics", "Data Analysis", "Dashboard", "Web Application"],
    href: "https://ai-data-analytics-workspace.vercel.app/",
    linkLabel: "View live application",
    featured: true,
    category: "product",
  },
  {
    slug: "ignyt-coach",
    title: "IGNYT Coach",
    kind: "SaaS platform for trainers",
    summary:
      "A platform for personal trainers, gyms, nutritionists and online coaches — clients, programmes, meal plans, check-ins, messaging and billing, with assigned work syncing straight into the IGNYT app each client uses.",
    problem:
      "Coaches run their business across spreadsheets, messaging apps and payment links. IGNYT Coach gives them one dashboard for clients, programming and billing that talks directly to the client-facing app.",
    approach:
      "FastAPI and PostgreSQL behind a Next.js dashboard, shipped as a web app and an Android build through Capacitor so coaches can run the same platform from a phone.",
    tags: ["FastAPI", "PostgreSQL", "Next.js", "Capacitor", "Payments"],
    href: "https://ignyt-coach.vercel.app",
    linkLabel: "View live application",
    featured: true,
    category: "product",
  },
  {
    slug: "auravault",
    title: "AuraVault",
    kind: "Family health record platform",
    summary:
      "One place for a household health: patients and dependents, medical records, medicines, vaccinations, appointments, insurance and expenses, with OCR document processing and an AI health assistant.",
    problem:
      "A family medical history lives across paper folders, pharmacy apps and a dozen PDF reports. AuraVault gives every dependent a record, and every record an owner.",
    approach:
      "Built on Firebase so record ownership is enforced by document path in security rules rather than by application code — the access model is the data model, not an afterthought bolted onto it.",
    tags: ["React Native", "Expo", "Firebase", "Firestore", "OCR"],
    shots: [asset("/shots/auravault-home.webp"), asset("/shots/auravault-records.webp"), asset("/shots/auravault-explore.webp")],
    featured: true,
    category: "product",
  },
  {
    slug: "moneyvault",
    title: "MoneyVault",
    kind: "Personal finance command center",
    summary:
      "An expense tracker where every figure on screen is derived from one live ledger and every action writes back to it — budgets, goals, net worth, cash-flow projection and payday allocation.",
    problem:
      "Most budgeting apps drift out of sync with reality within a month. MoneyVault keeps one ledger as the single source of truth so every screen recomputes from the same numbers.",
    approach:
      "Bank statements import from CSV, Excel or PDF through a column mapper and categorisation rules, with a full audit trail and undo per import.",
    tags: ["React", "TypeScript", "Tailwind", "Capacitor", "Data Import"],
    shots: [asset("/shots/moneyvault-dashboard.webp"), asset("/shots/moneyvault-cashflow.webp"), asset("/shots/moneyvault-budgets.webp")],
    featured: true,
    category: "product",
  },
  {
    slug: "ignyt",
    title: "IGNYT",
    kind: "Offline-first fitness tracker",
    summary:
      "A fitness app that works with no signal and no account: workout planning, training schedules, a 1000+ exercise library, HYROX plans, nutrition and a food database, hydration, fasting and body-weight tracking.",
    problem:
      "Most fitness apps assume a signal and an account before they track a single set. IGNYT works fully offline and syncs to Google Health Connect when it can.",
    approach:
      "Ships to Google Play as com.varun.ignyt through Capacitor, reads and writes Google Health Connect, and has an iOS build with a Swift HealthKit plugin behind Codemagic CI.",
    tags: ["Capacitor", "Android", "Health Connect", "Offline-first", "Next.js"],
    shots: [asset("/shots/ignyt-home.webp"), asset("/shots/ignyt-features.webp"), asset("/shots/ignyt-download.webp")],
    href: "https://igny-tfit-in.vercel.app",
    linkLabel: "View live site",
    featured: true,
    category: "product",
  },
];

// Analytics & research work — real projects without a shippable UI. These
// get a dense editorial treatment on the home page rather than a full case
// study, and their metrics are shown directly rather than as illustration.
export const analyticalWork: Work[] = [
  {
    slug: "retail-analytics",
    title: "Retail Sales & Inventory Analytics",
    kind: "SQL, Azure Data Factory, Power BI",
    summary:
      "Automated ingestion of more than 100,000 sales and inventory records through 3 ETL pipelines, delivering 8 revenue, product performance and stock KPIs in one refreshable report in place of manual extracts, by building an Azure Data Factory pipeline into Azure SQL Database behind a Power BI semantic model.",
    tags: ["SQL", "Azure Data Factory", "Azure SQL Database", "Power BI", "DAX", "Power Query"],
    metrics: [
      { value: "100K+", label: "Sales records" },
      { value: "3", label: "ETL pipelines" },
      { value: "8", label: "KPIs delivered" },
    ],
    featured: false,
    category: "analytics",
  },
  {
    slug: "ecommerce-analytics",
    title: "E-Commerce Customer & Sales Analytics",
    kind: "Power BI, multi-table commerce",
    summary:
      "Orders, payments, products, customers, sellers and order items joined to surface revenue patterns, customer behaviour, seller performance and operational opportunities.",
    tags: ["Power BI", "SQL", "Customer Analytics", "Data Visualization"],
    featured: false,
    category: "analytics",
  },
  {
    slug: "hr-analytics",
    title: "HR Analytics Dashboard",
    kind: "Looker Studio, workforce analytics",
    summary:
      "Attrition, demographics, job roles, compensation, satisfaction and organisational trends in one interactive workforce dashboard.",
    tags: ["Looker Studio", "HR Analytics", "Dashboard Design", "Data Visualization"],
    featured: false,
    category: "analytics",
  },
  {
    slug: "banking-analytics",
    title: "Banking & Financial Transaction Analysis System",
    kind: "SQL, Excel, Power BI",
    summary:
      "Flagged fraud indicators and segmented customers across more than 75,000 financial transactions, reporting the results across 5 performance dimensions, by writing more than 20 advanced SQL queries using joins, window functions and subqueries feeding Power BI reports.",
    tags: ["SQL", "Excel", "Power BI", "Fraud Detection", "Customer Segmentation"],
    metrics: [
      { value: "75K+", label: "Transactions analysed" },
      { value: "20+", label: "SQL queries" },
    ],
    featured: false,
    category: "analytics",
  },
  {
    slug: "thesis",
    title: "Agricultural Machinery Adoption & Crop Returns",
    kind: "MBA master thesis, 2026",
    summary:
      "An empirical study of the financial impact of machinery adoption, using primary data from 166 farming households — descriptive statistics, Pearson correlation, reliability analysis, multiple regression and hypothesis testing.",
    tags: ["Statistical Analysis", "Regression", "Pearson Correlation", "Hypothesis Testing", "ROI Analysis"],
    metrics: [
      { value: "166", label: "Farming households" },
      { value: "0.7789", label: "Cronbach alpha" },
      { value: "84.94%", label: "Positive ROI impact" },
      { value: "83%", label: "Yield improvement" },
    ],
    featured: false,
    category: "research",
  },
  {
    slug: "brake-system",
    title: "Formula Student Brake System",
    kind: "B.E. final year project, 2024",
    summary:
      "Design and development of an effective braking system for a Formula Student vehicle — engineering design, braking performance, vehicle safety and component selection.",
    tags: ["Automobile Engineering", "Formula Student", "Brake System Design", "Vehicle Dynamics", "Vehicle Safety"],
    reportHref: asset("/formula-student-brake-report.pdf"),
    featured: false,
    category: "research",
  },
];

export const allWork = [...flagshipWork, ...analyticalWork];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Business Analytics Intern",
    org: "Aruna Agencies, Namakkal",
    period: "May 2025 – Nov 2025",
    points: [
      "Analysed more than 50,000 rows of operational and sales data using SQL and Advanced Excel.",
      "Built structured analytical reports and dashboards for business decision-making — more than 10 delivered to senior stakeholders.",
      "Ran customer research with approximately 150 farmers and analysed satisfaction trends.",
      "Performed competitor analysis across 13 outlets to evaluate market positioning.",
      "Reduced manual reporting effort by approximately 40% by documenting business requirements and SOPs and automating Power BI refresh over standardised data pipelines.",
    ],
  },
  {
    role: "Junior Design Engineer",
    org: "Ponnar Sankar Tractor",
    period: "2020 – 2021",
    points: [
      "Supported engineering design and technical development in the agricultural machinery industry.",
      "Applied practical engineering principles to design tasks and technical problem-solving.",
      "Built the problem-solving foundation that later supported the move into analytics.",
    ],
  },
  {
    role: "Data Analytics & Data Engineering",
    org: "Independent projects & professional development",
    period: "2024 – Present",
    points: [
      "Built analytics projects using SQL, Power BI, Excel, Looker Studio and BI tooling.",
      "Expanded into cloud data engineering with Azure Data Factory, Databricks, Synapse Analytics, Dataflows, Pipelines and Key Vault.",
      "Developed ForgeInsight, an AI-powered analytics workspace for dataset exploration and insight generation.",
    ],
  },
];

export type EducationEntry = {
  period: string;
  degree: string;
  field: string;
  school: string;
  body: string;
  gpa: string;
};

export const education: EducationEntry[] = [
  {
    period: "2024 – 2026",
    degree: "Master of Business Administration",
    field: "Business Analytics",
    school: "CMS Business School, JAIN (Deemed-to-be University)",
    body: "Business analytics, data analysis, statistics, business intelligence, machine learning for business, finance and data-driven decision-making.",
    gpa: "CGPA 7.1/10",
  },
  {
    period: "Completed 2024",
    degree: "Bachelor of Engineering",
    field: "Automobile Engineering",
    school: "Bannari Amman Institute of Technology",
    body: "Engineering design, vehicle systems, Formula Student development, technical problem-solving and team leadership.",
    gpa: "CGPA 7.4/10",
  },
];

export type Achievement = {
  tag: string;
  title: string;
  body: string;
  metrics: string[];
};

export const achievements: Achievement[] = [
  {
    tag: "2024",
    title: "SAE Student of the Year",
    body: "The SAE chapter annual award, given for sustained technical contribution, leadership and active participation across engineering initiatives — following three consecutive years of competition work, from the electric vehicle project in 2022 through two Formula Student campaigns.",
    metrics: ["Annual chapter award", "3 years of competition work"],
  },
  {
    tag: "2023",
    title: "Team Manager, SAE SUPRA",
    body: "Ran a 30-member Formula Student team through a national campaign, finishing 2nd among roughly 80 teams — project coordination as much as engineering, holding schedules and responsibilities across subsystems through scrutineering and the race itself.",
    metrics: ["30-member team", "2nd of ~80 teams", "National"],
  },
  {
    tag: "2023",
    title: "Vice Captain, FMAE Formula Student",
    body: "Second-in-command on a campaign that placed 3rd nationally overall and took 1st in two individual events — design and acceleration. The design win is judged: the team defends its engineering choices to a panel.",
    metrics: ["3rd overall", "1st in design", "1st in acceleration"],
  },
  {
    tag: "2022",
    title: "Group Captain, Electric Vehicle Project",
    body: "Led an electric vehicle project team to 1st place overall against 25 competing teams — the first of three competition years and the entry point into leading a build team rather than working inside one.",
    metrics: ["1st overall", "25 teams"],
  },
];

export type Certification = {
  code: string;
  year: string;
  title: string;
  issuer: string;
  body: string;
  tags: string[];
};

export const certifications: Certification[] = [
  {
    code: "NIQSZ1ZBJNMK",
    year: "2025",
    title: "AI for Solving Business Problems",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Applied artificial intelligence concepts to identify, analyse and solve practical business problems.",
    tags: ["Artificial Intelligence", "Business Analytics"],
  },
  {
    code: "L68LD7JI0ZVA",
    year: "2024",
    title: "Organizational Behavior: How to Manage People",
    issuer: "IESE Business School",
    body: "Organisational behaviour, people management, motivation and leadership.",
    tags: ["Leadership", "People Management"],
  },
  {
    code: "N922Z9PPIRAE",
    year: "2024",
    title: "Financial Accounting Fundamentals",
    issuer: "University of Virginia, Darden School of Business",
    body: "Financial statements, accounting principles and financial performance analysis.",
    tags: ["Financial Accounting", "Financial Analysis"],
  },
  {
    code: "XC17FOVU0FCG",
    year: "2024",
    title: "Basic Statistics",
    issuer: "University of Amsterdam",
    body: "Descriptive statistics, probability, correlation and statistical inference.",
    tags: ["Statistics", "Probability"],
  },
  {
    code: "Y0QY7134J9BU",
    year: "2025",
    title: "Machine Learning for Business",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Machine learning applied to business decision-making and predictive analytics.",
    tags: ["Machine Learning", "Predictive Analytics"],
  },
  {
    code: "9GVUERGS1ZLF",
    year: "2025",
    title: "Security Analytics and Portfolio Management",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Investment analysis, security evaluation, portfolio construction and risk assessment.",
    tags: ["Portfolio Management", "Finance"],
  },
  {
    code: "P25TT39KICL0",
    year: "2025",
    title: "Corporate Governance & Practices",
    issuer: "JAIN (Deemed-to-be University)",
    body: "Governance frameworks, accountability, ethical business practice and stakeholder management.",
    tags: ["Corporate Governance", "Management"],
  },
  {
    code: "VWEX4OCU3CWH",
    year: "2025",
    title: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM",
    body: "Building generative AI applications with Python and modern AI tooling.",
    tags: ["Generative AI", "Python"],
  },
];
