import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
export const ErrandContext = createContext();

// Create a provider component
export const ErrandProvider = ({ children, value }) => {
  const [errands, setErrands] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for development
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockErrands = [
        {
          id: '1',
          title: 'Grocery Shopping',
          description: 'Buy groceries for the week including fruits, vegetables, and dairy products',
          status: 'pending',
          priority: 'high',
          dueDate: '2025-07-15',
          createdAt: '2025-07-13',
          category: 'shopping'
        },
        {
          id: '2',
          title: 'Doctor Appointment',
          description: 'Annual health checkup with Dr. Smith',
          status: 'in-progress',
          priority: 'medium',
          dueDate: '2025-07-16',
          createdAt: '2025-07-12',
          category: 'health'
        },
        {
          id: '3',
          title: 'Car Maintenance',
          description: 'Oil change and tire rotation at the service center',
          status: 'completed',
          priority: 'low',
          dueDate: '2025-07-10',
          createdAt: '2025-07-08',
          category: 'maintenance'
        },
        {
          id: '4',
          title: 'Bank Visit',
          description: 'Update account information and discuss loan options',
          status: 'pending',
          priority: 'medium',
          dueDate: '2025-07-18',
          createdAt: '2025-07-13',
          category: 'finance'
        },
        {
          id: '5',
          title: 'Home Cleaning',
          description: 'Deep clean the house including all rooms and bathrooms',
          status: 'in-progress',
          priority: 'low',
          dueDate: '2025-07-14',
          createdAt: '2025-07-11',
          category: 'home'
        }
      ];
      
      setErrands(mockErrands);
      setLoading(false);
    }, 1000);
  }, []);

  const addErrand = (errand) => {
    const newErrand = {
      ...errand,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setErrands(prev => [newErrand, ...prev]);
  };

  const updateErrand = (id, updates) => {
    setErrands(prev => prev.map(errand => 
      errand.id === id ? { ...errand, ...updates } : errand
    ));
  };

  const deleteErrand = (id) => {
    setErrands(prev => prev.filter(errand => errand.id !== id));
  };

  const contextValue = {
    errands,
    setErrands,
    loading,
    setLoading,
    addErrand,
    updateErrand,
    deleteErrand,
    ...value
  };

  return (
    <ErrandContext.Provider value={contextValue}>
      {children}
    </ErrandContext.Provider>
  );
};

// Custom hook to use the context
export const useErrand = () => {
  const context = useContext(ErrandContext);
  if (!context) {
    throw new Error('useErrand must be used within an ErrandProvider');
  }
  return context;
};
