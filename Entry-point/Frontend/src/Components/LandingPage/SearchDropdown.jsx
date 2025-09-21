import React, { useState } from "react";
import "../../styles/Search.css";

const categories = [
  "Web Development",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Mobile App Development",
  "Data Analysis",
  "UI/UX Design",
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

function SearchDropdown() {
  const [category, setCategory] = useState(categories[0]);
  const [location, setLocation] = useState(locations[0]);
  const [experience, setExperience] = useState(experienceLevels[0]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    alert(
      `Searching for: ${search}\nCategory: ${category}\nLocation: ${location}\nExperience: ${experience}`
    );
  };

  return (
    <div className="search-dropdown-container">
      {/* Added heading and description */}
      <div className="search-header">
        <h2 className="search-title">
          Find Your Perfect <span className="search-title-highlight">Match</span>
        </h2>
        <p className="search-description">
          Discover talented freelancers or explore exciting job opportunities. Our advanced search helps you find exactly what you're looking for.
        </p>
      </div>
      <div className="search-tabs">
        <button className="tab active">Find Freelancers</button>
        <button className="tab">Find Jobs</button>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
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
              {categories.map((cat) => (
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