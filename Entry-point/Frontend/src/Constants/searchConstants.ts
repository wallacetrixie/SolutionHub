import type { SearchTab } from '../types/searchTypes';

export const FREELANCER_CATEGORIES = [
  "Web Development",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Mobile App Development",
  "Data Analysis",
  "UI/UX Design",
  "Video Editing",
  "Social Media Management",
  "SEO Optimization",
  "Translation Services",
  "Virtual Assistant",
] as const;

export const JOB_CATEGORIES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Logo Designer",
  "SEO Specialist",
  "Mobile App Developer",
  "Data Analyst",
  "UX Researcher",
  "Project Manager",
  "DevOps Engineer",
  "Quality Assurance",
  "Technical Writer",
] as const;

export const LOCATIONS = [
  "Anywhere",
  "Remote",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "India",
  "Singapore",
  "Netherlands",
  "Brazil",
] as const;

export const EXPERIENCE_LEVELS = [
  "Any Level",
  "Entry Level (0-2 years)",
  "Intermediate (2-5 years)",
  "Senior (5-10 years)",
  "Expert (10+ years)",
] as const;

export const BUDGETS = [
  "Any Budget",
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "Above $10,000",
] as const;

export const DURATIONS = [
  "Any Duration",
  "Less than 1 week",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "3-6 months",
  "6+ months",
  "Ongoing",
] as const;

export const SEARCH_PLACEHOLDERS: Record<SearchTab, string> = {
  freelancers: "Search for web developers, designers, writers...",
  jobs: "Search for jobs in your field...",
} as const;

export const POPULAR_SEARCHES: Record<SearchTab, readonly string[]> = {
  freelancers: [
    "React Developer",
    "Logo Design",
    "WordPress",
    "Content Writer",
    "Social Media",
    "SEO Expert",
  ],
  jobs: [
    "Remote Work",
    "Full Time",
    "Part Time",
    "Startup",
    "Tech Lead",
    "UI Designer",
  ],
} as const;

export type FreelancerCategory = typeof FREELANCER_CATEGORIES[number];
export type JobCategory = typeof JOB_CATEGORIES[number];
export type Location = typeof LOCATIONS[number];
export type ExperienceLevel = typeof EXPERIENCE_LEVELS[number];
export type Budget = typeof BUDGETS[number];
export type Duration = typeof DURATIONS[number];