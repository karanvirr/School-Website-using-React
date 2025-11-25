import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">Dashboard</h1>
            <p className="hero-subtitle">Student / Staff Login Area (Placeholder)</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>Welcome</h2>
            <p style={{textAlign: 'center', color: 'var(--text-secondary)'}}>This area can be integrated with authentication and dashboard functionality.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
