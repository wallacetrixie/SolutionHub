import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import "../../styles/LandingPage/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-text">SolutionHub</span>
            <div className="logo-tagline">Connect • Create • Succeed</div>
          </div>
          <p className="footer-desc">
            The world's largest marketplace for digital services.<br />
            Connecting talented freelancers with clients worldwide.
          </p>
          <div className="footer-contact">
            <div className="contact-item">
              <FaEnvelope className="footer-icon" />
              <a href="mailto:hello@skillhub.com">hello@skillhub.com</a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:+254705103864">+254 705 103 864</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="footer-icon" />
              <span>Nairobi, Kenya</span>
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
          <div className="footer-link-column">
            <div className="footer-link-title">Platform</div>
            <a href="#" className="footer-link-item">
              <span>How it Works</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Features</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Pricing</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Success Stories</span>
              <FaArrowRight className="link-arrow" />
            </a>
          </div>
          <div className="footer-link-column">
            <div className="footer-link-title">For Freelancers</div>
            <a href="#" className="footer-link-item">
              <span>Find Work</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Create Profile</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Freelancer Resources</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Payment Protection</span>
              <FaArrowRight className="link-arrow" />
            </a>
          </div>
          <div className="footer-link-column">
            <div className="footer-link-title">For Clients</div>
            <a href="#" className="footer-link-item">
              <span>Post a Job</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Find Talent</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Client Resources</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Enterprise Solutions</span>
              <FaArrowRight className="link-arrow" />
            </a>
          </div>
          <div className="footer-link-column">
            <div className="footer-link-title">Support</div>
            <a href="#" className="footer-link-item">
              <span>Help Center</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Trust & Safety</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Terms of Service</span>
              <FaArrowRight className="link-arrow" />
            </a>
            <a href="#" className="footer-link-item">
              <span>Privacy Policy</span>
              <FaArrowRight className="link-arrow" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <span className="copyright">© 2025 SolutionHub. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;