import React from 'react';
import robotImage from '../assets/illustrations/not-found.png'; // Make sure to have this image in your project
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-text">
          <h1>Oops! Page not found</h1>
          <p>Something went wrong. It's look like the link is broken or the page is removed.</p>
          <div className="error-buttons">
            <button className="home-button"  onClick={() => navigate('/')}>Home</button>
            <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
        <div className="error-image">
          <img src={robotImage} alt="Error robot illustration" />
        </div>
      </div>
      <style jsx>{`
        .error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
}

.error-content {
  display: flex;
  max-width: 1000px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.error-text {
  flex: 1;
  min-width: 300px;
  padding-right: 20px;
}

.error-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.error-text p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.error-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.home-button {
  padding: 10px 25px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #0b5ed7;
}

.back-button {
  padding: 10px 25px;
  background-color: transparent;
  color: #0d6efd;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
}

.back-button:hover {
  color: #0b5ed7;
  text-decoration: underline;
}

.error-image {
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 300px;
}

.error-image img {
  max-width: 100%;
  height: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .error-content {
    flex-direction: column-reverse;
    text-align: center;
  }
  
  .error-text {
    padding-right: 0;
    padding-top: 30px;
  }
  
  .error-buttons {
    justify-content: center;
  }
  
  .error-image {
    margin-bottom: 20px;
  }
  
  .error-text h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .error-text h1 {
    font-size: 1.75rem;
  }
  
  .error-text p {
    font-size: 0.9rem;
  }
}
      `}</style>
    </div>
  );
};

export default ErrorPage;

