import React from 'react';
import ThemeToggle from './ThemeToggle';

const AWSHeader = () => {
  return (
    <header className="aws-header">
      <div className="aws-header-content">
        <div className="aws-header-left">
          <a href="/" className="aws-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <rect width="32" height="32" rx="6" fill="#8B5CF6"/>
              <path d="M8 10h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="white"/>
              <circle cx="22" cy="20" r="3" fill="#FF9900"/>
            </svg>
            <span style={{ marginLeft: '12px' }}>Errand Assistant</span>
          </a>
          
          <nav className="aws-header-nav">
            <a href="/dashboard">Dashboard</a>
            <a href="/errands">My Errands</a>
            <a href="/analytics">Analytics</a>
            <a href="/settings">Settings</a>
            <a href="/help">Help</a>
            <a href="/pricing">Pricing</a>
          </nav>
        </div>
        
        <div className="aws-header-right">
          <ThemeToggle />
          <a href="/notifications" className="aws-header-button">
            Notifications
          </a>
          <a href="/dashboard" className="aws-header-button">
            Open Dashboard
          </a>
        </div>
      </div>
    </header>
  );
};

export default AWSHeader;
