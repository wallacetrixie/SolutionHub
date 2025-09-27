import React, { useState, useCallback, useEffect, useMemo, memo } from "react";
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
  FaArrowRight,
  FaClock,
  FaLightbulb,
  FaInfoCircle,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Step, TabType, HowItWorksProps, StepCardProps } from "../../types/howItWorksTypes";
import { 
  useIntersectionObserver, 
  useAnalytics, 
  usePerformanceMonitor,
  useTabManager,
  useStepManager,
  useResponsive 
} from "../../hooks/useHowItWorks";


const stepsForClients: Step[] = [
  {
    number: 1,
    icon: <FaRegFileAlt />,
    title: "Post Your Job",
    desc: "Describe your project, set your budget, and define the skills you need.",
    detailedDesc: "Create a detailed project brief including scope, timeline, budget range, and required expertise. Our AI-powered matching system will help connect you with the right talent.",
    duration: "5-10 minutes",
    tips: [
      "Be specific about your requirements",
      "Set a realistic budget and timeline",
      "Include examples or references when possible"
    ]
  },
  {
    number: 2,
    icon: <FaSearch />,
    title: "Get Proposals",
    desc: "Review proposals from qualified freelancers and compare their expertise.",
    detailedDesc: "Receive tailored proposals from verified freelancers. Compare portfolios, ratings, and pricing to make informed decisions.",
    duration: "1-3 days",
    tips: [
      "Review portfolios carefully",
      "Check freelancer ratings and reviews",
      "Ask clarifying questions before hiring"
    ]
  },
  {
    number: 3,
    icon: <FaHandshake />,
    title: "Hire & Collaborate",
    desc: "Choose the best freelancer and start working together on your project.",
    detailedDesc: "Use our built-in collaboration tools including file sharing, milestone tracking, and real-time communication to ensure project success.",
    duration: "Project dependent",
    tips: [
      "Set clear milestones and deadlines",
      "Maintain regular communication",
      "Use our project management tools"
    ]
  },
  {
    number: 4,
    icon: <FaCreditCard />,
    title: "Pay Securely",
    desc: "Release payments through our secure escrow system when milestones are met.",
    detailedDesc: "Our secure payment system protects both parties. Funds are held in escrow and released upon milestone completion and approval.",
    duration: "Instant",
    tips: [
      "Review deliverables before payment release",
      "Use milestone payments for larger projects",
      "Leave feedback to help the community"
    ]
  },
];

const stepsForFreelancers: Step[] = [
  {
    number: 1,
    icon: <FaRegEye />,
    title: "Find Jobs",
    desc: "Browse available projects that match your skills and interests.",
    detailedDesc: "Use our advanced search and filtering system to find projects that align with your expertise. Get notifications for relevant opportunities.",
    duration: "Ongoing",
    tips: [
      "Set up job alerts for your skills",
      "Use filters to find quality projects",
      "Check client history and ratings"
    ]
  },
  {
    number: 2,
    icon: <FaRegEnvelope />,
    title: "Send Proposals",
    desc: "Submit proposals to clients and showcase your expertise.",
    detailedDesc: "Craft compelling proposals that highlight your relevant experience and demonstrate understanding of the client's needs.",
    duration: "15-30 minutes",
    tips: [
      "Personalize each proposal",
      "Showcase relevant portfolio items",
      "Propose clear timelines and deliverables"
    ]
  },
  {
    number: 3,
    icon: <FaTools />,
    title: "Work & Deliver",
    desc: "Collaborate with clients and deliver quality work on time.",
    detailedDesc: "Use our collaboration platform to manage projects, communicate with clients, and deliver exceptional results that build your reputation.",
    duration: "Project dependent",
    tips: [
      "Maintain professional communication",
      "Meet all agreed-upon deadlines",
      "Keep clients updated on progress"
    ]
  },
  {
    number: 4,
    icon: <FaMoneyCheckAlt />,
    title: "Get Paid",
    desc: "Receive payments securely once milestones are approved.",
    detailedDesc: "Get paid promptly through our secure payment system. Build your reputation with positive reviews and grow your freelance business.",
    duration: "1-3 business days",
    tips: [
      "Invoice promptly upon completion",
      "Maintain high quality standards",
      "Request reviews from satisfied clients"
    ]
  },
];

// Enhanced StepCard component with interactive features
const StepCard: React.FC<StepCardProps> = memo(({ 
  step, 
  index, 
  isActive = false, 
  onClick,
  showConnector = true,
  isLastStep = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trackEvent } = useAnalytics();
  usePerformanceMonitor(`StepCard-${step.number}`);
  
  const handleClick = useCallback(() => {
    onClick?.(step);
    setIsExpanded(!isExpanded);
    
    // Track step interaction
    trackEvent('step_card_interaction', {
      step_number: step.number,
      step_title: step.title,
      action: isExpanded ? 'collapse' : 'expand',
      event_category: 'user_interaction'
    });
  }, [onClick, step, isExpanded, trackEvent]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <div className="step-container">
      <div
        className={`howitworks-step fade-in ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}
        style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        aria-label={`Step ${step.number}: ${step.title}. Click to ${isExpanded ? 'collapse' : 'expand'} details.`}
      >
        <div className="howitworks-step-circle">
          <span>{step.number}</span>
        </div>
        <div className="howitworks-step-icon">{step.icon}</div>
        <h3 className="howitworks-step-title">{step.title}</h3>
        <p className="howitworks-step-desc">{step.desc}</p>
        
        {step.duration && (
          <div className="howitworks-step-duration">
            <FaClock />
            <span>{step.duration}</span>
          </div>
        )}
        
        <button 
          className="howitworks-step-expand"
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${step.title}`}
        >
          {isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          <span>{isExpanded ? 'Less' : 'More'}</span>
        </button>
        
        {isExpanded && (
          <div className="howitworks-step-details">
            {step.detailedDesc && (
              <div className="step-detailed-desc">
                <FaInfoCircle />
                <p>{step.detailedDesc}</p>
              </div>
            )}
            {step.tips && step.tips.length > 0 && (
              <div className="step-tips">
                <div className="tips-header">
                  <FaLightbulb />
                  <span>Pro Tips</span>
                </div>
                <ul>
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      
      {showConnector && !isLastStep && (
        <div className="step-connector">
          <FaArrowRight />
        </div>
      )}
    </div>
  );
});

// Main HowItWorks component
const HowItWorks: React.FC<HowItWorksProps> = ({
  className = "",
  defaultTab = "clients",
  onTabChange,
  showProgressConnectors = true,
  enableDetailedView = true,
  customSteps
}) => {
  // Performance monitoring
  usePerformanceMonitor('HowItWorks');
  
  // Enhanced hooks for better state management
  const { activeTab, changeTab } = useTabManager(defaultTab, 'howitworks-tab');
  const { activeStep, toggleStep } = useStepManager();
  const { targetRef, isIntersecting, hasIntersected } = useIntersectionObserver();
  const { trackEvent } = useAnalytics();
  const { isMobile, isTablet } = useResponsive();

  // Use custom steps if provided, otherwise use default steps
  const allSteps = useMemo(() => ({
    clients: customSteps?.clients || stepsForClients,
    freelancers: customSteps?.freelancers || stepsForFreelancers
  }), [customSteps]);

  const steps = allSteps[activeTab];

  // Handle tab change with analytics and callback
  const handleTabChange = useCallback((tab: TabType) => {
    changeTab(tab);
    onTabChange?.(tab);
    
    // Analytics tracking
    trackEvent('how_it_works_tab_change', {
      tab_name: tab,
      event_category: 'user_interaction'
    });
  }, [changeTab, onTabChange, trackEvent]);

  // Handle step interaction
  const handleStepClick = useCallback((step: Step) => {
    if (enableDetailedView) {
      toggleStep(step.number);
      
      // Analytics tracking
      trackEvent('how_it_works_step_click', {
        step_number: step.number,
        step_title: step.title,
        tab_name: activeTab,
        event_category: 'user_interaction'
      });
    }
  }, [enableDetailedView, activeTab, toggleStep, trackEvent]);

  return (
    <section 
      ref={targetRef}
      className={`howitworks-container ${className} ${hasIntersected ? 'visible' : ''}`}
      aria-label="How Solution Hub Works"
    >
      <div className="howitworks-content">
        <header className="howitworks-header">
          <h2 className="howitworks-title">
            How <span className="highlight">Solution Hub</span> Works
          </h2>
          <p className="howitworks-desc">
            Getting started is simple. Whether you're looking to hire talent or find work, our platform makes the process smooth and efficient.
          </p>
        </header>
        
        <div 
          className="howitworks-tabs"
          role="tablist"
          aria-label="Choose user type"
        >
          <button
            className={`howitworks-tab ${activeTab === "clients" ? "active" : ""}`}
            onClick={() => handleTabChange("clients")}
            role="tab"
            aria-selected={activeTab === "clients"}
            aria-controls="steps-panel"
            id="clients-tab"
          >
            For Clients
            <span className="tab-count">({allSteps.clients.length} steps)</span>
          </button>
          <button
            className={`howitworks-tab ${activeTab === "freelancers" ? "active" : ""}`}
            onClick={() => handleTabChange("freelancers")}
            role="tab"
            aria-selected={activeTab === "freelancers"}
            aria-controls="steps-panel"
            id="freelancers-tab"
          >
            For Freelancers
            <span className="tab-count">({allSteps.freelancers.length} steps)</span>
          </button>
        </div>
        
        <div 
          className="howitworks-steps"
          id="steps-panel"
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
        >
          {steps.map((step, idx) => (
            <StepCard
              key={`${activeTab}-${step.number}`}
              step={step}
              index={idx}
              isActive={activeStep === step.number}
              onClick={handleStepClick}
              showConnector={showProgressConnectors}
              isLastStep={idx === steps.length - 1}
            />
          ))}
        </div>
        
        <div className="howitworks-cta">
          <p className="cta-text">Ready to get started?</p>
          <div className="cta-buttons">
            <button className="cta-button primary">
              {activeTab === 'clients' ? 'Post a Job' : 'Find Work'}
            </button>
            <button className="cta-button secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;