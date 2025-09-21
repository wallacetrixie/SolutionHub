import React, { useState } from "react";
import "../../styles/HowItWorks.css";
import {
  FaRegFileAlt,
  FaSearch,
  FaHandshake,
  FaCreditCard,
  FaRegEye,
  FaRegEnvelope,
  FaTools,
  FaMoneyCheckAlt,
} from "react-icons/fa";


const stepsForClients = [
  {
    number: 1,
    icon: <FaRegFileAlt />,
    title: "Post Your Job",
    desc: "Describe your project, set your budget, and define the skills you need.",
  },
  {
    number: 2,
    icon: <FaSearch />,
    title: "Get Proposals",
    desc: "Review proposals from qualified freelancers and compare their expertise.",
  },
  {
    number: 3,
    icon: <FaHandshake />,
    title: "Hire & Collaborate",
    desc: "Choose the best freelancer and start working together on your project.",
  },
  {
    number: 4,
    icon: <FaCreditCard />,
    title: "Pay Securely",
    desc: "Release payments through our secure escrow system when milestones are met.",
  },
];

const stepsForFreelancers = [
  {
    number: 1,
    icon: <FaRegEye />,
    title: "Find Jobs",
    desc: "Browse available projects that match your skills and interests.",
  },
  {
    number: 2,
    icon: <FaRegEnvelope />,
    title: "Send Proposals",
    desc: "Submit proposals to clients and showcase your expertise.",
  },
  {
    number: 3,
    icon: <FaTools />,
    title: "Work & Deliver",
    desc: "Collaborate with clients and deliver quality work on time.",
  },
  {
    number: 4,
    icon: <FaMoneyCheckAlt />,
    title: "Get Paid",
    desc: "Receive payments securely once milestones are approved.",
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState("clients");
  const steps = activeTab === "clients" ? stepsForClients : stepsForFreelancers;

  return (
    <div className="howitworks-container">
      <h2 className="howitworks-title">
        How <span className="highlight">Solution Hub</span> Works
      </h2>
      <p className="howitworks-desc">
        Getting started is simple. Whether you're looking to hire talent or find work, our platform makes the process smooth and efficient.
      </p>
      <div className="howitworks-tabs">
        <button
          className={`howitworks-tab ${activeTab === "clients" ? "active" : ""}`}
          onClick={() => setActiveTab("clients")}
        >
          For Clients
        </button>
        <button
          className={`howitworks-tab ${activeTab === "freelancers" ? "active" : ""}`}
          onClick={() => setActiveTab("freelancers")}
        >
          For Freelancers
        </button>
      </div>
      <div className="howitworks-steps">
        {steps.map((step, idx) => (
          <div
            className="howitworks-step fade-in"
            key={step.number}
            style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
          >
            <div className="howitworks-step-circle">{step.number}</div>
            <div className="howitworks-step-icon">{step.icon}</div>
            <h3 className="howitworks-step-title">{step.title}</h3>
            <p className="howitworks-step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;