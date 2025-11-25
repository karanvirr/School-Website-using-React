import React from 'react';

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About School</h3>
          <ul>
            <li><a href="#/about">About Us</a></li>
            <li><a href="#">Vision & Mission</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Achievements</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Academics</h3>
          <ul>
            <li><a href="#/academics">Curriculum</a></li>
            <li><a href="#/academics">PSEB Affiliation</a></li>
            <li><a href="#">Timetable</a></li>
            <li><a href="#">Results</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#/admission">Admissions</a></li>
            <li><a href="#/gallery">Gallery</a></li>
            <li><a href="#/staff">Staff</a></li>
            <li><a href="#/notices">Notices</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook" title="Facebook">f</a>
            <a href="#" aria-label="Twitter" title="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram" title="Instagram">📷</a>
            <a href="#" aria-label="YouTube" title="YouTube">▶</a>
          </div>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:info@satlujschool.edu">info@satlujschool.edu</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919876543210">+91 9876543210</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Satluj Public School, BhagoMajra. PSEB Affiliated. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
