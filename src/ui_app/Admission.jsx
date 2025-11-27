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

        {/* Online Admission Form (converted from admission.html) */}
        <section style={{padding: 'var(--space-3xl) var(--space-lg)', backgroundColor: 'var(--bg-secondary)'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-2xl)'}}>Online Admission Form</h2>
            <div style={{maxWidth: 700, margin: '0 auto', backgroundColor: 'var(--bg-primary)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)'}}>
              <form style={{display: 'flex', flexDirection: 'column'}}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span style={{color: 'var(--danger-red)'}}>*</span></label>
                  <input type="text" id="fullName" name="fullName" required minLength={3} />
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Date of Birth <span style={{color: 'var(--danger-red)'}}>*</span></label>
                  <input type="date" id="dob" name="dob" required />
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender <span style={{color: 'var(--danger-red)'}}>*</span></label>
                  <select id="gender" name="gender" required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="applyingFor">Applying For <span style={{color: 'var(--danger-red)'}}>*</span></label>
                  <select id="applyingFor" name="applyingFor" required>
                    <option value="">Select Class</option>
                    <option value="kg">KG</option>
                    <option value="1">Class I</option>
                    <option value="6">Class VI</option>
                    <option value="9">Class IX</option>
                  </select>
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="parentEmail">Parent Email <span style={{color: 'var(--danger-red)'}}>*</span></label>
                  <input type="email" id="parentEmail" name="parentEmail" required />
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="parentPhone">Parent Phone <span style={{color: 'var(--danger-red)'}}>*</span></label>
                  <input type="tel" id="parentPhone" name="parentPhone" required />
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address <span style={{color: 'var(--danger-red)'}}>*</span></label>
                  <textarea id="address" name="address" required minLength={10}></textarea>
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label>
                    <input type="checkbox" name="terms" required />
                    {' '}I agree to terms and conditions <span style={{color: 'var(--danger-red)'}}>*</span>
                  </label>
                  <span className="error-message"></span>
                </div>

                <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: 'var(--space-md)'}}>Submit Application</button>
              </form>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
