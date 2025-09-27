import React, { useState, useEffect } from "react";
import "../../styles/LandingPage/Navbar.css";
import logo from '../../assets/images/logo.jpg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
      event.preventDefault();
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking a link
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  // Detect which section is currently in view and scroll state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'whyus', 'howitworks', 'pricing', 'footer'];
      const scrollPosition = window.scrollY + 100;
      
      // Update scroll state for navbar appearance
      setIsScrolled(window.scrollY > 50);

      // Calculate and update scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / documentHeight) * 100;
      document.documentElement.style.setProperty('--scroll-progress', `${Math.min(scrollProgress, 100)}%`);

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="SolutionHub Logo" className="logo-image" />
        <h2 className="logo-text">SolutionHub</h2>
      </div>

      {/* Centered Navigation Links */}
      <div className="navbar-center">
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <a 
              href="#hero" 
              tabIndex={0} 
              onClick={(e) => handleNavClick(e, 'hero')}
              className={activeSection === 'hero' ? 'active-link' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#whyus" 
              tabIndex={0} 
              onClick={(e) => handleNavClick(e, 'whyus')}
              className={activeSection === 'whyus' ? 'active-link' : ''}
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#howitworks" 
              tabIndex={0} 
              onClick={(e) => handleNavClick(e, 'howitworks')}
              className={activeSection === 'howitworks' ? 'active-link' : ''}
            >
              How It Works
            </a>
          </li>
          <li>
            <a 
              href="#pricing" 
              tabIndex={0} 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className={activeSection === 'pricing' ? 'active-link' : ''}
            >
              Pricing
            </a>
          </li>
          <li>
            <a 
              href="#footer" 
              tabIndex={0} 
              onClick={(e) => handleNavClick(e, 'footer')}
              className={activeSection === 'footer' ? 'active-link' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="navbar-auth">
        <button className="login-btn" aria-label="Login">Login</button>
        <button className="signup-btn" aria-label="Sign Up">Sign Up</button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div 
        className={`menu-toggle ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        onKeyDown={handleKeyPress}
        aria-label="Toggle menu" 
        aria-expanded={isOpen} 
        role="button" 
        tabIndex={0}
      >
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>
    </nav>
  );
};

export default Navbar;
