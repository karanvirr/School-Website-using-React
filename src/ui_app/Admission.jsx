import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Admission() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">Admissions 2024-25</h1>
            <p className="hero-subtitle">Join Our Community of Learners</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>Eligibility Criteria</h2>
            <div style={{maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)'}}>
              <div style={{backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)'}}>
                <h3>Kindergarten</h3>
                <p style={{color: 'var(--text-secondary)'}}><strong>Age:</strong> 3-4 years</p>
                <p style={{color: 'var(--text-secondary)'}}><strong>Documents:</strong> Birth certificate, vaccination records</p>
              </div>
              <div style={{backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)'}}>
                <h3>Class I</h3>
                <p style={{color: 'var(--text-secondary)'}}><strong>Age:</strong> 5-6 years</p>
                <p style={{color: 'var(--text-secondary)'}}><strong>Aptitude Test:</strong> Basic skills assessment</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
