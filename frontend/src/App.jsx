import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './styles/aws-q-exact-replica.css';

// Import components
import AWSHeader from './components/AWSHeader';
import ErrandHero from './components/ErrandHero';
import ErrandContent from './components/ErrandContent';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="aws-q-app">
          <AWSHeader />
          <Routes>
            <Route path="/" element={
              <>
                <ErrandHero />
                <ErrandContent />
              </>
            } />
            <Route path="/dashboard" element={
              <>
                <ErrandHero />
                <ErrandContent />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
