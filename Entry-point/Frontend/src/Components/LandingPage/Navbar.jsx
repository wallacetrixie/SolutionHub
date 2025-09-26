import React, { useState } from "react";
import "../../styles/Navbar.css";
import logo from '../../assets/images/logo.jpg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
      event.preventDefault();
    }
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="SolutionHub Logo" className="logo-image" />
        <h2 className="logo-text">SolutionHub</h2>
      </div>

      {/* Centered Navigation Links */}
      <div className="navbar-center">
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home" tabIndex={0}>Home</a></li>
          <li><a href="#features" tabIndex={0}>Features</a></li>
          <li><a href="#howitworks" tabIndex={0}>How It Works</a></li>
          <li><a href="#pricing" tabIndex={0}>Pricing</a></li>
          <li><a href="#contact" tabIndex={0}>Contact</a></li>
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
