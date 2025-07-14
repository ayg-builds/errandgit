import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="aws-header">
      <Link to="/dashboard" className="aws-header-brand">
        <div className="aws-header-logo">
          E
        </div>
        <span>Errand Assistant</span>
      </Link>
      
      <div className="aws-header-actions">
        <button className="aws-button aws-button-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          Notifications
        </button>
        
        <button className="aws-button aws-button-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Profile
        </button>
        
        <button className="aws-button aws-button-primary">
          Open Console
        </button>
      </div>
    </header>
  );
};

export default Header;
