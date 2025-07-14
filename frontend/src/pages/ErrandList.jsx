import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrandContext } from '../context/ErrandContext';

const ErrandList = () => {
  const { errands, loading, updateErrand, deleteErrand } = useContext(ErrandContext);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredErrands = errands?.filter(errand => {
    const matchesFilter = filter === 'all' || errand.status === filter;
    const matchesSearch = errand.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         errand.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  }) || [];

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateErrand(id, { status: newStatus });
    } catch (error) {
      console.error('Error updating errand:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this errand?')) {
      try {
        await deleteErrand(id);
      } catch (error) {
        console.error('Error deleting errand:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="aws-flex aws-items-center aws-justify-center" style={{ minHeight: '400px' }}>
        <div className="aws-spinner"></div>
        <span style={{ marginLeft: '12px' }}>Loading errands...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: 'var(--aws-font-size-3xl)', fontWeight: '700', marginBottom: '8px' }}>
          All Errands
        </h1>
        <p style={{ color: 'var(--aws-color-text-secondary)', marginBottom: '24px' }}>
          Manage and track all your errands in one place
        </p>
        
        {/* Actions Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Search */}
            <input
              type="text"
              placeholder="Search errands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="aws-input"
              style={{ width: '300px' }}
            />
            
            {/* Filter */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="aws-input aws-select"
              style={{ width: '150px' }}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <Link to="/errands/create" className="aws-button aws-button-primary" style={{ textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            Create New Errand
          </Link>
        </div>
      </div>

      {/* Errands Table */}
      <div className="aws-card">
        {filteredErrands.length > 0 ? (
          <table className="aws-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredErrands.map((errand) => (
                <tr key={errand.id}>
                  <td>
                    <Link 
                      to={`/errands/${errand.id}`} 
                      style={{ 
                        fontWeight: '500', 
                        color: 'var(--aws-color-accent)', 
                        textDecoration: 'none' 
                      }}
                    >
                      {errand.title}
                    </Link>
                  </td>
                  <td style={{ maxWidth: '300px' }}>
                    <div style={{ 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      whiteSpace: 'nowrap' 
                    }}>
                      {errand.description}
                    </div>
                  </td>
                  <td>
                    <span style={{ 
                      textTransform: 'capitalize',
                      padding: '4px 8px',
                      backgroundColor: '#F0F0F0',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      {errand.category}
                    </span>
                  </td>
                  <td>
                    <span className={`aws-badge ${
                      errand.priority === 'high' ? 'aws-badge-error' :
                      errand.priority === 'medium' ? 'aws-badge-warning' :
                      'aws-badge-neutral'
                    }`}>
                      {errand.priority}
                    </span>
                  </td>
                  <td>
                    <select
                      value={errand.status}
                      onChange={(e) => handleStatusChange(errand.id, e.target.value)}
                      className="aws-input aws-select"
                      style={{ minWidth: '120px', fontSize: '12px', padding: '4px 8px' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td>{errand.dueDate}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link 
                        to={`/errands/${errand.id}`}
                        className="aws-button aws-button-secondary"
                        style={{ 
                          textDecoration: 'none', 
                          padding: '4px 8px', 
                          fontSize: '12px',
                          minHeight: 'auto'
                        }}
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(errand.id)}
                        className="aws-button aws-button-error"
                        style={{ 
                          padding: '4px 8px', 
                          fontSize: '12px',
                          minHeight: 'auto'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="aws-card-body aws-text-center" style={{ padding: '60px 20px' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ margin: '0 auto 24px', color: 'var(--aws-color-text-muted)' }}>
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <h3 style={{ marginBottom: '8px', color: 'var(--aws-color-text-secondary)' }}>
              No errands found
            </h3>
            <p style={{ color: 'var(--aws-color-text-muted)', marginBottom: '24px' }}>
              {searchTerm || filter !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Create your first errand to get started'
              }
            </p>
            <Link to="/errands/create" className="aws-button aws-button-primary" style={{ textDecoration: 'none' }}>
              Create New Errand
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrandList;
