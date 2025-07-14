import React from 'react';

const ErrandContent = () => {
  return (
    <div className="errand-content">
      {/* Meet Errand Assistant Section */}
      <div className="errand-content-section">
        <div className="errand-meet-section">
          <div className="errand-meet-content">
            <h2>Meet Errand Assistant</h2>
            <p>
              Errand Assistant is an AI-powered task management system that transforms how you organize and complete your daily tasks. With specialized capabilities for personal productivity, shopping lists, appointment scheduling, and task automation, Errand Assistant helps you stay organized and efficient. Leveraging advanced AI capabilities, you can streamline your daily routines, make better decisions about your time, and be more productive in your personal life.
            </p>
          </div>
          <div className="errand-meet-video">
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
                <div>Errand Assistant Demo</div>
                <div style={{ fontSize: '14px', opacity: '0.8', marginTop: '8px' }}>
                  See how AI transforms task management
                </div>
              </div>
            </div>
            <div className="errand-video-overlay">
              <div className="errand-play-icon"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Stories Section - Stacked Cards with AWS Q Transitions */}
      <div className="errand-content-section">
        <div className="errand-stories-section">
          <h2 className="errand-section-title">
            Users transforming their productivity with Errand Assistant
          </h2>
          
          <div className="errand-stacked-cards-container">
            <div className="errand-stacked-cards-wrapper">
              <div className="errand-story-card-stack" data-card="sarah">
                <div className="errand-story-card active" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  <div className="errand-story-content">
                    <h3>Sarah reduces task completion time by 45% with Errand Assistant</h3>
                    <p>Marketing professional streamlines her daily routine and never misses important appointments</p>
                    <a href="#" className="errand-story-link">
                      Learn more →
                    </a>
                  </div>
                  <div className="errand-story-logo">
                    <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/business-application/approved/images/49140467-1771-4ce6-8f59-66af6d8deb01.15107eeb976c94a414cdc91f1d2401db22c8616a.png" alt="Sarah's Story" />
                  </div>
                </div>
              </div>
              
              <div className="errand-story-card-stack" data-card="mike">
                <div className="errand-story-card" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                  <div className="errand-story-content">
                    <h3>Learn how Mike streamlines grocery shopping with smart lists</h3>
                    <p>Busy parent saves 3 hours per week with automated shopping list management and route optimization</p>
                    <a href="#" className="errand-story-link">
                      Learn more →
                    </a>
                  </div>
                  <div className="errand-story-logo">
                    <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/business-application/approved/images/acd63ad6-4ba2-4384-bf28-5d0380c408aa.31ff3962db39a0e68edcb1b7d8066111e4df9cb1.png" alt="Mike's Story" />
                  </div>
                </div>
              </div>
              
              <div className="errand-story-card-stack" data-card="jennifer">
                <div className="errand-story-card" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                  <div className="errand-story-content">
                    <h3>Jennifer scales her home management with AI automation</h3>
                    <p>Working mom manages household tasks efficiently with intelligent scheduling and reminders</p>
                    <a href="#" className="errand-story-link">
                      Learn more →
                    </a>
                  </div>
                  <div className="errand-story-logo">
                    <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/business-application/approved/images/409629b8-ffcd-433b-8f95-54d8fcef6769.a22d83fbba56d8de84b6f9baad6343b55b1f0004.png" alt="Jennifer's Story" />
                  </div>
                </div>
              </div>
              
              <div className="errand-story-card-stack" data-card="david">
                <div className="errand-story-card" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                  <div className="errand-story-content">
                    <h3>David expedites appointment scheduling with smart calendar integration</h3>
                    <p>Healthcare professional manages complex scheduling with automated conflict resolution</p>
                    <a href="#" className="errand-story-link">
                      Learn more →
                    </a>
                  </div>
                  <div className="errand-story-logo">
                    <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/quantum-technologies/approved/images/6652a25b213f107570345d6325dd03e4.a7cc6b4ca9e21310429cc0141541daa71c01de70.png" alt="David's Story" />
                  </div>
                </div>
              </div>
              
              <div className="errand-story-card-stack" data-card="lisa">
                <div className="errand-story-card" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                  <div className="errand-story-content">
                    <h3>Lisa reduces errand planning time by 60% using location intelligence</h3>
                    <p>Real estate agent optimizes daily routes and maximizes productivity with smart task grouping</p>
                    <a href="#" className="errand-story-link">
                      Learn more →
                    </a>
                  </div>
                  <div className="errand-story-logo">
                    <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/developer-tools/approved/images/29966737-009b-c0c4-509c-fe0b117162b8.ec75e569541f67c8097480700c90d7902b11b644.png" alt="Lisa's Story" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="errand-story-navigation">
              <button className="errand-story-nav-dot active" data-target="sarah"></button>
              <button className="errand-story-nav-dot" data-target="mike"></button>
              <button className="errand-story-nav-dot" data-target="jennifer"></button>
              <button className="errand-story-nav-dot" data-target="david"></button>
              <button className="errand-story-nav-dot" data-target="lisa"></button>
            </div>
            
            {/* Card Selection Buttons */}
            <div className="errand-card-selectors">
              <button className="errand-card-selector active" data-card="0">Sarah's Story</button>
              <button className="errand-card-selector" data-card="1">Mike's Story</button>
              <button className="errand-card-selector" data-card="2">Jennifer's Story</button>
              <button className="errand-card-selector" data-card="3">David's Story</button>
              <button className="errand-card-selector" data-card="4">Lisa's Story</button>
            </div>
          </div>
        </div>
      </div>

      {/* Media Cards Grid - Feature tiles */}
      <div className="errand-content-section">
        <h2 className="errand-section-title">
          Powerful features for every task
        </h2>
        
        <div className="errand-media-grid">
          <div className="errand-media-card">
            <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/analytics/approved/images/747b62e265bf4ae92bc8c5d54304a8cb.edac38944cd5dff266923de7b002b4b3f1a197db.png" alt="Smart Task Management" />
            <div className="errand-media-card-content">
              <h3>Smart Task Management</h3>
              <p>Organize your errands with intelligent categorization and priority setting</p>
            </div>
          </div>
          
          <div className="errand-media-card">
            <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/analytics/approved/images/2440eef36f5441cd6c5cd39db20e65ab.afbb4b3a20f01bc2c1baa17ae71e4ad4a6065a3e.png" alt="Time Optimization" />
            <div className="errand-media-card-content">
              <h3>Time Optimization</h3>
              <p>AI-powered scheduling suggestions help you group errands efficiently</p>
            </div>
          </div>
          
          <div className="errand-media-card">
            <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/analytics/approved/images/7c84a59f41ad72c26fc732752c518f3a.97ebf95db424132faefcd6590fd04743984c491a.png" alt="Smart Reminders" />
            <div className="errand-media-card-content">
              <h3>Smart Reminders</h3>
              <p>Get contextual notifications based on your location and preferences</p>
            </div>
          </div>
          
          <div className="errand-media-card">
            <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/analytics/approved/images/0b5eb3ec97c43530178f5bc91b577d84.bf521b4f68876d2d2f0c82023082c0b4d2f27553.png" alt="Analytics Dashboard" />
            <div className="errand-media-card-content">
              <h3>Productivity Analytics</h3>
              <p>Track completion rates and identify patterns to improve productivity</p>
            </div>
          </div>
          
          <div className="errand-media-card">
            <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/analytics/approved/images/a391f61e03309b3b26b8260ffac5708c.58e167a042122b72247fed5e3337ead5f75616b3.png" alt="Multi-Platform Sync" />
            <div className="errand-media-card-content">
              <h3>Multi-Platform Sync</h3>
              <p>Access your errands from any device with real-time synchronization</p>
            </div>
          </div>
          
          <div className="errand-media-card">
            <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/analytics/approved/images/9e07ae04533da4eb4ed145216513ce5c.5fd37fc805eaa335c2cfd25101e4eabef61e3f70.png" alt="AI Recommendations" />
            <div className="errand-media-card-content">
              <h3>AI Recommendations</h3>
              <p>Get personalized suggestions for task prioritization and routing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section - What's New */}
      <div className="errand-carousel-section">
        <h2 className="errand-carousel-title">What's new?</h2>
        
        <div className="errand-carousel">
          <div className="errand-carousel-card">
            <h4>Errand Assistant launches voice command integration</h4>
            <p>Now you can add tasks and set reminders using natural voice commands for hands-free productivity.</p>
            <a href="#" className="errand-carousel-link">
              Learn more →
            </a>
          </div>
          
          <div className="errand-carousel-card">
            <h4>Smart calendar integration now available</h4>
            <p>Seamlessly sync your errands with Google Calendar, Outlook, and Apple Calendar for unified scheduling.</p>
            <a href="#" className="errand-carousel-link">
              Learn more →
            </a>
          </div>
          
          <div className="errand-carousel-card">
            <h4>Location-based reminders enhance user experience</h4>
            <p>Get notified about nearby errands when you're in the area, making your trips more efficient.</p>
            <a href="#" className="errand-carousel-link">
              Learn more →
            </a>
          </div>
          
          <div className="errand-carousel-card">
            <h4>Advanced analytics dashboard provides deeper insights</h4>
            <p>Track your productivity patterns and optimize your daily routines with comprehensive analytics.</p>
            <a href="#" className="errand-carousel-link">
              Learn more →
            </a>
          </div>
        </div>
      </div>

      {/* Deluxe Cards - Main service cards */}
      <div className="errand-content-section">
        <h2 className="errand-section-title">
          Get started with Errand Assistant
        </h2>
        
        <div className="errand-deluxe-cards">
          <div className="errand-deluxe-card">
            <span className="errand-badge">Personal</span>
            <h3>Learn more about Personal Task Management</h3>
            <p>Perfect for individuals looking to organize their daily tasks, appointments, and personal errands with AI-powered assistance.</p>
            <a href="#" className="errand-deluxe-link">
              Visit Personal Dashboard →
            </a>
          </div>
          
          <div className="errand-deluxe-card">
            <span className="errand-badge">Family</span>
            <h3>Learn more about Family Coordination</h3>
            <p>Ideal for families who need to coordinate schedules, share shopping lists, and manage household tasks together.</p>
            <a href="#" className="errand-deluxe-link">
              Visit Family Dashboard →
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="errand-cta-section">
        <div className="errand-content-section">
          <h2 className="errand-cta-title">
            Ready to Transform Your Productivity?
          </h2>
          <p className="errand-cta-subtitle">
            Join thousands of users who have streamlined their daily tasks with Errand Assistant's AI-powered features.
          </p>
          <div className="errand-cta-buttons">
            <a href="/dashboard" className="errand-cta-button-primary">
              Get Started Free
            </a>
            <a href="/demo" className="errand-cta-button-secondary">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrandContent;
