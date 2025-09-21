import React  from "react";
import "../../styles/HeroSection.css";
import heroImage from './hero-illustration.png'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Connecting Freelancers with Clients Seamlessly</h1>
        <p className="hero-description">
          Join the world's largest marketplace for digital services. Find the perfect freelancer for your project or discover your next opportunity as a talented professional.
        </p>
        <div className="hero-buttons">
          <button className="cta-primary">Get Started</button>
          <button className="cta-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Freelancers collaborating" />
        <div className="hero-stats">
          <span className="stat yellow">100K+ Projects</span>
          <span className="stat blue">50K+ Freelancers</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
