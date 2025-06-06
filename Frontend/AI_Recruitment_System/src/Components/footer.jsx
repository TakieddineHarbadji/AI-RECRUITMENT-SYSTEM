import React, { useState } from 'react';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-sections">
          {/* Logo and Contact */}
          <div className="footer-section">
            <div className="logo-container">
              <div className="icon-container">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zM4 8h16v3H4V8zm0 5h16v7H4v-7z" />
                </svg>
              </div>
              <h2 className="logo-text">AIRESY</h2>
            </div>
            <div className="contact-info">
              <div className="phone-container">
                <svg className="phone-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p>Call now: (319) 555-0115</p>
              </div>
              <p className="address">
                6391 Elgin St. Celina, Delaware 10299, New York, United States of America
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Quick Link</h3>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li>
                <a href="#" className="flex-link">
                 Contact
                </a>
              </li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Candidate */}
          <div className="footer-section">
            <h3 className="section-title">Candidate</h3>
            <ul className="footer-links">
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Browse Employers</a></li>
              <li><a href="#">Candidate Dashboard</a></li>
              <li><a href="#">Saved Jobs</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div className="footer-section">
            <h3 className="section-title">Employers</h3>
            <ul className="footer-links">
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Browse Candidates</a></li>
              <li><a href="#">Employers Dashboard</a></li>
              <li><a href="#">Applications</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="section-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#">Faqs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {year} AIRESY - Job Portal. All Rights Reserved
          </p>
          <div className="social-icons">
            <a href="#">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="#">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
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
          background-color: #18191C;
          color: white;
          padding: 2rem 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        
        /* Container */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Footer Sections Layout */
        .footer-sections {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }
        
        @media (min-width: 768px) {
          .footer-sections {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          
          .footer-section {
            flex: 1;
            min-width: 160px;
            margin-right: 1rem;
          }
        }
        
        .footer-section {
          margin-bottom: 1.5rem;
        }
        
        /* Logo Section */
        .logo-container {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .icon-container {
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
        .contact-info {
          font-size: 0.875rem;
        }
        
        .phone-container {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .phone-icon {
          margin-right: 0.5rem;
        }
        
        .address {
          color: #a0aec0;
          font-size: 0.875rem;
          max-width: 300px;
        }
        
        /* Section Titles */
        .section-title {
          font-weight: bold;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        
        /* Footer Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: white;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-links a:hover {
          color: #cbd5e0;
        }
        
        .flex-link {
          display: flex;
          align-items: center;
        }
        
        .arrow {
          margin-right: 0.25rem;
        }
        
        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid #2d3748;
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        
        .copyright {
          color: #a0aec0;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        @media (min-width: 768px) {
          .copyright {
            margin-bottom: 0;
            text-align: left;
          }
        }
        
        /* Social Icons */
        .social-icons {
          display: flex;
        }
        
        .social-icons a {
          color: white;
          margin-left: 1rem;
          transition: color 0.2s ease;
        }
        
        .social-icons a:first-child {
          margin-left: 0;
        }
        
        .social-icons a:hover {
          color: #cbd5e0;
        }
      `}</style>
    </footer>
  );
}