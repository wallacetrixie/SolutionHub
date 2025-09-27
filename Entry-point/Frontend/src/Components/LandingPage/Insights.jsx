import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import "../../styles/LandingPage/Insights.css";

const insights = [
  {
    category: "Freelancing",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    title: "10 Essential Tips for Freelance Success in 2024",
    desc: "Discover the latest strategies to grow your freelance business and attract high-quality clients in today's competitive market.",
    readTime: "5 min read",
    link: "#",
  },
  {
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    author: "Mike Chen",
    date: "Dec 12, 2024",
    title: "How to Build a Winning Freelancer Portfolio",
    desc: "Learn the key elements that make a portfolio stand out and convert visitors into paying clients.",
    readTime: "7 min read",
    link: "#",
  },
  {
    category: "Client Relations",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    author: "Emily Rodriguez",
    date: "Dec 10, 2024",
    title: "Client Communication: The Secret to Long-term Success",
    desc: "Master the art of client communication to build lasting relationships and secure repeat business.",
    readTime: "6 min read",
    link: "#",
  },
];

function Insights() {
  return (
    <div className="insights-container">
      <h2 className="insights-title">
        Latest <span className="highlight">Insights</span>
      </h2>
      <p className="insights-desc">
        Stay ahead with expert advice, success stories, and industry insights from the SkillHub community.
      </p>
      <div className="insights-grid">
        {insights.map((item, idx) => (
          <div className="insight-card" key={idx}>
            <div className="insight-image-wrapper">
              <img src={item.image} alt={item.title} className="insight-image" />
              <span className="insight-category">{item.category}</span>
            </div>
            <div className="insight-content">
              <div className="insight-meta">
                <span className="meta-author">
                  <FaUser className="meta-icon" /> {item.author}
                </span>
                <span className="meta-date">
                  <FaCalendarAlt className="meta-icon" /> {item.date}
                </span>
              </div>
              <div className="insight-title">{item.title}</div>
              <div className="insight-desc">{item.desc}</div>
              <div className="insight-footer">
                <span className="insight-read">{item.readTime}</span>
                <a href={item.link} className="insight-link">
                  Read More <FaArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Insights;