export type SearchTab = 'freelancers' | 'jobs';

export interface FreelancerFormData {
  search: string;
  category: string;
  location: string;
  experience: string;
}

export interface JobFormData {
  search: string;
  category: string;
  budget: string;
  duration: string;
}

export type SearchFormData = FreelancerFormData | JobFormData;

export interface SearchResultData {
  type: SearchTab;
  search: string;
  category: string;
  location?: string;
  experience?: string;
  budget?: string;
  duration?: string;
}

export interface SearchDropdownProps {
  onSearch?: (data: SearchResultData) => void;
  className?: string;
  initialTab?: SearchTab;
}

export interface UseSearchFormReturn {
  activeTab: SearchTab;
  freelancerForm: FreelancerFormData;
  jobForm: JobFormData;
  updateFreelancerForm: (field: keyof FreelancerFormData, value: string) => void;
  updateJobForm: (field: keyof JobFormData, value: string) => void;
  resetForms: () => void;
  handleTabChange: (tab: SearchTab) => void;
  getCurrentForm: () => FreelancerFormData | JobFormData;
  isFormValid: () => boolean;
}

export interface UseScrollAnimationReturn {
  isVisible: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}