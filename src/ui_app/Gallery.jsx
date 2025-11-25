import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">School Gallery</h1>
            <p className="hero-subtitle">Moments of Excellence & Joy</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container">
            <div style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>
              <div style={{display: 'flex', justifyContent: 'center', gap: 'var(--space-md)'}}>
                <button className="btn btn-primary">All</button>
                <button className="btn btn-secondary">Events</button>
                <button className="btn btn-secondary">Infrastructure</button>
              </div>
            </div>

            <div className="gallery-grid" style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16}}>
              <div className="gallery-item"><img src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%232563EB' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' text-anchor='middle' dy='.3em' fill='white'%3E🎓%3C/text%3E%3C/svg%3E"} alt="School Event 1"/></div>
              <div className="gallery-item"><img src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%2310B981' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' text-anchor='middle' dy='.3em' fill='white'%3E⚽%3C/text%3E%3C/svg%3E"} alt="School Event 2"/></div>
              <div className="gallery-item"><img src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23F59E0B' width='300' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' text-anchor='middle' dy='.3em' fill='white'%3E🎨%3C/text%3E%3C/svg%3E"} alt="School Event 3"/></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
