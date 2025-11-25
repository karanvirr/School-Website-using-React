import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#/" aria-label="Satluj Public School - Home">
            <span className="logo-text">🏫 SATLUJ</span>
          </a>
        </div>

        <button className="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="nav-menu" id="navMenu" role="menubar">
          <li><a href="#/">Home</a></li>
          <li><a href="#/about">About</a></li>
          <li><a href="#/academics">Academics</a></li>
          <li><a href="#/admission">Admission</a></li>
          <li><a href="#/staff">Staff</a></li>
          <li><a href="#/gallery">Gallery</a></li>
          <li><a href="#/notices">Notices</a></li>
          <li><a href="#/contact">Contact</a></li>
        </ul>

        <div className="navbar-right">
          <div className="search-bar" id="searchBar">
            <input type="text" placeholder="Search..." aria-label="Search website" id="searchInput" />
            <button aria-label="Submit search"><span>🔍</span></button>
          </div>

          <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode" title="Dark Mode">
            <span id="themeIcon">🌙</span>
          </button>

          <a href="#/dashboard" className="btn btn-primary btn-sm">
            <span>👤 Login</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
