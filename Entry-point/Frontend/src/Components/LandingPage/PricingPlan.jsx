import React, { useState } from "react";
import { FaClock, FaUsers, FaRocket, FaBuilding } from "react-icons/fa";
import "../../styles/LandingPage/PricingPlan.css";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for new freelancers",
    icon: <FaClock className="plan-icon" />,
    price: "Free",
    originalPrice: null,
    period: "Forever",
    yearlyPrice: "Free",
    yearlyOriginal: null,
    features: [
      "Create professional profile",
      "Apply to 10 projects/month", 
      "Basic portfolio showcase",
      "Community support",
      "Standard messaging",
      "8% platform fee"
    ],
    limitations: ["Limited project applications", "No featured listings"],
    button: { text: "Get Started Free", style: "outline" },
    popular: false,
    mostValue: false,
  },
  {
    name: "Professional",
    subtitle: "For active freelancers",
    icon: <FaUsers className="plan-icon" />,
    price: "$29",
    originalPrice: "$39",
    period: "per month",
    yearlyPrice: "$290",
    yearlyOriginal: "$348",
    features: [
      "Everything in Starter",
      "Unlimited project applications",
      "Featured profile listing",
      "Advanced portfolio tools",
      "Priority customer support",
      "Detailed analytics & insights",
      "5% platform fee",
      "Project collaboration tools"
    ],
    limitations: [],
    button: { text: "Start 14-Day Free Trial", style: "solid" },
    popular: true,
    mostValue: false,
  },
  {
    name: "Business",
    subtitle: "For growing agencies & teams",
    icon: <FaRocket className="plan-icon" />,
    price: "$79",
    originalPrice: "$99",
    period: "per month",
    yearlyPrice: "$790",
    yearlyOriginal: "$948",
    features: [
      "Everything in Professional",
      "Team collaboration features",
      "Client management system",
      "Advanced project tracking",
      "Custom branding options",
      "API access & integrations",
      "3% platform fee",
      "Dedicated account manager",
      "Advanced reporting tools"
    ],
    limitations: [],
    button: { text: "Start Free Trial", style: "solid" },
    popular: false,
    mostValue: true,
  },
  {
    name: "Enterprise",
    subtitle: "For large organizations",
    icon: <FaBuilding className="plan-icon" />,
    price: "Custom",
    originalPrice: null,
    period: "Contact us",
    yearlyPrice: "Custom",
    yearlyOriginal: null,
    features: [
      "Everything in Business",
      "Custom integrations",
      "White-label solution",
      "Advanced security & compliance",
      "Custom contract terms",
      "Dedicated support team",
      "1% platform fee",
      "Custom training & onboarding",
      "SLA guarantees"
    ],
    limitations: [],
    button: { text: "Contact Sales", style: "outline" },
    popular: false,
    mostValue: false,
  },
];

function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2 className="pricing-title">
          Choose Your <span className="highlight">Perfect Plan</span>
        </h2>
        <p className="pricing-desc">
          Start free and scale as you grow. Join thousands of successful freelancers and agencies.
        </p>
        
        <div className="billing-toggle">
          <span className={!isYearly ? "active" : ""}>Monthly</span>
          <div className="toggle-switch" onClick={() => setIsYearly(!isYearly)}>
            <div className={`toggle-slider ${isYearly ? "yearly" : ""}`}></div>
          </div>
          <span className={isYearly ? "active" : ""}>
            Yearly <span className="save-badge">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <div
            className={`pricing-card${plan.popular ? " popular" : ""}${plan.mostValue ? " best-value" : ""}`}
            key={plan.name}
          >
            {plan.popular && (
              <div className="popular-badge">
                <span>⭐ Most Popular</span>
              </div>
            )}
            {plan.mostValue && (
              <div className="value-badge">
                <span>🎯 Best Value</span>
              </div>
            )}

            <div className="plan-header">
              {plan.icon}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-subtitle">{plan.subtitle}</div>
            </div>

            <div className="plan-pricing">
              <div className="plan-price">
                {isYearly ? plan.yearlyPrice : plan.price}
                <span className="plan-period">
                  {plan.price === "Free" || plan.price === "Custom" 
                    ? plan.period 
                    : isYearly ? "per year" : plan.period}
                </span>
              </div>
              {((isYearly && plan.yearlyOriginal) || (!isYearly && plan.originalPrice)) && (
                <div className="original-price">
                  {isYearly ? plan.yearlyOriginal : plan.originalPrice}
                </div>
              )}
            </div>

            <ol className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  {feature}
                </li>
              ))}
            </ol>

            <button
              className={`plan-btn ${plan.button.style === "solid" ? "solid" : "outline"}`}
            >
              {plan.button.text}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="pricing-faq">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I change plans anytime?</h4>
            <p>Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at your next billing cycle.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a setup fee?</h4>
            <p>No setup fees, ever. What you see is what you pay. No hidden charges or surprise costs.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer refunds?</h4>
            <p>Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;