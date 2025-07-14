import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrandContext } from '../context/ErrandContext';

const Dashboard = () => {
  const { errands, loading } = useContext(ErrandContext);
  const [metrics, setMetrics] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0
  });

  useEffect(() => {
    if (errands) {
      const total = errands.length;
      const pending = errands.filter(e => e.status === 'pending').length;
      const inProgress = errands.filter(e => e.status === 'in-progress').length;
      const completed = errands.filter(e => e.status === 'completed').length;
      
      setMetrics({ total, pending, inProgress, completed });
    }
  }, [errands]);

  const recentErrands = errands?.slice(0, 5) || [];

  if (loading) {
    return (
      <div className="aws-flex aws-items-center aws-justify-center" style={{ minHeight: '400px' }}>
        <div className="aws-spinner"></div>
        <span style={{ marginLeft: '12px' }}>Loading dashboard...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="aws-hero">
        <div className="aws-hero-content">
          <h1 className="aws-hero-title">
            Errand Assistant Dashboard
          </h1>
          <p className="aws-hero-subtitle">
            The most capable AI-powered assistant for managing your daily errands and tasks efficiently
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/errands/create" className="aws-button aws-button-primary" style={{ color: 'white', textDecoration: 'none' }}>
              Create New Errand
            </Link>
            <Link to="/errands" className="aws-button aws-button-secondary" style={{ color: 'var(--aws-color-text-primary)', textDecoration: 'none' }}>
              View All Errands
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{ padding: '48px 0' }}>
        <div className="aws-grid aws-grid-cols-4" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="aws-metric-card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="aws-metric-value">{metrics.total}</div>
            <div className="aws-metric-label">Total Errands</div>
          </div>
          
          <div className="aws-metric-card" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <div className="aws-metric-value">{metrics.pending}</div>
            <div className="aws-metric-label">Pending</div>
          </div>
          
          <div className="aws-metric-card" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
            <div className="aws-metric-value">{metrics.inProgress}</div>
            <div className="aws-metric-label">In Progress</div>
          </div>
          
          <div className="aws-metric-card" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
            <div className="aws-metric-value">{metrics.completed}</div>
            <div className="aws-metric-label">Completed</div>
          </div>
        </div>
      </div>

      {/* Recent Errands Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="aws-grid aws-grid-cols-2">
          {/* Recent Errands */}
          <div className="aws-card">
            <div className="aws-card-header">
              <h2 className="aws-card-title">Recent Errands</h2>
              <p className="aws-card-subtitle">Your latest errand activities</p>
            </div>
            <div className="aws-card-body">
              {recentErrands.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {recentErrands.map((errand) => (
                    <div key={errand.id} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '12px',
                      border: '1px solid var(--aws-color-border-light)',
                      borderRadius: 'var(--aws-radius-md)',
                      backgroundColor: '#FAFBFC'
                    }}>
                      <div>
                        <div style={{ fontWeight: '500', marginBottom: '4px' }}>
                          {errand.title}
                        </div>
                        <div style={{ fontSize: '14px', color: 'var(--aws-color-text-secondary)' }}>
                          {errand.description?.substring(0, 50)}...
                        </div>
                      </div>
                      <div>
                        <span className={`aws-badge ${
                          errand.status === 'completed' ? 'aws-badge-success' :
                          errand.status === 'in-progress' ? 'aws-badge-info' :
                          'aws-badge-warning'
                        }`}>
                          {errand.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aws-text-center" style={{ padding: '40px 0', color: 'var(--aws-color-text-secondary)' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ margin: '0 auto 16px' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                  <p>No errands yet. Create your first errand to get started!</p>
                </div>
              )}
            </div>
            <div className="aws-card-footer">
              <Link to="/errands" className="aws-button aws-button-secondary" style={{ textDecoration: 'none' }}>
                View All Errands
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="aws-card">
            <div className="aws-card-header">
              <h2 className="aws-card-title">Quick Actions</h2>
              <p className="aws-card-subtitle">Common tasks and shortcuts</p>
            </div>
            <div className="aws-card-body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link 
                  to="/errands/create" 
                  className="aws-button aws-button-primary" 
                  style={{ textDecoration: 'none', justifyContent: 'flex-start' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </svg>
                  Create New Errand
                </Link>
                
                <Link 
                  to="/analytics" 
                  className="aws-button aws-button-secondary" 
                  style={{ textDecoration: 'none', justifyContent: 'flex-start' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                  </svg>
                  View Analytics
                </Link>
                
                <Link 
                  to="/profile" 
                  className="aws-button aws-button-secondary" 
                  style={{ textDecoration: 'none', justifyContent: 'flex-start' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Manage Profile
                </Link>
                
                <Link 
                  to="/settings" 
                  className="aws-button aws-button-secondary" 
                  style={{ textDecoration: 'none', justifyContent: 'flex-start' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                  </svg>
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
