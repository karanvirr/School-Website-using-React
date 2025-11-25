import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Staff() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">Staff Directory</h1>
            <p className="hero-subtitle">Meet Our Dedicated Faculty</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container">
            <div style={{maxWidth: 800, margin: '0 auto', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)'}}>
              <input type="text" id="staffSearch" placeholder="Search by name..." style={{padding: 'var(--space-md)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)'}} />
            </div>

            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>Faculty Members</h2>
            <div className="staff-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-lg)', maxWidth: 1200, margin: '0 auto'}}>
              <div className="staff-card" data-department="English">
                <div style={{width: '100%', height: 150, backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, marginBottom: 'var(--space-md)'}}>👩‍🏫</div>
                <h3>Ms. Gurpreet Kaur</h3>
                <p style={{color: 'var(--text-secondary)'}}>English Teacher</p>
              </div>
              <div className="staff-card" data-department="Mathematics">
                <div style={{width: '100%', height: 150, backgroundColor: 'var(--success-green)', opacity: 0.2, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, marginBottom: 'var(--space-md)'}}>👨‍🏫</div>
                <h3>Mr. Rajiv Verma</h3>
                <p style={{color: 'var(--text-secondary)'}}>Mathematics Teacher</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
