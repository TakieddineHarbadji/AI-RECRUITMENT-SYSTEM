import React from 'react';


export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container-stats">
        <div className="intro-content-stats">
          <h3 className="section-label-stats">Who we are</h3>
          <h2 className="section-title-stats">We're highly skilled and professionals team.</h2>
          <p className="section-description">
            Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam
            mattis mauris, semper eu eros vitae, blandit tristique metus. Vestibulum
            maximus nisi justo sed maximus.
          </p>
        </div>
        
        <div className="stats-container-stats">
          <div className="stat-card">
            <div className="icon-container-stats">
              <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div className="stat-content">
              <h3 className="stat-number">1,75,324</h3>
              <p className="stat-label">Live Job</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="icon-container-stats">
              <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="stat-content">
              <h3 className="stat-number">97,354</h3>
              <p className="stat-label">Companies</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="icon-container-stats">
              <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="stat-content">
              <h3 className="stat-number">38,47,154</h3>
              <p className="stat-label">Candidates</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          padding: 4rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #ffffff;
        }

        .container-stats {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 992px) {
          .container-stats {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }

        .intro-content-stats {
          margin-bottom: 2rem;
        }

        @media (min-width: 992px) {
          .intro-content-stats {
            flex: 0 0 45%;
            max-width: 45%;
            margin-bottom: 0;
            padding-right: 2rem;
            position: sticky;
            top: 2rem;
          }
        }

        .section-label-stats {
          color: #3182ce;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title-stats {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.3;
          color: #1a202c;
        }

        @media (min-width: 768px) {
          .section-title-stats {
            font-size: 2.25rem;
          }
        }

        .section-description {
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .stats-container-stats {
          display: flex;
          flex-direction: column;
           justify-content: center;
  align-items: center;
          gap: 1.5rem;
        }

        @media (min-width: 992px) {
          .stats-container-stats {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        .stat-card {
          display: flex;
          background-color: #fff;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s, box-shadow 0.3s;
          width: 50%;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
        }

        .icon-container-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          background-color: #ebf4ff;
          border-radius: 0.5rem;
          margin-right: 1rem;
          color: #3182ce;
        }

        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.25rem 0;
        }

        .stat-label {
          color: #718096;
          font-size: 0.875rem;
          margin: 0;
        }
      `}</style>
    </section>
  );
}