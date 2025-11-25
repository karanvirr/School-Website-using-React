import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">Contact Us</h1>
            <p className="hero-subtitle">We're Here to Help</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>Get in Touch</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-2xl)', maxWidth: 1200, margin: '0 auto'}}>
              <div style={{backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center'}}>
                <div style={{fontSize: 40, marginBottom: 'var(--space-md)'}}>📍</div>
                <h3>Location</h3>
                <p style={{color: 'var(--text-secondary)'}}>Village BhagoMajra<br/>District Mohali<br/>Punjab, India<br/>PIN: 140001</p>
              </div>
              <div style={{backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', textAlign: 'center'}}>
                <div style={{fontSize: 40, marginBottom: 'var(--space-md)'}}>📞</div>
                <h3>Phone</h3>
                <p style={{color: 'var(--text-secondary)'}}><a href="tel:+919876543210">+91 9876543210</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
