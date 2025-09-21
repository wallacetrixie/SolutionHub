import React from "react";
import {
  FaCode,
  FaPalette,
  FaLeaf,
  FaBullhorn,
  FaMobileAlt,
  FaVideo,
  FaCamera,
  FaChartBar,
} from "react-icons/fa";
import "../../styles/PopularCategories.css";

const categories = [
  {
    name: "Web Development",
    projects: "12,450+ projects",
    icon: <FaCode />,
    color: "#e3f0ff",
    iconColor: "#3793fa",
  },
  {
    name: "Graphic Design",
    projects: "8,230+ projects",
    icon: <FaPalette />,
    color: "#f5f0ff",
    iconColor: "#b36aff",
  },
  {
    name: "Writing & Content",
    projects: "9,840+ projects",
    icon: <FaLeaf />,
    color: "#eafff3",
    iconColor: "#3ecf8e",
  },
  {
    name: "Digital Marketing",
    projects: "6,750+ projects",
    icon: <FaBullhorn />,
    color: "#ffeaea",
    iconColor: "#fa5c5c",
  },
  {
    name: "Mobile Development",
    projects: "4,320+ projects",
    icon: <FaMobileAlt />,
    color: "#e3eaff",
    iconColor: "#5c6dfa",
  },
  {
    name: "Video & Animation",
    projects: "3,650+ projects",
    icon: <FaVideo />,
    color: "#fff0f5",
    iconColor: "#fa5ca7",
  },
  {
    name: "Photography",
    projects: "2,890+ projects",
    icon: <FaCamera />,
    color: "#fffbe3",
    iconColor: "#fac85c",
  },
  {
    name: "Data Analysis",
    projects: "3,120+ projects",
    icon: <FaChartBar />,
    color: "#eafffa",
    iconColor: "#3cefcf",
  },
];

function PopularCategories() {
  return (
    <div className="categories-container">
      <h2 className="categories-title">
        Popular <span className="highlight">Categories</span>
      </h2>
      <p className="categories-desc">
        Explore the most in-demand skills and services on our platform. Find the perfect category for your next project or expertise.
      </p>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
            <div
              className="category-icon"
              style={{ background: cat.color, color: cat.iconColor }}
            >
              {cat.icon}
            </div>
            <div className="category-name">{cat.name}</div>
            <div className="category-projects">{cat.projects}</div>
          </div>
        ))}
      </div>
      <button className="categories-btn">Browse All Categories</button>
    </div>
  );
}

export default PopularCategories;