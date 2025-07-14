import React from 'react';

const AWSQContent = () => {
  return (
    <div className="aws-q-content">
      {/* Meet Errand Assistant Section */}
      <div className="aws-content-section">
        <div className="aws-meet-section">
          <div className="aws-meet-content">
            <h2>Meet Errand Assistant</h2>
            <p>
              Errand Assistant is an AI-powered task management system that transforms how you organize and complete your daily tasks. With specialized capabilities for personal productivity, shopping lists, appointment scheduling, and task automation, Errand Assistant helps you stay organized and efficient. Leveraging advanced AI capabilities, you can streamline your daily routines, make better decisions about your time, and be more productive in your personal life.
            </p>
          </div>
          <div className="aws-meet-video">
            <img 
              src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/quickstart/approved/images/3524e0f7728a1d78dd1160d9e7850cc3.d56ffe72f265b1d7e37a11dae977bfb1709b6009.jpeg" 
              alt="Errand Assistant Demo"
            />
            <div className="aws-video-overlay">
              <div className="aws-play-icon"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="aws-content-section">
        <h2 className="aws-section-title">
          Powerful Features for Every Task
        </h2>
        
        <div className="aws-features-grid">
          <div className="aws-feature-card">
            <div className="aws-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/>
                <polyline points="9,11 12,14 22,4"/>
              </svg>
            </div>
            <h3>Smart Task Management</h3>
            <p>
              Organize your errands with intelligent categorization, priority setting, and automated scheduling. Never forget an important task again.
            </p>
          </div>

          <div className="aws-feature-card">
            <div className="aws-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <h3>Time Optimization</h3>
            <p>
              AI-powered scheduling suggestions help you group errands efficiently, saving time and reducing travel between locations.
            </p>
          </div>

          <div className="aws-feature-card">
            <div className="aws-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </div>
            <h3>Smart Reminders</h3>
            <p>
              Get contextual notifications based on your location, time, and preferences. Never miss a deadline or appointment.
            </p>
          </div>

          <div className="aws-feature-card">
            <div className="aws-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
              </svg>
            </div>
            <h3>Productivity Analytics</h3>
            <p>
              Track your completion rates, identify patterns, and get insights to improve your personal productivity over time.
            </p>
          </div>

          <div className="aws-feature-card">
            <div className="aws-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3>Multi-Platform Sync</h3>
            <p>
              Access your errands from any device with real-time synchronization across web, mobile, and desktop applications.
            </p>
          </div>

          <div className="aws-feature-card">
            <div className="aws-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>AI Recommendations</h3>
            <p>
              Get personalized suggestions for task prioritization, optimal timing, and efficient errand routing based on your habits.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="aws-cta-section">
        <div className="aws-content-section">
          <h2 className="aws-cta-title">
            Ready to Transform Your Productivity?
          </h2>
          <p className="aws-cta-subtitle">
            Join thousands of users who have streamlined their daily tasks with Errand Assistant's AI-powered features.
          </p>
          <div className="aws-cta-buttons">
            <a href="/dashboard" className="aws-cta-button-primary">
              Get Started Free
            </a>
            <a href="/demo" className="aws-cta-button-secondary">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSQContent;
