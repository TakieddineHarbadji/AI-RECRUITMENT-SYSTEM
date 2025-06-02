import React, { useState } from 'react';

export default function FooterContact() {
  const [year] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };
  
  return (
    <footer className="footer">
      <div className="container-footer">
        {/* Newsletter Subscription & Stats */}
        <div className="newsletter-stats-container-footer">
          <div className="newsletter-container-footer">
            <div className="email-input-container-footer">
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={handleEmailChange}
                className="email-input"
              />
              <button className="subscribe-btn" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="stats-container-footer">
            <div className="stat-item">
              <div className="stat-number">175,324</div>
              <div className="stat-label">Live Job</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">97,354</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">38,47,154</div>
              <div className="stat-label">Candidates</div>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Logo and Contact */}
          <div className="footer-brand">
            <div className="logo-container-footer">
              <div className="icon-container-footer">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zM4 8h16v3H4V8zm0 5h16v7H4v-7z" />
                </svg>
              </div>
              <h2 className="logo-text">MyJob</h2>
            </div>
            <div className="contact-info-footer">
              <div className="phone-container-footer">
                <p className="phone-text">Call now: (319) 555-0115</p>
              </div>
              <p className="address">
                6391 Elgin St. Celina, Delaware 10299, New York, United States of America
              </p>
            </div>
          </div>

          {/* Quick Link */}
          <div className="footer-links-column">
            <h3 className="section-title-footer">Quick Link</h3>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Candidate */}
          <div className="footer-links-column">
            <h3 className="section-title-footer">Candidate</h3>
            <ul className="footer-links">
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Browse Employers</a></li>
              <li><a href="#">Candidate Dashboard</a></li>
              <li><a href="#">Saved Jobs</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div className="footer-links-column">
            <h3 className="section-title-footer">Employers</h3>
            <ul className="footer-links">
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Browse Candidates</a></li>
              <li><a href="#">Employers Dashboard</a></li>
              <li><a href="#">Applications</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links-column">
            <h3 className="section-title-footer">Support</h3>
            <ul className="footer-links">
              <li><a href="#">Faqs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Reset */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        /* Footer Base */
        .footer {
          background-color: #1a202c;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        
        /* Container-footer */
        .container-footer {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Newsletter & Stats Section */
        .newsletter-stats-container-footer {
          display: flex;
          flex-direction: column;
          padding: 1.5rem 0;
        }
        
        @media (min-width: 768px) {
          .newsletter-stats-container-footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        
        /* Email Subscription */
        .newsletter-container-footer {
          margin-bottom: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .newsletter-container-footer {
            margin-bottom: 0;
          }
        }
        
        .email-input-container-footer {
          display: flex;
          max-width: 400px;
        }
        
        .email-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          background-color: #2d3748;
          color: white;
          font-size: 0.875rem;
          border-radius: 4px 0 0 4px;
        }
        
        .email-input::placeholder {
          color: #a0aec0;
        }
        
        .email-input:focus {
          outline: none;
          background-color: #2d3748;
        }
        
        .subscribe-btn {
          padding: 0.75rem 1.5rem;
          background-color: #0066cc;
          color: white;
          border: none;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s;
          border-radius: 0 4px 4px 0;
        }
        
        .subscribe-btn:hover {
          background-color: #0055aa;
        }
        
        /* Stats */
        .stats-container-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: #a0aec0;
        }
        
        /* Divider */
        .footer-divider {
          height: 1px;
          background-color: #2d3748;
          margin: 0.5rem 0;
        }
        
        /* Main Footer Content */
        .footer-main {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 2rem 0;
        }
        
        @media (min-width: 576px) {
          .footer-main {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 768px) {
          .footer-main {
            grid-template-columns: 2fr repeat(3, 1fr);
          }
        }
        
        @media (min-width: 992px) {
          .footer-main {
            grid-template-columns: 2fr repeat(4, 1fr);
          }
        }
        
        /* Brand Section */
        .footer-brand {
          grid-column: 1 / -1;
        }
        
        @media (min-width: 992px) {
          .footer-brand {
            grid-column: 1 / 2;
          }
        }
        
        /* Logo Section */
        .logo-container-footer {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .icon-container-footer {
          margin-right: 0.5rem;
        }
        
        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }
        
        .logo-text {
          font-size: 1.25rem;
          font-weight: bold;
        }
        
        /* Contact Info */
        .contact-info-footer {
          margin-bottom: 1.5rem;
        }
        
        .phone-container-footer {
          margin-bottom: 0.5rem;
        }
        
        .phone-text {
          font-size: 0.875rem;
        }
        
        .address {
          color: #a0aec0;
          font-size: 0.875rem;
          max-width: 300px;
          line-height: 1.5;
        }
        
        /* Footer Links */
        .footer-links-column {
          min-width: 140px;
        }
        
        .section-title-footer {
          font-weight: bold;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.875rem;
        }
        
        .footer-links a:hover {
          color: white;
        }
      `}</style>
    </footer>
  );
}