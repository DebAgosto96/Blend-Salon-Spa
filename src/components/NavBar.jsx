import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <header className="navbar">
      {/* Brand */}
      <Link to="/" className="brand">
        <span className="brand-main">BLEND</span>
        <span className="brand-sub">SALON & SPA</span>
      </Link>

      {/* Navigation */}
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#team">Our Team</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default NavBar;