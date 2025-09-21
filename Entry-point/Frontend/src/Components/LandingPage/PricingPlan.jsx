import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../styles/PricingPlan.css";

const plans = [
  {
    name: "Basic",
    subtitle: "Perfect for getting started",
    price: "Free",
    period: "Forever",
    features: [
      "Create profile & portfolio",
      "Apply to unlimited jobs",
      "Basic messaging",
      "Standard support",
      "5% platform fee",
    ],
    button: { text: "Get Started Free", style: "outline" },
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "For growing freelancers",
    price: "$19",
    period: "per month",
    features: [
      "Everything in Basic",
      "Featured profile listing",
      "Advanced analytics",
      "Priority support",
      "3% platform fee",
      "Project management tools",
    ],
    button: { text: "Start Pro Trial", style: "solid" },
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "For large teams & organizations",
    price: "Custom",
    period: "Contact us",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "Custom contract terms",
      "Advanced security features",
    ],
    button: { text: "Contact Sales", style: "outline" },
    popular: false,
  },
];

function PricingPlans() {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">
        Choose Your <span className="highlight">Perfect Plan</span>
      </h2>
      <p className="pricing-desc">
        Start free and upgrade as you grow. All plans include our core features with transparent pricing and no hidden fees.
      </p>
      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <div
            className={`pricing-card${plan.popular ? " popular" : ""}`}
            key={plan.name}
          >
            {plan.popular && (
              <div className="popular-badge">
                <span>★ Most Popular</span>
              </div>
            )}
            <div className="plan-header">
              <div className="plan-name">{plan.name}</div>
              <div className="plan-subtitle">{plan.subtitle}</div>
            </div>
            <div className="plan-price">
              {plan.price}
              <span className="plan-period">{plan.period}</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`plan-btn ${plan.button.style === "solid" ? "solid" : "outline"}`}
            >
              {plan.button.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;