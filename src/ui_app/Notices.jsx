import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Notices() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">Notices & Announcements</h1>
            <p className="hero-subtitle">Stay Updated With Latest News</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container" style={{maxWidth: 900}}>
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>📌 Important Notices</h2>
            <div style={{display: 'grid', gap: 'var(--space-lg)'}}>
              <div style={{backgroundColor: 'var(--warning-orange)', opacity: 0.1, borderLeft: '4px solid var(--warning-orange)', padding: 'var(--space-lg)', borderRadius: '6px'}}>
                <h3 style={{color: 'var(--warning-orange)'}}>⚠️ Admission Form Extended</h3>
                <p style={{color: 'var(--text-secondary)'}}>Application deadline extended to December 15, 2024 for all classes</p>
              </div>
              <div style={{backgroundColor: 'var(--info-teal)', opacity: 0.1, borderLeft: '4px solid var(--info-teal)', padding: 'var(--space-lg)', borderRadius: '6px'}}>
                <h3 style={{color: 'var(--info-teal)'}}>🎉 Diwali Vacation</h3>
                <p style={{color: 'var(--text-secondary)'}}>School remains closed on November 1-5. Regular classes resume on November 6</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
