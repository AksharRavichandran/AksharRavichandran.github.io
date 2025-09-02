import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="nav-inner">
        <h1 className="logo">Akshar Ravichandran</h1>
        <ul className="nav-links">
          <li><Link to="hero" smooth duration={600} offset={-80}>Home</Link></li>
          <li><Link to="about" smooth duration={600} offset={-80}>About</Link></li>
          <li><Link to="experience" smooth duration={600} offset={-80}>Experience</Link></li>
          <li><Link to="projects" smooth duration={600} offset={-80}>Projects</Link></li>
          <li><Link to="footer" smooth duration={600} offset={-80}>Contact</Link></li>
        </ul>
      </div>
      <div className="neon-underline" />
    </nav>
  );
}
