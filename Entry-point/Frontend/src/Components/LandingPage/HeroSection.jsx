import React, { useState, useEffect } from "react";
import "../../styles/HeroSection.css";
import heroImage from '../../assets/images/HeroSection.jpg'; 

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const categories = [
    'Web Development',
    'Graphic Design', 
    'Content Writing',
    'Digital Marketing',
    'Mobile Development',
    'Data Analysis',
    'UI/UX Design',
    'Video Editing',
    'SEO & Marketing',
    'Business Consulting',
    'Translation Services',
    'Photography'
  ];

  const rotatingStats = [
    { number: "50K+", label: "Active Professionals", icon: "👥" },
    { number: "10K+", label: "Projects Completed", icon: "✅" },
    { number: "95%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Global Support", icon: "🌍" }
  ];

  // Rotate stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % rotatingStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() || selectedCategory) {
      // Placeholder functionality - would navigate to explore page
      console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
      alert(`Searching for "${searchTerm}" in ${selectedCategory || 'All Categories'}`);
    }
  };

  const handleHireTalent = () => {
    // Would navigate to client signup/browse freelancers
    console.log('Navigate to hire talent page');
    alert('Redirecting to hire talent page...');
  };

  const handleFindWork = () => {
    // Would navigate to freelancer signup/browse jobs
    console.log('Navigate to find work page');
    alert('Redirecting to find work page...');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Trust Badge */}

        {/* Main Headlines */}
        <h1 className="hero-title">
          Your Success Story Starts{" "}
          <span className="gradient-blue">Here</span>
        </h1>
        
        <p className="hero-description">
          Connect with top-tier freelancers or find your next big opportunity. 
          SolutionHub empowers professionals and businesses to achieve more together 
          with secure payments, quality assurance, and 24/7 support.
        </p>

   
        {/* Dual CTAs */}
        <div className="hero-buttons">
          <button className="cta-hire" onClick={handleHireTalent}>
            <span className="btn-icon">�</span>
            <span className="btn-text">
              <span className="btn-main">Hire Expert Talent</span>
              <span className="btn-sub">Browse 50K+ professionals</span>
            </span>
          </button>
          <button className="cta-work" onClick={handleFindWork}>
            <span className="btn-icon">💼</span>
            <span className="btn-text">
              <span className="btn-main">Find Great Work</span>
              <span className="btn-sub">Join thousands of freelancers</span>
            </span>
          </button>
        </div>

        {/* Enhanced Search Section */}
        <div className="hero-search-section">
          <h3 className="search-title">What service do you need today?</h3>
          <form onSubmit={handleSearch} className="hero-search-form">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="e.g., Logo design, Website development, Content writing..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="hero-search-input"
              />
            </div>
            <div className="search-controls">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="hero-category-select"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button type="submit" className="hero-search-btn">
                <span>Search Talent</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
          <div className="popular-searches">
            <span className="popular-label">Popular:</span>
            <div className="popular-tags">
              <span className="popular-tag">Logo Design</span>
              <span className="popular-tag">Website Development</span>
              <span className="popular-tag">Content Writing</span>
              <span className="popular-tag">Mobile Apps</span>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Display */}
        <div className="hero-stats-dynamic">
          <div className="rotating-stat">
            <span className="stat-icon">{rotatingStats[currentStatIndex].icon}</span>
            <div className="stat-content">
              <span className="stat-number">{rotatingStats[currentStatIndex].number}</span>
              <span className="stat-label">{rotatingStats[currentStatIndex].label}</span>
            </div>
          </div>
          <div className="stat-indicators">
            {rotatingStats.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentStatIndex ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Hero Visual */}
      <div className="hero-visual">
        <div className="hero-image-container">
          <img src={heroImage} alt="Professional freelancers collaborating with clients on SolutionHub" />
          
          {/* Enhanced floating cards with animations */}
          <div className="floating-card card-rating">
            <div className="card-header">
              <span className="card-icon">⭐</span>
              <span className="card-title">Excellent</span>
            </div>
            <div className="card-content">
              <span className="card-stars">★★★★★</span>
              <span className="card-subtitle">4.9/5 from 10K+ reviews</span>
            </div>
          </div>

          <div className="floating-card card-delivery">
            <div className="card-header">
              <span className="card-icon">🚀</span>
              <span className="card-title">Fast Delivery</span>
            </div>
            <div className="card-content">
              <span className="card-subtitle">Projects delivered on time</span>
            </div>
          </div>

          <div className="floating-card card-projects">
            <div className="card-header">
              <span className="card-icon">📊</span>
              <span className="card-title">Live Projects</span>
            </div>
            <div className="card-content">
              <span className="card-number">1,247</span>
              <span className="card-subtitle">Active right now</span>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
