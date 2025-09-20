import React, { useState } from "react";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Logo */}
      <div className="navbar-logo">
        <h2>SolutionHub</h2>
      </div>

      {/* Centered Navigation Links */}
      <div className="navbar-center">
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#howitworks">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="navbar-auth">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
