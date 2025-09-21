import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">SolutionHu</div>
          <p className="footer-desc">
            The world's largest marketplace for digital services.<br />
            Connecting talented freelancers with clients worldwide.
          </p>
          <div className="footer-contact">
            <div>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:hello@skillhub.com">hello@skillhub.com</a>
            </div>
            <div>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:+254705103864">+254 705 103 864</a>
            </div>
            <div>
              <FaMapMarkerAlt className="footer-icon" />
              Nairobi Kenya
            </div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <div className="footer-link-title">Platform</div>
            <a href="#">How it Works</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Success Stories</a>
          </div>
          <div>
            <div className="footer-link-title">For Freelancers</div>
            <a href="#">Find Work</a>
            <a href="#">Create Profile</a>
            <a href="#">Freelancer Resources</a>
            <a href="#">Payment Protection</a>
          </div>
          <div>
            <div className="footer-link-title">For Clients</div>
            <a href="#">Post a Job</a>
            <a href="#">Find Talent</a>
            <a href="#">Client Resources</a>
            <a href="#">Enterprise Solutions</a>
          </div>
          <div>
            <div className="footer-link-title">Support</div>
            <a href="#">Help Center</a>
            <a href="#">Trust & Safety</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 SolutionHub. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;