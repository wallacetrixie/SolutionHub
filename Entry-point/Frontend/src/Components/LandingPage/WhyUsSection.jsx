import React, { useEffect, useRef, useState } from 'react';
import { 
  FaBriefcase, 
  FaShieldAlt, 
  FaUsers, 
  FaCalendarAlt, 
  FaComments, 
  FaChartBar,
  FaStar,
  FaAward,
  FaDollarSign
} from 'react-icons/fa';
import '../../styles/WhyUs.css';

const WhyUsSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  const features = [
    {
      icon: FaBriefcase,
      title: 'Smart Job Matching',
      description: 'AI-powered job matching connects you with opportunities that perfectly match your skills, experience, and preferences for maximum success.',
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Escrow System',
      description: 'Military-grade security with smart escrow payments. Your funds are protected until project milestones are successfully completed.',
    },
    {
      icon: FaUsers,
      title: 'Verified Talent Network',
      description: 'Every professional undergoes rigorous verification including skills assessment, background checks, and portfolio validation.',
    },
    {
      icon: FaCalendarAlt,
      title: 'Advanced Project Tools',
      description: 'Comprehensive project management suite with milestone tracking, deadline automation, and progress visualization.',
    },
    {
      icon: FaComments,
      title: 'Real-time Collaboration',
      description: 'Seamless communication with instant messaging, video calls, file sharing, and collaborative workspaces.',
    },
    {
      icon: FaChartBar,
      title: 'Performance Analytics',
      description: 'Deep insights into your performance, earnings trends, client satisfaction, and growth opportunities with actionable recommendations.',
    },
  ];

  const stats = [
    { 
      value: '250K+', 
      label: 'Active Professionals',
      icon: FaUsers
    },
    { 
      value: '100K+', 
      label: 'Projects Delivered',
      icon: FaAward
    },
    { 
      value: '$50M+', 
      label: 'Earned by Freelancers',
      icon: FaDollarSign
    },
    { 
      value: '4.9', 
      label: 'Average Rating',
      icon: FaStar
    },
  ];

  const featureRefs = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    // Observe feature cards
    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });

    // Observe stats section
    if (statsRef.current) {
      statsRef.current.dataset.index = 'stats';
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Why Choose <span className="brand-highlight">SolutionHub</span>?
          </h2>
          <p className="section-description">
            Experience the future of freelancing with our cutting-edge platform designed for 
            success. Join thousands of professionals who've transformed their careers with us.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleItems.has(index);
            return (
              <div
                className={`feature-card ${isVisible ? 'animate-in' : ''}`}
                key={index}
                ref={el => featureRefs.current[index] = el}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="feature-icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-accent"></div>
              </div>
            );
          })}
        </div>

        <div 
          className={`stats-bar ${visibleItems.has('stats') ? 'animate-in' : ''}`}
          ref={statsRef}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div className="stat-item" key={index}>
                <div className="stat-icon">
                  <IconComponent size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;