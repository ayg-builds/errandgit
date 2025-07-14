import React from 'react';

const AWSQHero = () => {
  return (
    <section className="aws-q-hero">
      <div className="aws-q-hero-content">
        {/* Breadcrumbs */}
        <div className="aws-breadcrumbs">
          <ul>
            <li>
              <a href="/ai">Artificial Intelligence</a>
              <span className="aws-breadcrumb-separator">›</span>
            </li>
            <li>
              <a href="/ai/generative-ai">Generative AI</a>
              <span className="aws-breadcrumb-separator">›</span>
            </li>
            <li>
              <a href="/q">Errand Assistant</a>
            </li>
          </ul>
        </div>

        {/* Hero Grid */}
        <div className="aws-hero-grid">
          {/* Hero Text */}
          <div className="aws-hero-text">
            <h1 className="aws-hero-title">
              Errand Assistant – AI-Powered Task Manager
            </h1>
            <p className="aws-hero-subtitle">
              The most capable AI-powered assistant for managing your daily errands, tasks, and personal productivity with intelligent automation and insights
            </p>
            <a href="/dashboard" className="aws-hero-button">
              Open Errand Dashboard
            </a>
          </div>

          {/* Hero Animation */}
          <div className="aws-hero-animation">
            <div className="aws-hero-animation-placeholder">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="M4.93 4.93l1.41 1.41"/>
                <path d="M17.66 17.66l1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="M6.34 17.66l-1.41 1.41"/>
                <path d="M19.07 4.93l-1.41 1.41"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AWSQHero;
