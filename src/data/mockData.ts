export type Role = 'student' | 'facilitator' | 'company';

export type View =
  | 'public'
  | 'login'
  | 'student'
  | 'facilitator'
  | 'company';

export interface School {
  name: string;
  board: string;
}

export interface Company {
  name: string;
  sector: string;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  sector: string;
  format: 'Remote' | 'In-person' | 'Hybrid';
  duration: string;
  matchPercent: number;
  skills: string[];
  description: string;
}

export interface Application {
  id: string;
  role: string;
  company: string;
  date: string;
  status: 'Interview scheduled' | 'Awaiting response' | 'Offer received' | 'Under review' | 'Not selected';
}

export interface Student {
  name: string;
  grade: string;
  school: string;
  seatStatus: 'Active' | 'Pending' | 'Placed';
  skills: string[];
  interests: string[];
  matchedCount: number;
  activeApplications: number;
  consentOnFile: boolean;
}

export interface FacilitatorStudent {
  name: string;
  grade: string;
  interest: string;
  placement: 'Placed' | 'In process' | 'Not placed';
}

export interface Facilitator {
  name: string;
  school: string;
  seatsPurchased: number;
  seatsUsed: number;
  studentsPlaced: number;
  amountPaid: number;
  packageName: string;
  students: FacilitatorStudent[];
}

export interface CompanyListing {
  id: string;
  title: string;
  format: 'Remote' | 'In-person' | 'Hybrid';
  duration: string;
  matchedCandidates: number;
  status: 'Open' | 'Closed';
}

export interface Candidate {
  name: string;
  school: string;
  skills: string[];
  status: 'Matched' | 'Interview scheduled' | 'Shortlisted';
}

export interface CompanyUser {
  name: string;
  sector: string;
  verified: boolean;
  openListings: number;
  matchedCandidates: number;
  pastInterns: number;
  listings: CompanyListing[];
  candidates: Candidate[];
}

// ---------- Mock data ----------

export const partnerSchools: School[] = [
  { name: 'Delhi Modern Public School', board: 'CBSE' },
  { name: 'School #3', board: 'ICSE' },
  { name: 'Bishop Cotton International', board: 'IB' },
  { name: 'School #7', board: 'CBSE' },
  { name: 'Heritage Academy Bengaluru', board: 'ICSE' },
  { name: 'School #12', board: 'IB' },
  { name: 'Vidya Niketan Pune', board: 'CBSE' },
  { name: 'School #15', board: 'ICSE' },
];

export const hiringPartners: Company[] = [
  { name: 'Kettle & Co.', sector: 'Consumer' },
  { name: 'Company #4', sector: 'SaaS' },
  { name: 'Mowgli Foods', sector: 'Food' },
  { name: 'Company #9', sector: 'FinTech' },
  { name: 'Studio Pintado', sector: 'Design' },
  { name: 'Company #13', sector: 'EdTech' },
  { name: 'Verdant Labs', sector: 'Climate' },
  { name: 'Company #18', sector: 'Logistics' },
];

export const studentData: Student = {
  name: 'Ananya Reddy',
  grade: 'Grade 11',
  school: 'Heritage Academy Bengaluru',
  seatStatus: 'Active',
  skills: ['Figma', 'Copywriting', 'Canva', 'Basic Python'],
  interests: ['Marketing', 'Design', 'Content'],
  matchedCount: 6,
  activeApplications: 3,
  consentOnFile: true,
};

export const studentInternships: Internship[] = [
  {
    id: 'i1',
    title: 'Social Media Marketing Intern',
    company: 'Kettle & Co.',
    sector: 'Consumer',
    format: 'Remote',
    duration: '6 weeks',
    matchPercent: 94,
    skills: ['Canva', 'Copywriting'],
    description: 'Create and schedule weekly content across Instagram and LinkedIn. Collaborate with the brand team on campaign ideas.',
  },
  {
    id: 'i2',
    title: 'Product Design Shadow',
    company: 'Studio Pintado',
    sector: 'Design',
    format: 'Hybrid',
    duration: '8 weeks',
    matchPercent: 89,
    skills: ['Figma', 'Canva'],
    description: 'Shadow senior designers on client projects. Contribute to wireframes and participate in design reviews.',
  },
  {
    id: 'i3',
    title: 'Content Writer — Blog',
    company: 'Verdant Labs',
    sector: 'Climate',
    format: 'Remote',
    duration: '4 weeks',
    matchPercent: 85,
    skills: ['Copywriting'],
    description: 'Research and write two blog posts per week on sustainability topics. Work with the editor on revisions.',
  },
  {
    id: 'i4',
    title: 'Marketing Campaign Assistant',
    company: 'Mowgli Foods',
    sector: 'Food',
    format: 'In-person',
    duration: '6 weeks',
    matchPercent: 82,
    skills: ['Canva', 'Copywriting'],
    description: 'Support the launch of a new product line. Help with in-store posters, social teasers, and customer surveys.',
  },
  {
    id: 'i5',
    title: 'Junior Frontend Tinkerer',
    company: 'Company #9',
    sector: 'FinTech',
    format: 'Remote',
    duration: '8 weeks',
    matchPercent: 76,
    skills: ['Basic Python'],
    description: 'Explore frontend development with a small fintech team. Pair-program on small UI fixes and learn the basics of a codebase.',
  },
  {
    id: 'i6',
    title: 'Brand Design Intern',
    company: 'Studio Pintado',
    sector: 'Design',
    format: 'Remote',
    duration: '6 weeks',
    matchPercent: 71,
    skills: ['Figma'],
    description: 'Work on a brand refresh for a local NGO client. Produce colour palettes, typography specs, and a mini style guide.',
  },
];

export const studentApplications: Application[] = [
  {
    id: 'a1',
    role: 'Social Media Marketing Intern',
    company: 'Kettle & Co.',
    date: '12 Sep 2026',
    status: 'Interview scheduled',
  },
  {
    id: 'a2',
    role: 'Product Design Shadow',
    company: 'Studio Pintado',
    date: '10 Sep 2026',
    status: 'Awaiting response',
  },
  {
    id: 'a3',
    role: 'Content Writer — Blog',
    company: 'Verdant Labs',
    date: '08 Sep 2026',
    status: 'Under review',
  },
];

export const facilitatorData: Facilitator = {
  name: 'Meera Nair',
  school: 'Vidya Niketan Pune',
  seatsPurchased: 20,
  seatsUsed: 14,
  studentsPlaced: 9,
  amountPaid: 80000,
  packageName: 'Standard — 20 seats / year',
  students: [
    { name: 'Aarav Sharma', grade: 'Grade 12', interest: 'Coding', placement: 'Placed' },
    { name: 'Ishaan Verma', grade: 'Grade 11', interest: 'Marketing', placement: 'In process' },
    { name: 'Diya Patel', grade: 'Grade 12', interest: 'Design', placement: 'Placed' },
    { name: 'Kabir Singh', grade: 'Grade 10', interest: 'Ops', placement: 'Not placed' },
    { name: 'Sara Khan', grade: 'Grade 11', interest: 'Marketing', placement: 'In process' },
    { name: 'Vihaan Gupta', grade: 'Grade 12', interest: 'Coding', placement: 'Placed' },
    { name: 'Anaya Rao', grade: 'Grade 11', interest: 'Design', placement: 'In process' },
    { name: 'Reyansh Das', grade: 'Grade 10', interest: 'Ops', placement: 'Not placed' },
    { name: 'Myra Iyer', grade: 'Grade 12', interest: 'Marketing', placement: 'Placed' },
    { name: 'Arjun Nair', grade: 'Grade 11', interest: 'Coding', placement: 'In process' },
    { name: 'Saanvi Reddy', grade: 'Grade 12', interest: 'Design', placement: 'Placed' },
    { name: 'Ayaan Joshi', grade: 'Grade 10', interest: 'Ops', placement: 'Not placed' },
    { name: 'Navya Menon', grade: 'Grade 11', interest: 'Marketing', placement: 'In process' },
    { name: 'Ved Malhotra', grade: 'Grade 12', interest: 'Coding', placement: 'Placed' },
  ],
};

export const facilitatorExpertise = [
  { area: 'Marketing', percent: 35 },
  { area: 'Coding', percent: 25 },
  { area: 'Design', percent: 25 },
  { area: 'Ops', percent: 15 },
];

export const companyData: CompanyUser = {
  name: 'Kettle & Co.',
  sector: 'Consumer',
  verified: true,
  openListings: 3,
  matchedCandidates: 12,
  pastInterns: 5,
  listings: [
    { id: 'l1', title: 'Social Media Marketing Intern', format: 'Remote', duration: '6 weeks', matchedCandidates: 5, status: 'Open' },
    { id: 'l2', title: 'Brand Photography Assistant', format: 'In-person', duration: '4 weeks', matchedCandidates: 3, status: 'Open' },
    { id: 'l3', title: 'Customer Survey Lead', format: 'Hybrid', duration: '5 weeks', matchedCandidates: 4, status: 'Open' },
  ],
  candidates: [
    { name: 'Ananya Reddy', school: 'Heritage Academy Bengaluru', skills: ['Canva', 'Copywriting'], status: 'Interview scheduled' },
    { name: 'Sara Khan', school: 'Vidya Niketan Pune', skills: ['Canva', 'Social Media'], status: 'Matched' },
    { name: 'Myra Iyer', school: 'Vidya Niketan Pune', skills: ['Copywriting', 'Canva'], status: 'Shortlisted' },
    { name: 'Navya Menon', school: 'Vidya Niketan Pune', skills: ['Social Media', 'Canva'], status: 'Matched' },
    { name: 'Diya Patel', school: 'Vidya Niketan Pune', skills: ['Figma', 'Canva'], status: 'Shortlisted' },
  ],
};
