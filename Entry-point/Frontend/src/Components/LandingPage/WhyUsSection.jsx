import React, { useEffect, useRef } from 'react';
import '../../styles/WhyUs.css';

const SkillHubSection = () => {
  const features = [
    {
      icon: '📦', // Replace with an actual icon component or image if needed
      title: 'Post & Find Jobs Easily',
      description: 'Create detailed job postings or browse thousands of opportunities. Our smart matching system connects the right people for every project.',
    },
    {
      icon: '🛡️', // Replace with an actual icon component or image if needed
      title: 'Secure Payments',
      description: 'Protected payments through escrow system. Funds are released only when milestones are completed to both parties\' satisfaction.',
    },
    {
      icon: '🧑‍🤝‍🧑', // Replace with an actual icon component or image if needed
      title: 'Verified Professionals',
      description: 'All freelancers and clients go through our verification process. Work with confidence knowing you\'re dealing with trusted individuals.',
    },
    {
      icon: '🗓️', // Replace with an actual icon component or image if needed
      title: 'Project Management Tools',
      description: 'Built-in tools for tracking progress, managing deadlines, and communicating effectively throughout your project lifecycle.',
    },
    {
  icon: '🤝',
  title: 'Collaboration Tools',
  description: 'Real-time chat, file sharing, and notifications keep your team connected and projects moving smoothly.',
},
{
  icon: '📊',
  title: 'Analytics & Insights',
  description: 'Track your performance, earnings, and project progress with built-in analytics dashboards.',
},
  ];

  const stats = [
    { value: '100K+', label: 'Active Users' },
    { value: '50K+', label: 'Projects Completed' },
    { value: '$10M+', label: 'Paid to Freelancers' },
    { value: '4.9⭐', label: 'Average Rating' },
  ];

  const featureRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      featureRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight - 60) {
            ref.classList.add(idx % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="skillhub-section">
      <div className="container">
        <h2 className="section-title">Why Choose <span className="skillhub-highlight">SolutionHub</span>?</h2>
        <p className="section-description">
          We've built everything you need to succeed in the freelance economy. From finding
          work to getting paid, we've got you covered.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              ref={el => featureRefs.current[index] = el}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillHubSection;