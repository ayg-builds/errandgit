// Mock service for errand management
// In a real application, this would make actual API calls

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

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const errandService = {
  // Get all errands
  async getAllErrands() {
    await delay(500);
    return [...mockErrands];
  },

  // Get errand by ID
  async getErrandById(id) {
    await delay(300);
    const errand = mockErrands.find(e => e.id === id);
    if (!errand) {
      throw new Error('Errand not found');
    }
    return errand;
  },

  // Create new errand
  async createErrand(errandData) {
    await delay(500);
    const newErrand = {
      ...errandData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    mockErrands.unshift(newErrand);
    return newErrand;
  },

  // Update errand
  async updateErrand(id, updates) {
    await delay(300);
    const index = mockErrands.findIndex(e => e.id === id);
    if (index === -1) {
      throw new Error('Errand not found');
    }
    mockErrands[index] = { ...mockErrands[index], ...updates };
    return mockErrands[index];
  },

  // Delete errand
  async deleteErrand(id) {
    await delay(300);
    const index = mockErrands.findIndex(e => e.id === id);
    if (index === -1) {
      throw new Error('Errand not found');
    }
    mockErrands.splice(index, 1);
    return { success: true };
  },

  // Get errands by status
  async getErrandsByStatus(status) {
    await delay(400);
    return mockErrands.filter(e => e.status === status);
  },

  // Get errands by category
  async getErrandsByCategory(category) {
    await delay(400);
    return mockErrands.filter(e => e.category === category);
  },

  // Search errands
  async searchErrands(query) {
    await delay(400);
    const lowercaseQuery = query.toLowerCase();
    return mockErrands.filter(e => 
      e.title.toLowerCase().includes(lowercaseQuery) ||
      e.description.toLowerCase().includes(lowercaseQuery) ||
      e.category.toLowerCase().includes(lowercaseQuery)
    );
  }
};
