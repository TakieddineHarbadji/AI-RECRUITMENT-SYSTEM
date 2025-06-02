import React, { useState } from 'react';
import board from '../../assets/images/checkerboard.png';

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // temporary static data
  const testimonials = [
    {
      id: 1,
      text: "Curabitur vitae aliquam risus. Mauris quis vehicula nisi, sed commodo ipsum. Praesent semper diam ut diam elementum, ut scelerisque nibh commodo. Integer faucibus porttitor vehicula. Maecenas venenatis dictum ligula. Orci varius natoque penatibus et magnis dis parturient montes",
      author: "John Wick",
      position: "Creative Director",
      rating: 5
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, felis at finibus faucibus, nunc urna fermentum nisl, nec commodo nunc neque eu nulla. Sed suscipit arcu vitae vehicula sagittis.",
      author: "Jane Smith",
      position: "Marketing Manager",
      rating: 5
    },
    {
      id: 3,
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sollicitudin auctor ipsum. Fusce aliquet odio et nisi cursus, ut ultrices odio tempor.",
      author: "Robert Johnson",
      position: "Senior Developer",
      rating: 5
    }
  ];
  
  const handlePrev = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const renderStars = (count) => {
    return Array(count).fill(0).map((_, index) => (
      <svg key={index} className="star" viewBox="0 0 24 24" width="20" height="20">
        <path 
          fill="#FFA500" 
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    ));
  };
  
  return (
    <section className="testimonial-section">
      <img className='checkerboard-background' src={board} alt="image" />
      
      <div className="container-test">
        <div className="content-wrapper-test">
          <span className="section-label-test">Testimonial</span>
          <h2 className="section-title-test">What our people says</h2>
          
          <div className="testimonial-content">
            <div className="rating">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>
            
            <p className="testimonial-text">
              "{testimonials[currentTestimonial].text}"
            </p>
            
            <div className="author-info">
              <div className="author-details">
                <h4 className="author-name">{testimonials[currentTestimonial].author}</h4>
                <p className="author-position">{testimonials[currentTestimonial].position}</p>
              </div>
              
              <div className="quote-mark">
                "
              </div>
            </div>
            
            <div className="navigation-buttons">
              <button 
                className="nav-button prev" 
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                className="nav-button next" 
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonial-section {
          position: relative;
          padding: 5rem 1.5rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #ffffff;
          overflow: hidden;
        }
        
        .checkerboard-background {
          position: absolute;
          left: 0;
          top: 0;
          width: 40%;
          height: 100%;
          background-image: 
            linear-gradient(45deg, #000 25%, transparent 25%),
            linear-gradient(-45deg, #000 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #000 75%),
            linear-gradient(-45deg, transparent 75%, #000 75%);
          background-size: 100px 100px;
          background-position: 0 0, 0 50px, 50px -50px, -50px 0px;
          z-index: 1;
        }
        
        .container-test {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          z-index: 2;
        }
        
        .content-wrapper-test {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          max-width: 650px;
          width: 100%;
        }
        
        .section-label-test {
          color: #3182ce;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .section-title-test {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 2rem;
          color: #1a202c;
        }
        
        .testimonial-content {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          position: relative;
        }
        
        .rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        
        .testimonial-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 2rem;
        }
        
        .author-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        
        .author-details {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          color: #2d3748;
        }
        
        .author-position {
          font-size: 0.875rem;
          color: #718096;
          margin: 0;
        }
        
        .quote-mark {
          font-size: 5rem;
          line-height: 0;
          color: #e2e8f0;
          font-family: Georgia, serif;
          margin-bottom: 1rem;
        }
        
        .navigation-buttons {
          display: flex;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .nav-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f7fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #3182ce;
        }
        
        .nav-button:hover {
          background-color: #3182ce;
          color: white;
          border-color: #3182ce;
        }
        
        @media (max-width: 768px) {
          .checkerboard-background {
            width: 100%;
            height: 200px;
          }
          
          .content-wrapper-test {
            margin-top: 150px;
          }
          
          .testimonial-content {
            padding: 1.5rem;
          }
          
          .section-title-test {
            font-size: 1.75rem;
          }
          
          .quote-mark {
            font-size: 4rem;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .checkerboard-background {
            width: 50%;
          }
          
          .content-wrapper-test {
            margin-left: auto;
            max-width: 60%;
          }
        }
      `}</style>
    </section>
  );
}