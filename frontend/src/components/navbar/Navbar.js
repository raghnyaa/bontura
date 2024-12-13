import React from "react";
import "./Navbar.css"; // Import the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side */}
      <div className="nabla-brand">BonTura</div>

      {/* Right Side */}
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#ingredients" className="nav-link">
            Ingredients
          </a>
        </li>
        <li className="nav-item">
          <a href="#kitchen-tips" className="nav-link">
            Kitchen Tips
          </a>
        </li>
        <li className="nav-item">
          <a href="#discussions" className="nav-link">
            Discussions
          </a>
        </li>
        <li className="nav-item">
          <a href="#about-us" className="nav-link">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="#login" className="nav-button login-button">
            Log In
          </a>
        </li>
        <li className="nav-item">
          <a href="/signup" className="nav-button signup-button">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
