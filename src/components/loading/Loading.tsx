import React from 'react';
import './Loading.css';

export const Loading: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <svg className="chip-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="50" height="50" rx="6" stroke="#444" strokeWidth="2" fill="#1a1b1c" />
          <path d="M35 35H65V65H35V35Z" fill="#232326" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="6" fill="#3b82f6" />
          {/* Pin lines */}
          <line x1="25" y1="35" x2="15" y2="35" stroke="#888" strokeWidth="2" />
          <line x1="25" y1="50" x2="15" y2="50" stroke="#888" strokeWidth="2" />
          <line x1="25" y1="65" x2="15" y2="65" stroke="#888" strokeWidth="2" />
          <line x1="75" y1="35" x2="85" y2="35" stroke="#888" strokeWidth="2" />
          <line x1="75" y1="50" x2="85" y2="50" stroke="#888" strokeWidth="2" />
          <line x1="75" y1="65" x2="85" y2="65" stroke="#888" strokeWidth="2" />
        </svg>
        <p className="loading-text">Just a second babe...</p>
      </div>
    </div>
  );
};

export default Loading;
