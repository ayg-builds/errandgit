import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ activeHref, setActiveHref }) => {
  const location = useLocation();
  
  const navigationItems = [
    {
      section: 'Overview',
      items: [
        { 
          text: 'Dashboard', 
          href: '/dashboard',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
          )
        }
      ]
    },
    {
      section: 'Errands',
      items: [
        { 
          text: 'All Errands', 
          href: '/errands',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/>
              <polyline points="9,11 12,14 22,4"/>
            </svg>
          )
        },
        { 
          text: 'Create New', 
          href: '/errands/create',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
          )
        }
      ]
    },
    {
      section: 'Analytics',
      items: [
        { 
          text: 'Analytics', 
          href: '/analytics',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
            </svg>
          )
        },
        { 
          text: 'Notifications', 
          href: '/notifications',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          )
        }
      ]
    },
    {
      section: 'Account',
      items: [
        { 
          text: 'Profile', 
          href: '/profile',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          )
        },
        { 
          text: 'Settings', 
          href: '/settings',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m17-4a4 4 0 0 1-8 0 4 4 0 0 1 8 0zM7 17a4 4 0 0 1-8 0 4 4 0 0 1 8 0z"/>
            </svg>
          )
        }
      ]
    }
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <nav className="aws-navigation">
      {navigationItems.map((section, sectionIndex) => (
        <div key={sectionIndex} className="aws-nav-section">
          <div className="aws-nav-section-title">
            {section.section}
          </div>
          {section.items.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              to={item.href}
              className={`aws-nav-item ${isActive(item.href) ? 'active' : ''}`}
              onClick={() => setActiveHref(item.href)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
