import React from 'react';
import missionIllustartion from '../../assets/illustrations/mission.png';

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="container-mission">
        <div className="content-area-mission">
          <span className="section-label-mission">Our Mission</span>
          <h2 className="section-title-mission">
            Our mission is help people to find the perfect job.
          </h2>
          <p className="section-description-mission">
            Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam 
            metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum 
            maximus nec justo sed maximus.
          </p>
        </div>
        <div className="illustration-area-mission">
          <img 
            src={missionIllustartion} 
            alt="People connecting to find jobs illustration" 
            className="mission-illustration" 
          />
        </div>
      </div>

      <style jsx>{`
        .mission-section {
          padding: 5rem 1.5rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #ffffff;
          overflow: hidden;
        }

        .container-mission {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .content-area-mission {
          max-width: 100%;
          margin-bottom: 3rem;
        }

        .section-label-mission {
          display: block;
          color: #3182ce;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title-mission {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 1.5rem;
          line-height: 1.3;
          color: #1a202c;
        }

        .section-description-mission {
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .illustration-area-mission {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mission-illustration {
          max-width: 100%;
          height: auto;
        }

        /* Medium screens and up */
        @media (min-width: 768px) {
          .section-title-mission {
            font-size: 2.5rem;
          }
          
          .content-area-mission {
            margin-bottom: 4rem;
          }
        }

        /* Large screens and up */
        @media (min-width: 1024px) {
          .mission-section {
            padding: 6rem 2rem;
          }
          
          .container-mission {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 4rem;
          }
          
          .content-area-mission {
            flex: 0 0 45%;
            max-width: 45%;
            margin-bottom: 0;
          }
          
          .illustration-area-mission {
            flex: 0 0 50%;
            max-width: 50%;
          }
          
          .section-title-mission {
            font-size: 2.75rem;
          }
        }
      `}</style>
    </section>
  );
}