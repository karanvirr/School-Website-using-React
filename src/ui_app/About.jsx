import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main id="main-content" role="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">About Satluj Public School</h1>
            <p className="hero-subtitle">Nurturing Excellence Since 2024</p>
          </div>
          <div className="hero-background"></div>
        </section>

        <section className="overview-section" style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-primary)'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>Our Story</h2>
            <div style={{maxWidth: 900, margin: '0 auto', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: 18}}>
              <p>Satluj Public School, located in BhagoMajra, Punjab, is a premier educational institution affiliated with the Punjab School Education Board (PSEB). Founded with the vision of providing quality education blended with traditional values, our school has emerged as a beacon of excellence in the region.</p>
              <p style={{marginTop: 'var(--space-lg)'}}>Our institution is committed to developing well-rounded individuals who excel academically, participate actively in co-curricular activities, and contribute positively to society.</p>
            </div>
          </div>
        </section>

        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-secondary)'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>Vision & Mission</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)', maxWidth: 1000, margin: '0 auto'}}>
              <div style={{backgroundColor: 'var(--bg-primary)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--primary-blue)'}}>
                <h3 style={{color: 'var(--primary-blue)', marginBottom: 'var(--space-md)'}}>🎯 Our Vision</h3>
                <p style={{color: 'var(--text-secondary)'}}>To create a learning environment that inspires students to achieve their full potential and become responsible global citizens.</p>
              </div>
              <div style={{backgroundColor: 'var(--bg-primary)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--success-green)'}}>
                <h3 style={{color: 'var(--success-green)', marginBottom: 'var(--space-md)'}}>✨ Our Mission</h3>
                <p style={{color: 'var(--text-secondary)'}}>To provide high-quality education aligned with PSEB curriculum, foster critical thinking, encourage innovation, and nurture values of integrity.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
