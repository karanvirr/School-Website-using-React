import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">Satluj Public School</h1>
            <p className="hero-subtitle">Excellence in Education | PSEB Affiliated</p>
            <p className="hero-description">Nurturing young minds with modern pedagogy and traditional values</p>
            <div className="hero-cta">
              <a href="#/admission" className="btn btn-primary btn-lg">Apply Now</a>
              <a href="#/notices" className="btn btn-secondary btn-lg">Learn More</a>
            </div>
          </div>
          <div className="hero-background"></div>
        </section>

        <section className="quick-stats" aria-labelledby="stats-title">
          <h2 id="stats-title" className="sr-only">School Statistics</h2>
          <div className="stats-container">
            <div className="stat-card" role="doc-credit">
              <div className="stat-number">2024</div>
              <div className="stat-label">Year Founded</div>
            </div>
            <div className="stat-card" role="doc-credit">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card" role="doc-credit">
              <div className="stat-number">150</div>
              <div className="stat-label">Faculty Members</div>
            </div>
            <div className="stat-card" role="doc-credit">
              <div className="stat-number">25+</div>
              <div className="stat-label">Awards & Recognition</div>
            </div>
          </div>
        </section>

        <section className="notice-section" aria-labelledby="notice-title">
          <div className="container">
            <h2 id="notice-title">📢 Notice Board</h2>
            <div className="notice-board" id="noticeBoard" role="region" aria-label="Latest announcements">
              <div className="notice-carousel">
                <div className="notice-item active">
                  <span className="notice-date">Nov 24, 2024</span>
                  <span className="notice-text">Admission Form Extended Till December 15, 2024</span>
                </div>
                <div className="notice-item">
                  <span className="notice-date">Nov 22, 2024</span>
                  <span className="notice-text">Diwali Vacation: November 1-5 | School Reopens on November 6</span>
                </div>
                <div className="notice-item">
                  <span className="notice-date">Nov 20, 2024</span>
                  <span className="notice-text">Parent-Teacher Meeting: November 15 @ 3:00 PM in Assembly Hall</span>
                </div>
              </div>
              <div className="notice-controls">
                <button className="notice-btn" id="noticePrev" aria-label="Previous notice">❮</button>
                <div className="notice-indicators" role="tablist">
                  <button role="tab" aria-selected="true" tabIndex="0"></button>
                  <button role="tab" tabIndex="-1"></button>
                  <button role="tab" tabIndex="-1"></button>
                </div>
                <button className="notice-btn" id="noticeNext" aria-label="Next notice">❯</button>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us" aria-labelledby="why-title">
          <div className="container">
            <h2 id="why-title">Why Choose Satluj?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>PSEB Aligned</h3>
                <p>Complete alignment with Punjab School Education Board curriculum with modern teaching methods</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🏫</div>
                <h3>Expert Faculty</h3>
                <p>Highly qualified teachers with years of experience in their respective fields</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏫</div>
                <h3>Modern Facilities</h3>
                <p>State-of-the-art infrastructure including smart classrooms and digital labs</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Value Education</h3>
                <p>Focus on character building alongside academic excellence and personal growth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="latest-updates" aria-labelledby="updates-title">
          <div className="container">
            <h2 id="updates-title">Latest Updates</h2>
            <div className="updates-grid">
              <article className="update-card">
                <div className="update-image"></div>
                <div className="update-content">
                  <span className="update-date">Nov 20, 2024</span>
                  <h3>Inter-School Debate Competition</h3>
                  <p>Our students showcased excellent oratory skills at the regional debate competition, winning silver medal...</p>
                  <a href="#/notices" className="read-more">Read More →</a>
                </div>
              </article>
              <article className="update-card">
                <div className="update-image"></div>
                <div className="update-content">
                  <span className="update-date">Nov 15, 2024</span>
                  <h3>Science Fair Success</h3>
                  <p>Outstanding projects from our young scientists demonstrated innovation and scientific thinking...</p>
                  <a href="#/notices" className="read-more">Read More →</a>
                </div>
              </article>
              <article className="update-card">
                <div className="update-image"></div>
                <div className="update-content">
                  <span className="update-date">Nov 10, 2024</span>
                  <h3>Sports Day Announcement</h3>
                  <p>Annual sports day scheduled for November 30. All students invited to participate in exciting events...</p>
                  <a href="#/notices" className="read-more">Read More →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-title">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-title">Ready to Join Satluj Public School?</h2>
              <p>Start your journey to excellence. Apply now for the upcoming academic session.</p>
              <div className="cta-buttons">
                <a href="#/admission" className="btn btn-primary btn-lg">Start Admission</a>
                <a href="#/contact" className="btn btn-secondary btn-lg">Get in Touch</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <button className="back-to-top" id="backToTop" aria-label="Back to top" style={{display: 'none'}}>↑</button>
    </div>
  );
}
