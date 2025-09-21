import React, { useState } from "react";
import { FaEnvelope, FaCheck } from "react-icons/fa";
import "../../styles/Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscribe logic here
    setSubmitted(true);
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-icon">
        <FaEnvelope />
      </div>
      <h2 className="newsletter-title">
        Stay in the <span className="highlight">Loop</span>
      </h2>
      <p className="newsletter-desc">
        Get the latest freelancing tips, success stories, and platform updates delivered straight to your inbox. Join our community of 50,000+ subscribers.
      </p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitted}
        />
        <button type="submit" className="newsletter-btn" disabled={submitted}>
          {submitted ? "Subscribed" : "Subscribe"}
        </button>
      </form>
      <div className="newsletter-benefits">
        <span>
          <FaCheck className="benefit-icon" /> Weekly insights
        </span>
        <span>
          <FaCheck className="benefit-icon" /> No spam, ever
        </span>
        <span>
          <FaCheck className="benefit-icon" /> Unsubscribe anytime
        </span>
      </div>
      <hr className="newsletter-divider" />
      <div className="newsletter-companies">
        Join freelancers and clients from these companies:
        <div className="company-list">
          <span>Google</span>
          <span>Microsoft</span>
          <span>Apple</span>
          <span>Netflix</span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;