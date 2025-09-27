import React, { useCallback } from "react";
import "../../styles/Search.css";
import { useSearchForm } from "../../hooks/useSearchForm";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  FREELANCER_CATEGORIES,
  JOB_CATEGORIES,
  LOCATIONS,
  EXPERIENCE_LEVELS,
  BUDGETS,
  DURATIONS,
  SEARCH_PLACEHOLDERS,
  POPULAR_SEARCHES,
} from "../../Constants/searchConstants";
import type { 
  SearchDropdownProps, 
  SearchResultData,
  FreelancerFormData,
  JobFormData
} from "../../types/searchTypes";

const SearchDropdown: React.FC<SearchDropdownProps> = ({ 
  onSearch, 
  className = "", 
  initialTab = "freelancers" 
}) => {
  const {
    activeTab,
    freelancerForm,
    jobForm,
    updateFreelancerForm,
    updateJobForm,
    handleTabChange,
    getCurrentForm,
    isFormValid,
  } = useSearchForm();

  const { isVisible, containerRef } = useScrollAnimation(100);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert("Please enter at least 2 characters in the search field.");
      return;
    }

    let searchData: SearchResultData;
    
    if (activeTab === "freelancers") {
      searchData = {
        type: 'freelancers',
        search: freelancerForm.search,
        category: freelancerForm.category,
        location: freelancerForm.location,
        experience: freelancerForm.experience,
      };
      
      // Call the callback if provided, otherwise show alert
      if (onSearch) {
        onSearch(searchData);
      } else {
        console.log("Freelancer Search:", searchData);
        alert(
          `Searching for freelancers:\n` +
          `Query: ${freelancerForm.search}\n` +
          `Category: ${freelancerForm.category}\n` +
          `Location: ${freelancerForm.location}\n` +
          `Experience: ${freelancerForm.experience}`
        );
      }
    } else {
      searchData = {
        type: 'jobs',
        search: jobForm.search,
        category: jobForm.category,
        budget: jobForm.budget,
        duration: jobForm.duration,
      };
      
      // Call the callback if provided, otherwise show alert
      if (onSearch) {
        onSearch(searchData);
      } else {
        console.log("Job Search:", searchData);
        alert(
          `Searching for jobs:\n` +
          `Query: ${jobForm.search}\n` +
          `Category: ${jobForm.category}\n` +
          `Budget: ${jobForm.budget}\n` +
          `Duration: ${jobForm.duration}`
        );
      }
    }
  }, [activeTab, freelancerForm, jobForm, isFormValid, onSearch]);

  const handlePopularSearchClick = useCallback((searchTerm: string) => {
    if (activeTab === "freelancers") {
      updateFreelancerForm("search", searchTerm);
    } else {
      updateJobForm("search", searchTerm);
    }
  }, [activeTab, updateFreelancerForm, updateJobForm]);

  React.useEffect(() => {
    if (initialTab !== activeTab) {
      handleTabChange(initialTab);
    }
  }, [initialTab, activeTab, handleTabChange]);

  return (
    <div
      className={`search-dropdown-container slide-in-animate${
        isVisible ? " visible" : ""
      }${className ? ` ${className}` : ""}`}
      ref={containerRef}
    >
      <div className="search-header">
        <h2 className="search-title">
          Find Your Perfect{" "}
          <span className="search-title-highlight">Match</span>
        </h2>
        <p className="search-description">
          Discover talented freelancers or explore exciting job opportunities. Our
          advanced search helps you find exactly what you're looking for.
        </p>
      </div>
      <div className="search-tabs" role="tablist">
        <button
          className={`tab${
            activeTab === "freelancers" ? " active" : ""
          }`}
          onClick={() => handleTabChange("freelancers")}
          type="button"
          aria-pressed={activeTab === "freelancers"}
          role="tab"
          aria-controls="freelancers-panel"
          id="freelancers-tab"
        >
          Find Freelancers
        </button>
        <button
          className={`tab${activeTab === "jobs" ? " active" : ""}`}
          onClick={() => handleTabChange("jobs")}
          type="button"
          aria-pressed={activeTab === "jobs"}
          role="tab"
          aria-controls="jobs-panel"
          id="jobs-tab"
        >
          Find Jobs
        </button>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div
          role="tabpanel"
          id={`${activeTab}-panel`}
          aria-labelledby={`${activeTab}-tab`}
        >
          {activeTab === "freelancers" ? (
            <>
              <input
                type="text"
                className="search-input"
                placeholder={SEARCH_PLACEHOLDERS.freelancers}
                value={freelancerForm.search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateFreelancerForm("search", e.target.value)
                }
                aria-label="Search for freelancers"
                minLength={2}
                required
              />
              <div className="dropdown-row">
                <div className="dropdown-group">
                  <label htmlFor="freelancer-category">Category</label>
                  <select
                    id="freelancer-category"
                    value={freelancerForm.category}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      updateFreelancerForm("category", e.target.value)
                    }
                    aria-label="Select freelancer category"
                  >
                    {FREELANCER_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="freelancer-location">Location</label>
                  <select
                    id="freelancer-location"
                    value={freelancerForm.location}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      updateFreelancerForm("location", e.target.value)
                    }
                    aria-label="Select location"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="freelancer-experience">Experience</label>
                  <select
                    id="freelancer-experience"
                    value={freelancerForm.experience}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      updateFreelancerForm("experience", e.target.value)
                    }
                    aria-label="Select experience level"
                  >
                    {EXPERIENCE_LEVELS.map((exp) => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                className="search-input"
                placeholder={SEARCH_PLACEHOLDERS.jobs}
                value={jobForm.search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateJobForm("search", e.target.value)
                }
                aria-label="Search for jobs"
                minLength={2}
                required
              />
              <div className="dropdown-row">
                <div className="dropdown-group">
                  <label htmlFor="job-category">Category</label>
                  <select
                    id="job-category"
                    value={jobForm.category}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      updateJobForm("category", e.target.value)
                    }
                    aria-label="Select job category"
                  >
                    {JOB_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="job-budget">Budget</label>
                  <select
                    id="job-budget"
                    value={jobForm.budget}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      updateJobForm("budget", e.target.value)
                    }
                    aria-label="Select budget range"
                  >
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="dropdown-group">
                  <label htmlFor="job-duration">Duration</label>
                  <select
                    id="job-duration"
                    value={jobForm.duration}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      updateJobForm("duration", e.target.value)
                    }
                    aria-label="Select project duration"
                  >
                    {DURATIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
        <button 
          type="submit" 
          className={`search-btn ${!isFormValid() ? 'disabled' : ''}`}
          disabled={!isFormValid()}
          aria-label="Start search"
        >
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search Now
        </button>
      </form>

      {/* Popular Searches Section */}
      <div className="mostly-searched-section">
        <h3 className="mostly-searched-title">
          Popular {activeTab === "freelancers" ? "Freelancer" : "Job"} Searches
        </h3>
        <div className="mostly-searched-list">
          {POPULAR_SEARCHES[activeTab].map((searchTerm) => (
            <button
              key={searchTerm}
              className="mostly-searched-item"
              onClick={() => handlePopularSearchClick(searchTerm)}
              type="button"
              aria-label={`Search for ${searchTerm}`}
            >
              {searchTerm}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;