import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrandContext } from '../context/ErrandContext';

const CreateErrand = () => {
  const navigate = useNavigate();
  const { addErrand } = useContext(ErrandContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general',
    priority: 'medium',
    dueDate: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addErrand(formData);
      navigate('/errands');
    } catch (error) {
      console.error('Error creating errand:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: 'var(--aws-font-size-3xl)', fontWeight: '700', marginBottom: '8px' }}>
        Create New Errand
      </h1>
      <p style={{ color: 'var(--aws-color-text-secondary)', marginBottom: '32px' }}>
        Add a new errand to your task list
      </p>

      <div className="aws-card" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="aws-card-body">
            <div className="aws-form-group">
              <label className="aws-label">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="aws-input"
                required
                placeholder="Enter errand title"
              />
            </div>

            <div className="aws-form-group">
              <label className="aws-label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="aws-input aws-textarea"
                placeholder="Describe your errand in detail"
                rows="4"
              />
            </div>

            <div className="aws-form-group">
              <label className="aws-label">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="aws-input aws-select"
              >
                <option value="general">General</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
                <option value="finance">Finance</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>

            <div className="aws-form-group">
              <label className="aws-label">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="aws-input aws-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="aws-form-group">
              <label className="aws-label">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="aws-input"
              />
            </div>
          </div>

          <div className="aws-card-footer">
            <button
              type="button"
              onClick={() => navigate('/errands')}
              className="aws-button aws-button-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="aws-button aws-button-primary"
            >
              {loading ? (
                <>
                  <div className="aws-spinner" style={{ width: '16px', height: '16px' }}></div>
                  Creating...
                </>
              ) : (
                'Create Errand'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateErrand;
