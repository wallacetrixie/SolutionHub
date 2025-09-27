import React, { useState } from "react";
import {
  FaCode,
  FaPalette,
  FaLeaf,
  FaBullhorn,
  FaMobileAlt,
  FaVideo,
  FaCamera,
  FaChartBar,
  FaArrowUp,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";
import "../../styles/LandingPage/PopularCategories.css";

const categories = [
  {
    name: "Web Development",
    projects: "12,450+ projects",
    icon: <FaCode />,
    color: "#e3f0ff",
    iconColor: "#3793fa",
    trending: true,
    description: "Build responsive websites, web applications, and digital experiences that engage users and drive business growth.",
    keySkills: ["React", "Node.js", "JavaScript", "TypeScript", "CSS"],
    avgSalary: "$65k - $120k",
    demand: "Very High",
    growthRate: "+23%",
    popularServices: ["E-commerce sites", "Landing pages", "Web apps", "API development"]
  },
  {
    name: "Graphic Design",
    projects: "8,230+ projects",
    icon: <FaPalette />,
    color: "#f5f0ff",
    iconColor: "#b36aff",
    trending: false,
    description: "Create stunning visual content including logos, branding materials, and marketing assets that capture attention and communicate effectively.",
    keySkills: ["Adobe Creative Suite", "Figma", "Sketch", "Branding", "Typography"],
    avgSalary: "$45k - $85k",
    demand: "High",
    growthRate: "+15%",
    popularServices: ["Logo design", "Brand identity", "Print design", "Social media graphics"]
  },
  {
    name: "Writing & Content",
    projects: "9,840+ projects",
    icon: <FaLeaf />,
    color: "#eafff3",
    iconColor: "#3ecf8e",
    trending: true,
    description: "Craft compelling content that engages audiences, improves SEO rankings, and drives conversions across multiple platforms.",
    keySkills: ["SEO Writing", "Copywriting", "Content Strategy", "Research", "Storytelling"],
    avgSalary: "$40k - $75k",
    demand: "Very High",
    growthRate: "+28%",
    popularServices: ["Blog posts", "Website copy", "Social content", "Technical writing"]
  },
  {
    name: "Digital Marketing",
    projects: "6,750+ projects",
    icon: <FaBullhorn />,
    color: "#ffeaea",
    iconColor: "#fa5c5c",
    trending: true,
    description: "Drive business growth through strategic online marketing campaigns, social media management, and data-driven advertising.",
    keySkills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Social Media"],
    avgSalary: "$50k - $90k",
    demand: "Very High",
    growthRate: "+31%",
    popularServices: ["PPC campaigns", "Social media marketing", "Email marketing", "SEO optimization"]
  },
  {
    name: "Mobile Development",
    projects: "4,320+ projects",
    icon: <FaMobileAlt />,
    color: "#e3eaff",
    iconColor: "#5c6dfa",
    trending: true,
    description: "Build innovative mobile applications for iOS and Android that provide seamless user experiences and solve real-world problems.",
    keySkills: ["React Native", "Flutter", "Swift", "Kotlin", "UI/UX Design"],
    avgSalary: "$70k - $130k",
    demand: "Very High",
    growthRate: "+25%",
    popularServices: ["iOS apps", "Android apps", "Cross-platform apps", "App store optimization"]
  },
  {
    name: "Video & Animation",
    projects: "3,650+ projects",
    icon: <FaVideo />,
    color: "#fff0f5",
    iconColor: "#fa5ca7",
    trending: false,
    description: "Create engaging video content and animations that tell stories, explain concepts, and captivate audiences across digital platforms.",
    keySkills: ["After Effects", "Premiere Pro", "Cinema 4D", "Blender", "Motion Graphics"],
    avgSalary: "$55k - $95k",
    demand: "High",
    growthRate: "+18%",
    popularServices: ["Explainer videos", "Motion graphics", "Video editing", "3D animation"]
  },
  {
    name: "Photography",
    projects: "2,890+ projects",
    icon: <FaCamera />,
    color: "#fffbe3",
    iconColor: "#fac85c",
    trending: false,
    description: "Capture stunning visuals for marketing, events, products, and personal moments with professional photography services.",
    keySkills: ["Adobe Lightroom", "Photoshop", "Portrait Photography", "Product Photography", "Event Photography"],
    avgSalary: "$35k - $70k",
    demand: "Medium",
    growthRate: "+12%",
    popularServices: ["Product photography", "Event photography", "Portrait sessions", "Real estate photography"]
  },
  {
    name: "Data Analysis",
    projects: "3,120+ projects",
    icon: <FaChartBar />,
    color: "#eafffa",
    iconColor: "#3cefcf",
    trending: true,
    description: "Transform raw data into actionable insights that drive business decisions and uncover growth opportunities through advanced analytics.",
    keySkills: ["Python", "R", "SQL", "Tableau", "Excel", "Machine Learning"],
    avgSalary: "$60k - $110k",
    demand: "Very High",
    growthRate: "+35%",
    popularServices: ["Business intelligence", "Data visualization", "Predictive analytics", "Database management"]
  },
];

function PopularCategories() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleCardFocus = (index) => {
    setFocusedCard(index);
  };

  const handleCardBlur = () => {
    setFocusedCard(null);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setHoveredCard(hoveredCard === index ? null : index);
    }
    if (event.key === 'Escape') {
      setHoveredCard(null);
      setFocusedCard(null);
    }
  };

  return (
    <div className="categories-container">
      <h2 className="categories-title">
        Popular <span className="highlight">Categories</span>
      </h2>
      <p className="categories-desc">
        Explore the most in-demand skills and services on our platform. Find the perfect category for your next project or expertise.
      </p>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div 
            className={`category-card ${(hoveredCard === index || focusedCard === index) ? 'expanded' : ''}`} 
            key={cat.name}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            onFocus={() => handleCardFocus(index)}
            onBlur={handleCardBlur}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
            role="button"
            aria-expanded={hoveredCard === index || focusedCard === index}
            aria-label={`${cat.name} category: ${cat.projects}, ${cat.demand} demand, ${cat.avgSalary} average salary. Press Enter or Space to expand details.`}
          >
            <div className="category-card-inner">
              {/* Basic Card Content */}
              <div className="category-basic-content">
                <div className="category-header">
                  <div
                    className="category-icon"
                    style={{ background: cat.color, color: cat.iconColor }}
                  >
                    {cat.icon}
                  </div>
                  {cat.trending && (
                    <div className="trending-badge" aria-label="Trending category">
                      <FaArrowUp aria-hidden="true" />
                      <span>Trending</span>
                    </div>
                  )}
                </div>
                <div className="category-name">{cat.name}</div>
                <div className="category-projects">{cat.projects}</div>
              </div>

              {/* Expanded Content */}
              <div className="category-expanded-content">
                <div className="category-description">
                  {cat.description}
                </div>

                <div className="category-stats">
                  <div className="stat-item">
                    <FaDollarSign className="stat-icon" />
                    <div className="stat-content">
                      <span className="stat-label">Average Salary</span>
                      <span className="stat-value">{cat.avgSalary}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaArrowUp className="stat-icon" />
                    <div className="stat-content">
                      <span className="stat-label">Growth Rate</span>
                      <span className="stat-value demand-high">{cat.growthRate}</span>
                    </div>
                  </div>
                </div>

                <div className="category-skills">
                  <h4>Key Skills</h4>
                  <div className="skills-list">
                    {cat.keySkills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                    {cat.keySkills.length > 3 && (
                      <span className="skill-tag more-skills">
                        +{cat.keySkills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="category-demand">
                  <span className={`demand-indicator ${cat.demand.toLowerCase().replace(' ', '-')}`}>
                    {cat.demand} Demand
                  </span>
                </div>

                <div className="popular-services">
                  <h4>Popular Services</h4>
                  <ul>
                    {cat.popularServices.slice(0, 3).map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="explore-category-btn" 
                  style={{borderColor: cat.iconColor, color: cat.iconColor}}
                  aria-label={`Explore ${cat.name} category opportunities`}
                >
                  Explore Category
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="categories-btn">Browse All Categories</button>
    </div>
  );
}

export default PopularCategories;