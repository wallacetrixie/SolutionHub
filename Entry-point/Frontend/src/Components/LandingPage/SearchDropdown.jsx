import React, { useState, useRef, useEffect } from "react";
import "../../styles/Search.css";

const freelancerCategories = [
  "Web Development",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Mobile App Development",
  "Data Analysis",
  "UI/UX Design",
];

const jobCategories = [
  "Frontend Developer",
  "Backend Developer",
  "Logo Designer",
  "SEO Specialist",
  "Mobile App Developer",
  "Data Analyst",
  "UX Researcher",
];

const locations = [
  "Anywhere",
  "Remote",
  "United States",
  "United Kingdom",
  "India",
  "Canada",
  "Australia",
];

const experienceLevels = [
  "Any Level",
  "Entry Level",
  "Intermediate",
  "Expert",
];

const budgets = [
  "Any Budget",
  "Under $500",
  "$500 - $1000",
  "$1000 - $5000",
  "Above $5000",
];

const durations = [
  "Any Duration",
  "1 Week",
  "2 Weeks",
  "3 Weeks",
  "1 Month",
  "3 Months",
];

function SearchDropdown() {
  const [activeTab, setActiveTab] = useState("freelancers");
  const [category, setCategory] = useState(freelancerCategories[0]);
  const [location, setLocation] = useState(locations[0]);
  const [experience, setExperience] = useState(experienceLevels[0]);
  const [search, setSearch] = useState("");
  // Job tab states
  const [jobCategory, setJobCategory] = useState(jobCategories[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [duration, setDuration] = useState(durations[0]);
  const [jobSearch, setJobSearch] = useState("");

  // Animation state
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger on mount in case already in view
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "freelancers") {
      alert(
        `Searching for: ${search}\nCategory: ${category}\nLocation: ${location}\nExperience: ${experience}`
      );
    } else {
      alert(
        `Searching for: ${jobSearch}\nCategory: ${jobCategory}\nBudget: ${budget}\nDuration: ${duration}`
      );
    }
  };

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
          onClick={() => setActiveTab("freelancers")}
          type="button"
        >
          Find Freelancers
        </button>
        <button
          className={`tab${activeTab === "jobs" ? " active" : ""}`}
          onClick={() => setActiveTab("jobs")}
          type="button"
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
              placeholder="Search for web developers, designers, writers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="dropdown-row">
              <div className="dropdown-group">
                <label>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {freelancerCategories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="dropdown-group">
                <label>Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div className="dropdown-group">
                <label>Experience</label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  {experienceLevels.map((exp) => (
                    <option key={exp}>{exp}</option>
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
              placeholder="Search for jobs in your field..."
              value={jobSearch}
              onChange={(e) => setJobSearch(e.target.value)}
            />
            <div className="dropdown-row">
              <div className="dropdown-group">
                <label>Category</label>
                <select
                  value={jobCategory}
                  onChange={(e) => setJobCategory(e.target.value)}
                >
                  {jobCategories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="dropdown-group">
                <label>Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="dropdown-group">
                <label>Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  {durations.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}
        <button type="submit" className="search-btn">
          <span role="img" aria-label="search">
            🔍
          </span>{" "}
          Search Now
        </button>
      </form>
    </div>
  );
}

export default SearchDropdown;