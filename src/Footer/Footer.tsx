import React from "react";
import "./footer.css"; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/terms" className="footer-link">
              Terms
            </a>
            <a href="/privacy" className="footer-link">
              Privacy
            </a>
            <a href="/status" className="footer-link">
              Status
            </a>
            <a href="/pricing" className="footer-link">
              Pricing
            </a>
            <a href="/expert-services" className="footer-link">
              Expert Services
            </a>
            <a href="/blog" className="footer-link">
              Blog
            </a>
          </div>
          <div className="footer-copyright">
            <p>© 2025 GitHub, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
