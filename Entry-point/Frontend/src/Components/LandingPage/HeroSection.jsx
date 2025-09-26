import React, { useState } from "react";
import "../../styles/HeroSection.css";
import heroImage from '../../assets/images/HeroSection.jpg'; 

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Web Development',
    'Graphic Design', 
    'Content Writing',
    'Digital Marketing',
    'Mobile Development',
    'Data Analysis',
    'UI/UX Design',
    'Video Editing'
  ];

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
        <div className="hero-badge">
          🏆 #1 Trusted Freelancing Platform
        </div>

        {/* Main Headlines */}
        <h1 className="hero-title">
          Connecting Freelancers with{" "}
          <span className="gradient-blue">Clients Seamlessly</span>
        </h1>
        
        <p className="hero-description">
          Join thousands of professionals and businesses building success together. 
          Whether you're looking to hire expert talent or showcase your skills, 
          SolutionHub is your gateway to unlimited opportunities.
        </p>

        {/* Dual CTAs */}
        <div className="hero-buttons">
          <button className="cta-hire" onClick={handleHireTalent}>
            <span className="btn-icon">👥</span>
            Hire Talent
          </button>
          <button className="cta-work" onClick={handleFindWork}>
            <span className="btn-icon">💼</span>
            Find Work
          </button>
        </div>

        {/* Search/Explore Bar */}
        <div className="hero-search">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <input
                type="text"
                placeholder="What service are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button type="submit" className="search-btn">
                🔍 Search
              </button>
            </div>
          </form>
        </div>

        {/* Stats Highlights */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Freelancers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects Monthly</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Trusted Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="hero-image">
        <img src={heroImage} alt="Freelancers and clients collaborating successfully" />
        
        {/* Floating stats for visual interest */}
        <div className="floating-card top-left">
          <span className="card-emoji">⭐</span>
          <span className="card-text">4.9/5 Rating</span>
        </div>
        <div className="floating-card bottom-right">
          <span className="card-emoji">🚀</span>
          <span className="card-text">Fast Delivery</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
