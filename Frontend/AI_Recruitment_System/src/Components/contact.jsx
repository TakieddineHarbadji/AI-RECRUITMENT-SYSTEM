import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-section-cont">
      <div className="contact-content">
        <div className="info-panel-contact">
          <div className="info-text-contact">
            <span className="subtitle-contact">Who we are</span>
            <h2  className="contact-h2">We care about customer services</h2>
            <p  className="contact-par">
              Want to chat? We'd love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
            </p>
            <button className="email-btn">Email Support</button>
          </div>
        </div>
        
        <div className="contact-form-container">
          <div className="contact-form">
            <h3  className="contact-h3">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="send-btn">
                Send Message <span className="send-icon">↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-section-cont {
          width: 100%;
          padding: 60px 20px;
          background-color: #f8f9fa;
          font-family: 'Inter', sans-serif;
        }
        
        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 50px;
          align-items: center;
          justify-content: space-between;
        }
        
        .info-panel-contact {
          flex: 1;
          max-width: 450px;
        }
        
        .info-text-contact {
          display: flex;
          flex-direction: column;
        }
        
        .subtitle-contact {
          color: #0066cc;
          font-size: 1.2rem;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .contact-h2 {
          font-size: 32px;
          font-weight: 700;
          color: #222;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }
        
        .contact-par {
          color: #555;
          line-height: 1.6;
          margin-bottom: 30px;
          font-size: 16px;
        }
        
        .email-btn {
          background-color: #0066cc;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          width: fit-content;
        }
        
        .email-btn:hover {
          background-color: #0055aa;
        }
        
        .contact-form-container {
          flex: 1;
          max-width: 500px;
        }
        
        .contact-form {
          background-color: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        
        .contact-h3 {
          font-size: 22px;
          font-weight: 600;
          color: #222;
          margin: 0 0 25px 0;
        }
        
        .form-row {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }
        
        .form-row input {
          flex: 1;
        }
        
        .form-field {
          margin-bottom: 15px;
        }
        
        input, textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 15px;
          transition: border-color 0.2s;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: #0066cc;
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .send-btn {
          width: 100%;
          background-color: #0066cc;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 14px 20px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .send-btn:hover {
          background-color: #0055aa;
        }
        
        .send-icon {
          margin-left: 8px;
          font-size: 18px;
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .contact-content {
            flex-direction: column;
            gap: 40px;
          }
          
          .info-panel-contact, .contact-form-container {
            max-width: 100%;
          }
        }
        
        @media (max-width: 576px) {
          .form-row {
            flex-direction: column;
            gap: 15px;
          }
          
          h2 {
            font-size: 26px;
          }
          
          .contact-form {
            padding: 20px;
          }
          
          .contact-section-cont {
            padding: 40px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;