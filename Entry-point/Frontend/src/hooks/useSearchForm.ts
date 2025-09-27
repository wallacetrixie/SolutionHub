import { useState, useCallback } from 'react';
import {
  FREELANCER_CATEGORIES,
  JOB_CATEGORIES,
  LOCATIONS,
  EXPERIENCE_LEVELS,
  BUDGETS,
  DURATIONS,
} from '../Constants/searchConstants';
import type { 
  SearchTab, 
  FreelancerFormData, 
  JobFormData, 
  UseSearchFormReturn 
} from '../types/searchTypes';

export const useSearchForm = (): UseSearchFormReturn => {
  const [activeTab, setActiveTab] = useState<SearchTab>("freelancers");
  
  // Freelancer search states
  const [freelancerForm, setFreelancerForm] = useState<FreelancerFormData>({
    search: "",
    category: FREELANCER_CATEGORIES[0],
    location: LOCATIONS[0],
    experience: EXPERIENCE_LEVELS[0],
  });
  
  // Job search states
  const [jobForm, setJobForm] = useState<JobFormData>({
    search: "",
    category: JOB_CATEGORIES[0],
    budget: BUDGETS[0],
    duration: DURATIONS[0],
  });

  const updateFreelancerForm = useCallback((field: keyof FreelancerFormData, value: string) => {
    setFreelancerForm(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const updateJobForm = useCallback((field: keyof JobFormData, value: string) => {
    setJobForm(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const resetForms = useCallback(() => {
    setFreelancerForm({
      search: "",
      category: FREELANCER_CATEGORIES[0],
      location: LOCATIONS[0],
      experience: EXPERIENCE_LEVELS[0],
    });
    setJobForm({
      search: "",
      category: JOB_CATEGORIES[0],
      budget: BUDGETS[0],
      duration: DURATIONS[0],
    });
  }, []);

  const handleTabChange = useCallback((tab: SearchTab) => {
    setActiveTab(tab);
  }, []);

  const getCurrentForm = useCallback((): FreelancerFormData | JobFormData => {
    return activeTab === "freelancers" ? freelancerForm : jobForm;
  }, [activeTab, freelancerForm, jobForm]);

  const isFormValid = useCallback((): boolean => {
    const currentForm = getCurrentForm();
    return currentForm.search.trim().length >= 2;
  }, [getCurrentForm]);

  return {
    activeTab,
    freelancerForm,
    jobForm,
    updateFreelancerForm,
    updateJobForm,
    resetForms,
    handleTabChange,
    getCurrentForm,
    isFormValid,
  };
};