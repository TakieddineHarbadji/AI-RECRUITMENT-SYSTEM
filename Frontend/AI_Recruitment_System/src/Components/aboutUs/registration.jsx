import React from 'react';

export default function RegistrationSection() {
  return (
    <section className="registration-section">
      <div className="container-registration">
        <div className="registration-options">
          <div className="registration-card candidate-card">
            <h2 className="card-title-registration">Become a Candidate</h2>
            <p className="card-description-reg">
              Cras in massa pellentesque, mollis ligula non, 
              luctus dui. Morbi sed efficitur dolor. Pellentesque 
              augue risus, aliqu.
            </p>
            <a href="/register-candidate" className="register-button">
              Register Now
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
          <div className="registration-card employer-card">
            <h2 className="card-title-registration">Become a Employer</h2>
            <p className="card-description-reg">
              Cras in massa pellentesque, mollis ligula non, 
              luctus dui. Morbi sed efficitur dolor. Pellentesque 
              augue risus, aliqu.
            </p>
            <a href="/register-employer" className="register-button">
              Register Now
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .registration-section {
          padding: 4rem 1.5rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #ffffff;
        }
        
        .container-registration {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .registration-options {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }
        
        .registration-card {
          padding: 2.5rem 2rem;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .candidate-card {
          background-color: #E4E5E8;
        }
        
        .employer-card {
          background-color: #0057b8;
          color: white;
        }
        
        .card-title-registration {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 1rem;
        }
        
        .card-description-reg {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        
        .register-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background-color: white;
          color: #333;
          border-radius: 0.25rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        
        .employer-card .register-button {
          color: #0057b8;
        }
        
        .candidate-card .register-button {
          color: #333;
        }
        
        .register-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .arrow-icon {
          transition: transform 0.2s ease;
        }
        
        .register-button:hover .arrow-icon {
          transform: translateX(3px);
        }
        
        /* Tablet and up */
        @media (min-width: 768px) {
          .registration-options {
            flex-direction: row;
          }
          
          .registration-card {
            flex: 1;
          }
          
          .card-title-registration {
            font-size: 1.75rem;
          }
        }
        
        /* Smaller mobile screens */
        @media (max-width: 480px) {
          .registration-section {
            padding: 3rem 1rem;
          }
          
          .registration-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}