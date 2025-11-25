import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Academics() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">Academics</h1>
            <p className="hero-subtitle">PSEB Aligned Curriculum | Modern Pedagogy</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>PSEB Affiliation</h2>
            <div style={{maxWidth: 900, margin: '0 auto', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--primary-blue)'}}>
              <p style={{fontSize: 18, lineHeight: 1.8, color: 'var(--text-secondary)'}}>Satluj Public School is proudly affiliated with the Punjab School Education Board (PSEB), ensuring our curriculum and assessment methods align with state standards and national educational guidelines.</p>
              <p style={{fontSize: 16, color: 'var(--text-secondary)'}}><strong>Affiliation Number:</strong> 1234567 | <strong>Recognition Date:</strong> 2024</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
