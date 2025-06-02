import React, { useState } from 'react';
import constractionIllustartion from '../assets/illustrations/constration.png';
import miniLogo from '../assets/images/briefcase 1.png';

export default function UnderConstructionPage() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // Reset form after submission
    setEmail('');
    alert('Thank you for subscribing!');
  };
  
  return (
    <div className="construction-page">
      <header className="header">
        <div className="logo">
          <img src={miniLogo} alt="mini logo" />
          <span className="logo-text">AIRESY</span>
        </div>
      </header>
      
      <main className="main-content">
        <div className="content-container">
          <div className="text-content">
            <h1 className="title">Our website is under construction</h1>
            <p className="description">
              In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum. Durabitur luctus sapien.
            </p>
            
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input" 
                  placeholder="Email Address" 
                  required
                  aria-label="Email Address"
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                  <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          
          <div className="illustration">
            <img 
              src={constractionIllustartion}
              alt="Website under construction illustration" 
              className="construction-image" 
            />
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="social-section">
            <p className="social-title">Follow us</p>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook" className="social-icon facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="social-icon twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="social-icon instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="social-icon youtube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="copyright">
            <p>© {currentYear} AIRESY - Job Portal. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .construction-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        
        .header {
          padding: 1.5rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          color: #1a202c;
          font-weight: 600;
          font-size: 1.125rem;
        }
        
        .briefcase-icon {
          margin-right: 0.5rem;
        }
        
        .main-content {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 2rem 1.5rem;
        }
        
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .text-content {
          margin-bottom: 2rem;
        }
        
        .title {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 1rem;
          color: #1a202c;
        }
        
        .description {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .subscribe-form {
          margin-bottom: 2rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 450px;
        }
        
        .email-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.25rem;
          font-size: 0.95rem;
        }
        
        .subscribe-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #0057b8;
          color: white;
          border: none;
          border-radius: 0.25rem;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .subscribe-button:hover {
          background-color: #004494;
        }
        
        .arrow-icon {
          transition: transform 0.2s ease;
        }
        
        .subscribe-button:hover .arrow-icon {
          transform: translateX(3px);
        }
        
        .illustration {
          display: flex;
          justify-content: center;
        }
        
        .construction-image {
          max-width: 100%;
          height: auto;
        }
        
        .footer {
          margin-top: auto;
          padding: 2rem 1.5rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .social-title {
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
          color: #4a5568;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: #f1f5f9;
          border-radius: 4px;
          color: #4a5568;
          transition: all 0.2s ease;
        }
        
        .social-icon:hover {
          background-color: #0057b8;
          color: white;
        }
        
        .copyright {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        /* Tablet and up */
        @media (min-width: 768px) {
          .content-container {
            flex-direction: row;
            align-items: center;
            gap: 3rem;
          }
          
          .text-content {
            flex: 1;
            margin-bottom: 0;
          }
          
          .illustration {
            flex: 1;
          }
          
          .title {
            font-size: 2.5rem;
          }
          
          .form-group {
            flex-direction: row;
          }
          
          .footer-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .title {
            font-size: 3rem;
          }
          
          .description {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  );
}