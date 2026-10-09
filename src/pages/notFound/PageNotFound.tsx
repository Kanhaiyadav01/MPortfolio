import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import './PageNotFound.css';

export const PageNotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="error-card-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-heading">Page Not Found</h2>
        <p className="error-desc">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-return-btn">
          <HiArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
