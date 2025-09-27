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

function SearchDropdown() {
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

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert("Please enter at least 2 characters in the search field.");
      return;
    }

    const currentForm = getCurrentForm();
    
    if (activeTab === "freelancers") {
      const searchData = {
        type: 'freelancers',
        search: freelancerForm.search,
        category: freelancerForm.category,
        location: freelancerForm.location,
        experience: freelancerForm.experience,
      };
      
      // In a real app, you would dispatch this to a search API
      console.log("Freelancer Search:", searchData);
      alert(
        `Searching for freelancers:\n` +
        `Query: ${freelancerForm.search}\n` +
        `Category: ${freelancerForm.category}\n` +
        `Location: ${freelancerForm.location}\n` +
        `Experience: ${freelancerForm.experience}`
      );
    } else {
      const searchData = {
        type: 'jobs',
        search: jobForm.search,
        category: jobForm.category,
        budget: jobForm.budget,
        duration: jobForm.duration,
      };
      
      // In a real app, you would dispatch this to a search API
      console.log("Job Search:", searchData);
      alert(
        `Searching for jobs:\n` +
        `Query: ${jobForm.search}\n` +
        `Category: ${jobForm.category}\n` +
        `Budget: ${jobForm.budget}\n` +
        `Duration: ${jobForm.duration}`
      );
    }
  }, [activeTab, freelancerForm, jobForm, getCurrentForm, isFormValid]);

  const handlePopularSearchClick = useCallback((searchTerm) => {
    if (activeTab === "freelancers") {
      updateFreelancerForm("search", searchTerm);
    } else {
      updateJobForm("search", searchTerm);
    }
  }, [activeTab, updateFreelancerForm, updateJobForm]);

  return (
    <div
      className={`search-dropdown-container slide-in-animate${
        isVisible ? " visible" : ""
      }`}
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
      <div className="search-tabs">
        <button
          className={`tab${
            activeTab === "freelancers" ? " active" : ""
          }`}
          onClick={() => handleTabChange("freelancers")}
          type="button"
          aria-pressed={activeTab === "freelancers"}
          role="tab"
        >
          Find Freelancers
        </button>
        <button
          className={`tab${activeTab === "jobs" ? " active" : ""}`}
          onClick={() => handleTabChange("jobs")}
          type="button"
          aria-pressed={activeTab === "jobs"}
          role="tab"
        >
          Find Jobs
        </button>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        {activeTab === "freelancers" ? (
          <>
            <input
              type="text"
              className="search-input"
              placeholder={SEARCH_PLACEHOLDERS.freelancers}
              value={freelancerForm.search}
              onChange={(e) => updateFreelancerForm("search", e.target.value)}
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
                  onChange={(e) => updateFreelancerForm("category", e.target.value)}
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
                  onChange={(e) => updateFreelancerForm("location", e.target.value)}
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
                  onChange={(e) => updateFreelancerForm("experience", e.target.value)}
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
              onChange={(e) => updateJobForm("search", e.target.value)}
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
                  onChange={(e) => updateJobForm("category", e.target.value)}
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
                  onChange={(e) => updateJobForm("budget", e.target.value)}
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
                  onChange={(e) => updateJobForm("duration", e.target.value)}
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
}

export default SearchDropdown;