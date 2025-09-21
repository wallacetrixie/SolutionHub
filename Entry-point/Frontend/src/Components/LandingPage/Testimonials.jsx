import React, { useState } from "react";
import "../../styles/Testimonials.css";

const testimonials = [
  {
    name: "Wallace Wambulwa",
    role: "Freelancer",
    text: "SkillHub helped me connect with amazing clients and grow my freelance career. The platform is easy to use and payments are always secure.",
  },
  {
    name: "Mary Atieno",
    role: "Freelancer",
    text: "I love the variety of projects available. The proposal system makes it easy to showcase my skills and win jobs.",
  },
  {
    name: "Kevin Chokuta",
    role: "Freelancer",
    text: "SkillHub’s support team is fantastic! They helped me resolve issues quickly and ensured smooth collaboration with clients.",
  },
  {
    name: "Susan Mwangi",
    role: "Client",
    text: "Finding the right talent for my business was effortless. The escrow system gave me peace of mind throughout the project.",
  },
  {
    name: "David Kamau",
    role: "Client",
    text: "The platform is intuitive and efficient. I hired a freelancer within hours and the results exceeded my expectations.",
  },
];

// Helper to get initials
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">
        What Our <span className="highlight">Users Say</span>
      </h2>
      <p className="testimonial-desc">
        Hear from freelancers and clients who have found success on SkillHub.
      </p>
      <div className="testimonial-carousel">
        <button className="carousel-btn left" onClick={prevTestimonial} aria-label="Previous testimonial">
          &#8592;
        </button>
        <div className="testimonial-card">
          <div className="testimonial-profile">
            <div className={`profile-pic ${testimonials[current].role === "Client" ? "client" : "freelancer"}`}>
              {getInitials(testimonials[current].name)}
            </div>
            <div>
              <div className="testimonial-name">{testimonials[current].name}</div>
              <div className="testimonial-role">{testimonials[current].role}</div>
            </div>
          </div>
          <div className="testimonial-text">"{testimonials[current].text}"</div>
        </div>
        <button className="carousel-btn right" onClick={nextTestimonial} aria-label="Next testimonial">
          &#8594;
        </button>
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${current === idx ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;