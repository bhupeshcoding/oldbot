import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom"; // Import Link from React Router

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Old Bot</h1>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="https://codesportfolio.netlify.app/">Home</a>
          </li>
          <li>
            <a href="https://codesportfolio.netlify.app/about">About</a>
          </li>
          <li>
            <a href="https://portfoliouk.vercel.app/">Portfolio</a>
          </li>
          <li>
            <a href="https://codesportfolio.netlify.app/reals">
              Reals Promotion
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bhupesh-joshi-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bhupeshcoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
         
          <li>
            <a
              href="https://snapchat-smoky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oldbot
            </a>
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Correct Link for routing */}
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
