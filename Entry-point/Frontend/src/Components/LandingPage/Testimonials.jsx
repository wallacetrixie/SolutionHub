import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheckCircle, FaPlay, FaPause, FaFilter } from "react-icons/fa";
import "../../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Wallace Wambulwa",
    role: "Full-Stack Developer",
    userType: "Freelancer",
    company: "TechSolutions Ltd",
    location: "Nairobi, Kenya",
    rating: 5.0,
    verified: true,
    projectType: "Web Development",
    projectValue: "$15,000",
    completedProjects: 47,
    memberSince: "2023",
    text: "SolutionHub transformed my freelance career completely. The quality of clients and projects is exceptional, and the secure payment system gives me confidence in every transaction.",
    achievement: "Top Rated Plus",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Mary Atieno",
    role: "UI/UX Designer",
    userType: "Freelancer",
    company: "Creative Studio",
    location: "Mombasa, Kenya",
    rating: 4.9,
    verified: true,
    projectType: "Design & Creative",
    projectValue: "$8,500",
    completedProjects: 32,
    memberSince: "2022",
    text: "The variety and quality of design projects on SolutionHub is outstanding. I've worked with international clients and built an amazing portfolio. The proposal system is intuitive and effective.",
    achievement: "Rising Talent",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Kevin Chokuta",
    role: "Digital Marketing Specialist",
    userType: "Freelancer",
    company: "MarketPro Agency",
    location: "Kisumu, Kenya",
    rating: 4.8,
    verified: true,
    projectType: "Digital Marketing",
    projectValue: "$12,000",
    completedProjects: 28,
    memberSince: "2023",
    text: "SolutionHub's support team is world-class! They helped me navigate complex projects and maintain excellent client relationships. The collaboration tools are fantastic.",
    achievement: "Expert Verified",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Susan Mwangi",
    role: "CEO & Founder",
    userType: "Client",
    company: "EcoTech Innovations",
    location: "Nairobi, Kenya",
    rating: 5.0,
    verified: true,
    projectType: "Mobile Development",
    projectValue: "$25,000",
    completedProjects: 8,
    memberSince: "2022",
    text: "Finding top-tier talent for our startup was seamless on SolutionHub. The escrow system and milestone-based payments provided security and transparency throughout our mobile app development.",
    achievement: "Verified Client",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "David Kamau",
    role: "Operations Manager",
    userType: "Client",
    company: "RetailMax Corporation",
    location: "Nakuru, Kenya",
    rating: 4.9,
    verified: true,
    projectType: "Data Analysis",
    projectValue: "$18,500",
    completedProjects: 15,
    memberSince: "2021",
    text: "The platform exceeded our expectations in every way. We hired a data analyst within hours and received insights that drove 40% revenue growth. Exceptional quality and professionalism.",
    achievement: "Enterprise Client",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    date: "2 days ago"
  },
  {
    id: 6,
    name: "Grace Njeri",
    role: "Content Marketing Manager",
    userType: "Freelancer",
    company: "ContentCraft Hub",
    location: "Eldoret, Kenya",
    rating: 4.7,
    verified: true,
    projectType: "Content Writing",
    projectValue: "$6,800",
    completedProjects: 56,
    memberSince: "2023",
    text: "SolutionHub opened doors to premium content projects I never thought possible. The client feedback system helps me continuously improve, and the earning potential is incredible.",
    achievement: "Content Expert",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    date: "5 days ago"
  }
];

// Helper functions
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="star filled" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="star half" />);
  }

  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
  }

  return stars;
}

function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filter, setFilter] = useState("All");
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, current]);

  // Filter testimonials
  const filteredTestimonials = filter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.userType === filter);

  // Reset current index when filter changes
  useEffect(() => {
    setCurrent(0);
  }, [filter]);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevTestimonial();
    if (e.key === 'ArrowRight') nextTestimonial();
    if (e.key === ' ') {
      e.preventDefault();
      toggleAutoPlay();
    }
  };

  if (filteredTestimonials.length === 0) {
    return <div>No testimonials found for the selected filter.</div>;
  }

  const currentTestimonial = filteredTestimonials[current];

  return (
    <div 
      className="testimonial-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="testimonial-header">
        <div className="title-section">
          <h2 className="testimonial-title">
            What Our <span className="highlight">Community Says</span>
          </h2>
          <p className="testimonial-desc">
            Discover success stories from freelancers and clients who've transformed their careers and businesses on SolutionHub.
          </p>
        </div>

        <div className="testimonial-controls">
          <div className="filter-controls">
            <FaFilter className="filter-icon" />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
              aria-label="Filter testimonials by user type"
            >
              <option value="All">All Users</option>
              <option value="Freelancer">Freelancers</option>
              <option value="Client">Clients</option>
            </select>
          </div>

          <button 
            className="autoplay-btn" 
            onClick={toggleAutoPlay}
            aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
          >
            {isAutoPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>

      <div className="testimonial-carousel">
        <button 
          className="carousel-btn left" 
          onClick={prevTestimonial} 
          aria-label="Previous testimonial"
          disabled={filteredTestimonials.length <= 1}
        >
          &#8592;
        </button>

        <div className="testimonial-card-container">
          <div className="testimonial-card">
            {/* Profile Section */}
            <div className="testimonial-profile">
              <div className="profile-image-container">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={`${currentTestimonial.name} profile`}
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className={`profile-pic-fallback ${currentTestimonial.userType === "Client" ? "client" : "freelancer"}`}
                  style={{display: 'none'}}
                >
                  {getInitials(currentTestimonial.name)}
                </div>
                {currentTestimonial.verified && (
                  <div className="verified-badge">
                    <FaCheckCircle />
                  </div>
                )}
              </div>

              <div className="profile-info">
                <div className="name-section">
                  <h3 className="testimonial-name">{currentTestimonial.name}</h3>
                  <span className="achievement-badge">{currentTestimonial.achievement}</span>
                </div>
                <p className="testimonial-role">{currentTestimonial.role}</p>
                <p className="company-location">
                  {currentTestimonial.company} • {currentTestimonial.location}
                </p>
                
                <div className="rating-section">
                  <div className="stars">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                  <span className="rating-number">{currentTestimonial.rating}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="testimonial-content">
              <blockquote className="testimonial-text">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="testimonial-stats">
                <div className="stat-item">
                  <span className="stat-label">Project Value</span>
                  <span className="stat-value">{currentTestimonial.projectValue}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Projects Completed</span>
                  <span className="stat-value">{currentTestimonial.completedProjects}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Member Since</span>
                  <span className="stat-value">{currentTestimonial.memberSince}</span>
                </div>
              </div>

              <div className="project-info">
                <span className="project-type">{currentTestimonial.projectType}</span>
                <span className="date">{currentTestimonial.date}</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          className="carousel-btn right" 
          onClick={nextTestimonial} 
          aria-label="Next testimonial"
          disabled={filteredTestimonials.length <= 1}
        >
          &#8594;
        </button>
      </div>

      {/* Progress indicator */}
      <div className="progress-container">
        <div className="carousel-dots">
          {filteredTestimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${current === idx ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {isAutoPlaying && (
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{
                animationDuration: isHovered ? 'paused' : '4s',
                animationPlayState: isHovered ? 'paused' : 'running'
              }}
            />
          </div>
        )}
      </div>

      <div className="testimonial-summary">
        <div className="summary-stats">
          <div className="summary-item">
            <span className="summary-number">10,000+</span>
            <span className="summary-label">Happy Users</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">4.9</span>
            <span className="summary-label">Average Rating</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">98%</span>
            <span className="summary-label">Success Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;